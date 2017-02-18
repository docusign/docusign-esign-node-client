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
	define(['Configuration', 'ApiClient', 'model/ConsoleViewRequest', 'model/CorrectViewRequest', 'model/CustomFields', 'model/CustomFieldsEnvelope', 'model/DocumentFieldsInformation', 'model/DocumentTemplateList', 'model/EmailSettings', 'model/Envelope', 'model/EnvelopeAuditEventResponse', 'model/EnvelopeDefinition', 'model/EnvelopeDocumentsResult', 'model/EnvelopeIdsRequest', 'model/EnvelopeSummary', 'model/EnvelopeUpdateSummary', 'model/EnvelopesInformation', 'model/ErrorDetails', 'model/LockInformation', 'model/LockRequest', 'model/Notification', 'model/RecipientViewRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/ReturnUrlRequest', 'model/Tabs', 'model/TemplateInformation', 'model/ViewLinkRequest', 'model/ViewUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ConsoleViewRequest'), require('../model/CorrectViewRequest'), require('../model/CustomFields'), require('../model/CustomFieldsEnvelope'), require('../model/DocumentFieldsInformation'), require('../model/DocumentTemplateList'), require('../model/EmailSettings'), require('../model/Envelope'), require('../model/EnvelopeAuditEventResponse'), require('../model/EnvelopeDefinition'), require('../model/EnvelopeDocumentsResult'), require('../model/EnvelopeIdsRequest'), require('../model/EnvelopeSummary'), require('../model/EnvelopeUpdateSummary'), require('../model/EnvelopesInformation'), require('../model/ErrorDetails'), require('../model/LockInformation'), require('../model/LockRequest'), require('../model/Notification'), require('../model/RecipientViewRequest'), require('../model/Recipients'), require('../model/RecipientsUpdateSummary'), require('../model/ReturnUrlRequest'), require('../model/Tabs'), require('../model/TemplateInformation'), require('../model/ViewLinkRequest'), require('../model/ViewUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ConsoleViewRequest, root.Docusign.CorrectViewRequest, root.Docusign.CustomFields, root.Docusign.CustomFieldsEnvelope, root.Docusign.DocumentFieldsInformation, root.Docusign.DocumentTemplateList, root.Docusign.EmailSettings, root.Docusign.Envelope, root.Docusign.EnvelopeAuditEventResponse, root.Docusign.EnvelopeDefinition, root.Docusign.EnvelopeDocumentsResult, root.Docusign.EnvelopeIdsRequest, root.Docusign.EnvelopeSummary, root.Docusign.EnvelopeUpdateSummary, root.Docusign.EnvelopesInformation, root.Docusign.ErrorDetails, root.Docusign.LockInformation, root.Docusign.LockRequest, root.Docusign.Notification, root.Docusign.RecipientViewRequest, root.Docusign.Recipients, root.Docusign.RecipientsUpdateSummary, root.Docusign.ReturnUrlRequest, root.Docusign.Tabs, root.Docusign.TemplateInformation, root.Docusign.ViewLinkRequest, root.Docusign.ViewUrl);
  }
}(this, function(Configuration, ApiClient, ConsoleViewRequest, CorrectViewRequest, CustomFields, CustomFieldsEnvelope, DocumentFieldsInformation, DocumentTemplateList, EmailSettings, Envelope, EnvelopeAuditEventResponse, EnvelopeDefinition, EnvelopeDocumentsResult, EnvelopeIdsRequest, EnvelopeSummary, EnvelopeUpdateSummary, EnvelopesInformation, ErrorDetails, LockInformation, LockRequest, Notification, RecipientViewRequest, Recipients, RecipientsUpdateSummary, ReturnUrlRequest, Tabs, TemplateInformation, ViewLinkRequest, ViewUrl) {
  'use strict';

  /**
   * Envelopes service.
   * @module api/EnvelopesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new EnvelopesApi. 
   * @alias module:api/EnvelopesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
	this.apiClient = apiClient || ApiClient.instance || Configuration.default.getDefaultApiClient();
	  
	this.setApiClient = function(apiClient) {
	  this.apiClient = apiClient;
	};

	this.getApiClient = function() {
	  return this.apiClient;
	};


    /**
     * Callback function to receive the result of the applyTemplate operation.
     * @callback module:api/EnvelopesApi~applyTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentTemplateList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds templates to an envelope.
     * Adds templates to the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentTemplateList} opts.documentTemplateList TBD Description
     * @param {module:api/EnvelopesApi~applyTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentTemplateList}
     */
    this.applyTemplate = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentTemplateList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling applyTemplate");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling applyTemplate");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = DocumentTemplateList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applyTemplateToDocument operation.
     * @callback module:api/EnvelopesApi~applyTemplateToDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentTemplateList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds templates to a document in an  envelope.
     * Adds templates to a document in the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentTemplateList} opts.documentTemplateList TBD Description
     * @param {module:api/EnvelopesApi~applyTemplateToDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentTemplateList}
     */
    this.applyTemplateToDocument = function(accountId, envelopeId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentTemplateList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling applyTemplateToDocument");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling applyTemplateToDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling applyTemplateToDocument");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
      var returnType = DocumentTemplateList;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createConsoleView operation.
     * @callback module:api/EnvelopesApi~createConsoleViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a URL to the authentication view UI.
     * Returns a URL that allows you to embed the authentication view of the DocuSign UI in your applications.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/ConsoleViewRequest} opts.consoleViewRequest TBD Description
     * @param {module:api/EnvelopesApi~createConsoleViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createConsoleView = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['consoleViewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createConsoleView");
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
      var returnType = ViewUrl;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/views/console', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCorrectView operation.
     * @callback module:api/EnvelopesApi~createCorrectViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a URL to the envelope correction UI.
     * Returns a URL that allows you to embed the envelope correction view of the DocuSign UI in your applications.  Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/CorrectViewRequest} opts.correctViewRequest TBD Description
     * @param {module:api/EnvelopesApi~createCorrectViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createCorrectView = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['correctViewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCorrectView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createCorrectView");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/correct', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCustomFields operation.
     * @callback module:api/EnvelopesApi~createCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates envelope custom fields for an envelope.
     * Updates the envelope custom fields for draft and in-process envelopes.  Each custom field used in an envelope must have a unique name.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomFields} opts.customFields TBD Description
     * @param {module:api/EnvelopesApi~createCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.createCustomFields = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['customFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCustomFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createCustomFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDocumentFields operation.
     * @callback module:api/EnvelopesApi~createDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates custom document fields in an existing envelope document.
     * Creates custom document fields in an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation TBD Description
     * @param {module:api/EnvelopesApi~createDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.createDocumentFields = function(accountId, envelopeId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createDocumentFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling createDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createEditView operation.
     * @callback module:api/EnvelopesApi~createEditViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a URL to the edit view UI.
     * Returns a URL that allows you to embed the edit view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign editing view.   Upon sending completion, the user is returned to the return URL provided by the API application.  Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/ReturnUrlRequest} opts.returnUrlRequest TBD Description
     * @param {module:api/EnvelopesApi~createEditViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createEditView = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['returnUrlRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEditView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createEditView");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createEmailSettings operation.
     * @callback module:api/EnvelopesApi~createEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds email setting overrides to an envelope.
     * Adds email override settings, changing the email address to reply to an email address, name, or the BCC for email archive information, for the envelope. Note that adding email settings will only affect email communications that occur after the addition was made.  ### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/EmailSettings} opts.emailSettings TBD Description
     * @param {module:api/EnvelopesApi~createEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSettings}
     */
    this.createEmailSettings = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['emailSettings'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEmailSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createEmailSettings");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EmailSettings;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

	/**
	 * Creates an envelope.
   * Creates an envelope.   Using this function you can: * Create an envelope and send it. * Create an envelope from an existing template and send it.  In either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the &#x60;status&#x60; property in the request to &#x60;created&#x60; instead of &#x60;sent&#x60;.  ### Send an Envelope or Create a Draft Envelope  This is a multi-part/form request.  Envelope Event Notification: &#x60;eventNotification&#x60; is an optional property that specifies a set of envelope and recipient status codes, a URL, and some other options. When the envelope or recipient status changes to one of the specified status codes, DocuSign sends a message containing the updated status to the specified URL.  #### Note: DocuSign Connect must be enabled to use &#x60;eventNotification&#x60;, but Connect does not need to be configured for the account since the configuration is done for each envelope.  ### Send an Envelope from a Template  When you create an envelope using a &#x60;templateId&#x60;, the &#x60;recipients&#x60; structure is used to assign recipients to template roles via the &#x60;roleName&#x60; property, override recipient settings that have been specified in the template and set values for tab fields that were defined in the template.  When a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message is used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. If an email subject or message is entered before adding or applying a locked template, the email subject and message is overwritten with the email subject and message from the locked template.  **Composite Templates**:  You can add Composite Templates structure to the  to create envelopes from a combination of DocuSign templates and PDF forms. The basic envelope remains the same, while the Composite Template adds new document and template overlays into the envelope. There can be any number of Composite Template structures in the envelope.  Each Composite Template consists of server templates, inline templates, PDF Metadata templates, and documents.  * Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the &#x60;compositeTemplateId&#x60; to which the document should be added. If &#x60;compositeTemplateId&#x60; is not specified in the content-disposition, the document is applied based on the &#x60;documentId&#x60; only. If no document object is specified, the composite template inherits the first document. * Server Templates are server-side templates stored on the DocuSign server. If supplied they are overlaid into the envelope in the order of their Sequence value. * Inline Templates provide the container to pass inline XML properties. Inline templates allow you to add documents and, for PDF documents, transform the PDF fields into DocuSign tabs. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value. * PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat&#39;s XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied the PDF meta data template will be overlaid into the envelope in the order of their Sequence value. * Document objects are optional structures that provide a container to pass in a document or form. If this object is not passed, the composite template inherits the first document it finds from some other server template or inline template, starting with the lowest sequence value (discussed below).  If there are multiple composite templates, the document content-disposition can include the &#x60;compositeTemplateId&#x60; to which the document should be added. Using the &#x60;compositeTemplateId&#x60; sets which documents are associated with particular composite templates. An example of this usage is:  &#x60;&#x60;&#x60;    --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d     Content-Type: application/pdf     Content-Disposition: file; filename&#x3D;\&quot;eula.pdf\&quot;; documentId&#x3D;1; compositeTemplateId&#x3D;\&quot;1\&quot;     Content-Transfer-Encoding: base64 &#x60;&#x60;&#x60;  Acrobat form objects are only extrapolated from the document object. DocuSign does not derive Acrobat form properties from server templates or inline templates. To instruct DocuSign to extrapolate objects from the Acrobat form, set &#x60;transformPdfFields&#x60; to \&quot;true\&quot; for the document. See the Transform PDF Fields section for more information about how fields are transformed into DocuSign tabs.  *Sequence*  Each type of template has a sequence property, which enables the templates to be over-laid in a particular order. This is significant because \&quot;last-out\&quot; wins in cases of the same property being specified in multiple places in the method schema.  **Merge Recipient Roles for Draft Envelopes**  When an envelope with multiple templates is sent, the recipients from the templates are merged according to template roles and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.  To prevent this, the query parameter &#x60;merge_roles_on_draft&#x60; should be added when posting a draft envelope (status&#x3D;created) with multiple templates. Doing this will merge template roles and remove empty recipients.  #### Note: DocuSign recommends that the merge roles query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.  **Template Email Subject Merge Fields**  This provides the ability to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.  The merge fields, based on the recipient’s &#x60;roleName&#x60;, are added to the &#x60;emailSubject&#x60; when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.  Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.  If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.  * To add a recipient’s name in the subject line add the following text in the &#x60;emailSubject&#x60; when creating the template or when sending an envelope from a template:     [[&lt;roleName&gt;_UserName]]     Example:     &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,&#x60;  * To add a recipient’s email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:     [[&lt;roleName&gt;_Email]]     Example:     &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,&#x60;  In both cases the &lt;roleName&gt; is the recipient’s &#x60;roleName&#x60; in the template.  For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.  *Rules for determining the &#x60;brandId&#x60; used in an envelope*  The following rules are used to determine the &#x60;brandId&#x60; used in an envelope:  * If a &#x60;brandId&#x60; is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope. * If more than one template is used in an envelope and more than one &#x60;brandId&#x60; is specified, the first &#x60;brandId&#x60; specified is used throughout the envelope. * In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account’s default signing brand is used. * For envelopes that do not meet any of the previous rules, the account&#39;s default signing brand is used in the envelope.  ### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.
	*/
	this.CreateEnvelopeOptions = function () {
	  var completedDocumentsOnly = null;
	  var mergeRolesOnDraft = null;
	  var cdseMode = null;
	  
	  this.setCompletedDocumentsOnly = function(completedDocumentsOnly) {
	    this.completedDocumentsOnly = completedDocumentsOnly;
	  }
	
	  this.getCompletedDocumentsOnly = function() {
	    return this.completedDocumentsOnly;
	  }

	  /*
	   * When set to **true**, merges template roles and remove empty recipients when you create an envelope with multiple templates.
	   */
	  this.setMergeRolesOnDraft = function(mergeRolesOnDraft) {
	    this.mergeRolesOnDraft = mergeRolesOnDraft;
	  }
	
	  this.getMergeRolesOnDraft = function() {
	    return this.mergeRolesOnDraft;
	  }

	  this.setCdseMode = function(cdseMode) {
	    this.cdseMode = cdseMode;
	  }
	
	  this.getCdseMode = function() {
	    return this.cdseMode;
	  }
	}

    /**
     * Callback function to receive the result of the createEnvelope operation.
     * @callback module:api/EnvelopesApi~createEnvelopeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an envelope.
     * Creates an envelope.   Using this function you can: * Create an envelope and send it. * Create an envelope from an existing template and send it.  In either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the &#x60;status&#x60; property in the request to &#x60;created&#x60; instead of &#x60;sent&#x60;.  ### Send an Envelope or Create a Draft Envelope  This is a multi-part/form request.  Envelope Event Notification: &#x60;eventNotification&#x60; is an optional property that specifies a set of envelope and recipient status codes, a URL, and some other options. When the envelope or recipient status changes to one of the specified status codes, DocuSign sends a message containing the updated status to the specified URL.  #### Note: DocuSign Connect must be enabled to use &#x60;eventNotification&#x60;, but Connect does not need to be configured for the account since the configuration is done for each envelope.  ### Send an Envelope from a Template  When you create an envelope using a &#x60;templateId&#x60;, the &#x60;recipients&#x60; structure is used to assign recipients to template roles via the &#x60;roleName&#x60; property, override recipient settings that have been specified in the template and set values for tab fields that were defined in the template.  When a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message is used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. If an email subject or message is entered before adding or applying a locked template, the email subject and message is overwritten with the email subject and message from the locked template.  **Composite Templates**:  You can add Composite Templates structure to the  to create envelopes from a combination of DocuSign templates and PDF forms. The basic envelope remains the same, while the Composite Template adds new document and template overlays into the envelope. There can be any number of Composite Template structures in the envelope.  Each Composite Template consists of server templates, inline templates, PDF Metadata templates, and documents.  * Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the &#x60;compositeTemplateId&#x60; to which the document should be added. If &#x60;compositeTemplateId&#x60; is not specified in the content-disposition, the document is applied based on the &#x60;documentId&#x60; only. If no document object is specified, the composite template inherits the first document. * Server Templates are server-side templates stored on the DocuSign server. If supplied they are overlaid into the envelope in the order of their Sequence value. * Inline Templates provide the container to pass inline XML properties. Inline templates allow you to add documents and, for PDF documents, transform the PDF fields into DocuSign tabs. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value. * PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat&#39;s XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied the PDF meta data template will be overlaid into the envelope in the order of their Sequence value. * Document objects are optional structures that provide a container to pass in a document or form. If this object is not passed, the composite template inherits the first document it finds from some other server template or inline template, starting with the lowest sequence value (discussed below).  If there are multiple composite templates, the document content-disposition can include the &#x60;compositeTemplateId&#x60; to which the document should be added. Using the &#x60;compositeTemplateId&#x60; sets which documents are associated with particular composite templates. An example of this usage is:  &#x60;&#x60;&#x60;    --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d     Content-Type: application/pdf     Content-Disposition: file; filename&#x3D;\&quot;eula.pdf\&quot;; documentId&#x3D;1; compositeTemplateId&#x3D;\&quot;1\&quot;     Content-Transfer-Encoding: base64 &#x60;&#x60;&#x60;  Acrobat form objects are only extrapolated from the document object. DocuSign does not derive Acrobat form properties from server templates or inline templates. To instruct DocuSign to extrapolate objects from the Acrobat form, set &#x60;transformPdfFields&#x60; to \&quot;true\&quot; for the document. See the Transform PDF Fields section for more information about how fields are transformed into DocuSign tabs.  *Sequence*  Each type of template has a sequence property, which enables the templates to be over-laid in a particular order. This is significant because \&quot;last-out\&quot; wins in cases of the same property being specified in multiple places in the method schema.  **Merge Recipient Roles for Draft Envelopes**  When an envelope with multiple templates is sent, the recipients from the templates are merged according to template roles and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.  To prevent this, the query parameter &#x60;merge_roles_on_draft&#x60; should be added when posting a draft envelope (status&#x3D;created) with multiple templates. Doing this will merge template roles and remove empty recipients.  #### Note: DocuSign recommends that the merge roles query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.  **Template Email Subject Merge Fields**  This provides the ability to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.  The merge fields, based on the recipient’s &#x60;roleName&#x60;, are added to the &#x60;emailSubject&#x60; when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.  Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.  If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.  * To add a recipient’s name in the subject line add the following text in the &#x60;emailSubject&#x60; when creating the template or when sending an envelope from a template:     [[&lt;roleName&gt;_UserName]]     Example:     &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,&#x60;  * To add a recipient’s email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:     [[&lt;roleName&gt;_Email]]     Example:     &#x60;\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,&#x60;  In both cases the &lt;roleName&gt; is the recipient’s &#x60;roleName&#x60; in the template.  For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.  *Rules for determining the &#x60;brandId&#x60; used in an envelope*  The following rules are used to determine the &#x60;brandId&#x60; used in an envelope:  * If a &#x60;brandId&#x60; is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope. * If more than one template is used in an envelope and more than one &#x60;brandId&#x60; is specified, the first &#x60;brandId&#x60; specified is used throughout the envelope. * In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account’s default signing brand is used. * For envelopes that do not meet any of the previous rules, the account&#39;s default signing brand is used in the envelope.  ### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.completedDocumentsOnly 
     * @param {String} opts.mergeRolesOnDraft When set to **true**, merges template roles and remove empty recipients when you create an envelope with multiple templates.
     * @param {String} opts.cdseMode 
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition TBD Description
     * @param {module:api/EnvelopesApi~createEnvelopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeSummary}
     */
    this.createEnvelope = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEnvelope");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'completed_documents_only': opts['completedDocumentsOnly'],
        'merge_roles_on_draft': opts['mergeRolesOnDraft'],
        'cdse_mode': opts['cdseMode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeSummary;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLock operation.
     * @callback module:api/EnvelopesApi~createLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lock an envelope.
     * Locks the specified envelope, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the envelope.  Note: Users must have envelope locking capability enabled to use this function (userSetting &#x60;canLockEnvelopes&#x60; must be  set to true for the user).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockRequest} opts.lockRequest TBD Description
     * @param {module:api/EnvelopesApi~createLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.createLock = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createLock");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createLock");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRecipient operation.
     * @callback module:api/EnvelopesApi~createRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds one or more recipients to an envelope.
     * Adds one or more recipients to an envelope.  For an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient&#39;s routing order is before or the same as the envelope&#39;s next recipient, an email is only sent if the optional &#x60;resend_envelope&#x60; query string is set to **true**.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/Recipients} opts.recipients TBD Description
     * @param {module:api/EnvelopesApi~createRecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.createRecipient = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['recipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRecipient");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createRecipient");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRecipientView operation.
     * @callback module:api/EnvelopesApi~createRecipientViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a URL to the recipient view UI.
     * Returns a URL that allows you to embed the recipient view of the DocuSign UI in your applications. This call cannot be used to view draft envelopes, since those envelopes have not been sent.   Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView.   An entry is added into the Security Level section of the DocuSign Certificate of Completion that reflects the &#x60;securityDomain&#x60; and &#x60;authenticationMethod&#x60; properties used to verify the user identity.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/RecipientViewRequest} opts.recipientViewRequest TBD Description
     * @param {module:api/EnvelopesApi~createRecipientViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createRecipientView = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['recipientViewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRecipientView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createRecipientView");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/recipient', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSenderView operation.
     * @callback module:api/EnvelopesApi~createSenderViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a URL to the sender view UI.
     * Returns a URL that allows you to embed the sender view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign sending view.   Upon sending completion, the user is returned to the return URL provided by the API application.  Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/ReturnUrlRequest} opts.returnUrlRequest TBD Description
     * @param {module:api/EnvelopesApi~createSenderViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createSenderView = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['returnUrlRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createSenderView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createSenderView");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/sender', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTabs operation.
     * @callback module:api/EnvelopesApi~createTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds tabs for a recipient.
     * Adds one or more tabs for a recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/Tabs} opts.tabs TBD Description
     * @param {module:api/EnvelopesApi~createTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.createTabs = function(accountId, envelopeId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['tabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling createTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createViewLink operation.
     * @callback module:api/EnvelopesApi~createViewLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved: Returns a URL to the secure link view UI.
     * Reserved: Returns a URL that allows you to embed the secure link view of the DocuSign UI in your applications.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/ViewLinkRequest} opts.viewLinkRequest TBD Description
     * @param {module:api/EnvelopesApi~createViewLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createViewLink = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['viewLinkRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createViewLink");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createViewLink");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/viewlink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomFields operation.
     * @callback module:api/EnvelopesApi~deleteCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes envelope custom fields for draft and in-process envelopes.
     * Deletes envelope custom fields for draft and in-process envelopes.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomFields} opts.customFields TBD Description
     * @param {module:api/EnvelopesApi~deleteCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.deleteCustomFields = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['customFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCustomFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteCustomFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDocumentFields operation.
     * @callback module:api/EnvelopesApi~deleteDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes custom document fields from an existing envelope document.
     * Deletes custom document fields from an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation TBD Description
     * @param {module:api/EnvelopesApi~deleteDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.deleteDocumentFields = function(accountId, envelopeId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocumentFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDocumentPage operation.
     * @callback module:api/EnvelopesApi~deleteDocumentPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a page from a document in an envelope.
     * Deletes a page from a document in an envelope based on the page number.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {module:api/EnvelopesApi~deleteDocumentPageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDocumentPage = function(accountId, envelopeId, documentId, pageNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocumentPage");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteDocumentPage");
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
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDocuments operation.
     * @callback module:api/EnvelopesApi~deleteDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocumentsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes documents from a draft envelope.
     * Deletes one or more documents from an existing draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition TBD Description
     * @param {module:api/EnvelopesApi~deleteDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocumentsResult}
     */
    this.deleteDocuments = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocuments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteDocuments");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EnvelopeDocumentsResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEmailSettings operation.
     * @callback module:api/EnvelopesApi~deleteEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the email setting overrides for an envelope.
     * Deletes all existing email override settings for the envelope. If you want to delete an individual email override setting, use the PUT and set the value to an empty string. Note that deleting email settings will only affect email communications that occur after the deletion and the normal account email settings are used for future email communications.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~deleteEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSettings}
     */
    this.deleteEmailSettings = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteEmailSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteEmailSettings");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EmailSettings;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLock operation.
     * @callback module:api/EnvelopesApi~deleteLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an envelope lock.
     * Deletes the lock from the specified envelope. The &#x60;X-DocuSign-Edit&#x60; header must be included in the request.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~deleteLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.deleteLock = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteLock");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteLock");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRecipient operation.
     * @callback module:api/EnvelopesApi~deleteRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a recipient from an envelope.
     * Deletes the specified recipient file from the specified envelope. This cannot be used if the envelope has been sent.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/EnvelopesApi~deleteRecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.deleteRecipient = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipient");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteRecipient");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteRecipient");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRecipients operation.
     * @callback module:api/EnvelopesApi~deleteRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes recipients from an envelope.
     * Deletes one or more recipients from a draft or sent envelope. Recipients to be deleted are listed in the request, with the &#x60;recipientId&#x60; being used as the key for deleting recipients.  If the envelope is &#x60;In Process&#x60;, meaning that it has been sent and has not  been completed or voided, recipients that have completed their actions cannot be deleted.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/Recipients} opts.recipients TBD Description
     * @param {module:api/EnvelopesApi~deleteRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.deleteRecipients = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['recipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTabs operation.
     * @callback module:api/EnvelopesApi~deleteTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the tabs associated with a recipient.
     * Deletes one or more tabs associated with a recipient in a draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/Tabs} opts.tabs TBD Description
     * @param {module:api/EnvelopesApi~deleteTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.deleteTabs = function(accountId, envelopeId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['tabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling deleteTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTemplatesFromDocument operation.
     * @callback module:api/EnvelopesApi~deleteTemplatesFromDocumentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a template from a document in an existing envelope.
     * Deletes the specified template from a document in an existing envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} templateId The ID of the template being accessed.
     * @param {module:api/EnvelopesApi~deleteTemplatesFromDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTemplatesFromDocument = function(accountId, envelopeId, documentId, templateId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteTemplatesFromDocument");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteTemplatesFromDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteTemplatesFromDocument");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteTemplatesFromDocument");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates/{templateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteViewLink operation.
     * @callback module:api/EnvelopesApi~deleteViewLinkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reserved: Expires a secure view link.
     * Reserved: Expires a secure view link
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~deleteViewLinkCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteViewLink = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteViewLink");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteViewLink");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/viewlink', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDocument operation.
     * @callback module:api/EnvelopesApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a document from an envelope.
     * Retrieves the specified document from the envelope. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.  You can also use this method to retrieve a PDF containing the combined content of all documents and the certificate. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.   To retrieve the combined content replace the &#x60;{documentId}&#x60; parameter in the endpoint with &#x60;combined&#x60;. /accounts/{accountId}/envelopes/{envelopeId}/documents/combined
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/EnvelopesApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocument = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocument");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocument");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailSettings operation.
     * @callback module:api/EnvelopesApi~getEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the email setting overrides for an envelope.
     * Retrieves the email override settings for the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~getEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSettings}
     */
    this.getEmailSettings = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEmailSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getEmailSettings");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EmailSettings;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

	/**
	 * Gets the status of a envelope.
   * Retrieves the overall status for the specified envelope.
	*/
	this.GetEnvelopeOptions = function () {
	  var include = null;
	  
	  this.setInclude = function(include) {
	    this.include = include;
	  }
	
	  this.getInclude = function() {
	    return this.include;
	  }
	}

    /**
     * Callback function to receive the result of the getEnvelope operation.
     * @callback module:api/EnvelopesApi~getEnvelopeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Envelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the status of a envelope.
     * Retrieves the overall status for the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include 
     * @param {module:api/EnvelopesApi~getEnvelopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Envelope}
     */
    this.getEnvelope = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEnvelope");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getEnvelope");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = Envelope;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLock operation.
     * @callback module:api/EnvelopesApi~getLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets envelope lock information.
     * Retrieves general information about the envelope lock.  If the call is made by the locked by user and the request has the same integrator key as original, then the &#x60;X-DocuSign-Edit&#x60; header and additional lock information is included in the response. This allows users to recover a lost editing session token and the &#x60;X-DocuSign-Edit&#x60; header.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~getLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.getLock = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getLock");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getLock");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotificationSettings operation.
     * @callback module:api/EnvelopesApi~getNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets envelope notification information.
     * Retrieves the envelope notification, reminders and expirations, information for an existing envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~getNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.getNotificationSettings = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getNotificationSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getNotificationSettings");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAuditEvents operation.
     * @callback module:api/EnvelopesApi~listAuditEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeAuditEventResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the envelope audit events for an envelope.
     * Gets the envelope audit events for the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~listAuditEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeAuditEventResponse}
     */
    this.listAuditEvents = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listAuditEvents");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listAuditEvents");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EnvelopeAuditEventResponse;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/audit_events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCustomFields operation.
     * @callback module:api/EnvelopesApi~listCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFieldsEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the custom field information for the specified envelope.
     * Retrieves the custom field information for the specified envelope. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes, and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.  There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. With a list custom field, the sender selects the value of the field from a pre-made list.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~listCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFieldsEnvelope}
     */
    this.listCustomFields = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listCustomFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listCustomFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = CustomFieldsEnvelope;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listDocumentFields operation.
     * @callback module:api/EnvelopesApi~listDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the custom document fields from an  existing envelope document.
     * Retrieves the custom document field information from an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/EnvelopesApi~listDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.listDocumentFields = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDocumentFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling listDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listDocuments operation.
     * @callback module:api/EnvelopesApi~listDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocumentsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of envelope documents.
     * Retrieves a list of documents associated with the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~listDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocumentsResult}
     */
    this.listDocuments = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDocuments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listDocuments");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EnvelopeDocumentsResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listRecipients operation.
     * @callback module:api/EnvelopesApi~listRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the status of recipients for an envelope.
     * Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list.   The &#x60;currentRoutingOrder&#x60; property of the response contains the &#x60;routingOrder&#x60; value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~listRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.listRecipients = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listStatus operation.
     * @callback module:api/EnvelopesApi~listStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopesInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the envelope status for the specified envelopes.
     * Retrieves the envelope status for the specified envelopes.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvelopeIdsRequest} opts.envelopeIdsRequest TBD Description
     * @param {module:api/EnvelopesApi~listStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopesInformation}
     */
    this.listStatus = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeIdsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listStatus");
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
      var returnType = EnvelopesInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

	/**
	 * Gets status changes for one or more envelopes.
   * Retrieves envelope status changes for all envelopes. You can modify the information returned by adding query strings to limit the request to check between certain dates and times, or for certain envelopes, or for certain status codes. It is recommended that you use one or more of the query strings in order to limit the size of the response.  ### Important: Unless you are requesting the status for specific envelopes (using the &#x60;envelopeIds&#x60; or &#x60;transactionIds&#x60; properties), you must add a set the &#x60;from_date&#x60; property in the request.  Getting envelope status using &#x60;transactionIds&#x60; is useful for offline signing situations where it can be used determine if an envelope was created or not, for the cases where a network connection was lost, before the envelope status could be returned.  ### Request Envelope Status Notes ###  The REST API GET /envelopes call uses certain filters to find results. In some cases requests are check for \&quot;any status change\&quot; instead of the just the single status requested. In these cases, more envelopes might be returned by the request than otherwise would be. For example, for a request with the begin date is set to Jan 1st, an end date set to Jan 7th and the status qualifier (&#x60;from_to_status&#x60;) set to &#x60;Delivered&#x60; &amp;mdash; the response set might contain envelopes that were created during that time period, but not delivered during the time period.  To avoid unnecessary database queries, the DocuSign system checks requests to ensure that the added filters will not result in a zero-size response before acting on the request. The following table shows the valid envelope statuses (in the Valid Current Statuses column) for the status qualifiers in the request. If the status and status qualifiers in the API request do not contain any of the values shown in the valid current statuses column, then an empty list is returned.  For example, a request with a status qualifier (from_to_status) of &#x60;Delivered&#x60; and a status of \&quot;&#x60;Created&#x60;,&#x60;Sent&#x60;\&quot;, DocuSign will always return an empty list. This is because the request essentially translates to: find the envelopes that were delivered between the begin and end dates that have a current status of &#x60;Created&#x60; or &#x60;Sent&#x60;, and since an envelope that has been delivered can never have a status of &#x60;Created&#x60; or &#x60;Sent&#x60;, a zero-size response would be generated. In this case, DocuSign does not run the request, but just returns the empty list.  Client applications should check that the statuses they are requesting make sense for a given status qualifier.
	*/
	this.ListStatusChangesOptions = function () {
	  var intersectingFolderIds = null;
	  var envelopeIds = null;
	  var exclude = null;
	  var folderIds = null;
	  var folderTypes = null;
	  var fromDate = null;
	  var fromToStatus = null;
	  var include = null;
	  var email = null;
	  var order = null;
	  var orderBy = null;
	  var userId = null;
	  var powerformids = null;
	  var searchText = null;
	  var startPosition = null;
	  var status = null;
	  var customField = null;
	  var transactionIds = null;
	  var userFilter = null;
	  var userName = null;
	  var toDate = null;
	  var acStatus = null;
	  var block = null;
	  var count = null;
	  
	  this.setIntersectingFolderIds = function(intersectingFolderIds) {
	    this.intersectingFolderIds = intersectingFolderIds;
	  }
	
	  this.getIntersectingFolderIds = function() {
	    return this.intersectingFolderIds;
	  }

	  this.setEnvelopeIds = function(envelopeIds) {
	    this.envelopeIds = envelopeIds;
	  }
	
	  this.getEnvelopeIds = function() {
	    return this.envelopeIds;
	  }

	  this.setExclude = function(exclude) {
	    this.exclude = exclude;
	  }
	
	  this.getExclude = function() {
	    return this.exclude;
	  }

	  this.setFolderIds = function(folderIds) {
	    this.folderIds = folderIds;
	  }
	
	  this.getFolderIds = function() {
	    return this.folderIds;
	  }

	  this.setFolderTypes = function(folderTypes) {
	    this.folderTypes = folderTypes;
	  }
	
	  this.getFolderTypes = function() {
	    return this.folderTypes;
	  }

	  /*
	   * The date/time setting that specifies the date/time when the request begins checking for status changes for envelopes in the account.  This is required unless &#39;envelopeId&#39;s are used.
	   */
	  this.setFromDate = function(fromDate) {
	    this.fromDate = fromDate;
	  }
	
	  this.getFromDate = function() {
	    return this.fromDate;
	  }

	  /*
	   * This is the status type checked for in the &#x60;from_date&#x60;/&#x60;to_date&#x60; period. If &#x60;changed&#x60; is specified, then envelopes that changed status during the period are found. If for example, &#x60;created&#x60; is specified, then envelopes created during the period are found. Default is &#x60;changed&#x60;.   Possible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
	   */
	  this.setFromToStatus = function(fromToStatus) {
	    this.fromToStatus = fromToStatus;
	  }
	
	  this.getFromToStatus = function() {
	    return this.fromToStatus;
	  }

	  this.setInclude = function(include) {
	    this.include = include;
	  }
	
	  this.getInclude = function() {
	    return this.include;
	  }

	  this.setEmail = function(email) {
	    this.email = email;
	  }
	
	  this.getEmail = function() {
	    return this.email;
	  }

	  this.setOrder = function(order) {
	    this.order = order;
	  }
	
	  this.getOrder = function() {
	    return this.order;
	  }

	  this.setOrderBy = function(orderBy) {
	    this.orderBy = orderBy;
	  }
	
	  this.getOrderBy = function() {
	    return this.orderBy;
	  }

	  this.setUserId = function(userId) {
	    this.userId = userId;
	  }
	
	  this.getUserId = function() {
	    return this.userId;
	  }

	  this.setPowerformids = function(powerformids) {
	    this.powerformids = powerformids;
	  }
	
	  this.getPowerformids = function() {
	    return this.powerformids;
	  }

	  this.setSearchText = function(searchText) {
	    this.searchText = searchText;
	  }
	
	  this.getSearchText = function() {
	    return this.searchText;
	  }

	  this.setStartPosition = function(startPosition) {
	    this.startPosition = startPosition;
	  }
	
	  this.getStartPosition = function() {
	    return this.startPosition;
	  }

	  /*
	   * The list of current statuses to include in the response. By default, all envelopes found are returned. If values are specified, then of the envelopes found, only those with the current status specified are returned in the results.   Possible values are: Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
	   */
	  this.setStatus = function(status) {
	    this.status = status;
	  }
	
	  this.getStatus = function() {
	    return this.status;
	  }

	  /*
	   * This specifies the envelope custom field name and value searched for in the envelope information. The value portion of the query can use partial strings by adding &#39;%&#39; (percent sign) around the custom field query value.   Example 1: If you have an envelope custom field called \&quot;Region\&quot; and you want to search for all envelopes where the value is \&quot;West\&quot; you would use the query: &#x60;?custom_field&#x3D;Region&#x3D;West&#x60;.   Example 2: To search for envelopes where the &#x60;ApplicationID&#x60; custom field has the value or partial value of \&quot;DocuSign\&quot; in field, the query would be: &#x60;?custom_field&#x3D;ApplicationId&#x3D;%DocuSign%&#x60; This would find envelopes where the custom field value is \&quot;DocuSign for Salesforce\&quot; or \&quot;DocuSign envelope.\&quot;  
	   */
	  this.setCustomField = function(customField) {
	    this.customField = customField;
	  }
	
	  this.getCustomField = function() {
	    return this.customField;
	  }

	  /*
	   * If included in the query string, this is a comma separated list of envelope &#x60;transactionId&#x60;s.   If included in the &#x60;request_body&#x60;, this is a list of envelope &#x60;transactionId&#x60;s.   #### Note: &#x60;transactionId&#x60;s are only valid in the DocuSign system for seven days. 
	   */
	  this.setTransactionIds = function(transactionIds) {
	    this.transactionIds = transactionIds;
	  }
	
	  this.getTransactionIds = function() {
	    return this.transactionIds;
	  }

	  this.setUserFilter = function(userFilter) {
	    this.userFilter = userFilter;
	  }
	
	  this.getUserFilter = function() {
	    return this.userFilter;
	  }

	  this.setUserName = function(userName) {
	    this.userName = userName;
	  }
	
	  this.getUserName = function() {
	    return this.userName;
	  }

	  /*
	   * Optional date/time setting that specifies the date/time when the request stops for status changes for envelopes in the account. If no entry, the system uses the time of the call as the &#x60;to_date&#x60;. 
	   */
	  this.setToDate = function(toDate) {
	    this.toDate = toDate;
	  }
	
	  this.getToDate = function() {
	    return this.toDate;
	  }

	  /*
	   * Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
	   */
	  this.setAcStatus = function(acStatus) {
	    this.acStatus = acStatus;
	  }
	
	  this.getAcStatus = function() {
	    return this.acStatus;
	  }

	  this.setBlock = function(block) {
	    this.block = block;
	  }
	
	  this.getBlock = function() {
	    return this.block;
	  }

	  this.setCount = function(count) {
	    this.count = count;
	  }
	
	  this.getCount = function() {
	    return this.count;
	  }
	}

    /**
     * Callback function to receive the result of the listStatusChanges operation.
     * @callback module:api/EnvelopesApi~listStatusChangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopesInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets status changes for one or more envelopes.
     * Retrieves envelope status changes for all envelopes. You can modify the information returned by adding query strings to limit the request to check between certain dates and times, or for certain envelopes, or for certain status codes. It is recommended that you use one or more of the query strings in order to limit the size of the response.  ### Important: Unless you are requesting the status for specific envelopes (using the &#x60;envelopeIds&#x60; or &#x60;transactionIds&#x60; properties), you must add a set the &#x60;from_date&#x60; property in the request.  Getting envelope status using &#x60;transactionIds&#x60; is useful for offline signing situations where it can be used determine if an envelope was created or not, for the cases where a network connection was lost, before the envelope status could be returned.  ### Request Envelope Status Notes ###  The REST API GET /envelopes call uses certain filters to find results. In some cases requests are check for \&quot;any status change\&quot; instead of the just the single status requested. In these cases, more envelopes might be returned by the request than otherwise would be. For example, for a request with the begin date is set to Jan 1st, an end date set to Jan 7th and the status qualifier (&#x60;from_to_status&#x60;) set to &#x60;Delivered&#x60; &amp;mdash; the response set might contain envelopes that were created during that time period, but not delivered during the time period.  To avoid unnecessary database queries, the DocuSign system checks requests to ensure that the added filters will not result in a zero-size response before acting on the request. The following table shows the valid envelope statuses (in the Valid Current Statuses column) for the status qualifiers in the request. If the status and status qualifiers in the API request do not contain any of the values shown in the valid current statuses column, then an empty list is returned.  For example, a request with a status qualifier (from_to_status) of &#x60;Delivered&#x60; and a status of \&quot;&#x60;Created&#x60;,&#x60;Sent&#x60;\&quot;, DocuSign will always return an empty list. This is because the request essentially translates to: find the envelopes that were delivered between the begin and end dates that have a current status of &#x60;Created&#x60; or &#x60;Sent&#x60;, and since an envelope that has been delivered can never have a status of &#x60;Created&#x60; or &#x60;Sent&#x60;, a zero-size response would be generated. In this case, DocuSign does not run the request, but just returns the empty list.  Client applications should check that the statuses they are requesting make sense for a given status qualifier.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.intersectingFolderIds 
     * @param {String} opts.envelopeIds 
     * @param {String} opts.exclude 
     * @param {String} opts.folderIds 
     * @param {String} opts.folderTypes 
     * @param {String} opts.fromDate The date/time setting that specifies the date/time when the request begins checking for status changes for envelopes in the account.  This is required unless &#39;envelopeId&#39;s are used.
     * @param {String} opts.fromToStatus This is the status type checked for in the &#x60;from_date&#x60;/&#x60;to_date&#x60; period. If &#x60;changed&#x60; is specified, then envelopes that changed status during the period are found. If for example, &#x60;created&#x60; is specified, then envelopes created during the period are found. Default is &#x60;changed&#x60;.   Possible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
     * @param {String} opts.include 
     * @param {String} opts.email 
     * @param {String} opts.order 
     * @param {String} opts.orderBy 
     * @param {String} opts.userId 
     * @param {String} opts.powerformids 
     * @param {String} opts.searchText 
     * @param {String} opts.startPosition 
     * @param {String} opts.status The list of current statuses to include in the response. By default, all envelopes found are returned. If values are specified, then of the envelopes found, only those with the current status specified are returned in the results.   Possible values are: Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
     * @param {String} opts.customField This specifies the envelope custom field name and value searched for in the envelope information. The value portion of the query can use partial strings by adding &#39;%&#39; (percent sign) around the custom field query value.   Example 1: If you have an envelope custom field called \&quot;Region\&quot; and you want to search for all envelopes where the value is \&quot;West\&quot; you would use the query: &#x60;?custom_field&#x3D;Region&#x3D;West&#x60;.   Example 2: To search for envelopes where the &#x60;ApplicationID&#x60; custom field has the value or partial value of \&quot;DocuSign\&quot; in field, the query would be: &#x60;?custom_field&#x3D;ApplicationId&#x3D;%DocuSign%&#x60; This would find envelopes where the custom field value is \&quot;DocuSign for Salesforce\&quot; or \&quot;DocuSign envelope.\&quot;  
     * @param {String} opts.transactionIds If included in the query string, this is a comma separated list of envelope &#x60;transactionId&#x60;s.   If included in the &#x60;request_body&#x60;, this is a list of envelope &#x60;transactionId&#x60;s.   #### Note: &#x60;transactionId&#x60;s are only valid in the DocuSign system for seven days. 
     * @param {String} opts.userFilter 
     * @param {String} opts.userName 
     * @param {String} opts.toDate Optional date/time setting that specifies the date/time when the request stops for status changes for envelopes in the account. If no entry, the system uses the time of the call as the &#x60;to_date&#x60;. 
     * @param {String} opts.acStatus Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
     * @param {String} opts.block 
     * @param {String} opts.count 
     * @param {module:api/EnvelopesApi~listStatusChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopesInformation}
     */
    this.listStatusChanges = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listStatusChanges");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'intersecting_folder_ids': opts['intersectingFolderIds'],
        'envelope_ids': opts['envelopeIds'],
        'exclude': opts['exclude'],
        'folder_ids': opts['folderIds'],
        'folder_types': opts['folderTypes'],
        'from_date': opts['fromDate'],
        'from_to_status': opts['fromToStatus'],
        'include': opts['include'],
        'email': opts['email'],
        'order': opts['order'],
        'order_by': opts['orderBy'],
        'user_id': opts['userId'],
        'powerformids': opts['powerformids'],
        'search_text': opts['searchText'],
        'start_position': opts['startPosition'],
        'status': opts['status'],
        'custom_field': opts['customField'],
        'transaction_ids': opts['transactionIds'],
        'user_filter': opts['userFilter'],
        'user_name': opts['userName'],
        'to_date': opts['toDate'],
        'ac_status': opts['acStatus'],
        'block': opts['block'],
        'count': opts['count']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopesInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTabs operation.
     * @callback module:api/EnvelopesApi~listTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the tabs information for a signer or sign-in-person recipient in an envelope.
     * Retrieves information about the tabs associated with a recipient in a draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/EnvelopesApi~listTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.listTabs = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling listTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTemplates operation.
     * @callback module:api/EnvelopesApi~listTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List of Templates used in an Envelope
     * This returns a list of the templates, name and ID, used in an envelope.&lt;br/&gt;&lt;br/&gt;Note: This only returns information for server side templates.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~listTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateInformation}
     */
    this.listTemplates = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTemplates");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listTemplates");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = TemplateInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTemplatesForDocument operation.
     * @callback module:api/EnvelopesApi~listTemplatesForDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the templates associated with a document in an existing envelope.
     * Retrieves the templates associated with a document in the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/EnvelopesApi~listTemplatesForDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateInformation}
     */
    this.listTemplatesForDocument = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTemplatesForDocument");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listTemplatesForDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling listTemplatesForDocument");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
      var returnType = TemplateInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

	/**
	 * Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft
   * The Put Envelopes endpoint provides the following functionality:  * Sends the specified single draft envelope. Add {\&quot;status\&quot;:\&quot;sent\&quot;} to the request body to send the envelope.  * Voids the specified in-process envelope. Add {\&quot;status\&quot;:\&quot;voided\&quot;, \&quot;voidedReason\&quot;:\&quot;The reason for voiding the envelope\&quot;} to the request body to void the envelope.  * Replaces the current email subject and message for a draft envelope. Add {\&quot;emailSubject\&quot;:\&quot;subject\&quot;,  \&quot;emailBlurb\&quot;:\&quot;message\&quot;}  to the request body to modify the subject and message.  * Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system. Add {\&quot;purgeState\&quot;:\&quot;purge type\&quot;} to the request body.  *Additional information on purging documents*  The purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).  #### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period.  #### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents.  #### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.  When the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.  If &#x60;purgeState&#x3D;\&quot;documents_queued\&quot;&#x60; is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If &#x60;purgeState&#x3D; \&quot;documents_and_metadata_queued\&quot;&#x60; is used in the request, then the documents, attachments, and tabs are deleted.
	*/
	this.UpdateOptions = function () {
	  var resendEnvelope = null;
	  
	  /*
	   * When set to **true**, sends the specified envelope again.
	   */
	  this.setResendEnvelope = function(resendEnvelope) {
	    this.resendEnvelope = resendEnvelope;
	  }
	
	  this.getResendEnvelope = function() {
	    return this.resendEnvelope;
	  }
	}

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/EnvelopesApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeUpdateSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft
     * The Put Envelopes endpoint provides the following functionality:  * Sends the specified single draft envelope. Add {\&quot;status\&quot;:\&quot;sent\&quot;} to the request body to send the envelope.  * Voids the specified in-process envelope. Add {\&quot;status\&quot;:\&quot;voided\&quot;, \&quot;voidedReason\&quot;:\&quot;The reason for voiding the envelope\&quot;} to the request body to void the envelope.  * Replaces the current email subject and message for a draft envelope. Add {\&quot;emailSubject\&quot;:\&quot;subject\&quot;,  \&quot;emailBlurb\&quot;:\&quot;message\&quot;}  to the request body to modify the subject and message.  * Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system. Add {\&quot;purgeState\&quot;:\&quot;purge type\&quot;} to the request body.  *Additional information on purging documents*  The purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).  #### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period.  #### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents.  #### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.  When the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.  If &#x60;purgeState&#x3D;\&quot;documents_queued\&quot;&#x60; is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If &#x60;purgeState&#x3D; \&quot;documents_and_metadata_queued\&quot;&#x60; is used in the request, then the documents, attachments, and tabs are deleted.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.resendEnvelope When set to **true**, sends the specified envelope again.
     * @param {module:model/Envelope} opts.envelope TBD Description
     * @param {module:api/EnvelopesApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeUpdateSummary}
     */
    this.update = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelope'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling update");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EnvelopeUpdateSummary;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomFields operation.
     * @callback module:api/EnvelopesApi~updateCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates envelope custom fields in an envelope.
     * Updates the envelope custom fields in draft and in-process envelopes.  Each custom field used in an envelope must have a unique name. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomFields} opts.customFields TBD Description
     * @param {module:api/EnvelopesApi~updateCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.updateCustomFields = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['customFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateCustomFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateCustomFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDocumentFields operation.
     * @callback module:api/EnvelopesApi~updateDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates existing custom document fields in an existing envelope document.
     * Updates existing custom document fields in an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentFieldsInformation} opts.documentFieldsInformation TBD Description
     * @param {module:api/EnvelopesApi~updateDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.updateDocumentFields = function(accountId, envelopeId, documentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['documentFieldsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocumentFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateDocumentFields");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateDocumentFields");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDocuments operation.
     * @callback module:api/EnvelopesApi~updateDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocumentsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds one or more documents to an existing envelope document.
     * Adds one or more documents to an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/EnvelopeDefinition} opts.envelopeDefinition TBD Description
     * @param {module:api/EnvelopesApi~updateDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocumentsResult}
     */
    this.updateDocuments = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocuments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateDocuments");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EnvelopeDocumentsResult;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmailSettings operation.
     * @callback module:api/EnvelopesApi~updateEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the email setting overrides for an envelope.
     * Updates the existing email override settings for the specified envelope. Note that modifying email settings will only affect email communications that occur after the modification was made.  This can also be used to delete an individual email override setting by using an empty string for the value to be deleted.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/EmailSettings} opts.emailSettings TBD Description
     * @param {module:api/EnvelopesApi~updateEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSettings}
     */
    this.updateEmailSettings = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['emailSettings'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateEmailSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateEmailSettings");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
      var returnType = EmailSettings;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLock operation.
     * @callback module:api/EnvelopesApi~updateLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an envelope lock.
     * Updates the lock duration time or update the &#x60;lockedByApp&#x60; property information for the specified envelope. The user and integrator key must match the user specified by the &#x60;lockByUser&#x60; property and integrator key information and the &#x60;X-DocuSign-Edit&#x60; header must be included or an error will be generated.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockRequest} opts.lockRequest TBD Description
     * @param {module:api/EnvelopesApi~updateLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.updateLock = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateLock");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateLock");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRecipients operation.
     * @callback module:api/EnvelopesApi~updateRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipientsUpdateSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope.
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope.   For draft envelopes, you can edit the following properties: &#x60;email&#x60;, &#x60;userName&#x60;, &#x60;routingOrder&#x60;, &#x60;faxNumber&#x60;, &#x60;deliveryMethod&#x60;, &#x60;accessCode&#x60;, and &#x60;requireIdLookup&#x60;.  Once an envelope has been sent, you can only edit: &#x60;email&#x60;, &#x60;userName&#x60;, &#x60;signerName&#x60;, &#x60;routingOrder&#x60;, &#x60;faxNumber&#x60;, and &#x60;deliveryMethod&#x60;. You can also select to resend an envelope by using the &#x60;resend_envelope&#x60; option.  If you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/Recipients} opts.recipients TBD Description
     * @param {module:api/EnvelopesApi~updateRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipientsUpdateSummary}
     */
    this.updateRecipients = function(accountId, envelopeId, opts, callback) {
      opts = opts || {};
      var postBody = opts['recipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipients");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTabs operation.
     * @callback module:api/EnvelopesApi~updateTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the tabs for a recipient.  
     * Updates one or more tabs for a recipient in a draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} opts Optional parameters
     * @param {module:model/Tabs} opts.tabs TBD Description
     * @param {module:api/EnvelopesApi~updateTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.updateTabs = function(accountId, envelopeId, recipientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['tabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateTabs");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateTabs");
      }


      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
