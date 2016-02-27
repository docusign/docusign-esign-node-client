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

  
  

  
  var MatchBox = function MatchBox() { 
    var self = this;
    
    /**
     * Specifies the page number on which the tab is located.
     * datatype: Integer
     **/
    self.pageNumber = null;
    
    /**
     * This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * datatype: Integer
     **/
    self.xPosition = null;
    
    /**
     * This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * datatype: Integer
     **/
    self.yPosition = null;
    
    /**
     * Width of the tab in pixels.
     * datatype: Integer
     **/
    self.width = null;
    
    /**
     * Height of the tab in pixels.
     * datatype: Integer
     **/
    self.height = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.pageNumber) {
        self.pageNumber = data.pageNumber;
      }
      
      if (data.xPosition) {
        self.xPosition = data.xPosition;
      }
      
      if (data.yPosition) {
        self.yPosition = data.yPosition;
      }
      
      if (data.width) {
        self.width = data.width;
      }
      
      if (data.height) {
        self.height = data.height;
      }
      
    }

    
    /**
     * get Specifies the page number on which the tab is located.
     * @return {Integer}
     **/
    self.getPageNumber = function() {
      return self.pageNumber;
    }

    /**
     * set Specifies the page number on which the tab is located.
     * @param {Integer} pageNumber
     **/
    self.setPageNumber = function (pageNumber) {
      self.pageNumber = pageNumber;
    }
    
    /**
     * get This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {Integer}
     **/
    self.getXPosition = function() {
      return self.xPosition;
    }

    /**
     * set This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {Integer} xPosition
     **/
    self.setXPosition = function (xPosition) {
      self.xPosition = xPosition;
    }
    
    /**
     * get This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {Integer}
     **/
    self.getYPosition = function() {
      return self.yPosition;
    }

    /**
     * set This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {Integer} yPosition
     **/
    self.setYPosition = function (yPosition) {
      self.yPosition = yPosition;
    }
    
    /**
     * get Width of the tab in pixels.
     * @return {Integer}
     **/
    self.getWidth = function() {
      return self.width;
    }

    /**
     * set Width of the tab in pixels.
     * @param {Integer} width
     **/
    self.setWidth = function (width) {
      self.width = width;
    }
    
    /**
     * get Height of the tab in pixels.
     * @return {Integer}
     **/
    self.getHeight = function() {
      return self.height;
    }

    /**
     * set Height of the tab in pixels.
     * @param {Integer} height
     **/
    self.setHeight = function (height) {
      self.height = height;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.MatchBox = MatchBox;
  }

  return MatchBox;
  
  
}));
