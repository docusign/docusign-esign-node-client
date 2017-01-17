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

  
  

  
  var RecipientSignatureProviderOption = function RecipientSignatureProviderOption() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.signatureProviderOptionId) {
        self.signatureProviderOptionId = data.signatureProviderOptionId;
      }
      
      if (data.signatureProviderOptionName) {
        self.signatureProviderOptionName = data.signatureProviderOptionName;
      }
      
      if (data.signatureProviderOptionValue) {
        self.signatureProviderOptionValue = data.signatureProviderOptionValue;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getSignatureProviderOptionId = function() {
      return self.signatureProviderOptionId;
    }

    /**
     * set 
     * @param {String} signatureProviderOptionId
     **/
    self.setSignatureProviderOptionId = function (signatureProviderOptionId) {
      self.signatureProviderOptionId = signatureProviderOptionId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSignatureProviderOptionName = function() {
      return self.signatureProviderOptionName;
    }

    /**
     * set 
     * @param {String} signatureProviderOptionName
     **/
    self.setSignatureProviderOptionName = function (signatureProviderOptionName) {
      self.signatureProviderOptionName = signatureProviderOptionName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSignatureProviderOptionValue = function() {
      return self.signatureProviderOptionValue;
    }

    /**
     * set 
     * @param {String} signatureProviderOptionValue
     **/
    self.setSignatureProviderOptionValue = function (signatureProviderOptionValue) {
      self.signatureProviderOptionValue = signatureProviderOptionValue;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientSignatureProviderOption = RecipientSignatureProviderOption;
  }

  return RecipientSignatureProviderOption;
  
  
}));
