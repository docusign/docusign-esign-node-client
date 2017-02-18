# Docusign.EnvelopeTemplateDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **String** | The unique identifier of the template. If this is not provided, DocuSign will generate a value.  | [optional] 
**name** | **String** |  | [optional] 
**shared** | **String** | When set to **true**, this custom tab is shared. | [optional] 
**password** | **String** |  | [optional] 
**newPassword** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**lastModified** | **String** |  | [optional] 
**lastModifiedBy** | [**UserInfo**](UserInfo.md) |  | [optional] 
**pageCount** | **Number** | An integer value specifying the number of document pages in the template. Omit this property if not submitting a page count. | [optional] 
**uri** | **String** |  | [optional] 
**folderName** | **String** |  The name of the folder in which the template is located. | [optional] 
**folderId** | **String** | The ID for the folder. | [optional] 
**folderUri** | **String** | The URI of the folder. | [optional] 
**parentFolderUri** | **String** |  | [optional] 
**owner** | [**UserInfo**](UserInfo.md) |  | [optional] 


