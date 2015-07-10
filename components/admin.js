// Handles administration of given organization's DocuSign account

var dsUtils = require('./../dsUtils');

exports.init = function (accountId, baseUrl, accessToken) {
  return {
    /**
     * Gets the account info for the given org accountId
     *
     * @memberOf Admin
     * @function
     * @param {function} callback - Returned in the form of function(error, response).
     */

    getOrgAccountInfo: function (callback) {
      getOrgAccountInfo(accountId, accessToken, callback);
    },

    /**
     * Returns a list of users for the organization in the base URL
     *
     * @memberOf Admin
     * @function
     * @param {function} callback - Returned in the form of function(error, users).
     */

    getUserList: function (callback) {
      getUserList(accessToken, baseUrl, callback);
    },

    /**
     * Creates a set of new users in DocuSign for the Org associated to the base URL
     *
     * @memberOf Admin
     * @function
     * @param {object[]} usersToAdd - Array of Objects with account creation information.
     *   @param {string} usersToAdd[].first - First Name
     *   @param {string} usersToAdd[].last - Last Name
     *   @param {string} usersToAdd[].email - Email Address
     *   @param {string} usersToAdd[].password - Password
     * @param {function} callback - Returned in the form of function(error, response).
     */

    addUsers: function (usersToAdd, callback) {
      addUsers(accessToken, baseUrl, usersToAdd, callback);
    },

    /**
     * Deletes a set of users from DocuSign
     *
     * @memberOf Admin
     * @function
     * @param {array} usersToDelete - Collection of users in the form of {userId: userId}
     * @param {function} callback - Returned in the form of function(error, response).
     */

    deleteUsers: function (usersToDelete, callback) {
      deleteUsers(accessToken, baseUrl, usersToDelete, callback);
    },

    /**
     * Gets the templates for a given account
     *
     * @memberOf Admin
     * @function
     * @param {function} callback - Returned in the form of function(error, response).
     */

    getTemplates: function (callback) {
      getTemplates(accessToken, baseUrl, callback);
    },

    /**
     * Get the billing plan info for DS account with the given `apiToken`.
     *
     * Adds custom properties to plan object before sending it to the callback
     * envelopesLeft - calculated
     * name - shortcut for planName which is redundant plan.planName. :)
     *
     *
     * @memberOf Admin
     * @function
     * @param {function} callback - Returned in the form of function(error, plan).
     */

    getPlan: function (callback) {
      getPlan(accessToken, baseUrl, callback);
    }
  };
};

/**
 * Gets the account info for the given org accountId
 *
 * @memberOf Private
 * @function
 * @param {string} accountId - DocuSign AccountId.
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {function} callback - Returned in the form of function(error, response).
 */
function getOrgAccountInfo (accountId, apiToken, callback) {
  var options = {
    method: 'GET',
    url: dsUtils.getApiUrl() + '/accounts/' + accountId,
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get DS Org Account Info', options, process.env.dsDebug, callback);
}

/**
 * Returns a list of users for the organization in the base URL
 *
 * @memberOf Private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {function} callback - Returned in the form of function(error, users).
 */
function getUserList (apiToken, baseUrl, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/users?additional_info=true',
    headers: dsUtils.getHeaders(apiToken, baseUrl)
  };

  dsUtils.makeRequest('Get DS Account User List', options, process.env.dsDebug, function (error, response) {
    if (error) {
      return callback(error);
    }
    callback(null, response.users);
  });
}

/**
 * Creates a set of new users in DocuSign for the Org associated to the base URL
 *
 * @memberOf Private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {object[]} usersToAdd - Array of Objects with account creation information.
 *   @param {string} usersToAdd[].first - First Name
 *   @param {string} usersToAdd[].last - Last Name
 *   @param {string} usersToAdd[].email - Email Address
 *   @param {string} usersToAdd[].password - Password
 * @param {function} callback - Returned in the form of function(error, response).
 */
function addUsers (apiToken, baseUrl, usersToAdd, callback) {
  var users = usersToAdd.map(function (user) {
    return {
      userName: user.first + ' ' + user.last,
      firstName: user.first,
      lastName: user.last,
      email: user.email,
      password: user.password,
      userSettings: [
        { name: 'canSendEnvelope', value: true }
      ]
    };
  });

  var options = {
    method: 'POST',
    url: baseUrl + '/users',
    headers: dsUtils.getHeaders(apiToken, baseUrl),
    json: {
      newUsers: users
    }
  };

  dsUtils.makeRequest('Add Users to DS Account', options, process.env.dsDebug, callback);
}

/**
 * Deletes a set of users from DocuSign
 *
 * @memberOf Private
 * @function
 * @param {string} apiToken - DS API OAuth2 access token.
 * @param {string} baseUrl - DS API base URL.
 * @param {array} usersToDelete - Collection of users in the form of {userId: userId}
 * @param {function} callback - Returned in the form of function(error, response).
 */
function deleteUsers (apiToken, baseUrl, usersToDelete, callback) {
  var userIds = usersToDelete.map(function (user) {
    return {
      userId: user.userId
    };
  });

  var options = {
    method: 'DELETE',
    url: baseUrl + '/users',
    headers: dsUtils.getHeaders(apiToken, baseUrl),
    json: {
      users: userIds
    }
  };

  dsUtils.makeRequest('Delete Users in DS Account', options, process.env.dsDebug, callback);
}

/**
 * Gets the templates for a given account
 *
 * @memberOf Private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {function} callback - Returned in the form of function(error, response).
 */
function getTemplates (apiToken, baseUrl, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/templates',
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get Templates', options, process.env.dsDebug, callback);
}

/**
 * Get the billing plan info for DS account with the given `apiToken`.
 *
 * Adds custom properties to plan object before sending it to the callback
 * envelopesLeft - calculated
 * name - shortcut for planName which is redundant plan.planName. :)
 *
 *
 * @memberOf Private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {function} callback - Returned in the form of function(error, plan).
 */
function getPlan (apiToken, baseUrl, callback) {
  var options = {
    method: 'GET',
    url: baseUrl,
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get Billing Plan Info', options, process.env.dsDebug, function (error, plan) {
    if (error) {
      return callback(error);
    }

    var envelopesLeft = plan.billingPeriodEnvelopesAllowed - plan.billingPeriodEnvelopesSent;

    // a negative number signifies unlimited amount
    plan.envelopesLeft = isNaN(envelopesLeft) ? -1 : envelopesLeft;

    plan.name = plan.planName;

    callback(null, plan);
  });
}
