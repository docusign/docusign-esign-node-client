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

var bluebird = require('bluebird');

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
      return callback(new DocuSignError("Invalid environment value. 'Demo' or 'Live' are the only valid environments."));
    }

    if (integratorKey) {
      process.env.integratorKey = integratorKey;
    } else {
      return callback(new DocuSignError('Integrator key cannot be null or empty string.'));
    }

    callback(null, {message: 'successfully initialized'});
  }

  function createClientBase (authInfo, callback) {
    var accountId = authInfo.accountId;
    var baseUrl = authInfo.baseUrl;
    var accessToken = authInfo.accessToken;

    var adminApi = admin.init(accountId, baseUrl, accessToken);
    var envelopesApi = envelopes.init(accountId, baseUrl, accessToken);
    var foldersApi = folders.init(accountId, baseUrl, accessToken);
    var usersApi = users.init(accountId, baseUrl, accessToken);
    var logOut = auth.revokeOauthToken(accessToken, response.baseUrl);

    callback(null, {
      clientAuthData: authInfo,
      admin: bluebird.promisifyAll(adminApi),
      envelopes: bluebird.promisifyAll(envelopesApi),
      folders: bluebird.promisifyAll(foldersApi),
      users: bluebird.promisifyAll(usersApi),
      logOutAsync: bluebird.promisify(logOut),
      logOut: logOut
    });
  }

  function createClient (email, password, callback) {
    auth.getAPIToken(email, password, function (err, response) {
      if (err) {
        return callback(err);
      }
      var accountId = response.accountId;
      var baseUrl = response.baseUrl;
      var accessToken = response.accessToken;
      var clientAuthData = {
        accountId: accountId,
        baseUrl: baseUrl,
        accessToken: accessToken
      };

      createClientBase(clientAuthData, callback);
    });
  }

  return {
    DocuSignError: DocuSignError,
    init: init,
    initAsync: bluebird.promisify(init),
    getAuthInfo: auth.getAPIToken,
    getAuthInfoAsync: bluebird.promisify(auth.getAPIToken),
    createClientFromAuth: createClientBase
    createClientFromAuthAsync: bluebird.promisify(createClientBase),
    createClientAsync: bluebird.promisify(createClient),
    createClient: createClient
  };
})();

module.exports = docusign;
