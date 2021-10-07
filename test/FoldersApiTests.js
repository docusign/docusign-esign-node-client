const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
let {
  ACCOUNT_ID,
  SING_TEST1_FILE,
  USER_NAME,
  apiClient,
  getSignerTabsDefinition,
} = require('./constants');

const path = require('path');
const fs = require('fs');

describe('FoldersApi tests:', () => {
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
  const foldersApi = new docusign.FoldersApi(apiClient);

  it('moveEnvelopes should move the envelopes to the specified folder if the foldersRequest option is provided', (done) => {
    let fileBytes = null;
    try {
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SING_TEST1_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

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
    envDef.status = 'sent';

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef })
      .then((envelope) => {
        assert.notStrictEqual(envelope, undefined);

        const foldersRequest = new docusign.FoldersRequest();
        foldersRequest.envelopeIds = [];
        foldersRequest.envelopeIds.push(envelope.envelopeId);

        return foldersApi.moveEnvelopes(ACCOUNT_ID, 'recyclebin', { foldersRequest });
      })
      .then((foldersResponse) => {
        assert.notStrictEqual(foldersResponse, undefined);
        assert.notStrictEqual(foldersResponse.envelopes, undefined);
        assert.notStrictEqual(foldersResponse.envelopes[0], undefined);
        assert.notStrictEqual(foldersResponse.envelopes[0].envelopeId, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
});
