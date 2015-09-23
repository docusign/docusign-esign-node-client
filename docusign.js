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

var Bluebird = require('bluebird');

// Local Imports
var admin = require('./components/admin');
var users = require('./components/users');
var auth = require('./components/auth');
var folders = require('./components/folders');
var envelopes = require('./components/envelopes');
var dsUtils = require('./dsUtils');

var log = dsUtils.log;
// @todo: add this to the main exports
var DocuSignError = dsUtils.DocuSignError;

// Create DocuSign Object
var docusign = (function () {
  function init (integratorKey, targetEnv, debug, callback) {
    return new Bluebird(function (resolve, reject) {
      targetEnv = targetEnv.toLowerCase();

      if (debug) {
        log('docusign starting init');
        process.env.dsDebug = true;
      } else {
        process.env.dsDebug = false;
      }

      if (targetEnv === 'demo') {
        process.env.targetEnv = 'demo';
      } else if (targetEnv === 'www' || targetEnv === 'live') {
        process.env.targetEnv = 'www';
      } else {
        return reject(new DocuSignError("Invalid environment value. 'Demo' or 'Live' are the only valid environments."));
      }

      if (integratorKey) {
        process.env.integratorKey = integratorKey;
      } else {
        return reject(new DocuSignError('Integrator key cannot be null or empty string.'));
      }

      resolve({message: 'successfully initialized'});
    }).asCallback(callback);
  }

  function createClientBase (authInfo, callback) {
    return new Bluebird(function (resolve, reject) {
      var accountId = authInfo.accountIdGuid;
      var baseUrl = authInfo.baseUrl;
      var accessToken = authInfo.accessToken;

      var adminApi = admin.init(accountId, baseUrl, accessToken);
      var envelopesApi = envelopes.init(accountId, baseUrl, accessToken);
      var foldersApi = folders.init(accountId, baseUrl, accessToken);
      var usersApi = users.init(accountId, baseUrl, accessToken);
      var logOut = auth.revokeOauthToken(accessToken, baseUrl);

      resolve({
        authInfo: authInfo,
        admin: adminApi,
        envelopes: envelopesApi,
        folders: foldersApi,
        users: usersApi,
        logOut: logOut
      });
    }).asCallback(callback);
  }

  function createClient (email, password, callback) {
    return auth.getAccountInfoAndToken(email, password).then(function (authInfo) {
      return createClientBase(authInfo).asCallback(callback);
    });
  }

  return {
    DocuSignError: DocuSignError,
    init: init,
    getAuthInfo: auth.getAccountInfoAndToken,
    createClientFromAuth: createClientBase,
    createClient: createClient
  };
})();

module.exports = docusign;
