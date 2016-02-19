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

  
  

  
  var RecipientPhoneAuthentication = function RecipientPhoneAuthentication() { 
    var self = this;
    
    /**
     * Boolean. When set to **true**, the recipient can supply a phone number their choice.
     * datatype: String
     **/
    self.recipMayProvideNumber = null;
    
    /**
     * Reserved.
     * datatype: String
     **/
    self.validateRecipProvidedNumber = null;
    
    /**
     * Reserved.
     * datatype: String
     **/
    self.recordVoicePrint = null;
    
    /**
     * An Array containing a list of phone numbers the recipient may use for SMS text authentication.
     * datatype: Array
     **/
    self.senderProvidedNumbers = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.recipMayProvideNumber) {
        self.recipMayProvideNumber = data.recipMayProvideNumber;
      }
      
      if (data.validateRecipProvidedNumber) {
        self.validateRecipProvidedNumber = data.validateRecipProvidedNumber;
      }
      
      if (data.recordVoicePrint) {
        self.recordVoicePrint = data.recordVoicePrint;
      }
      
      if (data.senderProvidedNumbers) {
        self.senderProvidedNumbers = data.senderProvidedNumbers;
      }
      
    }

    
    /**
     * get Boolean. When set to **true**, the recipient can supply a phone number their choice.
     * @return {String}
     **/
    self.getRecipMayProvideNumber = function() {
      return self.recipMayProvideNumber;
    }

    /**
     * set Boolean. When set to **true**, the recipient can supply a phone number their choice.
     * @param {String} recipMayProvideNumber
     **/
    self.setRecipMayProvideNumber = function (recipMayProvideNumber) {
      self.recipMayProvideNumber = recipMayProvideNumber;
    }
    
    /**
     * get Reserved.
     * @return {String}
     **/
    self.getValidateRecipProvidedNumber = function() {
      return self.validateRecipProvidedNumber;
    }

    /**
     * set Reserved.
     * @param {String} validateRecipProvidedNumber
     **/
    self.setValidateRecipProvidedNumber = function (validateRecipProvidedNumber) {
      self.validateRecipProvidedNumber = validateRecipProvidedNumber;
    }
    
    /**
     * get Reserved.
     * @return {String}
     **/
    self.getRecordVoicePrint = function() {
      return self.recordVoicePrint;
    }

    /**
     * set Reserved.
     * @param {String} recordVoicePrint
     **/
    self.setRecordVoicePrint = function (recordVoicePrint) {
      self.recordVoicePrint = recordVoicePrint;
    }
    
    /**
     * get An Array containing a list of phone numbers the recipient may use for SMS text authentication.
     * @return {Array}
     **/
    self.getSenderProvidedNumbers = function() {
      return self.senderProvidedNumbers;
    }

    /**
     * set An Array containing a list of phone numbers the recipient may use for SMS text authentication.
     * @param {Array} senderProvidedNumbers
     **/
    self.setSenderProvidedNumbers = function (senderProvidedNumbers) {
      self.senderProvidedNumbers = senderProvidedNumbers;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientPhoneAuthentication = RecipientPhoneAuthentication;
  }

  return RecipientPhoneAuthentication;
  
  
}));
