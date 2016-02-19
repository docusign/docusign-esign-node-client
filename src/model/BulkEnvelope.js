(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails);
  }
}(this, function(module, ErrorDetails) {
  'use strict';

  
  

  
  var BulkEnvelope = function BulkEnvelope() { 
    var self = this;
    
    /**
     * Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
     * datatype: String
     **/
    self.transactionId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.submittedDateTime = null;
    
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
     * Reserved: TBD
     * datatype: String
     **/
    self.bulkRecipientRow = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * 
     * datatype: String
     **/
    self.email = null;
    
    /**
     * Indicates the status of the bulk send operation. Returned values can be:\n* queued\n* processing\n* sent\n* failed
     * datatype: String
     **/
    self.bulkStatus = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.transactionId) {
        self.transactionId = data.transactionId;
      }
      
      if (data.submittedDateTime) {
        self.submittedDateTime = data.submittedDateTime;
      }
      
      if (data.envelopeId) {
        self.envelopeId = data.envelopeId;
      }
      
      if (data.envelopeUri) {
        self.envelopeUri = data.envelopeUri;
      }
      
      if (data.bulkRecipientRow) {
        self.bulkRecipientRow = data.bulkRecipientRow;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.bulkStatus) {
        self.bulkStatus = data.bulkStatus;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
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
     * get 
     * @return {String}
     **/
    self.getSubmittedDateTime = function() {
      return self.submittedDateTime;
    }

    /**
     * set 
     * @param {String} submittedDateTime
     **/
    self.setSubmittedDateTime = function (submittedDateTime) {
      self.submittedDateTime = submittedDateTime;
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
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBulkRecipientRow = function() {
      return self.bulkRecipientRow;
    }

    /**
     * set Reserved: TBD
     * @param {String} bulkRecipientRow
     **/
    self.setBulkRecipientRow = function (bulkRecipientRow) {
      self.bulkRecipientRow = bulkRecipientRow;
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
     * get 
     * @return {String}
     **/
    self.getEmail = function() {
      return self.email;
    }

    /**
     * set 
     * @param {String} email
     **/
    self.setEmail = function (email) {
      self.email = email;
    }
    
    /**
     * get Indicates the status of the bulk send operation. Returned values can be:\n* queued\n* processing\n* sent\n* failed
     * @return {String}
     **/
    self.getBulkStatus = function() {
      return self.bulkStatus;
    }

    /**
     * set Indicates the status of the bulk send operation. Returned values can be:\n* queued\n* processing\n* sent\n* failed
     * @param {String} bulkStatus
     **/
    self.setBulkStatus = function (bulkStatus) {
      self.bulkStatus = bulkStatus;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.BulkEnvelope = BulkEnvelope;
  }

  return BulkEnvelope;
  
  
}));
