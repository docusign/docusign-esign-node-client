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

  
  

  /**
   * A workspaceUser representing the user. This property is only returned in response to user specific GET call.
   **/
  var WorkspaceUser = function WorkspaceUser() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.workspaceUserId) {
        self.workspaceUserId = data.workspaceUserId;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.type) {
        self.type = data.type;
      }
      
      if (data.workspaceId) {
        self.workspaceId = data.workspaceId;
      }
      
      if (data.accountId) {
        self.accountId = data.accountId;
      }
      
      if (data.userId) {
        self.userId = data.userId;
      }
      
      if (data.accountName) {
        self.accountName = data.accountName;
      }
      
      if (data.userName) {
        self.userName = data.userName;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.workspaceUserBaseUrl) {
        self.workspaceUserBaseUrl = data.workspaceUserBaseUrl;
      }
      
      if (data.created) {
        self.created = data.created;
      }
      
      if (data.createdById) {
        self.createdById = data.createdById;
      }
      
      if (data.lastModified) {
        self.lastModified = data.lastModified;
      }
      
      if (data.lastModifiedById) {
        self.lastModifiedById = data.lastModifiedById;
      }
      
      if (data.activeSince) {
        self.activeSince = data.activeSince;
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
    self.getWorkspaceUserId = function() {
      return self.workspaceUserId;
    }

    /**
     * set 
     * @param {String} workspaceUserId
     **/
    self.setWorkspaceUserId = function (workspaceUserId) {
      self.workspaceUserId = workspaceUserId;
    }
    
    /**
     * get Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @return {String}
     **/
    self.getStatus = function() {
      return self.status;
    }

    /**
     * set Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @param {String} status
     **/
    self.setStatus = function (status) {
      self.status = status;
    }
    
    /**
     * get Type of the user. Valid values: type_owner, type_participant.
     * @return {String}
     **/
    self.getType = function() {
      return self.type;
    }

    /**
     * set Type of the user. Valid values: type_owner, type_participant.
     * @param {String} type
     **/
    self.setType = function (type) {
      self.type = type;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getWorkspaceId = function() {
      return self.workspaceId;
    }

    /**
     * set 
     * @param {String} workspaceId
     **/
    self.setWorkspaceId = function (workspaceId) {
      self.workspaceId = workspaceId;
    }
    
    /**
     * get The account ID associated with the envelope.
     * @return {String}
     **/
    self.getAccountId = function() {
      return self.accountId;
    }

    /**
     * set The account ID associated with the envelope.
     * @param {String} accountId
     **/
    self.setAccountId = function (accountId) {
      self.accountId = accountId;
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
     * get The name of the account that the workspace user belongs to.
     * @return {String}
     **/
    self.getAccountName = function() {
      return self.accountName;
    }

    /**
     * set The name of the account that the workspace user belongs to.
     * @param {String} accountName
     **/
    self.setAccountName = function (accountName) {
      self.accountName = accountName;
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
     * get The relative URI that may be used to access a workspace user.
     * @return {String}
     **/
    self.getWorkspaceUserBaseUrl = function() {
      return self.workspaceUserBaseUrl;
    }

    /**
     * set The relative URI that may be used to access a workspace user.
     * @param {String} workspaceUserBaseUrl
     **/
    self.setWorkspaceUserBaseUrl = function (workspaceUserBaseUrl) {
      self.workspaceUserBaseUrl = workspaceUserBaseUrl;
    }
    
    /**
     * get The UTC DateTime when the workspace user was created.
     * @return {String}
     **/
    self.getCreated = function() {
      return self.created;
    }

    /**
     * set The UTC DateTime when the workspace user was created.
     * @param {String} created
     **/
    self.setCreated = function (created) {
      self.created = created;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCreatedById = function() {
      return self.createdById;
    }

    /**
     * set 
     * @param {String} createdById
     **/
    self.setCreatedById = function (createdById) {
      self.createdById = createdById;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLastModified = function() {
      return self.lastModified;
    }

    /**
     * set 
     * @param {String} lastModified
     **/
    self.setLastModified = function (lastModified) {
      self.lastModified = lastModified;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getLastModifiedById = function() {
      return self.lastModifiedById;
    }

    /**
     * set 
     * @param {String} lastModifiedById
     **/
    self.setLastModifiedById = function (lastModifiedById) {
      self.lastModifiedById = lastModifiedById;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getActiveSince = function() {
      return self.activeSince;
    }

    /**
     * set 
     * @param {String} activeSince
     **/
    self.setActiveSince = function (activeSince) {
      self.activeSince = activeSince;
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
    module.WorkspaceUser = WorkspaceUser;
  }

  return WorkspaceUser;
  
  
}));
