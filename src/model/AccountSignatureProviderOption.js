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

  
  

  
  var AccountSignatureProviderOption = function AccountSignatureProviderOption() { 
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
      
      if (data.signatureProviderOptionDisplayName) {
        self.signatureProviderOptionDisplayName = data.signatureProviderOptionDisplayName;
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
    self.getSignatureProviderOptionDisplayName = function() {
      return self.signatureProviderOptionDisplayName;
    }

    /**
     * set 
     * @param {String} signatureProviderOptionDisplayName
     **/
    self.setSignatureProviderOptionDisplayName = function (signatureProviderOptionDisplayName) {
      self.signatureProviderOptionDisplayName = signatureProviderOptionDisplayName;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AccountSignatureProviderOption = AccountSignatureProviderOption;
  }

  return AccountSignatureProviderOption;
  
  
}));
