/**
 * File for combining modules into the main docusign object before exporting.
 *
 */

var util = require("util");

// Local Imports
var admin = require("./components/admin");
var users = require("./components/users");
var envelope = require("./components/envelope");
var auth = require("./components/auth");
var folders = require("./components/folders");
var envelopes = require("./components/envelopes");

// Create DocuSign Object
var docusign = (function () {

  function init(integratorKey, targetEnv, debug, callback){
    targetEnv = targetEnv.toLowerCase();

    if(debug){
      util.log('docusign starting init');
      process.env.dsDebug = true;
    } else {
      process.env.dsDebug = false;
    } 

    if(targetEnv == "demo") {
      process.env.targetEnv = "demo";
    }
    else if(targetEnv == "www" || targetEnv == "live") {
      process.env.targetEnv = "www";
    }
    else {          
      return callback({error:"Invalid environment value. 'Demo' or 'Live' are the only valid environments."});
    }

    if(integratorKey) {
      process.env.integratorKey = integratorKey;
    }
    else {
      callback({error: "Integrator key cannot be null or empty string."});
    }
    
    callback({message:"successfully initialized"});
  }

  function client(email, password, callback){
    auth.getAPIToken(email, password, function(err, response){
      if(err){
        return {error: err};
      } else {
        callback({
          admin: admin.init(response.accountId, response.baseUrl, response.access_token),
          envelope: envelope.init(response.accountId, response.baseUrl, response.access_token),
          envelopes: envelopes.init(response.accountId, response.baseUrl, response.access_token),
          folders: folders.init(response.accountId, response.baseUrl, response.access_token),
          users: users.init(response.accountId, response.baseUrl, response.access_token),
          logOut: auth.revokeOauthToken(response.access_token, response.baseUrl)
        });
      }
    });
  }

  return {
    init: init,
    client: client
  }
})();

module.exports = docusign;
