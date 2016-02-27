(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './BulkEnvelopeStatus', './ErrorDetails', './LockInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./BulkEnvelopeStatus'), require('./ErrorDetails'), require('./LockInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.BulkEnvelopeStatus, root.Docusign.ErrorDetails, root.Docusign.LockInformation);
  }
}(this, function(module, BulkEnvelopeStatus, ErrorDetails, LockInformation) {
  'use strict';

  
  

  
  var EnvelopeUpdateSummary = function EnvelopeUpdateSummary() { 
    var self = this;
    
    /**
     * The envelope ID of the envelope status that failed to post.
     * datatype: String
     **/
    self.envelopeId = null;
    
    /**
     * datatype: BulkEnvelopeStatus
     **/
    self.bulkEnvelopeStatus = null;
    
    /**
     * datatype: LockInformation
     **/
    self.lockInformation = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeId) {
        self.envelopeId = data.envelopeId;
      }
      
      if (data.bulkEnvelopeStatus) {
        self.bulkEnvelopeStatus = new data.bulkEnvelopeStatus.constructor();
        self.bulkEnvelopeStatus.constructFromObject(data.bulkEnvelopeStatus);
      }
      
      if (data.lockInformation) {
        self.lockInformation = new data.lockInformation.constructor();
        self.lockInformation.constructFromObject(data.lockInformation);
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
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
     * @return {BulkEnvelopeStatus}
     **/
    self.getBulkEnvelopeStatus = function() {
      return self.bulkEnvelopeStatus;
    }

    /**
     * @param {BulkEnvelopeStatus} bulkEnvelopeStatus
     **/
    self.setBulkEnvelopeStatus = function (bulkEnvelopeStatus) {
      self.bulkEnvelopeStatus = bulkEnvelopeStatus;
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
    module.EnvelopeUpdateSummary = EnvelopeUpdateSummary;
  }

  return EnvelopeUpdateSummary;
  
  
}));
