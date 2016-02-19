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

  
  

  
  var SenderEmailNotifications = function SenderEmailNotifications() { 
    var self = this;
    
    /**
     * When set to **true**, the user receives notification that the envelope has been completed.
     * datatype: String
     **/
    self.envelopeComplete = null;
    
    /**
     * When set to **true**, the sender receives notification if the signer changes.
     * datatype: String
     **/
    self.changedSigner = null;
    
    /**
     * 
     * datatype: String
     **/
    self.senderEnvelopeDeclined = null;
    
    /**
     * When set to **true**, the user receives notification if consent is withdrawn.
     * datatype: String
     **/
    self.withdrawnConsent = null;
    
    /**
     * When set to **true**, the sender receives notification that the recipient viewed the enveloper.
     * datatype: String
     **/
    self.recipientViewed = null;
    
    /**
     * When set to **true**, the sender receives notification if the delivery of the envelope fails.
     * datatype: String
     **/
    self.deliveryFailed = null;
    
    /**
     * When set to **true**, the user receives notification if the offline signing failed.
     * datatype: String
     **/
    self.offlineSigningFailed = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeComplete) {
        self.envelopeComplete = data.envelopeComplete;
      }
      
      if (data.changedSigner) {
        self.changedSigner = data.changedSigner;
      }
      
      if (data.senderEnvelopeDeclined) {
        self.senderEnvelopeDeclined = data.senderEnvelopeDeclined;
      }
      
      if (data.withdrawnConsent) {
        self.withdrawnConsent = data.withdrawnConsent;
      }
      
      if (data.recipientViewed) {
        self.recipientViewed = data.recipientViewed;
      }
      
      if (data.deliveryFailed) {
        self.deliveryFailed = data.deliveryFailed;
      }
      
      if (data.offlineSigningFailed) {
        self.offlineSigningFailed = data.offlineSigningFailed;
      }
      
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
     * get When set to **true**, the sender receives notification if the signer changes.
     * @return {String}
     **/
    self.getChangedSigner = function() {
      return self.changedSigner;
    }

    /**
     * set When set to **true**, the sender receives notification if the signer changes.
     * @param {String} changedSigner
     **/
    self.setChangedSigner = function (changedSigner) {
      self.changedSigner = changedSigner;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSenderEnvelopeDeclined = function() {
      return self.senderEnvelopeDeclined;
    }

    /**
     * set 
     * @param {String} senderEnvelopeDeclined
     **/
    self.setSenderEnvelopeDeclined = function (senderEnvelopeDeclined) {
      self.senderEnvelopeDeclined = senderEnvelopeDeclined;
    }
    
    /**
     * get When set to **true**, the user receives notification if consent is withdrawn.
     * @return {String}
     **/
    self.getWithdrawnConsent = function() {
      return self.withdrawnConsent;
    }

    /**
     * set When set to **true**, the user receives notification if consent is withdrawn.
     * @param {String} withdrawnConsent
     **/
    self.setWithdrawnConsent = function (withdrawnConsent) {
      self.withdrawnConsent = withdrawnConsent;
    }
    
    /**
     * get When set to **true**, the sender receives notification that the recipient viewed the enveloper.
     * @return {String}
     **/
    self.getRecipientViewed = function() {
      return self.recipientViewed;
    }

    /**
     * set When set to **true**, the sender receives notification that the recipient viewed the enveloper.
     * @param {String} recipientViewed
     **/
    self.setRecipientViewed = function (recipientViewed) {
      self.recipientViewed = recipientViewed;
    }
    
    /**
     * get When set to **true**, the sender receives notification if the delivery of the envelope fails.
     * @return {String}
     **/
    self.getDeliveryFailed = function() {
      return self.deliveryFailed;
    }

    /**
     * set When set to **true**, the sender receives notification if the delivery of the envelope fails.
     * @param {String} deliveryFailed
     **/
    self.setDeliveryFailed = function (deliveryFailed) {
      self.deliveryFailed = deliveryFailed;
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
    module.SenderEmailNotifications = SenderEmailNotifications;
  }

  return SenderEmailNotifications;
  
  
}));
