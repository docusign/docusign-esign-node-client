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

  
  

  
  var LockRequest = function LockRequest() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.lockedByApp = null;
    
    /**
     * 
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
    self.templatePassword = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.lockedByApp) {
        self.lockedByApp = data.lockedByApp;
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
      
      if (data.templatePassword) {
        self.templatePassword = data.templatePassword;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getLockedByApp = function() {
      return self.lockedByApp;
    }

    /**
     * set 
     * @param {String} lockedByApp
     **/
    self.setLockedByApp = function (lockedByApp) {
      self.lockedByApp = lockedByApp;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLockDurationInSeconds = function() {
      return self.lockDurationInSeconds;
    }

    /**
     * set 
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
    self.getTemplatePassword = function() {
      return self.templatePassword;
    }

    /**
     * set 
     * @param {String} templatePassword
     **/
    self.setTemplatePassword = function (templatePassword) {
      self.templatePassword = templatePassword;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.LockRequest = LockRequest;
  }

  return LockRequest;
  
  
}));
