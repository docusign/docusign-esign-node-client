// For working with folders, mostly for searching for envelopes

var async = require('async');
var Bluebird = require('bluebird');
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
     * @param {function} callback - Returns in the form of function(error, response)
     *   such that envelopes will live at `response.folderItems.
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getEnvelopes: function (envelopeType, doFullRetrieval, callback) {
      var getEnvelopesAsync = Bluebird.promisify(getEnvelopes);
      return getEnvelopesAsync(accessToken, baseUrl, envelopeType, doFullRetrieval).asCallback(callback);
    },

    /**
     * Search DS envelopes with the given `searchTerm`.
     *
     * @memberOf Folders
     * @public
     * @function
     * @param {string} searchTerm - The term that the DS API should search for.
     * @param {function} callback - Returns in the form of function(error, matchingEnvelopes).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    searchThroughEnvelopes: function (searchTerm, callback) {
      var searchThroughEnvelopesAsync = Bluebird.promisify(searchThroughEnvelopes);
      return searchThroughEnvelopesAsync(accessToken, baseUrl, searchTerm).asCallback(callback);
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
 * @param {function} callback - Returns in the form of function(error, response)
 *   such that envelopes will live at `response.folderItems.
 */
function getEnvelopes (apiToken, baseUrl, envelopeType, doFullRetrieval, callback) {
  var envelopes = [];
  var nextUri = '/search_folders/' + envelopeType + '?start_position=0';

  async.whilst(
    function condition () {
      return nextUri != null;
    },
    function getEnvelopeStep (next) {
      var options = {
        method: 'GET',
        url: baseUrl + nextUri + '&include_recipients=true',
        headers: dsUtils.getHeaders(apiToken)
      };

      dsUtils.makeRequest('Get Envelopes', options, function (error, response) {
        if (error) {
          return next(error);
        }
        envelopes = envelopes.concat(response.folderItems);

        /*
         * By setting `nextUri` to "null", we are making this loop exit
         * early. We only do this when `doFullRetrieval` is "false".
         */
        nextUri = doFullRetrieval ? response.nextUri : null;

        next(); // continue onto the next step
      });
    },
    function end (error) {
      callback(error, envelopes);
    }
  );
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
 * @param {function} callback - Returns in the form of function(error, matchingEnvelopes).
 */
function searchThroughEnvelopes (apiToken, baseUrl, searchTerm, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/folders/inbox',
    headers: dsUtils.getHeaders(apiToken),
    qs: {
      search_text: searchTerm
    }
  };

  dsUtils.makeRequest('Search Through Envelopes', options, callback);
}
