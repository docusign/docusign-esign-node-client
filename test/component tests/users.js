/* Mocha Test File for users.js */

// Unit Testing Imports
var assert = require('assert');
var fs = require('fs');

// Imported file to be tested
var docusign = require('../../docusign.js');

describe('users', function () {
  var integratorKey;
  var config;
  var userId;
  var client;

  var docusignEnv = 'demo';
  var debug = false;

  /* READ CONFIG FILE FOR VARIABLES */
  config = JSON.parse(fs.readFileSync('config.json'));
  integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;

  /* SETUP DOCUSIGN OBJECT AND LOGIN TO DOCUSIGN */
  before(function (done) {
    docusign.init(integratorKey, docusignEnv, debug, function (error, response) {
      assert.ok(!error, 'Unexpected ' + error);
      assert.strictEqual(response.message, 'successfully initialized');
      docusign.client(email, password, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        client = response;
        client.admin.getUserList(function (error, response) {
          assert.ok(!error, 'Unexpected ' + error);
          userId = response[0].userId;
          done();
        });
      });
    });
  });

  describe('getInfo', function () {
    it('should return user info', function (done) {
      client.users.getInfo(userId, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        assert.ok(response.userName);
        assert.strictEqual(response.userId, userId);
        done();
      });
    });
  });

  describe('getSocialConnection', function () {
    it.skip('should get the social connection details for a given user', function (done) {
      client.users.getSocialConnection(userId, function (error, response) {
        assert.ok(!error, 'Unexpected ' + error);
        assert.strictEqual(userId, response.userId);
        assert.ok(response.socialAccountInformation);
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
