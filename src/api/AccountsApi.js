(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/ErrorDetails', '../model/AccountInformation', '../model/CustomFields', '../model/AccountSettingsInformation', '../model/AccountSharedAccess', '../model/FileTypeList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/AccountInformation'), require('../model/CustomFields'), require('../model/AccountSettingsInformation'), require('../model/AccountSharedAccess'), require('../model/FileTypeList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.AccountInformation, root.Docusign.CustomFields, root.Docusign.AccountSettingsInformation, root.Docusign.AccountSharedAccess, root.Docusign.FileTypeList);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, AccountInformation, CustomFields, AccountSettingsInformation, AccountSharedAccess, FileTypeList) {
  'use strict';

  var AccountsApi = function AccountsApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    /// <summary>
    /// Retrieves the account information for the specified account. Retrieves the account information for the specified account.\n\n**Response**\nThe `canUpgrade` property contains is a Boolean that indicates whether the account can be upgraded through the API.
    /// </summary>
    self.GetAccountInformationOptions = function () {
      
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
     * Retrieves the account information for the specified account.
     * Retrieves the account information for the specified account.\n\n**Response**\nThe `canUpgrade` property contains is a Boolean that indicates whether the account can be upgraded through the API.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {AccountsApi.GetAccountInformationOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: AccountInformation
     */
    self.getAccountInformation = function(accountId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getAccountInformation";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'op': options.op,
          'include_account_settings': options.includeAccountSettings
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
            var result = new AccountInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets a list of custom fields associated with the account.
     * Retrieves a list of envelope custom fields associated with the account. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.\n\nThere are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. The list custom field lets the sender select the value of the field from a list you provide.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.listCustomFields = function(accountId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listCustomFields";
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
            var result = new CustomFields();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets account settings information.
     * Retrieves the account settings information for the specified account.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: AccountSettingsInformation
     */
    self.listSettings = function(accountId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listSettings";
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
            var result = new AccountSettingsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates the account settings for an account.
     * Updates the account settings for the specified account.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {AccountSettingsInformation} accountSettingsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.updateSettings = function(accountId, accountSettingsInformation, callback) {
      var postBody = accountSettingsInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateSettings";
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
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Reserved: Gets the shared item status for one or more users.
     * Reserved: Retrieves shared item status for one or more users and types of items.\n\nUsers with account administration privileges can retrieve shared access information for all account users. Users without account administrator privileges can only retrieve shared access information for themselves and the returned information is limited to the retrieving the status of all members of the account that are sharing their folders to the user. This is equivalent to setting the shared=shared_from.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: AccountSharedAccess
     */
    self.listSharedAccess = function(accountId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listSharedAccess";
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
            var result = new AccountSharedAccess();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/shared_access', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets a list of unsupported file types.
     * Retrieves a list of file types (mime-types and file-extensions) that are not supported for upload through the DocuSign system.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: FileTypeList
     */
    self.listUnsupportedFileTypes = function(accountId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listUnsupportedFileTypes";
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
            var result = new FileTypeList();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/unsupported_file_types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return AccountsApi;
}));
