(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/EnvelopesInformation', '../model/ErrorDetails', '../model/EnvelopeSummary', '../model/EnvelopeDefinition', '../model/EnvelopeIdsRequest', '../model/Envelope', '../model/EnvelopeUpdateSummary', '../model/EnvelopeAuditEventResponse', '../model/CustomFieldsEnvelope', '../model/CustomFields', '../model/EnvelopeDocumentsResult', '../model/DocumentFieldsInformation', '../model/TemplateInformation', '../model/DocumentTemplateList', '../model/EmailSettings', '../model/LockInformation', '../model/LockRequest', '../model/Notification', '../model/Recipients', '../model/RecipientsUpdateSummary', '../model/Tabs', '../model/ViewUrl', '../model/CorrectViewRequest', '../model/ReturnUrlRequest', '../model/RecipientViewRequest', '../model/ViewLinkRequest', '../model/ConsoleViewRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/EnvelopesInformation'), require('../model/ErrorDetails'), require('../model/EnvelopeSummary'), require('../model/EnvelopeDefinition'), require('../model/EnvelopeIdsRequest'), require('../model/Envelope'), require('../model/EnvelopeUpdateSummary'), require('../model/EnvelopeAuditEventResponse'), require('../model/CustomFieldsEnvelope'), require('../model/CustomFields'), require('../model/EnvelopeDocumentsResult'), require('../model/DocumentFieldsInformation'), require('../model/TemplateInformation'), require('../model/DocumentTemplateList'), require('../model/EmailSettings'), require('../model/LockInformation'), require('../model/LockRequest'), require('../model/Notification'), require('../model/Recipients'), require('../model/RecipientsUpdateSummary'), require('../model/Tabs'), require('../model/ViewUrl'), require('../model/CorrectViewRequest'), require('../model/ReturnUrlRequest'), require('../model/RecipientViewRequest'), require('../model/ViewLinkRequest'), require('../model/ConsoleViewRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.EnvelopesInformation, root.Docusign.ErrorDetails, root.Docusign.EnvelopeSummary, root.Docusign.EnvelopeDefinition, root.Docusign.EnvelopeIdsRequest, root.Docusign.Envelope, root.Docusign.EnvelopeUpdateSummary, root.Docusign.EnvelopeAuditEventResponse, root.Docusign.CustomFieldsEnvelope, root.Docusign.CustomFields, root.Docusign.EnvelopeDocumentsResult, root.Docusign.DocumentFieldsInformation, root.Docusign.TemplateInformation, root.Docusign.DocumentTemplateList, root.Docusign.EmailSettings, root.Docusign.LockInformation, root.Docusign.LockRequest, root.Docusign.Notification, root.Docusign.Recipients, root.Docusign.RecipientsUpdateSummary, root.Docusign.Tabs, root.Docusign.ViewUrl, root.Docusign.CorrectViewRequest, root.Docusign.ReturnUrlRequest, root.Docusign.RecipientViewRequest, root.Docusign.ViewLinkRequest, root.Docusign.ConsoleViewRequest);
  }
}(this, function(Configuration, ApiClient, EnvelopesInformation, ErrorDetails, EnvelopeSummary, EnvelopeDefinition, EnvelopeIdsRequest, Envelope, EnvelopeUpdateSummary, EnvelopeAuditEventResponse, CustomFieldsEnvelope, CustomFields, EnvelopeDocumentsResult, DocumentFieldsInformation, TemplateInformation, DocumentTemplateList, EmailSettings, LockInformation, LockRequest, Notification, Recipients, RecipientsUpdateSummary, Tabs, ViewUrl, CorrectViewRequest, ReturnUrlRequest, RecipientViewRequest, ViewLinkRequest, ConsoleViewRequest) {
  'use strict';

  var EnvelopesApi = function EnvelopesApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    /// <summary>
    /// Gets status changes for one or more envelopes. Retrieves envelope status changes for all envelopes. You can modify the information returned by adding query strings to limit the request to check between certain dates and times, or for certain envelopes, or for certain status codes. It is recommended that you use one or more of the query strings in order to limit the size of the response.\n\n### Important: Unless you are requesting the status for specific envelopes (using the `envelopeIds` or `transactionIds` properties), you must add a set the `from_date` property in the request.\n\nGetting envelope status using `transactionIds` is useful for offline signing situations where it can be used determine if an envelope was created or not, for the cases where a network connection was lost, before the envelope status could be returned.\n\n### Request Envelope Status Notes ###\n\nThe REST API GET /envelopes call uses certain filters to find results. In some cases requests are check for \&quot;any status change\&quot; instead of the just the single status requested. In these cases, more envelopes might be returned by the request than otherwise would be. For example, for a request with the begin date is set to Jan 1st, an end date set to Jan 7th and the status qualifier (`from_to_status`) set to `Delivered` &amp;mdash; the response set might contain envelopes that were created during that time period, but not delivered during the time period.\n\nTo avoid unnecessary database queries, the DocuSign system checks requests to ensure that the added filters will not result in a zero-size response before acting on the request. The following table shows the valid envelope statuses (in the Valid Current Statuses column) for the status qualifiers in the request. If the status and status qualifiers in the API request do not contain any of the values shown in the valid current statuses column, then an empty list is returned.\n\nFor example, a request with a status qualifier (from_to_status) of `Delivered` and a status of \&quot;`Created`,`Sent`\&quot;, DocuSign will always return an empty list. This is because the request essentially translates to: find the envelopes that were delivered between the begin and end dates that have a current status of `Created` or `Sent`, and since an envelope that has been delivered can never have a status of `Created` or `Sent`, a zero-size response would be generated. In this case, DocuSign does not run the request, but just returns the empty list.\n\nClient applications should check that the statuses they are requesting make sense for a given status qualifier.
    /// </summary>
    self.ListStatusChangesOptions = function () {
      
      var acStatus = null;
      
      var block = null;
      
      var count = null;
      
      var customField = null;
      
      var email = null;
      
      var envelopeIds = null;
      
      var exclude = null;
      
      var folderIds = null;
      
      var folderTypes = null;
      
      var fromDate = null;
      
      var fromToStatus = null;
      
      var include = null;
      
      var intersectingFolderIds = null;
      
      var order = null;
      
      var orderBy = null;
      
      var powerformids = null;
      
      var searchText = null;
      
      var startPosition = null;
      
      var status = null;
      
      var toDate = null;
      
      var transactionIds = null;
      
      var userFilter = null;
      
      var userId = null;
      
      var userName = null;
      
      
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
      
      /*
       * This specifies the envelope custom field name and value searched for in the envelope information. The value portion of the query can use partial strings by adding &#39;%&#39; (percent sign) around the custom field query value. \n\nExample 1: If you have an envelope custom field called \&quot;Region\&quot; and you want to search for all envelopes where the value is \&quot;West\&quot; you would use the query: `?custom_field=Region=West`. \n\nExample 2: To search for envelopes where the `ApplicationID` custom field has the value or partial value of \&quot;DocuSign\&quot; in field, the query would be: `?custom_field=ApplicationId=%DocuSign%` This would find envelopes where the custom field value is \&quot;DocuSign for Salesforce\&quot; or \&quot;DocuSign envelope.\&quot;
       */
      this.setCustomField = function(customField) {
        this.customField = customField;
      }
	
      this.getCustomField = function() {
        return this.customField;
      }
      
      this.setEmail = function(email) {
        this.email = email;
      }
	
      this.getEmail = function() {
        return this.email;
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
       * The date/time setting that specifies the date/time when the request begins checking for status changes for envelopes in the account.\n\nThis is required unless &#39;envelopeId&#39;s are used.
       */
      this.setFromDate = function(fromDate) {
        this.fromDate = fromDate;
      }
	
      this.getFromDate = function() {
        return this.fromDate;
      }
      
      /*
       * This is the status type checked for in the `from_date`/`to_date` period. If `changed` is specified, then envelopes that changed status during the period are found. If for example, `created` is specified, then envelopes created during the period are found. Default is `changed`. \n\nPossible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
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
      
      this.setIntersectingFolderIds = function(intersectingFolderIds) {
        this.intersectingFolderIds = intersectingFolderIds;
      }
	
      this.getIntersectingFolderIds = function() {
        return this.intersectingFolderIds;
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
       * The list of current statuses to include in the response. By default, all envelopes found are returned. If values are specified, then of the envelopes found, only those with the current status specified are returned in the results. \n\nPossible values are: Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
       */
      this.setStatus = function(status) {
        this.status = status;
      }
	
      this.getStatus = function() {
        return this.status;
      }
      
      /*
       * Optional date/time setting that specifies the date/time when the request stops for status changes for envelopes in the account. If no entry, the system uses the time of the call as the `to_date`.
       */
      this.setToDate = function(toDate) {
        this.toDate = toDate;
      }
	
      this.getToDate = function() {
        return this.toDate;
      }
      
      /*
       * If included in the query string, this is a comma separated list of envelope `transactionId`s. \n\nIf included in the `request_body`, this is a list of envelope `transactionId`s. \n\n#### Note: `transactionId`s are only valid in the DocuSign system for seven days.
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
      
      this.setUserId = function(userId) {
        this.userId = userId;
      }
	
      this.getUserId = function() {
        return this.userId;
      }
      
      this.setUserName = function(userName) {
        this.userName = userName;
      }
	
      this.getUserName = function() {
        return this.userName;
      }
      
    }
    
    
    /**
     * Gets status changes for one or more envelopes.
     * Retrieves envelope status changes for all envelopes. You can modify the information returned by adding query strings to limit the request to check between certain dates and times, or for certain envelopes, or for certain status codes. It is recommended that you use one or more of the query strings in order to limit the size of the response.\n\n### Important: Unless you are requesting the status for specific envelopes (using the `envelopeIds` or `transactionIds` properties), you must add a set the `from_date` property in the request.\n\nGetting envelope status using `transactionIds` is useful for offline signing situations where it can be used determine if an envelope was created or not, for the cases where a network connection was lost, before the envelope status could be returned.\n\n### Request Envelope Status Notes ###\n\nThe REST API GET /envelopes call uses certain filters to find results. In some cases requests are check for \&quot;any status change\&quot; instead of the just the single status requested. In these cases, more envelopes might be returned by the request than otherwise would be. For example, for a request with the begin date is set to Jan 1st, an end date set to Jan 7th and the status qualifier (`from_to_status`) set to `Delivered` &amp;mdash; the response set might contain envelopes that were created during that time period, but not delivered during the time period.\n\nTo avoid unnecessary database queries, the DocuSign system checks requests to ensure that the added filters will not result in a zero-size response before acting on the request. The following table shows the valid envelope statuses (in the Valid Current Statuses column) for the status qualifiers in the request. If the status and status qualifiers in the API request do not contain any of the values shown in the valid current statuses column, then an empty list is returned.\n\nFor example, a request with a status qualifier (from_to_status) of `Delivered` and a status of \&quot;`Created`,`Sent`\&quot;, DocuSign will always return an empty list. This is because the request essentially translates to: find the envelopes that were delivered between the begin and end dates that have a current status of `Created` or `Sent`, and since an envelope that has been delivered can never have a status of `Created` or `Sent`, a zero-size response would be generated. In this case, DocuSign does not run the request, but just returns the empty list.\n\nClient applications should check that the statuses they are requesting make sense for a given status qualifier.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {EnvelopesApi.ListStatusChangesOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopesInformation
     */
    self.listStatusChanges = function(accountId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listStatusChanges";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'ac_status': options.acStatus,
          'block': options.block,
          'count': options.count,
          'custom_field': options.customField,
          'email': options.email,
          'envelope_ids': options.envelopeIds,
          'exclude': options.exclude,
          'folder_ids': options.folderIds,
          'folder_types': options.folderTypes,
          'from_date': options.fromDate,
          'from_to_status': options.fromToStatus,
          'include': options.include,
          'intersecting_folder_ids': options.intersectingFolderIds,
          'order': options.order,
          'order_by': options.orderBy,
          'powerformids': options.powerformids,
          'search_text': options.searchText,
          'start_position': options.startPosition,
          'status': options.status,
          'to_date': options.toDate,
          'transaction_ids': options.transactionIds,
          'user_filter': options.userFilter,
          'user_id': options.userId,
          'user_name': options.userName
        };
      }
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
            var result = new EnvelopesInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Creates an envelope. Creates an envelope. \n\nUsing this function you can:\n* Create an envelope and send it.\n* Create an envelope from an existing template and send it.\n\nIn either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the `status` property in the request to `created` instead of `sent`.\n\n### Send an Envelope or Create a Draft Envelope\n\nThis is a multi-part/form request.\n\nEnvelope Event Notification: `eventNotification` is an optional property that specifies a set of envelope and recipient status codes, a URL, and some other options. When the envelope or recipient status changes to one of the specified status codes, DocuSign sends a message containing the updated status to the specified URL.\n\n#### Note: DocuSign Connect must be enabled to use `eventNotification`, but Connect does not need to be configured for the account since the configuration is done for each envelope.\n\n### Send an Envelope from a Template\n\nWhen you create an envelope using a `templateId`, the `recipients` structure is used to assign recipients to template roles via the `roleName` property, override recipient settings that have been specified in the template and set values for tab fields that were defined in the template.\n\nWhen a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message is used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. If an email subject or message is entered before adding or applying a locked template, the email subject and message is overwritten with the email subject and message from the locked template.\n\n**Composite Templates**:\n\nYou can add Composite Templates structure to the  to create envelopes from a combination of DocuSign templates and PDF forms. The basic envelope remains the same, while the Composite Template adds new document and template overlays into the envelope. There can be any number of Composite Template structures in the envelope.\n\nEach Composite Template consists of server templates, inline templates, PDF Metadata templates, and documents.\n\n* Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the `compositeTemplateId` to which the document should be added. If `compositeTemplateId` is not specified in the content-disposition, the document is applied based on the `documentId` only. If no document object is specified, the composite template inherits the first document.\n* Server Templates are server-side templates stored on the DocuSign server. If supplied they are overlaid into the envelope in the order of their Sequence value.\n* Inline Templates provide the container to pass inline XML properties. Inline templates allow you to add documents and, for PDF documents, transform the PDF fields into DocuSign tabs. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value.\n* PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat&#39;s XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied the PDF meta data template will be overlaid into the envelope in the order of their Sequence value.\n* Document objects are optional structures that provide a container to pass in a document or form. If this object is not passed, the composite template inherits the first document it finds from some other server template or inline template, starting with the lowest sequence value (discussed below).\n\nIf there are multiple composite templates, the document content-disposition can include the `compositeTemplateId` to which the document should be added. Using the `compositeTemplateId` sets which documents are associated with particular composite templates. An example of this usage is:\n\n```\n   --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d\n\n   Content-Type: application/pdf\n\n   Content-Disposition: file; filename=\&quot;eula.pdf\&quot;; documentId=1; compositeTemplateId=\&quot;1\&quot;\n\n   Content-Transfer-Encoding: base64\n```\n\nAcrobat form objects are only extrapolated from the document object. DocuSign does not derive Acrobat form properties from server templates or inline templates. To instruct DocuSign to extrapolate objects from the Acrobat form, set `transformPdfFields` to \&quot;true\&quot; for the document. See the Transform PDF Fields section for more information about how fields are transformed into DocuSign tabs.\n\n*Sequence*\n\nEach type of template has a sequence property, which enables the templates to be over-laid in a particular order. This is significant because \&quot;last-out\&quot; wins in cases of the same property being specified in multiple places in the method schema.\n\n**Merge Recipient Roles for Draft Envelopes**\n\nWhen an envelope with multiple templates is sent, the recipients from the templates are merged according to template roles and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.\n\nTo prevent this, the query parameter `merge_roles_on_draft` should be added when posting a draft envelope (status=created) with multiple templates. Doing this will merge template roles and remove empty recipients.\n\n#### Note: DocuSign recommends that the merge roles query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.\n\n**Template Email Subject Merge Fields**\n\nThis provides the ability to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.\n\nThe merge fields, based on the recipient’s `roleName`, are added to the `emailSubject` when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.\n\nBoth the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.\n\nIf merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.\n\n* To add a recipient’s name in the subject line add the following text in the `emailSubject` when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_UserName]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,`\n\n* To add a recipient’s email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_Email]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,`\n\nIn both cases the &lt;roleName&gt; is the recipient’s `roleName` in the template.\n\nFor cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.\n\n*Rules for determining the `brandId` used in an envelope*\n\nThe following rules are used to determine the `brandId` used in an envelope:\n\n* If a `brandId` is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope.\n* If more than one template is used in an envelope and more than one `brandId` is specified, the first `brandId` specified is used throughout the envelope.\n* In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account’s default signing brand is used.\n* For envelopes that do not meet any of the previous rules, the account&#39;s default signing brand is used in the envelope.\n\n### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.
    /// </summary>
    self.CreateEnvelopeOptions = function () {
      
      var mergeRolesOnDraft = null;
      
      var cdseMode = null;
      
      
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
     * Creates an envelope.
     * Creates an envelope. \n\nUsing this function you can:\n* Create an envelope and send it.\n* Create an envelope from an existing template and send it.\n\nIn either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the `status` property in the request to `created` instead of `sent`.\n\n### Send an Envelope or Create a Draft Envelope\n\nThis is a multi-part/form request.\n\nEnvelope Event Notification: `eventNotification` is an optional property that specifies a set of envelope and recipient status codes, a URL, and some other options. When the envelope or recipient status changes to one of the specified status codes, DocuSign sends a message containing the updated status to the specified URL.\n\n#### Note: DocuSign Connect must be enabled to use `eventNotification`, but Connect does not need to be configured for the account since the configuration is done for each envelope.\n\n### Send an Envelope from a Template\n\nWhen you create an envelope using a `templateId`, the `recipients` structure is used to assign recipients to template roles via the `roleName` property, override recipient settings that have been specified in the template and set values for tab fields that were defined in the template.\n\nWhen a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message is used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. If an email subject or message is entered before adding or applying a locked template, the email subject and message is overwritten with the email subject and message from the locked template.\n\n**Composite Templates**:\n\nYou can add Composite Templates structure to the  to create envelopes from a combination of DocuSign templates and PDF forms. The basic envelope remains the same, while the Composite Template adds new document and template overlays into the envelope. There can be any number of Composite Template structures in the envelope.\n\nEach Composite Template consists of server templates, inline templates, PDF Metadata templates, and documents.\n\n* Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the `compositeTemplateId` to which the document should be added. If `compositeTemplateId` is not specified in the content-disposition, the document is applied based on the `documentId` only. If no document object is specified, the composite template inherits the first document.\n* Server Templates are server-side templates stored on the DocuSign server. If supplied they are overlaid into the envelope in the order of their Sequence value.\n* Inline Templates provide the container to pass inline XML properties. Inline templates allow you to add documents and, for PDF documents, transform the PDF fields into DocuSign tabs. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value.\n* PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat&#39;s XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied the PDF meta data template will be overlaid into the envelope in the order of their Sequence value.\n* Document objects are optional structures that provide a container to pass in a document or form. If this object is not passed, the composite template inherits the first document it finds from some other server template or inline template, starting with the lowest sequence value (discussed below).\n\nIf there are multiple composite templates, the document content-disposition can include the `compositeTemplateId` to which the document should be added. Using the `compositeTemplateId` sets which documents are associated with particular composite templates. An example of this usage is:\n\n```\n   --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d\n\n   Content-Type: application/pdf\n\n   Content-Disposition: file; filename=\&quot;eula.pdf\&quot;; documentId=1; compositeTemplateId=\&quot;1\&quot;\n\n   Content-Transfer-Encoding: base64\n```\n\nAcrobat form objects are only extrapolated from the document object. DocuSign does not derive Acrobat form properties from server templates or inline templates. To instruct DocuSign to extrapolate objects from the Acrobat form, set `transformPdfFields` to \&quot;true\&quot; for the document. See the Transform PDF Fields section for more information about how fields are transformed into DocuSign tabs.\n\n*Sequence*\n\nEach type of template has a sequence property, which enables the templates to be over-laid in a particular order. This is significant because \&quot;last-out\&quot; wins in cases of the same property being specified in multiple places in the method schema.\n\n**Merge Recipient Roles for Draft Envelopes**\n\nWhen an envelope with multiple templates is sent, the recipients from the templates are merged according to template roles and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.\n\nTo prevent this, the query parameter `merge_roles_on_draft` should be added when posting a draft envelope (status=created) with multiple templates. Doing this will merge template roles and remove empty recipients.\n\n#### Note: DocuSign recommends that the merge roles query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.\n\n**Template Email Subject Merge Fields**\n\nThis provides the ability to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.\n\nThe merge fields, based on the recipient’s `roleName`, are added to the `emailSubject` when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.\n\nBoth the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.\n\nIf merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.\n\n* To add a recipient’s name in the subject line add the following text in the `emailSubject` when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_UserName]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,`\n\n* To add a recipient’s email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_Email]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,`\n\nIn both cases the &lt;roleName&gt; is the recipient’s `roleName` in the template.\n\nFor cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.\n\n*Rules for determining the `brandId` used in an envelope*\n\nThe following rules are used to determine the `brandId` used in an envelope:\n\n* If a `brandId` is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope.\n* If more than one template is used in an envelope and more than one `brandId` is specified, the first `brandId` specified is used throughout the envelope.\n* In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account’s default signing brand is used.\n* For envelopes that do not meet any of the previous rules, the account&#39;s default signing brand is used in the envelope.\n\n### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {EnvelopeDefinition} envelopeDefinition: TBD Description
     * @param {EnvelopesApi.CreateEnvelopeOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeSummary
     */
    self.createEnvelope = function(accountId, envelopeDefinition, options, callback) {
      var postBody = envelopeDefinition;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createEnvelope";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'merge_roles_on_draft': options.mergeRolesOnDraft,
          'cdse_mode': options.cdseMode
        };
      }
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
            var result = new EnvelopeSummary();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the envelope status for the specified envelopes.
     * Retrieves the envelope status for the specified envelopes.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {EnvelopeIdsRequest} envelopeIdsRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopesInformation
     */
    self.listStatus = function(accountId, envelopeIdsRequest, callback) {
      var postBody = envelopeIdsRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listStatus";
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
            var result = new EnvelopesInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Gets the status of a envelope. Retrieves the overall status for the specified envelope.
    /// </summary>
    self.GetEnvelopeOptions = function () {
      
      var include = null;
      
      
      this.setInclude = function(include) {
        this.include = include;
      }
	
      this.getInclude = function() {
        return this.include;
      }
      
    }
    
    
    /**
     * Gets the status of a envelope.
     * Retrieves the overall status for the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EnvelopesApi.GetEnvelopeOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Envelope
     */
    self.getEnvelope = function(accountId, envelopeId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getEnvelope";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling getEnvelope";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'include': options.include
        };
      }
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
            var result = new Envelope();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft The Put Envelopes endpoint provides the following functionality:\n\n* Sends the specified single draft envelope.\nAdd {\&quot;status\&quot;:\&quot;sent\&quot;} to the request body to send the envelope.\n\n* Voids the specified in-process envelope.\nAdd {\&quot;status\&quot;:\&quot;voided\&quot;, \&quot;voidedReason\&quot;:\&quot;The reason for voiding the envelope\&quot;} to the request body to void the envelope.\n\n* Replaces the current email subject and message for a draft envelope.\nAdd {\&quot;emailSubject\&quot;:\&quot;subject\&quot;,  \&quot;emailBlurb\&quot;:\&quot;message\&quot;}  to the request body to modify the subject and message.\n\n* Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system.\nAdd {\&quot;purgeState\&quot;:\&quot;purge type\&quot;} to the request body.\n\n*Additional information on purging documents*\n\nThe purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).\n\n#### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period. \n#### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents. \n#### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.\n\nWhen the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.\n\nIf `purgeState=\&quot;documents_queued\&quot;` is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If `purgeState= \&quot;documents_and_metadata_queued\&quot;` is used in the request, then the documents, attachments, and tabs are deleted.
    /// </summary>
    self.UpdateOptions = function () {
      
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
     * Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft
     * The Put Envelopes endpoint provides the following functionality:\n\n* Sends the specified single draft envelope.\nAdd {\&quot;status\&quot;:\&quot;sent\&quot;} to the request body to send the envelope.\n\n* Voids the specified in-process envelope.\nAdd {\&quot;status\&quot;:\&quot;voided\&quot;, \&quot;voidedReason\&quot;:\&quot;The reason for voiding the envelope\&quot;} to the request body to void the envelope.\n\n* Replaces the current email subject and message for a draft envelope.\nAdd {\&quot;emailSubject\&quot;:\&quot;subject\&quot;,  \&quot;emailBlurb\&quot;:\&quot;message\&quot;}  to the request body to modify the subject and message.\n\n* Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system.\nAdd {\&quot;purgeState\&quot;:\&quot;purge type\&quot;} to the request body.\n\n*Additional information on purging documents*\n\nThe purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).\n\n#### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period. \n#### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents. \n#### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.\n\nWhen the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.\n\nIf `purgeState=\&quot;documents_queued\&quot;` is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If `purgeState= \&quot;documents_and_metadata_queued\&quot;` is used in the request, then the documents, attachments, and tabs are deleted.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {Envelope} envelope: TBD Description
     * @param {EnvelopesApi.UpdateOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeUpdateSummary
     */
    self.update = function(accountId, envelopeId, envelope, options, callback) {
      var postBody = envelope;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling update";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling update";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'resend_envelope': options.resendEnvelope
        };
      }
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
            var result = new EnvelopeUpdateSummary();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the envelope audit events for an envelope.
     * Gets the envelope audit events for the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeAuditEventResponse
     */
    self.listAuditEvents = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listAuditEvents";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listAuditEvents";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EnvelopeAuditEventResponse();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/audit_events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the custom field information for the specified envelope.
     * Retrieves the custom field information for the specified envelope. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes, and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.\n\nThere are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. With a list custom field, the sender selects the value of the field from a pre-made list.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFieldsEnvelope
     */
    self.listCustomFields = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listCustomFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new CustomFieldsEnvelope();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates envelope custom fields in an envelope.
     * Updates the envelope custom fields in draft and in-process envelopes.\n\nEach custom field used in an envelope must have a unique name.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {CustomFields} customFields: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.updateCustomFields = function(accountId, envelopeId, customFields, callback) {
      var postBody = customFields;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateCustomFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling updateCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates envelope custom fields for an envelope.
     * Updates the envelope custom fields for draft and in-process envelopes.\n\nEach custom field used in an envelope must have a unique name.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {CustomFields} customFields: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.createCustomFields = function(accountId, envelopeId, customFields, callback) {
      var postBody = customFields;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createCustomFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes envelope custom fields for draft and in-process envelopes.
     * Deletes envelope custom fields for draft and in-process envelopes.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {CustomFields} customFields: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: CustomFields
     */
    self.deleteCustomFields = function(accountId, envelopeId, customFields, callback) {
      var postBody = customFields;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteCustomFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteCustomFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/custom_fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets a list of envelope documents.
     * Retrieves a list of documents associated with the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeDocumentsResult
     */
    self.listDocuments = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listDocuments";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listDocuments";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EnvelopeDocumentsResult();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds one or more documents to an existing envelope document.
     * Adds one or more documents to an existing envelope document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EnvelopeDefinition} envelopeDefinition: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeDocumentsResult
     */
    self.updateDocuments = function(accountId, envelopeId, envelopeDefinition, callback) {
      var postBody = envelopeDefinition;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateDocuments";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling updateDocuments";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EnvelopeDocumentsResult();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes documents from a draft envelope.
     * Deletes one or more documents from an existing draft envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EnvelopeDefinition} envelopeDefinition: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeDocumentsResult
     */
    self.deleteDocuments = function(accountId, envelopeId, envelopeDefinition, callback) {
      var postBody = envelopeDefinition;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteDocuments";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteDocuments";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EnvelopeDocumentsResult();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets a document from an envelope.
     * Retrieves the specified document from the envelope. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.\n\nYou can also use this method to retrieve a PDF containing the combined content of all documents and the certificate. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted. \n\nTo retrieve the combined content replace the `{documentId}` parameter in the endpoint with `combined`.\n/accounts/{accountId}/envelopes/{envelopeId}/documents/combined
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: File
     */
    self.getDocument = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getDocument";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling getDocument";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling getDocument";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the custom document fields from an  existing envelope document.
     * Retrieves the custom document field information from an existing envelope document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.listDocumentFields = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listDocumentFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling listDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates existing custom document fields in an existing envelope document.
     * Updates existing custom document fields in an existing envelope document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {DocumentFieldsInformation} documentFieldsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.updateDocumentFields = function(accountId, envelopeId, documentId, documentFieldsInformation, callback) {
      var postBody = documentFieldsInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateDocumentFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling updateDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling updateDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Creates custom document fields in an existing envelope document.
     * Creates custom document fields in an existing envelope document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {DocumentFieldsInformation} documentFieldsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.createDocumentFields = function(accountId, envelopeId, documentId, documentFieldsInformation, callback) {
      var postBody = documentFieldsInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createDocumentFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling createDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes custom document fields from an existing envelope document.
     * Deletes custom document fields from an existing envelope document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {DocumentFieldsInformation} documentFieldsInformation: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentFieldsInformation
     */
    self.deleteDocumentFields = function(accountId, envelopeId, documentId, documentFieldsInformation, callback) {
      var postBody = documentFieldsInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteDocumentFields";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteDocumentFields";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling deleteDocumentFields";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/fields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes a page from a document in an envelope.
     * Deletes a page from a document in an envelope based on the page number.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {String} pageNumber: The page number being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.deleteDocumentPage = function(accountId, envelopeId, documentId, pageNumber, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteDocumentPage";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteDocumentPage";
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
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages/{pageNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the templates associated with a document in an existing envelope.
     * Retrieves the templates associated with a document in the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateInformation
     */
    self.listTemplatesForDocument = function(accountId, envelopeId, documentId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listTemplatesForDocument";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listTemplatesForDocument";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling listTemplatesForDocument";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
            var result = new TemplateInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds templates to a document in an  envelope.
     * Adds templates to a document in the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {DocumentTemplateList} documentTemplateList: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentTemplateList
     */
    self.applyTemplateToDocument = function(accountId, envelopeId, documentId, documentTemplateList, callback) {
      var postBody = documentTemplateList;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling applyTemplateToDocument";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling applyTemplateToDocument";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling applyTemplateToDocument";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
            var result = new DocumentTemplateList();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes a template from a document in an existing envelope.
     * Deletes the specified template from a document in an existing envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {String} templateId: The ID of the template being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.deleteTemplatesFromDocument = function(accountId, envelopeId, documentId, templateId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteTemplatesFromDocument";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteTemplatesFromDocument";
      }
      
      // verify the required parameter 'documentId' is set
      if (documentId == null) {
        throw "Missing the required parameter 'documentId' when calling deleteTemplatesFromDocument";
      }
      
      // verify the required parameter 'templateId' is set
      if (templateId == null) {
        throw "Missing the required parameter 'templateId' when calling deleteTemplatesFromDocument";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
        'documentId': documentId,
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
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/templates/{templateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the email setting overrides for an envelope.
     * Retrieves the email override settings for the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EmailSettings
     */
    self.getEmailSettings = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getEmailSettings";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling getEmailSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EmailSettings();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates the email setting overrides for an envelope.
     * Updates the existing email override settings for the specified envelope. Note that modifying email settings will only affect email communications that occur after the modification was made.\n\nThis can also be used to delete an individual email override setting by using an empty string for the value to be deleted.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EmailSettings} emailSettings: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EmailSettings
     */
    self.updateEmailSettings = function(accountId, envelopeId, emailSettings, callback) {
      var postBody = emailSettings;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateEmailSettings";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling updateEmailSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EmailSettings();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds email setting overrides to an envelope.
     * Adds email override settings, changing the email address to reply to an email address, name, or the BCC for email archive information, for the envelope. Note that adding email settings will only affect email communications that occur after the addition was made.\n\n### Important: The BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, use a Carbon Copies or Certified Deliveries Recipient Type.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EmailSettings} emailSettings: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EmailSettings
     */
    self.createEmailSettings = function(accountId, envelopeId, emailSettings, callback) {
      var postBody = emailSettings;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createEmailSettings";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createEmailSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EmailSettings();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes the email setting overrides for an envelope.
     * Deletes all existing email override settings for the envelope. If you want to delete an individual email override setting, use the PUT and set the value to an empty string. Note that deleting email settings will only affect email communications that occur after the deletion and the normal account email settings are used for future email communications.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EmailSettings
     */
    self.deleteEmailSettings = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteEmailSettings";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteEmailSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new EmailSettings();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/email_settings', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets envelope lock information.
     * Retrieves general information about the envelope lock.\n\nIf the call is made by the locked by user and the request has the same integrator key as original, then the `X-DocuSign-Edit` header and additional lock information is included in the response. This allows users to recover a lost editing session token and the `X-DocuSign-Edit` header.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: LockInformation
     */
    self.getLock = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getLock";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling getLock";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates an envelope lock.
     * Updates the lock duration time or update the `lockedByApp` property information for the specified envelope. The user and integrator key must match the user specified by the `lockByUser` property and integrator key information and the `X-DocuSign-Edit` header must be included or an error will be generated.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {LockRequest} lockRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: LockInformation
     */
    self.updateLock = function(accountId, envelopeId, lockRequest, callback) {
      var postBody = lockRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateLock";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling updateLock";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Lock an envelope.
     * Locks the specified envelope, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the envelope.\n\nNote: Users must have envelope locking capability enabled to use this function (userSetting `canLockEnvelopes` must be  set to true for the user).
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {LockRequest} lockRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: LockInformation
     */
    self.createLock = function(accountId, envelopeId, lockRequest, callback) {
      var postBody = lockRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createLock";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createLock";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes an envelope lock.
     * Deletes the lock from the specified envelope. The `X-DocuSign-Edit` header must be included in the request.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: LockInformation
     */
    self.deleteLock = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteLock";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteLock";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/lock', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets envelope notification information.
     * Retrieves the envelope notification, reminders and expirations, information for an existing envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Notification
     */
    self.getNotificationSettings = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getNotificationSettings";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling getNotificationSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/notification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the status of recipients for an envelope.
     * Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list. \n\nThe `currentRoutingOrder` property of the response contains the `routingOrder` value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.listRecipients = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listRecipients";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listRecipients";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope.
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope. \n\nFor draft envelopes, you can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.\n\nOnce an envelope has been sent, you can only edit: `email`, `userName`, `signerName`, `routingOrder`, `faxNumber`, and `deliveryMethod`. You can also select to resend an envelope by using the `resend_envelope` option.\n\nIf you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {Recipients} recipients: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: RecipientsUpdateSummary
     */
    self.updateRecipients = function(accountId, envelopeId, recipients, callback) {
      var postBody = recipients;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateRecipients";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling updateRecipients";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds one or more recipients to an envelope.
     * Adds one or more recipients to an envelope.\n\nFor an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient&#39;s routing order is before or the same as the envelope&#39;s next recipient, an email is only sent if the optional `resend_envelope` query string is set to **true**.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {Recipients} recipients: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.createRecipient = function(accountId, envelopeId, recipients, callback) {
      var postBody = recipients;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createRecipient";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createRecipient";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes recipients from an envelope.
     * Deletes one or more recipients from a draft or sent envelope. Recipients to be deleted are listed in the request, with the `recipientId` being used as the key for deleting recipients.\n\nIf the envelope is `In Process`, meaning that it has been sent and has not  been completed or voided, recipients that have completed their actions cannot be deleted.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {Recipients} recipients: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.deleteRecipients = function(accountId, envelopeId, recipients, callback) {
      var postBody = recipients;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteRecipients";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteRecipients";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes a recipient from an envelope.
     * Deletes the specified recipient file from the specified envelope. This cannot be used if the envelope has been sent.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.deleteRecipient = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteRecipient";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteRecipient";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling deleteRecipient";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Gets the tabs information for a signer or sign-in-person recipient in an envelope.
     * Retrieves information about the tabs associated with a recipient in a draft envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.listTabs = function(accountId, envelopeId, recipientId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listTabs";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling listTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates the tabs for a recipient.
     * Updates one or more tabs for a recipient in a draft envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {Tabs} tabs: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.updateTabs = function(accountId, envelopeId, recipientId, tabs, callback) {
      var postBody = tabs;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling updateTabs";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling updateTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling updateTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds tabs for a recipient.
     * Adds one or more tabs for a recipient.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {Tabs} tabs: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.createTabs = function(accountId, envelopeId, recipientId, tabs, callback) {
      var postBody = tabs;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createTabs";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling createTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes the tabs associated with a recipient.
     * Deletes one or more tabs associated with a recipient in a draft envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {Tabs} tabs: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.deleteTabs = function(accountId, envelopeId, recipientId, tabs, callback) {
      var postBody = tabs;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteTabs";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteTabs";
      }
      
      // verify the required parameter 'recipientId' is set
      if (recipientId == null) {
        throw "Missing the required parameter 'recipientId' when calling deleteTabs";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId,
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/recipients/{recipientId}/tabs', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Get List of Templates used in an Envelope
     * This returns a list of the templates, name and ID, used in an envelope.&lt;br/&gt;&lt;br/&gt;Note: This only returns information for server side templates.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateInformation
     */
    self.listTemplates = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listTemplates";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling listTemplates";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new TemplateInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Adds templates to an envelope.
     * Adds templates to the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {DocumentTemplateList} documentTemplateList: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: DocumentTemplateList
     */
    self.applyTemplate = function(accountId, envelopeId, documentTemplateList, callback) {
      var postBody = documentTemplateList;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling applyTemplate";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling applyTemplate";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new DocumentTemplateList();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Returns a URL to the envelope correction UI.
     * Returns a URL that allows you to embed the envelope correction view of the DocuSign UI in your applications.\n\nImportant: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {CorrectViewRequest} correctViewRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ViewUrl
     */
    self.createCorrectView = function(accountId, envelopeId, correctViewRequest, callback) {
      var postBody = correctViewRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createCorrectView";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createCorrectView";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new ViewUrl();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/correct', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Returns a URL to the edit view UI.
     * Returns a URL that allows you to embed the edit view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign editing view. \n\nUpon sending completion, the user is returned to the return URL provided by the API application.\n\nImportant: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {ReturnUrlRequest} returnUrlRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ViewUrl
     */
    self.createEditView = function(accountId, envelopeId, returnUrlRequest, callback) {
      var postBody = returnUrlRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createEditView";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createEditView";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new ViewUrl();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Returns a URL to the recipient view UI.
     * Returns a URL that allows you to embed the recipient view of the DocuSign UI in your applications. This call cannot be used to view draft envelopes, since those envelopes have not been sent. \n\nImportant: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView. \n\nAn entry is added into the Security Level section of the DocuSign Certificate of Completion that reflects the `securityDomain` and `authenticationMethod` properties used to verify the user identity.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {RecipientViewRequest} recipientViewRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ViewUrl
     */
    self.createRecipientView = function(accountId, envelopeId, recipientViewRequest, callback) {
      var postBody = recipientViewRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createRecipientView";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createRecipientView";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new ViewUrl();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/recipient', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Returns a URL to the sender view UI.
     * Returns a URL that allows you to embed the sender view of the DocuSign UI in your applications. This is a one-time use login token that allows the user to be placed into the DocuSign sending view. \n\nUpon sending completion, the user is returned to the return URL provided by the API application.\n\nImportant: iFrames should not be used for embedded operations on mobile devices due to screen space issues. For iOS devices DocuSign recommends using a WebView.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {ReturnUrlRequest} returnUrlRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ViewUrl
     */
    self.createSenderView = function(accountId, envelopeId, returnUrlRequest, callback) {
      var postBody = returnUrlRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createSenderView";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createSenderView";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new ViewUrl();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/sender', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Reserved: Returns a URL to the secure link view UI.
     * Reserved: Returns a URL that allows you to embed the secure link view of the DocuSign UI in your applications.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {ViewLinkRequest} viewLinkRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ViewUrl
     */
    self.createViewLink = function(accountId, envelopeId, viewLinkRequest, callback) {
      var postBody = viewLinkRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createViewLink";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling createViewLink";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
            var result = new ViewUrl();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/viewlink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Reserved: Expires a secure view link.
     * Reserved: Expires a secure view link
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.deleteViewLink = function(accountId, envelopeId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteViewLink";
      }
      
      // verify the required parameter 'envelopeId' is set
      if (envelopeId == null) {
        throw "Missing the required parameter 'envelopeId' when calling deleteViewLink";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'envelopeId': envelopeId
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
        '/v2/accounts/{accountId}/envelopes/{envelopeId}/views/viewlink', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Returns a URL to the authentication view UI.
     * Returns a URL that allows you to embed the authentication view of the DocuSign UI in your applications.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {ConsoleViewRequest} consoleViewRequest: TBD Description
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: ViewUrl
     */
    self.createConsoleView = function(accountId, consoleViewRequest, callback) {
      var postBody = consoleViewRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createConsoleView";
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
            var result = new ViewUrl();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/views/console', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return EnvelopesApi;
}));
