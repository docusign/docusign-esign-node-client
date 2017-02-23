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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/UserSettingsInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/UserSettingsInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UsersApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.UserSettingsInformation);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, UserSettingsInformation) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 3.0.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
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
     * Callback function to receive the result of the getSettings operation.
     * @callback module:api/UsersApi~getSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSettingsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the user account settings for a specified user.
     * Retrieves a list of the account settings and email notification information for the specified user.  The response returns the account setting name/value information and the email notification settings for the specified user. For more information about the different user settings, see the [ML:userSettings list].
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {module:api/UsersApi~getSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSettingsInformation}
     */
    this.getSettings = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getSettings");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getSettings");
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
      var returnType = UserSettingsInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
