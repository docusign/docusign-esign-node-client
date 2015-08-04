// Wrapper for authentication needs including user login info and token handling.
// NOTE: Does not provide protection of token.  Tokens need to be stored carefully by the consumer
// of these methods.  We do not offer encryption or key handling here.

var querystring = require('querystring'); // core
var async = require('async');
var dsUtils = require('./../dsUtils');
var DocuSignError = dsUtils.DocuSignError;

/**
 * Gets login information for the default account/organization.
 *
 * @memberOf Private
 * @function
 * @param {string} email - Email address of the DocuSign user.
 * @param {string} password - Password of the DocuSign user.
 * @param {function} callback - Returned in the form of function(error, loginInfo).
 */
exports.getLoginInfo = function (email, password, callback) {
  var options = {
    method: 'GET',
    url: dsUtils.getApiUrl() + '/login_information',
    headers: {
      'X-DocuSign-Authentication': JSON.stringify({
        Username: email,
        Password: password,
        IntegratorKey: process.env.integratorKey
      })
    }
  };

  dsUtils.makeRequest('Get DS User Account Info', options, process.env.dsDebug, function (error, response) {
    if (error) {
      callback(error);
      return;
    }
    var loginInfo = response.loginAccounts.filter(function (account) {
      return account.isDefault === 'true';
    })[0];

    callback(null, loginInfo);
  });
};

/**
 * Gets an oAuth Token for given username & password that can be used to access
 * the DocuSign API on subsequent calls instead of using the password repeatedly.
 *
 * @memberOf Private
 * @function
 * @param {string} email - Email address of the DocuSign user.
 * @param {string} password - Password of the DocuSign user.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {function} callback - Returned in the form of function(error, accessToken).
 */
exports.getOauthToken = function (email, password, baseUrl, callback) {
  var options = {
    method: 'POST',
    url: _getTokenEndpoint(baseUrl, 'token'),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: querystring.stringify({
      grant_type: 'password',
      client_id: process.env.integratorKey,
      username: email,
      password: password,
      scope: 'api'
    })
  };

  dsUtils.makeRequest('Get DS OAuth2 Token', options, process.env.dsDebug, function (error, response) {
    if (error) {
      return callback(error);
    }

    return callback(null, response.access_token);
  });
};

/**
 * getAPIToken wraps both getLoginInformation and getOauthToken to return a single object
 * containing the oAuth Token and baseUrl for future calls.  This is mostly a
 * convenience function.
 *
 * @memberOf Private
 * @function
 * @param {string} email - Email address of the DocuSign user.
 * @param {string} password - Password of the DocuSign user.
 * @param {function} callback - Returned in the form of function(error, response).
 */
exports.getAPIToken = function (email, password, callback) {
  var thisObj = this;
  async.waterfall([
    function getLoginInfo (next) {
      // step 1
      thisObj.getLoginInfo(email, password, function (err, response) {
        if (err) {
          next(err); // end the waterfall
          return;
        }
        next(null, response.baseUrl, response.accountId);
      });
    },
    function getToken (baseUrl, accountId, next) {
      // step 2
      thisObj.getOauthToken(email, password, baseUrl, function (err, response) {
        if (err) {
          next(err);
          return;
        }
        next(null, response, baseUrl, accountId);
      });
    }
  ],
    function waterfallDone (err, token, baseUrl, accountId) {
      if (err) {
        var errMsg = 'Error getting API token: ' + JSON.stringify(err);
        var error = new DocuSignError(errMsg, err);
        return callback(error);
      }
      callback(null, { access_token: token, baseUrl: baseUrl, accountId: accountId });
    });
};

exports.revokeOauthToken = function (accessToken, baseUrl) {
  return function (callback) {
    revokeOauthToken(accessToken, baseUrl, callback);
  };
};

/**
 * Revoke the given DocuSign OAuth2 `token`.
 *
 * @memberOf Private
 * @function
 * @param {string} token - The DocuSign OAuth2 token to revoke.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {function} callback - Returned in the form of function(error, response).
 */
function revokeOauthToken (token, baseUrl, callback) {
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  var options = {
    method: 'POST',
    url: _getTokenEndpoint(baseUrl, 'revoke'),
    headers: headers,
    body: 'token=' + token
  };

  dsUtils.makeRequest('Revoke DS OAuth2 Token', options, process.env.dsDebug, function (error, response) {
    if (error) {
      error.message = error.message + '\nCannot revoke DS OAuth2 access token.';
      return callback(error);
    }
    callback(null, response);
  });
}

/**
 * Constructs the URL necessary for token management. Internal function that should not be called.
 *
 * @memberOf Private
 * @function
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} action - Action for API calls.
 * @returns {*}
 */
function _getTokenEndpoint (baseUrl, action) {
  var environ = /^https:\/\/(.*?)\.docusign\.net/.exec(baseUrl);

  if (environ && environ.length) {
    return 'https://' + environ[1] + '.docusign.net/restapi/v2/oauth2/' + action;
  } else {
    return {error: 'getTokenEndpoint unable to parse baseUrl'};
  }
}
