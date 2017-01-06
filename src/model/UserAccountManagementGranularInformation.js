(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.SettingsMetadata);
  }
}(this, function(module, SettingsMetadata) {
  'use strict';

  
  

  
  var UserAccountManagementGranularInformation = function UserAccountManagementGranularInformation() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.canManageUsers) {
        self.canManageUsers = data.canManageUsers;
      }
      
      if (data.canManageAdmins) {
        self.canManageAdmins = data.canManageAdmins;
      }
      
      if (data.canManageGroups) {
        self.canManageGroups = data.canManageGroups;
      }
      
      if (data.canManageSharing) {
        self.canManageSharing = data.canManageSharing;
      }
      
      if (data.canManageUsersMetadata) {
        self.canManageUsersMetadata = new data.canManageUsersMetadata.constructor();
        self.canManageUsersMetadata.constructFromObject(data.canManageUsersMetadata);
      }
      
      if (data.canManageAdminsMetadata) {
        self.canManageAdminsMetadata = new data.canManageAdminsMetadata.constructor();
        self.canManageAdminsMetadata.constructFromObject(data.canManageAdminsMetadata);
      }
      
      if (data.canManageGroupsMetadata) {
        self.canManageGroupsMetadata = new data.canManageGroupsMetadata.constructor();
        self.canManageGroupsMetadata.constructFromObject(data.canManageGroupsMetadata);
      }
      
      if (data.canManageSharingMetadata) {
        self.canManageSharingMetadata = new data.canManageSharingMetadata.constructor();
        self.canManageSharingMetadata.constructFromObject(data.canManageSharingMetadata);
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getCanManageUsers = function() {
      return self.canManageUsers;
    }

    /**
     * set 
     * @param {String} canManageUsers
     **/
    self.setCanManageUsers = function (canManageUsers) {
      self.canManageUsers = canManageUsers;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanManageAdmins = function() {
      return self.canManageAdmins;
    }

    /**
     * set 
     * @param {String} canManageAdmins
     **/
    self.setCanManageAdmins = function (canManageAdmins) {
      self.canManageAdmins = canManageAdmins;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanManageGroups = function() {
      return self.canManageGroups;
    }

    /**
     * set 
     * @param {String} canManageGroups
     **/
    self.setCanManageGroups = function (canManageGroups) {
      self.canManageGroups = canManageGroups;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanManageSharing = function() {
      return self.canManageSharing;
    }

    /**
     * set 
     * @param {String} canManageSharing
     **/
    self.setCanManageSharing = function (canManageSharing) {
      self.canManageSharing = canManageSharing;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getCanManageUsersMetadata = function() {
      return self.canManageUsersMetadata;
    }

    /**
     * @param {SettingsMetadata} canManageUsersMetadata
     **/
    self.setCanManageUsersMetadata = function (canManageUsersMetadata) {
      self.canManageUsersMetadata = canManageUsersMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getCanManageAdminsMetadata = function() {
      return self.canManageAdminsMetadata;
    }

    /**
     * @param {SettingsMetadata} canManageAdminsMetadata
     **/
    self.setCanManageAdminsMetadata = function (canManageAdminsMetadata) {
      self.canManageAdminsMetadata = canManageAdminsMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getCanManageGroupsMetadata = function() {
      return self.canManageGroupsMetadata;
    }

    /**
     * @param {SettingsMetadata} canManageGroupsMetadata
     **/
    self.setCanManageGroupsMetadata = function (canManageGroupsMetadata) {
      self.canManageGroupsMetadata = canManageGroupsMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getCanManageSharingMetadata = function() {
      return self.canManageSharingMetadata;
    }

    /**
     * @param {SettingsMetadata} canManageSharingMetadata
     **/
    self.setCanManageSharingMetadata = function (canManageSharingMetadata) {
      self.canManageSharingMetadata = canManageSharingMetadata;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.UserAccountManagementGranularInformation = UserAccountManagementGranularInformation;
  }

  return UserAccountManagementGranularInformation;
  
  
}));
