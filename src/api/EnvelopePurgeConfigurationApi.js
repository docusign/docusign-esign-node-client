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
	define(['Configuration', 'ApiClient', 'model/EnvelopePurgeConfiguration', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/EnvelopePurgeConfiguration'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopePurgeConfigurationApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.EnvelopePurgeConfiguration, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, EnvelopePurgeConfiguration, ErrorDetails) {
  'use strict';

  /**
   * EnvelopePurgeConfiguration service.
   * @module api/EnvelopePurgeConfigurationApi
   * @version 3.0.0
   */

  /**
   * Constructs a new EnvelopePurgeConfigurationApi. 
   * @alias module:api/EnvelopePurgeConfigurationApi
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
     * (Optional)Callback function to receive the result of the getEnvelopePurgeConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopePurgeConfigurationApi~getEnvelopePurgeConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopePurgeConfiguration} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Select envelope purge configuration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/EnvelopePurgeConfigurationApi~getEnvelopePurgeConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopePurgeConfiguration}
     */
    this.getEnvelopePurgeConfiguration = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEnvelopePurgeConfiguration");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopePurgeConfiguration;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/envelope_purge_configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateEnvelopePurgeConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopePurgeConfigurationApi~updateEnvelopePurgeConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopePurgeConfiguration} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates envelope purge configuration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopePurgeConfiguration} optsOrCallback.envelopePurgeConfiguration 
     * @param {module:api/EnvelopePurgeConfigurationApi~updateEnvelopePurgeConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopePurgeConfiguration}
     */
    this.updateEnvelopePurgeConfiguration = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopePurgeConfiguration'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateEnvelopePurgeConfiguration");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopePurgeConfiguration;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/envelope_purge_configuration', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
