(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './AccountRoleSettings', './UserInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./AccountRoleSettings'), require('./UserInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.AccountRoleSettings, root.Docusign.UserInformation);
  }
}(this, function(module, AccountRoleSettings, UserInformation) {
  'use strict';

  
  

  
  var PermissionProfile = function PermissionProfile() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.users = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.permissionProfileId) {
        self.permissionProfileId = data.permissionProfileId;
      }
      
      if (data.permissionProfileName) {
        self.permissionProfileName = data.permissionProfileName;
      }
      
      if (data.users) {
        self.users = data.users;
      }
      
      if (data.modifiedDateTime) {
        self.modifiedDateTime = data.modifiedDateTime;
      }
      
      if (data.modifiedByUsername) {
        self.modifiedByUsername = data.modifiedByUsername;
      }
      
      if (data.userCount) {
        self.userCount = data.userCount;
      }
      
      if (data.settings) {
        self.settings = new data.settings.constructor();
        self.settings.constructFromObject(data.settings);
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getPermissionProfileId = function() {
      return self.permissionProfileId;
    }

    /**
     * set 
     * @param {String} permissionProfileId
     **/
    self.setPermissionProfileId = function (permissionProfileId) {
      self.permissionProfileId = permissionProfileId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPermissionProfileName = function() {
      return self.permissionProfileName;
    }

    /**
     * set 
     * @param {String} permissionProfileName
     **/
    self.setPermissionProfileName = function (permissionProfileName) {
      self.permissionProfileName = permissionProfileName;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getUsers = function() {
      return self.users;
    }

    /**
     * set 
     * @param {Array} users
     **/
    self.setUsers = function (users) {
      self.users = users;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getModifiedDateTime = function() {
      return self.modifiedDateTime;
    }

    /**
     * set 
     * @param {String} modifiedDateTime
     **/
    self.setModifiedDateTime = function (modifiedDateTime) {
      self.modifiedDateTime = modifiedDateTime;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getModifiedByUsername = function() {
      return self.modifiedByUsername;
    }

    /**
     * set 
     * @param {String} modifiedByUsername
     **/
    self.setModifiedByUsername = function (modifiedByUsername) {
      self.modifiedByUsername = modifiedByUsername;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserCount = function() {
      return self.userCount;
    }

    /**
     * set 
     * @param {String} userCount
     **/
    self.setUserCount = function (userCount) {
      self.userCount = userCount;
    }
    
    /**
     * @return {AccountRoleSettings}
     **/
    self.getSettings = function() {
      return self.settings;
    }

    /**
     * @param {AccountRoleSettings} settings
     **/
    self.setSettings = function (settings) {
      self.settings = settings;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.PermissionProfile = PermissionProfile;
  }

  return PermissionProfile;
  
  
}));
