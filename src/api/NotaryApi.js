/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/NotaryJournalList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/NotaryJournalList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotaryApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.NotaryJournalList);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, NotaryJournalList) {
  'use strict';

  /**
   * Notary service.
   * @module api/NotaryApi
   * @version 3.0.0
   */

  /**
   * Constructs a new NotaryApi. 
   * @alias module:api/NotaryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * Callback function to receive the result of the listNotaryJournals operation.
     * @callback module:api/NotaryApi~listNotaryJournalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotaryJournalList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get notary jurisdictions for a user
     * @param {Object} opts Optional parameters
     * @param {String} opts.count 
     * @param {String} opts.searchText 
     * @param {String} opts.startPosition 
     * @param {module:api/NotaryApi~listNotaryJournalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotaryJournalList}
     */
    this.listNotaryJournals = function(opts, callback) {
      opts = opts || {};

      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'count': opts['count'],
        'search_text': opts['searchText'],
        'start_position': opts['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotaryJournalList;

      return this.apiClient.callApi(
        '/v2/current_user/notary/journals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
