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

  
  

  
  var SignatureProviderRequiredOption = function SignatureProviderRequiredOption() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.requiredSignatureProviderOptionIds = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.signerType) {
        self.signerType = data.signerType;
      }
      
      if (data.requiredSignatureProviderOptionIds) {
        self.requiredSignatureProviderOptionIds = data.requiredSignatureProviderOptionIds;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getSignerType = function() {
      return self.signerType;
    }

    /**
     * set 
     * @param {String} signerType
     **/
    self.setSignerType = function (signerType) {
      self.signerType = signerType;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getRequiredSignatureProviderOptionIds = function() {
      return self.requiredSignatureProviderOptionIds;
    }

    /**
     * set 
     * @param {Array} requiredSignatureProviderOptionIds
     **/
    self.setRequiredSignatureProviderOptionIds = function (requiredSignatureProviderOptionIds) {
      self.requiredSignatureProviderOptionIds = requiredSignatureProviderOptionIds;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.SignatureProviderRequiredOption = SignatureProviderRequiredOption;
  }

  return SignatureProviderRequiredOption;
  
  
}));
