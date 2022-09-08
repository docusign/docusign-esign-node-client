/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/BulkRecipientsResponse', 'model/BulkRecipientsUpdateResponse', 'model/CustomFields', 'model/DocumentFieldsInformation', 'model/DocumentHtmlDefinition', 'model/DocumentHtmlDefinitionOriginals', 'model/DocumentHtmlDefinitions', 'model/EnvelopeDefinition', 'model/EnvelopeDocument', 'model/EnvelopeTemplate', 'model/EnvelopeTemplateResults', 'model/ErrorDetails', 'model/GroupInformation', 'model/LockInformation', 'model/LockRequest', 'model/Notification', 'model/PageImages', 'model/PageRequest', 'model/RecipientPreviewRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/ReturnUrlRequest', 'model/Tabs', 'model/TemplateCustomFields', 'model/TemplateDocumentsResult', 'model/TemplateNotificationRequest', 'model/TemplateRecipients', 'model/TemplateSummary', 'model/TemplateTabs', 'model/TemplateUpdateSummary', 'model/ViewUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkRecipientsResponse'), require('../model/BulkRecipientsUpdateResponse'), require('../model/CustomFields'), require('../model/DocumentFieldsInformation'), require('../model/DocumentHtmlDefinition'), require('../model/DocumentHtmlDefinitionOriginals'), require('../model/DocumentHtmlDefinitions'), require('../model/EnvelopeDefinition'), require('../model/EnvelopeDocument'), require('../model/EnvelopeTemplate'), require('../model/EnvelopeTemplateResults'), require('../model/ErrorDetails'), require('../model/GroupInformation'), require('../model/LockInformation'), require('../model/LockRequest'), require('../model/Notification'), require('../model/PageImages'), require('../model/PageRequest'), require('../model/RecipientPreviewRequest'), require('../model/Recipients'), require('../model/RecipientsUpdateSummary'), require('../model/ReturnUrlRequest'), require('../model/Tabs'), require('../model/TemplateCustomFields'), require('../model/TemplateDocumentsResult'), require('../model/TemplateNotificationRequest'), require('../model/TemplateRecipients'), require('../model/TemplateSummary'), require('../model/TemplateTabs'), require('../model/TemplateUpdateSummary'), require('../model/ViewUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplatesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BulkRecipientsResponse, root.Docusign.BulkRecipientsUpdateResponse, root.Docusign.CustomFields, root.Docusign.DocumentFieldsInformation, root.Docusign.DocumentHtmlDefinition, root.Docusign.DocumentHtmlDefinitionOriginals, root.Docusign.DocumentHtmlDefinitions, root.Docusign.EnvelopeDefinition, root.Docusign.EnvelopeDocument, root.Docusign.EnvelopeTemplate, root.Docusign.EnvelopeTemplateResults, root.Docusign.ErrorDetails, root.Docusign.GroupInformation, root.Docusign.LockInformation, root.Docusign.LockRequest, root.Docusign.Notification, root.Docusign.PageImages, root.Docusign.PageRequest, root.Docusign.RecipientPreviewRequest, root.Docusign.Recipients, root.Docusign.RecipientsUpdateSummary, root.Docusign.ReturnUrlRequest, root.Docusign.Tabs, root.Docusign.TemplateCustomFields, root.Docusign.TemplateDocumentsResult, root.Docusign.TemplateNotificationRequest, root.Docusign.TemplateRecipients, root.Docusign.TemplateSummary, root.Docusign.TemplateTabs, root.Docusign.TemplateUpdateSummary, root.Docusign.ViewUrl);
  }
}(this, function(Configuration, ApiClient, BulkRecipientsResponse, BulkRecipientsUpdateResponse, CustomFields, DocumentFieldsInformation, DocumentHtmlDefinition, DocumentHtmlDefinitionOriginals, DocumentHtmlDefinitions, EnvelopeDefinition, EnvelopeDocument, EnvelopeTemplate, EnvelopeTemplateResults, ErrorDetails, GroupInformation, LockInformation, LockRequest, Notification, PageImages, PageRequest, RecipientPreviewRequest, Recipients, RecipientsUpdateSummary, ReturnUrlRequest, Tabs, TemplateCustomFields, TemplateDocumentsResult, TemplateNotificationRequest, TemplateRecipients, TemplateSummary, TemplateTabs, TemplateUpdateSummary, ViewUrl) {
  'use strict';

  /**
   * Templates service.
   * @module api/TemplatesApi
   */

  /**
   * Constructs a new TemplatesApi. 
   * @alias module:api/TemplatesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional) Callback function to receive the result of the createCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates custom document fields in an existing template document.
     * Creates custom document fields in an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateCustomFields} optsOrCallback.templateCustomFields 
     * @param {module:api/TemplatesApi~createCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.createCustomFields = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateCustomFields'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates custom document fields in an existing template document.
     * Creates custom document fields in an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentFieldsInformation} optsOrCallback.documentFieldsInformation 
     * @param {module:api/TemplatesApi~createDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.createDocumentFields = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling createDocumentFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createEditView operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createEditViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Provides a URL to start an edit view of the Template UI
     * This method returns a URL for starting an edit view of a template that uses the DocuSign Template UI.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ReturnUrlRequest} optsOrCallback.returnUrlRequest 
     * @param {module:api/TemplatesApi~createEditViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createEditView = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['returnUrlRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEditView");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createEditView");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ViewUrl;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/views/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createLock operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Lock a template.
     * Locks the specified template, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the template.

###### Note: Users must have envelope locking capability enabled to use this function (the userSetting property `canLockEnvelopes` must be set to **true** for the user).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/LockRequest} optsOrCallback.lockRequest 
     * @param {module:api/TemplatesApi~createLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.createLock = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createLock");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds tabs for a recipient.
     * Adds one or more recipients to a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.resendEnvelope 
     * @param {module:model/TemplateRecipients} optsOrCallback.templateRecipients 
     * @param {module:api/TemplatesApi~createRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.createRecipients = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'resend_envelope': optsOrCallback['resendEnvelope']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds tabs for a recipient.
     * Adds one or more tabs for a recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateTabs} optsOrCallback.templateTabs 
     * @param {module:api/TemplatesApi~createTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.createTabs = function(accountId, templateId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling createTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createTemplate operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates an envelope from a template.
     * Creates a template definition using a multipart request.

###Template Email Subject Merge Fields

Call this endpoint to insert a recipient name and email address merge fields into the email subject line when creating or sending from a template.

The merge fields, based on the recipient's role name, are added to the `emailSubject` property when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.

Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.
###### Note: If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.

To add a recipient's name in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:

[[<roleName>_UserName]]

Example:

`"emailSubject":"[[Signer 1_UserName]], Please sign this NDA",`

To add a recipient's email address in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:

[[<roleName>_Email]]

Example:

`"emailSubject":"[[Signer 1_Email]], Please sign this NDA",`


In both cases the <roleName> is the recipient's contents of the `roleName` property in the template.

For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[<roleName>_UserName]] or [[<roleName>_Email]] is shown in the email subject.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeTemplate} optsOrCallback.envelopeTemplate 
     * @param {module:api/TemplatesApi~createTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateSummary}
     */
    this.createTemplate = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeTemplate'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTemplate");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateSummary;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createTemplateDocumentResponsiveHtmlPreview operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createTemplateDocumentResponsiveHtmlPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitions} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Post Responsive HTML Preview for a document in a template.
     * Creates a preview of the
[responsive](/docs/esign-rest-api/esign101/concepts/responsive/),
HTML version of a specific template document. This
method enables you to preview a PDF document
conversion to responsive HTML across device types
prior to sending.

The request body is a `documentHtmlDefinition`
object, which holds the responsive signing
parameters that define how to generate the HTML
version of the signing document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentHtmlDefinition} optsOrCallback.documentHtmlDefinition 
     * @param {module:api/TemplatesApi~createTemplateDocumentResponsiveHtmlPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitions}
     */
    this.createTemplateDocumentResponsiveHtmlPreview = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentHtmlDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTemplateDocumentResponsiveHtmlPreview");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createTemplateDocumentResponsiveHtmlPreview");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling createTemplateDocumentResponsiveHtmlPreview");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentHtmlDefinitions;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/responsive_html_preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createTemplateDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createTemplateDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds the tabs to a tempate
     * Adds tabs to the document specified by `documentId` in the
