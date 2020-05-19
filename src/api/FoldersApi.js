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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/FolderItemResponse', 'model/FolderItemsResponse', 'model/FoldersRequest', 'model/FoldersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/FolderItemResponse'), require('../model/FolderItemsResponse'), require('../model/FoldersRequest'), require('../model/FoldersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FoldersApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.FolderItemResponse, root.Docusign.FolderItemsResponse, root.Docusign.FoldersRequest, root.Docusign.FoldersResponse);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, FolderItemResponse, FolderItemsResponse, FoldersRequest, FoldersResponse) {
  'use strict';

  /**
   * Folders service.
   * @module api/FoldersApi
   */

  /**
   * Constructs a new FoldersApi. 
   * @alias module:api/FoldersApi
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
     * (Optional) Callback function to receive the result of the list operation. If none specified a Promise will be returned.
     * @callback module:api/FoldersApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FoldersResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of the folders for the account.
     * Retrieves a list of the folders for the account, including the folder hierarchy. You can specify whether to return just the template folder or template folder and normal folders by setting the `template` query string parameter.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {String} optsOrCallback.includeItems 
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.template Specifies the items that are returned. Valid values are:   * include - The folder list will return normal folders plus template folders.  * only - Only the list of template folders are returned.
     * @param {String} optsOrCallback.userFilter 
     * @param {module:api/FoldersApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FoldersResponse}
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
        'include': optsOrCallback['include'],
        'include_items': optsOrCallback['includeItems'],
        'start_position': optsOrCallback['startPosition'],
        'template': optsOrCallback['template'],
        'user_filter': optsOrCallback['userFilter']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FoldersResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/folders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listItems operation. If none specified a Promise will be returned.
     * @callback module:api/FoldersApi~listItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FolderItemsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of the envelopes in the specified folder.
     * Retrieves a list of the envelopes in the specified folder. You can narrow the query by specifying search criteria in the query string parameters.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.fromDate  Only return items on or after this date. If no value is provided, the default search is the previous 30 days. 
     * @param {String} optsOrCallback.includeItems 
     * @param {String} optsOrCallback.ownerEmail  The email of the folder owner. 
     * @param {String} optsOrCallback.ownerName  The name of the folder owner. 
     * @param {String} optsOrCallback.searchText  The search text used to search the items of the envelope. The search looks at recipient names and emails, envelope custom fields, sender name, and subject. 
     * @param {String} optsOrCallback.startPosition The position of the folder items to return. This is used for repeated calls, when the number of envelopes returned is too much for one return (calls return 100 envelopes at a time). The default value is 0.
     * @param {String} optsOrCallback.status The current status of the envelope. If no value is provided, the default search is all/any status.
     * @param {String} optsOrCallback.toDate Only return items up to this date. If no value is provided, the default search is to the current date.
     * @param {module:api/FoldersApi~listItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FolderItemsResponse}
     */
    this.listItems = function(accountId, folderId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listItems");
      }

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling listItems");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'folderId': folderId
      };
      var queryParams = {
        'from_date': optsOrCallback['fromDate'],
        'include_items': optsOrCallback['includeItems'],
        'owner_email': optsOrCallback['ownerEmail'],
        'owner_name': optsOrCallback['ownerName'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FolderItemsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/folders/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the moveEnvelopes operation. If none specified a Promise will be returned.
     * @callback module:api/FoldersApi~moveEnvelopesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FoldersResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Moves an envelope from its current folder to the specified folder.
     * Moves envelopes to the specified folder.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/FoldersRequest} optsOrCallback.foldersRequest 
     * @param {module:api/FoldersApi~moveEnvelopesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FoldersResponse}
     */
    this.moveEnvelopes = function(accountId, folderId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['foldersRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling moveEnvelopes");
      }

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling moveEnvelopes");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'folderId': folderId
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
      var returnType = FoldersResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/folders/{folderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the search operation. If none specified a Promise will be returned.
     * @callback module:api/FoldersApi~searchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FolderItemResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of envelopes in folders matching the specified criteria.
     * Retrieves a list of envelopes that match the criteria specified in the query.

If the user ID of the user making the call is the same as the user ID for any returned recipient, then the userId property is added to the returned information for those recipients.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} searchFolderId Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.all Specifies that all envelopes that match the criteria are returned.
     * @param {String} optsOrCallback.count Specifies the number of records returned in the cache. The number must be greater than 0 and less than or equal to 100.
     * @param {String} optsOrCallback.fromDate Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days.
     * @param {String} optsOrCallback.includeRecipients When set to **true**, the recipient information is returned in the response.
     * @param {String} optsOrCallback.order Specifies the order in which the list is returned. Valid values are: `asc` for ascending order, and `desc` for descending order.
     * @param {String} optsOrCallback.orderBy Specifies the property used to sort the list. Valid values are: `action_required`, `created`, `completed`, `sent`, `signer_list`, `status`, or `subject`.
     * @param {String} optsOrCallback.startPosition Specifies the the starting location in the result set of the items that are returned.
     * @param {String} optsOrCallback.toDate Specifies the end of the date range to return.
     * @param {module:api/FoldersApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FolderItemResponse}
     */
    this.search = function(accountId, searchFolderId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling search");
      }

      // verify the required parameter 'searchFolderId' is set
      if (searchFolderId === undefined || searchFolderId === null) {
        throw new Error("Missing the required parameter 'searchFolderId' when calling search");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'searchFolderId': searchFolderId
      };
      var queryParams = {
        'all': optsOrCallback['all'],
        'count': optsOrCallback['count'],
        'from_date': optsOrCallback['fromDate'],
        'include_recipients': optsOrCallback['includeRecipients'],
        'order': optsOrCallback['order'],
        'order_by': optsOrCallback['orderBy'],
        'start_position': optsOrCallback['startPosition'],
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FolderItemResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/search_folders/{searchFolderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));