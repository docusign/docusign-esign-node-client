(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './NameValue', './SenderEmailNotifications', './SignerEmailNotifications'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./NameValue'), require('./SenderEmailNotifications'), require('./SignerEmailNotifications'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.NameValue, root.Docusign.SenderEmailNotifications, root.Docusign.SignerEmailNotifications);
  }
}(this, function(module, NameValue, SenderEmailNotifications, SignerEmailNotifications) {
  'use strict';

  
  

  
  var UserSettingsInformation = function UserSettingsInformation() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.userSettings = [];
    
    /**
     * datatype: SignerEmailNotifications
     **/
    self.signerEmailNotifications = null;
    
    /**
     * datatype: SenderEmailNotifications
     **/
    self.senderEmailNotifications = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.userSettings) {
        self.userSettings = data.userSettings;
      }
      
      if (data.signerEmailNotifications) {
        self.signerEmailNotifications = new data.signerEmailNotifications.constructor();
        self.signerEmailNotifications.constructFromObject(data.signerEmailNotifications);
      }
      
      if (data.senderEmailNotifications) {
        self.senderEmailNotifications = new data.senderEmailNotifications.constructor();
        self.senderEmailNotifications.constructFromObject(data.senderEmailNotifications);
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getUserSettings = function() {
      return self.userSettings;
    }

    /**
     * set 
     * @param {Array} userSettings
     **/
    self.setUserSettings = function (userSettings) {
      self.userSettings = userSettings;
    }
    
    /**
     * @return {SignerEmailNotifications}
     **/
    self.getSignerEmailNotifications = function() {
      return self.signerEmailNotifications;
    }

    /**
     * @param {SignerEmailNotifications} signerEmailNotifications
     **/
    self.setSignerEmailNotifications = function (signerEmailNotifications) {
      self.signerEmailNotifications = signerEmailNotifications;
    }
    
    /**
     * @return {SenderEmailNotifications}
     **/
    self.getSenderEmailNotifications = function() {
      return self.senderEmailNotifications;
    }

    /**
     * @param {SenderEmailNotifications} senderEmailNotifications
     **/
    self.setSenderEmailNotifications = function (senderEmailNotifications) {
      self.senderEmailNotifications = senderEmailNotifications;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.UserSettingsInformation = UserSettingsInformation;
  }

  return UserSettingsInformation;
  
  
}));
