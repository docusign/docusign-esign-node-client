/**
 * Wrappers for User APIs
 *
 */

var dsUtils = require('./../dsUtils');


exports.init = function(accountId, baseUrl, accessToken) {
  return {
    getInfo: function(userId, callback){
      getInfo(accessToken, baseUrl, userId, callback);
    },
    getSignature: function(userId, callback){
      getSignature(accessToken, baseUrl, userId, callback);
    },
    getSocialConnection: function(userId, callback){
      getSocialConnection(accessToken, baseUrl, userId, callback);
    }
  }
}

/**
 * Get user info for a given user.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - DocuSign userId.
 * @param {function} callback - Returned in the form of function(response).
 */
function getInfo(apiToken, baseUrl, userId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId,
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get User Information', options, process.env.dsDebug, function(response) {
    if ('errorCode' in response) {
      return callback(response);
    }
    else {
      return callback(response);
    }
  });
};

/**
 * Gets the user signature.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - DocuSign UserId.
 * @param {function} callback - Returned in the form of function(err, response).
 */
function getSignature(apiToken, baseUrl, userId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId + '/signatures',
    headers: dsUtils.getHeaders(apiToken)
  };
  dsUtils.makeRequest('Get User Signature', options, process.env.dsDebug, function(response) {
    if ('errorCode' in response || response.userSignatures == null
      || response.userSignatures.length === 0) {
      callback(response.message);
    } else {
      callback(null, baseUrl + response.userSignatures[0].signatureImageUri);
    }
  });
};

/**
 * Gets social connection details for a given user.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - DocuSign UserId.
 * @param {function} callback - Returned in the form of function(response).
 */
function getSocialConnection(apiToken, baseUrl, userId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users/' + userId + '/social',
    headers: dsUtils.getHeaders(apiToken, baseUrl)
  };

  dsUtils.makeRequest('Get DS Social Connection', options, process.env.dsDebug, function(response) {
    if ('errorCode' in response) {
      callback(response);
      return;
    }

    callback(response);
  });
};
