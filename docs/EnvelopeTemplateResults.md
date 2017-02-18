# Docusign.EnvelopeTemplateResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envelopeTemplates** | [**[EnvelopeTemplateResult]**](EnvelopeTemplateResult.md) | The list of requested templates. | [optional] 
**resultSetSize** | **String** | The number of results returned in this response.  | [optional] 
**startPosition** | **String** | Starting position of the current result set. | [optional] 
**endPosition** | **String** | The last position in the result set.  | [optional] 
**totalSetSize** | **String** | The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response. | [optional] 
**nextUri** | **String** | The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.  | [optional] 
**previousUri** | **String** | The postal code for the billing address. | [optional] 
**folders** | [**[Folder]**](Folder.md) |  | [optional] 


