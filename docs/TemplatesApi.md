# Docusign.TemplatesApi

All URIs are relative to *https://www.docusign.net/restapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomFields**](TemplatesApi.md#createCustomFields) | **POST** /v2/accounts/{accountId}/templates/{templateId}/custom_fields | Creates custom document fields in an existing template document.
[**createDocumentFields**](TemplatesApi.md#createDocumentFields) | **POST** /v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields | Creates custom document fields in an existing template document.
[**createRecipients**](TemplatesApi.md#createRecipients) | **POST** /v2/accounts/{accountId}/templates/{templateId}/recipients | Adds tabs for a recipient.
[**createTabs**](TemplatesApi.md#createTabs) | **POST** /v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs | Adds tabs for a recipient.
[**createTemplate**](TemplatesApi.md#createTemplate) | **POST** /v2/accounts/{accountId}/templates | Creates an envelope from a template.
[**deleteCustomFields**](TemplatesApi.md#deleteCustomFields) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/custom_fields | Deletes envelope custom fields in a template.
[**deleteDocumentFields**](TemplatesApi.md#deleteDocumentFields) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields | Deletes custom document fields from an existing template document.
[**deleteDocumentPage**](TemplatesApi.md#deleteDocumentPage) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber} | Deletes a page from a document in an template.
[**deleteDocuments**](TemplatesApi.md#deleteDocuments) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/documents | Deletes documents from a template.
[**deleteGroupShare**](TemplatesApi.md#deleteGroupShare) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/{templatePart} | Removes a member group&#39;s sharing permissions for a template.
[**deleteRecipient**](TemplatesApi.md#deleteRecipient) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId} | Deletes the specified recipient file from a template.
[**deleteRecipients**](TemplatesApi.md#deleteRecipients) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/recipients | Deletes recipients from a template.
[**deleteTabs**](TemplatesApi.md#deleteTabs) | **DELETE** /v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs | Deletes the tabs associated with a recipient in a template.
[**get**](TemplatesApi.md#get) | **GET** /v2/accounts/{accountId}/templates/{templateId} | Gets a list of templates for a specified account.
[**getDocument**](TemplatesApi.md#getDocument) | **GET** /v2/accounts/{accountId}/templates/{templateId}/documents/{documentId} | Gets PDF documents from a template.
[**getLock**](TemplatesApi.md#getLock) | **GET** /v2/accounts/{accountId}/templates/{templateId}/lock | Gets template lock information.
[**getNotificationSettings**](TemplatesApi.md#getNotificationSettings) | **GET** /v2/accounts/{accountId}/templates/{templateId}/notification | Gets template notification information.
[**listCustomFields**](TemplatesApi.md#listCustomFields) | **GET** /v2/accounts/{accountId}/templates/{templateId}/custom_fields | Gets the custom document fields from a template.
[**listDocumentFields**](TemplatesApi.md#listDocumentFields) | **GET** /v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields | Gets the custom document fields for a an existing template document.
[**listDocuments**](TemplatesApi.md#listDocuments) | **GET** /v2/accounts/{accountId}/templates/{templateId}/documents | Gets a list of documents associated with a template.
[**listRecipients**](TemplatesApi.md#listRecipients) | **GET** /v2/accounts/{accountId}/templates/{templateId}/recipients | Gets recipient information from a template.
[**listTabs**](TemplatesApi.md#listTabs) | **GET** /v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs | Gets the tabs information for a signer or sign-in-person recipient in a template.
[**listTemplates**](TemplatesApi.md#listTemplates) | **GET** /v2/accounts/{accountId}/templates | Gets the definition of a template.
[**update**](TemplatesApi.md#update) | **PUT** /v2/accounts/{accountId}/templates/{templateId} | Updates an existing template.
[**updateCustomFields**](TemplatesApi.md#updateCustomFields) | **PUT** /v2/accounts/{accountId}/templates/{templateId}/custom_fields | Updates envelope custom fields in a template.
[**updateDocumentFields**](TemplatesApi.md#updateDocumentFields) | **PUT** /v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields | Updates existing custom document fields in an existing template document.
[**updateDocuments**](TemplatesApi.md#updateDocuments) | **PUT** /v2/accounts/{accountId}/templates/{templateId}/documents | Adds documents to a template document.
[**updateGroupShare**](TemplatesApi.md#updateGroupShare) | **PUT** /v2/accounts/{accountId}/templates/{templateId}/{templatePart} | Shares a template with a group
[**updateNotificationSettings**](TemplatesApi.md#updateNotificationSettings) | **PUT** /v2/accounts/{accountId}/templates/{templateId}/notification | Updates the notification  structure for an existing template.
[**updateRecipients**](TemplatesApi.md#updateRecipients) | **PUT** /v2/accounts/{accountId}/templates/{templateId}/recipients | Updates recipients in a template.
[**updateTabs**](TemplatesApi.md#updateTabs) | **PUT** /v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs | Updates the tabs for a recipient.


<a name="createCustomFields"></a>
# **createCustomFields**
> CustomFields createCustomFields(accountId, templateId, opts)

Creates custom document fields in an existing template document.

Creates custom document fields in an existing template document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'templateCustomFields': new Docusign.TemplateCustomFields() // TemplateCustomFields | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCustomFields(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templateCustomFields** | [**TemplateCustomFields**](TemplateCustomFields.md)| TBD Description | [optional] 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createDocumentFields"></a>
# **createDocumentFields**
> DocumentFieldsInformation createDocumentFields(accountId, templateId, documentId, opts)

Creates custom document fields in an existing template document.

Creates custom document fields in an existing template document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

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
apiInstance.createDocumentFields(accountId, templateId, documentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **documentFieldsInformation** | [**DocumentFieldsInformation**](DocumentFieldsInformation.md)| TBD Description | [optional] 

### Return type

[**DocumentFieldsInformation**](DocumentFieldsInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createRecipients"></a>
# **createRecipients**
> Recipients createRecipients(accountId, templateId, opts)

Adds tabs for a recipient.

Adds one or more recipients to a template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'templateRecipients': new Docusign.TemplateRecipients() // TemplateRecipients | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecipients(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templateRecipients** | [**TemplateRecipients**](TemplateRecipients.md)| TBD Description | [optional] 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTabs"></a>
# **createTabs**
> Tabs createTabs(accountId, templateId, recipientId, opts)

Adds tabs for a recipient.

Adds one or more tabs for a recipient.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.

var opts = { 
  'templateTabs': new Docusign.TemplateTabs() // TemplateTabs | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTabs(accountId, templateId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **templateTabs** | [**TemplateTabs**](TemplateTabs.md)| TBD Description | [optional] 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTemplate"></a>
# **createTemplate**
> TemplateSummary createTemplate(accountId, opts)

Creates an envelope from a template.

Creates a template definition using a multipart request.  ###Template Email Subject Merge Fields  Call this endpoint to insert a recipient name and email address merge fields into the email subject line when creating or sending from a template.  The merge fields, based on the recipient’s role name, are added to the &#x60;emailSubject&#x60; property when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.  Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient. #### Note: If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.  To add a recipient’s name in the subject line add the following text in the &#x60;emailSubject&#x60; property when creating the template or when sending an envelope from a template:  [[&lt;roleName&gt;_UserName]]  Example:  &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,&#x60;  To add a recipient’s email address in the subject line add the following text in the &#x60;emailSubject&#x60; property when creating the template or when sending an envelope from a template:  [[&lt;roleName&gt;_Email]]  Example:  &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,&#x60;   In both cases the &lt;roleName&gt; is the recipient&#39;s contents of the &#x60;roleName&#x60; property in the template.  For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var opts = { 
  'envelopeTemplate': new Docusign.EnvelopeTemplate() // EnvelopeTemplate | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTemplate(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **envelopeTemplate** | [**EnvelopeTemplate**](EnvelopeTemplate.md)| TBD Description | [optional] 

### Return type

[**TemplateSummary**](TemplateSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomFields"></a>
# **deleteCustomFields**
> CustomFields deleteCustomFields(accountId, templateId, opts)

Deletes envelope custom fields in a template.

Deletes envelope custom fields in a template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'templateCustomFields': new Docusign.TemplateCustomFields() // TemplateCustomFields | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCustomFields(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templateCustomFields** | [**TemplateCustomFields**](TemplateCustomFields.md)| TBD Description | [optional] 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDocumentFields"></a>
# **deleteDocumentFields**
> DocumentFieldsInformation deleteDocumentFields(accountId, templateId, documentId, opts)

Deletes custom document fields from an existing template document.

Deletes custom document fields from an existing template document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

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
apiInstance.deleteDocumentFields(accountId, templateId, documentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
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
> deleteDocumentPage(accountId, templateId, documentId, pageNumber, opts)

Deletes a page from a document in an template.

Deletes a page from a document in a template based on the page number.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.

var pageNumber = "pageNumber_example"; // String | The page number being accessed.

var opts = { 
  'pageRequest': new Docusign.PageRequest() // PageRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDocumentPage(accountId, templateId, documentId, pageNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 
 **pageNumber** | **String**| The page number being accessed. | 
 **pageRequest** | [**PageRequest**](PageRequest.md)| TBD Description | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDocuments"></a>
# **deleteDocuments**
> TemplateDocumentsResult deleteDocuments(accountId, templateId, opts)

Deletes documents from a template.

Deletes one or more documents from an existing template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

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
apiInstance.deleteDocuments(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **envelopeDefinition** | [**EnvelopeDefinition**](EnvelopeDefinition.md)| TBD Description | [optional] 

### Return type

[**TemplateDocumentsResult**](TemplateDocumentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGroupShare"></a>
# **deleteGroupShare**
> GroupInformation deleteGroupShare(accountId, templateId, templatePart, opts)

Removes a member group&#39;s sharing permissions for a template.

Removes a member group&#39;s sharing permissions for a specified template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var templatePart = "templatePart_example"; // String | Currently, the only defined part is **groups**.

var opts = { 
  'groupInformation': new Docusign.GroupInformation() // GroupInformation | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteGroupShare(accountId, templateId, templatePart, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templatePart** | **String**| Currently, the only defined part is **groups**. | 
 **groupInformation** | [**GroupInformation**](GroupInformation.md)| TBD Description | [optional] 

### Return type

[**GroupInformation**](GroupInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRecipient"></a>
# **deleteRecipient**
> Recipients deleteRecipient(accountId, templateId, recipientId, opts)

Deletes the specified recipient file from a template.

Deletes the specified recipient file from the specified template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.

var opts = { 
  'templateRecipients': new Docusign.TemplateRecipients() // TemplateRecipients | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRecipient(accountId, templateId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **templateRecipients** | [**TemplateRecipients**](TemplateRecipients.md)| TBD Description | [optional] 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRecipients"></a>
# **deleteRecipients**
> Recipients deleteRecipients(accountId, templateId, opts)

Deletes recipients from a template.

Deletes one or more recipients from a template. Recipients to be deleted are listed in the request, with the &#x60;recipientId&#x60; being used as the key for deleting recipients.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'templateRecipients': new Docusign.TemplateRecipients() // TemplateRecipients | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRecipients(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templateRecipients** | [**TemplateRecipients**](TemplateRecipients.md)| TBD Description | [optional] 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTabs"></a>
# **deleteTabs**
> Tabs deleteTabs(accountId, templateId, recipientId, opts)

Deletes the tabs associated with a recipient in a template.

Deletes one or more tabs associated with a recipient in a template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.

var opts = { 
  'templateTabs': new Docusign.TemplateTabs() // TemplateTabs | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTabs(accountId, templateId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **templateTabs** | [**TemplateTabs**](TemplateTabs.md)| TBD Description | [optional] 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="get"></a>
# **get**
> EnvelopeTemplate get(accountId, templateId)

Gets a list of templates for a specified account.

Retrieves the definition of the specified template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.get(accountId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 

### Return type

[**EnvelopeTemplate**](EnvelopeTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> Object getDocument(accountId, templateId, documentId)

Gets PDF documents from a template.

Retrieves one or more PDF documents from the specified template.  You can specify the ID of the document to retrieve or can specify &#x60;combined&#x60; to retrieve all documents in the template as one pdf.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocument(accountId, templateId, documentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **documentId** | **String**| The ID of the document being accessed. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf

<a name="getLock"></a>
# **getLock**
> LockInformation getLock(accountId, templateId)

Gets template lock information.

Retrieves general information about the template lock.  If the call is made by the user who has the lock and the request has the same integrator key as original, then the &#x60;X-DocuSign-Edit&#x60; header  field and additional lock information is included in the response. This allows users to recover a lost editing session token and the &#x60;X-DocuSign-Edit&#x60; header.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLock(accountId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 

### Return type

[**LockInformation**](LockInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotificationSettings"></a>
# **getNotificationSettings**
> Notification getNotificationSettings(accountId, templateId)

Gets template notification information.

Retrieves the envelope notification, reminders and expirations, information for an existing template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNotificationSettings(accountId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 

### Return type

[**Notification**](Notification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listCustomFields"></a>
# **listCustomFields**
> CustomFields listCustomFields(accountId, templateId)

Gets the custom document fields from a template.

Retrieves the custom document field information from an existing template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCustomFields(accountId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDocumentFields"></a>
# **listDocumentFields**
> DocumentFieldsInformation listDocumentFields(accountId, templateId, documentId)

Gets the custom document fields for a an existing template document.

Retrieves the custom document fields for an existing template document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var documentId = "documentId_example"; // String | The ID of the document being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDocumentFields(accountId, templateId, documentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
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
> TemplateDocumentsResult listDocuments(accountId, templateId)

Gets a list of documents associated with a template.

Retrieves a list of documents associated with the specified template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDocuments(accountId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 

### Return type

[**TemplateDocumentsResult**](TemplateDocumentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRecipients"></a>
# **listRecipients**
> Recipients listRecipients(accountId, templateId)

Gets recipient information from a template.

Retrieves the information for all recipients in the specified template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRecipients(accountId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 

### Return type

[**Recipients**](Recipients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTabs"></a>
# **listTabs**
> Tabs listTabs(accountId, templateId, recipientId, opts)

Gets the tabs information for a signer or sign-in-person recipient in a template.

Gets the tabs information for a signer or sign-in-person recipient in a template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

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
apiInstance.listTabs(accountId, templateId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **tabs** | [**Tabs**](Tabs.md)| TBD Description | [optional] 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTemplates"></a>
# **listTemplates**
> EnvelopeTemplateResults listTemplates(accountId)

Gets the definition of a template.

Retrieves the list of templates for the specified account. The request can be limited to a specific folder.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTemplates(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 

### Return type

[**EnvelopeTemplateResults**](EnvelopeTemplateResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="update"></a>
# **update**
> TemplateUpdateSummary update(accountId, templateId, opts)

Updates an existing template.

Updates an existing template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'envelopeTemplate': new Docusign.EnvelopeTemplate() // EnvelopeTemplate | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.update(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **envelopeTemplate** | [**EnvelopeTemplate**](EnvelopeTemplate.md)| TBD Description | [optional] 

### Return type

[**TemplateUpdateSummary**](TemplateUpdateSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCustomFields"></a>
# **updateCustomFields**
> CustomFields updateCustomFields(accountId, templateId, opts)

Updates envelope custom fields in a template.

Updates the custom fields in a template.  Each custom field used in a template must have a unique name.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'templateCustomFields': new Docusign.TemplateCustomFields() // TemplateCustomFields | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomFields(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templateCustomFields** | [**TemplateCustomFields**](TemplateCustomFields.md)| TBD Description | [optional] 

### Return type

[**CustomFields**](CustomFields.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDocumentFields"></a>
# **updateDocumentFields**
> DocumentFieldsInformation updateDocumentFields(accountId, templateId, documentId, opts)

Updates existing custom document fields in an existing template document.

Updates existing custom document fields in an existing template document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

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
apiInstance.updateDocumentFields(accountId, templateId, documentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
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
> TemplateDocumentsResult updateDocuments(accountId, templateId, opts)

Adds documents to a template document.

Adds one or more documents to an existing template document.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

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
apiInstance.updateDocuments(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **envelopeDefinition** | [**EnvelopeDefinition**](EnvelopeDefinition.md)| TBD Description | [optional] 

### Return type

[**TemplateDocumentsResult**](TemplateDocumentsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateGroupShare"></a>
# **updateGroupShare**
> GroupInformation updateGroupShare(accountId, templateId, templatePart, opts)

Shares a template with a group

Shares a template with the specified members group.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var templatePart = "templatePart_example"; // String | Currently, the only defined part is **groups**.

var opts = { 
  'groupInformation': new Docusign.GroupInformation() // GroupInformation | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGroupShare(accountId, templateId, templatePart, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templatePart** | **String**| Currently, the only defined part is **groups**. | 
 **groupInformation** | [**GroupInformation**](GroupInformation.md)| TBD Description | [optional] 

### Return type

[**GroupInformation**](GroupInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNotificationSettings"></a>
# **updateNotificationSettings**
> Notification updateNotificationSettings(accountId, templateId, opts)

Updates the notification  structure for an existing template.

Updates the notification structure for an existing template. Use this endpoint to set reminder and expiration notifications.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'templateNotificationRequest': new Docusign.TemplateNotificationRequest() // TemplateNotificationRequest | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNotificationSettings(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templateNotificationRequest** | [**TemplateNotificationRequest**](TemplateNotificationRequest.md)| TBD Description | [optional] 

### Return type

[**Notification**](Notification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRecipients"></a>
# **updateRecipients**
> RecipientsUpdateSummary updateRecipients(accountId, templateId, opts)

Updates recipients in a template.

Updates recipients in a template.   You can edit the following properties: &#x60;email&#x60;, &#x60;userName&#x60;, &#x60;routingOrder&#x60;, &#x60;faxNumber&#x60;, &#x60;deliveryMethod&#x60;, &#x60;accessCode&#x60;, and &#x60;requireIdLookup&#x60;.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var opts = { 
  'templateRecipients': new Docusign.TemplateRecipients() // TemplateRecipients | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRecipients(accountId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **templateRecipients** | [**TemplateRecipients**](TemplateRecipients.md)| TBD Description | [optional] 

### Return type

[**RecipientsUpdateSummary**](RecipientsUpdateSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTabs"></a>
# **updateTabs**
> Tabs updateTabs(accountId, templateId, recipientId, opts)

Updates the tabs for a recipient.

Updates one or more tabs for a recipient in a template.

### Example
```javascript
var Docusign = require('docusign');

var apiInstance = new Docusign.TemplatesApi();

var accountId = "accountId_example"; // String | The external account number (int) or account ID Guid.

var templateId = "templateId_example"; // String | The ID of the template being accessed.

var recipientId = "recipientId_example"; // String | The ID of the recipient being accessed.

var opts = { 
  'templateTabs': new Docusign.TemplateTabs() // TemplateTabs | TBD Description
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTabs(accountId, templateId, recipientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The external account number (int) or account ID Guid. | 
 **templateId** | **String**| The ID of the template being accessed. | 
 **recipientId** | **String**| The ID of the recipient being accessed. | 
 **templateTabs** | [**TemplateTabs**](TemplateTabs.md)| TBD Description | [optional] 

### Return type

[**Tabs**](Tabs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

