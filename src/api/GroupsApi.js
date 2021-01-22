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
	define(['Configuration', 'ApiClient', 'model/BrandsRequest', 'model/ErrorDetails', 'model/GroupBrands', 'model/GroupInformation', 'model/UserInfoList', 'model/UsersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BrandsRequest'), require('../model/ErrorDetails'), require('../model/GroupBrands'), require('../model/GroupInformation'), require('../model/UserInfoList'), require('../model/UsersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.GroupsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BrandsRequest, root.Docusign.ErrorDetails, root.Docusign.GroupBrands, root.Docusign.GroupInformation, root.Docusign.UserInfoList, root.Docusign.UsersResponse);
  }
}(this, function(Configuration, ApiClient, BrandsRequest, ErrorDetails, GroupBrands, GroupInformation, UserInfoList, UsersResponse) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:api/GroupsApi
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
     * (Optional) Callback function to receive the result of the createGroups operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~createGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates one or more groups for the account.
     * Creates one or more groups for the account.

Groups can be used to help manage users by associating users with a group. You can associate a group with a Permission Profile, which sets the user permissions for users in that group without having to set the `userSettings` property for each user. You are not required to set Permission Profiles for a group, but it makes it easier to manage user permissions for a large number of users. You can also use groups with template sharing to limit user access to templates.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/GroupInformation} optsOrCallback.groupInformation 
     * @param {module:api/GroupsApi~createGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.createGroups = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createGroups");
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
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteBrands operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~deleteBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupBrands} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes brand information from the requested group.
     * Deletes brand information from the requested group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BrandsRequest} optsOrCallback.brandsRequest 
     * @param {module:api/GroupsApi~deleteBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupBrands}
     */
    this.deleteBrands = function(accountId, groupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['brandsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrands");
      }

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteBrands");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'groupId': groupId
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
      var returnType = GroupBrands;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups/{groupId}/brands', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteGroupUsers operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~deleteGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes one or more users from a gro
     * Deletes one or more users from a group.

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserInfoList} optsOrCallback.userInfoList 
     * @param {module:api/GroupsApi~deleteGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */
    this.deleteGroupUsers = function(accountId, groupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userInfoList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteGroupUsers");
      }

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroupUsers");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'groupId': groupId
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
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups/{groupId}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteGroups operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~deleteGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes an existing user group.
     * Deletes an existing user group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/GroupInformation} optsOrCallback.groupInformation 
     * @param {module:api/GroupsApi~deleteGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.deleteGroups = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteGroups");
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
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBrands operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~getBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupBrands} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets group brand ID Information. 
     * Retrieves information about the brands associated with the requested group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {module:api/GroupsApi~getBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupBrands}
     */
    this.getBrands = function(accountId, groupId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrands");
      }

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getBrands");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'groupId': groupId
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
      var returnType = GroupBrands;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups/{groupId}/brands', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listGroupUsers operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~listGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of users in a group.
     * Retrieves a list of users in a group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count Number of records to return. The number must be greater than 1 and less than or equal to 100. 
     * @param {String} optsOrCallback.startPosition Starting value for the list.
     * @param {module:api/GroupsApi~listGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */
    this.listGroupUsers = function(accountId, groupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listGroupUsers");
      }

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling listGroupUsers");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'groupId': groupId
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
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups/{groupId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listGroups operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~listGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets information about groups associated with the account.
     * Retrieves information about groups associated with the account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count Number of records to return. The number must be greater than 1 and less than or equal to 100.
     * @param {String} optsOrCallback.groupType 
     * @param {String} optsOrCallback.includeUsercount 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.startPosition Starting value for the list.
     * @param {module:api/GroupsApi~listGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.listGroups = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listGroups");
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
        'group_type': optsOrCallback['groupType'],
        'include_usercount': optsOrCallback['includeUsercount'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBrands operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~updateBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupBrands} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds group brand ID information to a group.
     * Adds group brand ID information to a group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BrandsRequest} optsOrCallback.brandsRequest 
     * @param {module:api/GroupsApi~updateBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupBrands}
     */
    this.updateBrands = function(accountId, groupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['brandsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrands");
      }

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateBrands");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'groupId': groupId
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
      var returnType = GroupBrands;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups/{groupId}/brands', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateGroupUsers operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~updateGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds one or more users to an existing group.
     * Adds one or more users to an existing group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserInfoList} optsOrCallback.userInfoList 
     * @param {module:api/GroupsApi~updateGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */
    this.updateGroupUsers = function(accountId, groupId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userInfoList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateGroupUsers");
      }

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateGroupUsers");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'groupId': groupId
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
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups/{groupId}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateGroups operation. If none specified a Promise will be returned.
     * @callback module:api/GroupsApi~updateGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the group information for a group.
     * Updates the group name and modifies, or sets, the permission profile for the group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/GroupInformation} optsOrCallback.groupInformation 
     * @param {module:api/GroupsApi~updateGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.updateGroups = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateGroups");
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
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/groups', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));