// Wrappers for User APIs

var dsUtils = require('./../dsUtils');
var isEmpty = require('lodash.isempty');

exports.init = function (accountId, baseUrl, accessToken) {
  return {
    /**
     * Get user info for a given user.
     *
     * @memberOf Users
     * @public
     * @function
     * @param {string} userId - DocuSign userId.
     * @param {function} [callback] - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getInfo: function (userId, callback) {
      return getInfo(accessToken, baseUrl, userId).asCallback(callback);
    },

    /**
     * Gets the user signature.
     *
     * @memberOf Users
     * @public
     * @function
     * @param {string} userId - DocuSign UserId.
     * @param {function} [callback] - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getSignature: function (userId, callback) {
      return getSignature(accessToken, baseUrl, userId).asCallback(callback);
    },

    /**
     * Gets social connection details for a given user.
     *
     * @memberOf Users
     * @public
     * @function
     * @param {string} userId - DocuSign UserId.
     * @param {function} [callback] - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */

    getSocialConnection: function (userId, callback) {
      return getSocialConnection(accessToken, baseUrl, userId).asCallback(callback);
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
 * @returns {Promise} - A thenable bluebird Promise
 */
function getInfo (apiToken, baseUrl, userId) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId,
    headers: dsUtils.getHeaders(apiToken)
  };
  return dsUtils.makeRequest('Get User Information', options);
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
 * @returns {Promise} - A thenable bluebird Promise
 */
function getSignature (apiToken, baseUrl, userId) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId + '/signatures',
    headers: dsUtils.getHeaders(apiToken)
  };
  return dsUtils.makeRequest('Get User Signature', options).then(function (response) {
    if (isEmpty(response.userSignatures)) {
      return 'No signatures found';
    }
    return baseUrl + response.userSignatures[0].signatureImageUri;
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
 * @returns {Promise} - A thenable bluebird Promise
 */
function getSocialConnection (apiToken, baseUrl, userId) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId + '/social',
    headers: dsUtils.getHeaders(apiToken)
  };
  return dsUtils.makeRequest('Get DS Social Connection', options);
}
