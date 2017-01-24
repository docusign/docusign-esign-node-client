(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/ViewUrl', '../model/ErrorDetails', '../model/ReturnUrlRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ViewUrl'), require('../model/ErrorDetails'), require('../model/ReturnUrlRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DefaultApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ViewUrl, root.Docusign.ErrorDetails, root.Docusign.ReturnUrlRequest);
  }
}(this, function(Configuration, ApiClient, ViewUrl, ErrorDetails, ReturnUrlRequest) {
  'use strict';

  var DefaultApi = function DefaultApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };
    
    self.getApiClient = function() {
      return this.apiClient;
    };
    
    
    
    /**
     * Provides a URL to start an edit view of the Template UI
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {ReturnUrlRequest} returnUrlRequest: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ViewUrl
     */
    self.templateEditView = function(accountId, templateId, returnUrlRequest, callback) {
      var postBody = returnUrlRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling templateEditView";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling templateEditView";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
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
            var result = new ViewUrl();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/views/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return DefaultApi;
}));
