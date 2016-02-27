(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.NameValue);
  }
}(this, function(module, NameValue) {
  'use strict';

  
  

  
  var ResourceInformation = function ResourceInformation() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.resources = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.resources) {
        self.resources = data.resources;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getResources = function() {
      return self.resources;
    }

    /**
     * set 
     * @param {Array} resources
     **/
    self.setResources = function (resources) {
      self.resources = resources;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ResourceInformation = ResourceInformation;
  }

  return ResourceInformation;
  
  
}));
