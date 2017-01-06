(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './AccountSignatureProvider'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./AccountSignatureProvider'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.AccountSignatureProvider);
  }
}(this, function(module, AccountSignatureProvider) {
  'use strict';

  
  

  
  var AccountSignatureProviders = function AccountSignatureProviders() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.signatureProviders = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.signatureProviders) {
        self.signatureProviders = data.signatureProviders;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getSignatureProviders = function() {
      return self.signatureProviders;
    }

    /**
     * set 
     * @param {Array} signatureProviders
     **/
    self.setSignatureProviders = function (signatureProviders) {
      self.signatureProviders = signatureProviders;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AccountSignatureProviders = AccountSignatureProviders;
  }

  return AccountSignatureProviders;
  
  
}));
