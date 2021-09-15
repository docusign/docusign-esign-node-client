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

describe('EnvelopesApi Tests With Callbacks:', function (done) {

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
    apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN, function (err, res) {
      var baseUri,
        accountDomain;
      if (err) {
        return done(err);
      }
      apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

      apiClient.getUserInfo(res.body.access_token, function (err, userInfo) {
        if (err) {
          return done(err);
        }
        ACCOUNT_ID = userInfo.accounts[0].accountId;
        baseUri = userInfo.accounts[0].baseUri;
        accountDomain = baseUri.split('/v2');
        apiClient.setBasePath(accountDomain[0] + '/restapi');
        console.log('LoginInformation: ' + JSON.stringify(userInfo));
        return done();
      });
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
            var signer = new docusign.Signer();
            signer.email = USER_NAME;
            signer.name = 'Pat Developer';
            signer.recipientId = '1';

            // create a signHere tab somewhere on the document for the signer to sign
            // default unit of measurement is pixels, can be mms, cms, inches also
            var tabs = getSignerTabsDefinition();
            signer.tabs = tabs;

            // Above causes issue
            envDef.recipients = new docusign.Recipients();
            envDef.recipients.signers = [];
            envDef.recipients.signers.push(signer);

            // send the envelope (otherwise it will be "created" in the Draft folder
            envDef.status = 'sent';

            var getEnvelopeCallback = function (error, envelope, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelope, undefined);
                done();
            }

            var createEnvelopeCallback = function (error, envelopeSummary, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeSummary, undefined);
                ENVELOPE_ID = envelopeSummary.envelopeId

                envelopesApi.getEnvelope(ACCOUNT_ID, envelopeSummary.envelopeId, getEnvelopeCallback);
            }

            envelopesApi.createEnvelope(ACCOUNT_ID, {envelopeDefinition: envDef}, createEnvelopeCallback);
        })

        it('Get envelope recipients', function (done) {

            var listRecipientsCallback = function (error, recipients, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(recipients, undefined);
                recipientId = recipients.signers[0].recipientIdGuid

                done();
            }

            envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, listRecipientsCallback)
        })

        it('Create sender view', function (done) {
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
            var signer = new docusign.Signer();
            signer.email = USER_NAME;
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

            // make the envelope with "created" (draft) status
            envDef.status = 'created';


            var createSenderViewCallback = function (error, viewUrl, _response) {
                if (error) {
                    return done(error);
                }

                if (viewUrl) {
                    console.log('ViewUrl is ' + JSON.stringify(viewUrl));
                    done();
                }
            }

            var createEnvelopeCallback = function (error, envelopeSummary, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeSummary, undefined)
                var returnUrl = 'http://www.docusign.com/developer-center';
                var returnUrlRequest = new docusign.ReturnUrlRequest();
                returnUrlRequest.returnUrl = returnUrl;

                envelopesApi.createSenderView(ACCOUNT_ID, envelopeSummary.envelopeId, {returnUrlRequest}, createSenderViewCallback)
            }

            envelopesApi.createEnvelope(ACCOUNT_ID, {envelopeDefinition: envDef}, createEnvelopeCallback)
        })

        it('Update recipients', function (done) {
            var newSigner = new docusign.Signer();
            newSigner.email = USER_NAME;
            newSigner.name = 'Signer2';
            newSigner.recipientId = '2';

            // this value represents the client's unique identifier for the signer
            var clientUserId = '2939';
            newSigner.clientUserId = clientUserId;

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
            newSigner.tabs = tabs;

            var newRecipients = new docusign.Recipients();
            newRecipients.signers = [];
            newRecipients.signers.push(newSigner);


            var listRecipientsCallback = function (error, recipients, _response) {
                if (error) {
                    return done(error);
                }

                assert.equal(recipients.recipientCount, 2);
                done();
            }

            var updateRecipientsCallback = function (error, recipientsUpdateSummary, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(recipientsUpdateSummary, undefined);
                assert.notStrictEqual(recipientsUpdateSummary.recipientUpdateResults, undefined);

                envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, listRecipientsCallback)
            }

            envelopesApi.updateRecipients(ACCOUNT_ID, ENVELOPE_ID, {recipients: newRecipients}, updateRecipientsCallback)
        })

        it('Get audit events', function (done) {

            var listAuditEventsCallback = function (error, envelopeAuditEventResponse, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeAuditEventResponse, undefined);
                assert.notStrictEqual(envelopeAuditEventResponse.auditEvents, undefined);
                assert.notStrictEqual(envelopeAuditEventResponse.auditEvents[0], undefined);
                done();
            }

            envelopesApi.listAuditEvents(ACCOUNT_ID, ENVELOPE_ID, listAuditEventsCallback)
        })

        it('Update documents', function (done) {
            var newFileBytes = null;
            try {
                // read file from a local directory
                newFileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST2_FILE));
            } catch (ex) {
                // handle error
                console.log('Exception: ' + ex);
            }


            var newEnvDef = new docusign.EnvelopeDefinition();

            // add a document to the envelope
            var newDoc = new docusign.Document();
            var base64Doc2 = Buffer.from(newFileBytes).toString('base64');
            newDoc.documentBase64 = base64Doc2;
            newDoc.name = 'TestFile.docx';
            newDoc.documentId = '2';

            var newDocs = [];
            newDocs.push(newDoc);
            newEnvDef.documents = newDocs;

            var oldDocumentsCount = 0;


            var secondListDocumentsCallback = function (error, documents, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(documents, undefined);
                assert.notStrictEqual(documents.envelopeDocuments, undefined);
                assert.equal(documents.envelopeDocuments.length, oldDocumentsCount + 1);
                done();
            }

            var updateDocumentsCallback = function (error, envelopeDocumentsResult, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeDocumentsResult, undefined);

                envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID, secondListDocumentsCallback)
            }

            var firstListDocumentsCallback = function (error, oldDocuments, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(oldDocuments, undefined);
                assert.notStrictEqual(oldDocuments.envelopeDocuments, undefined);
                oldDocumentsCount = oldDocuments.envelopeDocuments.length;

                envelopesApi.updateDocuments(ACCOUNT_ID, ENVELOPE_ID, {envelopeDefinition: newEnvDef}, updateDocumentsCallback)
            }

            envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID, firstListDocumentsCallback)
        })

        it('Get recipient tabs', function (done) {

            var listTabsCallback = function (error, tabs, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(tabs, undefined);
                done();
            }

            var listRecipientsCallback = function (err, recipients, _response) {
                if (err) {
                    return done(err);
                }

                assert.notStrictEqual(recipients, undefined);
                assert.notStrictEqual(recipients.signers, undefined);
                assert.notStrictEqual(recipients.signers[0], undefined);

                envelopesApi.listTabs(ACCOUNT_ID, ENVELOPE_ID, recipients.signers[0].recipientId, listTabsCallback)
            }

            envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, listRecipientsCallback)
        })

        it('GET Template Recipients', function (done) {
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }

            envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, callback)

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

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }

            envelopesApi.createTabs(ACCOUNT_ID, ENVELOPE_ID, recipientId, {tabs}, callback)

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

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            envelopesApi.updateTabs(ACCOUNT_ID, ENVELOPE_ID, recipientId, {tabs}, callback)
        })

        it('Delete Recipient', function (done) {
            const recipientId = '1'
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            envelopesApi.deleteRecipient(ACCOUNT_ID, ENVELOPE_ID, recipientId, callback)
        })

        it('Delete Recipients', function (done) {
            const signer = new docusign.Signer();
            signer.email = USER_NAME;
            signer.recipientId = '1';

            const recipients = new docusign.Recipients();
            recipients.signers = [];
            recipients.signers.push(signer);

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            envelopesApi.deleteRecipients(ACCOUNT_ID, ENVELOPE_ID, {recipients}, callback)
        })

        it('Put status', function (done) {

            const callback = function (error, envelope, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(envelope, undefined);

                const envelopeIds = [ENVELOPE_ID];
                const transactionIds = [envelope.transactionId];

                const envelopeIdsRequest = new docusign.EnvelopeIdsRequest()
                envelopeIdsRequest.envelopeIds = envelopeIds;
                envelopeIdsRequest.transactionIds = transactionIds;

                return envelopesApi.listStatus(ACCOUNT_ID, {envelopeIdsRequest, envelopeIds, transactionIds},
                    (error, envelopesInformation, __response) => {
                        assert.notStrictEqual(envelopesInformation, undefined);
                        done();
                    })
            }
            envelopesApi.getEnvelope(ACCOUNT_ID, ENVELOPE_ID, {}, callback)
        })

        it('Get custom fields', function (done) {
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined);
                done();
            }
            envelopesApi.listCustomFields(ACCOUNT_ID, ENVELOPE_ID, callback)

        })
    })
});
