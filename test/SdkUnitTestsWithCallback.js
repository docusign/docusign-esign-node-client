const docusign = require('../src/index');

const restApi = docusign.ApiClient.RestApi;
let config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
const assert = require('assert');
const path = require('path');
const superagent = require('superagent');

const Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
const fs = require('fs');

const {
  USER_NAME,
  INTEGRATOR_KEY,
  INTEGRATOR_KEY_AUTH_CODE,
  TEMPLATE_ID,
  OAUTH_BASE_PATH,
  SING_TEST1_FILE,
  LARGE_TEST_DOCUMENT1,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  apiClient,
  scopes,
} = require('./constants');
let { ACCOUNT_ID, ENVELOPE_ID } = require('./constants');

describe('SDK Unit Tests With Callbacks:', (done) => {
  before((done) => {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    const oauthLoginUrl = apiClient.getJWTUri(INTEGRATOR_KEY, REDIRECT_URI, OAUTH_BASE_PATH);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));
    apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN, (err, res) => {
      let baseUri;
      let accountDomain;
      if (err) {
        return done(err);
      }
      apiClient.addDefaultHeader('Authorization', `Bearer ${res.body.access_token}`);

      apiClient.getUserInfo(res.body.access_token, (err, userInfo) => {
        if (err) {
          return done(err);
        }
        ACCOUNT_ID = userInfo.accounts[0].accountId;
        baseUri = userInfo.accounts[0].baseUri;
        accountDomain = baseUri.split('/v2');
        apiClient.setBasePath(`${accountDomain[0]}/restapi`);
        console.log(`LoginInformation: ${JSON.stringify(userInfo)}`);
        return done();
      });
    });
  });
  it('oAuthBasePAth should update whenever BasePath does and match the environment', (done) => {
    const apiClient = new docusign.ApiClient({
      basePath: restApi.BasePath.DEMO,
    });
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);
    assert.notEqual(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.STAGE);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.STAGE);

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
  it('should be able to request a JWT user token', (done) => {
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));
    try {
      apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN, (err, response) => {
        if (err) {
          return done(err);
        }
        assert.ok(response.body.access_token);
        done();
      });
    } catch (err) {
      return done(err);
    }
  });

  it('should be able to request a JWT application token', (done) => {
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));

    apiClient.requestJWTApplicationToken(INTEGRATOR_KEY, scopes, privateKeyFile, EXPIRES_IN, (err, response) => {
      if (err) {
        return done(err);
      }
      assert.ok(response.body.access_token);
      done();
    });
  });

  it('should return a properly formatted authorization uri', (done) => {
    const responseType = apiClient.OAuth.ResponseType.CODE;
    const scopes = [apiClient.OAuth.Scope.EXTENDED];
    const randomState = '*^.$DGj*)+}Jk';
    const formattedScopes = scopes.join(encodeURI(' '));
    let authUri;
    let correctAuthUri;
    authUri = apiClient.getAuthorizationUri(INTEGRATOR_KEY_AUTH_CODE, scopes, REDIRECT_URI, responseType, randomState);
    correctAuthUri = `https://${
      OAUTH_BASE_PATH
    }/oauth/auth`
      + `?response_type=${responseType
      }&scope=${formattedScopes
      }&client_id=${INTEGRATOR_KEY_AUTH_CODE
      }&redirect_uri=${encodeURIComponent(REDIRECT_URI)
      }${randomState ? `&state=${randomState}` : ''}`;

    assert.equal(authUri, correctAuthUri);
    done();
  });

  it('should return an authorization uri to a valid page', (done) => {
    const responseType = apiClient.OAuth.ResponseType.CODE;
    const scopes = [apiClient.OAuth.Scope.EXTENDED];
    const randomState = '*^.$DGj*)+}Jk';
    const authUri = apiClient.getAuthorizationUri(INTEGRATOR_KEY_AUTH_CODE, scopes, REDIRECT_URI, responseType, randomState);

    superagent.get(authUri)
      .end((err, res) => {
        assert.equal(err, undefined);
        assert.equal(res.statusCode, 200);
        done();
      });
  });

  /**
   *
   * New Oauth Methods Tests End
   *
   */
  it('requestASignature', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = USER_NAME;
    signer.name = 'Pat Developer';
    signer.recipientId = '1';

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, (error, envelopeSummary, response) => {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log(`EnvelopeSummary: ${JSON.stringify(envelopeSummary)}`);
        ENVELOPE_ID = envelopeSummary.envelopeId;
        done();
      }
    });
  });

  it('requestSignatureFromTemplate', (done) => {
    const templateRoleName = 'Needs to sign';

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // / assign template information including ID and role(s)
    envDef.templateId = TEMPLATE_ID;

    // create a template role with a valid TEMPLATE_ID and roleName and assign signer info
    const tRole = new docusign.TemplateRole();
    tRole.roleName = templateRoleName;
    tRole.name = 'Pat Developer';
    tRole.email = USER_NAME;

    // create a list of template roles and add our newly created role
    const templateRolesList = [];
    templateRolesList.push(tRole);

    // assign template role(s) to the envelope
    envDef.templateRoles = templateRolesList;

    // send the envelope by setting |status| to "sent". To save as a draft set to "created"
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, (error, envelopeSummary, response) => {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log(`EnvelopeSummary: ${JSON.stringify(envelopeSummary)}`);
        done();
      }
    });
  });

  it('embeddedSigning', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = USER_NAME;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, (error, envelopeSummary, response) => {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log(`EnvelopeSummary: ${JSON.stringify(envelopeSummary)}`);
        const returnUrl = 'http://www.docusign.com/developer-center';
        const recipientView = new docusign.RecipientViewRequest();
        recipientView.returnUrl = returnUrl;
        recipientView.clientUserId = clientUserId;
        recipientView.authenticationMethod = 'email';
        recipientView.userName = name;
        recipientView.email = USER_NAME;
        envelopesApi.createRecipientView(ACCOUNT_ID, envelopeSummary.envelopeId, { recipientViewRequest: recipientView }, (error, viewUrl, response) => {
          if (error) {
            return done(error);
          }

          if (viewUrl) {
            console.log(`ViewUrl is ${JSON.stringify(viewUrl)}`);
            done();
          }
        });
      }
    });
  });

  it('createTemplate', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const template = new docusign.EnvelopeTemplate();
    template.emailSubject = 'Please Sign my Node SDK Envelope';
    template.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    template.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.roleName = 'Signer1';
    signer.recipientId = '1';

    // Create a SignHere tab somewhere on the document for the signer to sign
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    template.recipients = new docusign.Recipients();
    template.recipients.signers = [];
    template.recipients.signers.push(signer);

    const envTemplate = new docusign.EnvelopeTemplate();
    envTemplate.name = 'myTemplate';
    template.envelopeTemplate = envTemplate;

    const templatesApi = new docusign.TemplatesApi(apiClient);

    templatesApi.createTemplate(ACCOUNT_ID, { envelopeTemplate: template }, (error, templateSummary, response) => {
      if (error) {
        return done(error);
      }

      if (templateSummary) {
        console.log(`TemplateSummary: ${JSON.stringify(templateSummary)}`);
        done();
      }
    });
  });

  it('downLoadEnvelopeDocuments', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, LARGE_TEST_DOCUMENT1));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = USER_NAME;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, (error, envelopeSummary, response) => {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        console.log(`EnvelopeSummary: ${JSON.stringify(envelopeSummary)}`);
        envelopesApi.getDocument(ACCOUNT_ID, envelopeSummary.envelopeId, 'combined', (err, pdfBytes, response) => {
          if (err) {
            return done(err);
          }

          if (pdfBytes) {
            try {
              const fs = require('fs');
              // download the document pdf
              const filename = `${ACCOUNT_ID}_${envelopeSummary.envelopeId}_combined.pdf`;
              const tempFile = path.resolve(__dirname, filename);
              fs.writeFile(tempFile, Buffer.from(pdfBytes, 'binary'), (err) => {
                if (err) console.log(`Error: ${err}`);
              });
              console.log(`Document from envelope ${envelopeSummary.envelopeId} has been downloaded to ${tempFile}`);
              done();
            } catch (ex) {
              console.log(`Exception: ${ex}`);
            }
          }
        });
      }
    });
  });

  it('listDocuments', (done) => {
    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID, (error, docsList, response) => {
      if (error) {
        return done(error);
      }
      if (docsList) {
        assert.equal(ENVELOPE_ID, docsList.envelopeId);
        console.log(`EnvelopeDocumentsResult: ${JSON.stringify(docsList)}`);

        envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID, (error, docsListNoOpt, response) => {
          if (error) {
            return done(error);
          }

          if (docsListNoOpt) {
            assert.equal(ENVELOPE_ID, docsListNoOpt.envelopeId);
            assert.equal(JSON.stringify(docsList), JSON.stringify(docsListNoOpt));
            done();
          }
        });
      }
    });
  });

  it('getDiagnosticLogs', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'downLoadEnvelopeDocuments';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = USER_NAME;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const diagApi = new docusign.DiagnosticsApi(apiClient);

    const diagSettings = new docusign.DiagnosticsSettingsInformation();
    diagSettings.apiRequestLogging = 'true';
    diagApi.updateRequestLogSettings({ diagnosticsSettingsInformation: diagSettings }, (error, diagnosticsSettingsInformation, response) => {
      if (error) {
        return done(error);
      }

      if (diagnosticsSettingsInformation) {
        console.log(`DiagnosticsSettingsInformation: ${JSON.stringify(diagnosticsSettingsInformation)}`);

        const envelopesApi = new docusign.EnvelopesApi(apiClient);

        envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, (error, envelopeSummary, response) => {
          if (error) {
            return done(error);
          }

          if (envelopeSummary) {
            console.log(`EnvelopeSummary: ${JSON.stringify(envelopeSummary)}`);
            envelopesApi.getDocument(ACCOUNT_ID, envelopeSummary.envelopeId, 'combined', null, (error, pdfBytes, response) => {
              if (error) {
                return done(error);
              }

              if (pdfBytes) {
                try {
                  const fs = require('fs');
                  // download the document pdf
                  const filename = `${ACCOUNT_ID}_${envelopeSummary.envelopeId}_combined.pdf`;
                  const tempFile = path.resolve(__dirname, filename);
                  fs.writeFile(tempFile, Buffer.from(pdfBytes, 'binary'), (err) => {
                    if (err) console.log(`Error: ${err}`);
                  });
                  console.log(`Document from envelope ${envelopeSummary.envelopeId} has been downloaded to ${tempFile}`);
                } catch (ex) {
                  console.log(`Exception: ${ex}`);
                }
                diagApi.listRequestLogs(null, (error, logsList, response) => {
                  if (error) {
                    return done(error);
                  }

                  if (logsList) {
                    const { requestLogId } = logsList.apiRequestLogs[0];
                    console.log(requestLogId);
                    diagApi.getRequestLog(requestLogId, (error, diagBytes, response) => {
                      if (error) {
                        return done(error);
                      }

                      if (diagBytes) {
                        try {
                          const fs = require('fs');
                          // download the document pdf
                          const filename = `${requestLogId}.txt`;
                          const tempFile = path.resolve(__dirname, filename);
                          fs.writeFile(tempFile, diagBytes, (err) => {
                            if (err) console.log(`Error: ${err}`);
                          });
                          console.log(`Diagnostics ID ${requestLogId} data has been downloaded to ${tempFile}`);
                          done();
                        } catch (ex) {
                          console.log(`Exception: ${ex}`);
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

  it('getTemplate', (done) => {
    const templatesApi = new docusign.TemplatesApi(apiClient);
    templatesApi.get(ACCOUNT_ID, TEMPLATE_ID, null, (error, envelopeTemplate, response) => {
      if (error) {
        return done(error);
      }

      if (envelopeTemplate) {
        console.log(`EnvelopeTemplate: ${JSON.stringify(envelopeTemplate)}`);
        templatesApi.get(ACCOUNT_ID, TEMPLATE_ID, (error, envelopeTemplateNoOpts, response) => {
          if (error) {
            return done(error);
          }

          if (envelopeTemplateNoOpts) {
            console.log(`EnvelopeTemplate: ${JSON.stringify(envelopeTemplateNoOpts)}`);
            assert.equal(envelopeTemplateNoOpts.emailSubject, envelopeTemplate.emailSubject);
            done();
          }
        });
      }
    });
  });

  it('resend envelope with envelope update', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = USER_NAME;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, (error, envelopeSummary, response) => {
      if (error) {
        return done(error);
      }

      if (envelopeSummary) {
        envelopesApi.update(ACCOUNT_ID, envelopeSummary.envelopeId, { resendEnvelope: true }, (error, envelopeUpdateSummary, response) => {
          if (error) {
            return done(error);
          }

          if (envelopeUpdateSummary) {
            console.log(`envelopeUpdateSummary: ${JSON.stringify(envelopeUpdateSummary)}`);
            done();
          }
        });
      }
    });
  });
});
