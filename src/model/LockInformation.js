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

  
  

  
  var LockInformation = function LockInformation() { 
    var self = this;
    
    /**
     * datatype: UserInfo
     **/
    self.lockedByUser = null;
    
    /**
     * Specifies the friendly name of  the application that is locking the envelope.
     * datatype: String
     **/
    self.lockedByApp = null;
    
    /**
     * 
     * datatype: String
     **/
    self.lockedUntilDateTime = null;
    
    /**
     * Sets the time, in seconds, until the lock expires when there is no activity on the envelope.\n\nIf no value is entered, then the default value of 300 seconds is used. The maximum value is 1,800 seconds.\n\nThe lock duration can be extended.
     * datatype: String
     **/
    self.lockDurationInSeconds = null;
    
    /**
     * 
     * datatype: String
     **/
    self.lockType = null;
    
    /**
     * Reserved for future use.\n\nIndicates whether a scratchpad is used for editing information.
     * datatype: String
     **/
    self.useScratchPad = null;
    
    /**
     * 
     * datatype: String
     **/
    self.lockToken = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.lockedByUser) {
        self.lockedByUser = new data.lockedByUser.constructor();
        self.lockedByUser.constructFromObject(data.lockedByUser);
      }
      
      if (data.lockedByApp) {
        self.lockedByApp = data.lockedByApp;
      }
      
      if (data.lockedUntilDateTime) {
        self.lockedUntilDateTime = data.lockedUntilDateTime;
      }
      
      if (data.lockDurationInSeconds) {
        self.lockDurationInSeconds = data.lockDurationInSeconds;
      }
      
      if (data.lockType) {
        self.lockType = data.lockType;
      }
      
      if (data.useScratchPad) {
        self.useScratchPad = data.useScratchPad;
      }
      
      if (data.lockToken) {
        self.lockToken = data.lockToken;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * @return {UserInfo}
     **/
    self.getLockedByUser = function() {
      return self.lockedByUser;
    }

    /**
     * @param {UserInfo} lockedByUser
     **/
    self.setLockedByUser = function (lockedByUser) {
      self.lockedByUser = lockedByUser;
    }
    
    /**
     * get Specifies the friendly name of  the application that is locking the envelope.
     * @return {String}
     **/
    self.getLockedByApp = function() {
      return self.lockedByApp;
    }

    /**
     * set Specifies the friendly name of  the application that is locking the envelope.
     * @param {String} lockedByApp
     **/
    self.setLockedByApp = function (lockedByApp) {
      self.lockedByApp = lockedByApp;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLockedUntilDateTime = function() {
      return self.lockedUntilDateTime;
    }

    /**
     * set 
     * @param {String} lockedUntilDateTime
     **/
    self.setLockedUntilDateTime = function (lockedUntilDateTime) {
      self.lockedUntilDateTime = lockedUntilDateTime;
    }
    
    /**
     * get Sets the time, in seconds, until the lock expires when there is no activity on the envelope.\n\nIf no value is entered, then the default value of 300 seconds is used. The maximum value is 1,800 seconds.\n\nThe lock duration can be extended.
     * @return {String}
     **/
    self.getLockDurationInSeconds = function() {
      return self.lockDurationInSeconds;
    }

    /**
     * set Sets the time, in seconds, until the lock expires when there is no activity on the envelope.\n\nIf no value is entered, then the default value of 300 seconds is used. The maximum value is 1,800 seconds.\n\nThe lock duration can be extended.
     * @param {String} lockDurationInSeconds
     **/
    self.setLockDurationInSeconds = function (lockDurationInSeconds) {
      self.lockDurationInSeconds = lockDurationInSeconds;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLockType = function() {
      return self.lockType;
    }

    /**
     * set 
     * @param {String} lockType
     **/
    self.setLockType = function (lockType) {
      self.lockType = lockType;
    }
    
    /**
     * get Reserved for future use.\n\nIndicates whether a scratchpad is used for editing information.
     * @return {String}
     **/
    self.getUseScratchPad = function() {
      return self.useScratchPad;
    }

    /**
     * set Reserved for future use.\n\nIndicates whether a scratchpad is used for editing information.
     * @param {String} useScratchPad
     **/
    self.setUseScratchPad = function (useScratchPad) {
      self.useScratchPad = useScratchPad;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLockToken = function() {
      return self.lockToken;
    }

    /**
     * set 
     * @param {String} lockToken
     **/
    self.setLockToken = function (lockToken) {
      self.lockToken = lockToken;
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
    module.LockInformation = LockInformation;
  }

  return LockInformation;
  
  
}));
