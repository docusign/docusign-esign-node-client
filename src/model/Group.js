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

  
  

  
  var Group = function Group() { 
    var self = this;
    
    /**
     * The DocuSign group ID for the group.
     * datatype: String
     **/
    self.groupId = null;
    
    /**
     * The name of the group.
     * datatype: String
     **/
    self.groupName = null;
    
    /**
     * The ID of the permission profile associated with the group.
     * datatype: String
     **/
    self.permissionProfileId = null;
    
    /**
     * The group type.
     * datatype: String
     **/
    self.groupType = null;
    
    /**
     * 
     * datatype: Array
     **/
    self.users = [];
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.groupId) {
        self.groupId = data.groupId;
      }
      
      if (data.groupName) {
        self.groupName = data.groupName;
      }
      
      if (data.permissionProfileId) {
        self.permissionProfileId = data.permissionProfileId;
      }
      
      if (data.groupType) {
        self.groupType = data.groupType;
      }
      
      if (data.users) {
        self.users = data.users;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get The DocuSign group ID for the group.
     * @return {String}
     **/
    self.getGroupId = function() {
      return self.groupId;
    }

    /**
     * set The DocuSign group ID for the group.
     * @param {String} groupId
     **/
    self.setGroupId = function (groupId) {
      self.groupId = groupId;
    }
    
    /**
     * get The name of the group.
     * @return {String}
     **/
    self.getGroupName = function() {
      return self.groupName;
    }

    /**
     * set The name of the group.
     * @param {String} groupName
     **/
    self.setGroupName = function (groupName) {
      self.groupName = groupName;
    }
    
    /**
     * get The ID of the permission profile associated with the group.
     * @return {String}
     **/
    self.getPermissionProfileId = function() {
      return self.permissionProfileId;
    }

    /**
     * set The ID of the permission profile associated with the group.
     * @param {String} permissionProfileId
     **/
    self.setPermissionProfileId = function (permissionProfileId) {
      self.permissionProfileId = permissionProfileId;
    }
    
    /**
     * get The group type.
     * @return {String}
     **/
    self.getGroupType = function() {
      return self.groupType;
    }

    /**
     * set The group type.
     * @param {String} groupType
     **/
    self.setGroupType = function (groupType) {
      self.groupType = groupType;
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
    module.Group = Group;
  }

  return Group;
  
  
}));
