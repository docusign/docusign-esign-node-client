var docusign = require('../src/index');
var assert = require('assert');
var JWTAuth = require('./helpers').JWTAuth;
var constants = require('./constants');
var EMAIL = constants.EMAIL;
var SIGN_TEST1_FILE = constants.SIGN_TEST1_FILE;
var apiClient = constants.apiClient;
var getSignerTabsDefinition = constants.getSignerTabsDefinition;
var path = require('path');
var fs = require('fs');

var ACCOUNT_ID = '';

describe('FoldersApi Tests With Callbacks:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        apiClient = response.apiClient;
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  var envelopesApi = new docusign.EnvelopesApi(apiClient);
  var foldersApi = new docusign.FoldersApi(apiClient);

  it('moveEnvelopes should move the envelopes to the specified folder if the foldersRequest option is provided', (done) => {
    var fileBytes = null;
    try {
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SIGN_TEST1_FILE));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

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

    var tabs = getSignerTabsDefinition();
    signer1.tabs = tabs;
    signer2.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer1, signer2);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    var envelopeId;

    var moveEnvelopesCallback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.envelopes, undefined);
      assert.notStrictEqual(data.envelopes[0], undefined);
      assert.strictEqual(data.envelopes[0].envelopeId, envelopeId);
      done();
    };

    var createEnvelopeCallback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      envelopeId = data.envelopeId;

      var foldersRequest = new docusign.FoldersRequest();
      foldersRequest.envelopeIds = [];
      foldersRequest.envelopeIds.push(envelopeId);

      foldersApi.moveEnvelopes(ACCOUNT_ID, 'recyclebin', { foldersRequest }, moveEnvelopesCallback);
    };

    envelopesApi.createEnvelope(ACCOUNT_ID, { envelopeDefinition: envDef }, createEnvelopeCallback);
  });
});
