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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.OrganizationsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, ErrorDetails) {
  'use strict';

  /**
   * Organizations service.
   * @module api/OrganizationsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new OrganizationsApi. 
   * @alias module:api/OrganizationsApi
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
     * Callback function to receive the result of the getAccountSettingsExport operation.
     * @callback module:api/OrganizationsApi~getAccountSettingsExportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves an account settings comparison.
     * @param {String} organizationId 
     * @param {String} resultId 
     * @param {module:api/OrganizationsApi~getAccountSettingsExportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getAccountSettingsExport = function(organizationId, resultId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAccountSettingsExport");
      }

      // verify the required parameter 'resultId' is set
      if (resultId == undefined || resultId == null) {
        throw new Error("Missing the required parameter 'resultId' when calling getAccountSettingsExport");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'resultId': resultId
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
        '/v2/organization_exports/{organizationId}/account_settings/{resultId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getUserListExport operation.
     * @callback module:api/OrganizationsApi~getUserListExportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves an attachment from the envelope.
     * @param {String} organizationId 
     * @param {String} resultId 
     * @param {module:api/OrganizationsApi~getUserListExportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getUserListExport = function(organizationId, resultId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getUserListExport");
      }

      // verify the required parameter 'resultId' is set
      if (resultId == undefined || resultId == null) {
        throw new Error("Missing the required parameter 'resultId' when calling getUserListExport");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'resultId': resultId
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
        '/v2/organization_exports/{organizationId}/user_list/{resultId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
