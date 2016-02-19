(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Folder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Folder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Folder);
  }
}(this, function(module, Folder) {
  'use strict';

  
  

  
  var FoldersResponse = function FoldersResponse() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.folders = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.folders) {
        self.folders = data.folders;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getFolders = function() {
      return self.folders;
    }

    /**
     * set 
     * @param {Array} folders
     **/
    self.setFolders = function (folders) {
      self.folders = folders;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.FoldersResponse = FoldersResponse;
  }

  return FoldersResponse;
  
  
}));
