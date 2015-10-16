// Unit Testing Imports
var assert = require('assert');
var async = require('async');

var docusign = require('../../docusign.js');

describe('embedded_docusign_console', function () {
  var docusignEnv = 'demo';

  var config = require('../../test-config.json');
  var debug = config.debug;
  var integratorKey = config.integratorKey;
  var email = config.email;
  var password = config.password;

  it('should return embedded sending url', function (done) {
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
      // Step 3 - Get the Embedded Console View
      // **********************************************************************************
      function getConsoleUrl (client, next) {
        client.envelopes.getConsoleUrl(function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          console.log('Navigate to this URL for the Embedded DocuSign Console: ' + response.url);
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
