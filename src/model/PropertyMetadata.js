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

  
  

  
  var PropertyMetadata = function PropertyMetadata() { 
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
    module.PropertyMetadata = PropertyMetadata;
  }

  return PropertyMetadata;
  
  
}));
