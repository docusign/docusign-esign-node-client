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

  
  

  
  var PageRequest = function PageRequest() { 
    var self = this;
    
    /**
     * Sets the direction the page image is rotated. The possible settings are: left or right
     * datatype: String
     **/
    self.rotate = null;
    
    /**
     * 
     * datatype: String
     **/
    self.password = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.rotate) {
        self.rotate = data.rotate;
      }
      
      if (data.password) {
        self.password = data.password;
      }
      
    }

    
    /**
     * get Sets the direction the page image is rotated. The possible settings are: left or right
     * @return {String}
     **/
    self.getRotate = function() {
      return self.rotate;
    }

    /**
     * set Sets the direction the page image is rotated. The possible settings are: left or right
     * @param {String} rotate
     **/
    self.setRotate = function (rotate) {
      self.rotate = rotate;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPassword = function() {
      return self.password;
    }

    /**
     * set 
     * @param {String} password
     **/
    self.setPassword = function (password) {
      self.password = password;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.PageRequest = PageRequest;
  }

  return PageRequest;
  
  
}));
