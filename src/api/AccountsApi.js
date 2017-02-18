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
	define(['Configuration', 'ApiClient', 'model/AccountInformation', 'model/AccountSettingsInformation', 'model/AccountSharedAccess', 'model/CustomFields', 'model/ErrorDetails', 'model/FileTypeList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/AccountInformation'), require('../model/AccountSettingsInformation'), require('../model/AccountSharedAccess'), require('../model/CustomFields'), require('../model/ErrorDetails'), require('../model/FileTypeList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.AccountInformation, root.Docusign.AccountSettingsInformation, root.Docusign.AccountSharedAccess, root.Docusign.CustomFields, root.Docusign.ErrorDetails, root.Docusign.FileTypeList);
  }
}(this, function(Configuration, ApiClient, AccountInformation, AccountSettingsInformation, AccountSharedAccess, CustomFields, ErrorDetails, FileTypeList) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
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
	 * Retrieves the account information for the specified account.
   * Retrieves the account information for the specified account.  **Response** The &#x60;canUpgrade&#x60; property contains is a Boolean that indicates whether the account can be upgraded through the API. 
	*/
	this.GetAccountInformationOptions = function () {
	  var op = null;
	  var includeAccountSettings = null;
	  
	  this.setOp = function(op) {
	    this.op = op;
	  }
	
	  this.getOp = function() {
	    return this.op;
	  }

	  /*
	   * When set to **true**, includes the account settings for the account in the response.
	   */
	  this.setIncludeAccountSettings = function(includeAccountSettings) {
	    this.includeAccountSettings = includeAccountSettings;
	  }
	
	  this.getIncludeAccountSettings = function() {
	    return this.includeAccountSettings;
	  }
	}

    /**
     * Callback function to receive the result of the getAccountInformation operation.
     * @callback module:api/AccountsApi~getAccountInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the account information for the specified account.
     * Retrieves the account information for the specified account.  **Response** The &#x60;canUpgrade&#x60; property contains is a Boolean that indicates whether the account can be upgraded through the API. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.op 
     * @param {String} opts.includeAccountSettings When set to **true**, includes the account settings for the account in the response.
     * @param {module:api/AccountsApi~getAccountInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountInformation}
     */
    this.getAccountInformation = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountInformation");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'op': opts['op'],
        'include_account_settings': opts['includeAccountSettings']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCustomFields operation.
     * @callback module:api/AccountsApi~listCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of custom fields associated with the account.
     * Retrieves a list of envelope custom fields associated with the account. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.  There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. The list custom field lets the sender select the value of the field from a list you provide.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.listCustomFields = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listCustomFields");
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
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSettings operation.
     * @callback module:api/AccountsApi~listSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSettingsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets account settings information.
     * Retrieves the account settings information for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSettingsInformation}
     */
    this.listSettings = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSettings");
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
      var returnType = AccountSettingsInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSharedAccess operation.
     * @callback module:api/AccountsApi~listSharedAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSharedAccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved: Gets the shared item status for one or more users.
     * Reserved: Retrieves shared item status for one or more users and types of items.  Users with account administration privileges can retrieve shared access information for all account users. Users without account administrator privileges can only retrieve shared access information for themselves and the returned information is limited to the retrieving the status of all members of the account that are sharing their folders to the user. This is equivalent to setting the shared&#x3D;shared_from.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listSharedAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSharedAccess}
     */
    this.listSharedAccess = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSharedAccess");
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
      var returnType = AccountSharedAccess;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/shared_access', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listUnsupportedFileTypes operation.
     * @callback module:api/AccountsApi~listUnsupportedFileTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileTypeList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of unsupported file types.
     * Retrieves a list of file types (mime-types and file-extensions) that are not supported for upload through the DocuSign system.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listUnsupportedFileTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileTypeList}
     */
    this.listUnsupportedFileTypes = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listUnsupportedFileTypes");
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
      var returnType = FileTypeList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/unsupported_file_types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSettings operation.
     * @callback module:api/AccountsApi~updateSettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the account settings for an account.
     * Updates the account settings for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountSettingsInformation} opts.accountSettingsInformation TBD Description
     * @param {module:api/AccountsApi~updateSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSettings = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['accountSettingsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSettings");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
