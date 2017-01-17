(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/WorkspaceList', '../model/ErrorDetails', '../model/Workspace'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/WorkspaceList'), require('../model/ErrorDetails'), require('../model/Workspace'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkspacesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.WorkspaceList, root.Docusign.ErrorDetails, root.Docusign.Workspace);
  }
}(this, function(Configuration, ApiClient, WorkspaceList, ErrorDetails, Workspace) {
  'use strict';

  var WorkspacesApi = function WorkspacesApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    
    /**
     * List Workspaces
     * Gets information about the Workspaces that have been created.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: WorkspaceList
     */
    self.list = function(accountId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling list";
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
            var result = new WorkspaceList();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Create a Workspace
     * Creates a new workspace.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {Workspace} workspace: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Workspace
     */
    self.create = function(accountId, workspace, callback) {
      var postBody = workspace;
      
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
            var result = new Workspace();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Get Workspace
     * Retrives properties about a workspace given a unique workspaceId.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Workspace
     */
    self.get = function(accountId, workspaceId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling get";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling get";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId
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
            var result = new Workspace();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Update Workspace
     * Updates information about a specific workspace.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {Workspace} workspace: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Workspace
     */
    self.update = function(accountId, workspaceId, workspace, callback) {
      var postBody = workspace;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling update";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling update";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId
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
            var result = new Workspace();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Delete Workspace
     * Deletes an existing workspace (logically).
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Workspace
     */
    self.delete = function(accountId, workspaceId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling delete";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling delete";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId
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
            var result = new Workspace();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return WorkspacesApi;
}));
