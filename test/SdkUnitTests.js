const assert = require('assert');
const docusign = require('../src/index');
const config = require('../test-config.json');

const UserName = config.email;
const Password = config.password;
const IntegratorKey = config.integratorKey;
const TemplateId = config.templateId;

// for production environment update to "www.docusign.net/restapi"
const BaseUrl = "https://demo.docusign.net/restapi";
const SignTest1File = "/docs/SignTest1.pdf";
var accountId = '';
var envelopeId = '';

describe('SDK Unit Tests:', function() {
    it('login', function(done) {
        var apiClient = new docusign.ApiClient();
        apiClient.setBasePath(BaseUrl);

        const creds = "{\"Username\":\"" + UserName + "\",\"Password\":\"" + Password + "\",\"IntegratorKey\":\"" + IntegratorKey + "\"}";
        apiClient.addDefaultHeader("X-DocuSign-Authentication", creds);
        docusign.Configuration.default.setDefaultApiClient(apiClient);

        var authApi = new docusign.AuthenticationApi();
        var loginOps = new authApi.LoginOptions();
        loginOps.setApiPassword("true");
        loginOps.setIncludeAccountIdGuid("true");
        authApi.login(loginOps, function(error, loginInfo, response) {
            if (error) {
                return done(error);
            }

            if (loginInfo) {
                // list of user account(s)
                // note that a given user may be a member of multiple accounts
                var loginAccounts = loginInfo.getLoginAccounts();
                accountId = loginAccounts[0].accountId;
                console.log("LoginInformation: " + JSON.stringify(loginAccounts));
                done();
            }
        });
    });

    it('requestASignature', function(done) {
        var fileBytes = null;
        try {
            var fs = require('fs'),
                path = require('path');
            // read file from a local directory
            fileBytes = fs.readFileSync(path.resolve(__filename + '/..' + SignTest1File));

        } catch (ex) {
            // handle error
            console.log("Exception: " + ex);
        }

        // create an envelope to be signed
        var envDef = new docusign.EnvelopeDefinition();
        envDef.setEmailSubject("Please Sign my Node SDK Envelope");
        envDef.setEmailBlurb("Hello, Please sign my Node SDK Envelope.");

        // add a document to the envelope
        var doc = new docusign.Document();
        var base64Doc = new Buffer(fileBytes).toString('base64');
        doc.setDocumentBase64(base64Doc);
        doc.setName("TestFile.pdf");
        doc.setDocumentId("1");

        var docs = [];
        docs.push(doc);
        envDef.setDocuments(docs);

        // Add a recipient to sign the document
        var signer = new docusign.Signer();
        signer.setEmail(UserName);
        signer.setName("Pat Developer");
        signer.setRecipientId("1");

        // create a signHere tab somewhere on the document for the signer to sign
        // default unit of measurement is pixels, can be mms, cms, inches also
        var signHere = new docusign.SignHere();
        signHere.setDocumentId("1");
        signHere.setPageNumber("1");
        signHere.setRecipientId("1");
        signHere.setXPosition("100");
        signHere.setYPosition("100");

        // can have multiple tabs, so need to add to envelope as a single element list
        var signHereTabs = [];
        signHereTabs.push(signHere);
        var tabs = new docusign.Tabs();
        tabs.setSignHereTabs(signHereTabs);
        signer.setTabs(tabs);

        // Above causes issue
        envDef.setRecipients(new docusign.Recipients());
        envDef.getRecipients().setSigners([]);
        envDef.getRecipients().getSigners().push(signer);

        // send the envelope (otherwise it will be "created" in the Draft folder
        envDef.setStatus("sent");

        var envelopesApi = new docusign.EnvelopesApi();

        envelopesApi.createEnvelope(accountId, envDef, null, function(error, envelopeSummary, response) {
            if (error) {
                return done(error);
            }

            if (envelopeSummary) {
                console.log("EnvelopeSummary: " + JSON.stringify(envelopeSummary));
                envelopeId = envelopeSummary.envelopeId;
                done();
            }
        });
    });

    it('requestSignatureFromTemplate', function(done) {
        const templateRoleName = "Needs to sign";

        // create an envelope to be signed
        var envDef = new docusign.EnvelopeDefinition();
        envDef.setEmailSubject("Please Sign my Node SDK Envelope");
        envDef.setEmailBlurb("Hello, Please sign my Node SDK Envelope.");

        /// assign template information including ID and role(s)
        envDef.setTemplateId(TemplateId);

        // create a template role with a valid templateId and roleName and assign signer info
        var tRole = new docusign.TemplateRole();
        tRole.setRoleName(templateRoleName);
        tRole.setName("Pat Developer");
        tRole.setEmail(UserName);

        // create a list of template roles and add our newly created role
        var templateRolesList = [];
        templateRolesList.push(tRole);

        // assign template role(s) to the envelope 
        envDef.setTemplateRoles(templateRolesList);

        // send the envelope by setting |status| to "sent". To save as a draft set to "created"
        envDef.setStatus("sent");

        var envelopesApi = new docusign.EnvelopesApi();

        envelopesApi.createEnvelope(accountId, envDef, null, function(error, envelopeSummary, response) {
            if (error) {
                return done(error);
            }

            if (envelopeSummary) {
                console.log("EnvelopeSummary: " + JSON.stringify(envelopeSummary));
                done();
            }
        });
    });

    it('embeddedSigning', function(done) {
        var fileBytes = null;
        try {
            var fs = require('fs'),
                path = require('path');
            // read file from a local directory
            fileBytes = fs.readFileSync(path.resolve(__filename + '/..' + SignTest1File));

        } catch (ex) {
            // handle error
            console.log("Exception: " + ex);
        }

        // create an envelope to be signed
        var envDef = new docusign.EnvelopeDefinition();
        envDef.setEmailSubject("Please Sign my Node SDK Envelope");
        envDef.setEmailBlurb("Hello, Please sign my Node SDK Envelope.");

        // add a document to the envelope
        var doc = new docusign.Document();
        var base64Doc = new Buffer(fileBytes).toString('base64');
        doc.setDocumentBase64(base64Doc);
        doc.setName("TestFile.pdf");
        doc.setDocumentId("1");

        var docs = [];
        docs.push(doc);
        envDef.setDocuments(docs);

        // Add a recipient to sign the document
        var signer = new docusign.Signer();
        signer.setEmail(UserName);
        const name = "Pat Developer";
        signer.setName(name);
        signer.setRecipientId("1");

        // this value represents the client's unique identifier for the signer
        const clientUserId = "2939";
        signer.setClientUserId(clientUserId);

        // create a signHere tab somewhere on the document for the signer to sign
        // default unit of measurement is pixels, can be mms, cms, inches also
        var signHere = new docusign.SignHere();
        signHere.setDocumentId("1");
        signHere.setPageNumber("1");
        signHere.setRecipientId("1");
        signHere.setXPosition("100");
        signHere.setYPosition("100");

        // can have multiple tabs, so need to add to envelope as a single element list
        var signHereTabs = [];
        signHereTabs.push(signHere);
        var tabs = new docusign.Tabs();
        tabs.setSignHereTabs(signHereTabs);
        signer.setTabs(tabs);

        // Above causes issue
        envDef.setRecipients(new docusign.Recipients());
        envDef.getRecipients().setSigners([]);
        envDef.getRecipients().getSigners().push(signer);

        // send the envelope (otherwise it will be "created" in the Draft folder
        envDef.setStatus("sent");

        var envelopesApi = new docusign.EnvelopesApi();

        envelopesApi.createEnvelope(accountId, envDef, null, function(error, envelopeSummary, response) {
            if (error) {
                return done(error);
            }

            if (envelopeSummary) {
                console.log("EnvelopeSummary: " + JSON.stringify(envelopeSummary));
                const returnUrl = "http://www.docusign.com/developer-center";
                var recipientView = new docusign.RecipientViewRequest();
                recipientView.setReturnUrl(returnUrl);
                recipientView.setClientUserId(clientUserId);
                recipientView.setAuthenticationMethod("email");
                recipientView.setUserName(name);
                recipientView.setEmail(UserName);
                envelopesApi.createRecipientView(accountId, envelopeSummary.envelopeId, recipientView, function(error, viewUrl, response) {
                    if (error) {
                        return done(error);
                    }

                    if (viewUrl) {
                        console.log("ViewUrl is " + JSON.stringify(viewUrl));
                        done();
                    }
                });
            }
        });
    });

  /*  it('createTemplate', function(done) {
        var fileBytes = null;
        try {
            var fs = require('fs'),
                path = require('path');
            // read file from a local directory
            fileBytes = fs.readFileSync(path.resolve(__filename + '/..' + SignTest1File));

        } catch (ex) {
            // handle error
            console.log("Exception: " + ex);
        }

        // create an envelope to be signed
        var templateDef = new docusign.EnvelopeTemplate();
        templateDef.setEmailSubject("Please Sign my Node SDK Envelope");
        templateDef.setEmailBlurb("Hello, Please sign my Node SDK Envelope.");

        // add a document to the envelope
        var doc = new docusign.Document();
        var base64Doc = new Buffer(fileBytes).toString('base64');
        doc.setDocumentBase64(base64Doc);
        doc.setName("TestFile.pdf");
        doc.setDocumentId("1");

        var docs = [];
        docs.push(doc);
        templateDef.setDocuments(docs);

        // Add a recipient to sign the document
        var signer = new docusign.Signer();
        signer.setRoleName("Signer1");
        signer.setRecipientId("1");

        // Create a SignHere tab somewhere on the document for the signer to sign
        var signHere = new docusign.SignHere();
        signHere.setDocumentId("1");
        signHere.setPageNumber("1");
        signHere.setRecipientId("1");
        signHere.setXPosition("100");
        signHere.setYPosition("100");

        // can have multiple tabs, so need to add to envelope as a single element list
        var signHereTabs = [];
        signHereTabs.push(signHere);
        var tabs = new docusign.Tabs();
        tabs.setSignHereTabs(signHereTabs);
        signer.setTabs(tabs);

        // Above causes issue
        templateDef.setRecipients(new docusign.Recipients());
        templateDef.getRecipients().setSigners([]);
        templateDef.getRecipients().getSigners().push(signer);

        var envTemplateDef = new docusign.EnvelopeTemplateDefinition();
        envTemplateDef.setName("myTemplate");
        templateDef.setEnvelopeTemplateDefinition(envTemplateDef);

        var templatesApi = new docusign.TemplatesApi();

        templatesApi.createTemplate(accountId, templateDef, function(error, templateSummary, response) {
            if (error) {
                return done(error);
            }

            if (templateSummary) {
                console.log("TemplateSummary: " + JSON.stringify(templateSummary));
                done();
            }
        });
    });
*/
    it('downLoadEnvelopeDocuments', function(done) {
        var fileBytes = null;
        try {
            var fs = require('fs'),
                path = require('path');
            // read file from a local directory
            fileBytes = fs.readFileSync(path.resolve(__filename + '/..' + SignTest1File));

        } catch (ex) {
            // handle error
            console.log("Exception: " + ex);
        }

        // create an envelope to be signed
        var envDef = new docusign.EnvelopeDefinition();
        envDef.setEmailSubject("downLoadEnvelopeDocuments");
        envDef.setEmailBlurb("Hello, Please sign my Node SDK Envelope.");

        // add a document to the envelope
        var doc = new docusign.Document();
        var base64Doc = new Buffer(fileBytes).toString('base64');
        doc.setDocumentBase64(base64Doc);
        doc.setName("TestFile.pdf");
        doc.setDocumentId("1");

        var docs = [];
        docs.push(doc);
        envDef.setDocuments(docs);

        // Add a recipient to sign the document
        var signer = new docusign.Signer();
        signer.setEmail(UserName);
        const name = "Pat Developer";
        signer.setName(name);
        signer.setRecipientId("1");

        // this value represents the client's unique identifier for the signer
        const clientUserId = "2939";
        signer.setClientUserId(clientUserId);

        // create a signHere tab somewhere on the document for the signer to sign
        // default unit of measurement is pixels, can be mms, cms, inches also
        var signHere = new docusign.SignHere();
        signHere.setDocumentId("1");
        signHere.setPageNumber("1");
        signHere.setRecipientId("1");
        signHere.setXPosition("100");
        signHere.setYPosition("100");

        // can have multiple tabs, so need to add to envelope as a single element list
        var signHereTabs = [];
        signHereTabs.push(signHere);
        var tabs = new docusign.Tabs();
        tabs.setSignHereTabs(signHereTabs);
        signer.setTabs(tabs);

        // Above causes issue
        envDef.setRecipients(new docusign.Recipients());
        envDef.getRecipients().setSigners([]);
        envDef.getRecipients().getSigners().push(signer);

        // send the envelope (otherwise it will be "created" in the Draft folder
        envDef.setStatus("sent");

        var envelopesApi = new docusign.EnvelopesApi();

        envelopesApi.createEnvelope(accountId, envDef, null, function(error, envelopeSummary, response) {
            if (error) {
                return done(error);
            }

            if (envelopeSummary) {
                console.log("EnvelopeSummary: " + JSON.stringify(envelopeSummary));
                envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, "combined", function(err, pdfBytes, response) {
                    if (err) {
                        return done(err);
                    }

                    if (pdfBytes) {
                        try {
                            var fs = require('fs'),
                                path = require('path');
                            // download the document pdf
                            var tempFile = path.resolve(__filename + '/../' + accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf');
                            fs.writeFile(tempFile, new Buffer(pdfBytes, 'binary'), function(err) {
                                if (err) console.log("Error: " + err);
                            });
                            console.log("Document from envelope " + envelopeSummary.envelopeId + " has been downloaded to " + tempFile);
                            done();
                        } catch (ex) {
                            console.log("Exception: " + ex);
                        }
                    }
                });
            }
        });
    });

    it('listDocuments', function(done) {
        var envelopesApi = new docusign.EnvelopesApi();

        envelopesApi.listDocuments(accountId, envelopeId, function(error, docsList, response) {
            if (error) {
                return done(error);
            }

            if (docsList) {
                assert.equal(envelopeId, docsList.envelopeId);
                console.log("EnvelopeDocumentsResult: " + JSON.stringify(docsList));
                done();
            }
        });
    });

    it('getDiagnosticLogs', function(done) {
        var fileBytes = null;
        try {
            var fs = require('fs'),
                path = require('path');
            // read file from a local directory
            fileBytes = fs.readFileSync(path.resolve(__filename + '/..' + SignTest1File));

        } catch (ex) {
            // handle error
            console.log("Exception: " + ex);
        }

        // create an envelope to be signed
        var envDef = new docusign.EnvelopeDefinition();
        envDef.setEmailSubject("downLoadEnvelopeDocuments");
        envDef.setEmailBlurb("Hello, Please sign my Node SDK Envelope.");

        // add a document to the envelope
        var doc = new docusign.Document();
        var base64Doc = new Buffer(fileBytes).toString('base64');
        doc.setDocumentBase64(base64Doc);
        doc.setName("TestFile.pdf");
        doc.setDocumentId("1");

        var docs = [];
        docs.push(doc);
        envDef.setDocuments(docs);

        // Add a recipient to sign the document
        var signer = new docusign.Signer();
        signer.setEmail(UserName);
        const name = "Pat Developer";
        signer.setName(name);
        signer.setRecipientId("1");

        // this value represents the client's unique identifier for the signer
        const clientUserId = "2939";
        signer.setClientUserId(clientUserId);

        // create a signHere tab somewhere on the document for the signer to sign
        // default unit of measurement is pixels, can be mms, cms, inches also
        var signHere = new docusign.SignHere();
        signHere.setDocumentId("1");
        signHere.setPageNumber("1");
        signHere.setRecipientId("1");
        signHere.setXPosition("100");
        signHere.setYPosition("100");

        // can have multiple tabs, so need to add to envelope as a single element list
        var signHereTabs = [];
        signHereTabs.push(signHere);
        var tabs = new docusign.Tabs();
        tabs.setSignHereTabs(signHereTabs);
        signer.setTabs(tabs);

        // Above causes issue
        envDef.setRecipients(new docusign.Recipients());
        envDef.getRecipients().setSigners([]);
        envDef.getRecipients().getSigners().push(signer);

        // send the envelope (otherwise it will be "created" in the Draft folder
        envDef.setStatus("sent");

        var diagApi = new docusign.DiagnosticsApi();

        var diagSettings = new docusign.DiagnosticsSettingsInformation();
        diagSettings.setApiRequestLogging("true");
        diagApi.updateRequestLogSettings(diagSettings);

        var envelopesApi = new docusign.EnvelopesApi();

        envelopesApi.createEnvelope(accountId, envDef, null, function(error, envelopeSummary, response) {
            if (error) {
                return done(error);
            }

            if (envelopeSummary) {
                console.log("EnvelopeSummary: " + JSON.stringify(envelopeSummary));
                envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, "combined", function(error, pdfBytes, response) {
                    if (error) {
                        return done(error);
                    }

                    if (pdfBytes) {
                        try {
                            var fs = require('fs'),
                                path = require('path');
                            // download the document pdf
                            var tempFile = path.resolve(__filename + '/../' + accountId + '_' + envelopeSummary.envelopeId + '_combined.pdf');
                            fs.writeFile(tempFile, new Buffer(pdfBytes, 'binary'), function(err) {
                                if (err) console.log("Error: " + err);
                            });
                            console.log("Document from envelope " + envelopeSummary.envelopeId + " has been downloaded to " + tempFile);
                        } catch (ex) {
                            console.log("Exception: " + ex);
                        }
                        diagApi.listRequestLogs(null, function(error, logsList, response) {
                            if (error) {
                                return done(error);
                            }

                            if (logsList) {
                                var requestLogId = logsList.apiRequestLogs[0].requestLogId;
                                console.log(requestLogId);
                                diagApi.getRequestLog(requestLogId, function(error, diagBytes, response) {
                                    if (error) {
                                        return done(error);
                                    }

                                    if (diagBytes) {
                                        try {
                                            var fs = require('fs'),
                                                path = require('path');
                                            // download the document pdf
                                            var tempFile = path.resolve(__filename + '/../' + requestLogId + '.txt');
                                            fs.writeFile(tempFile, diagBytes, function(err) {
                                                if (err) console.log("Error: " + err);
                                            });
                                            console.log("Diagnostics ID " + requestLogId + " data has been downloaded to " + tempFile);
                                            done();
                                        } catch (ex) {
                                            console.log("Exception: " + ex);
                                        }
                                    }
                                });
                            }

                        });
                    }
                });
            }
        });
    });
});
