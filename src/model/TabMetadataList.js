(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './TabMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./TabMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.TabMetadata);
  }
}(this, function(module, TabMetadata) {
  'use strict';

  
  

  
  var TabMetadataList = function TabMetadataList() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.tabs = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.tabs) {
        self.tabs = data.tabs;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getTabs = function() {
      return self.tabs;
    }

    /**
     * set 
     * @param {Array} tabs
     **/
    self.setTabs = function (tabs) {
      self.tabs = tabs;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TabMetadataList = TabMetadataList;
  }

  return TabMetadataList;
  
  
}));
