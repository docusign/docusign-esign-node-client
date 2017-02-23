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
	define(['Configuration', 'ApiClient', 'model/CustomFields', 'model/DocumentFieldsInformation', 'model/EnvelopeDefinition', 'model/EnvelopeTemplate', 'model/EnvelopeTemplateResults', 'model/ErrorDetails', 'model/GroupInformation', 'model/LockInformation', 'model/Notification', 'model/PageRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/Tabs', 'model/TemplateCustomFields', 'model/TemplateDocumentsResult', 'model/TemplateNotificationRequest', 'model/TemplateRecipients', 'model/TemplateSummary', 'model/TemplateTabs', 'model/TemplateUpdateSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/CustomFields'), require('../model/DocumentFieldsInformation'), require('../model/EnvelopeDefinition'), require('../model/EnvelopeTemplate'), require('../model/EnvelopeTemplateResults'), require('../model/ErrorDetails'), require('../model/GroupInformation'), require('../model/LockInformation'), require('../model/Notification'), require('../model/PageRequest'), require('../model/Recipients'), require('../model/RecipientsUpdateSummary'), require('../model/Tabs'), require('../model/TemplateCustomFields'), require('../model/TemplateDocumentsResult'), require('../model/TemplateNotificationRequest'), require('../model/TemplateRecipients'), require('../model/TemplateSummary'), require('../model/TemplateTabs'), require('../model/TemplateUpdateSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplatesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.CustomFields, root.Docusign.DocumentFieldsInformation, root.Docusign.EnvelopeDefinition, root.Docusign.EnvelopeTemplate, root.Docusign.EnvelopeTemplateResults, root.Docusign.ErrorDetails, root.Docusign.GroupInformation, root.Docusign.LockInformation, root.Docusign.Notification, root.Docusign.PageRequest, root.Docusign.Recipients, root.Docusign.RecipientsUpdateSummary, root.Docusign.Tabs, root.Docusign.TemplateCustomFields, root.Docusign.TemplateDocumentsResult, root.Docusign.TemplateNotificationRequest, root.Docusign.TemplateRecipients, root.Docusign.TemplateSummary, root.Docusign.TemplateTabs, root.Docusign.TemplateUpdateSummary);
  }
}(this, function(Configuration, ApiClient, CustomFields, DocumentFieldsInformation, EnvelopeDefinition, EnvelopeTemplate, EnvelopeTemplateResults, ErrorDetails, GroupInformation, LockInformation, Notification, PageRequest, Recipients, RecipientsUpdateSummary, Tabs, TemplateCustomFields, TemplateDocumentsResult, TemplateNotificationRequest, TemplateRecipients, TemplateSummary, TemplateTabs, TemplateUpdateSummary) {
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
     * @param {module:model/TemplateCustomFields} opts.templateCustomFields TBD Description
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
    }

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
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation TBD Description
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
        'templateId': templateId,
        'documentId': documentId
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
    }

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
     * @param {module:model/TemplateRecipients} opts.templateRecipients TBD Description
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
    }

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
     * @param {module:model/TemplateTabs} opts.templateTabs TBD Description
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
        'templateId': templateId,
        'recipientId': recipientId
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
    }

    /**
     * Callback function to receive the result of the createTemplate operation.
     * @callback module:api/TemplatesApi~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an envelope from a template.
     * Creates a template definition using a multipart request.  ###Template Email Subject Merge Fields  Call this endpoint to insert a recipient name and email address merge fields into the email subject line when creating or sending from a template.  The merge fields, based on the recipient’s role name, are added to the &#x60;emailSubject&#x60; property when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.  Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient. #### Note: If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.  To add a recipient’s name in the subject line add the following text in the &#x60;emailSubject&#x60; property when creating the template or when sending an envelope from a template:  [[&lt;roleName&gt;_UserName]]  Example:  &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,&#x60;  To add a recipient’s email address in the subject line add the following text in the &#x60;emailSubject&#x60; property when creating the template or when sending an envelope from a template:  [[&lt;roleName&gt;_Email]]  Example:  &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,&#x60;   In both cases the &lt;roleName&gt; is the recipient&#39;s contents of the &#x60;roleName&#x60; property in the template.  For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvelopeTemplate} opts.envelopeTemplate TBD Description
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
    }

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
     * @param {module:model/TemplateCustomFields} opts.templateCustomFields TBD Description
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
    }

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
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation TBD Description
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
        'templateId': templateId,
        'documentId': documentId
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
    }

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
     * @param {module:model/PageRequest} opts.pageRequest TBD Description
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition TBD Description
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
    }

    /**
     * Callback function to receive the result of the deleteGroupShare operation.
     * @callback module:api/TemplatesApi~deleteGroupShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a member group&#39;s sharing permissions for a template.
     * Removes a member group&#39;s sharing permissions for a specified template.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} templatePart Currently, the only defined part is **groups**.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupInformation} opts.groupInformation TBD Description
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
    }

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
     * @param {module:model/TemplateRecipients} opts.templateRecipients TBD Description
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
        'templateId': templateId,
        'recipientId': recipientId
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
    }

    /**
     * Callback function to receive the result of the deleteRecipients operation.
     * @callback module:api/TemplatesApi~deleteRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes recipients from a template.
     * Deletes one or more recipients from a template. Recipients to be deleted are listed in the request, with the &#x60;recipientId&#x60; being used as the key for deleting recipients.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateRecipients} opts.templateRecipients TBD Description
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
    }

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
     * @param {module:model/TemplateTabs} opts.templateTabs TBD Description
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
        'templateId': templateId,
        'recipientId': recipientId
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
    }

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
     * @param {module:api/TemplatesApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTemplate}
     */
    this.get = function(accountId, templateId, callback) {
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
    }

    /**
     * Callback function to receive the result of the getDocument operation.
     * @callback module:api/TemplatesApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets PDF documents from a template.
     * Retrieves one or more PDF documents from the specified template.  You can specify the ID of the document to retrieve or can specify &#x60;combined&#x60; to retrieve all documents in the template as one pdf.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/TemplatesApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocument = function(accountId, templateId, documentId, callback) {
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
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {
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
    }

    /**
     * Callback function to receive the result of the getLock operation.
     * @callback module:api/TemplatesApi~getLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets template lock information.
     * Retrieves general information about the template lock.  If the call is made by the user who has the lock and the request has the same integrator key as original, then the &#x60;X-DocuSign-Edit&#x60; header  field and additional lock information is included in the response. This allows users to recover a lost editing session token and the &#x60;X-DocuSign-Edit&#x60; header.
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
    }

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
    }

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
    }

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
        'templateId': templateId,
        'documentId': documentId
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
    }

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
    }

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
     * @param {module:api/TemplatesApi~listRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.listRecipients = function(accountId, templateId, callback) {
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
    }

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
     * @param {module:model/Tabs} opts.tabs TBD Description
     * @param {module:api/TemplatesApi~listTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.listTabs = function(accountId, templateId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['tabs'];

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
        'templateId': templateId,
        'recipientId': recipientId
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
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
     * @param {module:api/TemplatesApi~listTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTemplateResults}
     */
    this.listTemplates = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTemplates");
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
      var returnType = EnvelopeTemplateResults;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
     * @param {module:model/EnvelopeTemplate} opts.envelopeTemplate TBD Description
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
    }

    /**
     * Callback function to receive the result of the updateCustomFields operation.
     * @callback module:api/TemplatesApi~updateCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates envelope custom fields in a template.
     * Updates the custom fields in a template.  Each custom field used in a template must have a unique name.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateCustomFields} opts.templateCustomFields TBD Description
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
    }

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
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation TBD Description
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
        'templateId': templateId,
        'documentId': documentId
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
    }

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
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition TBD Description
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
    }

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
     * @param {module:model/GroupInformation} opts.groupInformation TBD Description
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
    }

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
     * @param {module:model/TemplateNotificationRequest} opts.templateNotificationRequest TBD Description
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
    }

    /**
     * Callback function to receive the result of the updateRecipients operation.
     * @callback module:api/TemplatesApi~updateRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipientsUpdateSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates recipients in a template.
     * Updates recipients in a template.   You can edit the following properties: &#x60;email&#x60;, &#x60;userName&#x60;, &#x60;routingOrder&#x60;, &#x60;faxNumber&#x60;, &#x60;deliveryMethod&#x60;, &#x60;accessCode&#x60;, and &#x60;requireIdLookup&#x60;.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateRecipients} opts.templateRecipients TBD Description
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
    }

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
     * @param {module:model/TemplateTabs} opts.templateTabs TBD Description
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
        'templateId': templateId,
        'recipientId': recipientId
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
    }
  };

  return exports;
}));
