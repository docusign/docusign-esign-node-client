var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
var assert = require('assert');
var path = require('path');
var axios = require('axios');

var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');
const { ValidatePdf } = require('./helpers');

var userName = config.email;
var privateKey = config.privateKey;
var integratorKey = config.integratorKey;
var integratorKeyAuthCode = config.integratorKeyAuthCode;
var templateId = config.templateId;

// for production environment update to "www.docusign.net/restapi"
var basePath = restApi.BasePath.DEMO;
var oAuthBasePath = oAuth.BasePath.DEMO;

var SignTest1File = 'docs/SignTest1.pdf';
var brandLogoPath = 'img/docusign-lgo.png';
var brandXmlPath = 'docs/brand.xml';
var accountId = '';
var envelopeId = '';
var userId = config.userId;
var RedirectURI = 'https://www.docusign.com/api';
var privateKeyFilename = 'keys/docusign_private_key.txt';
var expiresIn = 3600;

if (privateKey) {
  var buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(privateKey, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(privateKey, 'base64'); // Ta-da
  }

  var text = buf.toString('ascii');
  fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('SDK Unit Tests:', function (done) {
  var apiClient = new docusign.ApiClient({
    basePath: basePath,
    oAuthBasePath: oAuthBasePath
  });
  var scopes = [
    oAuth.Scope.IMPERSONATION,
    oAuth.Scope.SIGNATURE
  ];

  before(function (done) {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(integratorKey, RedirectURI, oAuthBasePath);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (res) {
        var baseUri,
          accountDomain;
        apiClient.setJWTToken(res.body.access_token);

        // console.log(apiClient.getUserInfo(res.body.access_token));
        apiClient.getUserInfo(res.body.access_token)
          .then(function (userInfo) {
            accountId = userInfo.accounts[0].accountId;
            baseUri = userInfo.accounts[0].baseUri;
            accountDomain = baseUri.split('/v2');
            apiClient.setBasePath(accountDomain[0] + '/restapi');
            // console.log('LoginInformation: ' + JSON.stringify(userInfo));
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
      })
      .catch(function (err) {
        if (err) {
          return done(err);
        }
      });
  });
  it('oAuthBasePAth should update whenever BasePath does and match the environment', function (done) {
    var apiClient = new docusign.ApiClient({
      basePath: restApi.BasePath.DEMO
    });
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);
    assert.notEqual(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.PRODUCTION);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.DEMO);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);

    return done();
  });
  /**
   *
   * New OAuth Methods Tests Start
   *
   */
  it('should be able to request a JWT user token', function (done) {
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (response) {
        assert.ok(response.body.access_token);
        done();
      })
      .catch(function (err) {
        return done(err);
      });
  });

  it('should be able to request a JWT application token', function (done) {
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));

    apiClient.requestJWTApplicationToken(integratorKey, scopes, privateKeyFile, expiresIn)
      .then(function (response) {
        assert.ok(response.body.access_token);
        done();
      }).catch(function (err) {
        return done(err);
      });
  });
  it('should be able to log in with authorization code grant', function (done) {
    /*
    var responseType = apiClient.OAuth.ResponseType.CODE; // Here we specify a response type of code, retrieving a single use auth code to be used to request a token
    var scopes = [apiClient.OAuth.Scope.EXTENDED];
    var randomState = '*^.$DGj*)+}Jk'; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match
    var authUri = apiClient.getAuthorizationUri(IntegratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);// get DocuSign OAuth authorization url

    // Open DocuSign OAuth login in a browser, res being your node.js response object.
     res.redirect(authUri);

    // IMPORTANT: after the login, DocuSign will send back a fresh
    // authorization code as a query param of the redirect URI.
    // You should set up a route that handles the redirect call to get
    // that code and pass it to token endpoint as shown in the next
    // lines:
    var code = '<once_you_get_the_oauth_code_put_it_here>'
    apiClient.generateAccessToken(IntegratorKeyAuthCode, ClientSecret, code)
      .then(function(oAuthToken){
        assert.equal(err, undefined);
        assert.notEqual(oAuthToken, undefined);
        assert.notEqual(oAuthToken.accessToken, undefined);
        assert.ok(oAuthToken.expiresIn > 0);

        console.log(oAuthToken);

        apiClient.getUserInfo(oAuthToken.accessToken)
          .then(function(userInfo){
            assert.equal(err, undefined);
            assert.notEqual(userInfo, undefined);
            assert.notEqual(userInfo.accounts, undefined);
            assert.ok(userInfo.accounts.length > 0);

            console.log("UserInfo: " + userInfo);
            // parse first account's basePath
            // below code required for production, no effect in demo (same
            // domain)
            apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
            return done(oAuthToken)

          })
          .catch(function(err){
            return done(err);
          });
      })
      .catch(function(err){
        return done(err);
      });
    */

    done(); // You will want to comment this line when uncommenting line 80
  });

  it('should be able to log in with implicit grant', function (done) {
    /*
    var responseType = apiClient.OAuth.ResponseType.TOKEN; // Here we specify a response type of 'token', retrieving our oauth token directly
    var scopes = [apiClient.OAuth.Scope.EXTENDED];
    var randomState = '*^.$DGj*)+}Jk'; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match
    var authUri = apiClient.getAuthorizationUri(IntegratorKeyImplicit, scopes, RedirectURI, responseType, randomState); // get DocuSign OAuth authorization url

    // Open DocuSign OAuth login in a browser, res being your node.js response object.
      res.redirect(authUri);

    // IMPORTANT: after the login, DocuSign will send back a new
    // access token in the hash fragment of the redirect URI.
    // You should set up a client-side handler that handles window.location change to get
    // that token and pass it to the ApiClient object as shown in the next
    // lines:

    var token = '<once_you_get_the_oauth_token_put_it_here>';
    // now that the API client has an OAuth token, let's use it in all
    // DocuSign APIs

   apiClient.getUserInfo(token)
     .then(function(userInfo){
       assert.equal(err, undefined);
       assert.notEqual(userInfo, undefined);
       assert.notEqual(userInfo.accounts, undefined);
       assert.ok(userInfo.accounts.length > 0);

       console.log("UserInfo: " + userInfo);
       // parse first account's basePath
       // below code required for production, no effect in demo (same
       // domain)
       apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
       return done(userInfo)

     })
     .catch(function(err){
       return done(err);
     });
    */
    done(); // You will want to comment this line when uncommenting line 118
  });

  it('should return a properly formatted authorization uri', function (done) {
    var responseType = apiClient.OAuth.ResponseType.CODE;
    var scopes = [apiClient.OAuth.Scope.EXTENDED];
    var randomState = '*^.$DGj*)+}Jk';
    var formattedScopes = scopes.join(encodeURI(' '));
    var authUri;
    var correctAuthUri;
    authUri = apiClient.getAuthorizationUri(integratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);
    correctAuthUri = 'https://' +
      oAuthBasePath +
      '/oauth/auth' +
      '?response_type=' + responseType +
      '&scope=' + formattedScopes +
      '&client_id=' + integratorKeyAuthCode +
      '&redirect_uri=' + encodeURIComponent(RedirectURI) +
      (randomState ? '&state=' + encodeURIComponent(randomState) : '');

    assert.equal(authUri, correctAuthUri);
    done();
  });

  it('should return an authorization uri to a valid page', function (done) {
    var responseType = apiClient.OAuth.ResponseType.CODE;
    var scopes = [apiClient.OAuth.Scope.EXTENDED];
    var randomState = '*^.$DGj*)+}Jk';
    var authUri = apiClient.getAuthorizationUri(integratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);

    axios.get(authUri)
      .then(function (res) {
        assert.equal(res.status, 200);
        done();
      })
      .catch((err) => {
        assert.notEqual(err, undefined);
      });
  });

  /**
   *
   * New Oauth Methods Tests End
   *
   */

  it('requestASignature', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log('Exception: ' + ex);
    }

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    var signer = new docusign.Signer();
    signer.email = userName;
    signer.name = 'Pat Developer';
    signer.recipientId = '1';

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    var signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then(function (envelopeSummary) {
        // console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        assert.equal(envelopeSummary && Object.keys(envelopeSummary).length > 0, true);
        envelopeId = envelopeSummary.envelopeId;
        envelopesApi.updateRecipients(accountId, envelopeId, { recipients: envDef.recipients })
          .then(function (data) {
            done();
          })
          .catch(function (error) {
            return done(error);
          });
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });
  // deprecated
  // it('bulkEnvelope update recipients', function (done) {
  //   var bulkEnvelopesApi = new docusign.BulkEnvelopesApi(apiClient);
  //   var bulkRecipients = [{ name: 'test User1', email: 'test1@mailinator.com' }, {
  //     name: 'test User2',
  //     email: 'test2@mailinator.com'
  //   }, { name: 'test User3', email: 'test3@mailinator.com' }];
  //   var fileBytes = null;
  //   try {
  //     var fs = require('fs');
  //     // read file from a local directory
  //     fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
  //   } catch (ex) {
  //     // handle error
  //     // console.log('Exception: ' + ex);
  //   }
  //
  //   // create an envelope to be signed
  //   var envDef = new docusign.EnvelopeDefinition();
  //   envDef.emailSubject = 'Please Sign my Node SDK Envelope';
  //   envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';
  //
  //   // add a document to the envelope
  //   var doc = new docusign.Document();
  //   var base64Doc = Buffer.from(fileBytes).toString('base64');
  //   doc.documentBase64 = base64Doc;
  //   doc.name = 'TestFile.pdf';
  //   doc.documentId = '1';
  //
  //   var docs = [];
  //   docs.push(doc);
  //   envDef.documents = docs;
  //
  //   // Add a recipient to sign the document
  //   var signer = new docusign.Signer();
  //   signer.email = userName;
  //   signer.name = 'Pat Developer';
  //   signer.recipientId = '1';
  //
  //   // create a signHere tab somewhere on the document for the signer to sign
  //   // default unit of measurement is pixels, can be mms, cms, inches also
  //   var signHere = new docusign.SignHere();
  //   signHere.documentId = '1';
  //   signHere.pageNumber = '1';
  //   signHere.recipientId = '1';
  //   signHere.xPosition = '100';
  //   signHere.yPosition = '100';
  //
  //   // can have multiple tabs, so need to add to envelope as a single element list
  //   var signHereTabs = [];
  //   signHereTabs.push(signHere);
  //   var tabs = new docusign.Tabs();
  //   tabs.signHereTabs = signHereTabs;
  //   signer.tabs = tabs;
  //
  //   // Above causes issue
  //   envDef.recipients = new docusign.Recipients();
  //   envDef.recipients.signers = [];
  //   envDef.recipients.signers.push(signer);
  //
  //   // send the envelope (otherwise it will be "created" in the Draft folder
  //
  //   var envelopesApi = new docusign.EnvelopesApi(apiClient);
  //
  //   envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
  //     .then(function (envelopeSummary) {
  //       if (envelopeSummary) {
  //         console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
  //         envelopeId = envelopeSummary.envelopeId;
  //         console.log(bulkRecipients);
  //         csvStringify(bulkRecipients, { header: true }, function (err, bulkRecipientsRequest) {
  //           if (err) {
  //             return done(err);
  //           }
  //           console.log(bulkRecipientsRequest);
  //           var byteArray = Buffer.from(bulkRecipientsRequest);
  //           console.log(byteArray);
  //
  //           bulkEnvelopesApi.updateRecipients(byteArray, accountId, envelopeId, '1')
  //             .then(function (data) {
  //               assert.equal(data.bulkRecipientsCount, bulkRecipients.length);
  //               done();
  //             })
  //             .catch(function (err) {
  //               console.log(err);
  //               done(err);
  //             });
  //         });
  //       }
  //     })
  //     .catch(function (error) {
  //       if (error) {
  //         return done(error);
  //       }
  //     });
  // });
  it('requestSignatureFromTemplate', function (done) {
    var templateRoleName = 'Needs to sign';

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // / assign template information including ID and role(s)
    envDef.templateId = templateId;

    // create a template role with a valid templateId and roleName and assign signer info
    var tRole = new docusign.TemplateRole();
    tRole.roleName = templateRoleName;
    tRole.name = 'Pat Developer';
    tRole.email = userName;

    // create a list of template roles and add our newly created role
    var templateRolesList = [];
    templateRolesList.push(tRole);

    // assign template role(s) to the envelope
    envDef.templateRoles = templateRolesList;

    // send the envelope by setting |status| to "sent". To save as a draft set to "created"
    envDef.status = 'sent';

    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then(function (envelopeSummary) {
        // console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        assert.notEqual(envelopeSummary, {});
        done();
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });

  it('embeddedSigning', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log('Exception: ' + ex);
    }

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    var signer = new docusign.Signer();
    signer.email = userName;
    var name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    var clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    var signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then(function (envelopeSummary) {
        if (envelopeSummary) {
          // console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
          var returnUrl = 'http://www.docusign.com/developer-center';
          var recipientView = new docusign.RecipientViewRequest();
          recipientView.returnUrl = returnUrl;
          recipientView.clientUserId = clientUserId;
          recipientView.authenticationMethod = 'email';
          recipientView.userName = name;
          recipientView.email = userName;
          envelopesApi.createRecipientView(accountId, envelopeSummary.envelopeId, { recipientViewRequest: recipientView })
            .then(function (viewUrl) {
              if (viewUrl) {
                console.log('ViewUrl is ' + JSON.stringify(viewUrl));
                done();
              }
            })
            .catch(function (error) {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });

  it('createTemplate', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log('Exception: ' + ex);
    }

    // create an envelope to be signed
    var template = new docusign.EnvelopeTemplate();
    template.emailSubject = 'Please Sign my Node SDK Envelope';
    template.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    template.documents = docs;

    // Add a recipient to sign the document
    var signer = new docusign.Signer();
    signer.roleName = 'Signer1';
    signer.recipientId = '1';

    // Create a SignHere tab somewhere on the document for the signer to sign
    var signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    template.recipients = new docusign.Recipients();
    template.recipients.signers = [];
    template.recipients.signers.push(signer);

    var envTemplate = new docusign.EnvelopeTemplate();
    envTemplate.name = 'myTemplate';
    template.envelopeTemplate = envTemplate;

    var templatesApi = new docusign.TemplatesApi(apiClient);

    templatesApi.createTemplate(accountId, { envelopeTemplate: template })
      .then(function (templateSummary) {
        if (templateSummary) {
          done();
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });

  it('downLoadEnvelopeDocuments', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log('Exception: ' + ex);
    }

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    var signer = new docusign.Signer();
    signer.email = userName;
    var name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    var clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    var signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then(function (envelopeSummary) {
        if (envelopeSummary) {
          console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
          apiClient.addDefaultHeader('Content-Transfer-Encoding', 'base64');
          envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, 'combined')
            .then(function (pdfBytes) {
              apiClient.addDefaultHeader('Content-Transfer-Encoding', undefined);
              if (pdfBytes) {
                try {
                  var fs = require('fs');
                  // download the document pdf
                  var filename = accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf';
                  var tempFile = path.resolve(__dirname, filename);
                  fs.writeFile(tempFile, pdfBytes, 'base64', function (err) {
                    if (err) console.log('Error: ' + err);
                    ValidatePdf(tempFile).then(() => {
                      done();
                    }).catch((error) => {
                      if (error) {
                        return done(error);
                      }
                    });
                  });
                  console.log('Document from envelope ' + envelopeSummary.envelopeId + ' has been downloaded to ' + tempFile);
                } catch (ex) {
                  console.log('Exception: ' + ex);
                }
              }
            })
            .catch(function (error) {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });
  it('listDocuments', function (done) {
    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.listDocuments(accountId, envelopeId)
      .then(function (docsList) {
        if (docsList) {
          assert.equal(envelopeId, docsList.envelopeId);
          console.log('EnvelopeDocumentsResult: ' + JSON.stringify(docsList));

          envelopesApi.listDocuments(accountId, envelopeId)
            .then(function (docsListNoOpt) {
              if (docsListNoOpt) {
                assert.equal(envelopeId, docsListNoOpt.envelopeId);
                assert.equal(JSON.stringify(docsList), JSON.stringify(docsListNoOpt));
                return done();
              }
            })
            .catch(function (error) {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });
  it('listStatusBody', function (done) {
    var envelopesApi = new docusign.EnvelopesApi(apiClient);
    var envelopeIdsRequest = new docusign.EnvelopeIdsRequest();
    envelopeIdsRequest.envelopeIds = [envelopeId];
    envelopesApi.listStatus(accountId, { envelopeIdsRequest: envelopeIdsRequest, envelopeIds: 'request_body' })
      .then(function (data) {
        assert.notEqual(data.envelopes, undefined);
        assert.notEqual(data.envelopes[0].attachmentsUri, undefined);
        assert.notEqual(data.envelopes[0].statusChangedDateTime, undefined);
        done();
      })
      .catch(function (error) {
        return done(error);
      });
  });
  it('listStatusQuery', function (done) {
    var envelopesApi = new docusign.EnvelopesApi(apiClient);
    envelopesApi.listStatusChanges(accountId, { envelopeIds: envelopeId })
      .then(function (data) {
        assert.notEqual(data.envelopes, undefined);
        assert.notEqual(data.envelopes[0].attachmentsUri, undefined);
        assert.notEqual(data.envelopes[0].statusChangedDateTime, undefined);
        done();
      })
      .catch(function (error) {
        return done(error);
      });
  });

  // it('listStatusChangesOptions 70 envelopeIds', function (done) {
  //   console.log('starwars')
  //
  //   var envelopesApi = new docusign.EnvelopesApi(apiClient);
  //   var THIRTY_DAYS_AGO = new Date(new Date().setDate(new Date().getDate()-30));
  //
  //   var options = {
  //     count: "70", fromDate: THIRTY_DAYS_AGO
  //   };
  //   envelopesApi.listStatusChanges(accountId, options)
  //     .then(function (data) {
  //       var envelopIds = data.envelopes.reduce( function( acc, envelope ) {
  //         if (!acc.length) return envelope.envelopeId;
  //         return acc + ', ' + envelope.envelopeId;
  //       }, '');
  //       console.log(envelopIds);
  //       envelopesApi.listStatusChanges(accountId, {envelopeIds: envelopIds})
  //         .then( function(data) {
  //           assert.notEqual(data.envelopes, undefined);
  //           assert.notEqual(data.envelopes[0].attachmentsUri, undefined);
  //           assert.notEqual(data.envelopes[0].statusChangedDateTime, undefined);
  //           done();
  //         }).catch(function (error, resp) {
  //         return done(error);
  //       });;
  //     })
  //     .catch(function (error) {
  //       return done(error);
  //     });
  // });

  it('getDiagnosticLogs', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log('Exception: ' + ex);
    }

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'downLoadEnvelopeDocuments';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    var signer = new docusign.Signer();
    signer.email = userName;
    var name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    var clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    var signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    var diagApi = new docusign.DiagnosticsApi(apiClient);

    var diagSettings = new docusign.DiagnosticsSettingsInformation();
    diagSettings.apiRequestLogging = 'true';
    diagApi.updateRequestLogSettings({ diagnosticsSettingsInformation: diagSettings })
      .then(function (diagnosticsSettingsInformation) {
        if (diagnosticsSettingsInformation) {
          console.log('DiagnosticsSettingsInformation: ' + JSON.stringify(diagnosticsSettingsInformation));

          var envelopesApi = new docusign.EnvelopesApi(apiClient);

          envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
            .then(function (envelopeSummary) {
              if (envelopeSummary) {
                console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
                envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, 'combined')
                  .then(function (pdfBytes) {
                    if (pdfBytes) {
                      try {
                        var fs = require('fs');
                        // download the document pdf
                        var filename = accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf';
                        var tempFile = path.resolve(__dirname, filename);
                        fs.writeFile(tempFile, Buffer.from(pdfBytes, 'binary'), function (err) {
                          if (err) console.log('Error: ' + err);
                          ValidatePdf(tempFile).then(() => {
                            diagApi.listRequestLogs()
                              .then(function (logsList) {
                                if (logsList) {
                                  var requestLogId = logsList.apiRequestLogs[0].requestLogId;
                                  console.log(requestLogId);
                                  diagApi.getRequestLog(requestLogId)
                                    .then(function (diagBytes) {
                                      if (diagBytes) {
                                        try {
                                          var fs = require('fs');
                                          // download the document pdf
                                          var filename = requestLogId + '.txt';
                                          var tempFile = path.resolve(__dirname, filename);
                                          fs.writeFile(tempFile, diagBytes, function (err) {
                                            if (err) console.log('Error: ' + err);
                                          });
                                          console.log('Diagnostics ID ' + requestLogId + ' data has been downloaded to ' + tempFile);
                                          done();
                                        } catch (ex) {
                                          console.log('Exception: ' + ex);
                                          done(ex);
                                        }
                                      }
                                    })
                                    .catch(function (error) {
                                      if (error) {
                                        return done(error);
                                      }
                                    });
                                }
                              })
                              .catch(function (error) {
                                if (error) {
                                  return done(error);
                                }
                              });
                          }).catch(function (error) {
                            if (error) {
                              return done(error);
                            }
                          });
                        });
                        console.log('Document from envelope ' + envelopeSummary.envelopeId + ' has been downloaded to ' + tempFile);
                      } catch (ex) {
                        console.log('Exception: ' + ex);
                      }
                    }
                  })
                  .catch(function (error) {
                    if (error) {
                      return done(error);
                    }
                  });
              }
            })
            .catch(function (error) {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });

  it('getTemplate', function (done) {
    var templatesApi = new docusign.TemplatesApi(apiClient);
    templatesApi.get(accountId, templateId)
      .then(function (envelopeTemplate) {
        if (envelopeTemplate) {
          console.log('EnvelopeTemplate: ' + JSON.stringify(envelopeTemplate));
          templatesApi.get(accountId, templateId)
            .then(function (envelopeTemplateNoOpts) {
              if (envelopeTemplateNoOpts) {
                console.log('EnvelopeTemplate: ' + JSON.stringify(envelopeTemplateNoOpts));
                assert.equal(envelopeTemplateNoOpts.emailSubject, envelopeTemplate.emailSubject);
                done();
              }
            })
            .catch(function (error) {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });

  it('update primary account brandlogo', function (done) {
    var accountsApi = new docusign.AccountsApi(apiClient);
    accountsApi.listBrands(accountId, { includeLogos: true })
      .then(function (brandsData) {
        var currentBrand = brandsData.brands[0];
        var newLogoBytes = fs.readFileSync(path.resolve(__dirname, brandLogoPath));
        accountsApi.deleteBrandLogoByType(accountId, currentBrand.brandId, 'Primary')
          .then(function () {
            accountsApi.updateBrandLogoByType(newLogoBytes, accountId, currentBrand.brandId, 'Primary')
              .then(function () {
                accountsApi.getBrandLogoByType(accountId, currentBrand.brandId, 'Primary')
                  .then(function (brandLogo) {
                    assert.notEqual(brandLogo, undefined);
                    done();
                  });
              });
          })
          .catch(function (error) {
            return done(error);
          });
      });
  });

  it('it updateBrandResourcesByContentType', function (done) {
    var accountsApi = new docusign.AccountsApi(apiClient);
    accountsApi.listBrands(accountId, { includeLogos: true })
      .then(function (brandsData) {
        var currentBrand = brandsData.brands[0];
        var brandXmlBuffer = fs.readFileSync(path.resolve(__dirname, brandXmlPath));
        accountsApi.updateBrandResourcesByContentType(accountId, currentBrand.brandId, 'email', brandXmlBuffer)
          .then(function (data) {
            assert.notEqual(data.createdByUserInfo, undefined);
            assert.notEqual(data.resourcesContentUri, undefined);
            return done();
          })
          .catch(function (error) {
            // console.log(error)
            return done(error);
          });
      })
      .catch(function (error) {
        // console.log(error)
        return done(error);
      });
  });

  it('create template with date and number tabs', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log('Exception: ' + ex);
    }

    // create an envelope to be signed
    var template = new docusign.EnvelopeTemplate();
    template.emailSubject = 'Please Sign my Node SDK Envelope containing DateTabs and NumberTabs';
    template.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    template.documents = docs;

    // Add a recipient to sign the document
    var signer = new docusign.Signer();
    signer.roleName = 'Signer1';
    signer.recipientId = '1';

    var dateTab = new docusign.ModelDate();
    dateTab.documentId = '1';
    dateTab.pageNumber = '1';
    dateTab.recipientId = '1';
    dateTab.initialValue = '12/12/2000';
    dateTab.width = 42;
    dateTab.xPosition = '241';
    dateTab.yPosition = '445';

    var numberTab = new docusign.ModelNumber();
    numberTab.documentId = '1';
    numberTab.pageNumber = '1';
    numberTab.recipientId = '1';
    numberTab.width = 42;
    numberTab.value = '42';
    numberTab.xPosition = '271';
    numberTab.yPosition = '383';
    // can have multiple tabs, so need to add to envelope as a single element list
    var numberTabs = [];
    var dateTabs = [];
    numberTabs.push(numberTab);
    dateTabs.push(dateTab);

    var tabs = new docusign.Tabs();
    tabs.numberTabs = numberTabs;
    tabs.dateTabs = dateTabs;
    signer.tabs = tabs;

    // Above causes issue
    template.recipients = new docusign.Recipients();
    template.recipients.signers = [];
    template.recipients.signers.push(signer);

    var envTemplate = new docusign.EnvelopeTemplate();
    envTemplate.name = 'myTemplate ModelNumber';
    template.envelopeTemplate = envTemplate;

    var templatesApi = new docusign.TemplatesApi(apiClient);

    templatesApi.createTemplate(accountId, { envelopeTemplate: template })
      .then(function (templateSummary) {
        if (templateSummary) {
          console.log('TemplateSummary Number: ' + JSON.stringify(templateSummary));
          templatesApi.getDocumentTabs(accountId, templateSummary.templateId, 1).then(function (template) {
            console.log('TemplateSummary Number: ' + JSON.stringify(template));
            assert.equal(!!template.numberTabs, true);
            assert.equal(!!template.numberTabs.length, true);
            assert.equal(isNaN(template.numberTabs[0]), true);
            assert.equal(typeof (template.numberTabs[0]) === 'number', false);
            assert.equal(!!template.dateTabs, true);
            assert.equal(!!template.dateTabs.length, true);
            return done();
          });
        }
      })
      .catch(function (error) {
        if (error) {
          // console.log('TemplateSummary Number Error: ' + JSON.stringify(templateSummary));
          console.error(error);
          return done(error);
        }
      });
  });

  it('resend envelope with envelope update', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log('Exception: ' + ex);
    }

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    var signer = new docusign.Signer();
    signer.email = userName;
    var name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    var clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    var signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then(function (envelopeSummary) {
        if (envelopeSummary) {
          envelopesApi.update(accountId, envelopeSummary.envelopeId, { resendEnvelope: true })
            .then(function (envelopeUpdateSummary) {
              if (envelopeUpdateSummary) {
                console.log('envelopeUpdateSummary: ' + JSON.stringify(envelopeUpdateSummary));
                done();
              }
            })
            .catch(function (error) {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });

  it('Test Get Form Data', function (done) {
    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.templateId = templateId;

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then(function (envelopeSummary) {
        assert.equal(envelopeSummary && Object.keys(envelopeSummary).length > 0, true);
        envelopeId = envelopeSummary.envelopeId;
        envelopesApi.getFormData(accountId, envelopeId).then(function (envelopeFormData) {
          assert.notStrictEqual(envelopeFormData, undefined);
          assert.notStrictEqual(envelopeFormData.formData, undefined);
          assert.notStrictEqual(envelopeFormData.formData[0], undefined);
          assert.notStrictEqual(envelopeFormData.formData[0].name, undefined);
          assert.notStrictEqual(envelopeFormData.prefillFormData, undefined);
          assert.notStrictEqual(envelopeFormData.prefillFormData.formData, undefined);
          assert.notStrictEqual(envelopeFormData.prefillFormData.formData[0], undefined);
          assert.notStrictEqual(envelopeFormData.prefillFormData.formData[0].name, undefined);
          done();
        })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });
});
