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

  
  

  
  var EnvelopeEvent = function EnvelopeEvent() { 
    var self = this;
    
    /**
     * he envelope status, this can be Sent, Delivered, Completed, Declined, or Voided.
     * datatype: String
     **/
    self.envelopeEventStatusCode = null;
    
    /**
     * When set to **true**, the PDF documents are included in the message along with the updated XML.
     * datatype: String
     **/
    self.includeDocuments = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeEventStatusCode) {
        self.envelopeEventStatusCode = data.envelopeEventStatusCode;
      }
      
      if (data.includeDocuments) {
        self.includeDocuments = data.includeDocuments;
      }
      
    }

    
    /**
     * get he envelope status, this can be Sent, Delivered, Completed, Declined, or Voided.
     * @return {String}
     **/
    self.getEnvelopeEventStatusCode = function() {
      return self.envelopeEventStatusCode;
    }

    /**
     * set he envelope status, this can be Sent, Delivered, Completed, Declined, or Voided.
     * @param {String} envelopeEventStatusCode
     **/
    self.setEnvelopeEventStatusCode = function (envelopeEventStatusCode) {
      self.envelopeEventStatusCode = envelopeEventStatusCode;
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
    module.EnvelopeEvent = EnvelopeEvent;
  }

  return EnvelopeEvent;
  
  
}));
