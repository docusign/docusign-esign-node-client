# Docusign.FolderItemV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ownerName** | **String** |  | [optional] 
**envelopeId** | **String** | The envelope ID of the envelope status that failed to post. | [optional] 
**envelopeUri** | **String** | Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes. | [optional] 
**status** | **String** | Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later. | [optional] 
**lastModifiedDateTime** | **String** | The date and time the item was last modified. | [optional] 
**senderUserId** | **String** |  | [optional] 
**senderName** | **String** |  | [optional] 
**senderEmail** | **String** |  | [optional] 
**senderCompany** | **String** |  | [optional] 
**createdDateTime** | **String** | Indicates the date and time the item was created. | [optional] 
**sentDateTime** | **String** | The date and time the envelope was sent. | [optional] 
**completedDateTime** | **String** | Specifies the date and time this item was completed. | [optional] 
**subject** | **String** |  | [optional] 
**expireDateTime** | **String** | The date and time the envelope is set to expire. | [optional] 
**folderId** | **String** |  | [optional] 
**folderUri** | **String** |  | [optional] 
**recipients** | [**Recipients**](Recipients.md) |  | [optional] 
**recipientsUri** | **String** | Contains a URI for an endpoint that you can use to retrieve the recipients. | [optional] 
**is21CFRPart11** | **String** | When set to **true**, indicates that this module is enabled on the account. | [optional] 
**isUniversalSignatureEnvelope** | **String** |  | [optional] 