template specified by `templateId`.

In the request body, you only need to specify the tabs that your
are adding. For example, to add a text
[prefill tab](/docs/esign-rest-api/reference/templates/templatedocumenttabs/create/#definition__templatetabs_prefilltabs),
your request body might look like this:

```
{
  "prefillTabs": {
    "textTabs": [
      {
        "value": "a prefill text tab",
        "pageNumber": "1",
        "documentId": "1",
        "xPosition": 316,
        "yPosition": 97
      }
    ]
  }
}
```

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateTabs} optsOrCallback.templateTabs 
     * @param {module:api/TemplatesApi~createTemplateDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.createTemplateDocumentTabs = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTemplateDocumentTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createTemplateDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling createTemplateDocumentTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createTemplateRecipientPreview operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createTemplateRecipientPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Provides a URL to start a recipient view of the Envelope UI
     * This method returns a URL for a template recipient preview  in the DocuSign UI that you can embed in your application. You use this method to enable the sender to preview the recipients' experience.

For more information, see [Preview and Send](https://support.docusign.com/en/guides/ndse-user-guide-send-your-documents).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RecipientPreviewRequest} optsOrCallback.recipientPreviewRequest 
     * @param {module:api/TemplatesApi~createTemplateRecipientPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createTemplateRecipientPreview = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recipientPreviewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTemplateRecipientPreview");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createTemplateRecipientPreview");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ViewUrl;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/views/recipient_preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createTemplateResponsiveHtmlPreview operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~createTemplateResponsiveHtmlPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitions} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Responsive HTML Preview for all documents in a template.
     * Creates a preview of the
[responsive](/docs/esign-rest-api/esign101/concepts/responsive/),
HTML versions of all of the documents associated
with a template. This method enables you to
preview the PDF document conversions to responsive
HTML across device types prior to sending.

The request body is a `documentHtmlDefinition`
object, which holds the responsive signing
parameters that define how to generate the HTML
version of the documents.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentHtmlDefinition} optsOrCallback.documentHtmlDefinition 
     * @param {module:api/TemplatesApi~createTemplateResponsiveHtmlPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitions}
     */
    this.createTemplateResponsiveHtmlPreview = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentHtmlDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTemplateResponsiveHtmlPreview");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling createTemplateResponsiveHtmlPreview");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentHtmlDefinitions;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/responsive_html_preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteBulkRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteBulkRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the bulk recipient list on a template.
     * Deletes the bulk recipient list on a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/TemplatesApi~deleteBulkRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsUpdateResponse}
     */
    this.deleteBulkRecipients = function(accountId, templateId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBulkRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteBulkRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteBulkRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkRecipientsUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/bulk_recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes envelope custom fields in a template.
     * Deletes envelope custom fields in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateCustomFields} optsOrCallback.templateCustomFields 
     * @param {module:api/TemplatesApi~deleteCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.deleteCustomFields = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateCustomFields'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes custom document fields from an existing template document.
     * Deletes custom document fields from an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentFieldsInformation} optsOrCallback.documentFieldsInformation 
     * @param {module:api/TemplatesApi~deleteDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.deleteDocumentFields = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteDocumentPage operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteDocumentPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a page from a document in an template.
     * Deletes a page from a document in a template based on the page number.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/PageRequest} optsOrCallback.pageRequest 
     * @param {module:api/TemplatesApi~deleteDocumentPageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDocumentPage = function(accountId, templateId, documentId, pageNumber, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['pageRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocumentPage");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteDocumentPage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentPage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber === undefined || pageNumber === null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling deleteDocumentPage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId,
        'pageNumber': pageNumber
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteDocuments operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes documents from a template.
     * Deletes one or more documents from an existing template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeDefinition} optsOrCallback.envelopeDefinition 
     * @param {module:api/TemplatesApi~deleteDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentsResult}
     */
    this.deleteDocuments = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocuments");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteDocuments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentsResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteGroupShare operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteGroupShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Removes a member group's sharing permissions for a template.
     * Removes a member group's sharing permissions for a specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} templatePart Currently, the only defined part is **groups**.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/GroupInformation} optsOrCallback.groupInformation 
     * @param {module:api/TemplatesApi~deleteGroupShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.deleteGroupShare = function(accountId, templateId, templatePart, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteGroupShare");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteGroupShare");
      }

      // verify the required parameter 'templatePart' is set
      if (templatePart === undefined || templatePart === null) {
        throw new Error("Missing the required parameter 'templatePart' when calling deleteGroupShare");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'templatePart': templatePart
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/{templatePart}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteLock operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a template lock.
     * Deletes the lock from the specified template. The `X-DocuSign-Edit` header must be included in the request.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/LockRequest} optsOrCallback.lockRequest 
     * @param {module:api/TemplatesApi~deleteLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.deleteLock = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteLock");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/lock', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteRecipient operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the specified recipient file from a template.
     * Deletes the specified recipient file from the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateRecipients} optsOrCallback.templateRecipients 
     * @param {module:api/TemplatesApi~deleteRecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.deleteRecipient = function(accountId, templateId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipient");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteRecipient");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteRecipient");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes recipients from a template.
     * Deletes one or more recipients from a template. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateRecipients} optsOrCallback.templateRecipients 
     * @param {module:api/TemplatesApi~deleteRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.deleteRecipients = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the tabs associated with a recipient in a template.
     * Deletes one or more tabs associated with a recipient in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateTabs} optsOrCallback.templateTabs 
     * @param {module:api/TemplatesApi~deleteTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.deleteTabs = function(accountId, templateId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteTemplateDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~deleteTemplateDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes tabs from an envelope document
     * Deletes tabs from the document specified by `documentId` in the
template specified by `templateId`.

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateTabs} optsOrCallback.templateTabs 
     * @param {module:api/TemplatesApi~deleteTemplateDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.deleteTemplateDocumentTabs = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteTemplateDocumentTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteTemplateDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteTemplateDocumentTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the get operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTemplate} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of templates for a specified account.
     * Retrieves the definition of the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {module:api/TemplatesApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTemplate}
     */
    this.get = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling get");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'include': optsOrCallback['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeTemplate;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getDocument operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets PDF documents from a template.
     * Retrieves one or more PDF documents from the specified template.

You can specify the ID of the document to retrieve or can specify `combined` to retrieve all documents in the template as one pdf.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.encrypt 
     * @param {String} optsOrCallback.showChanges 
     * @param {module:api/TemplatesApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocument = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocument");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocument");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
        'encrypt': optsOrCallback['encrypt'],
        'show_changes': optsOrCallback['showChanges']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/pdf'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getDocumentPageImage operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getDocumentPageImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a page image from a template for display.
     * Retrieves a page image for display from the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.dpi 
     * @param {String} optsOrCallback.maxHeight 
     * @param {String} optsOrCallback.maxWidth 
     * @param {String} optsOrCallback.showChanges 
     * @param {module:api/TemplatesApi~getDocumentPageImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocumentPageImage = function(accountId, templateId, documentId, pageNumber, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber === undefined || pageNumber === null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling getDocumentPageImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId,
        'pageNumber': pageNumber
      };
      var queryParams = {
        'dpi': optsOrCallback['dpi'],
        'max_height': optsOrCallback['maxHeight'],
        'max_width': optsOrCallback['maxWidth'],
        'show_changes': optsOrCallback['showChanges']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/page_image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns tabs on the document.
     * Returns the tabs on the document specified by `documentId` in the
template specified by `templateId`.


     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.pageNumbers 
     * @param {module:api/TemplatesApi~getDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.getDocumentTabs = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocumentTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
        'page_numbers': optsOrCallback['pageNumbers']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getLock operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets template lock information.
     * Retrieves general information about the template lock.

If the call is made by the user who has the lock and the request has the same integrator key as original, then the `X-DocuSign-Edit` header  field and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {module:api/TemplatesApi~getLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.getLock = function(accountId, templateId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getLock");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getNotificationSettings operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets template notification information.
     * Retrieves the envelope notification, reminders and expirations, information for an existing template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {module:api/TemplatesApi~getNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.getNotificationSettings = function(accountId, templateId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getNotificationSettings");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getNotificationSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getPageTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getPageTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns tabs on the specified page.
     * Returns the tabs from the page specified by `pageNumber` of the document specified by `documentId` in the
template specified by `templateId`.

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {module:api/TemplatesApi~getPageTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.getPageTabs = function(accountId, templateId, documentId, pageNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPageTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getPageTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getPageTabs");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber === undefined || pageNumber === null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling getPageTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId,
        'pageNumber': pageNumber
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getPages operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getPagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageImages} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns document page image(s) based on input.
     * Returns images of the pages in a template document for display based on the parameters that you specify.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.dpi 
     * @param {String} optsOrCallback.maxHeight 
     * @param {String} optsOrCallback.maxWidth 
     * @param {String} optsOrCallback.nocache 
     * @param {String} optsOrCallback.showChanges 
     * @param {String} optsOrCallback.startPosition 
     * @param {module:api/TemplatesApi~getPagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageImages}
     */
    this.getPages = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPages");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getPages");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getPages");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'dpi': optsOrCallback['dpi'],
        'max_height': optsOrCallback['maxHeight'],
        'max_width': optsOrCallback['maxWidth'],
        'nocache': optsOrCallback['nocache'],
        'show_changes': optsOrCallback['showChanges'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageImages;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getTemplateDocumentHtmlDefinitions operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getTemplateDocumentHtmlDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitionOriginals} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the Original HTML Definition used to generate the Responsive HTML for a given document in a template.
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/TemplatesApi~getTemplateDocumentHtmlDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitionOriginals}
     */
    this.getTemplateDocumentHtmlDefinitions = function(accountId, templateId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getTemplateDocumentHtmlDefinitions");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getTemplateDocumentHtmlDefinitions");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getTemplateDocumentHtmlDefinitions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentHtmlDefinitionOriginals;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/html_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getTemplateHtmlDefinitions operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~getTemplateHtmlDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitionOriginals} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the Original HTML Definition used to generate the Responsive HTML for the template.
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {module:api/TemplatesApi~getTemplateHtmlDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitionOriginals}
     */
    this.getTemplateHtmlDefinitions = function(accountId, templateId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getTemplateHtmlDefinitions");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getTemplateHtmlDefinitions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentHtmlDefinitionOriginals;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/html_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listBulkRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~listBulkRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the bulk recipient file from a template.
     * Retrieves the bulk recipient file information from a template that has a bulk recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeTabs 
     * @param {String} optsOrCallback.startPosition 
     * @param {module:api/TemplatesApi~listBulkRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsResponse}
     */
    this.listBulkRecipients = function(accountId, templateId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listBulkRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling listBulkRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling listBulkRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {
        'include_tabs': optsOrCallback['includeTabs'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkRecipientsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/bulk_recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~listCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the custom document fields from a template.
     * Retrieves the custom document field information from an existing template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {module:api/TemplatesApi~listCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.listCustomFields = function(accountId, templateId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling listCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~listDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the custom document fields for a an existing template document.
     * Retrieves the custom document fields for an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/TemplatesApi~listDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.listDocumentFields = function(accountId, templateId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling listDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling listDocumentFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listDocuments operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~listDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of documents associated with a template.
     * Retrieves a list of documents associated with the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeTabs 
     * @param {module:api/TemplatesApi~listDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentsResult}
     */
    this.listDocuments = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDocuments");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling listDocuments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'include_tabs': optsOrCallback['includeTabs']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentsResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~listRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets recipient information from a template.
     * Retrieves the information for all recipients in the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeAnchorTabLocations  When set to **true** and `include_tabs` is set to **true**, all tabs with anchor tab properties are included in the response. 
     * @param {String} optsOrCallback.includeExtended  When set to **true**, the extended properties are included in the response. 
     * @param {String} optsOrCallback.includeTabs When set to **true**, the tab information associated with the recipient is included in the response.
     * @param {module:api/TemplatesApi~listRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.listRecipients = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling listRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'include_anchor_tab_locations': optsOrCallback['includeAnchorTabLocations'],
        'include_extended': optsOrCallback['includeExtended'],
        'include_tabs': optsOrCallback['includeTabs']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~listTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the tabs information for a signer or sign-in-person recipient in a template.
     * Gets the tabs information for a signer or sign-in-person recipient in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeAnchorTabLocations When set to **true**, all tabs with anchor tab properties are included in the response. 
     * @param {String} optsOrCallback.includeMetadata 
     * @param {module:api/TemplatesApi~listTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.listTabs = function(accountId, templateId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling listTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling listTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {
        'include_anchor_tab_locations': optsOrCallback['includeAnchorTabLocations'],
        'include_metadata': optsOrCallback['includeMetadata']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listTemplates operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~listTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTemplateResults} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the definition of a template.
     * Retrieves the list of templates for the specified account. The request can be limited to a specific folder.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count Number of records to return in the cache.
     * @param {String} optsOrCallback.createdFromDate 
     * @param {String} optsOrCallback.createdToDate 
     * @param {String} optsOrCallback.folderIds A comma separated list of folder ID GUIDs.
     * @param {String} optsOrCallback.folderTypes 
     * @param {String} optsOrCallback.fromDate Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
     * @param {String} optsOrCallback.include A comma separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.
     * @param {String} optsOrCallback.isDeletedTemplateOnly 
     * @param {String} optsOrCallback.isDownload 
     * @param {String} optsOrCallback.modifiedFromDate 
     * @param {String} optsOrCallback.modifiedToDate 
     * @param {String} optsOrCallback.order Sets the direction order used to sort the list. Valid values are: -asc = ascending sort order (a to z)  -desc = descending sort order (z to a)
     * @param {String} optsOrCallback.orderBy Sets the file attribute used to sort the list. Valid values are:  -name: template name  -modified: date/time template was last modified.  -used: date/time the template was last used.
     * @param {String} optsOrCallback.searchFields 
     * @param {String} optsOrCallback.searchText The search text used to search the names of templates.
     * @param {String} optsOrCallback.sharedByMe If true, the response only includes templates shared by the user. If false, the response only returns template not shared by the user. If not specified, the response is not affected.
     * @param {String} optsOrCallback.startPosition The starting index for the first template shown in the response. This must be greater than or equal to 0 (zero).
     * @param {String} optsOrCallback.templateIds 
     * @param {String} optsOrCallback.toDate End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.
     * @param {String} optsOrCallback.usedFromDate Start of the search date range. Only returns templates used or edited on or after this date/time. If no value is specified, there is no limit on the earliest date used.
     * @param {String} optsOrCallback.usedToDate End of the search date range. Only returns templates used or edited up to this date/time. If no value is provided, this defaults to the current date.
     * @param {String} optsOrCallback.userFilter Sets if the templates shown in the response Valid values are:  -owned_by_me: only shows templates the user owns.  -shared_with_me: only shows templates that are shared with the user.  -all: shows all templates owned or shared with the user.
     * @param {String} optsOrCallback.userId 
     * @param {module:api/TemplatesApi~listTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTemplateResults}
     */
    this.listTemplates = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTemplates");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'created_from_date': optsOrCallback['createdFromDate'],
        'created_to_date': optsOrCallback['createdToDate'],
        'folder_ids': optsOrCallback['folderIds'],
        'folder_types': optsOrCallback['folderTypes'],
        'from_date': optsOrCallback['fromDate'],
        'include': optsOrCallback['include'],
        'is_deleted_template_only': optsOrCallback['isDeletedTemplateOnly'],
        'is_download': optsOrCallback['isDownload'],
        'modified_from_date': optsOrCallback['modifiedFromDate'],
        'modified_to_date': optsOrCallback['modifiedToDate'],
        'order': optsOrCallback['order'],
        'order_by': optsOrCallback['orderBy'],
        'search_fields': optsOrCallback['searchFields'],
        'search_text': optsOrCallback['searchText'],
        'shared_by_me': optsOrCallback['sharedByMe'],
        'start_position': optsOrCallback['startPosition'],
        'template_ids': optsOrCallback['templateIds'],
        'to_date': optsOrCallback['toDate'],
        'used_from_date': optsOrCallback['usedFromDate'],
        'used_to_date': optsOrCallback['usedToDate'],
        'user_filter': optsOrCallback['userFilter'],
        'user_id': optsOrCallback['userId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeTemplateResults;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the rotateDocumentPage operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~rotateDocumentPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Rotates page image from a template for display.
     * Rotates page image from a template for display. The page image can be rotated to the left or right.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/PageRequest} optsOrCallback.pageRequest 
     * @param {module:api/TemplatesApi~rotateDocumentPageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rotateDocumentPage = function(accountId, templateId, documentId, pageNumber, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['pageRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber === undefined || pageNumber === null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling rotateDocumentPage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId,
        'pageNumber': pageNumber
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/page_image', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the update operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateUpdateSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates an existing template.
     * Updates an existing template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeTemplate} optsOrCallback.envelopeTemplate 
     * @param {module:api/TemplatesApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateUpdateSummary}
     */
    this.update = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeTemplate'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling update");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateUpdateSummary;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates envelope custom fields in a template.
     * Updates the custom fields in a template.

Each custom field used in a template must have a unique name.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateCustomFields} optsOrCallback.templateCustomFields 
     * @param {module:api/TemplatesApi~updateCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.updateCustomFields = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateCustomFields'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateDocument operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocument} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds a document to a template document.
     * Adds the specified document to an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.isEnvelopeDefinition 
     * @param {module:model/EnvelopeDefinition} optsOrCallback.envelopeDefinition 
     * @param {module:api/TemplatesApi~updateDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocument}
     */
    this.updateDocument = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocument");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateDocument");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
        'is_envelope_definition': optsOrCallback['isEnvelopeDefinition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeDocument;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates existing custom document fields in an existing template document.
     * Updates existing custom document fields in an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentFieldsInformation} optsOrCallback.documentFieldsInformation 
     * @param {module:api/TemplatesApi~updateDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.updateDocumentFields = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateDocumentFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateDocuments operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds documents to a template document.
     * Adds one or more documents to an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeDefinition} optsOrCallback.envelopeDefinition 
     * @param {module:api/TemplatesApi~updateDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentsResult}
     */
    this.updateDocuments = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocuments");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateDocuments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentsResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateGroupShare operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateGroupShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Shares a template with a group
     * Shares a template with the specified members group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} templatePart Currently, the only defined part is **groups**.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/GroupInformation} optsOrCallback.groupInformation 
     * @param {module:api/TemplatesApi~updateGroupShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.updateGroupShare = function(accountId, templateId, templatePart, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateGroupShare");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateGroupShare");
      }

      // verify the required parameter 'templatePart' is set
      if (templatePart === undefined || templatePart === null) {
        throw new Error("Missing the required parameter 'templatePart' when calling updateGroupShare");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'templatePart': templatePart
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/{templatePart}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateLock operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates a template lock.
     * Updates the lock duration time or update the `lockedByApp` property information for the specified template. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/LockRequest} optsOrCallback.lockRequest 
     * @param {module:api/TemplatesApi~updateLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.updateLock = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateLock");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/lock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateNotificationSettings operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the notification  structure for an existing template.
     * Updates the notification structure for an existing template. Use this endpoint to set reminder and expiration notifications.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateNotificationRequest} optsOrCallback.templateNotificationRequest 
     * @param {module:api/TemplatesApi~updateNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.updateNotificationSettings = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateNotificationRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateNotificationSettings");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateNotificationSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/notification', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipientsUpdateSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates recipients in a template.
     * Updates recipients in a template. 

You can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.resendEnvelope 
     * @param {module:model/TemplateRecipients} optsOrCallback.templateRecipients 
     * @param {module:api/TemplatesApi~updateRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipientsUpdateSummary}
     */
    this.updateRecipients = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'resend_envelope': optsOrCallback['resendEnvelope']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecipientsUpdateSummary;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the tabs for a recipient.
     * Updates one or more tabs for a recipient in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateTabs} optsOrCallback.templateTabs 
     * @param {module:api/TemplatesApi~updateTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.updateTabs = function(accountId, templateId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateTemplateDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/TemplatesApi~updateTemplateDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the tabs for a template
     * Updates tabs in the document specified by `documentId` in the
template specified by `templateId`.

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateTabs} optsOrCallback.templateTabs 
     * @param {module:api/TemplatesApi~updateTemplateDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.updateTemplateDocumentTabs = function(accountId, templateId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateTemplateDocumentTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateTemplateDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateTemplateDocumentTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/documents/{documentId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));