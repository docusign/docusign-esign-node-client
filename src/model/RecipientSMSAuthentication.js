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

  
  

  
  var RecipientSMSAuthentication = function RecipientSMSAuthentication() { 
    var self = this;
    
    /**
     * An Array containing a list of phone numbers the recipient may use for SMS text authentication.
     * datatype: Array
     **/
    self.senderProvidedNumbers = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.senderProvidedNumbers) {
        self.senderProvidedNumbers = data.senderProvidedNumbers;
      }
      
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
    module.RecipientSMSAuthentication = RecipientSMSAuthentication;
  }

  return RecipientSMSAuthentication;
  
  
}));
