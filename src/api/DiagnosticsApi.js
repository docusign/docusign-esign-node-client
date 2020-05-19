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
	define(['Configuration', 'ApiClient', 'model/ApiRequestLogsResult', 'model/DiagnosticsSettingsInformation', 'model/ErrorDetails', 'model/ResourceInformation', 'model/ServiceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ApiRequestLogsResult'), require('../model/DiagnosticsSettingsInformation'), require('../model/ErrorDetails'), require('../model/ResourceInformation'), require('../model/ServiceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DiagnosticsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ApiRequestLogsResult, root.Docusign.DiagnosticsSettingsInformation, root.Docusign.ErrorDetails, root.Docusign.ResourceInformation, root.Docusign.ServiceInformation);
  }
}(this, function(Configuration, ApiClient, ApiRequestLogsResult, DiagnosticsSettingsInformation, ErrorDetails, ResourceInformation, ServiceInformation) {
  'use strict';

  /**
   * Diagnostics service.
   * @module api/DiagnosticsApi
   */

  /**
   * Constructs a new DiagnosticsApi. 
   * @alias module:api/DiagnosticsApi
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
     * (Optional) Callback function to receive the result of the deleteRequestLogs operation. If none specified a Promise will be returned.
     * @callback module:api/DiagnosticsApi~deleteRequestLogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the request log files.
     * Deletes the request log files.
     * @param {module:api/DiagnosticsApi~deleteRequestLogsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRequestLogs = function(callback) {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/diagnostics/request_logs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRequestLog operation. If none specified a Promise will be returned.
     * @callback module:api/DiagnosticsApi~getRequestLogCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a request logging log file.
     * Retrieves information for a single log entry.

**Request**
The `requestLogfId` property can be retrieved by getting the list of log entries. The Content-Transfer-Encoding header can be set to base64 to retrieve the API request/response as base 64 string. Otherwise the bytes of the request/response are returned.

**Response**
If the Content-Transfer-Encoding header was set to base64, the log is returned as a base64 string.
     * @param {String} requestLogId 
     * @param {module:api/DiagnosticsApi~getRequestLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getRequestLog = function(requestLogId, callback) {
      var postBody = null;

      // verify the required parameter 'requestLogId' is set
      if (requestLogId === undefined || requestLogId === null) {
        throw new Error("Missing the required parameter 'requestLogId' when calling getRequestLog");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'requestLogId': requestLogId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/diagnostics/request_logs/{requestLogId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getRequestLogSettings operation. If none specified a Promise will be returned.
     * @callback module:api/DiagnosticsApi~getRequestLogSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiagnosticsSettingsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the API request logging settings.
     * Retrieves the current API request logging setting for the user and remaining log entries.

**Response**
The response includes the current API request logging setting for the user, along with the maximum log entries and remaining log entries.
     * @param {module:api/DiagnosticsApi~getRequestLogSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiagnosticsSettingsInformation}
     */
    this.getRequestLogSettings = function(callback) {
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
      var returnType = DiagnosticsSettingsInformation;

      return this.apiClient.callApi(
        '/v2.1/diagnostics/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getResources operation. If none specified a Promise will be returned.
     * @callback module:api/DiagnosticsApi~getResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Lists resources for REST version specified
     * Retrieves the base resources available for the DocuSign REST APIs.

You do not need an integrator key to view the REST API versions and resources.

Example: https://demo.docusign.net/restapi/v2 lists all of the base resources available in version 2 of the REST API on the DocuSign Demo system.

To view descriptions and samples of the service operations for all versions, remove the version number and add /help to the URL.

Example: https://demo.docusign.net/restapi/help lists the REST API operations on the DocuSign Demo system with XML and JSON request and response samples.
     * @param {module:api/DiagnosticsApi~getResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceInformation}
     */
    this.getResources = function(callback) {
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
      var returnType = ResourceInformation;

      return this.apiClient.callApi(
        '/v2.1', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getService operation. If none specified a Promise will be returned.
     * @callback module:api/DiagnosticsApi~getServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the available REST API versions.
     * Retrieves the available REST API versions.

DocuSign Production system: https://www.docusign.net/restapi/service_information
DocuSign Demo system: https://demo.docusign.net/restapi/service_information

You do not need an integrator key to view the REST API versions and resources.
     * @param {module:api/DiagnosticsApi~getServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInformation}
     */
    this.getService = function(callback) {
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
      var returnType = ServiceInformation;

      return this.apiClient.callApi(
        '/service_information', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listRequestLogs operation. If none specified a Promise will be returned.
     * @callback module:api/DiagnosticsApi~listRequestLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiRequestLogsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the API request logging log files.
     * Retrieves a list of log entries as a JSON or xml object or as a zip file containing the entries.

If the Accept header is set to application/zip, the response is a zip file containing individual text files, each representing an API request.

If the Accept header is set to `application/json` or `application/xml`, the response returns list of log entries in either JSON or XML. An example JSON response body is shown below. 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.encoding 
     * @param {module:api/DiagnosticsApi~listRequestLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiRequestLogsResult}
     */
    this.listRequestLogs = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

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
        'encoding': optsOrCallback['encoding']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiRequestLogsResult;

      return this.apiClient.callApi(
        '/v2.1/diagnostics/request_logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateRequestLogSettings operation. If none specified a Promise will be returned.
     * @callback module:api/DiagnosticsApi~updateRequestLogSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiagnosticsSettingsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Enables or disables API request logging for troubleshooting.
     * Enables or disables API request logging for troubleshooting.

When enabled (`apiRequestLogging` is set to true), REST API requests and responses for the user are added to a log. A log can have up to 50 requests/responses and the current number of log entries can be determined by getting the settings. Logging is automatically disabled when the log limit of 50 is reached.

You can call [ML:GetRequestLog] or [ML:GetRequestLogs] to download the log files (individually or as a zip file). Call [ML:DeleteRequestLogs] to clear the log by deleting current entries.

Private information, such as passwords and integrator key information, which is normally located in the call header is omitted from the request/response log.

###### Note: API request logging only captures requests from the authenticated user. Any call that does not authenticate the user and resolve a userId isn't logged. Meaning that login_information, NewAccounts, or other distributor-credential calls are not logged.

     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DiagnosticsSettingsInformation} optsOrCallback.diagnosticsSettingsInformation 
     * @param {module:api/DiagnosticsApi~updateRequestLogSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiagnosticsSettingsInformation}
     */
    this.updateRequestLogSettings = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['diagnosticsSettingsInformation'];

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
      var returnType = DiagnosticsSettingsInformation;

      return this.apiClient.callApi(
        '/v2.1/diagnostics/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));