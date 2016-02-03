'use strict';

const test = require('ava');
const fileType = require('file-type');
const cloneDeep = require('lodash.clonedeep');
const config = require('../../test-config.json');
const docusign = require('../../docusign');
const dsUtils = require('../../dsUtils');

let client = null;
let envelopeId;
let templateId = config.templateId;
let fullName = 'DocuSign NPM';
let email = config.email;
let roleName = config.templateRole;
let clientUserId = '1001';
let returnUrl = 'http://www.docusign.com/devcenter';
let emailSubject = 'DocuSign API - Signature Request on Document Call';
let include_tabs = true;
let additionalParams = {};
let recipients = {
  signers: [{
    email,
    name: fullName,
    recipientId: 1,
    tabs: {
      signHereTabs: [{
        xPosition: '100',
        yPosition: '100',
        documentId: '1',
        pageNumber: '1'
      }]
    }
  }]
};
let templateRoles = [{
  email,
  name: fullName,
  roleName,
  clientUserId
}];
let files = [{
  name: 'SampleDocument.pdf',
  extension: 'pdf',
  source: {
    type: 'path',
    content: '../SampleDocument.pdf'
  }
}];

test.before(function envelopesBefore (t) {
  return docusign.init(config.integratorKey, config.apiEnv, config.debug)
  .then(response => {
    t.ok(response.message === 'successfully initialized');
    return docusign.createClient(config.email, config.password);
  })
  .then(_client => {
    client = _client;
    return client;
  })
  .then(client => {
    return client.envelopes.sendEnvelope(recipients, emailSubject, files, additionalParams)
    .then(response => {
      t.ok(response.envelopeId);
      envelopeId = response.envelopeId;
      t.ok(response.uri);
      t.ok(response.status === 'sent');
      t.pass('Send envelope success');
    });
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

test(function getSignedDocuments (t) {
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

test(function getEnvelopeList (t) {
  let date = new Date();
  if (date.getMonth() !== 0) {
    date.setMonth(date.getMonth() - 1);
  } else {
    date.setMonth(12);
    date.setYear(date.getFullYear() - 1);
  }
  return client.envelopes.getEnvelopeList(date)
  .then(response => {
    t.ok(response);
    t.ok(response.envelopes.length > 0);
    t.ok(response.totalSetSize);
    t.ok(response.resultSetSize);
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

test(function getRecipientsWithTabs (t) {
  return client.envelopes.getRecipients(envelopeId, include_tabs)
  .then(response => {
    t.ok(response.signers);
    t.ok(response.signers[0].isBulkRecipient);
    t.ok(response.signers[0].name);
    t.ok(response.signers[0].email);
    t.ok(response.signers[0].recipientId);
    t.ok(response.signers[0].recipientIdGuid);
    t.ok(response.signers[0].requireIdLookup);
    t.ok(response.signers[0].userId);
    t.ok(response.signers[0].tabs);
    t.ok(response.signers[0].tabs.signHereTabs);
    t.ok(response.signers[0].tabs.signHereTabs.length === 1);
  });
});

test(function getView (t) {
  let action = 'send';
  let event = null;

  return client.envelopes.getView(action, fullName, email, files, returnUrl, event)
  .then(response => {
    var regex = new RegExp('https://demo.docusign.net/Member/StartInSession.aspx?');
    t.ok(response.url);
    t.ok(response.envelopeId);
    t.ok(regex.test(response.url));
  });
});

test('[getView] sign action with showSignAndReturn', t => {
  let action = 'sign';
  let event = {
    showSignAndReturn: true
  };
  return client.envelopes.getView(action, fullName, email, files, returnUrl, event)
  .then(response => {
    var regex = new RegExp('https://demo.docusign.net/Signing/StartInSession.aspx?', 'i');
    t.ok(response.url);
    t.ok(response.envelopeId);
    t.ok(regex.test(response.url));
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

test(function sendEnvelopeMissingSource (t) {
  let badFiles = cloneDeep(files);
  delete badFiles[0].source;
  return client.envelopes.sendEnvelope(recipients, emailSubject, badFiles, additionalParams)
  .then(response => {
    t.notOk(response);
  })
  .catch(err => {
    t.ok(err);
    t.ok(err instanceof dsUtils.DocuSignError);
    t.regexTest(/File had no source/i, err.message);
  });
});

test(function setEnvelopeStatus (t) {
  return client.envelopes.sendEnvelope(recipients, emailSubject, files, additionalParams)
  .then(response => {
    t.ok(response.envelopeId);
    t.ok(response.uri);
    t.ok(response.status === 'sent');
    return response.envelopeId;
  })
  .then(envelopeId => {
    let status = 'voided';
    let additionalParams = {
      voidedReason: 'Broken signature'
    };
    return client.envelopes.setEnvelopeStatus(envelopeId, status, additionalParams);
  })
  .then(response => {
    t.ok(response);
  });
});

test(function getSignerView (t) {
  let userId = null;
  let authMethod = 'email';
  return client.envelopes.sendTemplate(emailSubject, templateId, templateRoles, additionalParams)
  .then(response => {
    t.ok(response.envelopeId);
    t.ok(response.uri);
    t.ok(response.status === 'sent');
    return response.envelopeId;
  })
  .then(envelopeId => {
    return client.envelopes.getSignerView(userId, fullName, email, clientUserId, envelopeId, returnUrl, authMethod);
  })
  .then(response => {
    t.ok(response);
    t.ok(response.url);
  });
});

test(function getSignerViewMissingClientUserId (t) {
  let clientUserId = null;
  let authMethod = 'email';
  let userId = null;
  return client.envelopes.getSignerView(userId, fullName, email, clientUserId, envelopeId, returnUrl, authMethod)
  .then(response => {
    t.notOk(response);
  })
  .catch(err => {
    t.ok(err);
    t.regexTest(/clientUserId is a required recipient parameter for embedded signing/i, err.message);
  });
});

test(function sendTemplate (t) {
  return client.envelopes.sendTemplate(emailSubject, templateId, templateRoles, additionalParams)
  .then(response => {
    t.ok(response.envelopeId);
    t.ok(response.uri);
    t.ok(response.status === 'sent');
  });
});
