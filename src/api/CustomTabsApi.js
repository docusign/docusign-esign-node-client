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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/TabMetadata', 'model/TabMetadataList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/TabMetadata'), require('../model/TabMetadataList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CustomTabsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.TabMetadata, root.Docusign.TabMetadataList);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, TabMetadata, TabMetadataList) {
  'use strict';

  /**
   * CustomTabs service.
   * @module api/CustomTabsApi
   */

  /**
   * Constructs a new CustomTabsApi. 
   * @alias module:api/CustomTabsApi
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
     * (Optional) Callback function to receive the result of the _delete operation. If none specified a Promise will be returned.
     * @callback module:api/CustomTabsApi~_deleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes custom tab information.
     * Deletes the custom from the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} customTabId 
     * @param {module:api/CustomTabsApi~_deleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this._delete = function(accountId, customTabId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling _delete");
      }

      // verify the required parameter 'customTabId' is set
      if (customTabId === undefined || customTabId === null) {
        throw new Error("Missing the required parameter 'customTabId' when calling _delete");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'customTabId': customTabId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/tab_definitions/{customTabId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the create operation. If none specified a Promise will be returned.
     * @callback module:api/CustomTabsApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabMetadata} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a custom tab.
     * Creates a tab with pre-defined properties, such as a text tab with a certain font type and validation pattern. Users can access the custom tabs when sending documents through the DocuSign web application.

Custom tabs can be created for approve, checkbox, company, date, date signed, decline, email, email address, envelope ID, first name, formula, full name, initial here, last name, list, note, number, radio, sign here, signer attachment, SSN, text, title, and zip tabs.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TabMetadata} optsOrCallback.tabMetadata 
     * @param {module:api/CustomTabsApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabMetadata}
     */
    this.create = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabMetadata'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling create");
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
      var returnType = TabMetadata;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/tab_definitions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the get operation. If none specified a Promise will be returned.
     * @callback module:api/CustomTabsApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabMetadata} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets custom tab information.
     * Retrieves information about the requested custom tab on the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} customTabId 
     * @param {module:api/CustomTabsApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabMetadata}
     */
    this.get = function(accountId, customTabId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }

      // verify the required parameter 'customTabId' is set
      if (customTabId === undefined || customTabId === null) {
        throw new Error("Missing the required parameter 'customTabId' when calling get");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'customTabId': customTabId
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
      var returnType = TabMetadata;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/tab_definitions/{customTabId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the list operation. If none specified a Promise will be returned.
     * @callback module:api/CustomTabsApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabMetadataList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of all account tabs.
     * Retrieves a list of all tabs associated with the account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.customTabOnly When set to **true**, only custom tabs are returned in the response. 
     * @param {module:api/CustomTabsApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabMetadataList}
     */
    this.list = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
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
        'custom_tab_only': optsOrCallback['customTabOnly']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TabMetadataList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/tab_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the update operation. If none specified a Promise will be returned.
     * @callback module:api/CustomTabsApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabMetadata} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates custom tab information.  
     * Updates the information in a custom tab for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} customTabId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TabMetadata} optsOrCallback.tabMetadata 
     * @param {module:api/CustomTabsApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabMetadata}
     */
    this.update = function(accountId, customTabId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabMetadata'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'customTabId' is set
      if (customTabId === undefined || customTabId === null) {
        throw new Error("Missing the required parameter 'customTabId' when calling update");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'customTabId': customTabId
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
      var returnType = TabMetadata;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/tab_definitions/{customTabId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));