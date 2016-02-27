(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/ErrorDetails', '../model/LoginInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/LoginInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AuthenticationApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.LoginInformation);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, LoginInformation) {
  'use strict';

  var AuthenticationApi = function AuthenticationApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    /// <summary>
    /// Gets login information for a specified user. Retrieves login information for a specified user. Each account that is associated with the login credentials is listed. You can use the returned information to determine whether a user is authenticated and select an account to use in future operations.  \n\nThe `baseUrl` property, returned in the response, is used in all future API calls as the base of the request URL. The `baseUrl` property contains the DocuSign server, the API version, and the `accountId` property that is used for the login. This request uses your DocuSign credentials to retrieve the account information.
    /// </summary>
    self.LoginOptions = function () {
      
      var apiPassword = null;
      
      var includeAccountIdGuid = null;
      
      var loginSettings = null;
      
      
      /*
       * When set to **true**, shows the account API password in the response.
       */
      this.setApiPassword = function(apiPassword) {
        this.apiPassword = apiPassword;
      }
	
      this.getApiPassword = function() {
        return this.apiPassword;
      }
      
      /*
       * When set to **true**, shows the account ID GUID in the response.
       */
      this.setIncludeAccountIdGuid = function(includeAccountIdGuid) {
        this.includeAccountIdGuid = includeAccountIdGuid;
      }
	
      this.getIncludeAccountIdGuid = function() {
        return this.includeAccountIdGuid;
      }
      
      /*
       * Determines whether login settings are returned in the response.\n\nValid Values:\n\n* all -  All the login settings are returned. \n* none - no login settings are returned.
       */
      this.setLoginSettings = function(loginSettings) {
        this.loginSettings = loginSettings;
      }
	
      this.getLoginSettings = function() {
        return this.loginSettings;
      }
      
    }
    
    
    /**
     * Gets login information for a specified user.
     * Retrieves login information for a specified user. Each account that is associated with the login credentials is listed. You can use the returned information to determine whether a user is authenticated and select an account to use in future operations.  \n\nThe `baseUrl` property, returned in the response, is used in all future API calls as the base of the request URL. The `baseUrl` property contains the DocuSign server, the API version, and the `accountId` property that is used for the login. This request uses your DocuSign credentials to retrieve the account information.
     * @param {AuthenticationApi.LoginOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: LoginInformation
     */
    self.login = function(options, callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'api_password': options.apiPassword,
          'include_account_id_guid': options.includeAccountIdGuid,
          'login_settings': options.loginSettings
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
            var result = new LoginInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/login_information', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return AuthenticationApi;
}));
