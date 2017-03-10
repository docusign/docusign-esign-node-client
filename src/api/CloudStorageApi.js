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
	define(['Configuration', 'ApiClient', 'model/CloudStorageProviders', 'model/ErrorDetails', 'model/ExternalFolder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/CloudStorageProviders'), require('../model/ErrorDetails'), require('../model/ExternalFolder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CloudStorageApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.CloudStorageProviders, root.Docusign.ErrorDetails, root.Docusign.ExternalFolder);
  }
}(this, function(Configuration, ApiClient, CloudStorageProviders, ErrorDetails, ExternalFolder) {
  'use strict';

  /**
   * CloudStorage service.
   * @module api/CloudStorageApi
   * @version 3.0.0
   */

  /**
   * Constructs a new CloudStorageApi. 
   * @alias module:api/CloudStorageApi
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
     * Callback function to receive the result of the createProvider operation.
     * @callback module:api/CloudStorageApi~createProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudStorageProviders} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configures the redirect URL information  for one or more cloud storage providers for the specified user.
     * Configures the redirect URL information  for one or more cloud storage providers for the specified user. The redirect URL is added to the authentication URL to complete the return route.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} opts Optional parameters
     * @param {module:model/CloudStorageProviders} opts.cloudStorageProviders 
     * @param {module:api/CloudStorageApi~createProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudStorageProviders}
     */
    this.createProvider = function(accountId, userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['cloudStorageProviders'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createProvider");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling createProvider");
      }


      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = CloudStorageProviders;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/cloud_storage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteProvider operation.
     * @callback module:api/CloudStorageApi~deleteProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudStorageProviders} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the user authentication information for the specified cloud storage provider.
     * Deletes the user authentication information for the specified cloud storage provider. The next time the user tries to access the cloud storage provider, they must pass normal authentication for this cloud storage provider.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} serviceId The ID of the service to access. 

Valid values are the service name (&quot;Box&quot;) or the numerical serviceId (&quot;4136&quot;).
     * @param {module:api/CloudStorageApi~deleteProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudStorageProviders}
     */
    this.deleteProvider = function(accountId, userId, serviceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteProvider");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteProvider");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw new Error("Missing the required parameter 'serviceId' when calling deleteProvider");
      }


      var pathParams = {
        'accountId': accountId,
        'serviceId': serviceId,
        'userId': userId
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
      var returnType = CloudStorageProviders;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteProviders operation.
     * @callback module:api/CloudStorageApi~deleteProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudStorageProviders} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the user authentication information for one or more cloud storage providers.
     * Deletes the user authentication information for one or more cloud storage providers. The next time the user tries to access the cloud storage provider, they must pass normal authentication.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} opts Optional parameters
     * @param {module:model/CloudStorageProviders} opts.cloudStorageProviders 
     * @param {module:api/CloudStorageApi~deleteProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudStorageProviders}
     */
    this.deleteProviders = function(accountId, userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['cloudStorageProviders'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteProviders");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteProviders");
      }


      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = CloudStorageProviders;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/cloud_storage', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getProvider operation.
     * @callback module:api/CloudStorageApi~getProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudStorageProviders} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the specified Cloud Storage Provider configuration for the User.
     * Retrieves the list of cloud storage providers enabled for the account and the configuration information for the user.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} serviceId The ID of the service to access. 

Valid values are the service name (&quot;Box&quot;) or the numerical serviceId (&quot;4136&quot;).
     * @param {Object} opts Optional parameters
     * @param {String} opts.redirectUrl  The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.  The redirectUrl is restricted to URLs in the docusign.com or docusign.net domains.  
     * @param {module:api/CloudStorageApi~getProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudStorageProviders}
     */
    this.getProvider = function(accountId, userId, serviceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getProvider");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getProvider");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getProvider");
      }


      var pathParams = {
        'accountId': accountId,
        'serviceId': serviceId,
        'userId': userId
      };
      var queryParams = {
        'redirectUrl': opts['redirectUrl']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CloudStorageProviders;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/CloudStorageApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalFolder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of all the items from the specified cloud storage provider.
     * Retrieves a list of all the items in all  the folders associated with the user from the specified cloud storage provider. You can limit the scope of the returned items by providing a comma separated list of folder IDs in the request.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} serviceId The ID of the service to access. 

