# Docusign.AccountSharedAccess

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultSetSize** | **String** | The number of results returned in this response.  | [optional] 
**totalSetSize** | **String** | The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response. | [optional] 
**startPosition** | **String** | Starting position of the current result set. | [optional] 
**endPosition** | **String** | The last position in the result set.  | [optional] 
**nextUri** | **String** | The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.  | [optional] 
**previousUri** | **String** | The postal code for the billing address. | [optional] 
**accountId** | **String** | The account ID associated with the envelope. | [optional] 
**sharedAccess** | [**[MemberSharedItems]**](MemberSharedItems.md) | A complex type containing the shared access information to an envelope for the users specified in the request. | [optional] 
**errorDetails** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 


