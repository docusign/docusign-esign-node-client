(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './SamlAssertionAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./SamlAssertionAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.SamlAssertionAttribute);
  }
}(this, function(module, SamlAssertionAttribute) {
  'use strict';

  
  

  
  var RecipientSAMLAuthentication = function RecipientSAMLAuthentication() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.samlAssertionAttributes = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.samlAssertionAttributes) {
        self.samlAssertionAttributes = data.samlAssertionAttributes;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getSamlAssertionAttributes = function() {
      return self.samlAssertionAttributes;
    }

    /**
     * set 
     * @param {Array} samlAssertionAttributes
     **/
    self.setSamlAssertionAttributes = function (samlAssertionAttributes) {
      self.samlAssertionAttributes = samlAssertionAttributes;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientSAMLAuthentication = RecipientSAMLAuthentication;
  }

  return RecipientSAMLAuthentication;
  
  
}));
