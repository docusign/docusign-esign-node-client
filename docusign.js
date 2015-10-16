/**
 * File for combining modules into the main docusign object before exporting.
 *
 */

/**
 * @namespace Admin
 * @desc Public API for DocuSign Admin API
 */

/**
 * @namespace Auth
 * @desc Public API for DocuSign Auth API
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
var DocuSignError = dsUtils.DocuSignError;
var internalState = dsUtils.internalState;

// Create DocuSign Object
var docusign = (function () {
  function init (integratorKey, targetEnv, debug, callback) {
    return new Bluebird(function (resolve, reject) {
      targetEnv = targetEnv.toLowerCase();

      if (debug) {
        log('docusign starting init');
        internalState.dsDebug = true;
      } else {
        internalState.dsDebug = false;
      }

      if (targetEnv === 'demo') {
        internalState.targetEnv = 'demo';
      } else if (targetEnv === 'www' || targetEnv === 'live') {
        internalState.targetEnv = 'www';
      } else {
        return reject(new DocuSignError("Invalid environment value. 'Demo' or 'Live' are the only valid environments."));
      }

      if (integratorKey) {
        internalState.integratorKey = integratorKey;
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
