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
	define(['Configuration', 'ApiClient', 'model/CompleteSignHashResponse', 'model/CompleteSignRequest', 'model/ErrorDetails', 'model/SignHashSessionInfoResponse', 'model/SignSessionInfoRequest', 'model/TspHealthCheckRequest', 'model/UpdateTransactionRequest', 'model/UpdateTransactionResponse', 'model/UserInfoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/CompleteSignHashResponse'), require('../model/CompleteSignRequest'), require('../model/ErrorDetails'), require('../model/SignHashSessionInfoResponse'), require('../model/SignSessionInfoRequest'), require('../model/TspHealthCheckRequest'), require('../model/UpdateTransactionRequest'), require('../model/UpdateTransactionResponse'), require('../model/UserInfoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SignatureApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.CompleteSignHashResponse, root.Docusign.CompleteSignRequest, root.Docusign.ErrorDetails, root.Docusign.SignHashSessionInfoResponse, root.Docusign.SignSessionInfoRequest, root.Docusign.TspHealthCheckRequest, root.Docusign.UpdateTransactionRequest, root.Docusign.UpdateTransactionResponse, root.Docusign.UserInfoResponse);
  }
}(this, function(Configuration, ApiClient, CompleteSignHashResponse, CompleteSignRequest, ErrorDetails, SignHashSessionInfoResponse, SignSessionInfoRequest, TspHealthCheckRequest, UpdateTransactionRequest, UpdateTransactionResponse, UserInfoResponse) {
  'use strict';

  /**
   * Signature service.
   * @module api/SignatureApi
   */

  /**
   * Constructs a new SignatureApi. 
   * @alias module:api/SignatureApi
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
     * (Optional) Callback function to receive the result of the completeSignHash operation. If none specified a Promise will be returned.
     * @callback module:api/SignatureApi~completeSignHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompleteSignHashResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Complete Sign Hash
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CompleteSignRequest} optsOrCallback.completeSignRequest 
     * @param {module:api/SignatureApi~completeSignHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompleteSignHashResponse}
     */
    this.completeSignHash = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['completeSignRequest'];

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
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
      var returnType = CompleteSignHashResponse;

      return this.apiClient.callApi(
        '/v2.1/signature/completesignhash', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getUserInfo operation. If none specified a Promise will be returned.
     * @callback module:api/SignatureApi~getUserInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInfoResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get User Info To Sign Document
     * @param {module:api/SignatureApi~getUserInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInfoResponse}
     */
    this.getUserInfo = function(callback) {
      var postBody = null;

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
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
      var returnType = UserInfoResponse;

      return this.apiClient.callApi(
        '/v2.1/signature/userInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the healthCheck operation. If none specified a Promise will be returned.
     * @callback module:api/SignatureApi~healthCheckCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Report status from the TSP to DocuSign
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TspHealthCheckRequest} optsOrCallback.tspHealthCheckRequest 
     * @param {module:api/SignatureApi~healthCheckCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.healthCheck = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tspHealthCheckRequest'];

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
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
        '/v2.1/signature/healthcheck', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the signHashSessionInfo operation. If none specified a Promise will be returned.
     * @callback module:api/SignatureApi~signHashSessionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignHashSessionInfoResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Signature Session Info To Sign Document Hash
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/SignSessionInfoRequest} optsOrCallback.signSessionInfoRequest 
     * @param {module:api/SignatureApi~signHashSessionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignHashSessionInfoResponse}
     */
    this.signHashSessionInfo = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['signSessionInfoRequest'];

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
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
      var returnType = SignHashSessionInfoResponse;

      return this.apiClient.callApi(
        '/v2.1/signature/signhashsessioninfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateTransaction operation. If none specified a Promise will be returned.
     * @callback module:api/SignatureApi~updateTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateTransactionResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Report an error from the tsp to docusign
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UpdateTransactionRequest} optsOrCallback.updateTransactionRequest 
     * @param {module:api/SignatureApi~updateTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateTransactionResponse}
     */
    this.updateTransaction = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['updateTransactionRequest'];

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
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
      var returnType = UpdateTransactionResponse;

      return this.apiClient.callApi(
        '/v2.1/signature/updatetransaction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));