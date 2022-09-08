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
	define(['Configuration', 'ApiClient', 'model/AccountSeals', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/AccountSeals'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TrustServiceProvidersApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.AccountSeals, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, AccountSeals, ErrorDetails) {
  'use strict';

  /**
   * TrustServiceProviders service.
   * @module api/TrustServiceProvidersApi
   */

  /**
   * Constructs a new TrustServiceProvidersApi. 
   * @alias module:api/TrustServiceProvidersApi
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
     * (Optional) Callback function to receive the result of the getSealProviders operation. If none specified a Promise will be returned.
     * @callback module:api/TrustServiceProvidersApi~getSealProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSeals} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns Account available seals for specified account.
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/TrustServiceProvidersApi~getSealProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSeals}
     */
    this.getSealProviders = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getSealProviders");
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
      var returnType = AccountSeals;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/seals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));