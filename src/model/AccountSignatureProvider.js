(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './AccountSignatureProviderOption', './SignatureProviderRequiredOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./AccountSignatureProviderOption'), require('./SignatureProviderRequiredOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.AccountSignatureProviderOption, root.Docusign.SignatureProviderRequiredOption);
  }
}(this, function(module, AccountSignatureProviderOption, SignatureProviderRequiredOption) {
  'use strict';

  
  

  
  var AccountSignatureProvider = function AccountSignatureProvider() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.signatureProviderOptionsMetadata = [];
    
    /**
     * 
     * datatype: Array
     **/
    self.signatureProviderRequiredOptions = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.signatureProviderId) {
        self.signatureProviderId = data.signatureProviderId;
      }
      
      if (data.signatureProviderName) {
        self.signatureProviderName = data.signatureProviderName;
      }
      
      if (data.signatureProviderDisplayName) {
        self.signatureProviderDisplayName = data.signatureProviderDisplayName;
      }
      
      if (data.priority) {
        self.priority = data.priority;
      }
      
      if (data.isRequired) {
        self.isRequired = data.isRequired;
      }
      
      if (data.signatureProviderOptionsMetadata) {
        self.signatureProviderOptionsMetadata = data.signatureProviderOptionsMetadata;
      }
      
      if (data.signatureProviderRequiredOptions) {
        self.signatureProviderRequiredOptions = data.signatureProviderRequiredOptions;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getSignatureProviderId = function() {
      return self.signatureProviderId;
    }

    /**
     * set 
     * @param {String} signatureProviderId
     **/
    self.setSignatureProviderId = function (signatureProviderId) {
      self.signatureProviderId = signatureProviderId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSignatureProviderName = function() {
      return self.signatureProviderName;
    }

    /**
     * set 
     * @param {String} signatureProviderName
     **/
    self.setSignatureProviderName = function (signatureProviderName) {
      self.signatureProviderName = signatureProviderName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSignatureProviderDisplayName = function() {
      return self.signatureProviderDisplayName;
    }

    /**
     * set 
     * @param {String} signatureProviderDisplayName
     **/
    self.setSignatureProviderDisplayName = function (signatureProviderDisplayName) {
      self.signatureProviderDisplayName = signatureProviderDisplayName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPriority = function() {
      return self.priority;
    }

    /**
     * set 
     * @param {String} priority
     **/
    self.setPriority = function (priority) {
      self.priority = priority;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getIsRequired = function() {
      return self.isRequired;
    }

    /**
     * set 
     * @param {String} isRequired
     **/
    self.setIsRequired = function (isRequired) {
      self.isRequired = isRequired;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getSignatureProviderOptionsMetadata = function() {
      return self.signatureProviderOptionsMetadata;
    }

    /**
     * set 
     * @param {Array} signatureProviderOptionsMetadata
     **/
    self.setSignatureProviderOptionsMetadata = function (signatureProviderOptionsMetadata) {
      self.signatureProviderOptionsMetadata = signatureProviderOptionsMetadata;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getSignatureProviderRequiredOptions = function() {
      return self.signatureProviderRequiredOptions;
    }

    /**
     * set 
     * @param {Array} signatureProviderRequiredOptions
     **/
    self.setSignatureProviderRequiredOptions = function (signatureProviderRequiredOptions) {
      self.signatureProviderRequiredOptions = signatureProviderRequiredOptions;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AccountSignatureProvider = AccountSignatureProvider;
  }

  return AccountSignatureProvider;
  
  
}));
