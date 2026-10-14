/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/RecommendationsListRequest', 'model/RecommendationsListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/RecommendationsListRequest'), require('../model/RecommendationsListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.InsightsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.RecommendationsListRequest, root.Docusign.RecommendationsListResponse);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, RecommendationsListRequest, RecommendationsListResponse) {
  'use strict';

  /**
   * Insights service.
   * @module api/InsightsApi
   */

  /**
   * Constructs a new InsightsApi. 
   * @alias module:api/InsightsApi
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
     * (Optional) Callback function to receive the result of the createRecommendationsIntent operation. If none specified a Promise will be returned.
     * @callback module:api/InsightsApi~createRecommendationsIntentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecommendationsListResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Sets recommendations for an envelope
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} type 
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RecommendationsListRequest} optsOrCallback.recommendationsListRequest 
     * @param {module:api/InsightsApi~createRecommendationsIntentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecommendationsListResponse}
     */
    this.createRecommendationsIntent = function(accountId, type, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recommendationsListRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRecommendationsIntent");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling createRecommendationsIntent");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId === undefined || envelopeId === null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createRecommendationsIntent");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'type': type,
        'envelopeId': envelopeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecommendationsListResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/recommendations/{type}/{envelopeId}/intent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRecommendationsIntent operation. If none specified a Promise will be returned.
     * @callback module:api/InsightsApi~getRecommendationsIntentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecommendationsListResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets Recommendations associated with an envelope
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} type 
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/InsightsApi~getRecommendationsIntentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecommendationsListResponse}
     */
    this.getRecommendationsIntent = function(accountId, type, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecommendationsIntent");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getRecommendationsIntent");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId === undefined || envelopeId === null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getRecommendationsIntent");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'type': type,
        'envelopeId': envelopeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecommendationsListResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/recommendations/{type}/{envelopeId}/intent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRecommendationsList operation. If none specified a Promise will be returned.
     * @callback module:api/InsightsApi~getRecommendationsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecommendationsListResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets available Recommendations
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} type 
     * @param {module:api/InsightsApi~getRecommendationsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecommendationsListResponse}
     */
    this.getRecommendationsList = function(accountId, type, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecommendationsList");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getRecommendationsList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'type': type
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecommendationsListResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/recommendations/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));