(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails);
  }
}(this, function(module, ErrorDetails) {
  'use strict';

  
  

  
  var SamlAssertionAttribute = function SamlAssertionAttribute() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * The value associated with the named SAML assertion attribute
     * datatype: String
     **/
    self.value = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.value) {
        self.value = data.value;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set 
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get The value associated with the named SAML assertion attribute
     * @return {String}
     **/
    self.getValue = function() {
      return self.value;
    }

    /**
     * set The value associated with the named SAML assertion attribute
     * @param {String} value
     **/
    self.setValue = function (value) {
      self.value = value;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.SamlAssertionAttribute = SamlAssertionAttribute;
  }

  return SamlAssertionAttribute;
  
  
}));
