(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './WorkspaceUser', './WorkspaceUserAuthorization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./WorkspaceUser'), require('./WorkspaceUserAuthorization'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.WorkspaceUser, root.Docusign.WorkspaceUserAuthorization);
  }
}(this, function(module, WorkspaceUser, WorkspaceUserAuthorization) {
  'use strict';

  
  

  /**
   * A workspaceItem (file type only) representing the file. This property is only returned in response to file specific GET call.
   **/
  var WorkspaceItem = function WorkspaceItem() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.id) {
        self.id = data.id;
      }
      
      if (data.parentFolderId) {
        self.parentFolderId = data.parentFolderId;
      }
      
      if (data.parentFolderUri) {
        self.parentFolderUri = data.parentFolderUri;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.type) {
        self.type = data.type;
      }
      
      if (data.uri) {
        self.uri = data.uri;
      }
      
      if (data.extension) {
        self.extension = data.extension;
      }
      
      if (data.contentType) {
        self.contentType = data.contentType;
      }
      
      if (data.pageCount) {
        self.pageCount = data.pageCount;
      }
      
      if (data.fileSize) {
        self.fileSize = data.fileSize;
      }
      
      if (data.fileUri) {
        self.fileUri = data.fileUri;
      }
      
      if (data.isPublic) {
        self.isPublic = data.isPublic;
      }
      
      if (data.callerAuthorization) {
        self.callerAuthorization = new data.callerAuthorization.constructor();
        self.callerAuthorization.constructFromObject(data.callerAuthorization);
      }
      
      if (data.created) {
        self.created = data.created;
      }
      
      if (data.createdById) {
        self.createdById = data.createdById;
      }
      
      if (data.createdByInformation) {
        self.createdByInformation = new data.createdByInformation.constructor();
        self.createdByInformation.constructFromObject(data.createdByInformation);
      }
      
      if (data.lastModified) {
        self.lastModified = data.lastModified;
      }
      
      if (data.lastModifiedById) {
        self.lastModifiedById = data.lastModifiedById;
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
    self.getId = function() {
      return self.id;
    }

    /**
     * set 
     * @param {String} id
     **/
    self.setId = function (id) {
      self.id = id;
    }
    
    /**
     * get The ID of the parent folder. This is the GUID of the parent folder, or the special value 'root' for the root folder.
     * @return {String}
     **/
    self.getParentFolderId = function() {
      return self.parentFolderId;
    }

    /**
     * set The ID of the parent folder. This is the GUID of the parent folder, or the special value 'root' for the root folder.
     * @param {String} parentFolderId
     **/
    self.setParentFolderId = function (parentFolderId) {
      self.parentFolderId = parentFolderId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getParentFolderUri = function() {
      return self.parentFolderUri;
    }

    /**
     * set 
     * @param {String} parentFolderUri
     **/
    self.setParentFolderUri = function (parentFolderUri) {
      self.parentFolderUri = parentFolderUri;
    }
    
    /**
     * get A simple string description of the item, such as a file name or a folder name.
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set A simple string description of the item, such as a file name or a folder name.
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get The type of the workspace item. Valid values are file, folder.
     * @return {String}
     **/
    self.getType = function() {
      return self.type;
    }

    /**
     * set The type of the workspace item. Valid values are file, folder.
     * @param {String} type
     **/
    self.setType = function (type) {
      self.type = type;
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
     * get 
     * @return {String}
     **/
    self.getExtension = function() {
      return self.extension;
    }

    /**
     * set 
     * @param {String} extension
     **/
    self.setExtension = function (extension) {
      self.extension = extension;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getContentType = function() {
      return self.contentType;
    }

    /**
     * set 
     * @param {String} contentType
     **/
    self.setContentType = function (contentType) {
      self.contentType = contentType;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPageCount = function() {
      return self.pageCount;
    }

    /**
     * set 
     * @param {String} pageCount
     **/
    self.setPageCount = function (pageCount) {
      self.pageCount = pageCount;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFileSize = function() {
      return self.fileSize;
    }

    /**
     * set 
     * @param {String} fileSize
     **/
    self.setFileSize = function (fileSize) {
      self.fileSize = fileSize;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFileUri = function() {
      return self.fileUri;
    }

    /**
     * set 
     * @param {String} fileUri
     **/
    self.setFileUri = function (fileUri) {
      self.fileUri = fileUri;
    }
    
    /**
     * get If true, this supersedes need for bit mask permission with workspaceUserAuthorization
     * @return {String}
     **/
    self.getIsPublic = function() {
      return self.isPublic;
    }

    /**
     * set If true, this supersedes need for bit mask permission with workspaceUserAuthorization
     * @param {String} isPublic
     **/
    self.setIsPublic = function (isPublic) {
      self.isPublic = isPublic;
    }
    
    /**
     * @return {WorkspaceUserAuthorization}
     **/
    self.getCallerAuthorization = function() {
      return self.callerAuthorization;
    }

    /**
     * @param {WorkspaceUserAuthorization} callerAuthorization
     **/
    self.setCallerAuthorization = function (callerAuthorization) {
      self.callerAuthorization = callerAuthorization;
    }
    
    /**
     * get The UTC DateTime when the workspace item was created.
     * @return {String}
     **/
    self.getCreated = function() {
      return self.created;
    }

    /**
     * set The UTC DateTime when the workspace item was created.
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
    module.WorkspaceItem = WorkspaceItem;
  }

  return WorkspaceItem;
  
  
}));
