(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/ErrorDetails', '../model/UserSettingsInformation'], factory);
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

  var UsersApi = function UsersApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    
    /**
     * Gets the user account settings for a specified user.
     * Retrieves a list of the account settings and email notification information for the specified user.\n\nThe response returns the account setting name/value information and the email notification settings for the specified user. For more information about the different user settings, see the [ML:userSettings list].
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} userId: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: UserSettingsInformation
     */
    self.getSettings = function(accountId, userId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getSettings";
      }
      
      // verify the required parameter 'userId' is set
      if (userId == null) {
        throw "Missing the required parameter 'userId' when calling getSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
            var result = new UserSettingsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return UsersApi;
}));
