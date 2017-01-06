(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './WorkspaceItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./WorkspaceItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.WorkspaceItem);
  }
}(this, function(module, WorkspaceItem) {
  'use strict';

  
  

  /**
   * Provides properties that describe the items contained in a workspace.
   **/
  var WorkspaceItemList = function WorkspaceItemList() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.items = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.items) {
        self.items = data.items;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getItems = function() {
      return self.items;
    }

    /**
     * set 
     * @param {Array} items
     **/
    self.setItems = function (items) {
      self.items = items;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.WorkspaceItemList = WorkspaceItemList;
  }

  return WorkspaceItemList;
  
  
}));
