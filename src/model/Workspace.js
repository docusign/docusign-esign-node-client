(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './WorkspaceUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./WorkspaceUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.WorkspaceUser);
  }
}(this, function(module, WorkspaceUser) {
  'use strict';

  
  

  /**
   * Provides properties that describe a workspace.
   **/
  var Workspace = function Workspace() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.workspaceId) {
        self.workspaceId = data.workspaceId;
      }
      
      if (data.workspaceName) {
        self.workspaceName = data.workspaceName;
      }
      
      if (data.workspaceDescription) {
        self.workspaceDescription = data.workspaceDescription;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.workspaceUri) {
        self.workspaceUri = data.workspaceUri;
      }
      
      if (data.workspaceBaseUrl) {
        self.workspaceBaseUrl = data.workspaceBaseUrl;
      }
      
      if (data.billableAccountId) {
        self.billableAccountId = data.billableAccountId;
      }
      
      if (data.created) {
        self.created = data.created;
      }
      
      if (data.createdByInformation) {
        self.createdByInformation = new data.createdByInformation.constructor();
        self.createdByInformation.constructFromObject(data.createdByInformation);
      }
      
      if (data.lastModified) {
        self.lastModified = data.lastModified;
      }
      
      if (data.lastModifiedByInformation) {
        self.lastModifiedByInformation = new data.lastModifiedByInformation.constructor();
        self.lastModifiedByInformation.constructFromObject(data.lastModifiedByInformation);
      }
      
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
     * get The name of the workspace.
     * @return {String}
     **/
    self.getWorkspaceName = function() {
      return self.workspaceName;
    }

    /**
     * set The name of the workspace.
     * @param {String} workspaceName
     **/
    self.setWorkspaceName = function (workspaceName) {
      self.workspaceName = workspaceName;
    }
    
    /**
     * get Text describing the purpose of the workspace.
     * @return {String}
     **/
    self.getWorkspaceDescription = function() {
      return self.workspaceDescription;
    }

    /**
     * set Text describing the purpose of the workspace.
     * @param {String} workspaceDescription
     **/
    self.setWorkspaceDescription = function (workspaceDescription) {
      self.workspaceDescription = workspaceDescription;
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
     * get The relative URI that may be used to access the workspace.
     * @return {String}
     **/
    self.getWorkspaceUri = function() {
      return self.workspaceUri;
    }

    /**
     * set The relative URI that may be used to access the workspace.
     * @param {String} workspaceUri
     **/
    self.setWorkspaceUri = function (workspaceUri) {
      self.workspaceUri = workspaceUri;
    }
    
    /**
     * get The relative URL that may be used to access the workspace.
     * @return {String}
     **/
    self.getWorkspaceBaseUrl = function() {
      return self.workspaceBaseUrl;
    }

    /**
     * set The relative URL that may be used to access the workspace.
     * @param {String} workspaceBaseUrl
     **/
    self.setWorkspaceBaseUrl = function (workspaceBaseUrl) {
      self.workspaceBaseUrl = workspaceBaseUrl;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getBillableAccountId = function() {
      return self.billableAccountId;
    }

    /**
     * set 
     * @param {String} billableAccountId
     **/
    self.setBillableAccountId = function (billableAccountId) {
      self.billableAccountId = billableAccountId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCreated = function() {
      return self.created;
    }

    /**
     * set 
     * @param {String} created
     **/
    self.setCreated = function (created) {
      self.created = created;
    }
    
    /**
     * @return {WorkspaceUser}
     **/
    self.getCreatedByInformation = function() {
      return self.createdByInformation;
    }

    /**
     * @param {WorkspaceUser} createdByInformation
     **/
    self.setCreatedByInformation = function (createdByInformation) {
      self.createdByInformation = createdByInformation;
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
     * @return {WorkspaceUser}
     **/
    self.getLastModifiedByInformation = function() {
      return self.lastModifiedByInformation;
    }

    /**
     * @param {WorkspaceUser} lastModifiedByInformation
     **/
    self.setLastModifiedByInformation = function (lastModifiedByInformation) {
      self.lastModifiedByInformation = lastModifiedByInformation;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Workspace = Workspace;
  }

  return Workspace;
  
  
}));
