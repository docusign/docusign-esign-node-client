# Docusign.AuthenticationApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthenticationApi.md#login) | **GET** /v2/login_information | Gets login information for a specified user.


<a name="login"></a>
# **login**
> LoginInformation login(opts)

Gets login information for a specified user.

Retrieves login information for a specified user. Each account that is associated with the login credentials is listed. You can use the returned information to determine whether a user is authenticated and select an account to use in future operations.    The &#x60;baseUrl&#x60; property, returned in the response, is used in all future API calls as the base of the request URL. The &#x60;baseUrl&#x60; property contains the DocuSign server, the API version, and the &#x60;accountId&#x60; property that is used for the login. This request uses your DocuSign credentials to retrieve the account information.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.AuthenticationApi();

var opts = { 
  'includeAccountIdGuid': "includeAccountIdGuid_example", // String | When set to **true**, shows the account ID GUID in the response.
  'loginSettings': "loginSettings_example", // String | Determines whether login settings are returned in the response.  Valid Values:  * all -  All the login settings are returned.  * none - no login settings are returned.
  'apiPassword': "apiPassword_example" // String | When set to **true**, shows the account API password in the response.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeAccountIdGuid** | **String**| When set to **true**, shows the account ID GUID in the response. | [optional] 
 **loginSettings** | **String**| Determines whether login settings are returned in the response.  Valid Values:  * all -  All the login settings are returned.  * none - no login settings are returned. | [optional] 
 **apiPassword** | **String**| When set to **true**, shows the account API password in the response. | [optional] 

### Return type

[**LoginInformation**](LoginInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

