(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/FoldersResponse', '../model/ErrorDetails', '../model/FolderItemsResponse', '../model/FoldersRequest', '../model/FolderItemResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/FoldersResponse'), require('../model/ErrorDetails'), require('../model/FolderItemsResponse'), require('../model/FoldersRequest'), require('../model/FolderItemResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FoldersApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.FoldersResponse, root.Docusign.ErrorDetails, root.Docusign.FolderItemsResponse, root.Docusign.FoldersRequest, root.Docusign.FolderItemResponse);
  }
}(this, function(Configuration, ApiClient, FoldersResponse, ErrorDetails, FolderItemsResponse, FoldersRequest, FolderItemResponse) {
  'use strict';

  var FoldersApi = function FoldersApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    /// <summary>
    /// Gets a list of the folders for the account. Retrieves a list of the folders for the account, including the folder hierarchy. You can specify whether to return just the template folder or template folder and normal folders by setting the `template` query string parameter.
    /// </summary>
    self.ListOptions = function () {
      
      var startPosition = null;
      
      var userFilter = null;
      
      var includeItems = null;
      
      var template = null;
      
      var include = null;
      
      
      this.setStartPosition = function(startPosition) {
        this.startPosition = startPosition;
      }
	
      this.getStartPosition = function() {
        return this.startPosition;
      }
      
      this.setUserFilter = function(userFilter) {
        this.userFilter = userFilter;
      }
	
      this.getUserFilter = function() {
        return this.userFilter;
      }
      
      this.setIncludeItems = function(includeItems) {
        this.includeItems = includeItems;
      }
	
      this.getIncludeItems = function() {
        return this.includeItems;
      }
      
      /*
       * Specifies the items that are returned. Valid values are: \n\n* include - The folder list will return normal folders plus template folders. \n* only - Only the list of template folders are returned.
       */
      this.setTemplate = function(template) {
        this.template = template;
      }
	
      this.getTemplate = function() {
        return this.template;
      }
      
      this.setInclude = function(include) {
        this.include = include;
      }
	
      this.getInclude = function() {
        return this.include;
      }
      
    }
    
    
    /**
     * Gets a list of the folders for the account.
     * Retrieves a list of the folders for the account, including the folder hierarchy. You can specify whether to return just the template folder or template folder and normal folders by setting the `template` query string parameter.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {FoldersApi.ListOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: FoldersResponse
     */
    self.list = function(accountId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling list";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'start_position': options.startPosition,
          'user_filter': options.userFilter,
          'include_items': options.includeItems,
          'template': options.template,
          'include': options.include
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new FoldersResponse();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/folders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Gets a list of the envelopes in the specified folder. Retrieves a list of the envelopes in the specified folder. You can narrow the query by specifying search criteria in the query string parameters.
    /// </summary>
    self.ListItemsOptions = function () {
      
      var searchText = null;
      
      var toDate = null;
      
      var fromDate = null;
      
      var ownerEmail = null;
      
      var ownerName = null;
      
      var startPosition = null;
      
      var status = null;
      
      var includeItems = null;
      
      
      /*
       * The search text used to search the items of the envelope. The search looks at recipient names and emails, envelope custom fields, sender name, and subject.
       */
      this.setSearchText = function(searchText) {
        this.searchText = searchText;
      }
	
      this.getSearchText = function() {
        return this.searchText;
      }
      
      /*
       * Only return items up to this date. If no value is provided, the default search is to the current date.
       */
      this.setToDate = function(toDate) {
        this.toDate = toDate;
      }
	
      this.getToDate = function() {
        return this.toDate;
      }
      
      /*
       * Only return items on or after this date. If no value is provided, the default search is the previous 30 days.
       */
      this.setFromDate = function(fromDate) {
        this.fromDate = fromDate;
      }
	
      this.getFromDate = function() {
        return this.fromDate;
      }
      
      /*
       * The email of the folder owner.
       */
      this.setOwnerEmail = function(ownerEmail) {
        this.ownerEmail = ownerEmail;
      }
	
      this.getOwnerEmail = function() {
        return this.ownerEmail;
      }
      
      /*
       * The name of the folder owner.
       */
      this.setOwnerName = function(ownerName) {
        this.ownerName = ownerName;
      }
	
      this.getOwnerName = function() {
        return this.ownerName;
      }
      
      /*
       * The position of the folder items to return. This is used for repeated calls, when the number of envelopes returned is too much for one return (calls return 100 envelopes at a time). The default value is 0.
       */
      this.setStartPosition = function(startPosition) {
        this.startPosition = startPosition;
      }
	
      this.getStartPosition = function() {
        return this.startPosition;
      }
      
      /*
       * The current status of the envelope. If no value is provided, the default search is all/any status.
       */
      this.setStatus = function(status) {
        this.status = status;
      }
	
      this.getStatus = function() {
        return this.status;
      }
      
      this.setIncludeItems = function(includeItems) {
        this.includeItems = includeItems;
      }
	
      this.getIncludeItems = function() {
        return this.includeItems;
      }
      
    }
    
    
    /**
     * Gets a list of the envelopes in the specified folder.
     * Retrieves a list of the envelopes in the specified folder. You can narrow the query by specifying search criteria in the query string parameters.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {FoldersApi.ListItemsOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: FolderItemsResponse
     */
    self.listItems = function(accountId, folderId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listItems";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling listItems";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'folderId': folderId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'search_text': options.searchText,
          'to_date': options.toDate,
          'from_date': options.fromDate,
          'owner_email': options.ownerEmail,
          'owner_name': options.ownerName,
          'start_position': options.startPosition,
          'status': options.status,
          'include_items': options.includeItems
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new FolderItemsResponse();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/folders/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Moves an envelope from its current folder to the specified folder.
     * Moves an envelope from its current folder to the specified folder.\n\n###### Note: You can use this endpoint to delete envelopes by specifying `recyclebin&#39; in the `folderId` parameter of the endpoint. Placing an in process envelope (envelope status of `sent` or `delivered`) in the recycle bin voids the envelope. You can also use this endpoint to delete templates by specifying a template ID instead of an envelope ID in the &#39;envelopeIds&#39; property and specifying `recyclebin` in the `folderId` parameter.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {FoldersRequest} foldersRequest: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: FoldersResponse
     */
    self.moveEnvelopes = function(accountId, folderId, foldersRequest, callback) {
      var postBody = foldersRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling moveEnvelopes";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling moveEnvelopes";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'folderId': folderId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new FoldersResponse();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/folders/{folderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Gets a list of envelopes in folders matching the specified criteria. Retrieves a list of envelopes that match the criteria specified in the query.\n\nIf the user ID of the user making the call is the same as the user ID for any returned recipient, then the userId property is added to the returned information for those recipients.
    /// </summary>
    self.SearchOptions = function () {
      
      var all = null;
      
      var startPosition = null;
      
      var count = null;
      
      var fromDate = null;
      
      var toDate = null;
      
      var order = null;
      
      var orderBy = null;
      
      var includeRecipients = null;
      
      
      /*
       * Specifies that all envelopes that match the criteria are returned.
       */
      this.setAll = function(all) {
        this.all = all;
      }
	
      this.getAll = function() {
        return this.all;
      }
      
      /*
       * Specifies the the starting location in the result set of the items that are returned.
       */
      this.setStartPosition = function(startPosition) {
        this.startPosition = startPosition;
      }
	
      this.getStartPosition = function() {
        return this.startPosition;
      }
      
      /*
       * Specifies the number of records returned in the cache. The number must be greater than 0 and less than or equal to 100.
       */
      this.setCount = function(count) {
        this.count = count;
      }
	
      this.getCount = function() {
        return this.count;
      }
      
      /*
       * Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days.
       */
      this.setFromDate = function(fromDate) {
        this.fromDate = fromDate;
      }
	
      this.getFromDate = function() {
        return this.fromDate;
      }
      
      /*
       * Specifies the end of the date range to return.
       */
      this.setToDate = function(toDate) {
        this.toDate = toDate;
      }
	
      this.getToDate = function() {
        return this.toDate;
      }
      
      /*
       * Specifies the order in which the list is returned. Valid values are: `asc` for ascending order, and `desc` for descending order.
       */
      this.setOrder = function(order) {
        this.order = order;
      }
	
      this.getOrder = function() {
        return this.order;
      }
      
      /*
       * Specifies the property used to sort the list. Valid values are: `action_required`, `created`, `completed`, `sent`, `signer_list`, `status`, or `subject`.
       */
      this.setOrderBy = function(orderBy) {
        this.orderBy = orderBy;
      }
	
      this.getOrderBy = function() {
        return this.orderBy;
      }
      
      /*
       * When set to **true**, the recipient information is returned in the response.
       */
      this.setIncludeRecipients = function(includeRecipients) {
        this.includeRecipients = includeRecipients;
      }
	
      this.getIncludeRecipients = function() {
        return this.includeRecipients;
      }
      
    }
    
    
    /**
     * Gets a list of envelopes in folders matching the specified criteria.
     * Retrieves a list of envelopes that match the criteria specified in the query.\n\nIf the user ID of the user making the call is the same as the user ID for any returned recipient, then the userId property is added to the returned information for those recipients.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} searchFolderId: Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature.
     * @param {FoldersApi.SearchOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: FolderItemResponse
     */
    self.search = function(accountId, searchFolderId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling search";
      }
      
      // verify the required parameter 'searchFolderId' is set
      if (searchFolderId == null) {
        throw "Missing the required parameter 'searchFolderId' when calling search";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'searchFolderId': searchFolderId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'all': options.all,
          'start_position': options.startPosition,
          'count': options.count,
          'from_date': options.fromDate,
          'to_date': options.toDate,
          'order': options.order,
          'order_by': options.orderBy,
          'include_recipients': options.includeRecipients
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new FolderItemResponse();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/search_folders/{searchFolderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return FoldersApi;
}));
