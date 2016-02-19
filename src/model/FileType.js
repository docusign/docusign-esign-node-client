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

  
  

  
  var FileType = function FileType() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.fileExtension = null;
    
    /**
     * The mime-type of a file type listed in a fileTypes collection.
     * datatype: String
     **/
    self.mimeType = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.fileExtension) {
        self.fileExtension = data.fileExtension;
      }
      
      if (data.mimeType) {
        self.mimeType = data.mimeType;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getFileExtension = function() {
      return self.fileExtension;
    }

    /**
     * set 
     * @param {String} fileExtension
     **/
    self.setFileExtension = function (fileExtension) {
      self.fileExtension = fileExtension;
    }
    
    /**
     * get The mime-type of a file type listed in a fileTypes collection.
     * @return {String}
     **/
    self.getMimeType = function() {
      return self.mimeType;
    }

    /**
     * set The mime-type of a file type listed in a fileTypes collection.
     * @param {String} mimeType
     **/
    self.setMimeType = function (mimeType) {
      self.mimeType = mimeType;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.FileType = FileType;
  }

  return FileType;
  
  
}));
