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

  
  

  
  var SocialAuthentication = function SocialAuthentication() { 
    var self = this;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.authentication = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.authentication) {
        self.authentication = data.authentication;
      }
      
    }

    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getAuthentication = function() {
      return self.authentication;
    }

    /**
     * set Reserved: TBD
     * @param {String} authentication
     **/
    self.setAuthentication = function (authentication) {
      self.authentication = authentication;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.SocialAuthentication = SocialAuthentication;
  }

  return SocialAuthentication;
  
  
}));
