(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './SharedItem', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./SharedItem'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.SharedItem, root.Docusign.UserInfo);
  }
}(this, function(module, ErrorDetails, SharedItem, UserInfo) {
  'use strict';

  
  

  
  var MemberSharedItems = function MemberSharedItems() { 
    var self = this;
    
    /**
     * datatype: UserInfo
     **/
    self.user = null;
    
    /**
     * 
     * datatype: Array
     **/
    self.envelopes = [];
    
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
      
      if (data.envelopes) {
        self.envelopes = data.envelopes;
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
     * get 
     * @return {Array}
     **/
    self.getEnvelopes = function() {
      return self.envelopes;
    }

    /**
     * set 
     * @param {Array} envelopes
     **/
    self.setEnvelopes = function (envelopes) {
      self.envelopes = envelopes;
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
    module.MemberSharedItems = MemberSharedItems;
  }

  return MemberSharedItems;
  
  
}));
