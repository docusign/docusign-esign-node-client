const docusign = require('../src/index');
const assert = require('assert');
const path = require('path');

const Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
const fs = require('fs');

const {
  USER_NAME,
  SING_TEST1_FILE,
  SING_TEST2_FILE,
  getSignerTabsDefinition,
} = require('./constants');
let {
  ACCOUNT_ID,
  ENVELOPE_ID,
  RECIPIENT_ID,
  apiClient,
} = require('./constants');
const { JWTAuth } = require('./helpers');

describe('EnvelopesApi tests:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        apiClient = response.apiClient;
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      });
    } catch (err) {
      return done(err);
    }
  });

  const envelopesApi = new docusign.EnvelopesApi(apiClient);

  it('getEnvelope returns correct envelope summary by envelope id', (done) => {
    let fileBytes = null;
    try {
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
    const signer1 = new docusign.Signer();
    signer1.email = USER_NAME;
    signer1.name = 'Pat Developer';
    signer1.recipientId = '1';

    const signer2 = new docusign.Signer();
    signer2.email = 'another@email.com';
    signer2.name = 'Pat Manager';
    signer2.recipientId = '2';

    const tabs = getSignerTabsDefinition();
    signer1.tabs = tabs;
    signer2.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer1, signer2);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'created';

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef })
      .then((envelopeSummary) => {
        assert.notStrictEqual(envelopeSummary, undefined);
        assert.notStrictEqual(envelopeSummary.envelopeId, undefined);
        assert.equal(envelopeSummary.status, 'created');

        ENVELOPE_ID = envelopeSummary.envelopeId;
        return envelopeSummary;
      })
      .then((envelopeSummary) => envelopesApi.getEnvelope(ACCOUNT_ID, envelopeSummary.envelopeId))
      .then((envelope) => {
        assert.notStrictEqual(envelope, undefined);
        assert.notStrictEqual(envelope.envelopeId, undefined);
        assert.equal(envelope.status, 'created');
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('listRecipients returns correct recipients of an envelope by envelope id', (done) => {
    envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID)
      .then((recipients) => {
        assert.notStrictEqual(recipients, undefined);
        assert.notStrictEqual(recipients.signers, undefined);
        assert.notStrictEqual(recipients.signers[0], undefined);
        assert.notStrictEqual(recipients.signers[0].recipientIdGuid, undefined);

        RECIPIENT_ID = recipients.signers[0].recipientIdGuid;
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('createSenderView creates a sender view for the envelope and returns correct url', (done) => {
    let fileBytes = null;
    try {
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

    const tabs = getSignerTabsDefinition();
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // make the envelope with "created" (draft) status
    envDef.status = 'created';

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef })
      .then((envelopeSummary) => {
        const returnUrl = 'http://www.docusign.com/developer-center';
        const returnUrlRequest = new docusign.ReturnUrlRequest();
        returnUrlRequest.returnUrl = returnUrl;

        return envelopesApi.createSenderView(ACCOUNT_ID, envelopeSummary.envelopeId, { returnUrlRequest });
      })
      .then((viewUrl) => {
        assert.notStrictEqual(viewUrl, undefined);
        assert.notStrictEqual(viewUrl.url, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
  //
  it('updateRecipients adds reciipients to the envelope if recipients option is provided with recipients data', (done) => {
    const newSigner = new docusign.Signer();
    newSigner.email = USER_NAME;
    newSigner.name = 'Signer2';
    newSigner.recipientId = '2';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    newSigner.clientUserId = clientUserId;

    const tabs = getSignerTabsDefinition();
    newSigner.tabs = tabs;

    const newRecipients = new docusign.Recipients();
    newRecipients.signers = [];
    newRecipients.signers.push(newSigner);

    envelopesApi.updateRecipients(ACCOUNT_ID, ENVELOPE_ID, { recipients: newRecipients })
      .then((recipientsUpdateSummary) => {
        assert.notStrictEqual(recipientsUpdateSummary, undefined);
        assert.notStrictEqual(recipientsUpdateSummary.recipientUpdateResults, undefined);

        return envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID);
      })
      .then((recipients) => {
        assert.notStrictEqual(recipients, undefined);
        assert.equal(recipients.recipientCount, 2);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('listAuditEvents returns the correct envelope audit events for an envelope', (done) => {
    envelopesApi.listAuditEvents(ACCOUNT_ID, ENVELOPE_ID)
      .then((envelopeAuditEventResponse) => {
        assert.notStrictEqual(envelopeAuditEventResponse, undefined);
        assert.notStrictEqual(envelopeAuditEventResponse.auditEvents, undefined);
        assert.notStrictEqual(envelopeAuditEventResponse.auditEvents[0], undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('updateDocuments adds documents to the envelope if envelopeDefinition option is provided with new envelope definition data', (done) => {
    let newFileBytes = null;
    try {
      // read file from a local directory
      newFileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST2_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    const newEnvDef = new docusign.EnvelopeDefinition();
    // add a document to the envelope
    const newDoc = new docusign.Document();
    const base64Doc2 = Buffer.from(newFileBytes).toString('base64');
    newDoc.documentBase64 = base64Doc2;
    newDoc.name = 'TestFile.docx';
    newDoc.documentId = '2';

    const newDocs = [];
    newDocs.push(newDoc);
    newEnvDef.documents = newDocs;
    let oldDocumentsCount = 0;

    envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID)
      .then((oldDocuments) => {
        assert.notStrictEqual(oldDocuments, undefined);
        assert.notStrictEqual(oldDocuments.envelopeDocuments, undefined);
        oldDocumentsCount = oldDocuments.envelopeDocuments.length;

        return envelopesApi.updateDocuments(ACCOUNT_ID, ENVELOPE_ID, { envelopeDefinition: newEnvDef });
      })
      .then((envelopeDocumentsResult) => {
        assert.notStrictEqual(envelopeDocumentsResult, undefined);

        return envelopesApi.listDocuments(ACCOUNT_ID, ENVELOPE_ID);
      })
      .then((documents) => {
        assert.notStrictEqual(documents, undefined);
        assert.notStrictEqual(documents.envelopeDocuments, undefined);
        assert.equal(documents.envelopeDocuments.length, oldDocumentsCount + 1);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('listTabs returns the correct recipient tabs of the envelope by recipient id', (done) => {
    envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID)
      .then((recipients) => {
        assert.notStrictEqual(recipients, undefined);
        assert.notStrictEqual(recipients.signers, undefined);
        assert.notStrictEqual(recipients.signers[0], undefined);

        return envelopesApi.listTabs(ACCOUNT_ID, ENVELOPE_ID, recipients.signers[0].recipientId);
      })
      .then((tabs) => {
        assert.notStrictEqual(tabs, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('GET Template Recipients', (done) => {
    envelopesApi.listRecipients(ACCOUNT_ID, ENVELOPE_ID)
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('createTabs creates recipient tabs and adds them to the envelope recipient if tabs option is provided with tabs data', (done) => {
    const signHere = docusign.SignHere.constructFromObject({
      documentId: '1',
      pageNumber: '1',
      recipientId: '1',
      xPosition: '200',
      yPosition: '200',
    });

    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;

    envelopesApi.createTabs(ACCOUNT_ID, ENVELOPE_ID, RECIPIENT_ID, { tabs })
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('updateTabs adds recipient tabs to the envelope recipient if tabs option is provided with tabs data', (done) => {
    const signHere = docusign.SignHere.constructFromObject({
      documentId: '1',
      pageNumber: '1',
      recipientId: '1',
      xPosition: '200',
      yPosition: '200',
    });

    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;

    envelopesApi.updateTabs(ACCOUNT_ID, ENVELOPE_ID, RECIPIENT_ID, { tabs })
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('deleteRecipient deletes a recipient from the envelope by recipient id', (done) => {
    const recipientId = '1';
    envelopesApi.deleteRecipient(ACCOUNT_ID, ENVELOPE_ID, recipientId)
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('deleteRecipients deletes the recipients from the envelope if recipient option is provided with recipients data', (done) => {
    const signer = new docusign.Signer();
    signer.email = USER_NAME;
    signer.recipientId = '1';

    const recipients = new docusign.Recipients();
    recipients.signers = [];
    recipients.signers.push(signer);

    envelopesApi.deleteRecipients(ACCOUNT_ID, ENVELOPE_ID, { recipients })
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('listStatus returns the envelope status for the specified envelopes if the envelopeIdsRequest, envelopeIds and transactionIds options are provided', (done) => {
    envelopesApi.getEnvelope(ACCOUNT_ID, ENVELOPE_ID)
      .then((envelope) => {
        assert.notStrictEqual(envelope, undefined);

        const envelopeIds = [ENVELOPE_ID];
        const transactionIds = [envelope.transactionId];

        const envelopeIdsRequest = new docusign.EnvelopeIdsRequest();
        envelopeIdsRequest.envelopeIds = envelopeIds;
        envelopeIdsRequest.transactionIds = transactionIds;

        return envelopesApi.listStatus(ACCOUNT_ID, { envelopeIdsRequest, envelopeIds, transactionIds });
      })
      .then((envelopesInformation) => {
        assert.notStrictEqual(envelopesInformation, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('listCustomFields returns the custom field information for the specified envelope', (done) => {
    envelopesApi.listCustomFields(ACCOUNT_ID, ENVELOPE_ID)
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
});
