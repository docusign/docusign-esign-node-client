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

  
  

  
  var SettingsMetadata = function SettingsMetadata() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.options = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.rights) {
        self.rights = data.rights;
      }
      
      if (data.uiHint) {
        self.uiHint = data.uiHint;
      }
      
      if (data.uiType) {
        self.uiType = data.uiType;
      }
      
      if (data.uiOrder) {
        self.uiOrder = data.uiOrder;
      }
      
      if (data.is21CFRPart11) {
        self.is21CFRPart11 = data.is21CFRPart11;
      }
      
      if (data.options) {
        self.options = data.options;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getRights = function() {
      return self.rights;
    }

    /**
     * set 
     * @param {String} rights
     **/
    self.setRights = function (rights) {
      self.rights = rights;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUiHint = function() {
      return self.uiHint;
    }

    /**
     * set 
     * @param {String} uiHint
     **/
    self.setUiHint = function (uiHint) {
      self.uiHint = uiHint;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUiType = function() {
      return self.uiType;
    }

    /**
     * set 
     * @param {String} uiType
     **/
    self.setUiType = function (uiType) {
      self.uiType = uiType;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUiOrder = function() {
      return self.uiOrder;
    }

    /**
     * set 
     * @param {String} uiOrder
     **/
    self.setUiOrder = function (uiOrder) {
      self.uiOrder = uiOrder;
    }
    
    /**
     * get When set to **true**, indicates that this module is enabled on the account.
     * @return {String}
     **/
    self.getIs21CFRPart11 = function() {
      return self.is21CFRPart11;
    }

    /**
     * set When set to **true**, indicates that this module is enabled on the account.
     * @param {String} is21CFRPart11
     **/
    self.setIs21CFRPart11 = function (is21CFRPart11) {
      self.is21CFRPart11 = is21CFRPart11;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getOptions = function() {
      return self.options;
    }

    /**
     * set 
     * @param {Array} options
     **/
    self.setOptions = function (options) {
      self.options = options;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.SettingsMetadata = SettingsMetadata;
  }

  return SettingsMetadata;
  
  
}));
