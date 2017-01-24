(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/EnvelopeTemplateResults', '../model/ErrorDetails', '../model/TemplateSummary', '../model/EnvelopeTemplate', '../model/TemplateUpdateSummary', '../model/CustomFields', '../model/TemplateCustomFields', '../model/TemplateDocumentsResult', '../model/EnvelopeDefinition', '../model/DocumentFieldsInformation', '../model/PageRequest', '../model/LockInformation', '../model/Notification', '../model/TemplateNotificationRequest', '../model/Recipients', '../model/RecipientsUpdateSummary', '../model/TemplateRecipients', '../model/Tabs', '../model/TemplateTabs', '../model/GroupInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/EnvelopeTemplateResults'), require('../model/ErrorDetails'), require('../model/TemplateSummary'), require('../model/EnvelopeTemplate'), require('../model/TemplateUpdateSummary'), require('../model/CustomFields'), require('../model/TemplateCustomFields'), require('../model/TemplateDocumentsResult'), require('../model/EnvelopeDefinition'), require('../model/DocumentFieldsInformation'), require('../model/PageRequest'), require('../model/LockInformation'), require('../model/Notification'), require('../model/TemplateNotificationRequest'), require('../model/Recipients'), require('../model/RecipientsUpdateSummary'), require('../model/TemplateRecipients'), require('../model/Tabs'), require('../model/TemplateTabs'), require('../model/GroupInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplatesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.EnvelopeTemplateResults, root.Docusign.ErrorDetails, root.Docusign.TemplateSummary, root.Docusign.EnvelopeTemplate, root.Docusign.TemplateUpdateSummary, root.Docusign.CustomFields, root.Docusign.TemplateCustomFields, root.Docusign.TemplateDocumentsResult, root.Docusign.EnvelopeDefinition, root.Docusign.DocumentFieldsInformation, root.Docusign.PageRequest, root.Docusign.LockInformation, root.Docusign.Notification, root.Docusign.TemplateNotificationRequest, root.Docusign.Recipients, root.Docusign.RecipientsUpdateSummary, root.Docusign.TemplateRecipients, root.Docusign.Tabs, root.Docusign.TemplateTabs, root.Docusign.GroupInformation);
  }
}(this, function(Configuration, ApiClient, EnvelopeTemplateResults, ErrorDetails, TemplateSummary, EnvelopeTemplate, TemplateUpdateSummary, CustomFields, TemplateCustomFields, TemplateDocumentsResult, EnvelopeDefinition, DocumentFieldsInformation, PageRequest, LockInformation, Notification, TemplateNotificationRequest, Recipients, RecipientsUpdateSummary, TemplateRecipients, Tabs, TemplateTabs, GroupInformation) {
  'use strict';

  var TemplatesApi = function TemplatesApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    
    /**
     * Gets the definition of a template.
     * Retrieves the list of templates for the specified account. The request can be limited to a specific folder.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeTemplateResults
     */
    self.listTemplates = function(accountId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listTemplates";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new EnvelopeTemplateResults();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Creates an envelope from a template.
     * Creates a template definition using a multipart request.\n\n###Template Email Subject Merge Fields\n\nCall this endpoint to insert a recipient name and email address merge fields into the email subject line when creating or sending from a template.\n\nThe merge fields, based on the recipient’s role name, are added to the `emailSubject` property when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.\n\nBoth the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.\n#### Note: If merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.\n\nTo add a recipient’s name in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:\n\n[[&lt;roleName&gt;_UserName]]\n\nExample:\n\n`\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,`\n\nTo add a recipient’s email address in the subject line add the following text in the `emailSubject` property when creating the template or when sending an envelope from a template:\n\n[[&lt;roleName&gt;_Email]]\n\nExample:\n\n`\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,`\n\n\nIn both cases the &lt;roleName&gt; is the recipient&#39;s contents of the `roleName` property in the template.\n\nFor cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {EnvelopeTemplate} envelopeTemplate: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateSummary
     */
    self.createTemplate = function(accountId, envelopeTemplate, callback) {
      var postBody = envelopeTemplate;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createTemplate";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new TemplateSummary();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets a list of templates for a specified account.
     * Retrieves the definition of the specified template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeTemplate
     */
    self.get = function(accountId, templateId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling get";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling get";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new EnvelopeTemplate();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates an existing template.
     * Updates an existing template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {EnvelopeTemplate} envelopeTemplate: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateUpdateSummary
     */
    self.update = function(accountId, templateId, envelopeTemplate, callback) {
      var postBody = envelopeTemplate;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling update";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling update";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new TemplateUpdateSummary();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the custom document fields from a template.
     * Retrieves the custom document field information from an existing template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.listCustomFields = function(accountId, templateId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listCustomFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling listCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new CustomFields();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates envelope custom fields in a template.
     * Updates the custom fields in a template.\n\nEach custom field used in a template must have a unique name.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {TemplateCustomFields} templateCustomFields: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.updateCustomFields = function(accountId, templateId, templateCustomFields, callback) {
      var postBody = templateCustomFields;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateCustomFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling updateCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new CustomFields();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Creates custom document fields in an existing template document.
     * Creates custom document fields in an existing template document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {TemplateCustomFields} templateCustomFields: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.createCustomFields = function(accountId, templateId, templateCustomFields, callback) {
      var postBody = templateCustomFields;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createCustomFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling createCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new CustomFields();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes envelope custom fields in a template.
     * Deletes envelope custom fields in a template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {TemplateCustomFields} templateCustomFields: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.deleteCustomFields = function(accountId, templateId, templateCustomFields, callback) {
      var postBody = templateCustomFields;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteCustomFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new CustomFields();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/custom_fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets a list of documents associated with a template.
     * Retrieves a list of documents associated with the specified template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateDocumentsResult
     */
    self.listDocuments = function(accountId, templateId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listDocuments";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling listDocuments";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new TemplateDocumentsResult();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds documents to a template document.
     * Adds one or more documents to an existing template document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {EnvelopeDefinition} envelopeDefinition: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateDocumentsResult
     */
    self.updateDocuments = function(accountId, templateId, envelopeDefinition, callback) {
      var postBody = envelopeDefinition;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateDocuments";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling updateDocuments";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new TemplateDocumentsResult();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes documents from a template.
     * Deletes one or more documents from an existing template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {EnvelopeDefinition} envelopeDefinition: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateDocumentsResult
     */
    self.deleteDocuments = function(accountId, templateId, envelopeDefinition, callback) {
      var postBody = envelopeDefinition;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteDocuments";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteDocuments";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new TemplateDocumentsResult();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets PDF documents from a template.
     * Retrieves one or more PDF documents from the specified template.\n\nYou can specify the ID of the document to retrieve or can specify `combined` to retrieve all documents in the template as one pdf.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: File
     */
    self.getDocument = function(accountId, templateId, documentId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getDocument";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling getDocument";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling getDocument";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/pdf'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the custom document fields for a an existing template document.
     * Retrieves the custom document fields for an existing template document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.listDocumentFields = function(accountId, templateId, documentId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listDocumentFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling listDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling listDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new DocumentFieldsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates existing custom document fields in an existing template document.
     * Updates existing custom document fields in an existing template document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {DocumentFieldsInformation} documentFieldsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.updateDocumentFields = function(accountId, templateId, documentId, documentFieldsInformation, callback) {
      var postBody = documentFieldsInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateDocumentFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling updateDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling updateDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new DocumentFieldsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Creates custom document fields in an existing template document.
     * Creates custom document fields in an existing template document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {DocumentFieldsInformation} documentFieldsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.createDocumentFields = function(accountId, templateId, documentId, documentFieldsInformation, callback) {
      var postBody = documentFieldsInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createDocumentFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling createDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling createDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new DocumentFieldsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes custom document fields from an existing template document.
     * Deletes custom document fields from an existing template document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {DocumentFieldsInformation} documentFieldsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.deleteDocumentFields = function(accountId, templateId, documentId, documentFieldsInformation, callback) {
      var postBody = documentFieldsInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteDocumentFields";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling deleteDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new DocumentFieldsInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes a page from a document in an template.
     * Deletes a page from a document in a template based on the page number.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {String} pageNumber: The page number being accessed.
     * @param {PageRequest} pageRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.deleteDocumentPage = function(accountId, templateId, documentId, pageNumber, pageRequest, callback) {
      var postBody = pageRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteDocumentPage";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteDocumentPage";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling deleteDocumentPage";
      }
      
      // verify the required parameter 'pageNumber' is set
      if (pageNumber == null) {
        throw "Missing the required parameter 'pageNumber' when calling deleteDocumentPage";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'documentId': documentId,
        'pageNumber': pageNumber
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/documents/{documentId}/pages/{pageNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets template lock information.
     * Retrieves general information about the template lock.\n\nIf the call is made by the user who has the lock and the request has the same integrator key as original, then the `X-DocuSign-Edit` header  field and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: LockInformation
     */
    self.getLock = function(accountId, templateId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getLock";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling getLock";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new LockInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets template notification information.
     * Retrieves the envelope notification, reminders and expirations, information for an existing template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Notification
     */
    self.getNotificationSettings = function(accountId, templateId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getNotificationSettings";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling getNotificationSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Notification();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates the notification  structure for an existing template.
     * Updates the notification structure for an existing template. Use this endpoint to set reminder and expiration notifications.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {TemplateNotificationRequest} templateNotificationRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Notification
     */
    self.updateNotificationSettings = function(accountId, templateId, templateNotificationRequest, callback) {
      var postBody = templateNotificationRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateNotificationSettings";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling updateNotificationSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Notification();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/notification', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets recipient information from a template.
     * Retrieves the information for all recipients in the specified template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.listRecipients = function(accountId, templateId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listRecipients";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling listRecipients";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Recipients();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates recipients in a template.
     * Updates recipients in a template. \n\nYou can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {TemplateRecipients} templateRecipients: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: RecipientsUpdateSummary
     */
    self.updateRecipients = function(accountId, templateId, templateRecipients, callback) {
      var postBody = templateRecipients;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateRecipients";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling updateRecipients";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new RecipientsUpdateSummary();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds tabs for a recipient.
     * Adds one or more recipients to a template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {TemplateRecipients} templateRecipients: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.createRecipients = function(accountId, templateId, templateRecipients, callback) {
      var postBody = templateRecipients;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createRecipients";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling createRecipients";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Recipients();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes recipients from a template.
     * Deletes one or more recipients from a template. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {TemplateRecipients} templateRecipients: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.deleteRecipients = function(accountId, templateId, templateRecipients, callback) {
      var postBody = templateRecipients;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteRecipients";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteRecipients";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Recipients();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes the specified recipient file from a template.
     * Deletes the specified recipient file from the specified template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {TemplateRecipients} templateRecipients: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.deleteRecipient = function(accountId, templateId, recipientId, templateRecipients, callback) {
      var postBody = templateRecipients;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteRecipient";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteRecipient";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling deleteRecipient";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Recipients();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the tabs information for a signer or sign-in-person recipient in a template.
     * Gets the tabs information for a signer or sign-in-person recipient in a template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {Tabs} tabs: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.listTabs = function(accountId, templateId, recipientId, tabs, callback) {
      var postBody = tabs;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listTabs";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling listTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling listTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Tabs();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates the tabs for a recipient.
     * Updates one or more tabs for a recipient in a template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {TemplateTabs} templateTabs: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.updateTabs = function(accountId, templateId, recipientId, templateTabs, callback) {
      var postBody = templateTabs;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateTabs";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling updateTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling updateTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Tabs();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds tabs for a recipient.
     * Adds one or more tabs for a recipient.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {TemplateTabs} templateTabs: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.createTabs = function(accountId, templateId, recipientId, templateTabs, callback) {
      var postBody = templateTabs;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createTabs";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling createTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling createTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Tabs();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes the tabs associated with a recipient in a template.
     * Deletes one or more tabs associated with a recipient in a template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {TemplateTabs} templateTabs: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.deleteTabs = function(accountId, templateId, recipientId, templateTabs, callback) {
      var postBody = templateTabs;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteTabs";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling deleteTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'recipientId': recipientId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new Tabs();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Shares a template with a group
     * Shares a template with the specified members group.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} templatePart: Currently, the only defined part is **groups**.
     * @param {GroupInformation} groupInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: GroupInformation
     */
    self.updateGroupShare = function(accountId, templateId, templatePart, groupInformation, callback) {
      var postBody = groupInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateGroupShare";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling updateGroupShare";
      }
      
      // verify the required parameter 'templatePart' is set
      if (templatePart == null) {
        throw "Missing the required parameter 'templatePart' when calling updateGroupShare";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'templatePart': templatePart
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new GroupInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/{templatePart}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Removes a member group&#39;s sharing permissions for a template.
     * Removes a member group&#39;s sharing permissions for a specified template.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {String} templatePart: Currently, the only defined part is **groups**.
     * @param {GroupInformation} groupInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: GroupInformation
     */
    self.deleteGroupShare = function(accountId, templateId, templatePart, groupInformation, callback) {
      var postBody = groupInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteGroupShare";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteGroupShare";
      }
      
      // verify the required parameter 'templatePart' is set
      if (templatePart == null) {
        throw "Missing the required parameter 'templatePart' when calling deleteGroupShare";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'templateId': templateId,
        'templatePart': templatePart
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new GroupInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/templates/{templateId}/{templatePart}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return TemplatesApi;
}));
