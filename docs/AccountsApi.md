# Docusign.AccountsApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInformation**](AccountsApi.md#getAccountInformation) | **GET** /v2/accounts/{accountId} | Retrieves the account information for the specified account.
[**listCustomFields**](AccountsApi.md#listCustomFields) | **GET** /v2/accounts/{accountId}/custom_fields | Gets a list of custom fields associated with the account.
[**listSettings**](AccountsApi.md#listSettings) | **GET** /v2/accounts/{accountId}/settings | Gets account settings information.
[**listSharedAccess**](AccountsApi.md#listSharedAccess) | **GET** /v2/accounts/{accountId}/shared_access | Reserved: Gets the shared item status for one or more users.
[**listUnsupportedFileTypes**](AccountsApi.md#listUnsupportedFileTypes) | **GET** /v2/accounts/{accountId}/unsupported_file_types | Gets a list of unsupported file types.
[**updateSettings**](AccountsApi.md#updateSettings) | **PUT** /v2/accounts/{accountId}/settings | Updates the account settings for an account.


<a name="getAccountInformation"></a>
# **getAccountInformation**
> AccountInformation getAccountInformation(accountId, opts)

Retrieves the account information for the specified account.

Retrieves the account information for the specified account.  **Response** The &#x60;canUpgrade&#x60; property contains is a Boolean that indicates whether the account can be upgraded through the API. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.AccountsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'op': "op_example", // String | 
  'includeAccountSettings': "includeAccountSettings_example" // String | When set to **true**, includes the account settings for the account in the response.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountInformation(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **op** | **String**|  | [optional] 
 **includeAccountSettings** | **String**| When set to **true**, includes the account settings for the account in the response. | [optional] 

### Return type

[**AccountInformation**](AccountInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCustomFields"></a>
# **listCustomFields**
> CustomFields listCustomFields(accountId)

Gets a list of custom fields associated with the account.

Retrieves a list of envelope custom fields associated with the account. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.  There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. The list custom field lets the sender select the value of the field from a list you provide.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.AccountsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCustomFields(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSettings"></a>
# **listSettings**
> AccountSettingsInformation listSettings(accountId)

Gets account settings information.

Retrieves the account settings information for the specified account.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.AccountsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSettings(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 

### Return type

[**AccountSettingsInformation**](AccountSettingsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSharedAccess"></a>
# **listSharedAccess**
> AccountSharedAccess listSharedAccess(accountId)

Reserved: Gets the shared item status for one or more users.

Reserved: Retrieves shared item status for one or more users and types of items.  Users with account administration privileges can retrieve shared access information for all account users. Users without account administrator privileges can only retrieve shared access information for themselves and the returned information is limited to the retrieving the status of all members of the account that are sharing their folders to the user. This is equivalent to setting the shared&#x3D;shared_from.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.AccountsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSharedAccess(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 

### Return type

[**AccountSharedAccess**](AccountSharedAccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUnsupportedFileTypes"></a>
# **listUnsupportedFileTypes**
> FileTypeList listUnsupportedFileTypes(accountId)

Gets a list of unsupported file types.

Retrieves a list of file types (mime-types and file-extensions) that are not supported for upload through the DocuSign system.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.AccountsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUnsupportedFileTypes(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 

### Return type

[**FileTypeList**](FileTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSettings"></a>
# **updateSettings**
> updateSettings(accountId, opts)

Updates the account settings for an account.

Updates the account settings for the specified account.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.AccountsApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'accountSettingsInformation': new Docusign.AccountSettingsInformation() // AccountSettingsInformation | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSettings(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **accountSettingsInformation** | [**AccountSettingsInformation**](AccountSettingsInformation.md)| TBD Description | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

