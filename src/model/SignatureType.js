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

  
  

  
  var SignatureType = function SignatureType() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.type = null;
    
    /**
     * 
     * datatype: String
     **/
    self.isDefault = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.type) {
        self.type = data.type;
      }
      
      if (data.isDefault) {
        self.isDefault = data.isDefault;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getType = function() {
      return self.type;
    }

    /**
     * set 
     * @param {String} type
     **/
    self.setType = function (type) {
      self.type = type;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getIsDefault = function() {
      return self.isDefault;
    }

    /**
     * set 
     * @param {String} isDefault
     **/
    self.setIsDefault = function (isDefault) {
      self.isDefault = isDefault;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.SignatureType = SignatureType;
  }

  return SignatureType;
  
  
}));
