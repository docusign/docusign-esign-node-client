var assert = require('assert');
var docusign = require('../src/index');
var config = require('../test-config.json');

var UserName = config.email;
var Password = config.password;
var IntegratorKey = config.integratorKey;
var TemplateId = config.templateId;

// for production environment update to "www.docusign.net/restapi"
var BaseUrl = 'https://demo.docusign.net/restapi';
var SignTest1File = 'docs/SignTest1.pdf';
var accountId = '';
var envelopeId = '';
var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';

var apiClient = new docusign.ApiClient();
apiClient.setBasePath(BaseUrl);
apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

describe('SDK Unit Tests:', function () {
  it('login', function (done) {
    var authApi = new docusign.AuthenticationApi(apiClient);
    var loginOps = {};
    loginOps.apiPassword = 'true';
    loginOps.includeAccountIdGuid = 'true';
    authApi.login(loginOps, function (error, loginInfo, response) {
      if (error) {
        return done(error);
      }

      if (loginInfo) {
        // list of user account(s)
        // note that a given user may be a member of multiple accounts
        var loginAccounts = loginInfo.loginAccounts;
        console.log('LoginInformation: ' + JSON.stringify(loginAccounts));
        var loginAccount = loginAccounts[0];
        accountId = loginAccount.accountId;
        var baseUrl = loginAccount.baseUrl;
        var accountDomain = baseUrl.split('/v2');

        // below code required for production, no effect in demo (same domain)
        apiClient.setBasePath(accountDomain[0]);
        docusign.Configuration.default.setDefaultApiClient(apiClient);

        console.log('LoginInformation: ' + JSON.stringify(loginAccounts));
        done();
      }
    });
  });

  it('requestASignature', function (done) {
    var fileBytes = null;
    try {
      var fs = require('fs');
      var path = require('path');
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
    var base64Doc = new Buffer(fileBytes).toString('base64');
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
      var path = require('path');
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
    var base64Doc = new Buffer(fileBytes).toString('base64');
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
      var path = require('path');
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
    var base64Doc = new Buffer(fileBytes).toString('base64');
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
      var path = require('path');
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
    var base64Doc = new Buffer(fileBytes).toString('base64');
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
              var path = require('path');
              // download the document pdf
              var filename = accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf';
              var tempFile = path.resolve(__dirname, filename);
              fs.writeFile(tempFile, new Buffer(pdfBytes, 'binary'), function (err) {
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
      var path = require('path');
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
    var base64Doc = new Buffer(fileBytes).toString('base64');
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
                  var path = require('path');
                  // download the document pdf
                  var filename = accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf';
                  var tempFile = path.resolve(__dirname, filename);
                  fs.writeFile(tempFile, new Buffer(pdfBytes, 'binary'), function (err) {
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
                          var path = require('path');
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
