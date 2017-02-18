# Docusign.DiagnosticsApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRequestLogs**](DiagnosticsApi.md#deleteRequestLogs) | **DELETE** /v2/diagnostics/request_logs | Deletes the request log files.
[**getRequestLog**](DiagnosticsApi.md#getRequestLog) | **GET** /v2/diagnostics/request_logs/{requestLogId} | Gets a request logging log file.
[**getRequestLogSettings**](DiagnosticsApi.md#getRequestLogSettings) | **GET** /v2/diagnostics/settings | Gets the API request logging settings.
[**getResources**](DiagnosticsApi.md#getResources) | **GET** /v2 | Lists resources for REST version specified
[**getService**](DiagnosticsApi.md#getService) | **GET** /service_information | Retrieves the available REST API versions.
[**listRequestLogs**](DiagnosticsApi.md#listRequestLogs) | **GET** /v2/diagnostics/request_logs | Gets the API request logging log files.
[**updateRequestLogSettings**](DiagnosticsApi.md#updateRequestLogSettings) | **PUT** /v2/diagnostics/settings | Enables or disables API request logging for troubleshooting.


<a name="deleteRequestLogs"></a>
# **deleteRequestLogs**
> deleteRequestLogs()

Deletes the request log files.

Deletes the request log files.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.DiagnosticsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRequestLogs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRequestLog"></a>
# **getRequestLog**
> Object getRequestLog(requestLogId)

Gets a request logging log file.

Retrieves information for a single log entry.  **Request** The &#x60;requestLogfId&#x60; property can be retrieved by getting the list of log entries. The Content-Transfer-Encoding header can be set to base64 to retrieve the API request/response as base 64 string. Otherwise the bytes of the request/response are returned.  **Response** If the Content-Transfer-Encoding header was set to base64, the log is returned as a base64 string.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.DiagnosticsApi();

var requestLogId = "requestLogId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRequestLog(requestLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestLogId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getRequestLogSettings"></a>
# **getRequestLogSettings**
> DiagnosticsSettingsInformation getRequestLogSettings()

Gets the API request logging settings.

Retrieves the current API request logging setting for the user and remaining log entries.  **Response** The response includes the current API request logging setting for the user, along with the maximum log entries and remaining log entries.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.DiagnosticsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRequestLogSettings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DiagnosticsSettingsInformation**](DiagnosticsSettingsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getResources"></a>
# **getResources**
> ResourceInformation getResources()

Lists resources for REST version specified

Retrieves the base resources available for the DocuSign REST APIs.  You do not need an integrator key to view the REST API versions and resources.  Example: https://demo.docusign.net/restapi/v2 lists all of the base resources available in version 2 of the REST API on the DocuSign Demo system.  To view descriptions and samples of the service operations for all versions, remove the version number and add /help to the URL.  Example: https://demo.docusign.net/restapi/help lists the REST API operations on the DocuSign Demo system with XML and JSON request and response samples.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.DiagnosticsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getResources(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResourceInformation**](ResourceInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getService"></a>
# **getService**
> ServiceInformation getService()

Retrieves the available REST API versions.

Retrieves the available REST API versions.  DocuSign Production system: https://www.docusign.net/restapi/service_information DocuSign Demo system: https://demo.docusign.net/restapi/service_information  You do not need an integrator key to view the REST API versions and resources.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.DiagnosticsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getService(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceInformation**](ServiceInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRequestLogs"></a>
# **listRequestLogs**
> ApiRequestLogsResult listRequestLogs(opts)

Gets the API request logging log files.

Retrieves a list of log entries as a JSON or xml object or as a zip file containing the entries.  If the Accept header is set to application/zip, the response is a zip file containing individual text files, each representing an API request.  If the Accept header is set to &#x60;application/json&#x60; or &#x60;application/xml&#x60;, the response returns list of log entries in either JSON or XML. An example JSON response body is shown below. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.DiagnosticsApi();

var opts = { 
  'encoding': "encoding_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRequestLogs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encoding** | **String**|  | [optional] 

### Return type

[**ApiRequestLogsResult**](ApiRequestLogsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRequestLogSettings"></a>
# **updateRequestLogSettings**
> DiagnosticsSettingsInformation updateRequestLogSettings(opts)

Enables or disables API request logging for troubleshooting.

Enables or disables API request logging for troubleshooting.  When enabled (&#x60;apiRequestLogging&#x60; is set to true), REST API requests and responses for the user are added to a log. A log can have up to 50 requests/responses and the current number of log entries can be determined by getting the settings. Logging is automatically disabled when the log limit of 50 is reached.  You can call [ML:GetRequestLog] or [ML:GetRequestLogs] to download the log files (individually or as a zip file). Call [ML:DeleteRequestLogs] to clear the log by deleting current entries.  Private information, such as passwords and integrator key information, which is normally located in the call header is omitted from the request/response log.  #### Note: API request logging only captures requests from the authenticated user. Any call that does not authenticate the user and resolve a userId isn&#39;t logged. Meaning that login_information, NewAccounts, or other distributor-credential calls are not logged. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.DiagnosticsApi();

var opts = { 
  'diagnosticsSettingsInformation': new Docusign.DiagnosticsSettingsInformation() // DiagnosticsSettingsInformation | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRequestLogSettings(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diagnosticsSettingsInformation** | [**DiagnosticsSettingsInformation**](DiagnosticsSettingsInformation.md)| TBD Description | [optional] 

### Return type

[**DiagnosticsSettingsInformation**](DiagnosticsSettingsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

