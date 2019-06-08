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
	define(['Configuration', 'ApiClient', 'model/Attachment', 'model/ChunkedUploadRequest', 'model/ChunkedUploadResponse', 'model/ConsoleViewRequest', 'model/ConsumerDisclosure', 'model/CorrectViewRequest', 'model/CustomFields', 'model/CustomFieldsEnvelope', 'model/DocumentFieldsInformation', 'model/DocumentHtmlDefinition', 'model/DocumentHtmlDefinitionOriginals', 'model/DocumentHtmlDefinitions', 'model/DocumentTemplateList', 'model/DocumentVisibilityList', 'model/EmailSettings', 'model/Envelope', 'model/EnvelopeAttachmentsRequest', 'model/EnvelopeAttachmentsResult', 'model/EnvelopeAuditEventResponse', 'model/EnvelopeDefinition', 'model/EnvelopeDocument', 'model/EnvelopeDocumentsResult', 'model/EnvelopeFormData', 'model/EnvelopeIdsRequest', 'model/EnvelopeNotificationRequest', 'model/EnvelopeSummary', 'model/EnvelopeTransferRule', 'model/EnvelopeTransferRuleInformation', 'model/EnvelopeTransferRuleRequest', 'model/EnvelopeUpdateSummary', 'model/EnvelopesInformation', 'model/ErrorDetails', 'model/LockInformation', 'model/LockRequest', 'model/Notification', 'model/PageImages', 'model/PageRequest', 'model/RecipientPreviewRequest', 'model/RecipientViewRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/ReturnUrlRequest', 'model/Tabs', 'model/TemplateDocumentVisibilityList', 'model/TemplateInformation', 'model/UserSignature', 'model/ViewUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/Attachment'), require('../model/ChunkedUploadRequest'), require('../model/ChunkedUploadResponse'), require('../model/ConsoleViewRequest'), require('../model/ConsumerDisclosure'), require('../model/CorrectViewRequest'), require('../model/CustomFields'), require('../model/CustomFieldsEnvelope'), require('../model/DocumentFieldsInformation'), require('../model/DocumentHtmlDefinition'), require('../model/DocumentHtmlDefinitionOriginals'), require('../model/DocumentHtmlDefinitions'), require('../model/DocumentTemplateList'), require('../model/DocumentVisibilityList'), require('../model/EmailSettings'), require('../model/Envelope'), require('../model/EnvelopeAttachmentsRequest'), require('../model/EnvelopeAttachmentsResult'), require('../model/EnvelopeAuditEventResponse'), require('../model/EnvelopeDefinition'), require('../model/EnvelopeDocument'), require('../model/EnvelopeDocumentsResult'), require('../model/EnvelopeFormData'), require('../model/EnvelopeIdsRequest'), require('../model/EnvelopeNotificationRequest'), require('../model/EnvelopeSummary'), require('../model/EnvelopeTransferRule'), require('../model/EnvelopeTransferRuleInformation'), require('../model/EnvelopeTransferRuleRequest'), require('../model/EnvelopeUpdateSummary'), require('../model/EnvelopesInformation'), require('../model/ErrorDetails'), require('../model/LockInformation'), require('../model/LockRequest'), require('../model/Notification'), require('../model/PageImages'), require('../model/PageRequest'), require('../model/RecipientPreviewRequest'), require('../model/RecipientViewRequest'), require('../model/Recipients'), require('../model/RecipientsUpdateSummary'), require('../model/ReturnUrlRequest'), require('../model/Tabs'), require('../model/TemplateDocumentVisibilityList'), require('../model/TemplateInformation'), require('../model/UserSignature'), require('../model/ViewUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.Attachment, root.Docusign.ChunkedUploadRequest, root.Docusign.ChunkedUploadResponse, root.Docusign.ConsoleViewRequest, root.Docusign.ConsumerDisclosure, root.Docusign.CorrectViewRequest, root.Docusign.CustomFields, root.Docusign.CustomFieldsEnvelope, root.Docusign.DocumentFieldsInformation, root.Docusign.DocumentHtmlDefinition, root.Docusign.DocumentHtmlDefinitionOriginals, root.Docusign.DocumentHtmlDefinitions, root.Docusign.DocumentTemplateList, root.Docusign.DocumentVisibilityList, root.Docusign.EmailSettings, root.Docusign.Envelope, root.Docusign.EnvelopeAttachmentsRequest, root.Docusign.EnvelopeAttachmentsResult, root.Docusign.EnvelopeAuditEventResponse, root.Docusign.EnvelopeDefinition, root.Docusign.EnvelopeDocument, root.Docusign.EnvelopeDocumentsResult, root.Docusign.EnvelopeFormData, root.Docusign.EnvelopeIdsRequest, root.Docusign.EnvelopeNotificationRequest, root.Docusign.EnvelopeSummary, root.Docusign.EnvelopeTransferRule, root.Docusign.EnvelopeTransferRuleInformation, root.Docusign.EnvelopeTransferRuleRequest, root.Docusign.EnvelopeUpdateSummary, root.Docusign.EnvelopesInformation, root.Docusign.ErrorDetails, root.Docusign.LockInformation, root.Docusign.LockRequest, root.Docusign.Notification, root.Docusign.PageImages, root.Docusign.PageRequest, root.Docusign.RecipientPreviewRequest, root.Docusign.RecipientViewRequest, root.Docusign.Recipients, root.Docusign.RecipientsUpdateSummary, root.Docusign.ReturnUrlRequest, root.Docusign.Tabs, root.Docusign.TemplateDocumentVisibilityList, root.Docusign.TemplateInformation, root.Docusign.UserSignature, root.Docusign.ViewUrl);
  }
}(this, function(Configuration, ApiClient, Attachment, ChunkedUploadRequest, ChunkedUploadResponse, ConsoleViewRequest, ConsumerDisclosure, CorrectViewRequest, CustomFields, CustomFieldsEnvelope, DocumentFieldsInformation, DocumentHtmlDefinition, DocumentHtmlDefinitionOriginals, DocumentHtmlDefinitions, DocumentTemplateList, DocumentVisibilityList, EmailSettings, Envelope, EnvelopeAttachmentsRequest, EnvelopeAttachmentsResult, EnvelopeAuditEventResponse, EnvelopeDefinition, EnvelopeDocument, EnvelopeDocumentsResult, EnvelopeFormData, EnvelopeIdsRequest, EnvelopeNotificationRequest, EnvelopeSummary, EnvelopeTransferRule, EnvelopeTransferRuleInformation, EnvelopeTransferRuleRequest, EnvelopeUpdateSummary, EnvelopesInformation, ErrorDetails, LockInformation, LockRequest, Notification, PageImages, PageRequest, RecipientPreviewRequest, RecipientViewRequest, Recipients, RecipientsUpdateSummary, ReturnUrlRequest, Tabs, TemplateDocumentVisibilityList, TemplateInformation, UserSignature, ViewUrl) {
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
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional)Callback function to receive the result of the applyTemplate operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~applyTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentTemplateList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds templates to an envelope.
     * Adds templates to the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentTemplateList} optsOrCallback.documentTemplateList 
     * @param {module:api/EnvelopesApi~applyTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentTemplateList}
     */
    this.applyTemplate = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentTemplateList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling applyTemplate");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling applyTemplate");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the applyTemplateToDocument operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~applyTemplateToDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentTemplateList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds templates to a document in an  envelope.
     * Adds templates to a document in the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentTemplateList} optsOrCallback.documentTemplateList 
     * @param {module:api/EnvelopesApi~applyTemplateToDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentTemplateList}
     */
    this.applyTemplateToDocument = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentTemplateList'];

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createChunkedUpload operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createChunkedUploadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChunkedUploadResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Initiate a new ChunkedUpload.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ChunkedUploadRequest} optsOrCallback.chunkedUploadRequest 
     * @param {module:api/EnvelopesApi~createChunkedUploadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChunkedUploadResponse}
     */
    this.createChunkedUpload = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['chunkedUploadRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createChunkedUpload");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ChunkedUploadResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/chunked_uploads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createConsoleView operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createConsoleViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a URL to the authentication view UI.
     * Returns a URL that allows you to embed the authentication view of the DocuSign UI in your applications.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ConsoleViewRequest} optsOrCallback.consoleViewRequest 
     * @param {module:api/EnvelopesApi~createConsoleViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createConsoleView = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['consoleViewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createConsoleView");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ViewUrl;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/views/console', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createCorrectView operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createCorrectViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a URL to the envelope correction UI.
     * Returns a URL that allows you to embed the envelope correction view of the DocuSign UI in your applications.

Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CorrectViewRequest} optsOrCallback.correctViewRequest 
     * @param {module:api/EnvelopesApi~createCorrectViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createCorrectView = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['correctViewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCorrectView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createCorrectView");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/correct', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates envelope custom fields for an envelope.
     * Updates the envelope custom fields for draft and in-process envelopes.

Each custom field used in an envelope must have a unique name.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CustomFields} optsOrCallback.customFields 
     * @param {module:api/EnvelopesApi~createCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.createCustomFields = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['customFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCustomFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates custom document fields in an existing envelope document.
     * Creates custom document fields in an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentFieldsInformation} optsOrCallback.documentFieldsInformation 
     * @param {module:api/EnvelopesApi~createDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.createDocumentFields = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentFieldsInformation'];

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createDocumentResponsiveHtmlPreview operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createDocumentResponsiveHtmlPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitions} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Responsive HTML Preview for a document in an envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentHtmlDefinition} optsOrCallback.documentHtmlDefinition 
     * @param {module:api/EnvelopesApi~createDocumentResponsiveHtmlPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitions}
     */
    this.createDocumentResponsiveHtmlPreview = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentHtmlDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createDocumentResponsiveHtmlPreview");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createDocumentResponsiveHtmlPreview");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling createDocumentResponsiveHtmlPreview");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = DocumentHtmlDefinitions;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/responsive_html_preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds the tabs to an envelope document
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Tabs} optsOrCallback.tabs 
     * @param {module:api/EnvelopesApi~createDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.createDocumentTabs = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createDocumentTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling createDocumentTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createEditView operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createEditViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a URL to the edit view UI.
     * Returns a URL that allows you to embed the edit view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign editing view. 

Upon sending completion, the user is returned to the return URL provided by the API application.

Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ReturnUrlRequest} optsOrCallback.returnUrlRequest 
     * @param {module:api/EnvelopesApi~createEditViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createEditView = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['returnUrlRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEditView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createEditView");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createEmailSettings operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds email setting overrides to an envelope.
     * Adds email override settings, changing the email address to reply to an email address, name, or the BCC for email archive information, for the envelope. Note that adding email settings will only affect email communications that occur after the addition was made.

### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EmailSettings} optsOrCallback.emailSettings 
     * @param {module:api/EnvelopesApi~createEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSettings}
     */
    this.createEmailSettings = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['emailSettings'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEmailSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createEmailSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createEnvelope operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createEnvelopeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates an envelope.
     * Creates an envelope. 

Using this function you can:
* Create an envelope and send it.
* Create an envelope from an existing template and send it.

In either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the request's `status` property to `created` instead of `sent`.

## Sending Envelopes

Documents can be included with the Envelopes::create call itself or a template can include documents. Documents can be added by using a multi-part/form request or by using the `documentBase64` field of the [`document` object](#/definitions/document)

### Recipient Types
An [`envelopeDefinition` object](#/definitions/envelopeDefinition) is used as the method's body. Envelope recipients can be defined in the envelope or in templates. The `envelopeDefinition` object's `recipients` field is an [`EnvelopeRecipients` resource object](#/definitions/EnvelopeRecipients). It includes arrays of the seven types of recipients defined by DocuSign:

Recipient type | Object definition
-------------- | -----------------
agent (can add name and email information for later recipients/signers) | [`agent`](#/definitions/agent)
carbon copy (receives a copy of the documents) | [`carbonCopy`](#/definitions/carbonCopy)
certified delivery  (receives a copy of the documents and must acknowledge receipt) | [`certifiedDelivery`](#/definitions/certifiedDelivery)
editor (can change recipients and document fields for later recipients/signers) | [`editor`](#/definitions/editor)
in-person signer ("hosts" someone who signs in-person) | [`inPersonSigner`](#/definitions/inPersonSigner)
intermediary (can add name and email information for some later recipients/signers.) | [`intermediary`](#/definitions/intermediary)
signer (signs and/or updates document fields) | [`signer`](#/definitions/signer)

Additional information about the different types of recipients is available from the [`EnvelopeRecipients` resource page](../../EnvelopeRecipients) and from the [Developer Center](https://www.docusign.com/developer-center/explore/features/recipients)

### Tabs
Tabs (also referred to as `tags` and as `fields` in the web sending user interface), can be defined in the `envelopeDefinition`, in templates, by transforming PDF Form Fields, or by using Composite Templates (see below).

Defining tabs: the `inPersonSigner`, and `signer` recipient objects include a `tabs` field. It is an [`EnvelopeTabs` resource object](#/definitions/EnvelopeTabs). It includes arrays of the 24 different tab types available. See the [`EnvelopeTabs` resource](../../EnvelopeTabs) for more information.

## Using Templates
Envelopes use specific people or groups as recipients. Templates can specify a role, eg `account_manager.` When a template is used in an envelope, the roles must be replaced with specific people or groups.

When you create an envelope using a `templateId`, the different recipient type objects within the [`EnvelopeRecipients` object](#/definitions/EnvelopeRecipients) are used to assign recipients to the template's roles via the `roleName` property. The recipient objects can also override settings that were specified in the template, and set values for tab fields that were defined in the template.

### Message Lock
When a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message are used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. The field `messageLock` is used to lock the email subject and message.

If an email subject or message is entered before adding or applying a template with `messageLock` **true**, the email subject and message is overwritten with the locked email subject and message from the template.

## Envelope Status
The status of sent envelopes can be determined through the DocuSign webhook system or by polling. Webhooks are highly recommended: they provide your application with the quickest updates when an envelope's status changes. DocuSign limits polling to once every 15 minutes or less frequently.

When a webhook is used, DocuSign calls your application, via the URL you provide, with a notification XML message. 

See the [Webhook recipe](https://www.docusign.com/developer-center/recipes/webhook-status) for examples and live demos of using webhooks.

## Webhook Options
The two webhook options, *eventNotification* and *Connect* use the same notification mechanism and message formats. eventNotification is used to create a webhook for a specific envelope sent via the API. Connect webhooks can be used for any envelope sent from an account, from any user, from any client. 

### eventNotification Webhooks
The Envelopes::create method includes an optional [eventNotification object](#definition-eventNotification) that adds a webhook to the envelope. eventNotification webhooks are available for all DocuSign accounts with API access.

### Connect Webhooks
Connect can be used to create a webhook for all envelopes sent by all users in an account, either through the API or via other DocuSign clients (web, mobile, etc). Connect configurations are independent of specific envelopes. A Connect configuration includes a filter that may be used to limit the webhook to specific users, envelope statuses, etc. 

Connect configurations may be created and managed using the [ConnectConfigurations resource](../../Connect/ConnectConfigurations). Configurations can also be created and managed from the Administration tool accessed by selecting "Go to Admin" from the menu next to your picture on the DocuSign web app. See the Integrations/Connect section of the Admin tool. For repeatability, and to minimize support questions, creating Connect configurations via the API is recommended, especially for ISVs.

Connect is available for some DocuSign account types. Please contact DocuSign Sales for more information.

## Composite Templates

The Composite Templates feature, like [compositing in film production](https://en.wikipedia.org/wiki/Compositing), enables you to *overlay* document, recipient, and tab definitions from multiple sources, including PDF Form Field definitions, templates defined on the server, and more.

Each Composite Template consists of optional elements: server templates, inline templates, PDF Metadata templates, and documents.

* The Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information via a multi-part HTTP message. If used, the document content-disposition must include the `compositeTemplateId` to which the document should be added. If `compositeTemplateId` is not specified in the content-disposition, the document is applied based on the `documentId` only. If no document object is specified, the composite template inherits the first document.

* Server Templates are server-side templates stored on the DocuSign platform. If supplied, they are overlaid into the envelope in the order of their Sequence value.

* Inline Templates provide a container to add documents, recipients, tabs, and custom fields. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value.

* Document objects are optional structures that provide a container to pass in a document or form. If this object is not included, the composite template inherits the *first* document it finds from a server template or inline template, starting with the lowest sequence value.

PDF Form objects are only transformed from the document object. DocuSign does not derive PDF form properties from server templates or inline templates. To instruct DocuSign to transform fields from the PDF form, set `transformPdfFields` to "true" for the document. See the Transform PDF Fields section for more information about process.

* PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat's XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied, the PDF metadata template will be overlaid into the envelope in the order of its Sequence value.

### Compositing the definitions
Each Composite Template adds a new document and templates overlay into the envelope. For each Composite Template these rules are applied:

* Templates are overlaid in the order of their Sequence value.
* If Document is not passed into the Composite Template's `document` field, the *first* template's document (based on the template's Sequence value) is used.
* Last in wins in all cases except for the document (i.e. envelope information, recipient information, secure field information). There is no special casing.

For example, if you want higher security on a tab, then that needs to be specified in a later template (by sequence number) then where the tab is included. If you want higher security on a role recipient, then it needs to be in a later template then where that role recipient is specified.

* Recipient matching is based on Recipient Role and Routing Order. If there are matches, the recipient information is merged together. A final pass is done on all Composite Templates, after all template overlays have been applied, to collapse recipients with the same email, username and routing order. This prevents having the same recipients at the same routing order.

* If you specify in a template that a recipient is locked, once that recipient is overlaid the recipient attributes can no longer be changed. The only items that can be changed for the recipient in this case are the email, username, access code and IDCheckInformationInput.

* Tab matching is based on Tab Labels, Tab Types and Documents. If a Tab Label matches but the Document is not supplied, the Tab is overlaid for all the Documents.

For example, if you have a simple inline template with only one tab in it with a label and a value, the Signature, Initial, Company, Envelope ID, User Name tabs will only be matched and collapsed if they fall in the exact same X and Y locations.

* roleName and tabLabel matching is case sensitive.

* The defaultRecipient field enables you to specify which recipient the generated tabs from a PDF form are mapped to. You can also set PDF form generated tabs to a recipient other than the DefaultRecipient by specifying the mapping of the tab label that is created to one of the template recipients.

* You can use tabLabel wild carding to map a series of tabs from the PDF form. To use this you must end a tab label with "\*" and then the system matches tabs that start with the label.

* If no DefaultRecipient is specified, tabs must be explicitly mapped to recipients in order to be generated from the form. Unmapped form objects will not be generated into their DocuSign equivalents. (In the case of Signature/Initials, the tabs will be disregarded entirely; in the case of pdf text fields, the field data will be flattened on the Envelope document, but there will not be a corresponding DocuSign data tab.)

### Including the Document Content for Composite Templates
Document content can be supplied inline, using the `documentBase64` or can be included in a multi-part HTTP message. 
If a multi-part message is used and there are multiple Composite Templates, the document content-disposition can include the `compositeTemplateId` to which the document should be added. Using the `compositeTemplateId` sets which documents are associated with particular composite templates. An example of this usage is:

```
   --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d
   Content-Type: application/pdf
   Content-Disposition: file; filename="eula.pdf"; documentId=1; compositeTemplateId="1"
   Content-Transfer-Encoding: base64
```

### PDF Form Field Transformation
Only the following PDF Form FieldTypes will be transformed to DocuSign tabs: CheckBox, DateTime, ListBox, Numeric, Password, Radio, Signature, and Text

Field Properties that will be transformed: Read Only, Required, Max Length, Positions, and Initial Data.

When transforming a *PDF Form Digital Signature Field,* the following rules are used:

If the PDF Field Name Contains | Then the DocuSign Tab Will be
------- | --------
DocuSignSignHere or eSignSignHere | Signature
DocuSignSignHereOptional or eSignSignHereOptional | Optional Signature
DocuSignInitialHere or eSignInitialHere | Initials
DocuSignInitialHereOptional or eSignInitialHereOptional | Optional Initials

Any other PDF Form Digital Signature Field will be transformed to a DocuSign Signature tab

When transforming *PDF Form Text Fields,* the following rules are used:

If the PDF Field Name Contains | Then the DocuSign Tab Will be
------- | --------
DocuSignSignHere or eSignSignHere | Signature
DocuSignSignHereOptional or eSignSignHereOptional | Optional Signature
DocuSignInitialHere or eSignInitialHere | Initials
DocuSignInitialHereOptional or eSignInitialHereOptional | Optional Initials
DocuSignEnvelopeID or eSignEnvelopeID | EnvelopeID
DocuSignCompany or eSignCompany | Company
DocuSignDateSigned or eSignDateSigned | Date Signed
DocuSignTitle or eSignTitle | Title
DocuSignFullName or eSignFullName |  Full Name
DocuSignSignerAttachmentOptional or eSignSignerAttachmentOptional | Optional Signer Attachment

Any other PDF Form Text Field will be transformed to a DocuSign data (text) tab.

PDF Form Field Names that include "DocuSignIgnoreTransform" or "eSignIgnoreTransform" will not be transformed.

PDF Form Date fields will be transformed to Date Signed fields if their name includes DocuSignDateSigned or eSignDateSigned.

## Template Email Subject Merge Fields
This feature enables you to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.

The merge fields, based on the recipient's `roleName`, are added to the `emailSubject` when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.

Both the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.

If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.

* To add a recipient's name in the subject line add the following text in the `emailSubject` when creating the template or when sending an envelope from a template:

   [[<roleName>_UserName]]

   Example:

   `"emailSubject":"[[Signer 1_UserName]], Please sign this NDA",`

* To add a recipient's email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:

   [[<roleName>_Email]]

   Example:

   `"emailSubject":"[[Signer 1_Email]], Please sign this NDA",`

In both cases the <roleName> is the recipient's `roleName` in the template.

For cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[<roleName>_UserName]] or [[<roleName>_Email]] is shown in the email subject.

## Branding an envelope
The following rules are used to determine the `brandId` used in an envelope:

* If a `brandId` is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope.
* If more than one template is used in an envelope and more than one `brandId` is specified, the first `brandId` specified is used throughout the envelope.
* In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account's default signing brand is used.
* For envelopes that do not meet any of the previous criteria, the account's default signing brand is used for the envelope.

## BCC Email address feature 
The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, don't use the BCC Email field. Use a Carbon Copy or Certified Delivery Recipient type.

## Merge Recipient Roles for Draft Envelopes
When an envelope with multiple templates is sent, the recipients from the templates are merged according to the template roles, and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.

To prevent this, the query parameter `merge_roles_on_draft` should be added when posting a draft envelope (status=created) with multiple templates. Doing this will merge template roles and remove empty recipients.

###### Note: DocuSign recommends that the `merge_roles_on_draft` query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.cdseMode 
     * @param {String} optsOrCallback.changeRoutingOrder 
     * @param {String} optsOrCallback.completedDocumentsOnly If set to true then we want to set the sourceEnvelopeId to indicate that this is a\&quot;forward\&quot; envelope action
     * @param {String} optsOrCallback.mergeRolesOnDraft When set to **true**, merges template roles and remove empty recipients when you create an envelope with multiple templates.
     * @param {module:model/EnvelopeDefinition} optsOrCallback.envelopeDefinition 
     * @param {module:api/EnvelopesApi~createEnvelopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeSummary}
     */
    this.createEnvelope = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEnvelope");
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
        'cdse_mode': optsOrCallback['cdseMode'],
        'change_routing_order': optsOrCallback['changeRoutingOrder'],
        'completed_documents_only': optsOrCallback['completedDocumentsOnly'],
        'merge_roles_on_draft': optsOrCallback['mergeRolesOnDraft']
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
        '/v2.1/accounts/{accountId}/envelopes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createEnvelopeRecipientPreview operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createEnvelopeRecipientPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Provides a URL to start a recipient view of the Envelope UI
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RecipientPreviewRequest} optsOrCallback.recipientPreviewRequest 
     * @param {module:api/EnvelopesApi~createEnvelopeRecipientPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createEnvelopeRecipientPreview = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recipientPreviewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEnvelopeRecipientPreview");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createEnvelopeRecipientPreview");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/recipient_preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createEnvelopeRecipientSharedView operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createEnvelopeRecipientSharedViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Provides a URL to start a shared recipient view of the Envelope UI
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RecipientViewRequest} optsOrCallback.recipientViewRequest 
     * @param {module:api/EnvelopesApi~createEnvelopeRecipientSharedViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createEnvelopeRecipientSharedView = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recipientViewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEnvelopeRecipientSharedView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createEnvelopeRecipientSharedView");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/shared', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createEnvelopeTransferRules operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createEnvelopeTransferRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTransferRuleInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add envelope transfer rules to an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeTransferRuleRequest} optsOrCallback.envelopeTransferRuleRequest 
     * @param {module:api/EnvelopesApi~createEnvelopeTransferRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTransferRuleInformation}
     */
    this.createEnvelopeTransferRules = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeTransferRuleRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createEnvelopeTransferRules");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeTransferRuleInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/transfer_rules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createLock operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Lock an envelope.
     * Locks the specified envelope, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the envelope.

###### Note: Users must have envelope locking capability enabled to use this function (userSetting `canLockEnvelopes` must be  set to true for the user).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/LockRequest} optsOrCallback.lockRequest 
     * @param {module:api/EnvelopesApi~createLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.createLock = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createLock");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createLock");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createRecipient operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds one or more recipients to an envelope.
     * Adds one or more recipients to an envelope.

For an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient's routing order is before or the same as the envelope's next recipient, an email is only sent if the optional `resend_envelope` query string is set to **true**.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.resendEnvelope When set to **true**, resends the   envelope if the new recipient&#39;s routing order is before or the same as the envelope&#39;s next recipient.
     * @param {module:model/Recipients} optsOrCallback.recipients 
     * @param {module:api/EnvelopesApi~createRecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.createRecipient = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRecipient");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createRecipient");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {
        'resend_envelope': optsOrCallback['resendEnvelope']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createRecipientView operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createRecipientViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a URL to the recipient view UI.
     * Returns a URL that allows you to embed the recipient view of the DocuSign UI in your applications. This call cannot be used to view draft envelopes, since those envelopes have not been sent. 

Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 

An entry is added into the Security Level section of the DocuSign Certificate of Completion that reflects the `securityDomain` and `authenticationMethod` properties used to verify the user identity.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RecipientViewRequest} optsOrCallback.recipientViewRequest 
     * @param {module:api/EnvelopesApi~createRecipientViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createRecipientView = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recipientViewRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createRecipientView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createRecipientView");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/recipient', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createResponsiveHtmlPreview operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createResponsiveHtmlPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitions} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Responsive HTML Preview for all documents in an envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentHtmlDefinition} optsOrCallback.documentHtmlDefinition 
     * @param {module:api/EnvelopesApi~createResponsiveHtmlPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitions}
     */
    this.createResponsiveHtmlPreview = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentHtmlDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createResponsiveHtmlPreview");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createResponsiveHtmlPreview");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = DocumentHtmlDefinitions;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/responsive_html_preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createSenderView operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createSenderViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a URL to the sender view UI.
     * Returns a URL that allows you to embed the sender view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign sending view. 

Upon sending completion, the user is returned to the return URL provided by the API application.

Important: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ReturnUrlRequest} optsOrCallback.returnUrlRequest 
     * @param {module:api/EnvelopesApi~createSenderViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewUrl}
     */
    this.createSenderView = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['returnUrlRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createSenderView");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling createSenderView");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/views/sender', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds tabs for a recipient.
     * Adds one or more tabs for a recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Tabs} optsOrCallback.tabs 
     * @param {module:api/EnvelopesApi~createTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.createTabs = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabs'];

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createTemplateRecipientPreview operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~createTemplateRecipientPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewUrl} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Provides a URL to start a recipient view of the Envelope UI
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/RecipientPreviewRequest} optsOrCallback.recipientPreviewRequest 
     * @param {module:api/EnvelopesApi~createTemplateRecipientPreviewCallback} callback The callback function, accepting three arguments: error, data, response
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
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createTemplateRecipientPreview");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
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

      var authNames = [];
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
     * (Optional)Callback function to receive the result of the deleteAttachments operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeAttachmentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete one or more attachments from a DRAFT envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeAttachmentsRequest} optsOrCallback.envelopeAttachmentsRequest 
     * @param {module:api/EnvelopesApi~deleteAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeAttachmentsResult}
     */
    this.deleteAttachments = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeAttachmentsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteAttachments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteAttachments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = EnvelopeAttachmentsResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteChunkedUpload operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteChunkedUploadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChunkedUploadResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete an existing ChunkedUpload.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} chunkedUploadId 
     * @param {module:api/EnvelopesApi~deleteChunkedUploadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChunkedUploadResponse}
     */
    this.deleteChunkedUpload = function(accountId, chunkedUploadId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteChunkedUpload");
      }

      // verify the required parameter 'chunkedUploadId' is set
      if (chunkedUploadId == undefined || chunkedUploadId == null) {
        throw new Error("Missing the required parameter 'chunkedUploadId' when calling deleteChunkedUpload");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'chunkedUploadId': chunkedUploadId
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
      var returnType = ChunkedUploadResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes envelope custom fields for draft and in-process envelopes.
     * Deletes envelope custom fields for draft and in-process envelopes.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CustomFields} optsOrCallback.customFields 
     * @param {module:api/EnvelopesApi~deleteCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.deleteCustomFields = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['customFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCustomFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes custom document fields from an existing envelope document.
     * Deletes custom document fields from an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentFieldsInformation} optsOrCallback.documentFieldsInformation 
     * @param {module:api/EnvelopesApi~deleteDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.deleteDocumentFields = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentFieldsInformation'];

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteDocumentPage operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteDocumentPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes tabs from an envelope document
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Tabs} optsOrCallback.tabs 
     * @param {module:api/EnvelopesApi~deleteDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.deleteDocumentTabs = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocumentTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteDocuments operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocumentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes documents from a draft envelope.
     * Deletes one or more documents from an existing draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeDefinition} optsOrCallback.envelopeDefinition 
     * @param {module:api/EnvelopesApi~deleteDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocumentsResult}
     */
    this.deleteDocuments = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteDocuments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteDocuments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteEmailSettings operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteEnvelopeTransferRules operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteEnvelopeTransferRulesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete envelope transfer rules for an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeTransferRuleId 
     * @param {module:api/EnvelopesApi~deleteEnvelopeTransferRulesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEnvelopeTransferRules = function(accountId, envelopeTransferRuleId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteEnvelopeTransferRules");
      }

      // verify the required parameter 'envelopeTransferRuleId' is set
      if (envelopeTransferRuleId == undefined || envelopeTransferRuleId == null) {
        throw new Error("Missing the required parameter 'envelopeTransferRuleId' when calling deleteEnvelopeTransferRules");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeTransferRuleId': envelopeTransferRuleId
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
        '/v2.1/accounts/{accountId}/envelopes/transfer_rules/{envelopeTransferRuleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteLock operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes an envelope lock.
     * Deletes the lock from the specified envelope. The `X-DocuSign-Edit` header must be included in the request.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteRecipient operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes recipients from an envelope.
     * Deletes one or more recipients from a draft or sent envelope. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.

If the envelope is `In Process`, meaning that it has been sent and has not  been completed or voided, recipients that have completed their actions cannot be deleted.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Recipients} optsOrCallback.recipients 
     * @param {module:api/EnvelopesApi~deleteRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.deleteRecipients = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling deleteRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the tabs associated with a recipient.
     * Deletes one or more tabs associated with a recipient in a draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Tabs} optsOrCallback.tabs 
     * @param {module:api/EnvelopesApi~deleteTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.deleteTabs = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabs'];

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteTemplatesFromDocument operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~deleteTemplatesFromDocumentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates/{templateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getAttachment operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getAttachmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves an attachment from the envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} attachmentId 
     * @param {module:api/EnvelopesApi~getAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getAttachment = function(accountId, envelopeId, attachmentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAttachment");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getAttachment");
      }

      // verify the required parameter 'attachmentId' is set
      if (attachmentId == undefined || attachmentId == null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling getAttachment");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'attachmentId': attachmentId
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments/{attachmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getAttachments operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeAttachmentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a list of attachments associated with the specified envelope
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~getAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeAttachmentsResult}
     */
    this.getAttachments = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAttachments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getAttachments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = EnvelopeAttachmentsResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getChunkedUpload operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getChunkedUploadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChunkedUploadResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the current metadata of a ChunkedUpload.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} chunkedUploadId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {module:api/EnvelopesApi~getChunkedUploadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChunkedUploadResponse}
     */
    this.getChunkedUpload = function(accountId, chunkedUploadId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getChunkedUpload");
      }

      // verify the required parameter 'chunkedUploadId' is set
      if (chunkedUploadId == undefined || chunkedUploadId == null) {
        throw new Error("Missing the required parameter 'chunkedUploadId' when calling getChunkedUpload");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'chunkedUploadId': chunkedUploadId
      };
      var queryParams = {
        'include': optsOrCallback['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ChunkedUploadResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getConsumerDisclosure operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getConsumerDisclosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsumerDisclosure} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Reserved: Gets the Electronic Record and Signature Disclosure associated with the account.
     * Reserved: Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, associated with the account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {String} langCode The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to Ã¯Â¿Â½browserÃ¯Â¿Â½ to automatically detect the browser language being used by the viewer and display the disclosure in that language.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.langCode2 
     * @param {module:api/EnvelopesApi~getConsumerDisclosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsumerDisclosure}
     */
    this.getConsumerDisclosure = function(accountId, envelopeId, recipientId, langCode, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConsumerDisclosure");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getConsumerDisclosure");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getConsumerDisclosure");
      }

      // verify the required parameter 'langCode' is set
      if (langCode == undefined || langCode == null) {
        throw new Error("Missing the required parameter 'langCode' when calling getConsumerDisclosure");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'recipientId': recipientId,
        'langCode': langCode
      };
      var queryParams = {
        'langCode': optsOrCallback['langCode2']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ConsumerDisclosure;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/consumer_disclosure/{langCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getConsumerDisclosureDefault operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getConsumerDisclosureDefaultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsumerDisclosure} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the Electronic Record and Signature Disclosure associated with the account.
     * Retrieves the Electronic Record and Signature Disclosure, with html formatting, associated with the account. You can use an optional query string to set the language for the disclosure.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.langCode 
     * @param {module:api/EnvelopesApi~getConsumerDisclosureDefaultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsumerDisclosure}
     */
    this.getConsumerDisclosureDefault = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConsumerDisclosureDefault");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getConsumerDisclosureDefault");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getConsumerDisclosureDefault");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'recipientId': recipientId
      };
      var queryParams = {
        'langCode': optsOrCallback['langCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ConsumerDisclosure;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/consumer_disclosure', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getDocument operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a document from an envelope.
     * Retrieves the specified document from the envelope. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.

You can also use this method to retrieve a PDF containing the combined content of all documents and the certificate. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted. 

To retrieve the combined content replace the `{documentId}` parameter in the endpoint with `combined`.
/accounts/{accountId}/envelopes/{envelopeId}/documents/combined
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.certificate When set to **false**, the envelope signing certificate is removed from the download.
     * @param {String} optsOrCallback.documentsByUserid 
     * @param {String} optsOrCallback.encoding 
     * @param {String} optsOrCallback.encrypt When set to **true**, the PDF bytes returned in the response are encrypted for all the key managers configured on your DocuSign account. The documents can be decrypted with the KeyManager Decrypt Document API.
     * @param {String} optsOrCallback.language Specifies the language for the Certificate of Completion in the response. The supported languages, with the language value shown in parenthesis, are: Chinese Simplified (zh_CN), , Chinese Traditional (zh_TW), Dutch (nl), English US (en), French (fr), German (de), Italian (it), Japanese (ja), Korean (ko), Portuguese (pt), Portuguese (Brazil) (pt_BR), Russian (ru), Spanish (es). 
     * @param {String} optsOrCallback.recipientId 
     * @param {String} optsOrCallback.sharedUserId 
     * @param {String} optsOrCallback.showChanges When set to **true**, any changed fields for the returned PDF are highlighted in yellow and optional signatures or initials outlined in red. 
     * @param {String} optsOrCallback.watermark When set to **true**, the account has the watermark feature enabled, and the envelope is not complete, the watermark for the account is added to the PDF documents. This option can remove the watermark. 
     * @param {module:api/EnvelopesApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocument = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'documentId': documentId
      };
      var queryParams = {
        'certificate': optsOrCallback['certificate'],
        'documents_by_userid': optsOrCallback['documentsByUserid'],
        'encoding': optsOrCallback['encoding'],
        'encrypt': optsOrCallback['encrypt'],
        'language': optsOrCallback['language'],
        'recipient_id': optsOrCallback['recipientId'],
        'shared_user_id': optsOrCallback['sharedUserId'],
        'show_changes': optsOrCallback['showChanges'],
        'watermark': optsOrCallback['watermark']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getDocumentPageImage operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getDocumentPageImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a page image from an envelope for display.
     * Retrieves a page image for display from the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.dpi Sets the dpi for the image.
     * @param {String} optsOrCallback.maxHeight Sets the maximum height for the page image in pixels. The dpi is recalculated based on this setting.
     * @param {String} optsOrCallback.maxWidth Sets the maximum width for the page image in pixels. The dpi is recalculated based on this setting.
     * @param {String} optsOrCallback.showChanges 
     * @param {module:api/EnvelopesApi~getDocumentPageImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDocumentPageImage = function(accountId, envelopeId, documentId, pageNumber, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentPageImage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber == undefined || pageNumber == null) {
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
        'envelopeId': envelopeId,
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}/page_image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns tabs on the document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.pageNumbers 
     * @param {module:api/EnvelopesApi~getDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.getDocumentTabs = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDocumentTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
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
        'envelopeId': envelopeId,
        'documentId': documentId
      };
      var queryParams = {
        'page_numbers': optsOrCallback['pageNumbers']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getEmailSettings operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getEnvelope operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getEnvelopeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Envelope} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the status of a envelope.
     * Retrieves the overall status for the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.advancedUpdate When true, envelope information can be added or modified.
     * @param {String} optsOrCallback.include 
     * @param {module:api/EnvelopesApi~getEnvelopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Envelope}
     */
    this.getEnvelope = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEnvelope");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getEnvelope");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {
        'advanced_update': optsOrCallback['advancedUpdate'],
        'include': optsOrCallback['include']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getEnvelopeDocumentHtmlDefinitions operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getEnvelopeDocumentHtmlDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitionOriginals} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the Original HTML Definition used to generate the Responsive HTML for a given document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/EnvelopesApi~getEnvelopeDocumentHtmlDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitionOriginals}
     */
    this.getEnvelopeDocumentHtmlDefinitions = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEnvelopeDocumentHtmlDefinitions");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getEnvelopeDocumentHtmlDefinitions");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling getEnvelopeDocumentHtmlDefinitions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = DocumentHtmlDefinitionOriginals;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/html_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getEnvelopeHtmlDefinitions operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getEnvelopeHtmlDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentHtmlDefinitionOriginals} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the Original HTML Definition used to generate the Responsive HTML for the envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~getEnvelopeHtmlDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentHtmlDefinitionOriginals}
     */
    this.getEnvelopeHtmlDefinitions = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEnvelopeHtmlDefinitions");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getEnvelopeHtmlDefinitions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = DocumentHtmlDefinitionOriginals;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/html_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getEnvelopeTransferRules operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getEnvelopeTransferRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTransferRuleInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a list of envelope transfer rules in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.startPosition 
     * @param {module:api/EnvelopesApi~getEnvelopeTransferRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTransferRuleInformation}
     */
    this.getEnvelopeTransferRules = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEnvelopeTransferRules");
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
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeTransferRuleInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/transfer_rules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getFormData operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getFormDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeFormData} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns envelope form data for an existing envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {module:api/EnvelopesApi~getFormDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeFormData}
     */
    this.getFormData = function(accountId, envelopeId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getFormData");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getFormData");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = EnvelopeFormData;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/form_data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getLock operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets envelope lock information.
     * Retrieves general information about the envelope lock.

If the call is made by the locked by user and the request has the same integrator key as original, then the `X-DocuSign-Edit` header and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getNotificationSettings operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getPageTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getPageTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns tabs on the specified page.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {module:api/EnvelopesApi~getPageTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.getPageTabs = function(accountId, envelopeId, documentId, pageNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPageTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getPageTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling getPageTabs");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber == undefined || pageNumber == null) {
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
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getPages operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getPagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageImages} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns document page image(s) based on input.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.dpi 
     * @param {String} optsOrCallback.maxHeight 
     * @param {String} optsOrCallback.maxWidth 
     * @param {String} optsOrCallback.nocache 
     * @param {String} optsOrCallback.showChanges 
     * @param {String} optsOrCallback.startPosition 
     * @param {module:api/EnvelopesApi~getPagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageImages}
     */
    this.getPages = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPages");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getPages");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
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
        'envelopeId': envelopeId,
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageImages;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getRecipientDocumentVisibility operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getRecipientDocumentVisibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentVisibilityList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns document visibility for the recipients
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/EnvelopesApi~getRecipientDocumentVisibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentVisibilityList}
     */
    this.getRecipientDocumentVisibility = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecipientDocumentVisibility");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getRecipientDocumentVisibility");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getRecipientDocumentVisibility");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = DocumentVisibilityList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/document_visibility', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getRecipientInitialsImage operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getRecipientInitialsImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the initials image for a user.
     * Retrieves the initials image for the specified user. The image is returned in the same format as it was uploaded. In the request you can specify if the chrome (the added line and identifier around the initial image) is returned with the image.

The userId specified in the endpoint must match the authenticated user's user id and the user must be a member of the account.

The `signatureIdOrName` paramter accepts signature ID or signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly URL encode. If you use the user name, it is likely that the name includes spaces and you might need to URL encode the name before using it in the endpoint. 

For example: "Bob Smith" to "Bob%20Smith"

Older envelopes might only contain chromed images. If getting the non-chromed image fails, try getting the chromed image.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeChrome The added line and identifier around the initial image. Note: Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image.
     * @param {module:api/EnvelopesApi~getRecipientInitialsImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getRecipientInitialsImage = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecipientInitialsImage");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getRecipientInitialsImage");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getRecipientInitialsImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'recipientId': recipientId
      };
      var queryParams = {
        'include_chrome': optsOrCallback['includeChrome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/gif'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/initials_image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getRecipientSignature operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getRecipientSignatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignature} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets signature information for a signer or sign-in-person recipient.
     * Retrieves signature information for a signer or sign-in-person recipient.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/EnvelopesApi~getRecipientSignatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignature}
     */
    this.getRecipientSignature = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecipientSignature");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getRecipientSignature");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getRecipientSignature");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = UserSignature;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/signature', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getRecipientSignatureImage operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getRecipientSignatureImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieve signature image information for a signer/sign-in-person recipient.
     * Retrieves the specified user signature image. The image is returned in the same format as uploaded. In the request you can specify if the chrome (the added line and identifier around the initial image) is returned with the image.

The userId specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureIdOrName` parameter accepts signature ID or signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that don't properly URL encode. If you use the user name, it is likely that the name includes spaces and you might need to URL encode the name before using it in the endpoint. 

For example: "Bob Smith" to "Bob%20Smith"

Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeChrome When set to **true**, indicates the chromed version of the signature image should be retrieved.
     * @param {module:api/EnvelopesApi~getRecipientSignatureImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getRecipientSignatureImage = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getRecipientSignatureImage");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling getRecipientSignatureImage");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getRecipientSignatureImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'recipientId': recipientId
      };
      var queryParams = {
        'include_chrome': optsOrCallback['includeChrome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/gif'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/signature_image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getTemplateRecipientDocumentVisibility operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~getTemplateRecipientDocumentVisibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentVisibilityList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns document visibility for the recipients
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/EnvelopesApi~getTemplateRecipientDocumentVisibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentVisibilityList}
     */
    this.getTemplateRecipientDocumentVisibility = function(accountId, templateId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getTemplateRecipientDocumentVisibility");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling getTemplateRecipientDocumentVisibility");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling getTemplateRecipientDocumentVisibility");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DocumentVisibilityList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/document_visibility', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listAuditEvents operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listAuditEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeAuditEventResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/audit_events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFieldsEnvelope} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the custom field information for the specified envelope.
     * Retrieves the custom field information for the specified envelope. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes, and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.

There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. With a list custom field, the sender selects the value of the field from a pre-made list.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listDocuments operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocumentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of envelope documents.
     * Retrieves a list of documents associated with the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.documentsByUserid 
     * @param {String} optsOrCallback.includeMetadata 
     * @param {String} optsOrCallback.includeTabs 
     * @param {String} optsOrCallback.recipientId 
     * @param {String} optsOrCallback.sharedUserId 
     * @param {module:api/EnvelopesApi~listDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocumentsResult}
     */
    this.listDocuments = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listDocuments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listDocuments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {
        'documents_by_userid': optsOrCallback['documentsByUserid'],
        'include_metadata': optsOrCallback['includeMetadata'],
        'include_tabs': optsOrCallback['includeTabs'],
        'recipient_id': optsOrCallback['recipientId'],
        'shared_user_id': optsOrCallback['sharedUserId']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipients} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the status of recipients for an envelope.
     * Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list. 

The `currentRoutingOrder` property of the response contains the `routingOrder` value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeAnchorTabLocations  When set to **true** and &#x60;include_tabs&#x60; is set to **true**, all tabs with anchor tab properties are included in the response. 
     * @param {String} optsOrCallback.includeExtended  When set to **true**, the extended properties are included in the response. 
     * @param {String} optsOrCallback.includeMetadata 
     * @param {String} optsOrCallback.includeTabs When set to **true**, the tab information associated with the recipient is included in the response.
     * @param {module:api/EnvelopesApi~listRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipients}
     */
    this.listRecipients = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {
        'include_anchor_tab_locations': optsOrCallback['includeAnchorTabLocations'],
        'include_extended': optsOrCallback['includeExtended'],
        'include_metadata': optsOrCallback['includeMetadata'],
        'include_tabs': optsOrCallback['includeTabs']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listStatus operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopesInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the envelope status for the specified envelopes.
     * Retrieves the envelope status for the specified envelopes.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.acStatus 
     * @param {String} optsOrCallback.block 
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.email 
     * @param {String} optsOrCallback.envelopeIds 
     * @param {String} optsOrCallback.fromDate 
     * @param {String} optsOrCallback.fromToStatus 
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.status 
     * @param {String} optsOrCallback.toDate 
     * @param {String} optsOrCallback.transactionIds 
     * @param {String} optsOrCallback.userName 
     * @param {module:model/EnvelopeIdsRequest} optsOrCallback.envelopeIdsRequest 
     * @param {module:api/EnvelopesApi~listStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopesInformation}
     */
    this.listStatus = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeIdsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listStatus");
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
        'ac_status': optsOrCallback['acStatus'],
        'block': optsOrCallback['block'],
        'count': optsOrCallback['count'],
        'email': optsOrCallback['email'],
        'envelope_ids': optsOrCallback['envelopeIds'],
        'from_date': optsOrCallback['fromDate'],
        'from_to_status': optsOrCallback['fromToStatus'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate'],
        'transaction_ids': optsOrCallback['transactionIds'],
        'user_name': optsOrCallback['userName']
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
        '/v2.1/accounts/{accountId}/envelopes/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listStatusChanges operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listStatusChangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopesInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets status changes for one or more envelopes.
     * Retrieves envelope status changes for all envelopes. You can modify the information returned by adding query strings to limit the request to check between certain dates and times, or for certain envelopes, or for certain status codes. It is recommended that you use one or more of the query strings in order to limit the size of the response.

### Important: Unless you are requesting the status for specific envelopes (using the `envelopeIds` or `transactionIds` properties), you must add a set the `from_date` property in the request.

Getting envelope status using `transactionIds` is useful for offline signing situations where it can be used determine if an envelope was created or not, for the cases where a network connection was lost, before the envelope status could be returned.

### Request Envelope Status Notes ###

The REST API GET /envelopes call uses certain filters to find results. In some cases requests are check for "any status change" instead of the just the single status requested. In these cases, more envelopes might be returned by the request than otherwise would be. For example, for a request with the begin date is set to Jan 1st, an end date set to Jan 7th and the status qualifier (`from_to_status`) set to `Delivered` &mdash; the response set might contain envelopes that were created during that time period, but not delivered during the time period.

To avoid unnecessary database queries, the DocuSign system checks requests to ensure that the added filters will not result in a zero-size response before acting on the request. The following table shows the valid envelope statuses (in the Valid Current Statuses column) for the status qualifiers in the request. If the status and status qualifiers in the API request do not contain any of the values shown in the valid current statuses column, then an empty list is returned.

For example, a request with a status qualifier (from_to_status) of `Delivered` and a status of "`Created`,`Sent`", DocuSign will always return an empty list. This is because the request essentially translates to: find the envelopes that were delivered between the begin and end dates that have a current status of `Created` or `Sent`, and since an envelope that has been delivered can never have a status of `Created` or `Sent`, a zero-size response would be generated. In this case, DocuSign does not run the request, but just returns the empty list.

Client applications should check that the statuses they are requesting make sense for a given status qualifier.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.acStatus Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
     * @param {String} optsOrCallback.block 
     * @param {String} optsOrCallback.cdseMode 
     * @param {String} optsOrCallback.continuationToken 
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.customField This specifies the envelope custom field name and value searched for in the envelope information. The value portion of the query can use partial strings by adding &#39;%&#39; (percent sign) around the custom field query value.   Example 1: If you have an envelope custom field called \&quot;Region\&quot; and you want to search for all envelopes where the value is \&quot;West\&quot; you would use the query: &#x60;?custom_field&#x3D;Region&#x3D;West&#x60;.   Example 2: To search for envelopes where the &#x60;ApplicationID&#x60; custom field has the value or partial value of \&quot;DocuSign\&quot; in field, the query would be: &#x60;?custom_field&#x3D;ApplicationId&#x3D;%DocuSign%&#x60; This would find envelopes where the custom field value is \&quot;DocuSign for Salesforce\&quot; or \&quot;DocuSign envelope.\&quot;  
     * @param {String} optsOrCallback.email 
     * @param {String} optsOrCallback.envelopeIds 
     * @param {String} optsOrCallback.exclude 
     * @param {String} optsOrCallback.folderIds 
     * @param {String} optsOrCallback.folderTypes 
     * @param {String} optsOrCallback.fromDate The date/time setting that specifies the date/time when the request begins checking for status changes for envelopes in the account.  This is required unless &#39;envelopeId&#39;s are used.
     * @param {String} optsOrCallback.fromToStatus This is the status type checked for in the &#x60;from_date&#x60;/&#x60;to_date&#x60; period. If &#x60;changed&#x60; is specified, then envelopes that changed status during the period are found. If for example, &#x60;created&#x60; is specified, then envelopes created during the period are found. Default is &#x60;changed&#x60;.   Possible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
     * @param {String} optsOrCallback.include 
     * @param {String} optsOrCallback.includePurgeInformation 
     * @param {String} optsOrCallback.intersectingFolderIds 
     * @param {String} optsOrCallback.lastQueriedDate 
     * @param {String} optsOrCallback.order 
     * @param {String} optsOrCallback.orderBy 
     * @param {String} optsOrCallback.powerformids 
     * @param {String} optsOrCallback.queryBudget 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.status The list of current statuses to include in the response. By default, all envelopes found are returned. If values are specified, then of the envelopes found, only those with the current status specified are returned in the results.   Possible values are: Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
     * @param {String} optsOrCallback.toDate Optional date/time setting that specifies the date/time when the request stops for status changes for envelopes in the account. If no entry, the system uses the time of the call as the &#x60;to_date&#x60;. 
     * @param {String} optsOrCallback.transactionIds If included in the query string, this is a comma separated list of envelope &#x60;transactionId&#x60;s.   If included in the &#x60;request_body&#x60;, this is a list of envelope &#x60;transactionId&#x60;s.   ###### Note: &#x60;transactionId&#x60;s are only valid in the DocuSign system for seven days. 
     * @param {String} optsOrCallback.userFilter 
     * @param {String} optsOrCallback.userId 
     * @param {String} optsOrCallback.userName 
     * @param {module:api/EnvelopesApi~listStatusChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopesInformation}
     */
    this.listStatusChanges = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listStatusChanges");
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
        'ac_status': optsOrCallback['acStatus'],
        'block': optsOrCallback['block'],
        'cdse_mode': optsOrCallback['cdseMode'],
        'continuation_token': optsOrCallback['continuationToken'],
        'count': optsOrCallback['count'],
        'custom_field': optsOrCallback['customField'],
        'email': optsOrCallback['email'],
        'envelope_ids': optsOrCallback['envelopeIds'],
        'exclude': optsOrCallback['exclude'],
        'folder_ids': optsOrCallback['folderIds'],
        'folder_types': optsOrCallback['folderTypes'],
        'from_date': optsOrCallback['fromDate'],
        'from_to_status': optsOrCallback['fromToStatus'],
        'include': optsOrCallback['include'],
        'include_purge_information': optsOrCallback['includePurgeInformation'],
        'intersecting_folder_ids': optsOrCallback['intersectingFolderIds'],
        'last_queried_date': optsOrCallback['lastQueriedDate'],
        'order': optsOrCallback['order'],
        'order_by': optsOrCallback['orderBy'],
        'powerformids': optsOrCallback['powerformids'],
        'query_budget': optsOrCallback['queryBudget'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate'],
        'transaction_ids': optsOrCallback['transactionIds'],
        'user_filter': optsOrCallback['userFilter'],
        'user_id': optsOrCallback['userId'],
        'user_name': optsOrCallback['userName']
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
        '/v2.1/accounts/{accountId}/envelopes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the tabs information for a signer or sign-in-person recipient in an envelope.
     * Retrieves information about the tabs associated with a recipient in a draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeAnchorTabLocations When set to **true**, all tabs with anchor tab properties are included in the response. 
     * @param {String} optsOrCallback.includeMetadata 
     * @param {module:api/EnvelopesApi~listTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.listTabs = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listTemplates operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get List of Templates used in an Envelope
     * This returns a list of the server-side templates, their name and ID, used in an envelope.

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include The possible values are:  matching_applied - This returns template matching information for the template.
     * @param {module:api/EnvelopesApi~listTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateInformation}
     */
    this.listTemplates = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTemplates");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling listTemplates");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {
        'include': optsOrCallback['include']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listTemplatesForDocument operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~listTemplatesForDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the templates associated with a document in an existing envelope.
     * Retrieves the templates associated with a document in the specified envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {module:api/EnvelopesApi~listTemplatesForDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateInformation}
     */
    this.listTemplatesForDocument = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'documentId': documentId
      };
      var queryParams = {
        'include': optsOrCallback['include']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the putAttachment operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~putAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeAttachmentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add an attachment to a DRAFT or IN-PROCESS envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} attachmentId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Attachment} optsOrCallback.attachment 
     * @param {module:api/EnvelopesApi~putAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeAttachmentsResult}
     */
    this.putAttachment = function(accountId, envelopeId, attachmentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['attachment'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling putAttachment");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling putAttachment");
      }

      // verify the required parameter 'attachmentId' is set
      if (attachmentId == undefined || attachmentId == null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling putAttachment");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'attachmentId': attachmentId
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
      var returnType = EnvelopeAttachmentsResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments/{attachmentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the putAttachments operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~putAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeAttachmentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add one or more attachments to a DRAFT or IN-PROCESS envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeAttachmentsRequest} optsOrCallback.envelopeAttachmentsRequest 
     * @param {module:api/EnvelopesApi~putAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeAttachmentsResult}
     */
    this.putAttachments = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeAttachmentsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling putAttachments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling putAttachments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = EnvelopeAttachmentsResult;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/attachments', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the rotateDocumentPage operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~rotateDocumentPageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Rotates page image from an envelope for display.
     * Rotates page image from an envelope for display. The page image can be rotated to the left or right.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {String} pageNumber The page number being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/PageRequest} optsOrCallback.pageRequest 
     * @param {module:api/EnvelopesApi~rotateDocumentPageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rotateDocumentPage = function(accountId, envelopeId, documentId, pageNumber, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['pageRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling rotateDocumentPage");
      }

      // verify the required parameter 'pageNumber' is set
      if (pageNumber == undefined || pageNumber == null) {
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}/page_image', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the update operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeUpdateSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft
     * The Put Envelopes endpoint provides the following functionality:

* Sends the specified single draft envelope.
Add {"status":"sent"} to the request body to send the envelope.

* Voids the specified in-process envelope.
Add {"status":"voided", "voidedReason":"The reason for voiding the envelope"} to the request body to void the envelope.

* Replaces the current email subject and message for a draft envelope.
Add {"emailSubject":"subject",  "emailBlurb":"message"}  to the request body to modify the subject and message.

* Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system.
Add {"purgeState":"purge type"} to the request body.

*Additional information on purging documents*

The purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).

###### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period. 
###### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents. 
###### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.

When the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.

If `purgeState="documents_queued"` is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If `purgeState= "documents_and_metadata_queued"` is used in the request, then the documents, attachments, and tabs are deleted.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.advancedUpdate When set to **true**, allows the caller to update recipients, tabs, custom fields, notification, email settings and other envelope attributes.
     * @param {String} optsOrCallback.resendEnvelope When set to **true**, sends the specified envelope again.
     * @param {module:model/Envelope} optsOrCallback.envelope 
     * @param {module:api/EnvelopesApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeUpdateSummary}
     */
    this.update = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelope'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling update");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {
        'advanced_update': optsOrCallback['advancedUpdate'],
        'resend_envelope': optsOrCallback['resendEnvelope']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateChunkedUpload operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateChunkedUploadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChunkedUploadResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Integrity-Check and Commit a ChunkedUpload, readying it for use elsewhere.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} chunkedUploadId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.action 
     * @param {module:api/EnvelopesApi~updateChunkedUploadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChunkedUploadResponse}
     */
    this.updateChunkedUpload = function(accountId, chunkedUploadId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateChunkedUpload");
      }

      // verify the required parameter 'chunkedUploadId' is set
      if (chunkedUploadId == undefined || chunkedUploadId == null) {
        throw new Error("Missing the required parameter 'chunkedUploadId' when calling updateChunkedUpload");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'chunkedUploadId': chunkedUploadId
      };
      var queryParams = {
        'action': optsOrCallback['action']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ChunkedUploadResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateChunkedUploadPart operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateChunkedUploadPartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChunkedUploadResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add a chunk, a chunk &#39;part&#39;, to an existing ChunkedUpload.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} chunkedUploadId 
     * @param {String} chunkedUploadPartSeq 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ChunkedUploadRequest} optsOrCallback.chunkedUploadRequest 
     * @param {module:api/EnvelopesApi~updateChunkedUploadPartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChunkedUploadResponse}
     */
    this.updateChunkedUploadPart = function(accountId, chunkedUploadId, chunkedUploadPartSeq, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['chunkedUploadRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateChunkedUploadPart");
      }

      // verify the required parameter 'chunkedUploadId' is set
      if (chunkedUploadId == undefined || chunkedUploadId == null) {
        throw new Error("Missing the required parameter 'chunkedUploadId' when calling updateChunkedUploadPart");
      }

      // verify the required parameter 'chunkedUploadPartSeq' is set
      if (chunkedUploadPartSeq == undefined || chunkedUploadPartSeq == null) {
        throw new Error("Missing the required parameter 'chunkedUploadPartSeq' when calling updateChunkedUploadPart");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'chunkedUploadId': chunkedUploadId,
        'chunkedUploadPartSeq': chunkedUploadPartSeq
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
      var returnType = ChunkedUploadResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/chunked_uploads/{chunkedUploadId}/{chunkedUploadPartSeq}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates envelope custom fields in an envelope.
     * Updates the envelope custom fields in draft and in-process envelopes.

Each custom field used in an envelope must have a unique name.

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CustomFields} optsOrCallback.customFields 
     * @param {module:api/EnvelopesApi~updateCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.updateCustomFields = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['customFields'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateCustomFields");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateDocument operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocument} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds a document to an existing draft envelope.
     * Adds a document to an existing draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {module:api/EnvelopesApi~updateDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocument}
     */
    this.updateDocument = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocument");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateDocument");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
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
      var returnType = EnvelopeDocument;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateDocumentFields operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateDocumentFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentFieldsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates existing custom document fields in an existing envelope document.
     * Updates existing custom document fields in an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentFieldsInformation} optsOrCallback.documentFieldsInformation 
     * @param {module:api/EnvelopesApi~updateDocumentFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentFieldsInformation}
     */
    this.updateDocumentFields = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentFieldsInformation'];

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateDocumentTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateDocumentTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the tabs for an envelope document
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId The ID of the document being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Tabs} optsOrCallback.tabs 
     * @param {module:api/EnvelopesApi~updateDocumentTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.updateDocumentTabs = function(accountId, envelopeId, documentId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabs'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocumentTabs");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateDocumentTabs");
      }

      // verify the required parameter 'documentId' is set
      if (documentId == undefined || documentId == null) {
        throw new Error("Missing the required parameter 'documentId' when calling updateDocumentTabs");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = Tabs;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateDocuments operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeDocumentsResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds one or more documents to an existing envelope document.
     * Adds one or more documents to an existing envelope document.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeDefinition} optsOrCallback.envelopeDefinition 
     * @param {module:api/EnvelopesApi~updateDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeDocumentsResult}
     */
    this.updateDocuments = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDocuments");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateDocuments");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateEmailSettings operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateEmailSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSettings} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the email setting overrides for an envelope.
     * Updates the existing email override settings for the specified envelope. Note that modifying email settings will only affect email communications that occur after the modification was made.

This can also be used to delete an individual email override setting by using an empty string for the value to be deleted.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EmailSettings} optsOrCallback.emailSettings 
     * @param {module:api/EnvelopesApi~updateEmailSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSettings}
     */
    this.updateEmailSettings = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['emailSettings'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateEmailSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateEmailSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateEnvelopeTransferRule operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateEnvelopeTransferRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTransferRule} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update an envelope transfer rule for an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeTransferRuleId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeTransferRule} optsOrCallback.envelopeTransferRule 
     * @param {module:api/EnvelopesApi~updateEnvelopeTransferRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTransferRule}
     */
    this.updateEnvelopeTransferRule = function(accountId, envelopeTransferRuleId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeTransferRule'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateEnvelopeTransferRule");
      }

      // verify the required parameter 'envelopeTransferRuleId' is set
      if (envelopeTransferRuleId == undefined || envelopeTransferRuleId == null) {
        throw new Error("Missing the required parameter 'envelopeTransferRuleId' when calling updateEnvelopeTransferRule");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeTransferRuleId': envelopeTransferRuleId
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
      var returnType = EnvelopeTransferRule;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/transfer_rules/{envelopeTransferRuleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateEnvelopeTransferRules operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateEnvelopeTransferRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeTransferRuleInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update envelope transfer rules for an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeTransferRuleInformation} optsOrCallback.envelopeTransferRuleInformation 
     * @param {module:api/EnvelopesApi~updateEnvelopeTransferRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeTransferRuleInformation}
     */
    this.updateEnvelopeTransferRules = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeTransferRuleInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateEnvelopeTransferRules");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopeTransferRuleInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/transfer_rules', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateLock operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateLockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LockInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates an envelope lock.
     * Updates the lock duration time or update the `lockedByApp` property information for the specified envelope. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/LockRequest} optsOrCallback.lockRequest 
     * @param {module:api/EnvelopesApi~updateLockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LockInformation}
     */
    this.updateLock = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['lockRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateLock");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateLock");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/lock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateNotificationSettings operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Sets envelope notification (Reminders/Expirations) structure for an existing envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/EnvelopeNotificationRequest} optsOrCallback.envelopeNotificationRequest 
     * @param {module:api/EnvelopesApi~updateNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.updateNotificationSettings = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['envelopeNotificationRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateNotificationSettings");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateNotificationSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/notification', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateRecipientDocumentVisibility operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateRecipientDocumentVisibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentVisibilityList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates document visibility for the recipients
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentVisibilityList} optsOrCallback.documentVisibilityList 
     * @param {module:api/EnvelopesApi~updateRecipientDocumentVisibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentVisibilityList}
     */
    this.updateRecipientDocumentVisibility = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentVisibilityList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipientDocumentVisibility");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipientDocumentVisibility");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateRecipientDocumentVisibility");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = DocumentVisibilityList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/document_visibility', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateRecipientInitialsImage operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateRecipientInitialsImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Sets the initials image for an accountless signer.
     * Updates the initials image for a signer that does not have a DocuSign account. The supported image formats for this file are: gif, png, jpeg, and bmp. The file size must be less than 200K.

For the Authentication/Authorization for this call, the credentials must match the sender of the envelope, the recipient must be an accountless signer or in person signer. The account must have the `CanSendEnvelope` property set to **true** and the `ExpressSendOnly` property in `SendingUser` structure must be set to **false**.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/EnvelopesApi~updateRecipientInitialsImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateRecipientInitialsImage = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipientInitialsImage");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipientInitialsImage");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateRecipientInitialsImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var contentTypes = ['image/gif'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/initials_image', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateRecipientSignatureImage operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateRecipientSignatureImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Sets the signature image for an accountless signer.
     * Updates the signature image for an accountless signer. The supported image formats for this file are: gif, png, jpeg, and bmp. The file size must be less than 200K.

For the Authentication/Authorization for this call, the credentials must match the sender of the envelope, the recipient must be an accountless signer or in person signer. The account must have the `CanSendEnvelope` property set to **true** and the `ExpressSendOnly` property in `SendingUser` structure must be set to **false**.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {module:api/EnvelopesApi~updateRecipientSignatureImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateRecipientSignatureImage = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipientSignatureImage");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipientSignatureImage");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateRecipientSignatureImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var contentTypes = ['image/gif'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/signature_image', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateRecipients operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateRecipientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipientsUpdateSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope.
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope. 

For draft envelopes, you can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.

Once an envelope has been sent, you can only edit: `email`, `userName`, `signerName`, `routingOrder`, `faxNumber`, and `deliveryMethod`. You can also select to resend an envelope by using the `resend_envelope` option.

If you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.combineSameOrderRecipients 
     * @param {String} optsOrCallback.offlineSigning 
     * @param {String} optsOrCallback.resendEnvelope When set to **true**, resends the   envelope if the new recipient&#39;s routing order is before or the same as the envelope&#39;s next recipient.
     * @param {module:model/Recipients} optsOrCallback.recipients 
     * @param {module:api/EnvelopesApi~updateRecipientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipientsUpdateSummary}
     */
    this.updateRecipients = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['recipients'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipients");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipients");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {
        'combine_same_order_recipients': optsOrCallback['combineSameOrderRecipients'],
        'offline_signing': optsOrCallback['offlineSigning'],
        'resend_envelope': optsOrCallback['resendEnvelope']
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateRecipientsDocumentVisibility operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateRecipientsDocumentVisibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentVisibilityList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates document visibility for the recipients
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DocumentVisibilityList} optsOrCallback.documentVisibilityList 
     * @param {module:api/EnvelopesApi~updateRecipientsDocumentVisibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentVisibilityList}
     */
    this.updateRecipientsDocumentVisibility = function(accountId, envelopeId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['documentVisibilityList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateRecipientsDocumentVisibility");
      }

      // verify the required parameter 'envelopeId' is set
      if (envelopeId == undefined || envelopeId == null) {
        throw new Error("Missing the required parameter 'envelopeId' when calling updateRecipientsDocumentVisibility");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
      var returnType = DocumentVisibilityList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/document_visibility', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateTabs operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateTabsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tabs} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the tabs for a recipient.  
     * Updates one or more tabs for a recipient in a draft envelope.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} envelopeId The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Tabs} optsOrCallback.tabs 
     * @param {module:api/EnvelopesApi~updateTabsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tabs}
     */
    this.updateTabs = function(accountId, envelopeId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabs'];

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

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
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
        '/v2.1/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateTemplateRecipientDocumentVisibility operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateTemplateRecipientDocumentVisibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentVisibilityList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates document visibility for the recipients
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {String} recipientId The ID of the recipient being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateDocumentVisibilityList} optsOrCallback.templateDocumentVisibilityList 
     * @param {module:api/EnvelopesApi~updateTemplateRecipientDocumentVisibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentVisibilityList}
     */
    this.updateTemplateRecipientDocumentVisibility = function(accountId, templateId, recipientId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateDocumentVisibilityList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateTemplateRecipientDocumentVisibility");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateTemplateRecipientDocumentVisibility");
      }

      // verify the required parameter 'recipientId' is set
      if (recipientId == undefined || recipientId == null) {
        throw new Error("Missing the required parameter 'recipientId' when calling updateTemplateRecipientDocumentVisibility");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentVisibilityList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/document_visibility', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateTemplateRecipientsDocumentVisibility operation. If none specified a Promise will be returned.
     * @callback module:api/EnvelopesApi~updateTemplateRecipientsDocumentVisibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateDocumentVisibilityList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates document visibility for the recipients
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} templateId The ID of the template being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TemplateDocumentVisibilityList} optsOrCallback.templateDocumentVisibilityList 
     * @param {module:api/EnvelopesApi~updateTemplateRecipientsDocumentVisibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateDocumentVisibilityList}
     */
    this.updateTemplateRecipientsDocumentVisibility = function(accountId, templateId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['templateDocumentVisibilityList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateTemplateRecipientsDocumentVisibility");
      }

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateTemplateRecipientsDocumentVisibility");
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateDocumentVisibilityList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/templates/{templateId}/recipients/document_visibility', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
