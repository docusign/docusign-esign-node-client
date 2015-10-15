// For working with folders, mostly for searching for envelopes

var dsUtils = require('./../dsUtils');

exports.init = function (accountId, baseUrl, accessToken) {
  return {
    /**
     * Get information about envelopes for the account with the given `apiToken`.
     *
     * @memberOf Folders
     * @public
     * @function
     * @param {string} envelopeType - The type of envelope to get.
     *   Valid values are 'all', 'awaiting_my_signature', 'out_for_signature',
     *   'completed', and 'drafts'.
     * @param {boolean} doFullRetrieval - If true, retrieve all envelopes of
     *  the given `envelopeType`. Otherwise, only get the first 50 most recent
     *  envelopes.
     * @param {function} [callback] - Returns in the form of function(error, response)
     *   such that envelopes will live at `response.folderItems.
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getEnvelopes: function (envelopeType, doFullRetrieval, callback) {
      return getEnvelopes(accessToken, baseUrl, envelopeType, doFullRetrieval).asCallback(callback);
    },

    /**
     * Search DS envelopes with the given `searchTerm`.
     *
     * @memberOf Folders
     * @public
     * @function
     * @param {string} searchTerm - The term that the DS API should search for.
     * @param {function} [callback] - Returns in the form of function(error, matchingEnvelopes).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    searchThroughEnvelopes: function (searchTerm, callback) {
      return searchThroughEnvelopes(accessToken, baseUrl, searchTerm).asCallback(callback);
    }
  };
};

/**
 * Get information about envelopes for the account with the given `apiToken`.
 *
 * @memberOf Folders
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeType - The type of envelope to get.
 *   Valid values are 'all', 'awaiting_my_signature', 'out_for_signature',
 *   'completed', and 'drafts'.
 * @param {boolean} doFullRetrieval - If true, retrieve all envelopes of
 *  the given `envelopeType`. Otherwise, only get the first 50 most recent
 *  envelopes.
 * @returns {Promise} - A thenable bluebird Promise that it is fulfilled with envelopes at `result.folderItems`.
 */
function getEnvelopes (apiToken, baseUrl, envelopeType, doFullRetrieval) {
  var startUri = '/search_folders/' + envelopeType + '?start_position=0';
  function _getEnvelopes (uri, envelopes) {
    envelopes = envelopes || [];
    if (uri == null) {
      return envelopes;
    }
    var options = {
      method: 'GET',
      url: baseUrl + uri + '&include_recipients=true',
      headers: dsUtils.getHeaders(apiToken)
    };
    return dsUtils.makeRequest('Get Envelopes', options).then(function (response) {
      envelopes = envelopes.concat(response.folderItems);
      // continue or return envelopes
      return doFullRetrieval ? _getEnvelopes(response.nextUri, envelopes) : envelopes;
    });
  }
  return _getEnvelopes(startUri);
}

/**
 * Search DS envelopes with the given `searchTerm`.
 *
 * @memberOf Folders
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL..
 * @param {string} searchTerm - The term that the DS API should search for.
 * @returns {Promise} - A thenable bluebird Promise
 */
function searchThroughEnvelopes (apiToken, baseUrl, searchTerm) {
  var options = {
    method: 'GET',
    url: baseUrl + '/folders/inbox',
    headers: dsUtils.getHeaders(apiToken),
    qs: {
      search_text: searchTerm
    }
  };
  return dsUtils.makeRequest('Search Through Envelopes', options);
}
