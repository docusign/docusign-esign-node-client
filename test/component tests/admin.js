/* Mocha Test File for admin.js */

//Unit Testing Imports
var assert = require('assert');
var fs = require('fs');

//Imported file to be tested
var docusign = require('../../docusign.js');

describe('admin', function(){
  var client;
  var debug = false;
  var userId;
  var accountId;

  /* READ CONFIG FILE FOR VARIABLES */
  var config = JSON.parse(fs.readFileSync('config.json'));
  var integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;

  /* SETUP DOCUSIGN OBJECT AND LOGIN TO DOCUSIGN */
  before(function(done){
    docusign.init(integratorKey, 'demo', debug, function(response){
      assert.strictEqual(response.message, 'successfully initialized');
      docusign.client(email, password, function(response){
        assert.ok(!response.error);
        client = response;
        done();
      });
    });
  });

  describe('getOrgAccountInfo', function(){
    it('should return the docusign org info', function(done){
      client.admin.getOrgAccountInfo(function(response){
        assert.ok(response.planStartDate);
        assert.ok(response.planName);
        assert.ok(response.billingPeriodStartDate);
        done();
      });
    });
  });

  describe('getUserList', function(){
    it('should return a docusign user list', function(done){
      client.admin.getUserList(function(response){
        assert.ok(response[0].userName);
        assert.ok(response[0].userId);
        assert.ok(response[0].userType);
        assert.ok(response[0].isAdmin);
        assert.ok(response[0].userStatus);
        assert.ok(response[0].uri);
        assert.ok(response[0].email);
        assert.ok(response[0].firstName);
        assert.ok(response[0].lastName);
        done();
      });
    });
  });

  describe('addUsers', function(){
    it('should create a set of new users in DocuSign', function(done){
      var usersToAdd = [{first: 'test', last: 'docusign', email: 'test.docusign@test.com', password: 'password'}];
      client.admin.addUsers(usersToAdd, function(response){
        assert.ok(response.newUsers[0].userId);
        userId = response.newUsers[0].userId;
        done();
      });
    });
  });

  describe('deleteUsers', function(){
    it('should delete a set of users in DocuSign', function(done){
      var usersToDelete = [{userId: userId}];
      client.admin.deleteUsers(usersToDelete, function(response){
        assert.strictEqual(response.users[0].userId, userId);
        assert.strictEqual(response.users[0].userStatus, 'closed');
        done();
      });
    });
  });
  
  describe('getTemplates', function(){
    it('should return docusign templates', function(done){
      client.admin.getTemplates(function(response){
        assert.ok(response.envelopeTemplates);
        done();
      });
    });
  });

  describe('getPlan', function(){
    it('should return docusign templates', function(done){
      client.admin.getPlan(function(response){
        assert.ok(response.planName);
        done();
      });
    });
  });

  after(function(done){
    client.logOut(function(err, response){
      assert.strictEqual(err, null);
      assert.strictEqual(response, '');
      done();
    });
  });

});
