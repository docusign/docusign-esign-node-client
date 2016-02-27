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

  
  

  
  var ViewUrl = function ViewUrl() { 
    var self = this;
    
    /**
     * The view URL to be navigated to.
     * datatype: String
     **/
    self.url = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.url) {
        self.url = data.url;
      }
      
    }

    
    /**
     * get The view URL to be navigated to.
     * @return {String}
     **/
    self.getUrl = function() {
      return self.url;
    }

    /**
     * set The view URL to be navigated to.
     * @param {String} url
     **/
    self.setUrl = function (url) {
      self.url = url;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ViewUrl = ViewUrl;
  }

  return ViewUrl;
  
  
}));
