(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined);
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign);
  }
}(this, function(module) {
  'use strict';

  
  

  
  var RecipientEvent = function RecipientEvent() { 
    var self = this;
    
    /**
     * The recipient status, this can be Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded.
     * datatype: String
     **/
    self.recipientEventStatusCode = null;
    
    /**
     * When set to **true**, the PDF documents are included in the message along with the updated XML.
     * datatype: String
     **/
    self.includeDocuments = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.recipientEventStatusCode) {
        self.recipientEventStatusCode = data.recipientEventStatusCode;
      }
      
      if (data.includeDocuments) {
        self.includeDocuments = data.includeDocuments;
      }
      
    }

    
    /**
     * get The recipient status, this can be Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded.
     * @return {String}
     **/
    self.getRecipientEventStatusCode = function() {
      return self.recipientEventStatusCode;
    }

    /**
     * set The recipient status, this can be Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded.
     * @param {String} recipientEventStatusCode
     **/
    self.setRecipientEventStatusCode = function (recipientEventStatusCode) {
      self.recipientEventStatusCode = recipientEventStatusCode;
    }
    
    /**
     * get When set to **true**, the PDF documents are included in the message along with the updated XML.
     * @return {String}
     **/
    self.getIncludeDocuments = function() {
      return self.includeDocuments;
    }

    /**
     * set When set to **true**, the PDF documents are included in the message along with the updated XML.
     * @param {String} includeDocuments
     **/
    self.setIncludeDocuments = function (includeDocuments) {
      self.includeDocuments = includeDocuments;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientEvent = RecipientEvent;
  }

  return RecipientEvent;
  
  
}));
