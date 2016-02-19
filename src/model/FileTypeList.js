(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './FileType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./FileType'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.FileType);
  }
}(this, function(module, FileType) {
  'use strict';

  
  

  
  var FileTypeList = function FileTypeList() { 
    var self = this;
    
    /**
     * A collection of file types.
     * datatype: Array
     **/
    self.fileTypes = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.fileTypes) {
        self.fileTypes = data.fileTypes;
      }
      
    }

    
    /**
     * get A collection of file types.
     * @return {Array}
     **/
    self.getFileTypes = function() {
      return self.fileTypes;
    }

    /**
     * set A collection of file types.
     * @param {Array} fileTypes
     **/
    self.setFileTypes = function (fileTypes) {
      self.fileTypes = fileTypes;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.FileTypeList = FileTypeList;
  }

  return FileTypeList;
  
  
}));
