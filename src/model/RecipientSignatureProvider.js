(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './RecipientSignatureProviderOption', './RecipientSignatureProviderOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./RecipientSignatureProviderOption'), require('./RecipientSignatureProviderOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.RecipientSignatureProviderOption, root.Docusign.RecipientSignatureProviderOptions);
  }
}(this, function(module, RecipientSignatureProviderOption, RecipientSignatureProviderOptions) {
  'use strict';

  
  

  
  var RecipientSignatureProvider = function RecipientSignatureProvider() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.recipientSignatureProviderOptions = [];
    

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
      
      if (data.recipientSignatureProviderOptions) {
        self.recipientSignatureProviderOptions = data.recipientSignatureProviderOptions;
      }
      
      if (data.signatureProviderOptions) {
        self.signatureProviderOptions = new data.signatureProviderOptions.constructor();
        self.signatureProviderOptions.constructFromObject(data.signatureProviderOptions);
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
     * @return {Array}
     **/
    self.getRecipientSignatureProviderOptions = function() {
      return self.recipientSignatureProviderOptions;
    }

    /**
     * set 
     * @param {Array} recipientSignatureProviderOptions
     **/
    self.setRecipientSignatureProviderOptions = function (recipientSignatureProviderOptions) {
      self.recipientSignatureProviderOptions = recipientSignatureProviderOptions;
    }
    
    /**
     * @return {RecipientSignatureProviderOptions}
     **/
    self.getSignatureProviderOptions = function() {
      return self.signatureProviderOptions;
    }

    /**
     * @param {RecipientSignatureProviderOptions} signatureProviderOptions
     **/
    self.setSignatureProviderOptions = function (signatureProviderOptions) {
      self.signatureProviderOptions = signatureProviderOptions;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientSignatureProvider = RecipientSignatureProvider;
  }

  return RecipientSignatureProvider;
  
  
}));
