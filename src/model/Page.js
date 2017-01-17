(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails);
  }
}(this, function(module, ErrorDetails) {
  'use strict';

  
  

  /**
   * Description of a page of a document.
   **/
  var Page = function Page() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.pageId) {
        self.pageId = data.pageId;
      }
      
      if (data.sequence) {
        self.sequence = data.sequence;
      }
      
      if (data.height) {
        self.height = data.height;
      }
      
      if (data.width) {
        self.width = data.width;
      }
      
      if (data.dpi) {
        self.dpi = data.dpi;
      }
      
      if (data.imageBytes) {
        self.imageBytes = data.imageBytes;
      }
      
      if (data.mimeType) {
        self.mimeType = data.mimeType;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getPageId = function() {
      return self.pageId;
    }

    /**
     * set 
     * @param {String} pageId
     **/
    self.setPageId = function (pageId) {
      self.pageId = pageId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSequence = function() {
      return self.sequence;
    }

    /**
     * set 
     * @param {String} sequence
     **/
    self.setSequence = function (sequence) {
      self.sequence = sequence;
    }
    
    /**
     * get Height of the tab in pixels.
     * @return {String}
     **/
    self.getHeight = function() {
      return self.height;
    }

    /**
     * set Height of the tab in pixels.
     * @param {String} height
     **/
    self.setHeight = function (height) {
      self.height = height;
    }
    
    /**
     * get Width of the tab in pixels.
     * @return {String}
     **/
    self.getWidth = function() {
      return self.width;
    }

    /**
     * set Width of the tab in pixels.
     * @param {String} width
     **/
    self.setWidth = function (width) {
      self.width = width;
    }
    
    /**
     * get The number of dots per inch used for the page image.
     * @return {String}
     **/
    self.getDpi = function() {
      return self.dpi;
    }

    /**
     * set The number of dots per inch used for the page image.
     * @param {String} dpi
     **/
    self.setDpi = function (dpi) {
      self.dpi = dpi;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getImageBytes = function() {
      return self.imageBytes;
    }

    /**
     * set 
     * @param {String} imageBytes
     **/
    self.setImageBytes = function (imageBytes) {
      self.imageBytes = imageBytes;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getMimeType = function() {
      return self.mimeType;
    }

    /**
     * set 
     * @param {String} mimeType
     **/
    self.setMimeType = function (mimeType) {
      self.mimeType = mimeType;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Page = Page;
  }

  return Page;
  
  
}));
