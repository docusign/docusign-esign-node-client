/* Mocha Test File for envelope.js */
 
//Unit Testing Imports
var assert = require('assert');
var rewire = require('rewire');
var fs = require('fs');
var fileType = require('file-type');

//Imported file to be tested
var docusign = require('../../docusign.js');

describe('envelope', function(){
  var client;
  var debug = false;

  /* READ CONFIG FILE FOR VARIABLES */
  var config = JSON.parse(fs.readFileSync('config.json'));
  var integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;
  var templateId = config.DOCUSIGN_TEST_TEMPLATE_ID;
  var envelopeId = config.DOCUSIGN_TEST_ENVELOPE_ID;

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

  describe('getEnvelopeInfo', function(){
    it('should get envelope information', function(done){
      client.envelope.getEnvelopeInfo(envelopeId, function(response){
        assert.ok(response.status);
        assert.ok(response.documentsUri);
        assert.ok(response.envelopeUri);
        assert.ok(response.recipientsUri);
        done();
      });
    });
  });

  describe('getSignedDocuments', function(){
    it('should get signed documents', function(done){
      client.envelope.getSignedDocuments(envelopeId, null, true, function(response){
        assert.strictEqual('pdf', fileType(response).ext);
        done();
      });  
    });
  });

  describe('getRecipients', function(){
    it('should get recipients of an envelope', function(done){
      client.envelope.getRecipients(envelopeId, function(response){
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

  describe('getTemplateView', function(){
    it('should get the template view of a specified templateId', function(done){
      client.envelope.getTemplateView(templateId, 'http://www.docusign.com/devcenter', function(response){
        var regex = new RegExp('https://demo.docusign.net/Member/StartInSession.aspx?');
        assert.ok(response.url);
        assert.strictEqual(true, regex.test(response.url));
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