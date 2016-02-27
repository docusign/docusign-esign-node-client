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

  
  

  
  var UserInfo = function UserInfo() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.userName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.email = null;
    
    /**
     * 
     * datatype: String
     **/
    self.userId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.userType = null;
    
    /**
     * 
     * datatype: String
     **/
    self.userStatus = null;
    
    /**
     * 
     * datatype: String
     **/
    self.uri = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.userName) {
        self.userName = data.userName;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.userId) {
        self.userId = data.userId;
      }
      
      if (data.userType) {
        self.userType = data.userType;
      }
      
      if (data.userStatus) {
        self.userStatus = data.userStatus;
      }
      
      if (data.uri) {
        self.uri = data.uri;
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
    self.getUserName = function() {
      return self.userName;
    }

    /**
     * set 
     * @param {String} userName
     **/
    self.setUserName = function (userName) {
      self.userName = userName;
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
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserId = function() {
      return self.userId;
    }

    /**
     * set 
     * @param {String} userId
     **/
    self.setUserId = function (userId) {
      self.userId = userId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserType = function() {
      return self.userType;
    }

    /**
     * set 
     * @param {String} userType
     **/
    self.setUserType = function (userType) {
      self.userType = userType;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserStatus = function() {
      return self.userStatus;
    }

    /**
     * set 
     * @param {String} userStatus
     **/
    self.setUserStatus = function (userStatus) {
      self.userStatus = userStatus;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUri = function() {
      return self.uri;
    }

    /**
     * set 
     * @param {String} uri
     **/
    self.setUri = function (uri) {
      self.uri = uri;
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
    module.UserInfo = UserInfo;
  }

  return UserInfo;
  
  
}));
