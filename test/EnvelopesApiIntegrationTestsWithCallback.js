var docusign = require('../src/index');
var assert = require('assert');
var path = require('path');
var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');

var constants = require('./constants');
var EMAIL = constants.EMAIL;
var SIGN_TEST1_FILE = constants.SIGN_TEST1_FILE;
var SIGN_TEST2_FILE = constants.SIGN_TEST2_FILE;
var apiClient = constants.apiClient;
var getSignerTabsDefinition = constants.getSignerTabsDefinition;

var JWTAuth = require('./helpers').JWTAuth;

var ACCOUNT_ID = '';
var ENVELOPE_ID = '';
var RECIPIENT_ID = '';

describe('EnvelopesApi Tests With Callbacks:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      }).catch((err) => {
        console.error(err);
        return done(err);
      });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  var envelopesApi = new docusign.EnvelopesApi(apiClient);

  it('getEnvelope returns correct envelope summary by envelopeId', (done) => {
    var fileBytes = null;
    try {
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SIGN_TEST1_FILE));
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
    var signer1 = new docusign.Signer();
    signer1.email = EMAIL;
    signer1.name = 'Pat Developer';
    signer1.recipientId = '1';

    var signer2 = new docusign.Signer();
    signer2.email = EMAIL;
    signer2.name = 'Pat Manager';
    signer2.recipientId = '2';

    var signer3 = new docusign.Signer();
    signer3.email = EMAIL;
    signer3.name = 'Pat Mentor';
    signer3.recipientId = '3';

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    var tabs = getSignerTabsDefinition();
    signer1.tabs = tabs;
    signer2.tabs = tabs;
    signer3.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer1, signer2, signer3);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'created';

    var getEnvelopeCallback = function (error, envelope, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(envelope, undefined);
      assert.strictEqual(envelope.envelopeId, ENVELOPE_ID);
      assert.strictEqual(envelope.status, 'created');
      done();
    };

    var createEnvelopeCallback = function (error, envelopeSummary, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(envelopeSummary, undefined);
      assert.notStrictEqual(envelopeSummary.envelopeId, undefined);
      assert.equal(envelopeSummary.status, 'created');

      ENVELOPE_ID = envelopeSummary.envelopeId;

      envelopesApi.getEnvelope(ACCOUNT_ID, envelopeSummary.envelopeId, getEnvelopeCallback);
    };

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, createEnvelopeCallback);
  });

  it('listRecipients returns correct recipients of an envelope by envelope id', (done) => {
    var listRecipientsCallback = function (error, recipients, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(recipients, undefined);
      assert.notStrictEqual(recipients.signers, undefined);
      assert.notStrictEqual(recipients.signers[0], undefined);
      assert.notStrictEqual(recipients.signers[0].recipientIdGuid, undefined);
      assert.strictEqual(recipients.signers[0].email, EMAIL);
      assert.strictEqual(recipients.signers[0].name, 'Pat Developer');
      assert.strictEqual(recipients.signers[0].recipientId, '1');
      assert.strictEqual(recipients.signers[1].email, EMAIL);
      assert.strictEqual(recipients.signers[1].name, 'Pat Manager');
      assert.strictEqual(recipients.signers[1].recipientId, '2');
      assert.strictEqual(recipients.signers[2].email, EMAIL);
      assert.strictEqual(recipients.signers[2].name, 'Pat Mentor');
      assert.strictEqual(recipients.signers[2].recipientId, '3');

      RECIPIENT_ID = recipients.signers[0].recipientIdGuid;

      done();
    };

    envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, listRecipientsCallback);
  });

  it('createSenderView creates a sender view for the envelope and returns correct url', (done) => {
    var fileBytes = null;
    try {
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SIGN_TEST1_FILE));
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
    signer.email = EMAIL;
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

    // can have multiple tabs, so need to add to envelope as a SIGNle element list
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
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(viewUrl, undefined);
      assert.notStrictEqual(viewUrl.url, undefined);
      done();
    };

    var createEnvelopeCallback = function (error, envelopeSummary, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(envelopeSummary, undefined);
      var returnUrl = 'http://www.docusign.com/developer-center';
      var envelopeViewRequest = new docusign.EnvelopeViewRequest();
      envelopeViewRequest.returnUrl = returnUrl;

      assert.notStrictEqual(envelopeSummary, undefined);
      assert.notStrictEqual(envelopeSummary.envelopeId, undefined);
      assert.equal(envelopeSummary.status, 'created');

      envelopesApi.createSenderView(ACCOUNT_ID, envelopeSummary.envelopeId, { envelopeViewRequest }, createSenderViewCallback);
    };

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, createEnvelopeCallback);
  });

  it('updateRecipients adds reciipients to the envelope if recipients option is provided with recipients data', (done) => {
    var newSigner = new docusign.Signer();
    newSigner.email = EMAIL;
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

    // can have multiple tabs, so need to add to envelope as a SIGNle element list
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
        console.error(error);
        return done(error);
      }

      assert.equal(recipients.recipientCount, 3);
      done();
    };

    var updateRecipientsCallback = function (error, recipientsUpdateSummary, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(recipientsUpdateSummary, undefined);
      assert.notStrictEqual(recipientsUpdateSummary.recipientUpdateResults, undefined);

      envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, listRecipientsCallback);
    };

    envelopesApi.updateRecipients(ACCOUNT_ID, ENVELOPE_ID, { recipients: newRecipients }, updateRecipientsCallback);
  });

  it('listAuditEvents returns the correct envelope audit events for an envelope', (done) => {
    var listAuditEventsCallback = function (error, envelopeAuditEventResponse, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(envelopeAuditEventResponse, undefined);
      assert.notStrictEqual(envelopeAuditEventResponse.auditEvents, undefined);
      assert.notStrictEqual(envelopeAuditEventResponse.auditEvents[0], undefined);
      done();
    };

    envelopesApi.listAuditEvents(ACCOUNT_ID, ENVELOPE_ID, listAuditEventsCallback);
  });

  it('updateDocuments adds documents to the envelope if envelopeDefinition option is provided with new envelope definition data', (done) => {
    var newFileBytes = null;
    try {
      // read file from a local directory
      newFileBytes = fs.readFileSync(path.resolve(__dirname, SIGN_TEST2_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
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
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(documents, undefined);
      assert.notStrictEqual(documents.envelopeDocuments, undefined);
      assert.equal(documents.envelopeDocuments.length, oldDocumentsCount + 1);
      assert.notStrictEqual(documents.envelopeDocuments[oldDocumentsCount], undefined);
      assert.equal(documents.envelopeDocuments[oldDocumentsCount].name, 'TestFile.docx');
      done();
    };

    var updateDocumentsCallback = function (error, envelopeDocumentsResult, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(envelopeDocumentsResult, undefined);

      envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID, secondListDocumentsCallback);
    };

    var firstListDocumentsCallback = function (error, oldDocuments, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(oldDocuments, undefined);
      assert.notStrictEqual(oldDocuments.envelopeDocuments, undefined);
      oldDocumentsCount = oldDocuments.envelopeDocuments.length;

      envelopesApi.updateDocuments(ACCOUNT_ID, ENVELOPE_ID, { envelopeDefinition: newEnvDef }, updateDocumentsCallback);
    };

    envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID, firstListDocumentsCallback);
  });

  it('listTabs returns the correct recipient tabs of the envelope by recipient id', (done) => {
    var listTabsCallback = function (error, tabs, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(tabs, undefined);
      assert.notStrictEqual(tabs.signHereTabs, undefined);
      assert.notStrictEqual(tabs.signHereTabs[0], undefined);
      assert.strictEqual(tabs.signHereTabs[0].tabType, 'signhere');
      done();
    };

    var listRecipientsCallback = function (err, recipients, _response) {
      if (err) {
        console.error(err);
        return done(err);
      }

      assert.notStrictEqual(recipients, undefined);
      assert.notStrictEqual(recipients.signers, undefined);
      assert.notStrictEqual(recipients.signers[0], undefined);

      envelopesApi.listTabs(ACCOUNT_ID, ENVELOPE_ID, recipients.signers[0].recipientId, listTabsCallback);
    };

    envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, listRecipientsCallback);
  });

  it('GET Template Recipients', (done) => {
    var callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      done();
    };

    envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID, callback);
  });

  it('createTabs creates recipient tabs and adds them to the envelope recipient if tabs option is provided with tabs data', (done) => {
    var signHere = docusign.SignHere.constructFromObject({
      documentId: '1',
      pageNumber: '1',
      recipientId: '1',
      xPosition: '200',
      yPosition: '200'
    });

    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;

    var callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.signHereTabs, undefined);
      assert.notStrictEqual(data.signHereTabs[0], undefined);
      assert.strictEqual(data.signHereTabs[0].documentId, signHere.documentId);
      assert.strictEqual(data.signHereTabs[0].pageNumber, signHere.pageNumber);
      assert.strictEqual(data.signHereTabs[0].xPosition, signHere.xPosition);
      assert.strictEqual(data.signHereTabs[0].yPosition, signHere.yPosition);
      assert.strictEqual(data.signHereTabs[0].recipientId, RECIPIENT_ID);
      done();
    };

    envelopesApi.createTabs(ACCOUNT_ID, ENVELOPE_ID, RECIPIENT_ID, { tabs }, callback);
  });

  it('updateTabs adds recipient tabs to the envelope recipient if tabs option is provided with tabs data', (done) => {
    var signHere = docusign.SignHere.constructFromObject({
      documentId: '1',
      pageNumber: '1',
      recipientId: '1',
      xPosition: '200',
      yPosition: '200'
    });

    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;

    var callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.signHereTabs, undefined);
      assert.notStrictEqual(data.signHereTabs[0], undefined);
      assert.strictEqual(data.signHereTabs[0].documentId, signHere.documentId);
      assert.strictEqual(data.signHereTabs[0].recipientId, RECIPIENT_ID);
      done();
    };
    envelopesApi.updateTabs(ACCOUNT_ID, ENVELOPE_ID, RECIPIENT_ID, { tabs }, callback);
  });

  it('deleteRecipient deletes a recipient from the envelope by recipient id', (done) => {
    var recipientId = '2';
    var callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.signers, undefined);
      assert.notStrictEqual(data.signers[0], undefined);
      assert.strictEqual(data.signers[0].status, 'deleted');
      done();
    };
    envelopesApi.deleteRecipient(ACCOUNT_ID, ENVELOPE_ID, recipientId, callback);
  });

  it('deleteRecipients deletes the recipients from the envelope if recipient option is provided with recipients data', (done) => {
    var signer = new docusign.Signer();
    signer.email = EMAIL;
    signer.name = 'Pat Admin';
    signer.recipientId = '3';

    var recipients = new docusign.Recipients();
    recipients.signers = [];
    recipients.signers.push(signer);

    var callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.signers, undefined);
      assert.notStrictEqual(data.signers[0], undefined);
      assert.strictEqual(data.signers[0].recipientId, '3');
      assert.strictEqual(data.signers[0].status, 'deleted');
      done();
    };
    envelopesApi.deleteRecipients(ACCOUNT_ID, ENVELOPE_ID, { recipients }, callback);
  });

  it('listStatus returns the envelope status for the specified envelopes if the envelopeIdsRequest, envelopeIds and transactionIds options are provided', (done) => {
    var callback = function (error, envelope, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(envelope, undefined);

      var envelopeIds = [ENVELOPE_ID];
      var transactionIds = [envelope.transactionId];

      var envelopeIdsRequest = new docusign.EnvelopeIdsRequest();
      envelopeIdsRequest.envelopeIds = envelopeIds;
      envelopeIdsRequest.transactionIds = transactionIds;

      return envelopesApi.listStatus(ACCOUNT_ID, { envelopeIdsRequest, envelopeIds, transactionIds },
        (error, envelopesInformation, __response) => {
          if (error) {
            console.error(error);
            return done(error);
          }
          assert.notStrictEqual(envelopesInformation, undefined);
          assert.notStrictEqual(envelopesInformation.envelopes, undefined);
          assert.notStrictEqual(envelopesInformation.envelopes[0], undefined);
          assert.strictEqual(envelopesInformation.envelopes[0].envelopeId, ENVELOPE_ID);
          done();
        });
    };
    envelopesApi.getEnvelope(ACCOUNT_ID, ENVELOPE_ID, {}, callback);
  });

  it('listCustomFields returns the custom field information for the specified envelope', (done) => {
    var callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.listCustomFields, undefined);
      assert.notStrictEqual(data.textCustomFields, undefined);
      done();
    };
    envelopesApi.listCustomFields(ACCOUNT_ID, ENVELOPE_ID, callback);
  });
});
