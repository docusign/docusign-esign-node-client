(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './CustomFields', './Document', './Envelope', './Recipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./CustomFields'), require('./Document'), require('./Envelope'), require('./Recipients'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.CustomFields, root.Docusign.Document, root.Docusign.Envelope, root.Docusign.Recipients);
  }
}(this, function(module, CustomFields, Document, Envelope, Recipients) {
  'use strict';

  
  

  
  var InlineTemplate = function InlineTemplate() { 
    var self = this;
    
    /**
     * Specifies the order in which templates are overlaid.
     * datatype: String
     **/
    self.sequence = null;
    
    /**
     * datatype: Envelope
     **/
    self.envelope = null;
    
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
     * datatype: CustomFields
     **/
    self.customFields = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.sequence) {
        self.sequence = data.sequence;
      }
      
      if (data.envelope) {
        self.envelope = new data.envelope.constructor();
        self.envelope.constructFromObject(data.envelope);
      }
      
      if (data.documents) {
        self.documents = data.documents;
      }
      
      if (data.recipients) {
        self.recipients = new data.recipients.constructor();
        self.recipients.constructFromObject(data.recipients);
      }
      
      if (data.customFields) {
        self.customFields = new data.customFields.constructor();
        self.customFields.constructFromObject(data.customFields);
      }
      
    }

    
    /**
     * get Specifies the order in which templates are overlaid.
     * @return {String}
     **/
    self.getSequence = function() {
      return self.sequence;
    }

    /**
     * set Specifies the order in which templates are overlaid.
     * @param {String} sequence
     **/
    self.setSequence = function (sequence) {
      self.sequence = sequence;
    }
    
    /**
     * @return {Envelope}
     **/
    self.getEnvelope = function() {
      return self.envelope;
    }

    /**
     * @param {Envelope} envelope
     **/
    self.setEnvelope = function (envelope) {
      self.envelope = envelope;
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
     * @return {CustomFields}
     **/
    self.getCustomFields = function() {
      return self.customFields;
    }

    /**
     * @param {CustomFields} customFields
     **/
    self.setCustomFields = function (customFields) {
      self.customFields = customFields;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.InlineTemplate = InlineTemplate;
  }

  return InlineTemplate;
  
  
}));
