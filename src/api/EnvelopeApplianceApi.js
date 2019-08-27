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
	define(['Configuration', 'ApiClient', 'model/DisplayApplianceInfo', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/DisplayApplianceInfo'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeApplianceApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.DisplayApplianceInfo, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, DisplayApplianceInfo, ErrorDetails) {
  'use strict';

  /**
   * EnvelopeAppliance service.
   * @module api/EnvelopeApplianceApi
   * @version 3.0.0
   */

  /**
   * Constructs a new EnvelopeApplianceApi. 
   * @alias module:api/EnvelopeApplianceApi
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
     * (Optional)Callback function to receive the result of the getApplianceInfo operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopeApplianceApi~getApplianceInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DisplayApplianceInfo} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns envelope and recipient information for Display Appliance
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopeApplianceApi~getApplianceInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DisplayApplianceInfo}
     */
    this.getApplianceInfo = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getApplianceInfo");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getApplianceInfo");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = DisplayApplianceInfo;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/display_appliance_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
