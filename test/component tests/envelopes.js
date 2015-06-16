/* Mocha Test File for envelopes.js */
 
//Unit Testing Imports
var assert = require('assert');
var fs = require('fs');

//Imported file to be tested
var docusign = require('../../docusign.js');

describe('envelopes', function(){
  var client;
  var debug = false;

  var config = JSON.parse(fs.readFileSync('config.json'));
  var integratorKey = config.DOCUSIGN_INTEGRATOR_KEY;
  var email = config.DOCUSIGN_TEST_EMAIL;
  var password = config.DOCUSIGN_TEST_PASSWORD;
  var templateId = config.DOCUSIGN_TEST_TEMPLATE_ID;
  var envelopeId = config.DOCUSIGN_TEST_ENVELOPE_ID;

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

  describe('getConsoleUrl', function(){
    it('should return the dashboard url', function(done){
      client.envelopes.getConsoleUrl(function(response){
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