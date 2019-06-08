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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/SigningGroup', 'model/SigningGroupInformation', 'model/SigningGroupUsers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/SigningGroup'), require('../model/SigningGroupInformation'), require('../model/SigningGroupUsers'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SigningGroupsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.SigningGroup, root.Docusign.SigningGroupInformation, root.Docusign.SigningGroupUsers);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, SigningGroup, SigningGroupInformation, SigningGroupUsers) {
  'use strict';

  /**
   * SigningGroups service.
   * @module api/SigningGroupsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new SigningGroupsApi. 
   * @alias module:api/SigningGroupsApi
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
     * (Optional)Callback function to receive the result of the createList operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~createListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a signing group. 
     * Creates one or more signing groups. 

Multiple signing groups can be created in one call. Only users with account administrator privileges can create signing groups. 

An account can have a maximum of 50 signing groups. Each signing group can have a maximum of 50 group members.
 
Signing groups can be used by any account user.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/SigningGroupInformation} optsOrCallback.signingGroupInformation 
     * @param {module:api/SigningGroupsApi~createListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
     */
    this.createList = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['signingGroupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createList");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteList operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~deleteListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes one or more signing groups.
     * Deletes one or more signing groups in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/SigningGroupInformation} optsOrCallback.signingGroupInformation 
     * @param {module:api/SigningGroupsApi~deleteListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
     */
    this.deleteList = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['signingGroupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteList");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteUsers operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~deleteUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupUsers} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes  one or more members from a signing group.
     * Deletes  one or more members from the specified signing group. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/SigningGroupUsers} optsOrCallback.signingGroupUsers 
     * @param {module:api/SigningGroupsApi~deleteUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupUsers}
     */
    this.deleteUsers = function(accountId, signingGroupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['signingGroupUsers'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteUsers");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling deleteUsers");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
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
      var returnType = SigningGroupUsers;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the get operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroup} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets information about a signing group. 
     * Retrieves information, including group member information, for the specified signing group. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {module:api/SigningGroupsApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroup}
     */
    this.get = function(accountId, signingGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling get");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
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
      var returnType = SigningGroup;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the list operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of the Signing Groups in an account.
     * Retrieves a list of all signing groups in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.groupType 
     * @param {String} optsOrCallback.includeUsers When set to **true**, the response includes the signing group members. 
     * @param {module:api/SigningGroupsApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
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
        'group_type': optsOrCallback['groupType'],
        'include_users': optsOrCallback['includeUsers']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listUsers operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~listUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupUsers} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of members in a Signing Group.
     * Retrieves the list of members in the specified Signing Group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {module:api/SigningGroupsApi~listUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupUsers}
     */
    this.listUsers = function(accountId, signingGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listUsers");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling listUsers");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
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
      var returnType = SigningGroupUsers;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the update operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroup} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates a signing group. 
     * Updates signing group name and member information. You can also add new members to the signing group. A signing group can have a maximum of 50 members. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/SigningGroup} optsOrCallback.signingGroup 
     * @param {module:api/SigningGroupsApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroup}
     */
    this.update = function(accountId, signingGroupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['signingGroup'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling update");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
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
      var returnType = SigningGroup;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateList operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~updateListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates signing group names.
     * Updates the name of one or more existing signing groups. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/SigningGroupInformation} optsOrCallback.signingGroupInformation 
     * @param {module:api/SigningGroupsApi~updateListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
     */
    this.updateList = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['signingGroupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateList");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateUsers operation. If none specified a Promise will be returned.
     * @callback module:api/SigningGroupsApi~updateUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupUsers} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds members to a signing group. 
     * Adds one or more new members to a signing group. A signing group can have a maximum of 50 members. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/SigningGroupUsers} optsOrCallback.signingGroupUsers 
     * @param {module:api/SigningGroupsApi~updateUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupUsers}
     */
    this.updateUsers = function(accountId, signingGroupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['signingGroupUsers'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateUsers");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling updateUsers");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
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
      var returnType = SigningGroupUsers;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
