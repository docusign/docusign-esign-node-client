(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './WorkspaceUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./WorkspaceUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.WorkspaceUser);
  }
}(this, function(module, ErrorDetails, WorkspaceUser) {
  'use strict';

  
  

  /**
   * Provides properties that describe user authorization to a workspace.
   **/
  var WorkspaceUserAuthorization = function WorkspaceUserAuthorization() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.workspaceUserId) {
        self.workspaceUserId = data.workspaceUserId;
      }
      
      if (data.workspaceUserInformation) {
        self.workspaceUserInformation = new data.workspaceUserInformation.constructor();
        self.workspaceUserInformation.constructFromObject(data.workspaceUserInformation);
      }
      
      if (data.canView) {
        self.canView = data.canView;
      }
      
      if (data.canTransact) {
        self.canTransact = data.canTransact;
      }
      
      if (data.canMove) {
        self.canMove = data.canMove;
      }
      
      if (data.canDelete) {
        self.canDelete = data.canDelete;
      }
      
      if (data.createdById) {
        self.createdById = data.createdById;
      }
      
      if (data.created) {
        self.created = data.created;
      }
      
      if (data.modifiedById) {
        self.modifiedById = data.modifiedById;
      }
      
      if (data.modified) {
        self.modified = data.modified;
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
     * @return {WorkspaceUser}
     **/
    self.getWorkspaceUserInformation = function() {
      return self.workspaceUserInformation;
    }

    /**
     * @param {WorkspaceUser} workspaceUserInformation
     **/
    self.setWorkspaceUserInformation = function (workspaceUserInformation) {
      self.workspaceUserInformation = workspaceUserInformation;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanView = function() {
      return self.canView;
    }

    /**
     * set 
     * @param {String} canView
     **/
    self.setCanView = function (canView) {
      self.canView = canView;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanTransact = function() {
      return self.canTransact;
    }

    /**
     * set 
     * @param {String} canTransact
     **/
    self.setCanTransact = function (canTransact) {
      self.canTransact = canTransact;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanMove = function() {
      return self.canMove;
    }

    /**
     * set 
     * @param {String} canMove
     **/
    self.setCanMove = function (canMove) {
      self.canMove = canMove;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanDelete = function() {
      return self.canDelete;
    }

    /**
     * set 
     * @param {String} canDelete
     **/
    self.setCanDelete = function (canDelete) {
      self.canDelete = canDelete;
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
     * get The UTC DateTime when the workspace user authorization was created.
     * @return {String}
     **/
    self.getCreated = function() {
      return self.created;
    }

    /**
     * set The UTC DateTime when the workspace user authorization was created.
     * @param {String} created
     **/
    self.setCreated = function (created) {
      self.created = created;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getModifiedById = function() {
      return self.modifiedById;
    }

    /**
     * set 
     * @param {String} modifiedById
     **/
    self.setModifiedById = function (modifiedById) {
      self.modifiedById = modifiedById;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getModified = function() {
      return self.modified;
    }

    /**
     * set 
     * @param {String} modified
     **/
    self.setModified = function (modified) {
      self.modified = modified;
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
    module.WorkspaceUserAuthorization = WorkspaceUserAuthorization;
  }

  return WorkspaceUserAuthorization;
  
  
}));
