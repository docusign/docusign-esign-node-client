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
	define(['Configuration', 'ApiClient', 'model/BulkEnvelopeStatus', 'model/BulkEnvelopesResponse', 'model/BulkRecipientsResponse', 'model/BulkRecipientsSummaryResponse', 'model/BulkRecipientsUpdateResponse', 'model/BulkSendBatchStatus', 'model/BulkSendBatchSummaries', 'model/BulkSendRequest', 'model/BulkSendResponse', 'model/BulkSendTestResponse', 'model/BulkSendingList', 'model/BulkSendingListSummaries', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkEnvelopeStatus'), require('../model/BulkEnvelopesResponse'), require('../model/BulkRecipientsResponse'), require('../model/BulkRecipientsSummaryResponse'), require('../model/BulkRecipientsUpdateResponse'), require('../model/BulkSendBatchStatus'), require('../model/BulkSendBatchSummaries'), require('../model/BulkSendRequest'), require('../model/BulkSendResponse'), require('../model/BulkSendTestResponse'), require('../model/BulkSendingList'), require('../model/BulkSendingListSummaries'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkEnvelopesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BulkEnvelopeStatus, root.Docusign.BulkEnvelopesResponse, root.Docusign.BulkRecipientsResponse, root.Docusign.BulkRecipientsSummaryResponse, root.Docusign.BulkRecipientsUpdateResponse, root.Docusign.BulkSendBatchStatus, root.Docusign.BulkSendBatchSummaries, root.Docusign.BulkSendRequest, root.Docusign.BulkSendResponse, root.Docusign.BulkSendTestResponse, root.Docusign.BulkSendingList, root.Docusign.BulkSendingListSummaries, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, BulkEnvelopeStatus, BulkEnvelopesResponse, BulkRecipientsResponse, BulkRecipientsSummaryResponse, BulkRecipientsUpdateResponse, BulkSendBatchStatus, BulkSendBatchSummaries, BulkSendRequest, BulkSendResponse, BulkSendTestResponse, BulkSendingList, BulkSendingListSummaries, ErrorDetails) {
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
     * (Optional) Callback function to receive the result of the deleteRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~deleteRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the bulk recipient file from an envelope.
     * Deletes the bulk recipient file from an envelope. This cannot be used if the envelope has been sent.

After using this, the `bulkRecipientsUri` property is not returned in subsequent GET calls for the envelope, but the recipient will remain as a bulk recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/BulkEnvelopesApi~deleteRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsUpdateResponse}
     */
    this.deleteRecipients = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId === undefined || envelopeId === null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'recipientId': recipientId
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
      var returnType = BulkRecipientsUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/bulk_recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the get operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkEnvelopeStatus} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the status of a specified bulk send operation.
     * Retrieves the status information of a single bulk recipient batch. A bulk recipient batch is the set of envelopes sent from a single bulk recipient file. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} batchId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count Specifies the number of entries to return.
     * @param {String} optsOrCallback.include Specifies which entries are included in the response. Multiple entries can be included by using commas in the query string (example: ?include=\"failed,queued\")   Valid values are:   * all - Returns all entries. If present, overrides all other query settings. This is the default if no query string is provided. * failed - This only returns entries with a failed status. * queued - This only returns entries with a queued status. * sent - This only returns entries with a sent status.  
     * @param {String} optsOrCallback.startPosition Specifies the location in the list of envelopes from which to start.
     * @param {module:api/BulkEnvelopesApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkEnvelopeStatus}
     */
    this.get = function(accountId, batchId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }

      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling get");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'batchId': batchId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'include': optsOrCallback['include'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkEnvelopeStatus;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_envelopes/{batchId}', 'GET',
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
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.status 
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
     * (Optional) Callback function to receive the result of the getRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the bulk recipient file from an envelope.
     * Retrieves the bulk recipient file information from an envelope that has a bulk recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeTabs 
     * @param {String} optsOrCallback.startPosition 
     * @param {module:api/BulkEnvelopesApi~getRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsResponse}
     */
    this.getRecipients = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId === undefined || envelopeId === null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'recipientId': recipientId
      };
      var queryParams = {
        'include_tabs': optsOrCallback['includeTabs'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkRecipientsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/bulk_recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the list operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkEnvelopesResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets status information about bulk recipient batches.
     * Retrieves status information about all the bulk recipient batches. A bulk recipient batch is the set of envelopes sent from a single bulk recipient file. The response includes general information about each bulk recipient batch. 

The response returns information about the envelopes sent with bulk recipient batches, including the `batchId` property, which can be used to retrieve a more detailed status of individual bulk recipient batches.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count The number of results to return. This can be 1 to 20.
     * @param {String} optsOrCallback.startPosition The position of the bulk envelope items in the response. This is used for repeated calls, when the number of bulk envelopes returned is too large for one return. The default value is 0.
     * @param {module:api/BulkEnvelopesApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkEnvelopesResponse}
     */
    this.list = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling list");
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
        'count': optsOrCallback['count'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkEnvelopesResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_envelopes', 'GET',
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

    /**
     * (Optional) Callback function to receive the result of the updateRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsSummaryResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds or replaces envelope bulk recipients.
     * Updates the bulk recipients in a draft envelope using a file upload. The Content-Type supported for uploading a bulk recipient file is CSV (text/csv).

The REST API does not support modifying individual rows or values in the bulk recipients file. It only allows the entire file to be added or replaced with a new file.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} envelopeId The envelope's GUID. 

Example: `93be49ab-xxxx-xxxx-xxxx-f752070d71ec`

     * @param {String} recipientId A local reference that senders use to map recipients to other objects, such as specific document tabs. Within an envelope, each `recipientId` must be unique, but there is no uniqueness requirement across envelopes. For example, many envelopes assign the first recipient a `recipientId` of `1`.
     * @param {Blob} bulkRecipientsRequest 
     * @param {module:api/BulkEnvelopesApi~updateRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsSummaryResponse}
     */
    this.updateRecipients = function(bulkRecipientsRequest, accountId, envelopeId, recipientId, callback) {
      var postBody = bulkRecipientsRequest;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId === undefined || envelopeId === null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateRecipients");
      }

      // verify the required parameter 'bulkRecipientsRequest' is set
      if (bulkRecipientsRequest === undefined || bulkRecipientsRequest === null) {
        throw new Error("Missing the required parameter 'bulkRecipientsRequest' when calling updateRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'recipientId': recipientId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['text/csv'];
      var accepts = ['application/json'];
      var returnType = BulkRecipientsSummaryResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/bulk_recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));