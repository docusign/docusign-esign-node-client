# Docusign.Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **String** | Specifies the document ID number that the tab is placed on. This must refer to an existing Document&#39;s ID attribute. | [optional] 
**uri** | **String** |  | [optional] 
**remoteUrl** | **String** | The file id from the cloud storage service where the document is located. This information is returned using [ML:GET /folders] or [ML:/folders/{folderid}].  | [optional] 
**name** | **String** |  | [optional] 
**password** | **String** |  | [optional] 
**transformPdfFields** | **String** | When set to **true**, PDF form field data is transformed into document tab values when the PDF form field name matches the DocuSign custom tab tabLabel. The resulting PDF form data is also returned in the PDF meta data when requesting the document PDF. See the [ML:Transform PDF Fields] section for more information about how fields are transformed into DocuSign tabs.  | [optional] 
**fileExtension** | **String** | The file extension type of the document. If the document is not a PDF it is converted to a PDF.   | [optional] 
**matchBoxes** | [**[MatchBox]**](MatchBox.md) | Matchboxes define areas in a document for document matching when you are creating envelopes. They are only used when you upload and edit a template.   A matchbox consists of 5 elements:  * pageNumber - The document page number  on which the matchbox will appear.  * xPosition - The x position of the matchbox on a page.  * yPosition - The y position of the matchbox on a page. * width - The width of the matchbox.  * height - The height of the matchbox.   | [optional] 
**order** | **String** |  | [optional] 
**pages** | **String** |  | [optional] 
**documentFields** | [**[NameValue]**](NameValue.md) |  | [optional] 
**encryptedWithKeyManager** | **String** | When set to **true**, the document is been already encrypted by the sender for use with the DocuSign Key Manager Security Appliance.   | [optional] 
**documentBase64** | **String** | The document byte stream. This allows putting a base64 version of document bytes into an envelope. | [optional] 
**applyAnchorTabs** | **String** | Reserved: TBD | [optional] 