Valid values are the service name (&quot;Box&quot;) or the numerical serviceId (&quot;4136&quot;).
     * @param {String} folderId The ID of the folder being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cloudStorageFolderPath 
     * @param {String} opts.count An optional value that sets how many items are included in the response.   The default setting for this is 25. 
     * @param {String} opts.order An optional value that sets the direction order used to sort the item list.   Valid values are:   * asc &#x3D; ascending sort order * desc &#x3D; descending sort order 
     * @param {String} opts.orderBy An optional value that sets the file attribute used to sort the item list.   Valid values are:   * modified * name  
     * @param {String} opts.searchText 
     * @param {String} opts.startPosition Indicates the starting point of the first item included in the response set. It uses a 0-based index. The default setting for this is 0.  
     * @param {module:api/CloudStorageApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExternalFolder}
     */
    this.list = function(accountId, userId, serviceId, folderId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling list");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling list");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw new Error("Missing the required parameter 'serviceId' when calling list");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling list");
      }


      var pathParams = {
        'accountId': accountId,
        'folderId': folderId,
        'serviceId': serviceId,
        'userId': userId
      };
      var queryParams = {
        'cloud_storage_folder_path': opts['cloudStorageFolderPath'],
        'count': opts['count'],
        'order': opts['order'],
        'order_by': opts['orderBy'],
        'search_text': opts['searchText'],
        'start_position': opts['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ExternalFolder;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}/folders/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listFolders operation.
     * @callback module:api/CloudStorageApi~listFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalFolder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a list of all the items in a specified folder from the specified cloud storage provider.
     * Retrieves a list of all the items in a specified folder from the specified cloud storage provider. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} serviceId The ID of the service to access. 

Valid values are the service name (&quot;Box&quot;) or the numerical serviceId (&quot;4136&quot;).
     * @param {Object} opts Optional parameters
     * @param {String} opts.cloudStorageFolderPath A comma separated list of folder IDs included in the request. 
     * @param {String} opts.count An optional value that sets how many items are included in the response.   The default setting for this is 25. 
     * @param {String} opts.order An optional value that sets the direction order used to sort the item list.   Valid values are:   * asc &#x3D; ascending sort order * desc &#x3D; descending sort order 
     * @param {String} opts.orderBy An optional value that sets the file attribute used to sort the item list.   Valid values are:   * modified * name  
     * @param {String} opts.searchText 
     * @param {String} opts.startPosition Indicates the starting point of the first item included in the response set. It uses a 0-based index. The default setting for this is 0.  
     * @param {module:api/CloudStorageApi~listFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExternalFolder}
     */
    this.listFolders = function(accountId, userId, serviceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listFolders");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling listFolders");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listFolders");
      }


      var pathParams = {
        'accountId': accountId,
        'serviceId': serviceId,
        'userId': userId
      };
      var queryParams = {
        'cloud_storage_folder_path': opts['cloudStorageFolderPath'],
        'count': opts['count'],
        'order': opts['order'],
        'order_by': opts['orderBy'],
        'search_text': opts['searchText'],
        'start_position': opts['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ExternalFolder;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}/folders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listProviders operation.
     * @callback module:api/CloudStorageApi~listProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudStorageProviders} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Cloud Storage Provider configuration for the specified user.
     * Retrieves the list of cloud storage providers enabled for the account and the configuration information for the user.

The {serviceId} parameter can be either the service name or serviceId.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} opts Optional parameters
     * @param {String} opts.redirectUrl  The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.  The redirectUrl is restricted to URLs in the docusign.com or docusign.net domains.  
     * @param {module:api/CloudStorageApi~listProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudStorageProviders}
     */
    this.listProviders = function(accountId, userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listProviders");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling listProviders");
      }


      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
        'redirectUrl': opts['redirectUrl']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CloudStorageProviders;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/cloud_storage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
