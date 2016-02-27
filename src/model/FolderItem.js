(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './CustomFieldV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./CustomFieldV2'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.CustomFieldV2);
  }
}(this, function(module, CustomFieldV2) {
  'use strict';

  
  

  
  var FolderItem = function FolderItem() { 
    var self = this;
    
    /**
     * Name of the envelope owner.
     * datatype: String
     **/
    self.ownerName = null;
    
    /**
     * The envelope ID of the envelope status that failed to post.
     * datatype: String
     **/
    self.envelopeId = null;
    
    /**
     * Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
     * datatype: String
     **/
    self.envelopeUri = null;
    
    /**
     * Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * datatype: String
     **/
    self.status = null;
    
    /**
     * Name of the envelope sender.
     * datatype: String
     **/
    self.senderName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.senderEmail = null;
    
    /**
     * Indicates the date and time the item was created.
     * datatype: String
     **/
    self.createdDateTime = null;
    
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
     * 
     * datatype: String
     **/
    self.subject = null;
    
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
     * When set to **true**, indicates that this module is enabled on the account.
     * datatype: String
     **/
    self.is21CFRPart11 = null;
    
    /**
     * 
     * datatype: String
     **/
    self.isUniversalSignatureEnvelope = null;
    
    /**
     * An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
     * datatype: Array
     **/
    self.customFields = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.ownerName) {
        self.ownerName = data.ownerName;
      }
      
      if (data.envelopeId) {
        self.envelopeId = data.envelopeId;
      }
      
      if (data.envelopeUri) {
        self.envelopeUri = data.envelopeUri;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.senderName) {
        self.senderName = data.senderName;
      }
      
      if (data.senderEmail) {
        self.senderEmail = data.senderEmail;
      }
      
      if (data.createdDateTime) {
        self.createdDateTime = data.createdDateTime;
      }
      
      if (data.sentDateTime) {
        self.sentDateTime = data.sentDateTime;
      }
      
      if (data.completedDateTime) {
        self.completedDateTime = data.completedDateTime;
      }
      
      if (data.subject) {
        self.subject = data.subject;
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
      
      if (data.is21CFRPart11) {
        self.is21CFRPart11 = data.is21CFRPart11;
      }
      
      if (data.isUniversalSignatureEnvelope) {
        self.isUniversalSignatureEnvelope = data.isUniversalSignatureEnvelope;
      }
      
      if (data.customFields) {
        self.customFields = data.customFields;
      }
      
    }

    
    /**
     * get Name of the envelope owner.
     * @return {String}
     **/
    self.getOwnerName = function() {
      return self.ownerName;
    }

    /**
     * set Name of the envelope owner.
     * @param {String} ownerName
     **/
    self.setOwnerName = function (ownerName) {
      self.ownerName = ownerName;
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
     * get Name of the envelope sender.
     * @return {String}
     **/
    self.getSenderName = function() {
      return self.senderName;
    }

    /**
     * set Name of the envelope sender.
     * @param {String} senderName
     **/
    self.setSenderName = function (senderName) {
      self.senderName = senderName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSenderEmail = function() {
      return self.senderEmail;
    }

    /**
     * set 
     * @param {String} senderEmail
     **/
    self.setSenderEmail = function (senderEmail) {
      self.senderEmail = senderEmail;
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
     * get 
     * @return {String}
     **/
    self.getSubject = function() {
      return self.subject;
    }

    /**
     * set 
     * @param {String} subject
     **/
    self.setSubject = function (subject) {
      self.subject = subject;
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
    
    /**
     * get An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
     * @return {Array}
     **/
    self.getCustomFields = function() {
      return self.customFields;
    }

    /**
     * set An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
     * @param {Array} customFields
     **/
    self.setCustomFields = function (customFields) {
      self.customFields = customFields;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.FolderItem = FolderItem;
  }

  return FolderItem;
  
  
}));
