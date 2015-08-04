// Unit Testing Imports
var assert = require('assert');
var fs = require('fs');
var async = require('async');

var docusign = require('../../docusign.js');

describe('embedded_signing', function () {
  var fullName = 'DocuSign NPM';
  var docusignEnv = 'demo';
  var debug = false;

  var config = JSON.parse(fs.readFileSync('config.json'));
  var integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;
  var templateId = config.DOCUSIGN_TEST_TEMPLATE_ID;
  var templateRoleName = config.DOCUSIGN_TEST_TEMPLATE_ROLE;

  var templateRoles = [{
    email: email,
    name: fullName,
    roleName: templateRoleName
  }];

  it('should return embedded signing url', function (done) {
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
        docusign.client(email, password, function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          next(null, response);
        });
      },
      // **********************************************************************************
      // Step 3 - Request Signature via Template
      // **********************************************************************************
      function sendTemplate (client, next) {
        client.envelopes.sendTemplate('DS API call - Request Signature', templateId, templateRoles, function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          next(null, client, response.envelopeId);
        });
      },

      // **********************************************************************************
      // Step 4 - Get the Embedded Signing View (aka the recipient view)
      // **********************************************************************************
      function getSignerView (client, envelopeId, next) {
        client.envelopes.getSignerView(null, fullName, email, null, envelopeId, 'http://www.docusign.com/devcenter', function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          console.log('Navigate to this URL for Embedded Signing workflow: ' + response.url);
          next(null, client);
        });
      },

      // **********************************************************************************
      // Step 5 - Revoke OAuth Token for Logout
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
