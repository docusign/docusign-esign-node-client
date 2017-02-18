# Docusign.FolderItemResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultSetSize** | **String** | The number of results returned in this response.  | [optional] 
**startPosition** | **String** | Starting position of the current result set. | [optional] 
**endPosition** | **String** | The last position in the result set.  | [optional] 
**totalRows** | **String** |  | [optional] 
**nextUri** | **String** | The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.  | [optional] 
**previousUri** | **String** | The postal code for the billing address. | [optional] 
**folderItems** | [**[FolderItemV2]**](FolderItemV2.md) | A list of the envelopes in the specified folder or folders.  | [optional] 


