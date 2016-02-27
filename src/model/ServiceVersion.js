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

  
  

  
  var ServiceVersion = function ServiceVersion() { 
    var self = this;
    
    /**
     * The version of the rest API.
     * datatype: String
     **/
    self.version = null;
    
    /**
     * 
     * datatype: String
     **/
    self.versionUrl = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.version) {
        self.version = data.version;
      }
      
      if (data.versionUrl) {
        self.versionUrl = data.versionUrl;
      }
      
    }

    
    /**
     * get The version of the rest API.
     * @return {String}
     **/
    self.getVersion = function() {
      return self.version;
    }

    /**
     * set The version of the rest API.
     * @param {String} version
     **/
    self.setVersion = function (version) {
      self.version = version;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getVersionUrl = function() {
      return self.versionUrl;
    }

    /**
     * set 
     * @param {String} versionUrl
     **/
    self.setVersionUrl = function (versionUrl) {
      self.versionUrl = versionUrl;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ServiceVersion = ServiceVersion;
  }

  return ServiceVersion;
  
  
}));
