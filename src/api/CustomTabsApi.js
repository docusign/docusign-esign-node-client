(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/ErrorDetails', '../model/TabMetadataList', '../model/TabMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/TabMetadataList'), require('../model/TabMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CustomTabsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.TabMetadataList, root.Docusign.TabMetadata);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, TabMetadataList, TabMetadata) {
  'use strict';

  var CustomTabsApi = function CustomTabsApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    /// <summary>
    /// Gets a list of all account tabs. Retrieves a list of all tabs associated with the account.
    /// </summary>
    self.ListOptions = function () {
      
      var customTabOnly = null;
      
      
      /*
       * When set to **true**, only custom tabs are returned in the response.
       */
      this.setCustomTabOnly = function(customTabOnly) {
        this.customTabOnly = customTabOnly;
      }
	
      this.getCustomTabOnly = function() {
        return this.customTabOnly;
      }
      
    }
    
    
    /**
     * Gets a list of all account tabs.
     * Retrieves a list of all tabs associated with the account.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {CustomTabsApi.ListOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TabMetadataList
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
          'custom_tab_only': options.customTabOnly
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
            var result = new TabMetadataList();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/tab_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Creates a custom tab.
     * Creates a tab with pre-defined properties, such as a text tab with a certain font type and validation pattern. Users can access the custom tabs when sending documents through the DocuSign web application.\n\nCustom tabs can be created for approve, checkbox, company, date, date signed, decline, email, email address, envelope ID, first name, formula, full name, initial here, last name, list, note, number, radio, sign here, signer attachment, SSN, text, title, and zip tabs.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {TabMetadata} tabMetadata: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TabMetadata
     */
    self.create = function(accountId, tabMetadata, callback) {
      var postBody = tabMetadata;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling create";
      }
      

      
      var pathParams = {
        'accountId': accountId
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
            var result = new TabMetadata();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/tab_definitions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets custom tab information.
     * Retrieves information about the requested custom tab on the specified account.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} customTabId: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TabMetadata
     */
    self.get = function(accountId, customTabId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling get";
      }
      
      // verify the required parameter 'customTabId' is set
      if (customTabId == null) {
        throw "Missing the required parameter 'customTabId' when calling get";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'customTabId': customTabId
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
            var result = new TabMetadata();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/tab_definitions/{customTabId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates custom tab information.
     * Updates the information in a custom tab for the specified account.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} customTabId: 
     * @param {TabMetadata} tabMetadata: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TabMetadata
     */
    self.update = function(accountId, customTabId, tabMetadata, callback) {
      var postBody = tabMetadata;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling update";
      }
      
      // verify the required parameter 'customTabId' is set
      if (customTabId == null) {
        throw "Missing the required parameter 'customTabId' when calling update";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'customTabId': customTabId
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
            var result = new TabMetadata();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/tab_definitions/{customTabId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes custom tab information.
     * Deletes the custom from the specified account.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} customTabId: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.delete = function(accountId, customTabId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling delete";
      }
      
      // verify the required parameter 'customTabId' is set
      if (customTabId == null) {
        throw "Missing the required parameter 'customTabId' when calling delete";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'customTabId': customTabId
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
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/tab_definitions/{customTabId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return CustomTabsApi;
}));
