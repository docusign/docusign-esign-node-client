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
	define(['Configuration', 'ApiClient', 'model/BrandsRequest', 'model/BrandsResponse', 'model/ErrorDetails', 'model/GroupInformation', 'model/UserInfoList', 'model/UsersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BrandsRequest'), require('../model/BrandsResponse'), require('../model/ErrorDetails'), require('../model/GroupInformation'), require('../model/UserInfoList'), require('../model/UsersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.GroupsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BrandsRequest, root.Docusign.BrandsResponse, root.Docusign.ErrorDetails, root.Docusign.GroupInformation, root.Docusign.UserInfoList, root.Docusign.UsersResponse);
  }
}(this, function(Configuration, ApiClient, BrandsRequest, BrandsResponse, ErrorDetails, GroupInformation, UserInfoList, UsersResponse) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   * @version 3.0.0
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
     * Callback function to receive the result of the createGroups operation.
     * @callback module:api/GroupsApi~createGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates one or more groups for the account.
     * Creates one or more groups for the account.

Groups can be used to help manage users by associating users with a group. You can associate a group with a Permission Profile, which sets the user permissions for users in that group without having to set the `userSettings` property for each user. You are not required to set Permission Profiles for a group, but it makes it easier to manage user permissions for a large number of users. You can also use groups with template sharing to limit user access to templates.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupInformation} opts.groupInformation 
     * @param {module:api/GroupsApi~createGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.createGroups = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createGroups");
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
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteBrands operation.
     * @callback module:api/GroupsApi~deleteBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes brand information from the requested group.
     * Deletes brand information from the requested group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/BrandsRequest} opts.brandsRequest 
     * @param {module:api/GroupsApi~deleteBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.deleteBrands = function(accountId, groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['brandsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrands");
      }

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteBrands");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups/{groupId}/brands', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteGroupUsers operation.
     * @callback module:api/GroupsApi~deleteGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes one or more users from a gro
     * Deletes one or more users from a group.

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserInfoList} opts.userInfoList 
     * @param {module:api/GroupsApi~deleteGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */
    this.deleteGroupUsers = function(accountId, groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['userInfoList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteGroupUsers");
      }

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroupUsers");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups/{groupId}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteGroups operation.
     * @callback module:api/GroupsApi~deleteGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an existing user group.
     * Deletes an existing user group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupInformation} opts.groupInformation 
     * @param {module:api/GroupsApi~deleteGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.deleteGroups = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteGroups");
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
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getBrands operation.
     * @callback module:api/GroupsApi~getBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets group brand ID Information. 
     * Retrieves information about the brands associated with the requested group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {module:api/GroupsApi~getBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.getBrands = function(accountId, groupId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrands");
      }

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw new Error("Missing the required parameter 'groupId' when calling getBrands");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups/{groupId}/brands', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listGroupUsers operation.
     * @callback module:api/GroupsApi~listGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of users in a group.
     * Retrieves a list of users in a group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.count Number of records to return. The number must be greater than 1 and less than or equal to 100. 
     * @param {String} opts.startPosition Starting value for the list.
     * @param {module:api/GroupsApi~listGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */
    this.listGroupUsers = function(accountId, groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listGroupUsers");
      }

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw new Error("Missing the required parameter 'groupId' when calling listGroupUsers");
      }


      var pathParams = {
        'accountId': accountId,
        'groupId': groupId
      };
      var queryParams = {
        'count': opts['count'],
        'start_position': opts['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups/{groupId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listGroups operation.
     * @callback module:api/GroupsApi~listGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets information about groups associated with the account.
     * Retrieves information about groups associated with the account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.count Number of records to return. The number must be greater than 1 and less than or equal to 100.
     * @param {String} opts.groupName Filters the groups returned by the group name or a sub-string of group name.
     * @param {String} opts.groupType 
     * @param {String} opts.searchText 
     * @param {String} opts.startPosition Starting value for the list.
     * @param {module:api/GroupsApi~listGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.listGroups = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listGroups");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'count': opts['count'],
        'group_name': opts['groupName'],
        'group_type': opts['groupType'],
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
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateBrands operation.
     * @callback module:api/GroupsApi~updateBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds group brand ID information to a group.
     * Adds group brand ID information to a group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/BrandsRequest} opts.brandsRequest 
     * @param {module:api/GroupsApi~updateBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.updateBrands = function(accountId, groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['brandsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrands");
      }

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateBrands");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups/{groupId}/brands', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateGroupUsers operation.
     * @callback module:api/GroupsApi~updateGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds one or more users to an existing group.
     * Adds one or more users to an existing group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} groupId The ID of the group being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserInfoList} opts.userInfoList 
     * @param {module:api/GroupsApi~updateGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */
    this.updateGroupUsers = function(accountId, groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['userInfoList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateGroupUsers");
      }

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateGroupUsers");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups/{groupId}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateGroups operation.
     * @callback module:api/GroupsApi~updateGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the group information for a group.
     * Updates the group name and modifies, or sets, the permission profile for the group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupInformation} opts.groupInformation 
     * @param {module:api/GroupsApi~updateGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.updateGroups = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateGroups");
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
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/groups', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
