(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.UserInfo);
  }
}(this, function(module, ErrorDetails, UserInfo) {
  'use strict';

  
  

  
  var SharedItem = function SharedItem() { 
    var self = this;
    
    /**
     * datatype: UserInfo
     **/
    self.user = null;
    
    /**
     * When set to **true**, this custom tab is shared.
     * datatype: String
     **/
    self.shared = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.user) {
        self.user = new data.user.constructor();
        self.user.constructFromObject(data.user);
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * @return {UserInfo}
     **/
    self.getUser = function() {
      return self.user;
    }

    /**
     * @param {UserInfo} user
     **/
    self.setUser = function (user) {
      self.user = user;
    }
    
    /**
     * get When set to **true**, this custom tab is shared.
     * @return {String}
     **/
    self.getShared = function() {
      return self.shared;
    }

    /**
     * set When set to **true**, this custom tab is shared.
     * @param {String} shared
     **/
    self.setShared = function (shared) {
      self.shared = shared;
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
    module.SharedItem = SharedItem;
  }

  return SharedItem;
  
  
}));
