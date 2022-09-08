/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
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
	define(['Configuration', 'ApiClient', 'model/BulkProcessRequest', 'model/BulkProcessResponse', 'model/BulkProcessResult', 'model/BulkProcessingListSummaries', 'model/BulkProcessingLists', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkProcessRequest'), require('../model/BulkProcessResponse'), require('../model/BulkProcessResult'), require('../model/BulkProcessingListSummaries'), require('../model/BulkProcessingLists'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkProcessDataApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BulkProcessRequest, root.Docusign.BulkProcessResponse, root.Docusign.BulkProcessResult, root.Docusign.BulkProcessingListSummaries, root.Docusign.BulkProcessingLists, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, BulkProcessRequest, BulkProcessResponse, BulkProcessResult, BulkProcessingListSummaries, BulkProcessingLists, ErrorDetails) {
  'use strict';

  /**
   * BulkProcessData service.
   * @module api/BulkProcessDataApi
   */

  /**
   * Constructs a new BulkProcessDataApi. 
   * @alias module:api/BulkProcessDataApi
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
     * (Optional) Callback function to receive the result of the createBulkProcessRequest operation. If none specified a Promise will be returned.
     * @callback module:api/BulkProcessDataApi~createBulkProcessRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Uses the specified bulk envelopes list to update the envelopes specified in the payload
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} processAction 
     * @param {module:api/BulkProcessDataApi~createBulkProcessRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createBulkProcessRequest = function(accountId, processAction, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkProcessRequest");
      }

      // verify the required parameter 'processAction' is set
      if (processAction === undefined || processAction === null) {
        throw new Error("Missing the required parameter 'processAction' when calling createBulkProcessRequest");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'processAction': processAction
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_process_data/actions/{processAction}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createBulkProcessRequestToQueue operation. If none specified a Promise will be returned.
     * @callback module:api/BulkProcessDataApi~createBulkProcessRequestToQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkProcessResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Uses the specified bulk envelopes list to update the envelopes specified in the payload
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} processAction 
     * @param {String} bulkProcessListId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkProcessRequest} optsOrCallback.bulkProcessRequest 
     * @param {module:api/BulkProcessDataApi~createBulkProcessRequestToQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkProcessResponse}
     */
    this.createBulkProcessRequestToQueue = function(accountId, processAction, bulkProcessListId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkProcessRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkProcessRequestToQueue");
      }

      // verify the required parameter 'processAction' is set
      if (processAction === undefined || processAction === null) {
        throw new Error("Missing the required parameter 'processAction' when calling createBulkProcessRequestToQueue");
      }

      // verify the required parameter 'bulkProcessListId' is set
      if (bulkProcessListId === undefined || bulkProcessListId === null) {
        throw new Error("Missing the required parameter 'bulkProcessListId' when calling createBulkProcessRequestToQueue");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'processAction': processAction,
        'bulkProcessListId': bulkProcessListId
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
      var returnType = BulkProcessResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_process_data/actions/{processAction}/{bulkProcessListId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteBulkProcessList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkProcessDataApi~deleteBulkProcessListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkProcessResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a specific bulk process list
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} processAction 
     * @param {String} bulkProcessListId 
     * @param {module:api/BulkProcessDataApi~deleteBulkProcessListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkProcessResult}
     */
    this.deleteBulkProcessList = function(accountId, processAction, bulkProcessListId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBulkProcessList");
      }

      // verify the required parameter 'processAction' is set
      if (processAction === undefined || processAction === null) {
        throw new Error("Missing the required parameter 'processAction' when calling deleteBulkProcessList");
      }

      // verify the required parameter 'bulkProcessListId' is set
      if (bulkProcessListId === undefined || bulkProcessListId === null) {
        throw new Error("Missing the required parameter 'bulkProcessListId' when calling deleteBulkProcessList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'processAction': processAction,
        'bulkProcessListId': bulkProcessListId
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
      var returnType = BulkProcessResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_process_data/actions/{processAction}/{bulkProcessListId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteBulkProcessLists operation. If none specified a Promise will be returned.
     * @callback module:api/BulkProcessDataApi~deleteBulkProcessListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkProcessResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a specific bulk process list
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} processAction 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkProcessingLists} optsOrCallback.bulkProcessingLists 
     * @param {module:api/BulkProcessDataApi~deleteBulkProcessListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkProcessResult}
     */
    this.deleteBulkProcessLists = function(accountId, processAction, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkProcessingLists'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBulkProcessLists");
      }

      // verify the required parameter 'processAction' is set
      if (processAction === undefined || processAction === null) {
        throw new Error("Missing the required parameter 'processAction' when calling deleteBulkProcessLists");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'processAction': processAction
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
      var returnType = BulkProcessResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_process_data/actions/{processAction}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkProcessList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkProcessDataApi~getBulkProcessListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a specific bulk process list
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} processAction 
     * @param {String} bulkProcessListId 
     * @param {module:api/BulkProcessDataApi~getBulkProcessListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBulkProcessList = function(accountId, processAction, bulkProcessListId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkProcessList");
      }

      // verify the required parameter 'processAction' is set
      if (processAction === undefined || processAction === null) {
        throw new Error("Missing the required parameter 'processAction' when calling getBulkProcessList");
      }

      // verify the required parameter 'bulkProcessListId' is set
      if (bulkProcessListId === undefined || bulkProcessListId === null) {
        throw new Error("Missing the required parameter 'bulkProcessListId' when calling getBulkProcessList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'processAction': processAction,
        'bulkProcessListId': bulkProcessListId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_process_data/actions/{processAction}/{bulkProcessListId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkProcessLists operation. If none specified a Promise will be returned.
     * @callback module:api/BulkProcessDataApi~getBulkProcessListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkProcessingListSummaries} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Lists top-level details for all bulk process lists visible to the current user
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} processAction 
     * @param {module:api/BulkProcessDataApi~getBulkProcessListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkProcessingListSummaries}
     */
    this.getBulkProcessLists = function(accountId, processAction, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkProcessLists");
      }

      // verify the required parameter 'processAction' is set
      if (processAction === undefined || processAction === null) {
        throw new Error("Missing the required parameter 'processAction' when calling getBulkProcessLists");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'processAction': processAction
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
      var returnType = BulkProcessingListSummaries;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_process_data/actions/{processAction}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBulkProcessList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkProcessDataApi~updateBulkProcessListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates a specific bulk process list
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} processAction 
     * @param {String} bulkProcessListId 
     * @param {module:api/BulkProcessDataApi~updateBulkProcessListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBulkProcessList = function(accountId, processAction, bulkProcessListId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkProcessList");
      }

      // verify the required parameter 'processAction' is set
      if (processAction === undefined || processAction === null) {
        throw new Error("Missing the required parameter 'processAction' when calling updateBulkProcessList");
      }

      // verify the required parameter 'bulkProcessListId' is set
      if (bulkProcessListId === undefined || bulkProcessListId === null) {
        throw new Error("Missing the required parameter 'bulkProcessListId' when calling updateBulkProcessList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'processAction': processAction,
        'bulkProcessListId': bulkProcessListId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_process_data/actions/{processAction}/{bulkProcessListId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));