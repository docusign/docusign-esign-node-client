// Unit Testing Imports
var assert = require('assert');
var async = require('async');

var docusign = require('../../docusign.js');

describe('get_envelope_info', function () {
  var docusignEnv = 'demo';

  var config = require('../../test-config.json');
  var debug = config.debug;
  var integratorKey = config.integratorKey;
  var email = config.email;
  var password = config.password;
  var envelopeId = config.envelopeId;

  it('should return envelope information', function (done) {
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
      // Step 3 - Get Envelope Information
      // **********************************************************************************
      function getEnvelopeInfo (client, next) {
        client.envelopes.getEnvelopeInfo(envelopeId, function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          assert.ok(response.status);
          assert.ok(response.documentsUri);
          assert.ok(response.envelopeUri);
          assert.ok(response.recipientsUri);
          console.log('The Envelope Information is: \n', response);
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
        // done();
        });
      }

    ], function () {
      done();
    });
  });
});
