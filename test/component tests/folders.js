/* Mocha Test File for folders.js */

// Unit Testing Imports
var assert = require('assert');
var fs = require('fs');

// Imported file to be tested
var docusign = require('../../docusign.js');

describe('folder', function () {
  var client;
  var debug = false;

  /* READ CONFIG FILE FOR VARIABLES */
  var config = JSON.parse(fs.readFileSync('config.json'));
  var integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;

  /* SETUP DOCUSIGN OBJECT AND LOGIN TO DOCUSIGN */
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

  describe('getEnvelopes', function () {
    it('should get information about the envelopes for the DocuSign account', function (done) {
      client.folders.getEnvelopes('all', true, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        assert.ok(response[0].subject != null);
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
