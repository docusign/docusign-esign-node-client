# Docusign.BulkEnvelopeStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchSize** | **String** | The number of items returned in this response. | [optional] 
**batchId** | **String** | Specifies an identifier which can be used to retrieve a more detailed status of individual bulk recipient batches. | [optional] 
**bulkEnvelopesBatchUri** | **String** | Reserved: TBD | [optional] 
**failed** | **String** | The number of entries with a status of failed.  | [optional] 
**queued** | **String** | The number of entries with a status of queued.  | [optional] 
**sent** | **String** | The number of entries with a status of sent. | [optional] 
**submittedDate** | **String** |  | [optional] 
**resultSetSize** | **String** | The number of results returned in this response.  | [optional] 
**startPosition** | **String** | Starting position of the current result set. | [optional] 
**endPosition** | **String** | The last position in the result set.  | [optional] 
**totalSetSize** | **String** | The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response. | [optional] 
**nextUri** | **String** | The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.  | [optional] 
**previousUri** | **String** | The postal code for the billing address. | [optional] 
**bulkEnvelopes** | [**[BulkEnvelope]**](BulkEnvelope.md) | Reserved: TBD | [optional] 


