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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/LoginInformation'], factory);
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

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
	this.apiClient = apiClient || ApiClient.instance || Configuration.default.getDefaultApiClient();
	  
	this.setApiClient = function(apiClient) {
	  this.apiClient = apiClient;
	};

	this.getApiClient = function() {
	  return this.apiClient;
	};


	/**
	 * Gets login information for a specified user.
   * Retrieves login information for a specified user. Each account that is associated with the login credentials is listed. You can use the returned information to determine whether a user is authenticated and select an account to use in future operations.    The &#x60;baseUrl&#x60; property, returned in the response, is used in all future API calls as the base of the request URL. The &#x60;baseUrl&#x60; property contains the DocuSign server, the API version, and the &#x60;accountId&#x60; property that is used for the login. This request uses your DocuSign credentials to retrieve the account information.
	*/
	this.LoginOptions = function () {
	  var includeAccountIdGuid = null;
	  var loginSettings = null;
	  var apiPassword = null;
	  
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
	   * Determines whether login settings are returned in the response.  Valid Values:  * all -  All the login settings are returned.  * none - no login settings are returned.
	   */
	  this.setLoginSettings = function(loginSettings) {
	    this.loginSettings = loginSettings;
	  }
	
	  this.getLoginSettings = function() {
	    return this.loginSettings;
	  }

	  /*
	   * When set to **true**, shows the account API password in the response.
	   */
	  this.setApiPassword = function(apiPassword) {
	    this.apiPassword = apiPassword;
	  }
	
	  this.getApiPassword = function() {
	    return this.apiPassword;
	  }
	}

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthenticationApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets login information for a specified user.
     * Retrieves login information for a specified user. Each account that is associated with the login credentials is listed. You can use the returned information to determine whether a user is authenticated and select an account to use in future operations.    The &#x60;baseUrl&#x60; property, returned in the response, is used in all future API calls as the base of the request URL. The &#x60;baseUrl&#x60; property contains the DocuSign server, the API version, and the &#x60;accountId&#x60; property that is used for the login. This request uses your DocuSign credentials to retrieve the account information.
     * @param {Object} opts Optional parameters
     * @param {String} opts.includeAccountIdGuid When set to **true**, shows the account ID GUID in the response.
     * @param {String} opts.loginSettings Determines whether login settings are returned in the response.  Valid Values:  * all -  All the login settings are returned.  * none - no login settings are returned.
     * @param {String} opts.apiPassword When set to **true**, shows the account API password in the response.
     * @param {module:api/AuthenticationApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoginInformation}
     */
    this.login = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'include_account_id_guid': opts['includeAccountIdGuid'],
        'login_settings': opts['loginSettings'],
        'api_password': opts['apiPassword']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LoginInformation;

      return this.apiClient.callApi(
        '/v2/login_information', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
