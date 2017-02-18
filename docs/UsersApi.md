# Docusign.UsersApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettings**](UsersApi.md#getSettings) | **GET** /v2/accounts/{accountId}/users/{userId}/settings | Gets the user account settings for a specified user.


<a name="getSettings"></a>
# **getSettings**
> UserSettingsInformation getSettings(accountId, userId)

Gets the user account settings for a specified user.

Retrieves a list of the account settings and email notification information for the specified user.  The response returns the account setting name/value information and the email notification settings for the specified user. For more information about the different user settings, see the [ML:userSettings list].

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.UsersApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var userId = "userId_example"; // String | The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSettings(accountId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **userId** | **String**| The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing. | 

### Return type

[**UserSettingsInformation**](UserSettingsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

