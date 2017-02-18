# Docusign.BulkEnvelope

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** |  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The &#x60;transactionId&#x60; property can be used determine an envelope&#39;s status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned. | [optional] 
**submittedDateTime** | **String** |  | [optional] 
**envelopeId** | **String** | The envelope ID of the envelope status that failed to post. | [optional] 
**envelopeUri** | **String** | Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes. | [optional] 
**bulkRecipientRow** | **String** | Reserved: TBD | [optional] 
**name** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**bulkStatus** | **String** | Indicates the status of the bulk send operation. Returned values can be: * queued * processing * sent * failed | [optional] 
**errorDetails** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 


