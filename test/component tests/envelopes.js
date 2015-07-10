/* Mocha Test File for envelopes.js */

// Unit Testing Imports
var assert = require('assert');
var fs = require('fs');
var fileType = require('file-type');

// Imported file to be tested
var docusign = require('../../docusign.js');

describe('envelopes', function () {
  var client;
  var debug = false;

  var config = JSON.parse(fs.readFileSync('config.json'));
  var integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;
  var templateId = config.DOCUSIGN_TEST_TEMPLATE_ID;
  var envelopeId = config.DOCUSIGN_TEST_ENVELOPE_ID;

  before(function (done) {
    docusign.init(integratorKey, 'demo', debug, function (error, response) {
      assert.ok(!error, 'Unexpected ' + error);
      assert.strictEqual(response.message, 'successfully initialized');
      docusign.client(email, password, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        client = response;
        done();
      });
    });
  });

  describe('getConsoleUrl', function () {
    it('should return the dashboard url', function (done) {
      client.envelopes.getConsoleUrl(function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        var regex = new RegExp('https://demo.docusign.net/Member/StartInSession.aspx?');
        assert.ok(response.url);
        assert.strictEqual(true, regex.test(response.url));
        done();
      });
    });
  });

  describe('getEnvelopeInfo', function () {
    it('should get envelope information', function (done) {
      client.envelopes.getEnvelopeInfo(envelopeId, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        assert.ok(response.status);
        assert.ok(response.documentsUri);
        assert.ok(response.envelopeUri);
        assert.ok(response.recipientsUri);
        done();
      });
    });
  });

  describe('getSignedDocuments', function () {
    it('should get signed documents', function (done) {
      client.envelopes.getSignedDocuments(envelopeId, null, true, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        assert.strictEqual('pdf', fileType(response).ext);
        done();
      });
    });
  });

  describe('getRecipients', function () {
    it('should get recipients of an envelope', function (done) {
      client.envelopes.getRecipients(envelopeId, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        assert.ok(response.signers);
        assert.ok(response.signers[0].isBulkRecipient);
        assert.ok(response.signers[0].name);
        assert.ok(response.signers[0].email);
        assert.ok(response.signers[0].recipientId);
        assert.ok(response.signers[0].recipientIdGuid);
        assert.ok(response.signers[0].requireIdLookup);
        assert.ok(response.signers[0].userId);
        done();
      });
    });
  });

  describe('getTemplateView', function () {
    it('should get the template view of a specified templateId', function (done) {
      client.envelopes.getTemplateView(templateId, 'http://www.docusign.com/devcenter', function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        var regex = new RegExp('https://demo.docusign.net/Member/StartInSession.aspx?');
        assert.ok(response.url);
        assert.strictEqual(true, regex.test(response.url));
        done();
      });
    });
  });

  after(function (done) {
    client.logOut(function (err, response) {
      assert.strictEqual(err, null);
      assert.strictEqual(response, '');
      done();
    });
  });

});
