// Wrappers for User APIs

var util = require('util');
var dsUtils = require('./../dsUtils');
var isEmpty = require('lodash.isempty');
var DocuSignError = dsUtils.DocuSignError;

exports.init = function (accountId, baseUrl, accessToken) {
  return {
    /**
     * Get user info for a given user.
     *
     * @memberOf Users
     * @function
     * @param {string} userId - DocuSign userId.
     * @param {function} callback - Returned in the form of function(error, response).
     */
    getInfo: function (userId, callback) {
      getInfo(accessToken, baseUrl, userId, callback);
    },

    /**
     * Gets the user signature.
     *
     * @memberOf Users
     * @function
     * @param {string} userId - DocuSign UserId.
     * @param {function} callback - Returned in the form of function(error, response).
     */
    getSignature: function (userId, callback) {
      getSignature(accessToken, baseUrl, userId, callback);
    },

    /**
     * Gets social connection details for a given user.
     *
     * @memberOf Users
     * @function
     * @param {string} userId - DocuSign UserId.
     * @param {function} callback - Returned in the form of function(error, response).
     */

    getSocialConnection: function (userId, callback) {
      getSocialConnection(accessToken, baseUrl, userId, callback);
    }
  };
};

/**
 * Get user info for a given user.
 *
 * @memberOf Private
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

  dsUtils.makeRequest('Get User Information', options, process.env.dsDebug, callback);
}

/**
 * Gets the user signature.
 *
 * @memberOf Private
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
  dsUtils.makeRequest('Get User Signature', options, process.env.dsDebug, function (error, response) {
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
 * @memberOf Private
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
    headers: dsUtils.getHeaders(apiToken, baseUrl)
  };

  dsUtils.makeRequest('Get DS Social Connection', options, process.env.dsDebug, callback);
}
