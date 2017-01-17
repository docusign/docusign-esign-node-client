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
      
      var startPosition = null;
      
      var transactionIds = null;
      
      var userFilter = null;
      
      var userId = null;
      
      var userName = null;
      
      var customField = null;
      
      var email = null;
      
      var envelopeIds = null;
      
      var exclude = null;
      
      var folderIds = null;
      
      var acStatus = null;
      
      var folderTypes = null;
      
      var fromDate = null;
      
      var block = null;
      
      var toDate = null;
      
      var include = null;
      
      var intersectingFolderIds = null;
      
      var order = null;
      
      var orderBy = null;
      
      var fromToStatus = null;
      
      var powerformids = null;
      
      var searchText = null;
      
      var count = null;
      
      var status = null;
      
      
      this.setStartPosition = function(startPosition) {
        this.startPosition = startPosition;
      }
	
      this.getStartPosition = function() {
        return this.startPosition;
      }
      
      /*
       * If included in the query string, this is a comma separated list of envelope `transactionId`s. \n\nIf included in the `request_body`, this is a list of envelope `transactionId`s. \n\n###### Note: `transactionId`s are only valid in the DocuSign system for seven days.
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
      
      /*
       * Specifies the Authoritative Copy Status for the envelopes. The possible values are: Unknown, Original, Transferred, AuthoritativeCopy, AuthoritativeCopyExportPending, AuthoritativeCopyExported, DepositPending, Deposited, DepositedEO, or DepositFailed.
       */
      this.setAcStatus = function(acStatus) {
        this.acStatus = acStatus;
      }
	
      this.getAcStatus = function() {
        return this.acStatus;
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
      
      this.setBlock = function(block) {
        this.block = block;
      }
	
      this.getBlock = function() {
        return this.block;
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
      
      /*
       * This is the status type checked for in the `from_date`/`to_date` period. If `changed` is specified, then envelopes that changed status during the period are found. If for example, `created` is specified, then envelopes created during the period are found. Default is `changed`. \n\nPossible values are: Voided, Changed, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut and Processing.
       */
      this.setFromToStatus = function(fromToStatus) {
        this.fromToStatus = fromToStatus;
      }
	
      this.getFromToStatus = function() {
        return this.fromToStatus;
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
      
      this.setCount = function(count) {
        this.count = count;
      }
	
      this.getCount = function() {
        return this.count;
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
          'start_position': options.startPosition,
          'transaction_ids': options.transactionIds,
          'user_filter': options.userFilter,
          'user_id': options.userId,
          'user_name': options.userName,
          'custom_field': options.customField,
          'email': options.email,
          'envelope_ids': options.envelopeIds,
          'exclude': options.exclude,
          'folder_ids': options.folderIds,
          'ac_status': options.acStatus,
          'folder_types': options.folderTypes,
          'from_date': options.fromDate,
          'block': options.block,
          'to_date': options.toDate,
          'include': options.include,
          'intersecting_folder_ids': options.intersectingFolderIds,
          'order': options.order,
          'order_by': options.orderBy,
          'from_to_status': options.fromToStatus,
          'powerformids': options.powerformids,
          'search_text': options.searchText,
          'count': options.count,
          'status': options.status
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
    /// Creates an envelope. Creates an envelope. \n\nUsing this function you can:\n* Create an envelope and send it.\n* Create an envelope from an existing template and send it.\n\nIn either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the request’s `status` property to `created` instead of `sent`.\n\n## Sending Envelopes\n\nDocuments can be included with the Envelopes::create call itself or a template can include documents. Documents can be added by using a multi-part/form request or by using the `documentBase64` field of the [`document` object](#/definitions/document)\n\n### Recipient Types\nAn [`envelopeDefinition` object](#/definitions/envelopeDefinition) is used as the method’s body. Envelope recipients can be defined in the envelope or in templates. The `envelopeDefinition` object’s `recipients` field is an [`EnvelopeRecipients` resource object](#/definitions/EnvelopeRecipients). It includes arrays of the seven types of recipients defined by DocuSign:\n\nRecipient type | Object definition\n-------------- | -----------------\nagent (can add name and email information for later recipients/signers) | [`agent`](#/definitions/agent)\ncarbon copy (receives a copy of the documents) | [`carbonCopy`](#/definitions/carbonCopy)\ncertified delivery  (receives a copy of the documents and must acknowledge receipt) | [`certifiedDelivery`](#/definitions/certifiedDelivery)\neditor (can change recipients and document fields for later recipients/signers) | [`editor`](#/definitions/editor)\nin-person signer (“hosts” someone who signs in-person) | [`inPersonSigner`](#/definitions/inPersonSigner)\nintermediary (can add name and email information for some later recipients/signers.) | [`intermediary`](#/definitions/intermediary)\nsigner (signs and/or updates document fields) | [`signer`](#/definitions/signer)\n\nAdditional information about the different types of recipients is available from the [`EnvelopeRecipients` resource page](../../EnvelopeRecipients) and from the [Developer Center](https://www.docusign.com/developer-center/explore/features/recipients)\n\n### Tabs\nTabs (also referred to as `tags` and as `fields` in the web sending user interface), can be defined in the `envelopeDefinition`, in templates, by transforming PDF Form Fields, or by using Composite Templates (see below).\n\nDefining tabs: the `inPersonSigner`, and `signer` recipient objects include a `tabs` field. It is an [`EnvelopeTabs` resource object](#/definitions/EnvelopeTabs). It includes arrays of the 24 different tab types available. See the [`EnvelopeTabs` resource](../../EnvelopeTabs) for more information.\n\n## Using Templates\nEnvelopes use specific people or groups as recipients. Templates can specify a role, eg `account_manager.` When a template is used in an envelope, the roles must be replaced with specific people or groups.\n\nWhen you create an envelope using a `templateId`, the different recipient type objects within the [`EnvelopeRecipients` object](#/definitions/EnvelopeRecipients) are used to assign recipients to the template’s roles via the `roleName` property. The recipient objects can also override settings that were specified in the template, and set values for tab fields that were defined in the template.\n\n### Message Lock\nWhen a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message are used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. The field `messageLock` is used to lock the email subject and message.\n\nIf an email subject or message is entered before adding or applying a template with `messageLock` **true**, the email subject and message is overwritten with the locked email subject and message from the template.\n\n## Envelope Status\nThe status of sent envelopes can be determined through the DocuSign webhook system or by polling. Webhooks are highly recommended: they provide your application with the quickest updates when an envelope’s status changes. DocuSign limits polling to once every 15 minutes or less frequently.\n\nWhen a webhook is used, DocuSign calls your application, via the URL you provide, with a notification XML message. \n\nSee the [Webhook recipe](https://www.docusign.com/developer-center/recipes/webhook-status) for examples and live demos of using webhooks.\n\n## Webhook Options\nThe two webhook options, *eventNotification* and *Connect* use the same notification mechanism and message formats. eventNotification is used to create a webhook for a specific envelope sent via the API. Connect webhooks can be used for any envelope sent from an account, from any user, from any client. \n\n### eventNotification Webhooks\nThe Envelopes::create method includes an optional [eventNotification object](#definition-eventNotification) that adds a webhook to the envelope. eventNotification webhooks are available for all DocuSign accounts with API access.\n\n### Connect Webhooks\nConnect can be used to create a webhook for all envelopes sent by all users in an account, either through the API or via other DocuSign clients (web, mobile, etc). Connect configurations are independent of specific envelopes. A Connect configuration includes a filter that may be used to limit the webhook to specific users, envelope statuses, etc. \n\nConnect configurations may be created and managed using the [ConnectConfigurations resource](../../Connect/ConnectConfigurations). Configurations can also be created and managed from the Administration tool accessed by selecting “Go to Admin” from the menu next to your picture on the DocuSign web app. See the Integrations/Connect section of the Admin tool. For repeatability, and to minimize support questions, creating Connect configurations via the API is recommended, especially for ISVs.\n\nConnect is available for some DocuSign account types. Please contact DocuSign Sales for more information.\n\n## Composite Templates\n\nThe Composite Templates feature, like [compositing in film production](https://en.wikipedia.org/wiki/Compositing), enables you to *overlay* document, recipient, and tab definitions from multiple sources, including PDF Form Field definitions, templates defined on the server, and more.\n\nEach Composite Template consists of optional elements: server templates, inline templates, PDF Metadata templates, and documents.\n\n* The Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information via a multi-part HTTP message. If used, the document content-disposition must include the `compositeTemplateId` to which the document should be added. If `compositeTemplateId` is not specified in the content-disposition, the document is applied based on the `documentId` only. If no document object is specified, the composite template inherits the first document.\n\n* Server Templates are server-side templates stored on the DocuSign platform. If supplied, they are overlaid into the envelope in the order of their Sequence value.\n\n* Inline Templates provide a container to add documents, recipients, tabs, and custom fields. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value.\n\n* Document objects are optional structures that provide a container to pass in a document or form. If this object is not included, the composite template inherits the *first* document it finds from a server template or inline template, starting with the lowest sequence value.\n\nPDF Form objects are only transformed from the document object. DocuSign does not derive PDF form properties from server templates or inline templates. To instruct DocuSign to transform fields from the PDF form, set `transformPdfFields` to \&quot;true\&quot; for the document. See the Transform PDF Fields section for more information about process.\n\n* PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat&#39;s XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied, the PDF metadata template will be overlaid into the envelope in the order of its Sequence value.\n\n### Compositing the definitions\nEach Composite Template adds a new document and templates overlay into the envelope. For each Composite Template these rules are applied:\n\n* Templates are overlaid in the order of their Sequence value.\n* If Document is not passed into the Composite Template’s `document` field, the *first* template’s document (based on the template’s Sequence value) is used.\n* Last in wins in all cases except for the document (i.e. envelope information, recipient information, secure field information). There is no special casing.\n\nFor example, if you want higher security on a tab, then that needs to be specified in a later template (by sequence number) then where the tab is included. If you want higher security on a role recipient, then it needs to be in a later template then where that role recipient is specified.\n\n* Recipient matching is based on Recipient Role and Routing Order. If there are matches, the recipient information is merged together. A final pass is done on all Composite Templates, after all template overlays have been applied, to collapse recipients with the same email, username and routing order. This prevents having the same recipients at the same routing order.\n\n* If you specify in a template that a recipient is locked, once that recipient is overlaid the recipient attributes can no longer be changed. The only items that can be changed for the recipient in this case are the email, username, access code and IDCheckInformationInput.\n\n* Tab matching is based on Tab Labels, Tab Types and Documents. If a Tab Label matches but the Document is not supplied, the Tab is overlaid for all the Documents.\n\nFor example, if you have a simple inline template with only one tab in it with a label and a value, the Signature, Initial, Company, Envelope ID, User Name tabs will only be matched and collapsed if they fall in the exact same X and Y locations.\n\n* roleName and tabLabel matching is case sensitive.\n\n* The defaultRecipient field enables you to specify which recipient the generated tabs from a PDF form are mapped to. You can also set PDF form generated tabs to a recipient other than the DefaultRecipient by specifying the mapping of the tab label that is created to one of the template recipients.\n\n* You can use tabLabel wild carding to map a series of tabs from the PDF form. To use this you must end a tab label with “\*” and then the system matches tabs that start with the label.\n\n* If no DefaultRecipient is specified, tabs must be explicitly mapped to recipients in order to be generated from the form. Unmapped form objects will not be generated into their DocuSign equivalents. (In the case of Signature/Initials, the tabs will be disregarded entirely; in the case of pdf text fields, the field data will be flattened on the Envelope document, but there will not be a corresponding DocuSign data tab.)\n\n### Including the Document Content for Composite Templates\nDocument content can be supplied inline, using the `documentBase64` or can be included in a multi-part HTTP message. \nIf a multi-part message is used and there are multiple Composite Templates, the document content-disposition can include the `compositeTemplateId` to which the document should be added. Using the `compositeTemplateId` sets which documents are associated with particular composite templates. An example of this usage is:\n\n```\n   --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d\n   Content-Type: application/pdf\n   Content-Disposition: file; filename=\&quot;eula.pdf\&quot;; documentId=1; compositeTemplateId=\&quot;1\&quot;\n   Content-Transfer-Encoding: base64\n```\n\n### PDF Form Field Transformation\nOnly the following PDF Form FieldTypes will be transformed to DocuSign tabs: CheckBox, DateTime, ListBox, Numeric, Password, Radio, Signature, and Text\n\nField Properties that will be transformed: Read Only, Required, Max Length, Positions, and Initial Data.\n\nWhen transforming a *PDF Form Digital Signature Field,* the following rules are used:\n\nIf the PDF Field Name Contains | Then the DocuSign Tab Will be\n------- | --------\nDocuSignSignHere or eSignSignHere | Signature\nDocuSignSignHereOptional or eSignSignHereOptional | Optional Signature\nDocuSignInitialHere or eSignInitialHere | Initials\nDocuSignInitialHereOptional or eSignInitialHereOptional | Optional Initials\n\nAny other PDF Form Digital Signature Field will be transformed to a DocuSign Signature tab\n\nWhen transforming *PDF Form Text Fields,* the following rules are used:\n\nIf the PDF Field Name Contains | Then the DocuSign Tab Will be\n------- | --------\nDocuSignSignHere or eSignSignHere | Signature\nDocuSignSignHereOptional or eSignSignHereOptional | Optional Signature\nDocuSignInitialHere or eSignInitialHere | Initials\nDocuSignInitialHereOptional or eSignInitialHereOptional | Optional Initials\nDocuSignEnvelopeID or eSignEnvelopeID | EnvelopeID\nDocuSignCompany or eSignCompany | Company\nDocuSignDateSigned or eSignDateSigned | Date Signed\nDocuSignTitle or eSignTitle | Title\nDocuSignFullName or eSignFullName |  Full Name\nDocuSignSignerAttachmentOptional or eSignSignerAttachmentOptional | Optional Signer Attachment\n\nAny other PDF Form Text Field will be transformed to a DocuSign data (text) tab.\n\nPDF Form Field Names that include “DocuSignIgnoreTransform” or “eSignIgnoreTransform” will not be transformed.\n\nPDF Form Date fields will be transformed to Date Signed fields if their name includes DocuSignDateSigned or eSignDateSigned.\n\n## Template Email Subject Merge Fields\nThis feature enables you to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.\n\nThe merge fields, based on the recipient’s `roleName`, are added to the `emailSubject` when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.\n\nBoth the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.\n\nIf merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.\n\n* To add a recipient’s name in the subject line add the following text in the `emailSubject` when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_UserName]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,`\n\n* To add a recipient’s email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_Email]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,`\n\nIn both cases the &lt;roleName&gt; is the recipient’s `roleName` in the template.\n\nFor cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.\n\n## Branding an envelope\nThe following rules are used to determine the `brandId` used in an envelope:\n\n* If a `brandId` is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope.\n* If more than one template is used in an envelope and more than one `brandId` is specified, the first `brandId` specified is used throughout the envelope.\n* In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account’s default signing brand is used.\n* For envelopes that do not meet any of the previous criteria, the account’s default signing brand is used for the envelope.\n\n## BCC Email address feature \nThe BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, don’t use the BCC Email field. Use a Carbon Copy or Certified Delivery Recipient type.\n\n## Merge Recipient Roles for Draft Envelopes\nWhen an envelope with multiple templates is sent, the recipients from the templates are merged according to the template roles, and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.\n\nTo prevent this, the query parameter `merge_roles_on_draft` should be added when posting a draft envelope (status=created) with multiple templates. Doing this will merge template roles and remove empty recipients.\n\n###### Note: DocuSign recommends that the `merge_roles_on_draft` query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.
    /// </summary>
    self.CreateEnvelopeOptions = function () {
      
      var mergeRolesOnDraft = null;
      
      var cdseMode = null;
      
      var completedDocumentsOnly = null;
      
      
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
      
      /*
       * If set to true then we want to set the sourceEnvelopeId to indicate that this is a\&quot;forward\&quot; envelope action
       */
      this.setCompletedDocumentsOnly = function(completedDocumentsOnly) {
        this.completedDocumentsOnly = completedDocumentsOnly;
      }
	
      this.getCompletedDocumentsOnly = function() {
        return this.completedDocumentsOnly;
      }
      
    }
    
    
    /**
     * Creates an envelope.
     * Creates an envelope. \n\nUsing this function you can:\n* Create an envelope and send it.\n* Create an envelope from an existing template and send it.\n\nIn either case, you can choose to save the envelope as a draft envelope instead of sending it by setting the request’s `status` property to `created` instead of `sent`.\n\n## Sending Envelopes\n\nDocuments can be included with the Envelopes::create call itself or a template can include documents. Documents can be added by using a multi-part/form request or by using the `documentBase64` field of the [`document` object](#/definitions/document)\n\n### Recipient Types\nAn [`envelopeDefinition` object](#/definitions/envelopeDefinition) is used as the method’s body. Envelope recipients can be defined in the envelope or in templates. The `envelopeDefinition` object’s `recipients` field is an [`EnvelopeRecipients` resource object](#/definitions/EnvelopeRecipients). It includes arrays of the seven types of recipients defined by DocuSign:\n\nRecipient type | Object definition\n-------------- | -----------------\nagent (can add name and email information for later recipients/signers) | [`agent`](#/definitions/agent)\ncarbon copy (receives a copy of the documents) | [`carbonCopy`](#/definitions/carbonCopy)\ncertified delivery  (receives a copy of the documents and must acknowledge receipt) | [`certifiedDelivery`](#/definitions/certifiedDelivery)\neditor (can change recipients and document fields for later recipients/signers) | [`editor`](#/definitions/editor)\nin-person signer (“hosts” someone who signs in-person) | [`inPersonSigner`](#/definitions/inPersonSigner)\nintermediary (can add name and email information for some later recipients/signers.) | [`intermediary`](#/definitions/intermediary)\nsigner (signs and/or updates document fields) | [`signer`](#/definitions/signer)\n\nAdditional information about the different types of recipients is available from the [`EnvelopeRecipients` resource page](../../EnvelopeRecipients) and from the [Developer Center](https://www.docusign.com/developer-center/explore/features/recipients)\n\n### Tabs\nTabs (also referred to as `tags` and as `fields` in the web sending user interface), can be defined in the `envelopeDefinition`, in templates, by transforming PDF Form Fields, or by using Composite Templates (see below).\n\nDefining tabs: the `inPersonSigner`, and `signer` recipient objects include a `tabs` field. It is an [`EnvelopeTabs` resource object](#/definitions/EnvelopeTabs). It includes arrays of the 24 different tab types available. See the [`EnvelopeTabs` resource](../../EnvelopeTabs) for more information.\n\n## Using Templates\nEnvelopes use specific people or groups as recipients. Templates can specify a role, eg `account_manager.` When a template is used in an envelope, the roles must be replaced with specific people or groups.\n\nWhen you create an envelope using a `templateId`, the different recipient type objects within the [`EnvelopeRecipients` object](#/definitions/EnvelopeRecipients) are used to assign recipients to the template’s roles via the `roleName` property. The recipient objects can also override settings that were specified in the template, and set values for tab fields that were defined in the template.\n\n### Message Lock\nWhen a template is added or applied to an envelope and the template has a locked email subject and message, that subject and message are used for the envelope and cannot be changed even if another locked template is subsequently added or applied to the envelope. The field `messageLock` is used to lock the email subject and message.\n\nIf an email subject or message is entered before adding or applying a template with `messageLock` **true**, the email subject and message is overwritten with the locked email subject and message from the template.\n\n## Envelope Status\nThe status of sent envelopes can be determined through the DocuSign webhook system or by polling. Webhooks are highly recommended: they provide your application with the quickest updates when an envelope’s status changes. DocuSign limits polling to once every 15 minutes or less frequently.\n\nWhen a webhook is used, DocuSign calls your application, via the URL you provide, with a notification XML message. \n\nSee the [Webhook recipe](https://www.docusign.com/developer-center/recipes/webhook-status) for examples and live demos of using webhooks.\n\n## Webhook Options\nThe two webhook options, *eventNotification* and *Connect* use the same notification mechanism and message formats. eventNotification is used to create a webhook for a specific envelope sent via the API. Connect webhooks can be used for any envelope sent from an account, from any user, from any client. \n\n### eventNotification Webhooks\nThe Envelopes::create method includes an optional [eventNotification object](#definition-eventNotification) that adds a webhook to the envelope. eventNotification webhooks are available for all DocuSign accounts with API access.\n\n### Connect Webhooks\nConnect can be used to create a webhook for all envelopes sent by all users in an account, either through the API or via other DocuSign clients (web, mobile, etc). Connect configurations are independent of specific envelopes. A Connect configuration includes a filter that may be used to limit the webhook to specific users, envelope statuses, etc. \n\nConnect configurations may be created and managed using the [ConnectConfigurations resource](../../Connect/ConnectConfigurations). Configurations can also be created and managed from the Administration tool accessed by selecting “Go to Admin” from the menu next to your picture on the DocuSign web app. See the Integrations/Connect section of the Admin tool. For repeatability, and to minimize support questions, creating Connect configurations via the API is recommended, especially for ISVs.\n\nConnect is available for some DocuSign account types. Please contact DocuSign Sales for more information.\n\n## Composite Templates\n\nThe Composite Templates feature, like [compositing in film production](https://en.wikipedia.org/wiki/Compositing), enables you to *overlay* document, recipient, and tab definitions from multiple sources, including PDF Form Field definitions, templates defined on the server, and more.\n\nEach Composite Template consists of optional elements: server templates, inline templates, PDF Metadata templates, and documents.\n\n* The Composite Template ID is an optional element used to identify the composite template. It is used as a reference when adding document object information via a multi-part HTTP message. If used, the document content-disposition must include the `compositeTemplateId` to which the document should be added. If `compositeTemplateId` is not specified in the content-disposition, the document is applied based on the `documentId` only. If no document object is specified, the composite template inherits the first document.\n\n* Server Templates are server-side templates stored on the DocuSign platform. If supplied, they are overlaid into the envelope in the order of their Sequence value.\n\n* Inline Templates provide a container to add documents, recipients, tabs, and custom fields. If inline templates are supplied, they are overlaid into the envelope in the order of their Sequence value.\n\n* Document objects are optional structures that provide a container to pass in a document or form. If this object is not included, the composite template inherits the *first* document it finds from a server template or inline template, starting with the lowest sequence value.\n\nPDF Form objects are only transformed from the document object. DocuSign does not derive PDF form properties from server templates or inline templates. To instruct DocuSign to transform fields from the PDF form, set `transformPdfFields` to \&quot;true\&quot; for the document. See the Transform PDF Fields section for more information about process.\n\n* PDF Metadata Templates provide a container to embed design-time template information into a PDF document. DocuSign uses this information when processing the Envelope. This convention allows the document to carry the signing instructions with it, so that less information needs to be provided at run-time through an inline template or synchronized with an external structure like a server template. PDF Metadata templates are stored in the Metadata layer of a PDF in accordance with Acrobat&#39;s XMP specification. DocuSign will only find PDF Metadata templates inside documents passed in the Document object (see below). If supplied, the PDF metadata template will be overlaid into the envelope in the order of its Sequence value.\n\n### Compositing the definitions\nEach Composite Template adds a new document and templates overlay into the envelope. For each Composite Template these rules are applied:\n\n* Templates are overlaid in the order of their Sequence value.\n* If Document is not passed into the Composite Template’s `document` field, the *first* template’s document (based on the template’s Sequence value) is used.\n* Last in wins in all cases except for the document (i.e. envelope information, recipient information, secure field information). There is no special casing.\n\nFor example, if you want higher security on a tab, then that needs to be specified in a later template (by sequence number) then where the tab is included. If you want higher security on a role recipient, then it needs to be in a later template then where that role recipient is specified.\n\n* Recipient matching is based on Recipient Role and Routing Order. If there are matches, the recipient information is merged together. A final pass is done on all Composite Templates, after all template overlays have been applied, to collapse recipients with the same email, username and routing order. This prevents having the same recipients at the same routing order.\n\n* If you specify in a template that a recipient is locked, once that recipient is overlaid the recipient attributes can no longer be changed. The only items that can be changed for the recipient in this case are the email, username, access code and IDCheckInformationInput.\n\n* Tab matching is based on Tab Labels, Tab Types and Documents. If a Tab Label matches but the Document is not supplied, the Tab is overlaid for all the Documents.\n\nFor example, if you have a simple inline template with only one tab in it with a label and a value, the Signature, Initial, Company, Envelope ID, User Name tabs will only be matched and collapsed if they fall in the exact same X and Y locations.\n\n* roleName and tabLabel matching is case sensitive.\n\n* The defaultRecipient field enables you to specify which recipient the generated tabs from a PDF form are mapped to. You can also set PDF form generated tabs to a recipient other than the DefaultRecipient by specifying the mapping of the tab label that is created to one of the template recipients.\n\n* You can use tabLabel wild carding to map a series of tabs from the PDF form. To use this you must end a tab label with “\*” and then the system matches tabs that start with the label.\n\n* If no DefaultRecipient is specified, tabs must be explicitly mapped to recipients in order to be generated from the form. Unmapped form objects will not be generated into their DocuSign equivalents. (In the case of Signature/Initials, the tabs will be disregarded entirely; in the case of pdf text fields, the field data will be flattened on the Envelope document, but there will not be a corresponding DocuSign data tab.)\n\n### Including the Document Content for Composite Templates\nDocument content can be supplied inline, using the `documentBase64` or can be included in a multi-part HTTP message. \nIf a multi-part message is used and there are multiple Composite Templates, the document content-disposition can include the `compositeTemplateId` to which the document should be added. Using the `compositeTemplateId` sets which documents are associated with particular composite templates. An example of this usage is:\n\n```\n   --5cd3320a-5aac-4453-b3a4-cbb52a4cba5d\n   Content-Type: application/pdf\n   Content-Disposition: file; filename=\&quot;eula.pdf\&quot;; documentId=1; compositeTemplateId=\&quot;1\&quot;\n   Content-Transfer-Encoding: base64\n```\n\n### PDF Form Field Transformation\nOnly the following PDF Form FieldTypes will be transformed to DocuSign tabs: CheckBox, DateTime, ListBox, Numeric, Password, Radio, Signature, and Text\n\nField Properties that will be transformed: Read Only, Required, Max Length, Positions, and Initial Data.\n\nWhen transforming a *PDF Form Digital Signature Field,* the following rules are used:\n\nIf the PDF Field Name Contains | Then the DocuSign Tab Will be\n------- | --------\nDocuSignSignHere or eSignSignHere | Signature\nDocuSignSignHereOptional or eSignSignHereOptional | Optional Signature\nDocuSignInitialHere or eSignInitialHere | Initials\nDocuSignInitialHereOptional or eSignInitialHereOptional | Optional Initials\n\nAny other PDF Form Digital Signature Field will be transformed to a DocuSign Signature tab\n\nWhen transforming *PDF Form Text Fields,* the following rules are used:\n\nIf the PDF Field Name Contains | Then the DocuSign Tab Will be\n------- | --------\nDocuSignSignHere or eSignSignHere | Signature\nDocuSignSignHereOptional or eSignSignHereOptional | Optional Signature\nDocuSignInitialHere or eSignInitialHere | Initials\nDocuSignInitialHereOptional or eSignInitialHereOptional | Optional Initials\nDocuSignEnvelopeID or eSignEnvelopeID | EnvelopeID\nDocuSignCompany or eSignCompany | Company\nDocuSignDateSigned or eSignDateSigned | Date Signed\nDocuSignTitle or eSignTitle | Title\nDocuSignFullName or eSignFullName |  Full Name\nDocuSignSignerAttachmentOptional or eSignSignerAttachmentOptional | Optional Signer Attachment\n\nAny other PDF Form Text Field will be transformed to a DocuSign data (text) tab.\n\nPDF Form Field Names that include “DocuSignIgnoreTransform” or “eSignIgnoreTransform” will not be transformed.\n\nPDF Form Date fields will be transformed to Date Signed fields if their name includes DocuSignDateSigned or eSignDateSigned.\n\n## Template Email Subject Merge Fields\nThis feature enables you to insert recipient name and email address merge fields into the email subject line when creating or sending from a template.\n\nThe merge fields, based on the recipient’s `roleName`, are added to the `emailSubject` when the template is created or when the template is used to create an envelope. After a template sender adds the name and email information for the recipient and sends the envelope, the recipient information is automatically merged into the appropriate fields in the email subject line.\n\nBoth the sender and the recipients will see the information in the email subject line for any emails associated with the template. This provides an easy way for senders to organize their envelope emails without having to open an envelope to check the recipient.\n\nIf merging the recipient information into the subject line causes the subject line to exceed 100 characters, then any characters over the 100 character limit are not included in the subject line. For cases where the recipient name or email is expected to be long, you should consider placing the merge field at the start of the email subject.\n\n* To add a recipient’s name in the subject line add the following text in the `emailSubject` when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_UserName]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_UserName]], Please sign this NDA\&quot;,`\n\n* To add a recipient’s email address in the subject line add the following text in the emailSubject when creating the template or when sending an envelope from a template:\n\n   [[&lt;roleName&gt;_Email]]\n\n   Example:\n\n   `\&quot;emailSubject\&quot;:\&quot;[[Signer 1_Email]], Please sign this NDA\&quot;,`\n\nIn both cases the &lt;roleName&gt; is the recipient’s `roleName` in the template.\n\nFor cases where another recipient (such as an Agent, Editor, or Intermediary recipient) is entering the name and email information for the recipient included in the email subject, then [[&lt;roleName&gt;_UserName]] or [[&lt;roleName&gt;_Email]] is shown in the email subject.\n\n## Branding an envelope\nThe following rules are used to determine the `brandId` used in an envelope:\n\n* If a `brandId` is specified in the envelope/template and that brandId is available to the account, that brand is used in the envelope.\n* If more than one template is used in an envelope and more than one `brandId` is specified, the first `brandId` specified is used throughout the envelope.\n* In cases where no brand is specified and the sender belongs to a Group; if there is only one brand associated with the Group, then that brand is used in the envelope. Otherwise, the account’s default signing brand is used.\n* For envelopes that do not meet any of the previous criteria, the account’s default signing brand is used for the envelope.\n\n## BCC Email address feature \nThe BCC Email address feature is designed to provide a copy of all email communications for external archiving purposes. DocuSign recommends that envelopes sent using the BCC for Email Archive feature, including the BCC Email Override option, include additional signer authentication options. To send a copy of the envelope to a recipient who does not need to sign, don’t use the BCC Email field. Use a Carbon Copy or Certified Delivery Recipient type.\n\n## Merge Recipient Roles for Draft Envelopes\nWhen an envelope with multiple templates is sent, the recipients from the templates are merged according to the template roles, and empty recipients are removed. When creating an envelope with multiple templates, but not sending it (keeping it in a created state), duplicate recipients are not merged, which could cause leave duplicate recipients in the envelope.\n\nTo prevent this, the query parameter `merge_roles_on_draft` should be added when posting a draft envelope (status=created) with multiple templates. Doing this will merge template roles and remove empty recipients.\n\n###### Note: DocuSign recommends that the `merge_roles_on_draft` query parameter be used anytime you are creating an envelope with multiple templates and keeping it in draft (created) status.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {EnvelopeDefinition} envelopeDefinition: 
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
          'cdse_mode': options.cdseMode,
          'completed_documents_only': options.completedDocumentsOnly
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
    
    
    /// <summary>
    /// Gets the envelope status for the specified envelopes. Retrieves the envelope status for the specified envelopes.
    /// </summary>
    self.ListStatusOptions = function () {
      
      var fromDate = null;
      
      var startPosition = null;
      
      var toDate = null;
      
      var email = null;
      
      
      this.setFromDate = function(fromDate) {
        this.fromDate = fromDate;
      }
	
      this.getFromDate = function() {
        return this.fromDate;
      }
      
      this.setStartPosition = function(startPosition) {
        this.startPosition = startPosition;
      }
	
      this.getStartPosition = function() {
        return this.startPosition;
      }
      
      this.setToDate = function(toDate) {
        this.toDate = toDate;
      }
	
      this.getToDate = function() {
        return this.toDate;
      }
      
      this.setEmail = function(email) {
        this.email = email;
      }
	
      this.getEmail = function() {
        return this.email;
      }
      
    }
    
    
    /**
     * Gets the envelope status for the specified envelopes.
     * Retrieves the envelope status for the specified envelopes.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {EnvelopeIdsRequest} envelopeIdsRequest: 
     * @param {EnvelopesApi.ListStatusOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopesInformation
     */
    self.listStatus = function(accountId, envelopeIdsRequest, options, callback) {
      var postBody = envelopeIdsRequest;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling listStatus";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'from_date': options.fromDate,
          'start_position': options.startPosition,
          'to_date': options.toDate,
          'email': options.email
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
        '/v2/accounts/{accountId}/envelopes/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Gets the status of a envelope. Retrieves the overall status for the specified envelope.
    /// </summary>
    self.GetEnvelopeOptions = function () {
      
      var advancedUpdate = null;
      
      var include = null;
      
      
      /*
       * When true, envelope information can be added or modified.
       */
      this.setAdvancedUpdate = function(advancedUpdate) {
        this.advancedUpdate = advancedUpdate;
      }
	
      this.getAdvancedUpdate = function() {
        return this.advancedUpdate;
      }
      
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
          'advanced_update': options.advancedUpdate,
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
    /// Send Draft Envelope/Void Envelope/Move/Purge Envelope/Modify draft The Put Envelopes endpoint provides the following functionality:\n\n* Sends the specified single draft envelope.\nAdd {\&quot;status\&quot;:\&quot;sent\&quot;} to the request body to send the envelope.\n\n* Voids the specified in-process envelope.\nAdd {\&quot;status\&quot;:\&quot;voided\&quot;, \&quot;voidedReason\&quot;:\&quot;The reason for voiding the envelope\&quot;} to the request body to void the envelope.\n\n* Replaces the current email subject and message for a draft envelope.\nAdd {\&quot;emailSubject\&quot;:\&quot;subject\&quot;,  \&quot;emailBlurb\&quot;:\&quot;message\&quot;}  to the request body to modify the subject and message.\n\n* Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system.\nAdd {\&quot;purgeState\&quot;:\&quot;purge type\&quot;} to the request body.\n\n*Additional information on purging documents*\n\nThe purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).\n\n###### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period. \n###### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents. \n###### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.\n\nWhen the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.\n\nIf `purgeState=\&quot;documents_queued\&quot;` is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If `purgeState= \&quot;documents_and_metadata_queued\&quot;` is used in the request, then the documents, attachments, and tabs are deleted.
    /// </summary>
    self.UpdateOptions = function () {
      
      var advancedUpdate = null;
      
      var resendEnvelope = null;
      
      
      /*
       * When set to **true**, allows the caller to update recipients, tabs, custom fields, notification, email settings and other envelope attributes.
       */
      this.setAdvancedUpdate = function(advancedUpdate) {
        this.advancedUpdate = advancedUpdate;
      }
	
      this.getAdvancedUpdate = function() {
        return this.advancedUpdate;
      }
      
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
     * The Put Envelopes endpoint provides the following functionality:\n\n* Sends the specified single draft envelope.\nAdd {\&quot;status\&quot;:\&quot;sent\&quot;} to the request body to send the envelope.\n\n* Voids the specified in-process envelope.\nAdd {\&quot;status\&quot;:\&quot;voided\&quot;, \&quot;voidedReason\&quot;:\&quot;The reason for voiding the envelope\&quot;} to the request body to void the envelope.\n\n* Replaces the current email subject and message for a draft envelope.\nAdd {\&quot;emailSubject\&quot;:\&quot;subject\&quot;,  \&quot;emailBlurb\&quot;:\&quot;message\&quot;}  to the request body to modify the subject and message.\n\n* Place the envelope documents and envelope metadata in a purge queue so that this information is removed from the DocuSign system.\nAdd {\&quot;purgeState\&quot;:\&quot;purge type\&quot;} to the request body.\n\n*Additional information on purging documents*\n\nThe purge request can only be used for completed envelopes that are not marked as the authoritative copy. The requesting user must have permission to purge documents and must be the sender (the requesting user can act as the sender using Send On Behalf Of).\n\n###### Note: If you have set the Document Retention policy on your account, envelope documents are automatically placed in the purge queue and the warning emails are sent at the end of the retention period. \n###### Note: You can set the Document Retention policy in the Classic DocuSign Experience by specifying the number of days to retain documents. \n###### Note: Setting a Document Retention policy is the same as setting a schedule for purging documents.\n\nWhen the purge request is initiated the envelope documents, or documents and envelope metadata, are placed in a purge queue for deletion in 14 days. A warning email notification is sent to the sender and recipients associated with the envelope, notifying them that the envelope documents will be deleted in 14 days and providing a link to the documents. A second email is sent 7 days later with the same message. At the end of the 14-day period, the envelope documents are deleted from the system.\n\nIf `purgeState=\&quot;documents_queued\&quot;` is used in the request, then only the documents are deleted and any corresponding attachments and tabs remain in the DocuSign system. If `purgeState= \&quot;documents_and_metadata_queued\&quot;` is used in the request, then the documents, attachments, and tabs are deleted.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {Envelope} envelope: 
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
          'advanced_update': options.advancedUpdate,
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
     * @param {CustomFields} customFields: 
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
     * @param {CustomFields} customFields: 
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
     * @param {CustomFields} customFields: 
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
    
    
    /// <summary>
    /// Adds one or more documents to an existing envelope document. Adds one or more documents to an existing envelope document.
    /// </summary>
    self.UpdateDocumentsOptions = function () {
      
      var applyDocumentFields = null;
      
      
      /*
       * When true, Document fields can be added or modified while adding or modifying envelope documents.
       */
      this.setApplyDocumentFields = function(applyDocumentFields) {
        this.applyDocumentFields = applyDocumentFields;
      }
	
      this.getApplyDocumentFields = function() {
        return this.applyDocumentFields;
      }
      
    }
    
    
    /**
     * Adds one or more documents to an existing envelope document.
     * Adds one or more documents to an existing envelope document.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EnvelopeDefinition} envelopeDefinition: 
     * @param {EnvelopesApi.UpdateDocumentsOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: EnvelopeDocumentsResult
     */
    self.updateDocuments = function(accountId, envelopeId, envelopeDefinition, options, callback) {
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
      if (options != null) {
        queryParams = {
          'apply_document_fields': options.applyDocumentFields
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
     * @param {EnvelopeDefinition} envelopeDefinition: 
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
    
    
    /// <summary>
    /// Gets a document from an envelope. Retrieves the specified document from the envelope. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.\n\nYou can also use this method to retrieve a PDF containing the combined content of all documents and the certificate. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted. \n\nTo retrieve the combined content replace the `{documentId}` parameter in the endpoint with `combined`.\n/accounts/{accountId}/envelopes/{envelopeId}/documents/combined
    /// </summary>
    self.GetDocumentOptions = function () {
      
      var recipientId = null;
      
      var certificate = null;
      
      var language = null;
      
      var encoding = null;
      
      var showChanges = null;
      
      var encrypt = null;
      
      var watermark = null;
      
      
      this.setRecipientId = function(recipientId) {
        this.recipientId = recipientId;
      }
	
      this.getRecipientId = function() {
        return this.recipientId;
      }
      
      /*
       * When set to **false**, the envelope signing certificate is removed from the download.
       */
      this.setCertificate = function(certificate) {
        this.certificate = certificate;
      }
	
      this.getCertificate = function() {
        return this.certificate;
      }
      
      /*
       * Specifies the language for the Certificate of Completion in the response. The supported languages, with the language value shown in parenthesis, are: Chinese Simplified (zh_CN), , Chinese Traditional (zh_TW), Dutch (nl), English US (en), French (fr), German (de), Italian (it), Japanese (ja), Korean (ko), Portuguese (pt), Portuguese (Brazil) (pt_BR), Russian (ru), Spanish (es).
       */
      this.setLanguage = function(language) {
        this.language = language;
      }
	
      this.getLanguage = function() {
        return this.language;
      }
      
      this.setEncoding = function(encoding) {
        this.encoding = encoding;
      }
	
      this.getEncoding = function() {
        return this.encoding;
      }
      
      /*
       * When set to **true**, any changed fields for the returned PDF are highlighted in yellow and optional signatures or initials outlined in red.
       */
      this.setShowChanges = function(showChanges) {
        this.showChanges = showChanges;
      }
	
      this.getShowChanges = function() {
        return this.showChanges;
      }
      
      /*
       * When set to **true**, the PDF bytes returned in the response are encrypted for all the key managers configured on your DocuSign account. The documents can be decrypted with the KeyManager Decrypt Document API.
       */
      this.setEncrypt = function(encrypt) {
        this.encrypt = encrypt;
      }
	
      this.getEncrypt = function() {
        return this.encrypt;
      }
      
      /*
       * When set to **true**, the account has the watermark feature enabled, and the envelope is not complete, the watermark for the account is added to the PDF documents. This option can remove the watermark.
       */
      this.setWatermark = function(watermark) {
        this.watermark = watermark;
      }
	
      this.getWatermark = function() {
        return this.watermark;
      }
      
    }
    
    
    /**
     * Gets a document from an envelope.
     * Retrieves the specified document from the envelope. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted.\n\nYou can also use this method to retrieve a PDF containing the combined content of all documents and the certificate. If the account has the Highlight Data Changes feature enabled, there is an option to request that any changes in the envelope be highlighted. \n\nTo retrieve the combined content replace the `{documentId}` parameter in the endpoint with `combined`.\n/accounts/{accountId}/envelopes/{envelopeId}/documents/combined
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {EnvelopesApi.GetDocumentOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: File
     */
    self.getDocument = function(accountId, envelopeId, documentId, options, callback) {
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
      if (options != null) {
        queryParams = {
          'recipient_id': options.recipientId,
          'certificate': options.certificate,
          'language': options.language,
          'encoding': options.encoding,
          'show_changes': options.showChanges,
          'encrypt': options.encrypt,
          'watermark': options.watermark
        };
      }
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
     * @param {DocumentFieldsInformation} documentFieldsInformation: 
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
     * @param {DocumentFieldsInformation} documentFieldsInformation: 
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
     * @param {DocumentFieldsInformation} documentFieldsInformation: 
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
    
    
    /// <summary>
    /// Gets the templates associated with a document in an existing envelope. Retrieves the templates associated with a document in the specified envelope.
    /// </summary>
    self.ListTemplatesForDocumentOptions = function () {
      
      var include = null;
      
      
      this.setInclude = function(include) {
        this.include = include;
      }
	
      this.getInclude = function() {
        return this.include;
      }
      
    }
    
    
    /**
     * Gets the templates associated with a document in an existing envelope.
     * Retrieves the templates associated with a document in the specified envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} documentId: The ID of the document being accessed.
     * @param {EnvelopesApi.ListTemplatesForDocumentOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateInformation
     */
    self.listTemplatesForDocument = function(accountId, envelopeId, documentId, options, callback) {
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
     * @param {DocumentTemplateList} documentTemplateList: 
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
     * @param {EmailSettings} emailSettings: 
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
     * @param {EmailSettings} emailSettings: 
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
     * @param {LockRequest} lockRequest: 
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
     * Locks the specified envelope, and sets the time until the lock expires, to prevent other users or recipients from accessing and changing the envelope.\n\n###### Note: Users must have envelope locking capability enabled to use this function (userSetting `canLockEnvelopes` must be  set to true for the user).
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {LockRequest} lockRequest: 
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
    
    
    /// <summary>
    /// Gets the status of recipients for an envelope. Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list. \n\nThe `currentRoutingOrder` property of the response contains the `routingOrder` value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.
    /// </summary>
    self.ListRecipientsOptions = function () {
      
      var includeExtended = null;
      
      var includeAnchorTabLocations = null;
      
      var includeTabs = null;
      
      var includeMetadata = null;
      
      
      /*
       * When set to **true**, the extended properties are included in the response.
       */
      this.setIncludeExtended = function(includeExtended) {
        this.includeExtended = includeExtended;
      }
	
      this.getIncludeExtended = function() {
        return this.includeExtended;
      }
      
      /*
       * When set to **true** and `include_tabs` is set to **true**, all tabs with anchor tab properties are included in the response.
       */
      this.setIncludeAnchorTabLocations = function(includeAnchorTabLocations) {
        this.includeAnchorTabLocations = includeAnchorTabLocations;
      }
	
      this.getIncludeAnchorTabLocations = function() {
        return this.includeAnchorTabLocations;
      }
      
      /*
       * When set to **true**, the tab information associated with the recipient is included in the response.
       */
      this.setIncludeTabs = function(includeTabs) {
        this.includeTabs = includeTabs;
      }
	
      this.getIncludeTabs = function() {
        return this.includeTabs;
      }
      
      this.setIncludeMetadata = function(includeMetadata) {
        this.includeMetadata = includeMetadata;
      }
	
      this.getIncludeMetadata = function() {
        return this.includeMetadata;
      }
      
    }
    
    
    /**
     * Gets the status of recipients for an envelope.
     * Retrieves the status of all recipients in a single envelope and identifies the current recipient in the routing list. \n\nThe `currentRoutingOrder` property of the response contains the `routingOrder` value of the current recipient indicating that the envelope has been sent to the recipient, but the recipient has not completed their actions.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EnvelopesApi.ListRecipientsOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.listRecipients = function(accountId, envelopeId, options, callback) {
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
      if (options != null) {
        queryParams = {
          'include_extended': options.includeExtended,
          'include_anchor_tab_locations': options.includeAnchorTabLocations,
          'include_tabs': options.includeTabs,
          'include_metadata': options.includeMetadata
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
    
    
    /// <summary>
    /// Updates recipients in a draft envelope or corrects recipient information for an in process envelope. Updates recipients in a draft envelope or corrects recipient information for an in process envelope. \n\nFor draft envelopes, you can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.\n\nOnce an envelope has been sent, you can only edit: `email`, `userName`, `signerName`, `routingOrder`, `faxNumber`, and `deliveryMethod`. You can also select to resend an envelope by using the `resend_envelope` option.\n\nIf you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).
    /// </summary>
    self.UpdateRecipientsOptions = function () {
      
      var resendEnvelope = null;
      
      
      /*
       * When set to **true**, resends the   envelope if the new recipient&#39;s routing order is before or the same as the envelope’s next recipient.
       */
      this.setResendEnvelope = function(resendEnvelope) {
        this.resendEnvelope = resendEnvelope;
      }
	
      this.getResendEnvelope = function() {
        return this.resendEnvelope;
      }
      
    }
    
    
    /**
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope.
     * Updates recipients in a draft envelope or corrects recipient information for an in process envelope. \n\nFor draft envelopes, you can edit the following properties: `email`, `userName`, `routingOrder`, `faxNumber`, `deliveryMethod`, `accessCode`, and `requireIdLookup`.\n\nOnce an envelope has been sent, you can only edit: `email`, `userName`, `signerName`, `routingOrder`, `faxNumber`, and `deliveryMethod`. You can also select to resend an envelope by using the `resend_envelope` option.\n\nIf you send information for a recipient that does not already exist in a draft envelope, the recipient is added to the envelope (similar to the POST).
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {Recipients} recipients: 
     * @param {EnvelopesApi.UpdateRecipientsOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: RecipientsUpdateSummary
     */
    self.updateRecipients = function(accountId, envelopeId, recipients, options, callback) {
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
    
    
    /// <summary>
    /// Adds one or more recipients to an envelope. Adds one or more recipients to an envelope.\n\nFor an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient&#39;s routing order is before or the same as the envelope&#39;s next recipient, an email is only sent if the optional `resend_envelope` query string is set to **true**.
    /// </summary>
    self.CreateRecipientOptions = function () {
      
      var resendEnvelope = null;
      
      
      /*
       * When set to **true**, resends the   envelope if the new recipient&#39;s routing order is before or the same as the envelope’s next recipient.
       */
      this.setResendEnvelope = function(resendEnvelope) {
        this.resendEnvelope = resendEnvelope;
      }
	
      this.getResendEnvelope = function() {
        return this.resendEnvelope;
      }
      
    }
    
    
    /**
     * Adds one or more recipients to an envelope.
     * Adds one or more recipients to an envelope.\n\nFor an in process envelope, one that has been sent and has not been completed or voided, an email is sent to a new recipient when they are reached in the routing order. If the new recipient&#39;s routing order is before or the same as the envelope&#39;s next recipient, an email is only sent if the optional `resend_envelope` query string is set to **true**.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {Recipients} recipients: 
     * @param {EnvelopesApi.CreateRecipientOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Recipients
     */
    self.createRecipient = function(accountId, envelopeId, recipients, options, callback) {
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
     * @param {Recipients} recipients: 
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
    
    
    /// <summary>
    /// Gets the tabs information for a signer or sign-in-person recipient in an envelope. Retrieves information about the tabs associated with a recipient in a draft envelope.
    /// </summary>
    self.ListTabsOptions = function () {
      
      var includeAnchorTabLocations = null;
      
      var includeMetadata = null;
      
      
      /*
       * When set to **true**, all tabs with anchor tab properties are included in the response.
       */
      this.setIncludeAnchorTabLocations = function(includeAnchorTabLocations) {
        this.includeAnchorTabLocations = includeAnchorTabLocations;
      }
	
      this.getIncludeAnchorTabLocations = function() {
        return this.includeAnchorTabLocations;
      }
      
      this.setIncludeMetadata = function(includeMetadata) {
        this.includeMetadata = includeMetadata;
      }
	
      this.getIncludeMetadata = function() {
        return this.includeMetadata;
      }
      
    }
    
    
    /**
     * Gets the tabs information for a signer or sign-in-person recipient in an envelope.
     * Retrieves information about the tabs associated with a recipient in a draft envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {String} recipientId: The ID of the recipient being accessed.
     * @param {EnvelopesApi.ListTabsOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: Tabs
     */
    self.listTabs = function(accountId, envelopeId, recipientId, options, callback) {
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
      if (options != null) {
        queryParams = {
          'include_anchor_tab_locations': options.includeAnchorTabLocations,
          'include_metadata': options.includeMetadata
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
     * @param {Tabs} tabs: 
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
     * @param {Tabs} tabs: 
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
     * @param {Tabs} tabs: 
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
    
    
    /// <summary>
    /// Get List of Templates used in an Envelope This returns a list of the server-side templates, their name and ID, used in an envelope.
    /// </summary>
    self.ListTemplatesOptions = function () {
      
      var include = null;
      
      
      /*
       * The possible values are:  matching_applied – This returns template matching information for the template.
       */
      this.setInclude = function(include) {
        this.include = include;
      }
	
      this.getInclude = function() {
        return this.include;
      }
      
    }
    
    
    /**
     * Get List of Templates used in an Envelope
     * This returns a list of the server-side templates, their name and ID, used in an envelope.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} envelopeId: The envelopeId Guid of the envelope being accessed.
     * @param {EnvelopesApi.ListTemplatesOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TemplateInformation
     */
    self.listTemplates = function(accountId, envelopeId, options, callback) {
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
     * @param {DocumentTemplateList} documentTemplateList: 
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
     * @param {CorrectViewRequest} correctViewRequest: 
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
     * @param {ReturnUrlRequest} returnUrlRequest: 
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
     * @param {RecipientViewRequest} recipientViewRequest: 
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
     * @param {ReturnUrlRequest} returnUrlRequest: 
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
     * @param {ViewLinkRequest} viewLinkRequest: 
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
     * @param {ConsoleViewRequest} consoleViewRequest: 
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
