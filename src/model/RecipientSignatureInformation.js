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

  
  

  
  var RecipientSignatureInformation = function RecipientSignatureInformation() { 
    var self = this;
    
    /**
     * Specifies the user signature name.
     * datatype: String
     **/
    self.signatureName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.signatureInitials = null;
    
    /**
     * 
     * datatype: String
     **/
    self.fontStyle = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.signatureName) {
        self.signatureName = data.signatureName;
      }
      
      if (data.signatureInitials) {
        self.signatureInitials = data.signatureInitials;
      }
      
      if (data.fontStyle) {
        self.fontStyle = data.fontStyle;
      }
      
    }

    
    /**
     * get Specifies the user signature name.
     * @return {String}
     **/
    self.getSignatureName = function() {
      return self.signatureName;
    }

    /**
     * set Specifies the user signature name.
     * @param {String} signatureName
     **/
    self.setSignatureName = function (signatureName) {
      self.signatureName = signatureName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSignatureInitials = function() {
      return self.signatureInitials;
    }

    /**
     * set 
     * @param {String} signatureInitials
     **/
    self.setSignatureInitials = function (signatureInitials) {
      self.signatureInitials = signatureInitials;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFontStyle = function() {
      return self.fontStyle;
    }

    /**
     * set 
     * @param {String} fontStyle
     **/
    self.setFontStyle = function (fontStyle) {
      self.fontStyle = fontStyle;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientSignatureInformation = RecipientSignatureInformation;
  }

  return RecipientSignatureInformation;
  
  
}));
