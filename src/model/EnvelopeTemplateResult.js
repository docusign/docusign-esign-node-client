(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Document', './EmailSettings', './LockInformation', './Notification', './Recipients', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Document'), require('./EmailSettings'), require('./LockInformation'), require('./Notification'), require('./Recipients'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Document, root.Docusign.EmailSettings, root.Docusign.LockInformation, root.Docusign.Notification, root.Docusign.Recipients, root.Docusign.UserInfo);
  }
}(this, function(module, Document, EmailSettings, LockInformation, Notification, Recipients, UserInfo) {
  'use strict';

  
  

  
  var EnvelopeTemplateResult = function EnvelopeTemplateResult() { 
    var self = this;
    
    /**
     * The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * datatype: String
     **/
    self.templateId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * When set to **true**, this custom tab is shared.
     * datatype: String
     **/
    self.shared = null;
    
    /**
     * 
     * datatype: String
     **/
    self.password = null;
    
    /**
     * 
     * datatype: String
     **/
    self.description = null;
    
    /**
     * 
     * datatype: String
     **/
    self.lastModified = null;
    
    /**
     * 
     * datatype: Integer
     **/
    self.pageCount = null;
    
    /**
     * 
     * datatype: String
     **/
    self.uri = null;
    
    /**
     * 
     * datatype: String
     **/
    self.folderName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.folderId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.folderUri = null;
    
    /**
     * 
     * datatype: String
     **/
    self.parentFolderUri = null;
    
    /**
     * datatype: UserInfo
     **/
    self.owner = null;
    
    /**
     * Complex element contains the details on the documents in the envelope.
     * datatype: Array
     **/
    self.documents = [];
    
    /**
     * datatype: Recipients
     **/
    self.recipients = null;
    
    /**
     * Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
     * datatype: String
     **/
    self.transactionId = null;
    
    /**
     * Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * datatype: String
     **/
    self.status = null;
    
    /**
     * Contains a URI for an endpoint that you can use to retrieve the documents.
     * datatype: String
     **/
    self.documentsUri = null;
    
    /**
     * Contains a URI for an endpoint that you can use to retrieve the recipients.
     * datatype: String
     **/
    self.recipientsUri = null;
    
    /**
     * When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed.
     * datatype: String
     **/
    self.asynchronous = null;
    
    /**
     * Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
     * datatype: String
     **/
    self.envelopeUri = null;
    
    /**
     * Specifies the subject of the email that is sent to all recipients.\n\nSee [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
     * datatype: String
     **/
    self.emailSubject = null;
    
    /**
     * 
     * datatype: String
     **/
    self.emailBlurb = null;
    
    /**
     * The envelope ID of the envelope status that failed to post.
     * datatype: String
     **/
    self.envelopeId = null;
    
    /**
     * Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
     * datatype: String
     **/
    self.signingLocation = null;
    
    /**
     * Contains a URI for an endpoint that you can use to retrieve the custom fields.
     * datatype: String
     **/
    self.customFieldsUri = null;
    
    /**
     * When set to **true**, Envelope ID Stamping is enabled.
     * datatype: String
     **/
    self.envelopeIdStamping = null;
    
    /**
     * Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
     * datatype: String
     **/
    self.authoritativeCopy = null;
    
    /**
     * datatype: Notification
     **/
    self.notification = null;
    
    /**
     * Contains a URI for an endpoint that you can use to retrieve the notifications.
     * datatype: String
     **/
    self.notificationUri = null;
    
    /**
     * When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.\n\nYour account must have Document Visibility enabled to use this.
     * datatype: String
     **/
    self.enforceSignerVisibility = null;
    
    /**
     * When set to **true**, the signer is allowed to print the document and sign it on paper.
     * datatype: String
     **/
    self.enableWetSign = null;
    
    /**
     * When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
     * datatype: String
     **/
    self.allowMarkup = null;
    
    /**
     * When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
     * datatype: String
     **/
    self.allowReassign = null;
    
    /**
     * Indicates the date and time the item was created.
     * datatype: String
     **/
    self.createdDateTime = null;
    
    /**
     * The date and time the item was last modified.
     * datatype: String
     **/
    self.lastModifiedDateTime = null;
    
    /**
     * Reserved: For DocuSign use only.
     * datatype: String
     **/
    self.deliveredDateTime = null;
    
    /**
     * The date and time the envelope was sent.
     * datatype: String
     **/
    self.sentDateTime = null;
    
    /**
     * Specifies the date and time this item was completed.
     * datatype: String
     **/
    self.completedDateTime = null;
    
    /**
     * The date and time the envelope or template was voided.
     * datatype: String
     **/
    self.voidedDateTime = null;
    
    /**
     * The reason the envelope or template was voided.
     * datatype: String
     **/
    self.voidedReason = null;
    
    /**
     * Specifies the data and time the item was deleted.
     * datatype: String
     **/
    self.deletedDateTime = null;
    
    /**
     * The date and time the recipient declined the document.
     * datatype: String
     **/
    self.declinedDateTime = null;
    
    /**
     * The data and time the status changed.
     * datatype: String
     **/
    self.statusChangedDateTime = null;
    
    /**
     * 
     * datatype: String
     **/
    self.documentsCombinedUri = null;
    
    /**
     * Retrieves a URI for an endpoint that allows you to easily retrieve certificate information.
     * datatype: String
     **/
    self.certificateUri = null;
    
    /**
     * Contains a URI for an endpoint which you can use to retrieve the templates.
     * datatype: String
     **/
    self.templatesUri = null;
    
    /**
     * When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. \n\nAdditionally, this prevents users from making changes to the contents of `emailBlurb` and `emailSubject` properties when correcting envelopes. \n\nHowever, if the `messageLock` node is set to true**** and the `emailSubject` property is empty, senders and correctors are able to add a subject to the envelope.
     * datatype: String
     **/
    self.messageLock = null;
    
    /**
     * When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
     * datatype: String
     **/
    self.recipientsLock = null;
    
    /**
     * 
     * datatype: String
     **/
    self.brandLock = null;
    
    /**
     * 
     * datatype: String
     **/
    self.brandId = null;
    
    /**
     * When set to **true**, the disclosure is shown to recipients in accordance with the account’s Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. \n\nIf the `useDisclosure` property is not set, then the account's normal disclosure setting is used and the value of the `useDisclosure` property is not returned in responses when getting envelope information.
     * datatype: String
     **/
    self.useDisclosure = null;
    
    /**
     * datatype: EmailSettings
     **/
    self.emailSettings = null;
    
    /**
     * 
     * datatype: String
     **/
    self.purgeState = null;
    
    /**
     * datatype: LockInformation
     **/
    self.lockInformation = null;
    
    /**
     * When set to **true**, indicates that this module is enabled on the account.
     * datatype: String
     **/
    self.is21CFRPart11 = null;
    
    /**
     * 
     * datatype: String
     **/
    self.isUniversalSignatureEnvelope = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.templateId) {
        self.templateId = data.templateId;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.password) {
        self.password = data.password;
      }
      
      if (data.description) {
        self.description = data.description;
      }
      
      if (data.lastModified) {
        self.lastModified = data.lastModified;
      }
      
      if (data.pageCount) {
        self.pageCount = data.pageCount;
      }
      
      if (data.uri) {
        self.uri = data.uri;
      }
      
      if (data.folderName) {
        self.folderName = data.folderName;
      }
      
      if (data.folderId) {
        self.folderId = data.folderId;
      }
      
      if (data.folderUri) {
        self.folderUri = data.folderUri;
      }
      
      if (data.parentFolderUri) {
        self.parentFolderUri = data.parentFolderUri;
      }
      
      if (data.owner) {
        self.owner = new data.owner.constructor();
        self.owner.constructFromObject(data.owner);
      }
      
      if (data.documents) {
        self.documents = data.documents;
      }
      
      if (data.recipients) {
        self.recipients = new data.recipients.constructor();
        self.recipients.constructFromObject(data.recipients);
      }
      
      if (data.transactionId) {
        self.transactionId = data.transactionId;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.documentsUri) {
        self.documentsUri = data.documentsUri;
      }
      
      if (data.recipientsUri) {
        self.recipientsUri = data.recipientsUri;
      }
      
      if (data.asynchronous) {
        self.asynchronous = data.asynchronous;
      }
      
      if (data.envelopeUri) {
        self.envelopeUri = data.envelopeUri;
      }
      
      if (data.emailSubject) {
        self.emailSubject = data.emailSubject;
      }
      
      if (data.emailBlurb) {
        self.emailBlurb = data.emailBlurb;
      }
      
      if (data.envelopeId) {
        self.envelopeId = data.envelopeId;
      }
      
      if (data.signingLocation) {
        self.signingLocation = data.signingLocation;
      }
      
      if (data.customFieldsUri) {
        self.customFieldsUri = data.customFieldsUri;
      }
      
      if (data.envelopeIdStamping) {
        self.envelopeIdStamping = data.envelopeIdStamping;
      }
      
      if (data.authoritativeCopy) {
        self.authoritativeCopy = data.authoritativeCopy;
      }
      
      if (data.notification) {
        self.notification = new data.notification.constructor();
        self.notification.constructFromObject(data.notification);
      }
      
      if (data.notificationUri) {
        self.notificationUri = data.notificationUri;
      }
      
      if (data.enforceSignerVisibility) {
        self.enforceSignerVisibility = data.enforceSignerVisibility;
      }
      
      if (data.enableWetSign) {
        self.enableWetSign = data.enableWetSign;
      }
      
      if (data.allowMarkup) {
        self.allowMarkup = data.allowMarkup;
      }
      
      if (data.allowReassign) {
        self.allowReassign = data.allowReassign;
      }
      
      if (data.createdDateTime) {
        self.createdDateTime = data.createdDateTime;
      }
      
      if (data.lastModifiedDateTime) {
        self.lastModifiedDateTime = data.lastModifiedDateTime;
      }
      
      if (data.deliveredDateTime) {
        self.deliveredDateTime = data.deliveredDateTime;
      }
      
      if (data.sentDateTime) {
        self.sentDateTime = data.sentDateTime;
      }
      
      if (data.completedDateTime) {
        self.completedDateTime = data.completedDateTime;
      }
      
      if (data.voidedDateTime) {
        self.voidedDateTime = data.voidedDateTime;
      }
      
      if (data.voidedReason) {
        self.voidedReason = data.voidedReason;
      }
      
      if (data.deletedDateTime) {
        self.deletedDateTime = data.deletedDateTime;
      }
      
      if (data.declinedDateTime) {
        self.declinedDateTime = data.declinedDateTime;
      }
      
      if (data.statusChangedDateTime) {
        self.statusChangedDateTime = data.statusChangedDateTime;
      }
      
      if (data.documentsCombinedUri) {
        self.documentsCombinedUri = data.documentsCombinedUri;
      }
      
      if (data.certificateUri) {
        self.certificateUri = data.certificateUri;
      }
      
      if (data.templatesUri) {
        self.templatesUri = data.templatesUri;
      }
      
      if (data.messageLock) {
        self.messageLock = data.messageLock;
      }
      
      if (data.recipientsLock) {
        self.recipientsLock = data.recipientsLock;
      }
      
      if (data.brandLock) {
        self.brandLock = data.brandLock;
      }
      
      if (data.brandId) {
        self.brandId = data.brandId;
      }
      
      if (data.useDisclosure) {
        self.useDisclosure = data.useDisclosure;
      }
      
      if (data.emailSettings) {
        self.emailSettings = new data.emailSettings.constructor();
        self.emailSettings.constructFromObject(data.emailSettings);
      }
      
      if (data.purgeState) {
        self.purgeState = data.purgeState;
      }
      
      if (data.lockInformation) {
        self.lockInformation = new data.lockInformation.constructor();
        self.lockInformation.constructFromObject(data.lockInformation);
      }
      
      if (data.is21CFRPart11) {
        self.is21CFRPart11 = data.is21CFRPart11;
      }
      
      if (data.isUniversalSignatureEnvelope) {
        self.isUniversalSignatureEnvelope = data.isUniversalSignatureEnvelope;
      }
      
    }

    
    /**
     * get The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * @return {String}
     **/
    self.getTemplateId = function() {
      return self.templateId;
    }

    /**
     * set The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * @param {String} templateId
     **/
    self.setTemplateId = function (templateId) {
      self.templateId = templateId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set 
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get When set to **true**, this custom tab is shared.
     * @return {String}
     **/
    self.getShared = function() {
      return self.shared;
    }

    /**
     * set When set to **true**, this custom tab is shared.
     * @param {String} shared
     **/
    self.setShared = function (shared) {
      self.shared = shared;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPassword = function() {
      return self.password;
    }

    /**
     * set 
     * @param {String} password
     **/
    self.setPassword = function (password) {
      self.password = password;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDescription = function() {
      return self.description;
    }

    /**
     * set 
     * @param {String} description
     **/
    self.setDescription = function (description) {
      self.description = description;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLastModified = function() {
      return self.lastModified;
    }

    /**
     * set 
     * @param {String} lastModified
     **/
    self.setLastModified = function (lastModified) {
      self.lastModified = lastModified;
    }
    
    /**
     * get 
     * @return {Integer}
     **/
    self.getPageCount = function() {
      return self.pageCount;
    }

    /**
     * set 
     * @param {Integer} pageCount
     **/
    self.setPageCount = function (pageCount) {
      self.pageCount = pageCount;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUri = function() {
      return self.uri;
    }

    /**
     * set 
     * @param {String} uri
     **/
    self.setUri = function (uri) {
      self.uri = uri;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFolderName = function() {
      return self.folderName;
    }

    /**
     * set 
     * @param {String} folderName
     **/
    self.setFolderName = function (folderName) {
      self.folderName = folderName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFolderId = function() {
      return self.folderId;
    }

    /**
     * set 
     * @param {String} folderId
     **/
    self.setFolderId = function (folderId) {
      self.folderId = folderId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFolderUri = function() {
      return self.folderUri;
    }

    /**
     * set 
     * @param {String} folderUri
     **/
    self.setFolderUri = function (folderUri) {
      self.folderUri = folderUri;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getParentFolderUri = function() {
      return self.parentFolderUri;
    }

    /**
     * set 
     * @param {String} parentFolderUri
     **/
    self.setParentFolderUri = function (parentFolderUri) {
      self.parentFolderUri = parentFolderUri;
    }
    
    /**
     * @return {UserInfo}
     **/
    self.getOwner = function() {
      return self.owner;
    }

    /**
     * @param {UserInfo} owner
     **/
    self.setOwner = function (owner) {
      self.owner = owner;
    }
    
    /**
     * get Complex element contains the details on the documents in the envelope.
     * @return {Array}
     **/
    self.getDocuments = function() {
      return self.documents;
    }

    /**
     * set Complex element contains the details on the documents in the envelope.
     * @param {Array} documents
     **/
    self.setDocuments = function (documents) {
      self.documents = documents;
    }
    
    /**
     * @return {Recipients}
     **/
    self.getRecipients = function() {
      return self.recipients;
    }

    /**
     * @param {Recipients} recipients
     **/
    self.setRecipients = function (recipients) {
      self.recipients = recipients;
    }
    
    /**
     * get Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
     * @return {String}
     **/
    self.getTransactionId = function() {
      return self.transactionId;
    }

    /**
     * set Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
     * @param {String} transactionId
     **/
    self.setTransactionId = function (transactionId) {
      self.transactionId = transactionId;
    }
    
    /**
     * get Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @return {String}
     **/
    self.getStatus = function() {
      return self.status;
    }

    /**
     * set Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @param {String} status
     **/
    self.setStatus = function (status) {
      self.status = status;
    }
    
    /**
     * get Contains a URI for an endpoint that you can use to retrieve the documents.
     * @return {String}
     **/
    self.getDocumentsUri = function() {
      return self.documentsUri;
    }

    /**
     * set Contains a URI for an endpoint that you can use to retrieve the documents.
     * @param {String} documentsUri
     **/
    self.setDocumentsUri = function (documentsUri) {
      self.documentsUri = documentsUri;
    }
    
    /**
     * get Contains a URI for an endpoint that you can use to retrieve the recipients.
     * @return {String}
     **/
    self.getRecipientsUri = function() {
      return self.recipientsUri;
    }

    /**
     * set Contains a URI for an endpoint that you can use to retrieve the recipients.
     * @param {String} recipientsUri
     **/
    self.setRecipientsUri = function (recipientsUri) {
      self.recipientsUri = recipientsUri;
    }
    
    /**
     * get When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed.
     * @return {String}
     **/
    self.getAsynchronous = function() {
      return self.asynchronous;
    }

    /**
     * set When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed.
     * @param {String} asynchronous
     **/
    self.setAsynchronous = function (asynchronous) {
      self.asynchronous = asynchronous;
    }
    
    /**
     * get Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
     * @return {String}
     **/
    self.getEnvelopeUri = function() {
      return self.envelopeUri;
    }

    /**
     * set Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
     * @param {String} envelopeUri
     **/
    self.setEnvelopeUri = function (envelopeUri) {
      self.envelopeUri = envelopeUri;
    }
    
    /**
     * get Specifies the subject of the email that is sent to all recipients.\n\nSee [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
     * @return {String}
     **/
    self.getEmailSubject = function() {
      return self.emailSubject;
    }

    /**
     * set Specifies the subject of the email that is sent to all recipients.\n\nSee [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
     * @param {String} emailSubject
     **/
    self.setEmailSubject = function (emailSubject) {
      self.emailSubject = emailSubject;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEmailBlurb = function() {
      return self.emailBlurb;
    }

    /**
     * set 
     * @param {String} emailBlurb
     **/
    self.setEmailBlurb = function (emailBlurb) {
      self.emailBlurb = emailBlurb;
    }
    
    /**
     * get The envelope ID of the envelope status that failed to post.
     * @return {String}
     **/
    self.getEnvelopeId = function() {
      return self.envelopeId;
    }

    /**
     * set The envelope ID of the envelope status that failed to post.
     * @param {String} envelopeId
     **/
    self.setEnvelopeId = function (envelopeId) {
      self.envelopeId = envelopeId;
    }
    
    /**
     * get Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
     * @return {String}
     **/
    self.getSigningLocation = function() {
      return self.signingLocation;
    }

    /**
     * set Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
     * @param {String} signingLocation
     **/
    self.setSigningLocation = function (signingLocation) {
      self.signingLocation = signingLocation;
    }
    
    /**
     * get Contains a URI for an endpoint that you can use to retrieve the custom fields.
     * @return {String}
     **/
    self.getCustomFieldsUri = function() {
      return self.customFieldsUri;
    }

    /**
     * set Contains a URI for an endpoint that you can use to retrieve the custom fields.
     * @param {String} customFieldsUri
     **/
    self.setCustomFieldsUri = function (customFieldsUri) {
      self.customFieldsUri = customFieldsUri;
    }
    
    /**
     * get When set to **true**, Envelope ID Stamping is enabled.
     * @return {String}
     **/
    self.getEnvelopeIdStamping = function() {
      return self.envelopeIdStamping;
    }

    /**
     * set When set to **true**, Envelope ID Stamping is enabled.
     * @param {String} envelopeIdStamping
     **/
    self.setEnvelopeIdStamping = function (envelopeIdStamping) {
      self.envelopeIdStamping = envelopeIdStamping;
    }
    
    /**
     * get Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
     * @return {String}
     **/
    self.getAuthoritativeCopy = function() {
      return self.authoritativeCopy;
    }

    /**
     * set Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
     * @param {String} authoritativeCopy
     **/
    self.setAuthoritativeCopy = function (authoritativeCopy) {
      self.authoritativeCopy = authoritativeCopy;
    }
    
    /**
     * @return {Notification}
     **/
    self.getNotification = function() {
      return self.notification;
    }

    /**
     * @param {Notification} notification
     **/
    self.setNotification = function (notification) {
      self.notification = notification;
    }
    
    /**
     * get Contains a URI for an endpoint that you can use to retrieve the notifications.
     * @return {String}
     **/
    self.getNotificationUri = function() {
      return self.notificationUri;
    }

    /**
     * set Contains a URI for an endpoint that you can use to retrieve the notifications.
     * @param {String} notificationUri
     **/
    self.setNotificationUri = function (notificationUri) {
      self.notificationUri = notificationUri;
    }
    
    /**
     * get When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.\n\nYour account must have Document Visibility enabled to use this.
     * @return {String}
     **/
    self.getEnforceSignerVisibility = function() {
      return self.enforceSignerVisibility;
    }

    /**
     * set When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.\n\nYour account must have Document Visibility enabled to use this.
     * @param {String} enforceSignerVisibility
     **/
    self.setEnforceSignerVisibility = function (enforceSignerVisibility) {
      self.enforceSignerVisibility = enforceSignerVisibility;
    }
    
    /**
     * get When set to **true**, the signer is allowed to print the document and sign it on paper.
     * @return {String}
     **/
    self.getEnableWetSign = function() {
      return self.enableWetSign;
    }

    /**
     * set When set to **true**, the signer is allowed to print the document and sign it on paper.
     * @param {String} enableWetSign
     **/
    self.setEnableWetSign = function (enableWetSign) {
      self.enableWetSign = enableWetSign;
    }
    
    /**
     * get When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
     * @return {String}
     **/
    self.getAllowMarkup = function() {
      return self.allowMarkup;
    }

    /**
     * set When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
     * @param {String} allowMarkup
     **/
    self.setAllowMarkup = function (allowMarkup) {
      self.allowMarkup = allowMarkup;
    }
    
    /**
     * get When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
     * @return {String}
     **/
    self.getAllowReassign = function() {
      return self.allowReassign;
    }

    /**
     * set When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
     * @param {String} allowReassign
     **/
    self.setAllowReassign = function (allowReassign) {
      self.allowReassign = allowReassign;
    }
    
    /**
     * get Indicates the date and time the item was created.
     * @return {String}
     **/
    self.getCreatedDateTime = function() {
      return self.createdDateTime;
    }

    /**
     * set Indicates the date and time the item was created.
     * @param {String} createdDateTime
     **/
    self.setCreatedDateTime = function (createdDateTime) {
      self.createdDateTime = createdDateTime;
    }
    
    /**
     * get The date and time the item was last modified.
     * @return {String}
     **/
    self.getLastModifiedDateTime = function() {
      return self.lastModifiedDateTime;
    }

    /**
     * set The date and time the item was last modified.
     * @param {String} lastModifiedDateTime
     **/
    self.setLastModifiedDateTime = function (lastModifiedDateTime) {
      self.lastModifiedDateTime = lastModifiedDateTime;
    }
    
    /**
     * get Reserved: For DocuSign use only.
     * @return {String}
     **/
    self.getDeliveredDateTime = function() {
      return self.deliveredDateTime;
    }

    /**
     * set Reserved: For DocuSign use only.
     * @param {String} deliveredDateTime
     **/
    self.setDeliveredDateTime = function (deliveredDateTime) {
      self.deliveredDateTime = deliveredDateTime;
    }
    
    /**
     * get The date and time the envelope was sent.
     * @return {String}
     **/
    self.getSentDateTime = function() {
      return self.sentDateTime;
    }

    /**
     * set The date and time the envelope was sent.
     * @param {String} sentDateTime
     **/
    self.setSentDateTime = function (sentDateTime) {
      self.sentDateTime = sentDateTime;
    }
    
    /**
     * get Specifies the date and time this item was completed.
     * @return {String}
     **/
    self.getCompletedDateTime = function() {
      return self.completedDateTime;
    }

    /**
     * set Specifies the date and time this item was completed.
     * @param {String} completedDateTime
     **/
    self.setCompletedDateTime = function (completedDateTime) {
      self.completedDateTime = completedDateTime;
    }
    
    /**
     * get The date and time the envelope or template was voided.
     * @return {String}
     **/
    self.getVoidedDateTime = function() {
      return self.voidedDateTime;
    }

    /**
     * set The date and time the envelope or template was voided.
     * @param {String} voidedDateTime
     **/
    self.setVoidedDateTime = function (voidedDateTime) {
      self.voidedDateTime = voidedDateTime;
    }
    
    /**
     * get The reason the envelope or template was voided.
     * @return {String}
     **/
    self.getVoidedReason = function() {
      return self.voidedReason;
    }

    /**
     * set The reason the envelope or template was voided.
     * @param {String} voidedReason
     **/
    self.setVoidedReason = function (voidedReason) {
      self.voidedReason = voidedReason;
    }
    
    /**
     * get Specifies the data and time the item was deleted.
     * @return {String}
     **/
    self.getDeletedDateTime = function() {
      return self.deletedDateTime;
    }

    /**
     * set Specifies the data and time the item was deleted.
     * @param {String} deletedDateTime
     **/
    self.setDeletedDateTime = function (deletedDateTime) {
      self.deletedDateTime = deletedDateTime;
    }
    
    /**
     * get The date and time the recipient declined the document.
     * @return {String}
     **/
    self.getDeclinedDateTime = function() {
      return self.declinedDateTime;
    }

    /**
     * set The date and time the recipient declined the document.
     * @param {String} declinedDateTime
     **/
    self.setDeclinedDateTime = function (declinedDateTime) {
      self.declinedDateTime = declinedDateTime;
    }
    
    /**
     * get The data and time the status changed.
     * @return {String}
     **/
    self.getStatusChangedDateTime = function() {
      return self.statusChangedDateTime;
    }

    /**
     * set The data and time the status changed.
     * @param {String} statusChangedDateTime
     **/
    self.setStatusChangedDateTime = function (statusChangedDateTime) {
      self.statusChangedDateTime = statusChangedDateTime;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDocumentsCombinedUri = function() {
      return self.documentsCombinedUri;
    }

    /**
     * set 
     * @param {String} documentsCombinedUri
     **/
    self.setDocumentsCombinedUri = function (documentsCombinedUri) {
      self.documentsCombinedUri = documentsCombinedUri;
    }
    
    /**
     * get Retrieves a URI for an endpoint that allows you to easily retrieve certificate information.
     * @return {String}
     **/
    self.getCertificateUri = function() {
      return self.certificateUri;
    }

    /**
     * set Retrieves a URI for an endpoint that allows you to easily retrieve certificate information.
     * @param {String} certificateUri
     **/
    self.setCertificateUri = function (certificateUri) {
      self.certificateUri = certificateUri;
    }
    
    /**
     * get Contains a URI for an endpoint which you can use to retrieve the templates.
     * @return {String}
     **/
    self.getTemplatesUri = function() {
      return self.templatesUri;
    }

    /**
     * set Contains a URI for an endpoint which you can use to retrieve the templates.
     * @param {String} templatesUri
     **/
    self.setTemplatesUri = function (templatesUri) {
      self.templatesUri = templatesUri;
    }
    
    /**
     * get When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. \n\nAdditionally, this prevents users from making changes to the contents of `emailBlurb` and `emailSubject` properties when correcting envelopes. \n\nHowever, if the `messageLock` node is set to true**** and the `emailSubject` property is empty, senders and correctors are able to add a subject to the envelope.
     * @return {String}
     **/
    self.getMessageLock = function() {
      return self.messageLock;
    }

    /**
     * set When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope. \n\nAdditionally, this prevents users from making changes to the contents of `emailBlurb` and `emailSubject` properties when correcting envelopes. \n\nHowever, if the `messageLock` node is set to true**** and the `emailSubject` property is empty, senders and correctors are able to add a subject to the envelope.
     * @param {String} messageLock
     **/
    self.setMessageLock = function (messageLock) {
      self.messageLock = messageLock;
    }
    
    /**
     * get When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
     * @return {String}
     **/
    self.getRecipientsLock = function() {
      return self.recipientsLock;
    }

    /**
     * set When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
     * @param {String} recipientsLock
     **/
    self.setRecipientsLock = function (recipientsLock) {
      self.recipientsLock = recipientsLock;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getBrandLock = function() {
      return self.brandLock;
    }

    /**
     * set 
     * @param {String} brandLock
     **/
    self.setBrandLock = function (brandLock) {
      self.brandLock = brandLock;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getBrandId = function() {
      return self.brandId;
    }

    /**
     * set 
     * @param {String} brandId
     **/
    self.setBrandId = function (brandId) {
      self.brandId = brandId;
    }
    
    /**
     * get When set to **true**, the disclosure is shown to recipients in accordance with the account’s Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. \n\nIf the `useDisclosure` property is not set, then the account's normal disclosure setting is used and the value of the `useDisclosure` property is not returned in responses when getting envelope information.
     * @return {String}
     **/
    self.getUseDisclosure = function() {
      return self.useDisclosure;
    }

    /**
     * set When set to **true**, the disclosure is shown to recipients in accordance with the account’s Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients. \n\nIf the `useDisclosure` property is not set, then the account's normal disclosure setting is used and the value of the `useDisclosure` property is not returned in responses when getting envelope information.
     * @param {String} useDisclosure
     **/
    self.setUseDisclosure = function (useDisclosure) {
      self.useDisclosure = useDisclosure;
    }
    
    /**
     * @return {EmailSettings}
     **/
    self.getEmailSettings = function() {
      return self.emailSettings;
    }

    /**
     * @param {EmailSettings} emailSettings
     **/
    self.setEmailSettings = function (emailSettings) {
      self.emailSettings = emailSettings;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPurgeState = function() {
      return self.purgeState;
    }

    /**
     * set 
     * @param {String} purgeState
     **/
    self.setPurgeState = function (purgeState) {
      self.purgeState = purgeState;
    }
    
    /**
     * @return {LockInformation}
     **/
    self.getLockInformation = function() {
      return self.lockInformation;
    }

    /**
     * @param {LockInformation} lockInformation
     **/
    self.setLockInformation = function (lockInformation) {
      self.lockInformation = lockInformation;
    }
    
    /**
     * get When set to **true**, indicates that this module is enabled on the account.
     * @return {String}
     **/
    self.getIs21CFRPart11 = function() {
      return self.is21CFRPart11;
    }

    /**
     * set When set to **true**, indicates that this module is enabled on the account.
     * @param {String} is21CFRPart11
     **/
    self.setIs21CFRPart11 = function (is21CFRPart11) {
      self.is21CFRPart11 = is21CFRPart11;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getIsUniversalSignatureEnvelope = function() {
      return self.isUniversalSignatureEnvelope;
    }

    /**
     * set 
     * @param {String} isUniversalSignatureEnvelope
     **/
    self.setIsUniversalSignatureEnvelope = function (isUniversalSignatureEnvelope) {
      self.isUniversalSignatureEnvelope = isUniversalSignatureEnvelope;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EnvelopeTemplateResult = EnvelopeTemplateResult;
  }

  return EnvelopeTemplateResult;
  
  
}));
