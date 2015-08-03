/**
 * File for combining modules into the main docusign object before exporting.
 *
 */

/**
 * @namespace Admin
 * @desc Public API for DocuSign Admin API
 */

/**
* @namespace Envelopes
* @desc Public API for DocuSign Envelopes API
*/

/**
* @namespace Folders
* @desc Public API for DocuSign Folders API
*/

/**
* @namespace Users
* @desc Public API for DocuSign Users API
*/

/**
 * @namespace Private
 * @desc Private DoucSign API
 */

var util = require('util');
var bluebird = require('bluebird');

// Local Imports
var admin = require('./components/admin');
var users = require('./components/users');
var auth = require('./components/auth');
var folders = require('./components/folders');
var envelopes = require('./components/envelopes');
var dsUtils = require('./dsUtils');

var DocuSignError = dsUtils.DocuSignError;

// Create DocuSign Object
var docusign = (function () {
  function init (integratorKey, targetEnv, debug, callback) {
    targetEnv = targetEnv.toLowerCase();

    if (debug) {
      util.log('docusign starting init');
      process.env.dsDebug = true;
    } else {
      process.env.dsDebug = false;
    }

    if (targetEnv === 'demo') {
      process.env.targetEnv = 'demo';
    } else if (targetEnv === 'www' || targetEnv === 'live') {
      process.env.targetEnv = 'www';
    } else {
      return callback(new DocuSignError("Invalid environment value. 'Demo' or 'Live' are the only valid environments."));
    }

    if (integratorKey) {
      process.env.integratorKey = integratorKey;
    } else {
      return callback(new DocuSignError('Integrator key cannot be null or empty string.'));
    }

    callback(null, {message: 'successfully initialized'});
  }

  function client (email, password, callback) {
    auth.getAPIToken(email, password, function (err, response) {
      if (err) {
        return callback(err);
      }
      var adminApi = admin.init(response.accountId, response.baseUrl, response.access_token);
      var envelopesApi = envelopes.init(response.accountId, response.baseUrl, response.access_token);
      var foldersApi = folders.init(response.accountId, response.baseUrl, response.access_token);
      var usersApi = users.init(response.accountId, response.baseUrl, response.access_token);
      var logOut = auth.revokeOauthToken(response.access_token, response.baseUrl);

      callback(null, {
        admin: bluebird.promisifyAll(adminApi),
        envelopes: bluebird.promisifyAll(envelopesApi),
        folders: bluebird.promisifyAll(foldersApi),
        users: bluebird.promisifyAll(usersApi),
        logOutAsync: bluebird.promisify(logOut),
        logOut: logOut
      });
    });
  }

  return {
    init: init,
    initAsync: bluebird.promisify(init),
    clientAsync: bluebird.promisify(client),
    client: client
  };
})();

module.exports = docusign;
