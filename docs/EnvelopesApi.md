# Docusign.EnvelopesApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTemplate**](EnvelopesApi.md#applyTemplate) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/templates | Adds templates to an envelope.
[**applyTemplateToDocument**](EnvelopesApi.md#applyTemplateToDocument) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates | Adds templates to a document in an  envelope.
[**createConsoleView**](EnvelopesApi.md#createConsoleView) | **POST** /v2/accounts/{accountId}/views/console | Returns a URL to the authentication view UI.
[**createCorrectView**](EnvelopesApi.md#createCorrectView) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/views/correct | Returns a URL to the envelope correction UI.
[**createCustomFields**](EnvelopesApi.md#createCustomFields) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields | Updates envelope custom fields for an envelope.
[**createDocumentFields**](EnvelopesApi.md#createDocumentFields) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields | Creates custom document fields in an existing envelope document.
[**createEditView**](EnvelopesApi.md#createEditView) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/views/edit | Returns a URL to the edit view UI.
[**createEmailSettings**](EnvelopesApi.md#createEmailSettings) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings | Adds email setting overrides to an envelope.
[**createEnvelope**](EnvelopesApi.md#createEnvelope) | **POST** /v2/accounts/{accountId}/envelopes | Creates an envelope.
[**createLock**](EnvelopesApi.md#createLock) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/lock | Lock an envelope.
[**createRecipient**](EnvelopesApi.md#createRecipient) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients | Adds one or more recipients to an envelope.
[**createRecipientView**](EnvelopesApi.md#createRecipientView) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/views/recipient | Returns a URL to the recipient view UI.
[**createSenderView**](EnvelopesApi.md#createSenderView) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/views/sender | Returns a URL to the sender view UI.
[**createTabs**](EnvelopesApi.md#createTabs) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs | Adds tabs for a recipient.
[**createViewLink**](EnvelopesApi.md#createViewLink) | **POST** /v2/accounts/{accountId}/envelopes/{envelopeId}/views/viewlink | Reserved: Returns a URL to the secure link view UI.
[**deleteCustomFields**](EnvelopesApi.md#deleteCustomFields) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields | Deletes envelope custom fields for draft and in-process envelopes.
[**deleteDocumentFields**](EnvelopesApi.md#deleteDocumentFields) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields | Deletes custom document fields from an existing envelope document.
[**deleteDocumentPage**](EnvelopesApi.md#deleteDocumentPage) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber} | Deletes a page from a document in an envelope.
[**deleteDocuments**](EnvelopesApi.md#deleteDocuments) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents | Deletes documents from a draft envelope.
[**deleteEmailSettings**](EnvelopesApi.md#deleteEmailSettings) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings | Deletes the email setting overrides for an envelope.
[**deleteLock**](EnvelopesApi.md#deleteLock) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/lock | Deletes an envelope lock.
[**deleteRecipient**](EnvelopesApi.md#deleteRecipient) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId} | Deletes a recipient from an envelope.
[**deleteRecipients**](EnvelopesApi.md#deleteRecipients) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients | Deletes recipients from an envelope.
[**deleteTabs**](EnvelopesApi.md#deleteTabs) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs | Deletes the tabs associated with a recipient.
[**deleteTemplatesFromDocument**](EnvelopesApi.md#deleteTemplatesFromDocument) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates/{templateId} | Deletes a template from a document in an existing envelope.
[**deleteViewLink**](EnvelopesApi.md#deleteViewLink) | **DELETE** /v2/accounts/{accountId}/envelopes/{envelopeId}/views/viewlink | Reserved: Expires a secure view link.
[**getDocument**](EnvelopesApi.md#getDocument) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId} | Gets a document from an envelope.
[**getEmailSettings**](EnvelopesApi.md#getEmailSettings) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings | Gets the email setting overrides for an envelope.
[**getEnvelope**](EnvelopesApi.md#getEnvelope) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId} | Gets the status of a envelope.
[**getLock**](EnvelopesApi.md#getLock) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/lock | Gets envelope lock information.
[**getNotificationSettings**](EnvelopesApi.md#getNotificationSettings) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/notification | Gets envelope notification information.
[**listAuditEvents**](EnvelopesApi.md#listAuditEvents) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/audit_events | Gets the envelope audit events for an envelope.
[**listCustomFields**](EnvelopesApi.md#listCustomFields) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields | Gets the custom field information for the specified envelope.
[**listDocumentFields**](EnvelopesApi.md#listDocumentFields) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields | Gets the custom document fields from an  existing envelope document.
[**listDocuments**](EnvelopesApi.md#listDocuments) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents | Gets a list of envelope documents.
[**listRecipients**](EnvelopesApi.md#listRecipients) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients | Gets the status of recipients for an envelope.
[**listStatus**](EnvelopesApi.md#listStatus) | **PUT** /v2/accounts/{accountId}/envelopes/status | Gets the envelope status for the specified envelopes.
[**listStatusChanges**](EnvelopesApi.md#listStatusChanges) | **GET** /v2/accounts/{accountId}/envelopes | Gets status changes for one or more envelopes.
[**listTabs**](EnvelopesApi.md#listTabs) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs | Gets the tabs information for a signer or sign-in-person recipient in an envelope.
[**listTemplates**](EnvelopesApi.md#listTemplates) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/templates | Get List of Templates used in an Envelope
[**listTemplatesForDocument**](EnvelopesApi.md#listTemplatesForDocument) | **GET** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates | Gets the templates associated with a document in an existing envelope.
[**update**](EnvelopesApi.md#update) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId} | Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft
[**updateCustomFields**](EnvelopesApi.md#updateCustomFields) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields | Updates envelope custom fields in an envelope.
[**updateDocumentFields**](EnvelopesApi.md#updateDocumentFields) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields | Updates existing custom document fields in an existing envelope document.
[**updateDocuments**](EnvelopesApi.md#updateDocuments) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId}/documents | Adds one or more documents to an existing envelope document.
[**updateEmailSettings**](EnvelopesApi.md#updateEmailSettings) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings | Updates the email setting overrides for an envelope.
[**updateLock**](EnvelopesApi.md#updateLock) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId}/lock | Updates an envelope lock.
[**updateRecipients**](EnvelopesApi.md#updateRecipients) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients | Updates recipients in a draft envelope or corrects recipient information for an in process envelope.
[**updateTabs**](EnvelopesApi.md#updateTabs) | **PUT** /v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs | Updates the tabs for a recipient.  


<a name="applyTemplate"></a>
# **applyTemplate**
> DocumentTemplateList applyTemplate(accountId, envelopeId, opts)

Adds templates to an envelope.

Adds templates to the specified envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'documentTemplateList': new Docusign.DocumentTemplateList() // DocumentTemplateList | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.applyTemplate(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentTemplateList** | [**DocumentTemplateList**](DocumentTemplateList.md)| TBD Description | [optional] 

### Return type

[**DocumentTemplateList**](DocumentTemplateList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="applyTemplateToDocument"></a>
# **applyTemplateToDocument**
> DocumentTemplateList applyTemplateToDocument(accountId, envelopeId, documentId, opts)

Adds templates to a document in an  envelope.

Adds templates to a document in the specified envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.

var opts = { 
  'documentTemplateList': new Docusign.DocumentTemplateList() // DocumentTemplateList | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.applyTemplateToDocument(accountId, envelopeId, documentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **documentTemplateList** | [**DocumentTemplateList**](DocumentTemplateList.md)| TBD Description | [optional] 

### Return type

[**DocumentTemplateList**](DocumentTemplateList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createConsoleView"></a>
# **createConsoleView**
> ViewUrl createConsoleView(accountId, opts)

Returns a URL to the authentication view UI.

Returns a URL that allows you to embed the authentication view of the DocuSign UI in your applications.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'consoleViewRequest': new Docusign.ConsoleViewRequest() // ConsoleViewRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createConsoleView(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **consoleViewRequest** | [**ConsoleViewRequest**](ConsoleViewRequest.md)| TBD Description | [optional] 

### Return type

[**ViewUrl**](ViewUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createCorrectView"></a>
# **createCorrectView**
> ViewUrl createCorrectView(accountId, envelopeId, opts)

Returns a URL to the envelope correction UI.

Returns a URL that allows you to embed the envelope correction view of the DocuSign UI in your applications.  Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'correctViewRequest': new Docusign.CorrectViewRequest() // CorrectViewRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCorrectView(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **correctViewRequest** | [**CorrectViewRequest**](CorrectViewRequest.md)| TBD Description | [optional] 

### Return type

[**ViewUrl**](ViewUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createCustomFields"></a>
# **createCustomFields**
> CustomFields createCustomFields(accountId, envelopeId, opts)

Updates envelope custom fields for an envelope.

Updates the envelope custom fields for draft and in-process envelopes.  Each custom field used in an envelope must have a unique name.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'customFields': new Docusign.CustomFields() // CustomFields | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCustomFields(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **customFields** | [**CustomFields**](CustomFields.md)| TBD Description | [optional] 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createDocumentFields"></a>
# **createDocumentFields**
> DocumentFieldsInformation createDocumentFields(accountId, envelopeId, documentId, opts)

Creates custom document fields in an existing envelope document.

Creates custom document fields in an existing envelope document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.

var opts = { 
  'documentFieldsInformation': new Docusign.DocumentFieldsInformation() // DocumentFieldsInformation | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDocumentFields(accountId, envelopeId, documentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **documentFieldsInformation** | [**DocumentFieldsInformation**](DocumentFieldsInformation.md)| TBD Description | [optional] 

### Return type

[**DocumentFieldsInformation**](DocumentFieldsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createEditView"></a>
# **createEditView**
> ViewUrl createEditView(accountId, envelopeId, opts)

Returns a URL to the edit view UI.

Returns a URL that allows you to embed the edit view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign editing view.   Upon sending completion, the user is returned to the return URL provided by the API application.  Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'returnUrlRequest': new Docusign.ReturnUrlRequest() // ReturnUrlRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEditView(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **returnUrlRequest** | [**ReturnUrlRequest**](ReturnUrlRequest.md)| TBD Description | [optional] 

### Return type

[**ViewUrl**](ViewUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createEmailSettings"></a>
# **createEmailSettings**
> EmailSettings createEmailSettings(accountId, envelopeId, opts)

Adds email setting overrides to an envelope.

Adds email override settings, changing the email address to reply to an email address, name, or the BCC for email archive information, for the envelope. Note that adding email settings will only affect email communications that occur after the addition was made.  ### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'emailSettings': new Docusign.EmailSettings() // EmailSettings | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEmailSettings(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **emailSettings** | [**EmailSettings**](EmailSettings.md)| TBD Description | [optional] 

### Return type

[**EmailSettings**](EmailSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createEnvelope"></a>
# **createEnvelope**
> EnvelopeSummary createEnvelope(accountId, opts)

Creates an envelope.

Creates an envelope.   Using this function you can: * Create an envelope and send it. * Create an envelope from an existing template and send it.  In either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the &#x60;status&#x60; property in the request to &#x60;created&#x60; instead of &#x60;sent&#x60;.  ### Send an Envelope or Create a Draft Envelope  This is a multi-part/form request.  Envelope Event Notification: &#x60;eventNotification&#x60; is an optional property that specifies a set of envelope and recipient status codes, a URL, and some other options. When the envelope or recipient status changes to one of the specified status codes, DocuSign sends a message containing the updated status to the specified URL.  #### Note: DocuSign Connect must be enabled to use &#x60;eventNotification&#x60;, but Connect does not need to be configured for the account since the configuration is done for each envelope.  ### Send an Envelope from a Template  When you create an envelope using a &#x60;templateId&#x60;, the &#x60;recipients&#x60; structure is used to assign recipients to template roles via the &#x60;roleName&#x60; property, override recipient settings that have been specified in the template and set values for tab fields that were defined in the template.  When a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message is used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. If an email subject or message is entered before adding or applying a locked template, the email subject and message is overwritten with the email subject and message from the locked template.  **Composite Templates**:  You can add Composite Templates structure to the  to create envelopes from a combination of DocuSign templates and PDF forms. The basic envelope remains the same, while the Composite Template adds new document and template overlays into the envelope. There can be any number of Composite Template structures in the envelope.  Each Composite Template consists of server templates, inline templates, PDF Metadata templates, and documents.  * Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the &#x60;compositeTemplateId&#x60; to which the document should be added. If &#x60;compositeTemplateId&#x60; is not specified in the content-disposition, the document is applied based on the &#x60;documentId&#x60; only. If no document object is specified, the composite template inherits the first document. * Server Templates are server-side templates stored on the DocuSign server. If supplied they are overlaid into the envelope in the order of their Sequence value. * Inline Templates provide the container to pass inline XML properties. Inline templates allow you to add documents and, for PDF documents, transform the PDF fields into DocuSign tabs. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value. * PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat&#39;s XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied the PDF meta data template will be overlaid into the envelope in the order of their Sequence value. * Document objects are optional structures that provide a container to pass in a document or form. If this object is not passed, the composite template inherits the first document it finds from some other server template or inline template, starting with the lowest sequence value (discussed below).  If there are multiple composite templates, the document content-disposition can include the &#x60;compositeTemplateId&#x60; to which the document should be added. Using the &#x60;compositeTemplateId&#x60; sets which documents are associated with particular composite templates. An example of this usage is:  &#x60;&#x60;&#x60;    --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d     Content-Type: application/pdf     Content-Disposition: file; filename&#x3D;\&quot;eula.pdf\&quot;; documentId&#x3D;1; compositeTemplateId&#x3D;\&quot;1\&quot;     Content-Transfer-Encoding: base64 &#x60;&#x60;&#x60;  Acrobat form objects are only extrapolated from the document object. DocuSign does not derive Acrobat form properties from server templates or inline templates. To instruct DocuSign to extrapolate objects from the Acrobat form, set &#x60;transformPdfFields&#x60; to \&quot;true\&quot; for the document. See the Transform PDF Fields section for more information about how fields are transformed into DocuSign tabs.  *Sequence*  Each type of template has a sequence property, which enables the templates to be over-laid in a particular order. This is significant because \&quot;last-out\&quot; wins in cases of the same property being specified in multiple places in the method schema.  **Merge Recipient Roles for Draft Envelopes**  When an envelope with multiple templates is sent, the recipients from the templates are merged according to template roles and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.  To prevent this, the query parameter &#x60;merge_roles_on_draft&#x60; should be added when posting a draft envelope (status&#x3D;created) with multiple templates. Doing this will merge template roles and remove empty recipients.  #### Note: DocuSign recommends that the merge roles query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.  **Template Email Subject Merge Fields**  This provides the ability to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.  The merge fields, based on the recipient’s &#x60;roleName&#x60;, are added to the &#x60;emailSubject&#x60; when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.  Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.  If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.  * To add a recipient’s name in the subject line add the following text in the &#x60;emailSubject&#x60; when creating the template or when sending an envelope from a template:     [[&lt;roleName&gt;_UserName]]     Example:     &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,&#x60;  * To add a recipient’s email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:     [[&lt;roleName&gt;_Email]]     Example:     &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,&#x60;  In both cases the &lt;roleName&gt; is the recipient’s &#x60;roleName&#x60; in the template.  For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.  *Rules for determining the &#x60;brandId&#x60; used in an envelope*  The following rules are used to determine the &#x60;brandId&#x60; used in an envelope:  * If a &#x60;brandId&#x60; is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope. * If more than one template is used in an envelope and more than one &#x60;brandId&#x60; is specified, the first &#x60;brandId&#x60; specified is used throughout the envelope. * In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account’s default signing brand is used. * For envelopes that do not meet any of the previous rules, the account&#39;s default signing brand is used in the envelope.  ### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'completedDocumentsOnly': "completedDocumentsOnly_example", // String | 
  'mergeRolesOnDraft': "mergeRolesOnDraft_example", // String | When set to **true**, merges template roles and remove empty recipients when you create an envelope with multiple templates.
  'cdseMode': "cdseMode_example", // String | 
  'envelopeDefinition': new Docusign.EnvelopeDefinition() // EnvelopeDefinition | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEnvelope(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **completedDocumentsOnly** | **String**|  | [optional] 
 **mergeRolesOnDraft** | **String**| When set to **true**, merges template roles and remove empty recipients when you create an envelope with multiple templates. | [optional] 
 **cdseMode** | **String**|  | [optional] 
 **envelopeDefinition** | [**EnvelopeDefinition**](EnvelopeDefinition.md)| TBD Description | [optional] 

### Return type

[**EnvelopeSummary**](EnvelopeSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createLock"></a>
# **createLock**
> LockInformation createLock(accountId, envelopeId, opts)

Lock an envelope.

Locks the specified envelope, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the envelope.  Note: Users must have envelope locking capability enabled to use this function (userSetting &#x60;canLockEnvelopes&#x60; must be  set to true for the user).

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'lockRequest': new Docusign.LockRequest() // LockRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLock(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **lockRequest** | [**LockRequest**](LockRequest.md)| TBD Description | [optional] 

### Return type

[**LockInformation**](LockInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createRecipient"></a>
# **createRecipient**
> Recipients createRecipient(accountId, envelopeId, opts)

Adds one or more recipients to an envelope.

Adds one or more recipients to an envelope.  For an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient&#39;s routing order is before or the same as the envelope&#39;s next recipient, an email is only sent if the optional &#x60;resend_envelope&#x60; query string is set to **true**.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'recipients': new Docusign.Recipients() // Recipients | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecipient(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipients** | [**Recipients**](Recipients.md)| TBD Description | [optional] 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createRecipientView"></a>
# **createRecipientView**
> ViewUrl createRecipientView(accountId, envelopeId, opts)

Returns a URL to the recipient view UI.

Returns a URL that allows you to embed the recipient view of the DocuSign UI in your applications. This call cannot be used to view draft envelopes, since those envelopes have not been sent.   Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView.   An entry is added into the Security Level section of the DocuSign Certificate of Completion that reflects the &#x60;securityDomain&#x60; and &#x60;authenticationMethod&#x60; properties used to verify the user identity.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'recipientViewRequest': new Docusign.RecipientViewRequest() // RecipientViewRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecipientView(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipientViewRequest** | [**RecipientViewRequest**](RecipientViewRequest.md)| TBD Description | [optional] 

### Return type

[**ViewUrl**](ViewUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createSenderView"></a>
# **createSenderView**
> ViewUrl createSenderView(accountId, envelopeId, opts)

Returns a URL to the sender view UI.

Returns a URL that allows you to embed the sender view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign sending view.   Upon sending completion, the user is returned to the return URL provided by the API application.  Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'returnUrlRequest': new Docusign.ReturnUrlRequest() // ReturnUrlRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSenderView(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **returnUrlRequest** | [**ReturnUrlRequest**](ReturnUrlRequest.md)| TBD Description | [optional] 

### Return type

[**ViewUrl**](ViewUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTabs"></a>
# **createTabs**
> Tabs createTabs(accountId, envelopeId, recipientId, opts)

Adds tabs for a recipient.

Adds one or more tabs for a recipient.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.

var opts = { 
  'tabs': new Docusign.Tabs() // Tabs | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTabs(accountId, envelopeId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **tabs** | [**Tabs**](Tabs.md)| TBD Description | [optional] 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createViewLink"></a>
# **createViewLink**
> ViewUrl createViewLink(accountId, envelopeId, opts)

Reserved: Returns a URL to the secure link view UI.

Reserved: Returns a URL that allows you to embed the secure link view of the DocuSign UI in your applications.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'viewLinkRequest': new Docusign.ViewLinkRequest() // ViewLinkRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createViewLink(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **viewLinkRequest** | [**ViewLinkRequest**](ViewLinkRequest.md)| TBD Description | [optional] 

### Return type

[**ViewUrl**](ViewUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomFields"></a>
# **deleteCustomFields**
> CustomFields deleteCustomFields(accountId, envelopeId, opts)

Deletes envelope custom fields for draft and in-process envelopes.

Deletes envelope custom fields for draft and in-process envelopes.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'customFields': new Docusign.CustomFields() // CustomFields | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCustomFields(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **customFields** | [**CustomFields**](CustomFields.md)| TBD Description | [optional] 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDocumentFields"></a>
# **deleteDocumentFields**
> DocumentFieldsInformation deleteDocumentFields(accountId, envelopeId, documentId, opts)

Deletes custom document fields from an existing envelope document.

Deletes custom document fields from an existing envelope document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.

var opts = { 
  'documentFieldsInformation': new Docusign.DocumentFieldsInformation() // DocumentFieldsInformation | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDocumentFields(accountId, envelopeId, documentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **documentFieldsInformation** | [**DocumentFieldsInformation**](DocumentFieldsInformation.md)| TBD Description | [optional] 

### Return type

[**DocumentFieldsInformation**](DocumentFieldsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDocumentPage"></a>
# **deleteDocumentPage**
> deleteDocumentPage(accountId, envelopeId, documentId, pageNumber)

Deletes a page from a document in an envelope.

Deletes a page from a document in an envelope based on the page number.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.

var pageNumber = "pageNumber_example"; // String | The page number being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDocumentPage(accountId, envelopeId, documentId, pageNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **pageNumber** | **String**| The page number being accessed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDocuments"></a>
# **deleteDocuments**
> EnvelopeDocumentsResult deleteDocuments(accountId, envelopeId, opts)

Deletes documents from a draft envelope.

Deletes one or more documents from an existing draft envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'envelopeDefinition': new Docusign.EnvelopeDefinition() // EnvelopeDefinition | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDocuments(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **envelopeDefinition** | [**EnvelopeDefinition**](EnvelopeDefinition.md)| TBD Description | [optional] 

### Return type

[**EnvelopeDocumentsResult**](EnvelopeDocumentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEmailSettings"></a>
# **deleteEmailSettings**
> EmailSettings deleteEmailSettings(accountId, envelopeId)

Deletes the email setting overrides for an envelope.

Deletes all existing email override settings for the envelope. If you want to delete an individual email override setting, use the PUT and set the value to an empty string. Note that deleting email settings will only affect email communications that occur after the deletion and the normal account email settings are used for future email communications.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteEmailSettings(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**EmailSettings**](EmailSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteLock"></a>
# **deleteLock**
> LockInformation deleteLock(accountId, envelopeId)

Deletes an envelope lock.

Deletes the lock from the specified envelope. The &#x60;X-DocuSign-Edit&#x60; header must be included in the request.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteLock(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**LockInformation**](LockInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRecipient"></a>
# **deleteRecipient**
> Recipients deleteRecipient(accountId, envelopeId, recipientId)

Deletes a recipient from an envelope.

Deletes the specified recipient file from the specified envelope. This cannot be used if the envelope has been sent.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRecipient(accountId, envelopeId, recipientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRecipients"></a>
# **deleteRecipients**
> Recipients deleteRecipients(accountId, envelopeId, opts)

Deletes recipients from an envelope.

Deletes one or more recipients from a draft or sent envelope. Recipients to be deleted are listed in the request, with the &#x60;recipientId&#x60; being used as the key for deleting recipients.  If the envelope is &#x60;In Process&#x60;, meaning that it has been sent and has not  been completed or voided, recipients that have completed their actions cannot be deleted.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'recipients': new Docusign.Recipients() // Recipients | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRecipients(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipients** | [**Recipients**](Recipients.md)| TBD Description | [optional] 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTabs"></a>
# **deleteTabs**
> Tabs deleteTabs(accountId, envelopeId, recipientId, opts)

Deletes the tabs associated with a recipient.

Deletes one or more tabs associated with a recipient in a draft envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.

var opts = { 
  'tabs': new Docusign.Tabs() // Tabs | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTabs(accountId, envelopeId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **tabs** | [**Tabs**](Tabs.md)| TBD Description | [optional] 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTemplatesFromDocument"></a>
# **deleteTemplatesFromDocument**
> deleteTemplatesFromDocument(accountId, envelopeId, documentId, templateId)

Deletes a template from a document in an existing envelope.

Deletes the specified template from a document in an existing envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.

var templateId = "templateId_example"; // String | The ID of the template being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTemplatesFromDocument(accountId, envelopeId, documentId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **templateId** | **String**| The ID of the template being accessed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteViewLink"></a>
# **deleteViewLink**
> deleteViewLink(accountId, envelopeId)

Reserved: Expires a secure view link.

Reserved: Expires a secure view link

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteViewLink(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> Object getDocument(accountId, envelopeId, documentId)

Gets a document from an envelope.

Retrieves the specified document from the envelope. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.  You can also use this method to retrieve a PDF containing the combined content of all documents and the certificate. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.   To retrieve the combined content replace the &#x60;{documentId}&#x60; parameter in the endpoint with &#x60;combined&#x60;. /accounts/{accountId}/envelopes/{envelopeId}/documents/combined

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocument(accountId, envelopeId, documentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf

<a name="getEmailSettings"></a>
# **getEmailSettings**
> EmailSettings getEmailSettings(accountId, envelopeId)

Gets the email setting overrides for an envelope.

Retrieves the email override settings for the specified envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailSettings(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**EmailSettings**](EmailSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEnvelope"></a>
# **getEnvelope**
> Envelope getEnvelope(accountId, envelopeId, opts)

Gets the status of a envelope.

Retrieves the overall status for the specified envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEnvelope(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **include** | **String**|  | [optional] 

### Return type

[**Envelope**](Envelope.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLock"></a>
# **getLock**
> LockInformation getLock(accountId, envelopeId)

Gets envelope lock information.

Retrieves general information about the envelope lock.  If the call is made by the locked by user and the request has the same integrator key as original, then the &#x60;X-DocuSign-Edit&#x60; header and additional lock information is included in the response. This allows users to recover a lost editing session token and the &#x60;X-DocuSign-Edit&#x60; header.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLock(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**LockInformation**](LockInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotificationSettings"></a>
# **getNotificationSettings**
> Notification getNotificationSettings(accountId, envelopeId)

Gets envelope notification information.

Retrieves the envelope notification, reminders and expirations, information for an existing envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNotificationSettings(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**Notification**](Notification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAuditEvents"></a>
# **listAuditEvents**
> EnvelopeAuditEventResponse listAuditEvents(accountId, envelopeId)

Gets the envelope audit events for an envelope.

Gets the envelope audit events for the specified envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAuditEvents(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**EnvelopeAuditEventResponse**](EnvelopeAuditEventResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCustomFields"></a>
# **listCustomFields**
> CustomFieldsEnvelope listCustomFields(accountId, envelopeId)

Gets the custom field information for the specified envelope.

Retrieves the custom field information for the specified envelope. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes, and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.  There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. With a list custom field, the sender selects the value of the field from a pre-made list.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCustomFields(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**CustomFieldsEnvelope**](CustomFieldsEnvelope.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDocumentFields"></a>
# **listDocumentFields**
> DocumentFieldsInformation listDocumentFields(accountId, envelopeId, documentId)

Gets the custom document fields from an  existing envelope document.

Retrieves the custom document field information from an existing envelope document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDocumentFields(accountId, envelopeId, documentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 

### Return type

[**DocumentFieldsInformation**](DocumentFieldsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDocuments"></a>
# **listDocuments**
> EnvelopeDocumentsResult listDocuments(accountId, envelopeId)

Gets a list of envelope documents.

Retrieves a list of documents associated with the specified envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDocuments(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**EnvelopeDocumentsResult**](EnvelopeDocumentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRecipients"></a>
# **listRecipients**
> Recipients listRecipients(accountId, envelopeId)

Gets the status of recipients for an envelope.

Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list.   The &#x60;currentRoutingOrder&#x60; property of the response contains the &#x60;routingOrder&#x60; value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRecipients(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listStatus"></a>
# **listStatus**
> EnvelopesInformation listStatus(accountId, opts)

Gets the envelope status for the specified envelopes.

Retrieves the envelope status for the specified envelopes.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'envelopeIdsRequest': new Docusign.EnvelopeIdsRequest() // EnvelopeIdsRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStatus(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeIdsRequest** | [**EnvelopeIdsRequest**](EnvelopeIdsRequest.md)| TBD Description | [optional] 

### Return type

[**EnvelopesInformation**](EnvelopesInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listStatusChanges"></a>
# **listStatusChanges**
> EnvelopesInformation listStatusChanges(accountId, opts)

Gets status changes for one or more envelopes.

Retrieves envelope status changes for all envelopes. You can modify the information returned by adding query strings to limit the request to check between certain dates and times, or for certain envelopes, or for certain status codes. It is recommended that you use one or more of the query strings in order to limit the size of the response.  ### Important: Unless you are requesting the status for specific envelopes (using the &#x60;envelopeIds&#x60; or &#x60;transactionIds&#x60; properties), you must add a set the &#x60;from_date&#x60; property in the request.  Getting envelope status using &#x60;transactionIds&#x60; is useful for offline signing situations where it can be used determine if an envelope was created or not, for the cases where a network connection was lost, before the envelope status could be returned.  ### Request Envelope Status Notes ###  The REST API GET /envelopes call uses certain filters to find results. In some cases requests are check for \&quot;any status change\&quot; instead of the just the single status requested. In these cases, more envelopes might be returned by the request than otherwise would be. For example, for a request with the begin date is set to Jan 1st, an end date set to Jan 7th and the status qualifier (&#x60;from_to_status&#x60;) set to &#x60;Delivered&#x60; &amp;mdash; the response set might contain envelopes that were created during that time period, but not delivered during the time period.  To avoid unnecessary database queries, the DocuSign system checks requests to ensure that the added filters will not result in a zero-size response before acting on the request. The following table shows the valid envelope statuses (in the Valid Current Statuses column) for the status qualifiers in the request. If the status and status qualifiers in the API request do not contain any of the values shown in the valid current statuses column, then an empty list is returned.  For example, a request with a status qualifier (from_to_status) of &#x60;Delivered&#x60; and a status of \&quot;&#x60;Created&#x60;,&#x60;Sent&#x60;\&quot;, DocuSign will always return an empty list. This is because the request essentially translates to: find the envelopes that were delivered between the begin and end dates that have a current status of &#x60;Created&#x60; or &#x60;Sent&#x60;, and since an envelope that has been delivered can never have a status of &#x60;Created&#x60; or &#x60;Sent&#x60;, a zero-size response would be generated. In this case, DocuSign does not run the request, but just returns the empty list.  Client applications should check that the statuses they are requesting make sense for a given status qualifier.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'intersectingFolderIds': "intersectingFolderIds_example", // String | 
  'envelopeIds': "envelopeIds_example", // String | 
  'exclude': "exclude_example", // String | 
  'folderIds': "folderIds_example", // String | 
  'folderTypes': "folderTypes_example", // String | 
  'fromDate': "fromDate_example", // String | The date/time setting that specifies the date/time when the request begins checking for status changes for envelopes in the account.  This is required unless 'envelopeId's are used.
  'fromToStatus': "fromToStatus_example", // String | This is the status type checked for in the `from_date`/`to_date` period. If `changed` is specified, then envelopes that changed status during the period are found. If for example, `created` is specified, then envelopes created during the period are found. Default is `changed`.   Possible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
  'include': "include_example", // String | 
  'email': "email_example", // String | 
  'order': "order_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'userId': "userId_example", // String | 
  'powerformids': "powerformids_example", // String | 
  'searchText': "searchText_example", // String | 
  'startPosition': "startPosition_example", // String | 
  'status': "status_example", // String | The list of current statuses to include in the response. By default, all envelopes found are returned. If values are specified, then of the envelopes found, only those with the current status specified are returned in the results.   Possible values are: Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
  'customField': "customField_example", // String | This specifies the envelope custom field name and value searched for in the envelope information. The value portion of the query can use partial strings by adding '%' (percent sign) around the custom field query value.   Example 1: If you have an envelope custom field called \"Region\" and you want to search for all envelopes where the value is \"West\" you would use the query: `?custom_field=Region=West`.   Example 2: To search for envelopes where the `ApplicationID` custom field has the value or partial value of \"DocuSign\" in field, the query would be: `?custom_field=ApplicationId=%DocuSign%` This would find envelopes where the custom field value is \"DocuSign for Salesforce\" or \"DocuSign envelope.\"  
  'transactionIds': "transactionIds_example", // String | If included in the query string, this is a comma separated list of envelope `transactionId`s.   If included in the `request_body`, this is a list of envelope `transactionId`s.   #### Note: `transactionId`s are only valid in the DocuSign system for seven days. 
  'userFilter': "userFilter_example", // String | 
  'userName': "userName_example", // String | 
  'toDate': "toDate_example", // String | Optional date/time setting that specifies the date/time when the request stops for status changes for envelopes in the account. If no entry, the system uses the time of the call as the `to_date`. 
  'acStatus': "acStatus_example", // String | Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
  'block': "block_example", // String | 
  'count': "count_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStatusChanges(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **intersectingFolderIds** | **String**|  | [optional] 
 **envelopeIds** | **String**|  | [optional] 
 **exclude** | **String**|  | [optional] 
 **folderIds** | **String**|  | [optional] 
 **folderTypes** | **String**|  | [optional] 
 **fromDate** | **String**| The date/time setting that specifies the date/time when the request begins checking for status changes for envelopes in the account.  This is required unless &#39;envelopeId&#39;s are used. | [optional] 
 **fromToStatus** | **String**| This is the status type checked for in the &#x60;from_date&#x60;/&#x60;to_date&#x60; period. If &#x60;changed&#x60; is specified, then envelopes that changed status during the period are found. If for example, &#x60;created&#x60; is specified, then envelopes created during the period are found. Default is &#x60;changed&#x60;.   Possible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing. | [optional] 
 **include** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **order** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **userId** | **String**|  | [optional] 
 **powerformids** | **String**|  | [optional] 
 **searchText** | **String**|  | [optional] 
 **startPosition** | **String**|  | [optional] 
 **status** | **String**| The list of current statuses to include in the response. By default, all envelopes found are returned. If values are specified, then of the envelopes found, only those with the current status specified are returned in the results.   Possible values are: Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing. | [optional] 
 **customField** | **String**| This specifies the envelope custom field name and value searched for in the envelope information. The value portion of the query can use partial strings by adding &#39;%&#39; (percent sign) around the custom field query value.   Example 1: If you have an envelope custom field called \&quot;Region\&quot; and you want to search for all envelopes where the value is \&quot;West\&quot; you would use the query: &#x60;?custom_field&#x3D;Region&#x3D;West&#x60;.   Example 2: To search for envelopes where the &#x60;ApplicationID&#x60; custom field has the value or partial value of \&quot;DocuSign\&quot; in field, the query would be: &#x60;?custom_field&#x3D;ApplicationId&#x3D;%DocuSign%&#x60; This would find envelopes where the custom field value is \&quot;DocuSign for Salesforce\&quot; or \&quot;DocuSign envelope.\&quot;   | [optional] 
 **transactionIds** | **String**| If included in the query string, this is a comma separated list of envelope &#x60;transactionId&#x60;s.   If included in the &#x60;request_body&#x60;, this is a list of envelope &#x60;transactionId&#x60;s.   #### Note: &#x60;transactionId&#x60;s are only valid in the DocuSign system for seven days.  | [optional] 
 **userFilter** | **String**|  | [optional] 
 **userName** | **String**|  | [optional] 
 **toDate** | **String**| Optional date/time setting that specifies the date/time when the request stops for status changes for envelopes in the account. If no entry, the system uses the time of the call as the &#x60;to_date&#x60;.  | [optional] 
 **acStatus** | **String**| Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed. | [optional] 
 **block** | **String**|  | [optional] 
 **count** | **String**|  | [optional] 

### Return type

[**EnvelopesInformation**](EnvelopesInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTabs"></a>
# **listTabs**
> Tabs listTabs(accountId, envelopeId, recipientId)

Gets the tabs information for a signer or sign-in-person recipient in an envelope.

Retrieves information about the tabs associated with a recipient in a draft envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTabs(accountId, envelopeId, recipientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTemplates"></a>
# **listTemplates**
> TemplateInformation listTemplates(accountId, envelopeId)

Get List of Templates used in an Envelope

This returns a list of the templates, name and ID, used in an envelope.&lt;br/&gt;&lt;br/&gt;Note: This only returns information for server side templates.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTemplates(accountId, envelopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 

### Return type

[**TemplateInformation**](TemplateInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTemplatesForDocument"></a>
# **listTemplatesForDocument**
> TemplateInformation listTemplatesForDocument(accountId, envelopeId, documentId)

Gets the templates associated with a document in an existing envelope.

Retrieves the templates associated with a document in the specified envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTemplatesForDocument(accountId, envelopeId, documentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 

### Return type

[**TemplateInformation**](TemplateInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="update"></a>
# **update**
> EnvelopeUpdateSummary update(accountId, envelopeId, opts)

Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft

The Put Envelopes endpoint provides the following functionality:  * Sends the specified single draft envelope. Add {\&quot;status\&quot;:\&quot;sent\&quot;} to the request body to send the envelope.  * Voids the specified in-process envelope. Add {\&quot;status\&quot;:\&quot;voided\&quot;, \&quot;voidedReason\&quot;:\&quot;The reason for voiding the envelope\&quot;} to the request body to void the envelope.  * Replaces the current email subject and message for a draft envelope. Add {\&quot;emailSubject\&quot;:\&quot;subject\&quot;,  \&quot;emailBlurb\&quot;:\&quot;message\&quot;}  to the request body to modify the subject and message.  * Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system. Add {\&quot;purgeState\&quot;:\&quot;purge type\&quot;} to the request body.  *Additional information on purging documents*  The purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).  #### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period.  #### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents.  #### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.  When the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.  If &#x60;purgeState&#x3D;\&quot;documents_queued\&quot;&#x60; is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If &#x60;purgeState&#x3D; \&quot;documents_and_metadata_queued\&quot;&#x60; is used in the request, then the documents, attachments, and tabs are deleted.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'resendEnvelope': "resendEnvelope_example", // String | When set to **true**, sends the specified envelope again.
  'envelope': new Docusign.Envelope() // Envelope | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.update(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **resendEnvelope** | **String**| When set to **true**, sends the specified envelope again. | [optional] 
 **envelope** | [**Envelope**](Envelope.md)| TBD Description | [optional] 

### Return type

[**EnvelopeUpdateSummary**](EnvelopeUpdateSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCustomFields"></a>
# **updateCustomFields**
> CustomFields updateCustomFields(accountId, envelopeId, opts)

Updates envelope custom fields in an envelope.

Updates the envelope custom fields in draft and in-process envelopes.  Each custom field used in an envelope must have a unique name. 

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'customFields': new Docusign.CustomFields() // CustomFields | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomFields(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **customFields** | [**CustomFields**](CustomFields.md)| TBD Description | [optional] 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDocumentFields"></a>
# **updateDocumentFields**
> DocumentFieldsInformation updateDocumentFields(accountId, envelopeId, documentId, opts)

Updates existing custom document fields in an existing envelope document.

Updates existing custom document fields in an existing envelope document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.

var opts = { 
  'documentFieldsInformation': new Docusign.DocumentFieldsInformation() // DocumentFieldsInformation | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDocumentFields(accountId, envelopeId, documentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **documentFieldsInformation** | [**DocumentFieldsInformation**](DocumentFieldsInformation.md)| TBD Description | [optional] 

### Return type

[**DocumentFieldsInformation**](DocumentFieldsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDocuments"></a>
# **updateDocuments**
> EnvelopeDocumentsResult updateDocuments(accountId, envelopeId, opts)

Adds one or more documents to an existing envelope document.

Adds one or more documents to an existing envelope document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'envelopeDefinition': new Docusign.EnvelopeDefinition() // EnvelopeDefinition | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDocuments(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **envelopeDefinition** | [**EnvelopeDefinition**](EnvelopeDefinition.md)| TBD Description | [optional] 

### Return type

[**EnvelopeDocumentsResult**](EnvelopeDocumentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateEmailSettings"></a>
# **updateEmailSettings**
> EmailSettings updateEmailSettings(accountId, envelopeId, opts)

Updates the email setting overrides for an envelope.

Updates the existing email override settings for the specified envelope. Note that modifying email settings will only affect email communications that occur after the modification was made.  This can also be used to delete an individual email override setting by using an empty string for the value to be deleted.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'emailSettings': new Docusign.EmailSettings() // EmailSettings | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEmailSettings(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **emailSettings** | [**EmailSettings**](EmailSettings.md)| TBD Description | [optional] 

### Return type

[**EmailSettings**](EmailSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLock"></a>
# **updateLock**
> LockInformation updateLock(accountId, envelopeId, opts)

Updates an envelope lock.

Updates the lock duration time or update the &#x60;lockedByApp&#x60; property information for the specified envelope. The user and integrator key must match the user specified by the &#x60;lockByUser&#x60; property and integrator key information and the &#x60;X-DocuSign-Edit&#x60; header must be included or an error will be generated.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'lockRequest': new Docusign.LockRequest() // LockRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLock(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **lockRequest** | [**LockRequest**](LockRequest.md)| TBD Description | [optional] 

### Return type

[**LockInformation**](LockInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRecipients"></a>
# **updateRecipients**
> RecipientsUpdateSummary updateRecipients(accountId, envelopeId, opts)

Updates recipients in a draft envelope or corrects recipient information for an in process envelope.

Updates recipients in a draft envelope or corrects recipient information for an in process envelope.   For draft envelopes, you can edit the following properties: &#x60;email&#x60;, &#x60;userName&#x60;, &#x60;routingOrder&#x60;, &#x60;faxNumber&#x60;, &#x60;deliveryMethod&#x60;, &#x60;accessCode&#x60;, and &#x60;requireIdLookup&#x60;.  Once an envelope has been sent, you can only edit: &#x60;email&#x60;, &#x60;userName&#x60;, &#x60;signerName&#x60;, &#x60;routingOrder&#x60;, &#x60;faxNumber&#x60;, and &#x60;deliveryMethod&#x60;. You can also select to resend an envelope by using the &#x60;resend_envelope&#x60; option.  If you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var opts = { 
  'recipients': new Docusign.Recipients() // Recipients | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRecipients(accountId, envelopeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipients** | [**Recipients**](Recipients.md)| TBD Description | [optional] 

### Return type

[**RecipientsUpdateSummary**](RecipientsUpdateSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTabs"></a>
# **updateTabs**
> Tabs updateTabs(accountId, envelopeId, recipientId, opts)

Updates the tabs for a recipient.  

Updates one or more tabs for a recipient in a draft envelope.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.EnvelopesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var envelopeId = "envelopeId_example"; // String | The envelopeId Guid of the envelope being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.

var opts = { 
  'tabs': new Docusign.Tabs() // Tabs | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTabs(accountId, envelopeId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeId** | **String**| The envelopeId Guid of the envelope being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **tabs** | [**Tabs**](Tabs.md)| TBD Description | [optional] 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

