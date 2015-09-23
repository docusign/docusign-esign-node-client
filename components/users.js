// Wrappers for User APIs

var util = require('util');
var Bluebird = require('bluebird');
var dsUtils = require('./../dsUtils');
var isEmpty = require('lodash.isempty');
var DocuSignError = dsUtils.DocuSignError;

exports.init = function (accountId, baseUrl, accessToken) {
  return {
    /**
     * Get user info for a given user.
     *
     * @memberOf Users
     * @public
     * @function
     * @param {string} userId - DocuSign userId.
     * @param {function} callback - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getInfo: function (userId, callback) {
      var getInfoAsync = Bluebird.promisify(getInfo);
      return getInfoAsync(accessToken, baseUrl, userId).asCallback(callback);
    },

    /**
     * Gets the user signature.
     *
     * @memberOf Users
     * @public
     * @function
     * @param {string} userId - DocuSign UserId.
     * @param {function} callback - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getSignature: function (userId, callback) {
      var getSignatureAsync = Bluebird.promisify(getSignature);
      return getSignatureAsync(accessToken, baseUrl, userId).asCallback(callback);
    },

    /**
     * Gets social connection details for a given user.
     *
     * @memberOf Users
     * @public
     * @function
     * @param {string} userId - DocuSign UserId.
     * @param {function} callback - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */

    getSocialConnection: function (userId, callback) {
      var getSocialConnectionAsync = Bluebird.promisify(getSocialConnection);
      return getSocialConnectionAsync(accessToken, baseUrl, userId).asCallback(callback);
    }
  };
};

/**
 * Get user info for a given user.
 *
 * @memberOf Users
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - DocuSign userId.
 * @param {function} callback - Returned in the form of function(error, response).
 */
function getInfo (apiToken, baseUrl, userId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId,
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get User Information', options, callback);
}

/**
 * Gets the user signature.
 *
 * @memberOf Users
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - DocuSign UserId.
 * @param {function} callback - Returned in the form of function(error, response).
 */
function getSignature (apiToken, baseUrl, userId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId + '/signatures',
    headers: dsUtils.getHeaders(apiToken)
  };
  dsUtils.makeRequest('Get User Signature', options, function (error, response) {
    if (error) {
      return callback(error);
    }
    if (isEmpty(response.userSignatures)) {
      var errMsg = util.format('(Error Code: %s) Error:\n  %s', response.errorCode, JSON.stringify(response.message));
      return callback(new DocuSignError(errMsg, {errorCode: response.errorCode}));
    }
    callback(null, baseUrl + response.userSignatures[0].signatureImageUri);
  });
}

/**
 * Gets social connection details for a given user.
 *
 * @memberOf Users
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - DocuSign UserId.
 * @param {function} callback - Returned in the form of function(error, response).
 */
function getSocialConnection (apiToken, baseUrl, userId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId + '/social',
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get DS Social Connection', options, callback);
}
