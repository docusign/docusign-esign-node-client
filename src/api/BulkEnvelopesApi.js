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
	define(['Configuration', 'ApiClient', 'model/BulkSendBatchActionRequest', 'model/BulkSendBatchRequest', 'model/BulkSendBatchStatus', 'model/BulkSendBatchSummaries', 'model/BulkSendRequest', 'model/BulkSendResponse', 'model/BulkSendTestResponse', 'model/BulkSendingList', 'model/BulkSendingListSummaries', 'model/EnvelopesInformation', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkSendBatchActionRequest'), require('../model/BulkSendBatchRequest'), require('../model/BulkSendBatchStatus'), require('../model/BulkSendBatchSummaries'), require('../model/BulkSendRequest'), require('../model/BulkSendResponse'), require('../model/BulkSendTestResponse'), require('../model/BulkSendingList'), require('../model/BulkSendingListSummaries'), require('../model/EnvelopesInformation'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkEnvelopesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BulkSendBatchActionRequest, root.Docusign.BulkSendBatchRequest, root.Docusign.BulkSendBatchStatus, root.Docusign.BulkSendBatchSummaries, root.Docusign.BulkSendRequest, root.Docusign.BulkSendResponse, root.Docusign.BulkSendTestResponse, root.Docusign.BulkSendingList, root.Docusign.BulkSendingListSummaries, root.Docusign.EnvelopesInformation, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, BulkSendBatchActionRequest, BulkSendBatchRequest, BulkSendBatchStatus, BulkSendBatchSummaries, BulkSendRequest, BulkSendResponse, BulkSendTestResponse, BulkSendingList, BulkSendingListSummaries, EnvelopesInformation, ErrorDetails) {
  'use strict';

  /**
   * BulkEnvelopes service.
   * @module api/BulkEnvelopesApi
   */

  /**
   * Constructs a new BulkEnvelopesApi. 
   * @alias module:api/BulkEnvelopesApi
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
     * (Optional) Callback function to receive the result of the createBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~createBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new bulk send list
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendingList} optsOrCallback.bulkSendingList 
     * @param {module:api/BulkEnvelopesApi~createBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingList}
     */
    this.createBulkSendList = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendingList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkSendList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
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
      var returnType = BulkSendingList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createBulkSendRequest operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~createBulkSendRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Uses the specified bulk send list to send the envelope specified in the payload
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendRequest} optsOrCallback.bulkSendRequest 
     * @param {module:api/BulkEnvelopesApi~createBulkSendRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendResponse}
     */
    this.createBulkSendRequest = function(accountId, bulkSendListId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkSendRequest");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling createBulkSendRequest");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createBulkSendTestRequest operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~createBulkSendTestRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendTestResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Tests whether the specified bulk sending list can be used to send an envelope
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendRequest} optsOrCallback.bulkSendRequest 
     * @param {module:api/BulkEnvelopesApi~createBulkSendTestRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendTestResponse}
     */
    this.createBulkSendTestRequest = function(accountId, bulkSendListId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkSendTestRequest");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling createBulkSendTestRequest");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendTestResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}/test', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~deleteBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingListSummaries} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes an existing bulk send list
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {module:api/BulkEnvelopesApi~deleteBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingListSummaries}
     */
    this.deleteBulkSendList = function(accountId, bulkSendListId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBulkSendList");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling deleteBulkSendList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendingListSummaries;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendBatchEnvelopes operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendBatchEnvelopesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopesInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets envelopes from a specific bulk send batch
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.include 
     * @param {String} optsOrCallback.order 
     * @param {String} optsOrCallback.orderBy 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.status 
     * @param {module:api/BulkEnvelopesApi~getBulkSendBatchEnvelopesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopesInformation}
     */
    this.getBulkSendBatchEnvelopes = function(accountId, bulkSendBatchId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendBatchEnvelopes");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling getBulkSendBatchEnvelopes");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'include': optsOrCallback['include'],
        'order': optsOrCallback['order'],
        'order_by': optsOrCallback['orderBy'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopesInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}/envelopes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendBatchStatus operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendBatchStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchStatus} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a specific bulk send batch status
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {module:api/BulkEnvelopesApi~getBulkSendBatchStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchStatus}
     */
    this.getBulkSendBatchStatus = function(accountId, bulkSendBatchId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendBatchStatus");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling getBulkSendBatchStatus");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId
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
      var returnType = BulkSendBatchStatus;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendBatches operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendBatchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchSummaries} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a list of bulk send batch satuses initiated by account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.batchIds 
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.fromDate 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.status 
     * @param {String} optsOrCallback.toDate 
     * @param {String} optsOrCallback.userId 
     * @param {module:api/BulkEnvelopesApi~getBulkSendBatchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchSummaries}
     */
    this.getBulkSendBatches = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendBatches");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'batch_ids': optsOrCallback['batchIds'],
        'count': optsOrCallback['count'],
        'from_date': optsOrCallback['fromDate'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate'],
        'user_id': optsOrCallback['userId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkSendBatchSummaries;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a specific bulk send list
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {module:api/BulkEnvelopesApi~getBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingList}
     */
    this.getBulkSendList = function(accountId, bulkSendListId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendList");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling getBulkSendList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendingList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendLists operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingListSummaries} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Lists top-level details for all bulk send lists visible to the current user
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/BulkEnvelopesApi~getBulkSendListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingListSummaries}
     */
    this.getBulkSendLists = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendLists");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
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
      var returnType = BulkSendingListSummaries;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBulkSendBatchAction operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateBulkSendBatchActionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchStatus} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Initiate a specific bulk send batch action
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {String} bulkAction 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendBatchActionRequest} optsOrCallback.bulkSendBatchActionRequest 
     * @param {module:api/BulkEnvelopesApi~updateBulkSendBatchActionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchStatus}
     */
    this.updateBulkSendBatchAction = function(accountId, bulkSendBatchId, bulkAction, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendBatchActionRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkSendBatchAction");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling updateBulkSendBatchAction");
      }

      // verify the required parameter 'bulkAction' is set
      if (bulkAction === undefined || bulkAction === null) {
        throw new Error("Missing the required parameter 'bulkAction' when calling updateBulkSendBatchAction");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId,
        'bulkAction': bulkAction
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
      var returnType = BulkSendBatchStatus;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}/{bulkAction}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBulkSendBatchStatus operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateBulkSendBatchStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchStatus} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Put/Update a specific bulk send batch status
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendBatchRequest} optsOrCallback.bulkSendBatchRequest 
     * @param {module:api/BulkEnvelopesApi~updateBulkSendBatchStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchStatus}
     */
    this.updateBulkSendBatchStatus = function(accountId, bulkSendBatchId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendBatchRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkSendBatchStatus");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling updateBulkSendBatchStatus");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId
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
      var returnType = BulkSendBatchStatus;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates an existing bulk send list.  If send_envelope query string value is provided, will accept an empty payload and try to send the specified envelope
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendingList} optsOrCallback.bulkSendingList 
     * @param {module:api/BulkEnvelopesApi~updateBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingList}
     */
    this.updateBulkSendList = function(accountId, bulkSendListId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendingList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkSendList");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling updateBulkSendList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendingList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));