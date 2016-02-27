(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Recipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Recipients'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Recipients);
  }
}(this, function(module, Recipients) {
  'use strict';

  
  

  
  var FolderItemV2 = function FolderItemV2() { 
    var self = this;
    
    /**
     * 
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
     * The date and time the item was last modified.
     * datatype: String
     **/
    self.lastModifiedDateTime = null;
    
    /**
     * 
     * datatype: String
     **/
    self.senderUserId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.senderName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.senderEmail = null;
    
    /**
     * 
     * datatype: String
     **/
    self.senderCompany = null;
    
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
     * The date and time the envelope is set to expire.
     * datatype: String
     **/
    self.expireDateTime = null;
    
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
     * datatype: Recipients
     **/
    self.recipients = null;
    
    /**
     * Contains a URI for an endpoint that you can use to retrieve the recipients.
     * datatype: String
     **/
    self.recipientsUri = null;
    
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
      
      if (data.lastModifiedDateTime) {
        self.lastModifiedDateTime = data.lastModifiedDateTime;
      }
      
      if (data.senderUserId) {
        self.senderUserId = data.senderUserId;
      }
      
      if (data.senderName) {
        self.senderName = data.senderName;
      }
      
      if (data.senderEmail) {
        self.senderEmail = data.senderEmail;
      }
      
      if (data.senderCompany) {
        self.senderCompany = data.senderCompany;
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
      
      if (data.expireDateTime) {
        self.expireDateTime = data.expireDateTime;
      }
      
      if (data.folderId) {
        self.folderId = data.folderId;
      }
      
      if (data.folderUri) {
        self.folderUri = data.folderUri;
      }
      
      if (data.recipients) {
        self.recipients = new data.recipients.constructor();
        self.recipients.constructFromObject(data.recipients);
      }
      
      if (data.recipientsUri) {
        self.recipientsUri = data.recipientsUri;
      }
      
      if (data.is21CFRPart11) {
        self.is21CFRPart11 = data.is21CFRPart11;
      }
      
      if (data.isUniversalSignatureEnvelope) {
        self.isUniversalSignatureEnvelope = data.isUniversalSignatureEnvelope;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getOwnerName = function() {
      return self.ownerName;
    }

    /**
     * set 
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
     * get 
     * @return {String}
     **/
    self.getSenderUserId = function() {
      return self.senderUserId;
    }

    /**
     * set 
     * @param {String} senderUserId
     **/
    self.setSenderUserId = function (senderUserId) {
      self.senderUserId = senderUserId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSenderName = function() {
      return self.senderName;
    }

    /**
     * set 
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
     * get 
     * @return {String}
     **/
    self.getSenderCompany = function() {
      return self.senderCompany;
    }

    /**
     * set 
     * @param {String} senderCompany
     **/
    self.setSenderCompany = function (senderCompany) {
      self.senderCompany = senderCompany;
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
     * get The date and time the envelope is set to expire.
     * @return {String}
     **/
    self.getExpireDateTime = function() {
      return self.expireDateTime;
    }

    /**
     * set The date and time the envelope is set to expire.
     * @param {String} expireDateTime
     **/
    self.setExpireDateTime = function (expireDateTime) {
      self.expireDateTime = expireDateTime;
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
    module.FolderItemV2 = FolderItemV2;
  }

  return FolderItemV2;
  
  
}));
