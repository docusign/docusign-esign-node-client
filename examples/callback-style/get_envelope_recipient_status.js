// Unit Testing Imports
var assert = require('assert');
var async = require('async');

var docusign = require('../../docusign.js');

describe('get_envelope_recipient_status', function () {
  var docusignEnv = 'demo';

  var config = require('../../test-config.json');
  var debug = config.debug;
  var integratorKey = config.integratorKey;
  var email = config.email;
  var password = config.password;
  var envelopeId;

  it('should return recipient status information for the specified envelope', function (done) {
    async.waterfall([

      // **********************************************************************************
      // Step 1 - Initialize DocuSign Object with Integratory Key and Desired Environment
      // **********************************************************************************
      function init (next) {
        docusign.init(integratorKey, docusignEnv, debug, function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          var message = response.message;
          assert.strictEqual(message, 'successfully initialized');
          next(null);
        });
      },

      // **********************************************************************************
      // Step 2 - Authenticate Youself With DocuSign to Recieve an OAuth Token and BaseUrl
      // **********************************************************************************
      function createClient (next) {
        docusign.createClient(email, password, function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          next(null, response);
        });
      },

      // **********************************************************************************
      // Step 2.1 - Get a valid envelopeId
      // **********************************************************************************
      function grabEnvelopeId (client, next) {
        client.folders.searchThroughEnvelopes('DocuSign', function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          var sentItems = response.folderItems.filter(function (item) { return item.status === 'sent'; });
          envelopeId = sentItems[0].envelopeId;
          next(null, client);
        });
      },

      // **********************************************************************************
      // Step 3 - Get Recipients of the Specified Envelope Id
      // **********************************************************************************
      function getRecipients (client, next) {
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
          console.log('The Recipients of envelopeId: ' + envelopeId + ' is: \n', response);
          next(null, client);
        });
      },

      // **********************************************************************************
      // Step 4 - Revoke OAuth Token for Logout
      // **********************************************************************************
      function logOut (client, next) {
        client.logOut(function (err, response) {
          assert.strictEqual(err, null);
          next(null);
        });
      }
    ], function () {
      done();
    });
  });
});
