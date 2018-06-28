# The Official DocuSign Node Client

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[NPM module](https://www.npmjs.com/package/docusign-esign) that wraps the <a href="https://www.docusign.com">DocuSign</a> API

[Documentation about the DocuSign API](https://developers.docusign.com/)

[Documentation about this package](http://docusign.github.io/docusign-node-client)
<!---
[Changelog](./CHANGELOG.md)
commented out
-->

You can sign up for a free [developer sandbox](https://developers.docusign.com/).

## Requirements

Node 4 or later.

## Installation via the NPM Package Manager

`npm install docusign-esign --save`

## Dependencies

This client has the following external dependencies:
* jsonwebtoken@8.2.0
* passport-oauth2@1.4.0
* superagent@3.8.2

# Usage

## OAuth Authorization Code Grant

See the [Node.JS OAuth Authorization Code Grant flow](https://github.com/docusign/docusign-code-examples/tree/master/node)
example for Node.JS 8.10 or later. It also shows how to use the SDK with promises instead of callback functions.

The following example uses callback functions.

uncomment auth code grant section in test/OAuthClientTests.js, run it and then open http://localhost:3000.
```javascript
const express = require('express');
const docusign = require('docusign-esign');
const apiClient = new docusign.ApiClient();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const integratorKey = 'ae30ea4e-xxxx-xxxx-xxxx-fcb57d2dc4df'; // An IK for a non-mobile docusign account
const clientSecret = 'b4dccdbe-xxxx-xxxx-xxxx-b2f0f7448f8f';
const redirectUri = 'http://localhost:3000/auth'; // This needs to be registered with the integrator key in your admin account
const basePath = 'https://demo.docusign.net/restapi';

const responseType = apiClient.OAuth.ResponseType.CODE; // Response type of code, to be used for the Auth code grant
const scopes = [apiClient.OAuth.Scope.EXTENDED];
const randomState = "*^.$DGj*)+}Jk"; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match

apiClient.setBasePath(basePath);

app.get('/', function (req, res) {
    const authUri = apiClient.getAuthorizationUri(integratorKey, scopes, redirectUri, responseType, randomState);//get DocuSign OAuth authorization url
     //Open DocuSign OAuth login in a browser, res being your node.js response object.
    res.redirect(authUri);
});

app.get('/auth', function (req, res) {
  // IMPORTANT: after the login, DocuSign will send back a fresh
  // authorization code as a query param of the redirect URI.
  // You should set up a route that handles the redirect call to get
  // that code and pass it to token endpoint as shown in the next
  // lines:
  apiClient.generateAccessToken(integratorKey, clientSecret, req.query.code, function (err, oAuthToken) {
    
    console.log(oAuthToken);
    
    //IMPORTANT: In order to access the other api families, you will need to add this auth header to your apiClient.
    apiClient.addDefaultHeader('Authorization', 'Bearer ' + oAuthToken.accessToken);

    apiClient.getUserInfo(oAuthToken.accessToken, function (err, userInfo) {
      console.log("UserInfo: " + userInfo);
      // parse first account's baseUrl
      // below code required for production, no effect in demo (same
      // domain)
      apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
      res.send(userInfo);
    });
  });
});

app.listen(port, host, function (err) {
  if (err)
    throw err;

  console.log('Your server is running on http://' + host + ':' + port + '.');
});
```

## OAuth JSON Web Token (JWT) Grant

See the [Node.JS Service Integration](https://github.com/docusign/eg-01-node-jwt) example for Node 8.10 or later.
It uses the OAuth JWT Grant flow. It also demonstrates how to use the SDK with promises.

The following example can be used with an older version of Node.JS.

```javascript
var docusign = require('docusign-esign');
var async = require('async');
var path = require('path');

var integratorKey = '***';                    // Integrator Key associated with your DocuSign Integration
var userId = 'YOUR_USER_ID';                  // API Username for your DocuSign Account (use the GUID not the email address)
var docusignEnv = 'demo';                     // DocuSign Environment generally demo for testing purposes
var fullName = 'Joan Jett';                   // Recipient's Full Name
var recipientEmail = 'joan.jett@example.com'; // Recipient's Email
var templateId = '***';                       // ID of the Template you want to create the Envelope with
var templateRoleName = '***';                 // Role name of the Recipient for the Template

var baseUrl = 'https://' + docusignEnv + '.docusign.net/restapi';
var oAuthBaseUrl = 'account-d.docusign.com'; // use account.docusign.com for Live/Production
var redirectURI = 'https://www.docusign.com/api';
var privateKeyFilename = 'keys/docusign_private_key.txt'; //path to the file storing the private key from the RSA Keypair associated to the Integrator Key

var apiClient = new docusign.ApiClient();

async.waterfall([
  function initApiClient (next) {
    apiClient.setBasePath(baseUrl);
    // assign the api client to the Configuration object
    docusign.Configuration.default.setDefaultApiClient(apiClient);

    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(integratorKey, redirectURI, oAuthBaseUrl);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE

    // configure the ApiClient to asynchronously get an access to token and store it

    apiClient.configureJWTAuthorizationFlow(path.resolve(__dirname, privateKeyFilename), oAuthBaseUrl, integratorKey, userId, 3600, function (err, res) {
      if (!err && res.body && res.body.access_token) {
        apiClient.getUserInfo(res.body.access_token, function (err, userInfo) {
          accountId = userInfo.accounts[0].accountId;
          var baseUri = userInfo.accounts[0].baseUri;
          var accountDomain = baseUri.split('/v2');
          // below code required for production, no effect in demo (same domain)
          apiClient.setBasePath(accountDomain[0] + "/restapi");
          console.log('LoginInformation: ' + JSON.stringify(userInfo.accounts));

          next(null, userInfo.accounts[0]);
        });
      }
    });
  },

  function sendTemplate (loginAccount, next) {
    // create a new envelope object that we will manage the signature request through
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please sign this document sent from Node SDK';
    envDef.templateId = templateId;

    // create a template role with a valid templateId and roleName and assign signer info
    var tRole = new docusign.TemplateRole();
    tRole.roleName = templateRoleName;
    tRole.name = fullName;
    tRole.email = recipientEmail;

    // create a list of template roles and add our newly created role
    var templateRolesList = [];
    templateRolesList.push(tRole);

    // assign template role(s) to the envelope
    envDef.templateRoles = templateRolesList;

    // send the envelope by setting |status| to 'sent'. To save as a draft set to 'created'
    envDef.status = 'sent';

    // use the |accountId| we retrieved through the Login API to create the Envelope
    var accountId = loginAccount.accountId;

    // instantiate a new EnvelopesApi object
    var envelopesApi = new docusign.EnvelopesApi();

    // call the createEnvelope() API
    envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (err, envelopeSummary, response) {
      if (err) {
        return next(err);
      }
      console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
      next(null);
    });
  }

], function end (error) {
  if (error) {
    console.log('Error: ', error);
    process.exit(1);
  }
  process.exit();
});
```

#### OAuth Implicit Grant
uncomment implicit grant section in test/OAuthClientTests.js, run it and then open http://localhost:3000.

```javascript
const express = require('express');
const docusign = require('docusign-esign');
const apiClient = new docusign.ApiClient();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const integratorKey = '68c1711f-xxxx-xxxx-xxxx-b49b4211d831'; // An IK for a mobile docusign account
const redirectUri = 'http://localhost:3000/auth';
const basePath = 'https://demo.docusign.net/restapi';

const responseType = apiClient.OAuth.ResponseType.TOKEN; // Response type of token, to be used for implicit grant
const scopes = [apiClient.OAuth.Scope.EXTENDED];
const randomState = "*^.$DGj*)+}Jk"; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match

apiClient.setBasePath(basePath);

app.get('/', function (req, res) {
    const authUri = apiClient.getAuthorizationUri(integratorKey, scopes, redirectUri, responseType, randomState);//get DocuSign OAuth authorization url
     //Open DocuSign OAuth login in a browser, res being your node.js response object.
    res.redirect(authUri);
});

app.get('/auth', function (req,res) {
  // IMPORTANT: after the login, DocuSign will send back a new
  // access token in the hash fragment of the redirect URI.
  // You should set up a client-side handler that handles window.location change to get
  // that token and pass it to the ApiClient object as shown in the next
  // lines:
  res.send();
});

app.get('/auth/:accessToken', function (req, res) {
  // This a sample endpoint to allow you to pass in the previously recEIved accesstoken to log in via getUserInfo
  // ex: http://localhost:3000/auth#access_token=<token>&expires_in=<expiresIn>&token_type=<tokenType>&state=<randomState>
  // ex: http://localhost:3000/auth/<token>

  const accessToken = req.params.accessToken;
  
  //IMPORTANT: In order to access the other api families, you will need to add this auth header to your apiClient.
  apiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);
  
  apiClient.getUserInfo(accessToken, function (err, userInfo) {
    if (err)
      console.log(err)

    console.log("UserInfo: " + userInfo);
    // parse first account's baseUrl
    // below code required for production, no effect in demo (same
    // domain)
    apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
    res.send(userInfo);
  });
});

app.listen(port, host, function(err) {
  if (err)
    throw err;

  console.log('Your server is running on http://' + host + ':' + port + '.');
});
```

# The basePath

This section applies to applications which use OAuth for authentication with DocuSign.

The SDK must be configured to use the correct `basePath` for the accredited user's DocuSign account.

To determine the user's basePath:

1. After obtaining a Bearer token, call the
   [OAuth::userInfo endpoint](https://developers.docusign.com/esign-rest-api/guides/authentication/user-info-endpoints).

   The `getUserInfo` method can be used to call the OAuth::userInfo endpoint. See the file
   [ApiClient.js](https://github.com/docusign/docusign-node-client/blob/master/src/ApiClient.js), line 713.

   Use the results to choose the account. One of the user's accounts is their default account.
   The method's results include the selected account's `base_uri` field.

   Note: The host for the OAuth::userInfo method is `account-d.docusign.com` for the demo/developer environment,
   and `account.docusign.com` for the production environments.
1. Combine the base_uri with "/restapi" to create the basePath.
   Use the basePath for your subsequent API calls for the account id.

   You can and should cache the basePath for at least the user's session with your application. It changes very infrequently.
1. Instantiate the SDK using the basePath. Eg `ApiClient apiClient = new ApiClient(basePath);`
1. Create the `authentication_value` by combining the `token_type` and `access_token` fields you
   receive from a DocuSign OAuth flow.
   See the [authentication guide.](https://developers.docusign.com/esign-rest-api/guides/authentication)
1. Set the SDK's authentication header by using `Configuration.Default.AddDefaultHeader('Authorization', authentication_value)`

Testing
=======

Unit tests are available in the [Test](https://github.com/docusign/docusign-node-client/tree/master/test) folder.

Contributing
============

**This SDK is auto-generated from OpenAPI specification file. For that reason, we actually do NOT accept pull requests. If you find a bug or have an idea that you want to see in the SDK, please open a new [issue](https://github.com/docusign/docusign-node-client/issues/new).**

Support
=======

Feel free to log issues against this client through GitHub.  We also have an active developer community on Stack Overflow, search the [DocuSignAPI](http://stackoverflow.com/questions/tagged/docusignapi) tag.

License
=======

The DocuSign Node Client is licensed under the MIT [License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/docusign-esign.svg?style=flat
[npm-url]: https://npmjs.org/package/docusign-esign
[downloads-image]: https://img.shields.io/npm/dm/docusign-esign.svg?style=flat
[downloads-url]: https://npmjs.org/package/docusign-esign
[travis-image]: https://img.shields.io/travis/docusign/docusign-node-client.svg?style=flat
[travis-url]: https://travis-ci.org/docusign/docusign-node-client
[coveralls-image]: https://coveralls.io/repos/github/docusign/DocuSign-Node-Client/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/docusign/DocuSign-Node-Client?branch=master
