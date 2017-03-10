/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/BulkRecipientsRequest', 'model/BulkRecipientsResponse', 'model/BulkRecipientsSummaryResponse', 'model/BulkRecipientsUpdateResponse', 'model/CustomFields', 'model/DocumentFieldsInformation', 'model/EnvelopeDefinition', 'model/EnvelopeDocument', 'model/EnvelopeTemplate', 'model/EnvelopeTemplateResults', 'model/ErrorDetails', 'model/GroupInformation', 'model/LockInformation', 'model/LockRequest', 'model/Notification', 'model/PageRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/ReturnUrlRequest', 'model/Tabs', 'model/TemplateCustomFields', 'model/TemplateDocumentsResult', 'model/TemplateNotificationRequest', 'model/TemplateRecipients', 'model/TemplateSummary', 'model/TemplateTabs', 'model/TemplateUpdateSummary', 'model/ViewUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkRecipientsRequest'), require('../model/BulkRecipientsResponse'), require('../model/BulkRecipientsSummaryResponse'), require('../model/BulkRecipientsUpdateResponse'), require('../model/CustomFields'), require('../model/DocumentFieldsInformation'), require('../model/EnvelopeDefinition'), require('../model/EnvelopeDocument'), require('../model/EnvelopeTemplate'), require('../model/EnvelopeTemplateResults'), require('../model/ErrorDetails'), require('../model/GroupInformation'), require('../model/LockInformation'), require('../model/LockRequest'), require('../model/Notification'), require('../model/PageRequest'), require('../model/Recipients'), require('../model/RecipientsUpdateSummary'), require('../model/ReturnUrlRequest'), require('../model/Tabs'), require('../model/TemplateCustomFields'), require('../model/TemplateDocumentsResult'), require('../model/TemplateNotificationRequest'), require('../model/TemplateRecipients'), require('../model/TemplateSummary'), require('../model/TemplateTabs'), require('../model/TemplateUpdateSummary'), require('../model/ViewUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplatesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BulkRecipientsRequest, root.Docusign.BulkRecipientsResponse, root.Docusign.BulkRecipientsSummaryResponse, root.Docusign.BulkRecipientsUpdateResponse, root.Docusign.CustomFields, root.Docusign.DocumentFieldsInformation, root.Docusign.EnvelopeDefinition, root.Docusign.EnvelopeDocument, root.Docusign.EnvelopeTemplate, root.Docusign.EnvelopeTemplateResults, root.Docusign.ErrorDetails, root.Docusign.GroupInformation, root.Docusign.LockInformation, root.Docusign.LockRequest, root.Docusign.Notification, root.Docusign.PageRequest, root.Docusign.Recipients, root.Docusign.RecipientsUpdateSummary, root.Docusign.ReturnUrlRequest, root.Docusign.Tabs, root.Docusign.TemplateCustomFields, root.Docusign.TemplateDocumentsResult, root.Docusign.TemplateNotificationRequest, root.Docusign.TemplateRecipients, root.Docusign.TemplateSummary, root.Docusign.TemplateTabs, root.Docusign.TemplateUpdateSummary, root.Docusign.ViewUrl);
  }
}(this, function(Configuration, ApiClient, BulkRecipientsRequest, BulkRecipientsResponse, BulkRecipientsSummaryResponse, BulkRecipientsUpdateResponse, CustomFields, DocumentFieldsInformation, EnvelopeDefinition, EnvelopeDocument, EnvelopeTemplate, EnvelopeTemplateResults, ErrorDetails, GroupInformation, LockInformation, LockRequest, Notification, PageRequest, Recipients, RecipientsUpdateSummary, ReturnUrlRequest, Tabs, TemplateCustomFields, TemplateDocumentsResult, TemplateNotificationRequest, TemplateRecipients, TemplateSummary, TemplateTabs, TemplateUpdateSummary, ViewUrl) {
  'use strict';

  /**
   * Templates service.
   * @module api/TemplatesApi
   * @version 3.0.0
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
     * Callback function to receive the result of the createCustomFields operation.
     * @callback module:api/TemplatesApi~createCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates custom document fields in an existing template document.
     * Creates custom document fields in an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateCustomFields} opts.templateCustomFields 
     * @param {module:api/TemplatesApi~createCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.createCustomFields = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateCustomFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling createCustomFields");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createDocumentFields operation.
     * @callback module:api/TemplatesApi~createDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates custom document fields in an existing template document.
     * Creates custom document fields in an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation 
     * @param {module:api/TemplatesApi~createDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.createDocumentFields = function(accountId, templateId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling createDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling createDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createEditView operation.
     * @callback module:api/TemplatesApi~createEditViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides a URL to start an edit view of the Template UI
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/ReturnUrlRequest} opts.returnUrlRequest 
     * @param {module:api/TemplatesApi~createEditViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createEditView = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['returnUrlRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEditView");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling createEditView");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ViewUrl;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/views/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createLock operation.
     * @callback module:api/TemplatesApi~createLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lock a template.
     * Locks the specified template, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the template.

###### Note: Users must have envelope locking capability enabled to use this function (the userSetting property `canLockEnvelopes` must be set to **true** for the user).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockRequest} opts.lockRequest 
     * @param {module:api/TemplatesApi~createLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.createLock = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling createLock");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createRecipients operation.
     * @callback module:api/TemplatesApi~createRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds tabs for a recipient.
     * Adds one or more recipients to a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.resendEnvelope 
     * @param {module:model/TemplateRecipients} opts.templateRecipients 
     * @param {module:api/TemplatesApi~createRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.createRecipients = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling createRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'resend_envelope': opts['resendEnvelope']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createTabs operation.
     * @callback module:api/TemplatesApi~createTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds tabs for a recipient.
     * Adds one or more tabs for a recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateTabs} opts.templateTabs 
     * @param {module:api/TemplatesApi~createTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.createTabs = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling createTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling createTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the createTemplate operation.
     * @callback module:api/TemplatesApi~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an envelope from a template.
     * Creates a template definition using a multipart request.

###Template Email Subject Merge Fields

Call this endpoint to insert a recipient name and email address merge fields into the email subject line when creating or sending from a template.

The merge fields, based on the recipient’s role name, are added to the `emailSubject` property when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.

Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.
###### Note: If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.

To add a recipient’s name in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:

[[<roleName>_UserName]]

Example:

`"emailSubject":"[[Signer 1_UserName]], Please sign this NDA",`

To add a recipient’s email address in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:

[[<roleName>_Email]]

Example:

`"emailSubject":"[[Signer 1_Email]], Please sign this NDA",`


In both cases the <roleName> is the recipient's contents of the `roleName` property in the template.

For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[<roleName>_UserName]] or [[<roleName>_Email]] is shown in the email subject.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvelopeTemplate} opts.envelopeTemplate 
     * @param {module:api/TemplatesApi~createTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateSummary}
     */
    this.createTemplate = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeTemplate'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTemplate");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateSummary;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteBulkRecipients operation.
     * @callback module:api/TemplatesApi~deleteBulkRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsUpdateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBulkRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteBulkRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteBulkRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkRecipientsUpdateResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/bulk_recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteCustomFields operation.
     * @callback module:api/TemplatesApi~deleteCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes envelope custom fields in a template.
     * Deletes envelope custom fields in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateCustomFields} opts.templateCustomFields 
     * @param {module:api/TemplatesApi~deleteCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.deleteCustomFields = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateCustomFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteCustomFields");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteDocumentFields operation.
     * @callback module:api/TemplatesApi~deleteDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes custom document fields from an existing template document.
     * Deletes custom document fields from an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation 
     * @param {module:api/TemplatesApi~deleteDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.deleteDocumentFields = function(accountId, templateId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteDocumentPage operation.
     * @callback module:api/TemplatesApi~deleteDocumentPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a page from a document in an template.
     * Deletes a page from a document in a template based on the page number.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/PageRequest} opts.pageRequest 
     * @param {module:api/TemplatesApi~deleteDocumentPageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDocumentPage = function(accountId, templateId, documentId, pageNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['pageRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocumentPage");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteDocumentPage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentPage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber == undefined || pageNumber == null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling deleteDocumentPage");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'pageNumber': pageNumber,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteDocuments operation.
     * @callback module:api/TemplatesApi~deleteDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes documents from a template.
     * Deletes one or more documents from an existing template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition 
     * @param {module:api/TemplatesApi~deleteDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentsResult}
     */
    this.deleteDocuments = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocuments");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteDocuments");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentsResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteGroupShare operation.
     * @callback module:api/TemplatesApi~deleteGroupShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a member group&#39;s sharing permissions for a template.
     * Removes a member group's sharing permissions for a specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} templatePart Currently, the only defined part is **groups**.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupInformation} opts.groupInformation 
     * @param {module:api/TemplatesApi~deleteGroupShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.deleteGroupShare = function(accountId, templateId, templatePart, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteGroupShare");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteGroupShare");
      }

      // verify the required parameter 'templatePart' is set
      if (templatePart == undefined || templatePart == null) {
        throw new Error("Missing the required parameter 'templatePart' when calling deleteGroupShare");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/{templatePart}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteLock operation.
     * @callback module:api/TemplatesApi~deleteLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a template lock.
     * Deletes the lock from the specified template. The `X-DocuSign-Edit` header must be included in the request.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockRequest} opts.lockRequest 
     * @param {module:api/TemplatesApi~deleteLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.deleteLock = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteLock");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/lock', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteRecipient operation.
     * @callback module:api/TemplatesApi~deleteRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified recipient file from a template.
     * Deletes the specified recipient file from the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateRecipients} opts.templateRecipients 
     * @param {module:api/TemplatesApi~deleteRecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.deleteRecipient = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipient");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteRecipient");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteRecipient");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteRecipients operation.
     * @callback module:api/TemplatesApi~deleteRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes recipients from a template.
     * Deletes one or more recipients from a template. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateRecipients} opts.templateRecipients 
     * @param {module:api/TemplatesApi~deleteRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.deleteRecipients = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteRecipients");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteTabs operation.
     * @callback module:api/TemplatesApi~deleteTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the tabs associated with a recipient in a template.
     * Deletes one or more tabs associated with a recipient in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateTabs} opts.templateTabs 
     * @param {module:api/TemplatesApi~deleteTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.deleteTabs = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/TemplatesApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of templates for a specified account.
     * Retrieves the definition of the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:api/TemplatesApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTemplate}
     */
    this.get = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling get");
      }


      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeTemplate;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getDocument operation.
     * @callback module:api/TemplatesApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets PDF documents from a template.
     * Retrieves one or more PDF documents from the specified template.

You can specify the ID of the document to retrieve or can specify `combined` to retrieve all documents in the template as one pdf.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.encrypt 
     * @param {String} opts.showChanges 
     * @param {module:api/TemplatesApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocument = function(accountId, templateId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocument");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling getDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocument");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'templateId': templateId
      };
      var queryParams = {
        'encrypt': opts['encrypt'],
        'show_changes': opts['showChanges']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/pdf'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getDocumentPageImage operation.
     * @callback module:api/TemplatesApi~getDocumentPageImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a page image from a template for display.
     * Retrieves a page image for display from the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dpi 
     * @param {String} opts.maxHeight 
     * @param {String} opts.maxWidth 
     * @param {String} opts.showChanges 
     * @param {module:api/TemplatesApi~getDocumentPageImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocumentPageImage = function(accountId, templateId, documentId, pageNumber, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber == undefined || pageNumber == null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling getDocumentPageImage");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'pageNumber': pageNumber,
        'templateId': templateId
      };
      var queryParams = {
        'dpi': opts['dpi'],
        'max_height': opts['maxHeight'],
        'max_width': opts['maxWidth'],
        'show_changes': opts['showChanges']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/page_image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getLock operation.
     * @callback module:api/TemplatesApi~getLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling getLock");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getNotificationSettings operation.
     * @callback module:api/TemplatesApi~getNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getNotificationSettings");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling getNotificationSettings");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listBulkRecipients operation.
     * @callback module:api/TemplatesApi~listBulkRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the bulk recipient file from a template.
     * Retrieves the bulk recipient file information from a template that has a bulk recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.includeTabs 
     * @param {String} opts.startPosition 
     * @param {module:api/TemplatesApi~listBulkRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsResponse}
     */
    this.listBulkRecipients = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listBulkRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling listBulkRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling listBulkRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
        'include_tabs': opts['includeTabs'],
        'start_position': opts['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkRecipientsResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/bulk_recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listCustomFields operation.
     * @callback module:api/TemplatesApi~listCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling listCustomFields");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listDocumentFields operation.
     * @callback module:api/TemplatesApi~listDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling listDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling listDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listDocuments operation.
     * @callback module:api/TemplatesApi~listDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of documents associated with a template.
     * Retrieves a list of documents associated with the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {module:api/TemplatesApi~listDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentsResult}
     */
    this.listDocuments = function(accountId, templateId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDocuments");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling listDocuments");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentsResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listRecipients operation.
     * @callback module:api/TemplatesApi~listRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets recipient information from a template.
     * Retrieves the information for all recipients in the specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.includeAnchorTabLocations  When set to **true** and &#x60;include_tabs&#x60; is set to **true**, all tabs with anchor tab properties are included in the response. 
     * @param {String} opts.includeExtended  When set to **true**, the extended properties are included in the response. 
     * @param {String} opts.includeTabs When set to **true**, the tab information associated with the recipient is included in the response.
     * @param {module:api/TemplatesApi~listRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.listRecipients = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling listRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'include_anchor_tab_locations': opts['includeAnchorTabLocations'],
        'include_extended': opts['includeExtended'],
        'include_tabs': opts['includeTabs']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recipients;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listTabs operation.
     * @callback module:api/TemplatesApi~listTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the tabs information for a signer or sign-in-person recipient in a template.
     * Gets the tabs information for a signer or sign-in-person recipient in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.includeAnchorTabLocations When set to **true**, all tabs with anchor tab properties are included in the response. 
     * @param {String} opts.includeMetadata 
     * @param {module:api/TemplatesApi~listTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.listTabs = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling listTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling listTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
        'include_anchor_tab_locations': opts['includeAnchorTabLocations'],
        'include_metadata': opts['includeMetadata']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listTemplates operation.
     * @callback module:api/TemplatesApi~listTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTemplateResults} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the definition of a template.
     * Retrieves the list of templates for the specified account. The request can be limited to a specific folder.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.count Number of records to return in the cache.
     * @param {String} opts.folder The query value can be a folder name or folder ID. The response will only return templates in the specified folder.
     * @param {String} opts.folderIds A comma separated list of folder ID GUIDs.
     * @param {String} opts.fromDate Start of the search date range. Only returns templates created on or after this date/time. If no value is specified, there is no limit on the earliest date created.
     * @param {String} opts.include A comma separated list of additional template attributes to include in the response. Valid values are: recipients, folders, documents, custom_fields, and notifications.
     * @param {String} opts.order Sets the direction order used to sort the list. Valid values are: -asc &#x3D; ascending sort order (a to z)  -desc &#x3D; descending sort order (z to a)
     * @param {String} opts.orderBy Sets the file attribute used to sort the list. Valid values are:  -name: template name  -modified: date/time template was last modified.  -used: date/time the template was last used.
     * @param {String} opts.searchText The search text used to search the names of templates.
     * @param {String} opts.shared 
     * @param {String} opts.sharedByMe If true, the response only includes templates shared by the user. If false, the response only returns template not shared by the user. If not specified, the response is not affected.
     * @param {String} opts.startPosition The starting index for the first template shown in the response. This must be greater than or equal to 0 (zero).
     * @param {String} opts.toDate End of the search date range. Only returns templates created up to this date/time. If no value is provided, this defaults to the current date.
     * @param {String} opts.usedFromDate Start of the search date range. Only returns templates used or edited on or after this date/time. If no value is specified, there is no limit on the earliest date used.
     * @param {String} opts.usedToDate End of the search date range. Only returns templates used or edited up to this date/time. If no value is provided, this defaults to the current date.
     * @param {String} opts.userFilter Sets if the templates shown in the response Valid values are:  -owned_by_me: only shows templates the user owns.  -shared_with_me: only shows templates that are shared with the user.  -all: shows all templates owned or shared with the user.
     * @param {module:api/TemplatesApi~listTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTemplateResults}
     */
    this.listTemplates = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTemplates");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'count': opts['count'],
        'folder': opts['folder'],
        'folder_ids': opts['folderIds'],
        'from_date': opts['fromDate'],
        'include': opts['include'],
        'order': opts['order'],
        'order_by': opts['orderBy'],
        'search_text': opts['searchText'],
        'shared': opts['shared'],
        'shared_by_me': opts['sharedByMe'],
        'start_position': opts['startPosition'],
        'to_date': opts['toDate'],
        'used_from_date': opts['usedFromDate'],
        'used_to_date': opts['usedToDate'],
        'user_filter': opts['userFilter']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeTemplateResults;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the rotateDocumentPage operation.
     * @callback module:api/TemplatesApi~rotateDocumentPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rotates page image from a template for display.
     * Rotates page image from a template for display. The page image can be rotated to the left or right.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/PageRequest} opts.pageRequest 
     * @param {module:api/TemplatesApi~rotateDocumentPageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rotateDocumentPage = function(accountId, templateId, documentId, pageNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['pageRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber == undefined || pageNumber == null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling rotateDocumentPage");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'pageNumber': pageNumber,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}/page_image', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/TemplatesApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateUpdateSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing template.
     * Updates an existing template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvelopeTemplate} opts.envelopeTemplate 
     * @param {module:api/TemplatesApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateUpdateSummary}
     */
    this.update = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeTemplate'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling update");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateUpdateSummary;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateBulkRecipients operation.
     * @callback module:api/TemplatesApi~updateBulkRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkRecipientsSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds or replaces the bulk recipients list in a template.
     * Updates the bulk recipients in a template using a file upload. The Content-Type supported for uploading a bulk recipient file is CSV (text/csv).

The REST API does not support modifying individual rows or values in the bulk recipients file. It only allows the entire file to be added or replaced with a new file.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/BulkRecipientsRequest} opts.bulkRecipientsRequest 
     * @param {module:api/TemplatesApi~updateBulkRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkRecipientsSummaryResponse}
     */
    this.updateBulkRecipients = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['bulkRecipientsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateBulkRecipients");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateBulkRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkRecipientsSummaryResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/bulk_recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateCustomFields operation.
     * @callback module:api/TemplatesApi~updateCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates envelope custom fields in a template.
     * Updates the custom fields in a template.

Each custom field used in a template must have a unique name.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateCustomFields} opts.templateCustomFields 
     * @param {module:api/TemplatesApi~updateCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.updateCustomFields = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateCustomFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateCustomFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateCustomFields");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateDocument operation.
     * @callback module:api/TemplatesApi~updateDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a document to a template document.
     * Adds the specified document to an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.applyDocumentFields 
     * @param {String} opts.isEnvelopeDefinition 
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition 
     * @param {module:api/TemplatesApi~updateDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocument}
     */
    this.updateDocument = function(accountId, templateId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocument");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateDocument");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'templateId': templateId
      };
      var queryParams = {
        'apply_document_fields': opts['applyDocumentFields'],
        'is_envelope_definition': opts['isEnvelopeDefinition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeDocument;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateDocumentFields operation.
     * @callback module:api/TemplatesApi~updateDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates existing custom document fields in an existing template document.
     * Updates existing custom document fields in an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation 
     * @param {module:api/TemplatesApi~updateDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.updateDocumentFields = function(accountId, templateId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocumentFields");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'documentId': documentId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentFieldsInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateDocuments operation.
     * @callback module:api/TemplatesApi~updateDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds documents to a template document.
     * Adds one or more documents to an existing template document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.applyDocumentFields 
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition 
     * @param {module:api/TemplatesApi~updateDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentsResult}
     */
    this.updateDocuments = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocuments");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateDocuments");
      }


      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'apply_document_fields': opts['applyDocumentFields']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentsResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateGroupShare operation.
     * @callback module:api/TemplatesApi~updateGroupShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Shares a template with a group
     * Shares a template with the specified members group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} templatePart Currently, the only defined part is **groups**.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupInformation} opts.groupInformation 
     * @param {module:api/TemplatesApi~updateGroupShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupInformation}
     */
    this.updateGroupShare = function(accountId, templateId, templatePart, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateGroupShare");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateGroupShare");
      }

      // verify the required parameter 'templatePart' is set
      if (templatePart == undefined || templatePart == null) {
        throw new Error("Missing the required parameter 'templatePart' when calling updateGroupShare");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/{templatePart}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateLock operation.
     * @callback module:api/TemplatesApi~updateLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a template lock.
     * Updates the lock duration time or update the `lockedByApp` property information for the specified template. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockRequest} opts.lockRequest 
     * @param {module:api/TemplatesApi~updateLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.updateLock = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateLock");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateLock");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LockInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/lock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateNotificationSettings operation.
     * @callback module:api/TemplatesApi~updateNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the notification  structure for an existing template.
     * Updates the notification structure for an existing template. Use this endpoint to set reminder and expiration notifications.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateNotificationRequest} opts.templateNotificationRequest 
     * @param {module:api/TemplatesApi~updateNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.updateNotificationSettings = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateNotificationRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateNotificationSettings");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateNotificationSettings");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Notification;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/notification', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateRecipients operation.
     * @callback module:api/TemplatesApi~updateRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipientsUpdateSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates recipients in a template.
     * Updates recipients in a template. 

You can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.resendEnvelope 
     * @param {module:model/TemplateRecipients} opts.templateRecipients 
     * @param {module:api/TemplatesApi~updateRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipientsUpdateSummary}
     */
    this.updateRecipients = function(accountId, templateId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateRecipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipients");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {
        'resend_envelope': opts['resendEnvelope']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecipientsUpdateSummary;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateTabs operation.
     * @callback module:api/TemplatesApi~updateTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the tabs for a recipient.
     * Updates one or more tabs for a recipient in a template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateTabs} opts.templateTabs 
     * @param {module:api/TemplatesApi~updateTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.updateTabs = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['templateTabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateTabs");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'recipientId': recipientId,
        'templateId': templateId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
