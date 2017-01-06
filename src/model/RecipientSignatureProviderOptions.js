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

  
  

  
  var RecipientSignatureProviderOptions = function RecipientSignatureProviderOptions() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.sms) {
        self.sms = data.sms;
      }
      
      if (data.oneTimePassword) {
        self.oneTimePassword = data.oneTimePassword;
      }
      
      if (data.cpfNumber) {
        self.cpfNumber = data.cpfNumber;
      }
      
      if (data.signerRole) {
        self.signerRole = data.signerRole;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getSms = function() {
      return self.sms;
    }

    /**
     * set 
     * @param {String} sms
     **/
    self.setSms = function (sms) {
      self.sms = sms;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOneTimePassword = function() {
      return self.oneTimePassword;
    }

    /**
     * set 
     * @param {String} oneTimePassword
     **/
    self.setOneTimePassword = function (oneTimePassword) {
      self.oneTimePassword = oneTimePassword;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCpfNumber = function() {
      return self.cpfNumber;
    }

    /**
     * set 
     * @param {String} cpfNumber
     **/
    self.setCpfNumber = function (cpfNumber) {
      self.cpfNumber = cpfNumber;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSignerRole = function() {
      return self.signerRole;
    }

    /**
     * set 
     * @param {String} signerRole
     **/
    self.setSignerRole = function (signerRole) {
      self.signerRole = signerRole;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientSignatureProviderOptions = RecipientSignatureProviderOptions;
  }

  return RecipientSignatureProviderOptions;
  
  
}));
