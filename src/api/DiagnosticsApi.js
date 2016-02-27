(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/ServiceInformation', '../model/ErrorDetails', '../model/ResourceInformation', '../model/ApiRequestLogsResult', '../model/DiagnosticsSettingsInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ServiceInformation'), require('../model/ErrorDetails'), require('../model/ResourceInformation'), require('../model/ApiRequestLogsResult'), require('../model/DiagnosticsSettingsInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DiagnosticsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ServiceInformation, root.Docusign.ErrorDetails, root.Docusign.ResourceInformation, root.Docusign.ApiRequestLogsResult, root.Docusign.DiagnosticsSettingsInformation);
  }
}(this, function(Configuration, ApiClient, ServiceInformation, ErrorDetails, ResourceInformation, ApiRequestLogsResult, DiagnosticsSettingsInformation) {
  'use strict';

  var DiagnosticsApi = function DiagnosticsApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    
    /**
     * Retrieves the available REST API versions.
     * Retrieves the available REST API versions.\n\nDocuSign Production system: https://www.docusign.net/restapi/service_information\nDocuSign Demo system: https://demo.docusign.net/restapi/service_information\n\nYou do not need an integrator key to view the REST API versions and resources.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ServiceInformation
     */
    self.getService = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
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
            var result = new ServiceInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/service_information', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Lists resources for REST version specified
     * Retrieves the base resources available for the DocuSign REST APIs.\n\nYou do not need an integrator key to view the REST API versions and resources.\n\nExample: https://demo.docusign.net/restapi/v2 lists all of the base resources available in version 2 of the REST API on the DocuSign Demo system.\n\nTo view descriptions and samples of the service operations for all versions, remove the version number and add /help to the URL.\n\nExample: https://demo.docusign.net/restapi/help lists the REST API operations on the DocuSign Demo system with XML and JSON request and response samples.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ResourceInformation
     */
    self.getResources = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
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
            var result = new ResourceInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Gets the API request logging log files. Retrieves a list of log entries as a JSON or xml object or as a zip file containing the entries.\n\nIf the Accept header is set to application/zip, the response is a zip file containing individual text files, each representing an API request.\n\nIf the Accept header is set to `application/json` or `application/xml`, the response returns list of log entries in either JSON or XML. An example JSON response body is shown below.
    /// </summary>
    self.ListRequestLogsOptions = function () {
      
      var encoding = null;
      
      
      this.setEncoding = function(encoding) {
        this.encoding = encoding;
      }
	
      this.getEncoding = function() {
        return this.encoding;
      }
      
    }
    
    
    /**
     * Gets the API request logging log files.
     * Retrieves a list of log entries as a JSON or xml object or as a zip file containing the entries.\n\nIf the Accept header is set to application/zip, the response is a zip file containing individual text files, each representing an API request.\n\nIf the Accept header is set to `application/json` or `application/xml`, the response returns list of log entries in either JSON or XML. An example JSON response body is shown below.
     * @param {DiagnosticsApi.ListRequestLogsOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ApiRequestLogsResult
     */
    self.listRequestLogs = function(options, callback) {
      var postBody = null;
      

      
      var pathParams = {
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'encoding': options.encoding
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
            var result = new ApiRequestLogsResult();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/diagnostics/request_logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes the request log files.
     * Deletes the request log files.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.deleteRequestLogs = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
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
        '/v2/diagnostics/request_logs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets a request logging log file.
     * Retrieves information for a single log entry.\n\n**Request**\nThe `requestLogfId` property can be retrieved by getting the list of log entries. The Content-Transfer-Encoding header can be set to base64 to retrieve the API request/response as base 64 string. Otherwise the bytes of the request/response are returned.\n\n**Response**\nIf the Content-Transfer-Encoding header was set to base64, the log is returned as a base64 string.
     * @param {String} requestLogId: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: File
     */
    self.getRequestLog = function(requestLogId, callback) {
      var postBody = null;
      
      // verify the required parameter 'requestLogId' is set
      if (requestLogId == null) {
        throw "Missing the required parameter 'requestLogId' when calling getRequestLog";
      }
      

      
      var pathParams = {
        'requestLogId': requestLogId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['text/plain'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/diagnostics/request_logs/{requestLogId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the API request logging settings.
     * Retrieves the current API request logging setting for the user and remaining log entries.\n\n**Response**\nThe response includes the current API request logging setting for the user, along with the maximum log entries and remaining log entries.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DiagnosticsSettingsInformation
     */
    self.getRequestLogSettings = function(callback) {
      var postBody = null;
      

      
      var pathParams = {
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
            var result = new DiagnosticsSettingsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/diagnostics/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Enables or disables API request logging for troubleshooting.
     * Enables or disables API request logging for troubleshooting.\n\nWhen enabled (`apiRequestLogging` is set to true), REST API requests and responses for the user are added to a log. A log can have up to 50 requests/responses and the current number of log entries can be determined by getting the settings. Logging is automatically disabled when the log limit of 50 is reached.\n\nYou can call [ML:GetRequestLog] or [ML:GetRequestLogs] to download the log files (individually or as a zip file). Call [ML:DeleteRequestLogs] to clear the log by deleting current entries.\n\nPrivate information, such as passwords and integrator key information, which is normally located in the call header is omitted from the request/response log.\n\n#### Note: API request logging only captures requests from the authenticated user. Any call that does not authenticate the user and resolve a userId isn&#39;t logged. Meaning that login_information, NewAccounts, or other distributor-credential calls are not logged.
     * @param {DiagnosticsSettingsInformation} diagnosticsSettingsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DiagnosticsSettingsInformation
     */
    self.updateRequestLogSettings = function(diagnosticsSettingsInformation, callback) {
      var postBody = diagnosticsSettingsInformation;
      

      
      var pathParams = {
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
            var result = new DiagnosticsSettingsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/diagnostics/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return DiagnosticsApi;
}));
