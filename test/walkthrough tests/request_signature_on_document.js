// Unit Testing Imports
var assert = require('assert');
var fs = require('fs');
var async = require('async');

var docusign = require('../../docusign.js');

describe('request_signature_on_document', function () {
  var fullName = 'DocuSign NPM';
  var docusignEnv = 'demo';
  var debug = false;

  var config = JSON.parse(fs.readFileSync('config.json'));
  var integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;

  var emailSubject = 'DocuSign API - Signature Request on Document Call';
  var recipients = {};

  recipients.signers = [
    {
      'email': email,
      'name': fullName,
      'recipientId': 1,
      'tabs': {
        'signHereTabs': [{
          'xPosition': '100',
          'yPosition': '100',
          'documentId': '1',
          'pageNumber': '1'
        }]
      }
    }];
  var buffer = fs.readFileSync('test/SampleDocument.pdf');
  var files = [{
    name: 'SampleDocument.pdf',
    extension: 'pdf',
    base64: new Buffer(buffer).toString('base64')
  }];

  it('should send an envelope with SampleDocument.pdf', function (done) {
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
      // Step 3 - Send Envelope
      // **********************************************************************************
      function sendEnvelope (client, next) {
        client.envelopes.sendEnvelope(recipients, emailSubject, files, function (err, response) {
          assert.ok(!err);
          console.log('The Envelope Information is: \n' + JSON.stringify(response));
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
