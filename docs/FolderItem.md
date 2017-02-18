# Docusign.FolderItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ownerName** | **String** | Name of the envelope owner. | [optional] 
**envelopeId** | **String** | The envelope ID of the envelope status that failed to post. | [optional] 
**envelopeUri** | **String** | Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes. | [optional] 
**status** | **String** | Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later. | [optional] 
**senderName** | **String** | Name of the envelope sender. | [optional] 
**senderEmail** | **String** |  | [optional] 
**createdDateTime** | **String** | Indicates the date and time the item was created. | [optional] 
**sentDateTime** | **String** | The date and time the envelope was sent. | [optional] 
**completedDateTime** | **String** | Specifies the date and time this item was completed. | [optional] 
**subject** | **String** |  | [optional] 
**templateId** | **String** | The unique identifier of the template. If this is not provided, DocuSign will generate a value.  | [optional] 
**name** | **String** |  | [optional] 
**shared** | **String** | When set to **true**, this custom tab is shared. | [optional] 
**password** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**lastModified** | **String** |  | [optional] 
**pageCount** | **Number** |  | [optional] 
**uri** | **String** |  | [optional] 
**is21CFRPart11** | **String** | When set to **true**, indicates that this module is enabled on the account. | [optional] 
**isUniversalSignatureEnvelope** | **String** |  | [optional] 
**customFields** | [**[CustomFieldV2]**](CustomFieldV2.md) | An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters. | [optional] 


