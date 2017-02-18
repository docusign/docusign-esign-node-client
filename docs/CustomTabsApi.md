# Docusign.CustomTabsApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](CustomTabsApi.md#_delete) | **DELETE** /v2/accounts/{accountId}/tab_definitions/{customTabId} | Deletes custom tab information.
[**create**](CustomTabsApi.md#create) | **POST** /v2/accounts/{accountId}/tab_definitions | Creates a custom tab.
[**get**](CustomTabsApi.md#get) | **GET** /v2/accounts/{accountId}/tab_definitions/{customTabId} | Gets custom tab information.
[**list**](CustomTabsApi.md#list) | **GET** /v2/accounts/{accountId}/tab_definitions | Gets a list of all account tabs.
[**update**](CustomTabsApi.md#update) | **PUT** /v2/accounts/{accountId}/tab_definitions/{customTabId} | Updates custom tab information.  


<a name="_delete"></a>
# **_delete**
> _delete(accountId, customTabId)

Deletes custom tab information.

Deletes the custom from the specified account.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.CustomTabsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var customTabId = "customTabId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance._delete(accountId, customTabId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **customTabId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="create"></a>
# **create**
> TabMetadata create(accountId, opts)

Creates a custom tab.

Creates a tab with pre-defined properties, such as a text tab with a certain font type and validation pattern. Users can access the custom tabs when sending documents through the DocuSign web application.  Custom tabs can be created for approve, checkbox, company, date, date signed, decline, email, email address, envelope ID, first name, formula, full name, initial here, last name, list, note, number, radio, sign here, signer attachment, SSN, text, title, and zip tabs.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.CustomTabsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'tabMetadata': new Docusign.TabMetadata() // TabMetadata | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.create(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **tabMetadata** | [**TabMetadata**](TabMetadata.md)| TBD Description | [optional] 

### Return type

[**TabMetadata**](TabMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="get"></a>
# **get**
> TabMetadata get(accountId, customTabId)

Gets custom tab information.

Retrieves information about the requested custom tab on the specified account.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.CustomTabsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var customTabId = "customTabId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.get(accountId, customTabId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **customTabId** | **String**|  | 

### Return type

[**TabMetadata**](TabMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="list"></a>
# **list**
> TabMetadataList list(accountId, opts)

Gets a list of all account tabs.

Retrieves a list of all tabs associated with the account.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.CustomTabsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'customTabOnly': "customTabOnly_example" // String | When set to **true**, only custom tabs are returned in the response. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.list(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **customTabOnly** | **String**| When set to **true**, only custom tabs are returned in the response.  | [optional] 

### Return type

[**TabMetadataList**](TabMetadataList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="update"></a>
# **update**
> TabMetadata update(accountId, customTabId, opts)

Updates custom tab information.  

Updates the information in a custom tab for the specified account.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.CustomTabsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var customTabId = "customTabId_example"; // String | 

var opts = { 
  'tabMetadata': new Docusign.TabMetadata() // TabMetadata | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.update(accountId, customTabId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **customTabId** | **String**|  | 
 **tabMetadata** | [**TabMetadata**](TabMetadata.md)| TBD Description | [optional] 

### Return type

[**TabMetadata**](TabMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

