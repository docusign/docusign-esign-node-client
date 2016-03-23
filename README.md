# DocuSign Node Client

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]

> [NPM module](https://www.npmjs.com/package/docusign-esign) that wraps the <a href="https://www.docusign.com">DocuSign</a> API

[Documentation about the DocuSign API](https://www.docusign.com/developer-center)

[Documentation about this package](http://docusign.github.io/docusign-node-client)
<!---
[Changelog](./CHANGELOG.md)
commented out
-->

You can sign up for a free [developer sandbox](https://www.docusign.com/developer-center).

============
Requirements
============

Node 0.10 or later.

Installation
============

### NPM Package Manager

Install the client locally:  `npm install docusign-esign --save --save-exact` (note you may have to use `sudo` based on your permissions)

Alternatively you can just copy the source code directly into your project.

#### Dependencies

This client has the following external dependencies:

* superagent 1.7.1

Usage
=====

To initialize the client, make the Login API Call and send a template for signature:

```javascript
var docusign = require('docusign-esign');
var async = require('async');

var integratorKey = '***';                    // Integrator Key associated with your DocuSign Integration
var email = 'YOUR_EMAIL';                     // Email for your DocuSign Account
var password = 'YOUR_PASSWORD';               // Password for your DocuSign Account
var docusignEnv = 'demo';                     // DocuSign Environment generally demo for testing purposes
var fullName = 'Joan Jett';                   // Recipient's Full Name
var recipientEmail = 'joan.jett@example.com'; // Recipient's Email
var templateId = '***';                       // ID of the Template you want to create the Envelope with
var templateRoleName = '***';                 // Role Name of the Template

var baseUrl = 'https://' + docusignEnv + '.docusign.net/restapi';

// initialize the api client
var apiClient = new docusign.ApiClient();
apiClient.setBasePath(baseUrl);

// create JSON formatted auth header
var creds = JSON.stringify({
  Username: email,
  Password: password,
  IntegratorKey: integratorKey
});
apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

// assign api client to the Configuration object
docusign.Configuration.default.setDefaultApiClient(apiClient);

async.waterfall([
  function login (next) {
    // login call available off the AuthenticationApi
    var authApi = new docusign.AuthenticationApi();

    // login has some optional parameters we can set
    var loginOps = new authApi.LoginOptions();
    loginOps.setApiPassword('true');
    loginOps.setIncludeAccountIdGuid('true');
    authApi.login(loginOps, function (err, loginInfo, response) {
      if (err) {
        return next(err);
      }
      if (loginInfo) {
        // list of user account(s)
        // note that a given user may be a member of multiple accounts
        var loginAccounts = loginInfo.getLoginAccounts();
        console.log('LoginInformation: ' + JSON.stringify(loginAccounts));
        next(null, loginAccounts);
      }
    });
  },

  function sendTemplate (loginAccounts, next) {
    // create a new envelope object that we will manage the signature request through
    var envDef = new docusign.EnvelopeDefinition();
    envDef.setEmailSubject('Please sign this document sent from Node SDK');
    envDef.setTemplateId(templateId);

    // create a template role with a valid templateId and roleName and assign signer info
    var tRole = new docusign.TemplateRole();
    tRole.setRoleName(templateRoleName);
    tRole.setName(fullName);
    tRole.setEmail(recipientEmail);

    // create a list of template roles and add our newly created role
    var templateRolesList = [];
    templateRolesList.push(tRole);

    // assign template role(s) to the envelope
    envDef.setTemplateRoles(templateRolesList);

    // send the envelope by setting |status| to 'sent'. To save as a draft set to 'created'
    envDef.setStatus('sent');

    // use the |accountId| we retrieved through the Login API to create the Envelope
    var loginAccount = new docusign.LoginAccount();
    loginAccount = loginAccounts[0];
    var accountId = loginAccount.accountId;

    // instantiate a new EnvelopesApi object
    var envelopesApi = new docusign.EnvelopesApi();

    // call the createEnvelope() API
    envelopesApi.createEnvelope(accountId, envDef, null, function (err, envelopeSummary, response) {
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

See [CoreRecipes.js](./test/Recipes/CoreRecipes.js) for more examples.

Testing
=======

Unit tests are available in the [Test](./test) folder.

Support
=======

Feel free to log issues against this client through GitHub.  We also have an active developer community on Stack Overflow, search the [DocuSignAPI](http://stackoverflow.com/questions/tagged/docusignapi) tag.

License
=======

The DocuSign Node Client is licensed under the following [License](LICENSE).

Notes
=======

This version of the client library does not implement all of the DocuSign REST API methods. The current client omits methods in the Accounts, Billing, Cloud Storage, Connect, Groups (Branding), and Templates (Bulk Recipients) categories. The client's methods support the core set of use cases that most integrations will encounter. For a complete list of omitted endpoints, see [Omitted Endpoints](./omitted_endpoints.md).

[npm-image]: https://img.shields.io/npm/v/docusign-esign.svg?style=flat
[npm-url]: https://npmjs.org/package/docusign-esign
[downloads-image]: https://img.shields.io/npm/dm/docusign-esign.svg?style=flat
[downloads-url]: https://npmjs.org/package/docusign-esign
[travis-image]: https://img.shields.io/travis/docusign/docusign-node-client.svg?style=flat
[travis-url]: https://travis-ci.org/docusign/docusign-node-client
 
