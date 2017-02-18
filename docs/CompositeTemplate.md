# Docusign.CompositeTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compositeTemplateId** | **String** | Specifies the identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the composite template ID to which the document should be added. If composite template ID is not specified in the content-disposition, the document is applied based on the value of the &#x60;documentId&#x60; property only. If no document object is specified, the composite template inherits the first document. | [optional] 
**serverTemplates** | [**[ServerTemplate]**](ServerTemplate.md) | 0 or more server-side templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value | [optional] 
**inlineTemplates** | [**[InlineTemplate]**](InlineTemplate.md) |  Zero or more inline templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value. | [optional] 
**pdfMetaDataTemplateSequence** | **String** |  | [optional] 
**document** | [**Document**](Document.md) |  | [optional] 


