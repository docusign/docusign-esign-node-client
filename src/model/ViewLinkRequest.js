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

  
  

  
  var ViewLinkRequest = function ViewLinkRequest() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.returnUrl = null;
    
    /**
     * 
     * datatype: String
     **/
    self.email = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.returnUrl) {
        self.returnUrl = data.returnUrl;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getReturnUrl = function() {
      return self.returnUrl;
    }

    /**
     * set 
     * @param {String} returnUrl
     **/
    self.setReturnUrl = function (returnUrl) {
      self.returnUrl = returnUrl;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEmail = function() {
      return self.email;
    }

    /**
     * set 
     * @param {String} email
     **/
    self.setEmail = function (email) {
      self.email = email;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ViewLinkRequest = ViewLinkRequest;
  }

  return ViewLinkRequest;
  
  
}));
