# Docusign.GroupInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**[Group]**](Group.md) | A collection group objects containing information about the groups returned. | [optional] 
**resultSetSize** | **String** | The number of results returned in this response.  | [optional] 
**totalSetSize** | **String** | The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response. | [optional] 
**startPosition** | **String** | Starting position of the current result set. | [optional] 
**endPosition** | **String** | The last position in the result set.  | [optional] 
**nextUri** | **String** | The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.  | [optional] 
**previousUri** | **String** | The postal code for the billing address. | [optional] 


