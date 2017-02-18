# Docusign.FoldersApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](FoldersApi.md#list) | **GET** /v2/accounts/{accountId}/folders | Gets a list of the folders for the account.
[**listItems**](FoldersApi.md#listItems) | **GET** /v2/accounts/{accountId}/folders/{folderId} | Gets a list of the envelopes in the specified folder.
[**moveEnvelopes**](FoldersApi.md#moveEnvelopes) | **PUT** /v2/accounts/{accountId}/folders/{folderId} | Moves an envelope from its current folder to the specified folder.
[**search**](FoldersApi.md#search) | **GET** /v2/accounts/{accountId}/search_folders/{searchFolderId} | Gets a list of envelopes in folders matching the specified criteria.


<a name="list"></a>
# **list**
> FoldersResponse list(accountId)

Gets a list of the folders for the account.

Retrieves a list of the folders for the account, including the folder hierarchy. You can specify whether to return just the template folder or template folder and normal folders by setting the &#x60;template&#x60; query string parameter.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.FoldersApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.list(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 

### Return type

[**FoldersResponse**](FoldersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listItems"></a>
# **listItems**
> FolderItemsResponse listItems(accountId, folderId)

Gets a list of the envelopes in the specified folder.

Retrieves a list of the envelopes in the specified folder. You can narrow the query by specifying search criteria in the query string parameters.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.FoldersApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var folderId = "folderId_example"; // String | The ID of the folder being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listItems(accountId, folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **folderId** | **String**| The ID of the folder being accessed. | 

### Return type

[**FolderItemsResponse**](FolderItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="moveEnvelopes"></a>
# **moveEnvelopes**
> FoldersResponse moveEnvelopes(accountId, folderId, opts)

Moves an envelope from its current folder to the specified folder.

Moves an envelope from its current folder to the specified folder.  #### Note: You can use this endpoint to delete envelopes by specifying &#x60;recyclebin&#39; in the &#x60;folderId&#x60; parameter of the endpoint. Placing an in process envelope (envelope status of &#x60;sent&#x60; or &#x60;delivered&#x60;) in the recycle bin voids the envelope. You can also use this endpoint to delete templates by specifying a template ID instead of an envelope ID in the &#39;envelopeIds&#39; property and specifying &#x60;recyclebin&#x60; in the &#x60;folderId&#x60; parameter. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.FoldersApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var folderId = "folderId_example"; // String | The ID of the folder being accessed.

var opts = { 
  'foldersRequest': new Docusign.FoldersRequest() // FoldersRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveEnvelopes(accountId, folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **folderId** | **String**| The ID of the folder being accessed. | 
 **foldersRequest** | [**FoldersRequest**](FoldersRequest.md)| TBD Description | [optional] 

### Return type

[**FoldersResponse**](FoldersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="search"></a>
# **search**
> FolderItemResponse search(accountId, searchFolderId, opts)

Gets a list of envelopes in folders matching the specified criteria.

Retrieves a list of envelopes that match the criteria specified in the query.  If the user ID of the user making the call is the same as the user ID for any returned recipient, then the userId property is added to the returned information for those recipients.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.FoldersApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var searchFolderId = "searchFolderId_example"; // String | Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature.

var opts = { 
  'toDate': "toDate_example", // String | Specifies the end of the date range to return.
  'order': "order_example", // String | Specifies the order in which the list is returned. Valid values are: `asc` for ascending order, and `desc` for descending order.
  'includeRecipients': "includeRecipients_example", // String | When set to **true**, the recipient information is returned in the response.
  'all': "all_example", // String | Specifies that all envelopes that match the criteria are returned.
  'orderBy': "orderBy_example", // String | Specifies the property used to sort the list. Valid values are: `action_required`, `created`, `completed`, `sent`, `signer_list`, `status`, or `subject`.
  'startPosition': "startPosition_example", // String | Specifies the the starting location in the result set of the items that are returned.
  'count': "count_example", // String | Specifies the number of records returned in the cache. The number must be greater than 0 and less than or equal to 100.
  'fromDate': "fromDate_example" // String | Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.search(accountId, searchFolderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **searchFolderId** | **String**| Specifies the envelope group that is searched by the request. These are logical groupings, not actual folder names. Valid values are: drafts, awaiting_my_signature, completed, out_for_signature. | 
 **toDate** | **String**| Specifies the end of the date range to return. | [optional] 
 **order** | **String**| Specifies the order in which the list is returned. Valid values are: &#x60;asc&#x60; for ascending order, and &#x60;desc&#x60; for descending order. | [optional] 
 **includeRecipients** | **String**| When set to **true**, the recipient information is returned in the response. | [optional] 
 **all** | **String**| Specifies that all envelopes that match the criteria are returned. | [optional] 
 **orderBy** | **String**| Specifies the property used to sort the list. Valid values are: &#x60;action_required&#x60;, &#x60;created&#x60;, &#x60;completed&#x60;, &#x60;sent&#x60;, &#x60;signer_list&#x60;, &#x60;status&#x60;, or &#x60;subject&#x60;. | [optional] 
 **startPosition** | **String**| Specifies the the starting location in the result set of the items that are returned. | [optional] 
 **count** | **String**| Specifies the number of records returned in the cache. The number must be greater than 0 and less than or equal to 100. | [optional] 
 **fromDate** | **String**| Specifies the start of the date range to return. If no value is provided, the default search is the previous 30 days. | [optional] 

### Return type

[**FolderItemResponse**](FolderItemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

