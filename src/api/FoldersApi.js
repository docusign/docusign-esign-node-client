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
   * @version 3.0.0
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
     * Callback function to receive the result of the list operation.
     * @callback module:api/FoldersApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FoldersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of the folders for the account.
     * Retrieves a list of the folders for the account, including the folder hierarchy. You can specify whether to return just the template folder or template folder and normal folders by setting the &#x60;template&#x60; query string parameter.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/FoldersApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FoldersResponse}
     */
    this.list = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling list");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FoldersResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/folders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listItems operation.
     * @callback module:api/FoldersApi~listItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FolderItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of the envelopes in the specified folder.
     * Retrieves a list of the envelopes in the specified folder. You can narrow the query by specifying search criteria in the query string parameters.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {module:api/FoldersApi~listItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FolderItemsResponse}
     */
    this.listItems = function(accountId, folderId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listItems");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling listItems");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FolderItemsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/folders/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the moveEnvelopes operation.
     * @callback module:api/FoldersApi~moveEnvelopesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FoldersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Moves an envelope from its current folder to the specified folder.
     * Moves an envelope from its current folder to the specified folder.  #### Note: You can use this endpoint to delete envelopes by specifying &#x60;recyclebin&#39; in the &#x60;folderId&#x60; parameter of the endpoint. Placing an in process envelope (envelope status of &#x60;sent&#x60; or &#x60;delivered&#x60;) in the recycle bin voids the envelope. You can also use this endpoint to delete templates by specifying a template ID instead of an envelope ID in the &#39;envelopeIds&#39; property and specifying &#x60;recyclebin&#x60; in the &#x60;folderId&#x60; parameter. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/FoldersRequest} opts.foldersRequest TBD Description
     * @param {module:api/FoldersApi~moveEnvelopesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FoldersResponse}
     */
    this.moveEnvelopes = function(accountId, folderId, opts, callback) {
      opts = opts || {};
      var postBody = opts['foldersRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling moveEnvelopes");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling moveEnvelopes");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FoldersResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/folders/{folderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/FoldersApi~searchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FolderItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of envelopes in folders matching the specified criteria.
     * Retrieves a list of envelopes that match the criteria specified in the query.  If the user ID of the user making the call is the same as the user ID for any returned recipient, then the userId property is added to the returned information for those recipients.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} searchFolderId Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature.
     * @param {Object} opts Optional parameters
     * @param {String} opts.toDate Specifies the end of the date range to return.
     * @param {String} opts.order Specifies the order in which the list is returned. Valid values are: &#x60;asc&#x60; for ascending order, and &#x60;desc&#x60; for descending order.
     * @param {String} opts.includeRecipients When set to **true**, the recipient information is returned in the response.
     * @param {String} opts.all Specifies that all envelopes that match the criteria are returned.
     * @param {String} opts.orderBy Specifies the property used to sort the list. Valid values are: &#x60;action_required&#x60;, &#x60;created&#x60;, &#x60;completed&#x60;, &#x60;sent&#x60;, &#x60;signer_list&#x60;, &#x60;status&#x60;, or &#x60;subject&#x60;.
     * @param {String} opts.startPosition Specifies the the starting location in the result set of the items that are returned.
     * @param {String} opts.count Specifies the number of records returned in the cache. The number must be greater than 0 and less than or equal to 100.
     * @param {String} opts.fromDate Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days.
     * @param {module:api/FoldersApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FolderItemResponse}
     */
    this.search = function(accountId, searchFolderId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling search");
      }

      // verify the required parameter 'searchFolderId' is set
      if (searchFolderId == undefined || searchFolderId == null) {
        throw new Error("Missing the required parameter 'searchFolderId' when calling search");
      }


      var pathParams = {
        'accountId': accountId,
        'searchFolderId': searchFolderId
      };
      var queryParams = {
        'to_date': opts['toDate'],
        'order': opts['order'],
        'include_recipients': opts['includeRecipients'],
        'all': opts['all'],
        'order_by': opts['orderBy'],
        'start_position': opts['startPosition'],
        'count': opts['count'],
        'from_date': opts['fromDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FolderItemResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/search_folders/{searchFolderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
