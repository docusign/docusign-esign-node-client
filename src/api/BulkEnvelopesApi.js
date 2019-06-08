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
	define(['Configuration', 'ApiClient', 'model/BulkEnvelopeStatus', 'model/BulkEnvelopesResponse', 'model/BulkRecipientsRequest', 'model/BulkRecipientsResponse', 'model/BulkRecipientsSummaryResponse', 'model/BulkRecipientsUpdateResponse', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkEnvelopeStatus'), require('../model/BulkEnvelopesResponse'), require('../model/BulkRecipientsRequest'), require('../model/BulkRecipientsResponse'), require('../model/BulkRecipientsSummaryResponse'), require('../model/BulkRecipientsUpdateResponse'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkEnvelopesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BulkEnvelopeStatus, root.Docusign.BulkEnvelopesResponse, root.Docusign.BulkRecipientsRequest, root.Docusign.BulkRecipientsResponse, root.Docusign.BulkRecipientsSummaryResponse, root.Docusign.BulkRecipientsUpdateResponse, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, BulkEnvelopeStatus, BulkEnvelopesResponse, BulkRecipientsRequest, BulkRecipientsResponse, BulkRecipientsSummaryResponse, BulkRecipientsUpdateResponse, ErrorDetails) {
  'use strict';

  /**
   * BulkEnvelopes service.
   * @module api/BulkEnvelopesApi
   * @version 3.0.0
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
     * (Optional)Callback function to receive the result of the deleteRecipients operation. If none specified a Promise will be returned.
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
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

      var authNames = [];
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
     * (Optional)Callback function to receive the result of the get operation. If none specified a Promise will be returned.
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
     * @param {String} optsOrCallback.include Specifies which entries are included in the response. Multiple entries can be included by using commas in the query string (example: ?include&#x3D;\&quot;failed,queued\&quot;)   Valid values are:   * all - Returns all entries. If present, overrides all other query settings. This is the default if no query string is provided. * failed - This only returns entries with a failed status. * queued - This only returns entries with a queued status. * sent - This only returns entries with a sent status.  
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }

      // verify the required parameter 'batchId' is set
      if (batchId == undefined || batchId == null) {
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

      var authNames = [];
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
     * (Optional)Callback function to receive the result of the getRecipients operation. If none specified a Promise will be returned.
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
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

      var authNames = [];
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
     * (Optional)Callback function to receive the result of the list operation. If none specified a Promise will be returned.
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
     * @param {String} optsOrCallback.include 
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
      if (accountId == undefined || accountId == null) {
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
        'include': optsOrCallback['include'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
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
     * (Optional)Callback function to receive the result of the updateRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsSummaryResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds or replaces envelope bulk recipients.
     * Updates the bulk recipients in a draft envelope using a file upload. The Content-Type supported for uploading a bulk recipient file is CSV (text/csv).

The REST API does not support modifying individual rows or values in the bulk recipients file. It only allows the entire file to be added or replaced with a new file.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkRecipientsRequest} optsOrCallback.bulkRecipientsRequest 
     * @param {module:api/BulkEnvelopesApi~updateRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsSummaryResponse}
     */
    this.updateRecipients = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkRecipientsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateRecipients");
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

      var authNames = [];
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
