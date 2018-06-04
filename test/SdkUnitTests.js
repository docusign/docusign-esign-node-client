var docusign = require('../src/index');
var config = require('../test-config.json');

var assert = require('assert');
var path = require('path');
var superagent = require('superagent');

var UserName = config.email;
//var IntegratorKey = config.integratorKey;
//var IntegratorKeyAuthCode = config.integratorKeyAuthCode;
//var IntegratorKeyImplicit = config.integratorKeyImplicit;
//var ClientSecret = config.clientSecret;
var TemplateId = config.templateId;

// for production environment update to "www.docusign.net/restapi"
var BaseUrl = 'https://demo.docusign.net/restapi';
var SignTest1File = 'docs/SignTest1.pdf';
var accountId = '';
var envelopeId = '';
var UserId = config.userId;
var OAuthBaseUrl = 'account-d.docusign.com';
var RedirectURI = 'https://www.docusign.com/api';
var privateKeyFilename = 'keys/docusign_private_key.txt';

describe('SDK Unit Tests:', function (done) {
  var apiClient = new docusign.ApiClient();
  before(function (done) {
    apiClient.setBasePath(BaseUrl);
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(IntegratorKey, RedirectURI, OAuthBaseUrl);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE

    // configure the ApiClient to asynchronously get an access to token and store it
    apiClient.configureJWTAuthorizationFlow(path.resolve(__dirname, privateKeyFilename), OAuthBaseUrl, IntegratorKey, UserId, 3600, function (err, res) {
      if (!err && res.body && res.body.access_token) {
        apiClient.getUserInfo(res.body.access_token, function (err, userInfo) {
          accountId = userInfo.accounts[0].accountId;
          var baseUri = userInfo.accounts[0].baseUri;
          var accountDomain = baseUri.split('/v2');
          // below code required for production, no effect in demo (same domain)
          apiClient.setBasePath(accountDomain[0] + "/restapi");
          console.log('LoginInformation: ' + JSON.stringify(userInfo.accounts));

          done();
        });
      }
    });
  });

  /**
   *
   * New OAuth Methods Tests Start
   *
   */

  it('should be able to log in with authorization code grant', function (done) {
    /*var responseType = apiClient.OAuth.ResponseType.CODE, // Here we specify a response type of code, retrieving a single use auth code to be used to request a token
      scopes = [apiClient.OAuth.Scope.EXTENDED],
      randomState = '*^.$DGj*)+}Jk'; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match
      authUri = apiClient.getAuthorizationUri(IntegratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);// get DocuSign OAuth authorization url

    // Open DocuSign OAuth login in a browser, res being your node.js response object.
     res.redirect(authUri);

    // IMPORTANT: after the login, DocuSign will send back a fresh
    // authorization code as a query param of the redirect URI.
    // You should set up a route that handles the redirect call to get
    // that code and pass it to token endpoint as shown in the next
    // lines:
    //var code = '<once_you_get_the_auth_code_put_it_here>';
    var code = '<once_you_get_the_oauth_code_put_it_here>'
    apiClient.generateAccessToken(IntegratorKeyAuthCode, ClientSecret, code, function(err, oAuthToken){
      assert.equal(err, undefined);
      assert.notEqual(oAuthToken, undefined);
      assert.notEqual(oAuthToken.accessToken, undefined);
      assert.ok(oAuthToken.expiresIn > 0);

      console.log(oAuthToken);

      apiClient.getUserInfo(oAuthToken.accessToken, function(err, userInfo){
        assert.equal(err, undefined);
        assert.notEqual(userInfo, undefined);
        assert.notEqual(userInfo.accounts, undefined);
        assert.ok(userInfo.accounts.length > 0);

        console.log("UserInfo: " + userInfo);
        // parse first account's baseUrl
        // below code required for production, no effect in demo (same
        // domain)
        apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
        done();

      });
    }); */

    done(); // You will want to comment this line when uncommenting line 80
  });

  it('should be able to log in with implicit grant', function (done) {
    /*var responseType = apiClient.OAuth.ResponseType.TOKEN, // Here we specify a response type of 'token', retrieving our oauth token directly
      scopes = [apiClient.OAuth.Scope.EXTENDED],
      randomState = '*^.$DGj*)+}Jk'; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match
      //authUri = apiClient.getAuthorizationUri(IntegratorKeyImplicit, scopes, RedirectURI, responseType, randomState); // get DocuSign OAuth authorization url

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

    apiClient.getUserInfo(token, function(err, userInfo){
      assert.equal(err, undefined);
      assert.notEqual(userInfo, null);
      assert.notEqual(userInfo.accounts, null);
      assert.ok(userInfo.accounts.length > 0);

      console.log("UserInfo: " + userInfo);
      // parse first account's baseUrl
      // below code required for production, no effect in demo (same
      // domain)
      apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
      done();

    });
    */

    done(); // You will want to comment this line when uncommenting line 118
  });

  it('should return a properly formatted authorization uri', function (done) {
    var responseType = apiClient.OAuth.ResponseType.CODE,
      scopes = [apiClient.OAuth.Scope.EXTENDED],
      randomState = '*^.$DGj*)+}Jk',
      formattedScopes = scopes.join(encodeURI(' ')),
      authUri,
      correctAuthUri;

    authUri = apiClient.getAuthorizationUri(IntegratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);
    correctAuthUri = 'https://' +
      OAuthBaseUrl +
      '/oauth/auth' +
      '?response_type=' + responseType +
      '&scope=' + formattedScopes +
      '&client_id=' + IntegratorKeyAuthCode +
      '&redirect_uri=' + encodeURIComponent(RedirectURI) +
      (randomState ? '&state=' + randomState : '');

    assert.equal(authUri, correctAuthUri);
    done();
  });

  it('should return an authorization uri to a valid page', function (done) {
    var responseType = apiClient.OAuth.ResponseType.CODE,
      scopes = [apiClient.OAuth.Scope.EXTENDED],
      randomState = '*^.$DGj*)+}Jk',
      authUri = apiClient.getAuthorizationUri(IntegratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);

    superagent.get(authUri)
      .end(function (err, res) {
        assert.equal(res.statusCode, 200);
        done();
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
    signer.email = UserName;
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
    envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (error, envelopeSummary, response) {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        envelopeId = envelopeSummary.envelopeId;
        done();
      }
    });
  });

  it('requestSignatureFromTemplate', function (done) {
    var templateRoleName = 'Needs to sign';

    // create an envelope to be signed
    var envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // / assign template information including ID and role(s)
    envDef.templateId = TemplateId;

    // create a template role with a valid templateId and roleName and assign signer info
    var tRole = new docusign.TemplateRole();
    tRole.roleName = templateRoleName;
    tRole.name = 'Pat Developer';
    tRole.email = UserName;

    // create a list of template roles and add our newly created role
    var templateRolesList = [];
    templateRolesList.push(tRole);

    // assign template role(s) to the envelope
    envDef.templateRoles = templateRolesList;

    // send the envelope by setting |status| to "sent". To save as a draft set to "created"
    envDef.status = 'sent';

    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (error, envelopeSummary, response) {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        done();
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
    signer.email = UserName;
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

    envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (error, envelopeSummary, response) {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        var returnUrl = 'http://www.docusign.com/developer-center';
        var recipientView = new docusign.RecipientViewRequest();
        recipientView.returnUrl = returnUrl;
        recipientView.clientUserId = clientUserId;
        recipientView.authenticationMethod = 'email';
        recipientView.userName = name;
        recipientView.email = UserName;
        envelopesApi.createRecipientView(accountId, envelopeSummary.envelopeId, {'recipientViewRequest': recipientView}, function (error, viewUrl, response) {
          if (error) {
            return done(error);
          }

          if (viewUrl) {
            console.log('ViewUrl is ' + JSON.stringify(viewUrl));
            done();
          }
        });
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
    var templateDef = new docusign.EnvelopeTemplate();
    templateDef.emailSubject = 'Please Sign my Node SDK Envelope';
    templateDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    var doc = new docusign.Document();
    var base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    var docs = [];
    docs.push(doc);
    templateDef.documents = docs;

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
    templateDef.recipients = new docusign.Recipients();
    templateDef.recipients.signers = [];
    templateDef.recipients.signers.push(signer);

    var envTemplateDef = new docusign.EnvelopeTemplateDefinition();
    envTemplateDef.name = 'myTemplate';
    templateDef.envelopeTemplateDefinition = envTemplateDef;

    var templatesApi = new docusign.TemplatesApi(apiClient);

    templatesApi.createTemplate(accountId, {'envelopeTemplate': templateDef}, function (error, templateSummary, response) {
      if (error) {
        return done(error);
      }

      if (templateSummary) {
        console.log('TemplateSummary: ' + JSON.stringify(templateSummary));
        done();
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
    signer.email = UserName;
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

    envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (error, envelopeSummary, response) {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, 'combined', null, function (err, pdfBytes, response) {
          if (err) {
            return done(err);
          }

          if (pdfBytes) {
            try {
              var fs = require('fs');
              // download the document pdf
              var filename = accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf';
              var tempFile = path.resolve(__dirname, filename);
              fs.writeFile(tempFile, Buffer.from(pdfBytes, 'binary'), function (err) {
                if (err) console.log('Error: ' + err);
              });
              console.log('Document from envelope ' + envelopeSummary.envelopeId + ' has been downloaded to ' + tempFile);
              done();
            } catch (ex) {
              console.log('Exception: ' + ex);
            }
          }
        });
      }
    });
  });

  it('listDocuments', function (done) {
    var envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.listDocuments(accountId, envelopeId, null, function (error, docsList, response) {
      if (error) {
        return done(error);
      }

      if (docsList) {
        assert.equal(envelopeId, docsList.envelopeId);
        console.log('EnvelopeDocumentsResult: ' + JSON.stringify(docsList));
        done();
      }
    });
  });

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
    signer.email = UserName;
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
    diagApi.updateRequestLogSettings({'diagnosticsSettingsInformation': diagSettings}, function (error, diagnosticsSettingsInformation, response) {
      if (error) {
        return done(error);
      }

      if (diagnosticsSettingsInformation) {
        console.log('DiagnosticsSettingsInformation: ' + JSON.stringify(diagnosticsSettingsInformation));

        var envelopesApi = new docusign.EnvelopesApi(apiClient);

        envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (error, envelopeSummary, response) {
          if (error) {
            return done(error);
          }

          if (envelopeSummary) {
            console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
            envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, 'combined', null, function (error, pdfBytes, response) {
              if (error) {
                return done(error);
              }

              if (pdfBytes) {
                try {
                  var fs = require('fs');
                  // download the document pdf
                  var filename = accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf';
                  var tempFile = path.resolve(__dirname, filename);
                  fs.writeFile(tempFile, Buffer.from(pdfBytes, 'binary'), function (err) {
                    if (err) console.log('Error: ' + err);
                  });
                  console.log('Document from envelope ' + envelopeSummary.envelopeId + ' has been downloaded to ' + tempFile);
                } catch (ex) {
                  console.log('Exception: ' + ex);
                }
                diagApi.listRequestLogs(null, function (error, logsList, response) {
                  if (error) {
                    return done(error);
                  }

                  if (logsList) {
                    var requestLogId = logsList.apiRequestLogs[0].requestLogId;
                    console.log(requestLogId);
                    diagApi.getRequestLog(requestLogId, function (error, diagBytes, response) {
                      if (error) {
                        return done(error);
                      }

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
                          return done(ex)
                          console.log('Exception: ' + ex);
                        }
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  });

  it('getTemplate', function (done) {
    var templatesApi = new docusign.TemplatesApi(apiClient);
    templatesApi.get(accountId, TemplateId, null, function (error, envelopeTemplate, response) {

      if (error) {
        return done(error);
      }

      if (envelopeTemplate) {
        console.log('EnvelopeTemplate: ' + JSON.stringify(envelopeTemplate));
        done();
      }
    });
  });
});
