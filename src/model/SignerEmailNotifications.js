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

  
  

  
  var SignerEmailNotifications = function SignerEmailNotifications() { 
    var self = this;
    
    /**
     * When set to **true**, the user receives notification that the envelope has been activated.
     * datatype: String
     **/
    self.envelopeActivation = null;
    
    /**
     * When set to **true**, the user receives notification that the envelope has been completed.
     * datatype: String
     **/
    self.envelopeComplete = null;
    
    /**
     * When set to **true**, the user receives notifications of carbon copy deliveries.
     * datatype: String
     **/
    self.carbonCopyNotification = null;
    
    /**
     * When set to **true**, the user receives notifications of certified deliveries.
     * datatype: String
     **/
    self.certifiedDeliveryNotification = null;
    
    /**
     * When set to **true**, the user receives notification that the envelope has been declined.
     * datatype: String
     **/
    self.envelopeDeclined = null;
    
    /**
     * When set to **true**, the user receives notification that the envelope has been voided.
     * datatype: String
     **/
    self.envelopeVoided = null;
    
    /**
     * When set to **true**, the user receives notification that the envelope has been corrected.
     * datatype: String
     **/
    self.envelopeCorrected = null;
    
    /**
     * When set to **true**, the user receives notification that the envelope has been reassigned.
     * datatype: String
     **/
    self.reassignedSigner = null;
    
    /**
     * When set to **true**, the user receives notification of document purges.
     * datatype: String
     **/
    self.purgeDocuments = null;
    
    /**
     * Reserved:
     * datatype: String
     **/
    self.faxReceived = null;
    
    /**
     * When set to **true**, the user receives notification that document markup has been activated.
     * datatype: String
     **/
    self.documentMarkupActivation = null;
    
    /**
     * When set to **true**, the user receives agent notification emails.
     * datatype: String
     **/
    self.agentNotification = null;
    
    /**
     * When set to **true**, the user receives notification if the offline signing failed.
     * datatype: String
     **/
    self.offlineSigningFailed = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeActivation) {
        self.envelopeActivation = data.envelopeActivation;
      }
      
      if (data.envelopeComplete) {
        self.envelopeComplete = data.envelopeComplete;
      }
      
      if (data.carbonCopyNotification) {
        self.carbonCopyNotification = data.carbonCopyNotification;
      }
      
      if (data.certifiedDeliveryNotification) {
        self.certifiedDeliveryNotification = data.certifiedDeliveryNotification;
      }
      
      if (data.envelopeDeclined) {
        self.envelopeDeclined = data.envelopeDeclined;
      }
      
      if (data.envelopeVoided) {
        self.envelopeVoided = data.envelopeVoided;
      }
      
      if (data.envelopeCorrected) {
        self.envelopeCorrected = data.envelopeCorrected;
      }
      
      if (data.reassignedSigner) {
        self.reassignedSigner = data.reassignedSigner;
      }
      
      if (data.purgeDocuments) {
        self.purgeDocuments = data.purgeDocuments;
      }
      
      if (data.faxReceived) {
        self.faxReceived = data.faxReceived;
      }
      
      if (data.documentMarkupActivation) {
        self.documentMarkupActivation = data.documentMarkupActivation;
      }
      
      if (data.agentNotification) {
        self.agentNotification = data.agentNotification;
      }
      
      if (data.offlineSigningFailed) {
        self.offlineSigningFailed = data.offlineSigningFailed;
      }
      
    }

    
    /**
     * get When set to **true**, the user receives notification that the envelope has been activated.
     * @return {String}
     **/
    self.getEnvelopeActivation = function() {
      return self.envelopeActivation;
    }

    /**
     * set When set to **true**, the user receives notification that the envelope has been activated.
     * @param {String} envelopeActivation
     **/
    self.setEnvelopeActivation = function (envelopeActivation) {
      self.envelopeActivation = envelopeActivation;
    }
    
    /**
     * get When set to **true**, the user receives notification that the envelope has been completed.
     * @return {String}
     **/
    self.getEnvelopeComplete = function() {
      return self.envelopeComplete;
    }

    /**
     * set When set to **true**, the user receives notification that the envelope has been completed.
     * @param {String} envelopeComplete
     **/
    self.setEnvelopeComplete = function (envelopeComplete) {
      self.envelopeComplete = envelopeComplete;
    }
    
    /**
     * get When set to **true**, the user receives notifications of carbon copy deliveries.
     * @return {String}
     **/
    self.getCarbonCopyNotification = function() {
      return self.carbonCopyNotification;
    }

    /**
     * set When set to **true**, the user receives notifications of carbon copy deliveries.
     * @param {String} carbonCopyNotification
     **/
    self.setCarbonCopyNotification = function (carbonCopyNotification) {
      self.carbonCopyNotification = carbonCopyNotification;
    }
    
    /**
     * get When set to **true**, the user receives notifications of certified deliveries.
     * @return {String}
     **/
    self.getCertifiedDeliveryNotification = function() {
      return self.certifiedDeliveryNotification;
    }

    /**
     * set When set to **true**, the user receives notifications of certified deliveries.
     * @param {String} certifiedDeliveryNotification
     **/
    self.setCertifiedDeliveryNotification = function (certifiedDeliveryNotification) {
      self.certifiedDeliveryNotification = certifiedDeliveryNotification;
    }
    
    /**
     * get When set to **true**, the user receives notification that the envelope has been declined.
     * @return {String}
     **/
    self.getEnvelopeDeclined = function() {
      return self.envelopeDeclined;
    }

    /**
     * set When set to **true**, the user receives notification that the envelope has been declined.
     * @param {String} envelopeDeclined
     **/
    self.setEnvelopeDeclined = function (envelopeDeclined) {
      self.envelopeDeclined = envelopeDeclined;
    }
    
    /**
     * get When set to **true**, the user receives notification that the envelope has been voided.
     * @return {String}
     **/
    self.getEnvelopeVoided = function() {
      return self.envelopeVoided;
    }

    /**
     * set When set to **true**, the user receives notification that the envelope has been voided.
     * @param {String} envelopeVoided
     **/
    self.setEnvelopeVoided = function (envelopeVoided) {
      self.envelopeVoided = envelopeVoided;
    }
    
    /**
     * get When set to **true**, the user receives notification that the envelope has been corrected.
     * @return {String}
     **/
    self.getEnvelopeCorrected = function() {
      return self.envelopeCorrected;
    }

    /**
     * set When set to **true**, the user receives notification that the envelope has been corrected.
     * @param {String} envelopeCorrected
     **/
    self.setEnvelopeCorrected = function (envelopeCorrected) {
      self.envelopeCorrected = envelopeCorrected;
    }
    
    /**
     * get When set to **true**, the user receives notification that the envelope has been reassigned.
     * @return {String}
     **/
    self.getReassignedSigner = function() {
      return self.reassignedSigner;
    }

    /**
     * set When set to **true**, the user receives notification that the envelope has been reassigned.
     * @param {String} reassignedSigner
     **/
    self.setReassignedSigner = function (reassignedSigner) {
      self.reassignedSigner = reassignedSigner;
    }
    
    /**
     * get When set to **true**, the user receives notification of document purges.
     * @return {String}
     **/
    self.getPurgeDocuments = function() {
      return self.purgeDocuments;
    }

    /**
     * set When set to **true**, the user receives notification of document purges.
     * @param {String} purgeDocuments
     **/
    self.setPurgeDocuments = function (purgeDocuments) {
      self.purgeDocuments = purgeDocuments;
    }
    
    /**
     * get Reserved:
     * @return {String}
     **/
    self.getFaxReceived = function() {
      return self.faxReceived;
    }

    /**
     * set Reserved:
     * @param {String} faxReceived
     **/
    self.setFaxReceived = function (faxReceived) {
      self.faxReceived = faxReceived;
    }
    
    /**
     * get When set to **true**, the user receives notification that document markup has been activated.
     * @return {String}
     **/
    self.getDocumentMarkupActivation = function() {
      return self.documentMarkupActivation;
    }

    /**
     * set When set to **true**, the user receives notification that document markup has been activated.
     * @param {String} documentMarkupActivation
     **/
    self.setDocumentMarkupActivation = function (documentMarkupActivation) {
      self.documentMarkupActivation = documentMarkupActivation;
    }
    
    /**
     * get When set to **true**, the user receives agent notification emails.
     * @return {String}
     **/
    self.getAgentNotification = function() {
      return self.agentNotification;
    }

    /**
     * set When set to **true**, the user receives agent notification emails.
     * @param {String} agentNotification
     **/
    self.setAgentNotification = function (agentNotification) {
      self.agentNotification = agentNotification;
    }
    
    /**
     * get When set to **true**, the user receives notification if the offline signing failed.
     * @return {String}
     **/
    self.getOfflineSigningFailed = function() {
      return self.offlineSigningFailed;
    }

    /**
     * set When set to **true**, the user receives notification if the offline signing failed.
     * @param {String} offlineSigningFailed
     **/
    self.setOfflineSigningFailed = function (offlineSigningFailed) {
      self.offlineSigningFailed = offlineSigningFailed;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.SignerEmailNotifications = SignerEmailNotifications;
  }

  return SignerEmailNotifications;
  
  
}));
