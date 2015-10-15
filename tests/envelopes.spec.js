'use strict';

const test = require('ava');
const fileType = require('file-type');
const docusign = require('../docusign');
const config = require('./test-config.json');
const dsUtils = require('../dsUtils');

let client = null;
let envelopeId = config.envelopeId;
let templateId = config.templateId;

test.before(function envelopesBefore (t) {
  return docusign.init(config.integratorKey, config.apiEnv, config.debug)
  .then(response => {
    t.ok(response.message === 'successfully initialized');
    return docusign.createClient(config.email, config.password);
  })
  .then(_client => {
    client = _client;
  });
});

test.after(function envelopesAfter (t) {
  return client.logOut();
});

test(function getConsoleUrl (t) {
  return client.envelopes.getConsoleUrl()
  .then(response => {
    let regex = new RegExp('https://demo.docusign.net/Member/StartInSession.aspx?');
    t.ok(response.url);
    t.ok(regex.test(response.url));
  });
});

test(function getEnvelopeInfo (t) {
  return client.envelopes.getEnvelopeInfo(envelopeId)
  .then(response => {
    t.ok(response.status);
    t.ok(response.documentsUri);
    t.ok(response.envelopeUri);
    t.ok(response.recipientsUri);
  });
});

test('getSignedDocuments', t => {
  let encoding = null;
  let attachCertificate = true;
  return client.envelopes.getSignedDocuments(envelopeId, encoding, attachCertificate)
  .then(response => {
    t.same('pdf', fileType(response).ext);
  });
});

test('[getSignedDocuments] 404 on get non-existent signed documents', t => {
  let nonExistentEnvelopeId = dsUtils.generateNewGuid();
  let encoding = null;
  let attachCertificate = true;
  return client.envelopes.getSignedDocuments(nonExistentEnvelopeId, encoding, attachCertificate)
  .then(response => {
    t.notOk(response, 'Got response, expected none');
  })
  .catch(error => {
    t.ok(error.statusCode === 404, 'Unexpected status code: ' + error.statusCode);
  });
});

test(function getRecipients (t) {
  return client.envelopes.getRecipients(envelopeId)
  .then(response => {
    t.ok(response.signers);
    t.ok(response.signers[0].isBulkRecipient);
    t.ok(response.signers[0].name);
    t.ok(response.signers[0].email);
    t.ok(response.signers[0].recipientId);
    t.ok(response.signers[0].recipientIdGuid);
    t.ok(response.signers[0].requireIdLookup);
    t.ok(response.signers[0].userId);
  });
});

test(function getTemplateView (t) {
  return client.envelopes.getTemplateView(templateId, 'http://www.docusign.com/devcenter')
  .then(response => {
    var regex = new RegExp('https://demo.docusign.net/Member/StartInSession.aspx?');
    t.ok(response.url);
    t.ok(regex.test(response.url));
  });
});
