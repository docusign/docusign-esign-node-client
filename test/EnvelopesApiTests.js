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
var superagent = require('superagent');

var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');

const {
  USER_NAME,
  PRIVATE_KEY,
  INTEGRATOR_KEY,
  INTEGRATOR_KEY_AUTH_CODE,
  INTEGRATOR_KEY_IMPLICIT,
  CLIENT_SECRET,
  TEMPLATE_ID,
  BASE_PATH,
  OAUTH_BASE_PATH,
  SING_TEST1_FILE,
  SING_TEST2_FILE,
  LARGE_TEST_DOCUMENT1,
  BRAND_LOGO_PATH,
  BRAND_XML_PATH,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  getSignerTabsDefinition,
  apiClient,
  scopes
}=require('./constants')
let {ACCOUNT_ID,ENVELOPE_ID}=require('./constants')

if (PRIVATE_KEY) {
  var buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(PRIVATE_KEY, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(PRIVATE_KEY, 'base64'); // Ta-da
  }

  var text = buf.toString('ascii');
  // fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('EnvelopesApi tests:', function (done) {

  before(function (done) {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(INTEGRATOR_KEY, REDIRECT_URI, OAUTH_BASE_PATH);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));
    apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN)
      .then(function (res) {
        var baseUri,
          accountDomain;
        apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

        // console.log(apiClient.getUserInfo(res.body.access_token));
        apiClient.getUserInfo(res.body.access_token)
          .then(function (userInfo) {
            ACCOUNT_ID = userInfo.accounts[0].accountId;
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

  describe('EnvelopesApi tests:', function () {
    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    it('Get envelope by id', function (done) {
      var fileBytes = null;
      try {
        // read file from a local directory
        fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
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
      var signer1 = new docusign.Signer();
      signer1.email = USER_NAME;
      signer1.name = 'Pat Developer';
      signer1.recipientId = '1';

      var signer2 = new docusign.Signer();
      signer2.email = 'another@email.com';
      signer2.name = 'Pat Manager';
      signer2.recipientId = '2';

      var tabs = getSignerTabsDefinition();
      signer1.tabs = tabs;
      signer2.tabs = tabs;

      // Above causes issue
      envDef.recipients = new docusign.Recipients();
      envDef.recipients.signers = [];
      envDef.recipients.signers.push(signer1, signer2);

      // send the envelope (otherwise it will be "created" in the Draft folder
      envDef.status = 'created';


      envelopesApi.createEnvelope(ACCOUNT_ID, {envelopeDefinition: envDef})
          .then(function (envelopeSummary) {
            assert.notStrictEqual(envelopeSummary, undefined);
            ENVELOPE_ID = envelopeSummary.envelopeId;
            return envelopeSummary;
          })
          .then(function (envelopeSummary) {
            return envelopesApi.getEnvelope(ACCOUNT_ID, envelopeSummary.envelopeId)
          })
          .then(function (envelope) {
            assert.notStrictEqual(envelope, undefined);
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    });

    it('Get envelope recipients', function (done) {

      envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID)
          .then(function (recipients) {
            assert.notStrictEqual(recipients, undefined);

            recipientId = recipients.signers[0].recipientIdGuid
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('Create sender view', function (done) {
      var fileBytes = null;
      try {
        // read file from a local directory
        fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
      } catch (ex) {
        // handle error
        console.log(`Exception: ${ex}`);
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
      signer.email = USER_NAME;
      var name = 'Pat Developer';
      signer.name = name;
      signer.recipientId = '1';

      // this value represents the client's unique identifier for the signer
      var clientUserId = '2939';
      signer.clientUserId = clientUserId;

      var tabs = getSignerTabsDefinition();
      signer.tabs = tabs;

      // Above causes issue
      envDef.recipients = new docusign.Recipients();
      envDef.recipients.signers = [];
      envDef.recipients.signers.push(signer);

      // make the envelope with "created" (draft) status
      envDef.status = 'created';

      envelopesApi.createEnvelope(ACCOUNT_ID, {envelopeDefinition: envDef})
          .then(function (envelopeSummary) {
            var returnUrl = 'http://www.docusign.com/developer-center';
            var returnUrlRequest = new docusign.ReturnUrlRequest();
            returnUrlRequest.returnUrl = returnUrl;

            return envelopesApi.createSenderView(ACCOUNT_ID, envelopeSummary.envelopeId, {returnUrlRequest})
          })
          .then(function (viewUrl) {
            if (viewUrl) {
              console.log(`ViewUrl is ${JSON.stringify(viewUrl)}`);
              done();
            }
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })
    //
    it('Update recipients', function (done) {
      var newSigner = new docusign.Signer();
      newSigner.email = USER_NAME;
      newSigner.name = 'Signer2';
      newSigner.recipientId = '2';
      //
      // this value represents the client's unique identifier for the signer
      var clientUserId = '2939';
      newSigner.clientUserId = clientUserId;
      //
      var tabs = getSignerTabsDefinition();
      newSigner.tabs = tabs;
      //
      var newRecipients = new docusign.Recipients();
      newRecipients.signers = [];
      newRecipients.signers.push(newSigner);
      //
      envelopesApi.updateRecipients(ACCOUNT_ID, ENVELOPE_ID, {recipients: newRecipients})
          .then(function (recipientsUpdateSummary) {
            assert.notStrictEqual(recipientsUpdateSummary, undefined);
            assert.notStrictEqual(recipientsUpdateSummary.recipientUpdateResults, undefined);
            //
            return envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID)
          })
          .then(function (recipients) {
            assert.notStrictEqual(recipients, undefined);
            assert.equal(recipients.recipientCount, 2);
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })
    //
    it('Get audit events', function (done) {
      //
      envelopesApi.listAuditEvents(ACCOUNT_ID, ENVELOPE_ID)
          .then(function (envelopeAuditEventResponse) {
            assert.notStrictEqual(envelopeAuditEventResponse, undefined);
            assert.notStrictEqual(envelopeAuditEventResponse.auditEvents, undefined);
            assert.notStrictEqual(envelopeAuditEventResponse.auditEvents[0], undefined);
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })
    //
    it('Update documents', function (done) {
      var newFileBytes = null;
      try {
        // read file from a local directory
        newFileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST2_FILE));
      } catch (ex) {
        // handle error
        console.log(`Exception: ${ex}`);
      }

      //
      var newEnvDef = new docusign.EnvelopeDefinition();
      //
      // add a document to the envelope
      var newDoc = new docusign.Document();
      var base64Doc2 = Buffer.from(newFileBytes).toString('base64');
      newDoc.documentBase64 = base64Doc2;
      newDoc.name = 'TestFile.docx';
      newDoc.documentId = '2';
      //
      var newDocs = [];
      newDocs.push(newDoc);
      newEnvDef.documents = newDocs;
      var oldDocumentsCount = 0;
      //
      envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID)
          .then(function (oldDocuments) {
            assert.notStrictEqual(oldDocuments, undefined);
            assert.notStrictEqual(oldDocuments.envelopeDocuments, undefined);
            oldDocumentsCount = oldDocuments.envelopeDocuments.length;
            //
            return envelopesApi.updateDocuments(ACCOUNT_ID, ENVELOPE_ID, {envelopeDefinition: newEnvDef})
          })
          .then(function (envelopeDocumentsResult) {
            assert.notStrictEqual(envelopeDocumentsResult, undefined);
            //
            return envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID)
          })
          .then(function (documents) {
            assert.notStrictEqual(documents, undefined);
            assert.notStrictEqual(documents.envelopeDocuments, undefined);
            assert.equal(documents.envelopeDocuments.length, oldDocumentsCount + 1);
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })
    //
    it('Get recipient tabs', function (done) {

      envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID)
          .then(function (recipients) {
            assert.notStrictEqual(recipients, undefined);
            assert.notStrictEqual(recipients.signers, undefined);
            assert.notStrictEqual(recipients.signers[0], undefined);

            return envelopesApi.listTabs(ACCOUNT_ID, ENVELOPE_ID, recipients.signers[0].recipientId)
          })
          .then(function (tabs) {
            assert.notStrictEqual(tabs, undefined);
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('GET Template Recipients', function (done) {
      envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID)
          .then((data) => {
            assert.notStrictEqual(data, undefined)
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('Create Recipient tabs', function (done) {
      const signHere = docusign.SignHere.constructFromObject({
        documentId: '1',
        pageNumber: '1',
        recipientId: '1',
        xPosition: '200',
        yPosition: '200'
      });

      const signHereTabs = [];
      signHereTabs.push(signHere);
      const tabs = new docusign.Tabs();
      tabs.signHereTabs = signHereTabs;

      envelopesApi.createTabs(ACCOUNT_ID, ENVELOPE_ID, recipientId, {tabs})
          .then((data) => {
            assert.notStrictEqual(data, undefined)
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('Put Recipient tab', function (done) {
      const signHere = docusign.SignHere.constructFromObject({
        documentId: '1',
        pageNumber: '1',
        recipientId: '1',
        xPosition: '200',
        yPosition: '200'
      });

      const signHereTabs = [];
      signHereTabs.push(signHere);
      const tabs = new docusign.Tabs();
      tabs.signHereTabs = signHereTabs;

      envelopesApi.updateTabs(ACCOUNT_ID, ENVELOPE_ID, recipientId, {tabs})
          .then((data) => {
            assert.notStrictEqual(data, undefined)
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('Delete Recipient', function (done) {
      const recipientId='1'
      envelopesApi.deleteRecipient(ACCOUNT_ID, ENVELOPE_ID, recipientId)
          .then((data) => {
            assert.notStrictEqual(data, undefined)
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('Delete Recipients', function (done) {
      const signer = new docusign.Signer();
      signer.email = USER_NAME;
      signer.recipientId = '1';

      const recipients = new docusign.Recipients();
      recipients.signers = [];
      recipients.signers.push(signer);

      envelopesApi.deleteRecipients(ACCOUNT_ID, ENVELOPE_ID, {recipients})
          .then((data) => {
            assert.notStrictEqual(data, undefined)
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('Put status', function (done) {
      envelopesApi.getEnvelope(ACCOUNT_ID, ENVELOPE_ID)
          .then((envelope) => {
            assert.notStrictEqual(envelope, undefined);

            const envelopeIds = [ENVELOPE_ID];
            const transactionIds = [envelope.transactionId];

            const envelopeIdsRequest = new docusign.EnvelopeIdsRequest()
            envelopeIdsRequest.envelopeIds = envelopeIds;
            envelopeIdsRequest.transactionIds = transactionIds;

            return envelopesApi.listStatus(ACCOUNT_ID, {envelopeIdsRequest, envelopeIds, transactionIds})
          })
          .then((envelopesInformation) => {
            assert.notStrictEqual(envelopesInformation, undefined);
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })

    it('Get custom fields', function (done) {
      envelopesApi.listCustomFields(ACCOUNT_ID, ENVELOPE_ID)
          .then((data) => {
            assert.notStrictEqual(data, undefined)
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })
  })
});
