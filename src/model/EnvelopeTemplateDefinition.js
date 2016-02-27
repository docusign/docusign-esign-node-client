(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.UserInfo);
  }
}(this, function(module, UserInfo) {
  'use strict';

  
  

  
  var EnvelopeTemplateDefinition = function EnvelopeTemplateDefinition() { 
    var self = this;
    
    /**
     * The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * datatype: String
     **/
    self.templateId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * When set to **true**, this custom tab is shared.
     * datatype: String
     **/
    self.shared = null;
    
    /**
     * 
     * datatype: String
     **/
    self.password = null;
    
    /**
     * 
     * datatype: String
     **/
    self.newPassword = null;
    
    /**
     * 
     * datatype: String
     **/
    self.description = null;
    
    /**
     * 
     * datatype: String
     **/
    self.lastModified = null;
    
    /**
     * datatype: UserInfo
     **/
    self.lastModifiedBy = null;
    
    /**
     * An integer value specifying the number of document pages in the template. Omit this property if not submitting a page count.
     * datatype: Integer
     **/
    self.pageCount = null;
    
    /**
     * 
     * datatype: String
     **/
    self.uri = null;
    
    /**
     * The name of the folder in which the template is located.
     * datatype: String
     **/
    self.folderName = null;
    
    /**
     * The ID for the folder.
     * datatype: String
     **/
    self.folderId = null;
    
    /**
     * The URI of the folder.
     * datatype: String
     **/
    self.folderUri = null;
    
    /**
     * 
     * datatype: String
     **/
    self.parentFolderUri = null;
    
    /**
     * datatype: UserInfo
     **/
    self.owner = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.templateId) {
        self.templateId = data.templateId;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.password) {
        self.password = data.password;
      }
      
      if (data.newPassword) {
        self.newPassword = data.newPassword;
      }
      
      if (data.description) {
        self.description = data.description;
      }
      
      if (data.lastModified) {
        self.lastModified = data.lastModified;
      }
      
      if (data.lastModifiedBy) {
        self.lastModifiedBy = new data.lastModifiedBy.constructor();
        self.lastModifiedBy.constructFromObject(data.lastModifiedBy);
      }
      
      if (data.pageCount) {
        self.pageCount = data.pageCount;
      }
      
      if (data.uri) {
        self.uri = data.uri;
      }
      
      if (data.folderName) {
        self.folderName = data.folderName;
      }
      
      if (data.folderId) {
        self.folderId = data.folderId;
      }
      
      if (data.folderUri) {
        self.folderUri = data.folderUri;
      }
      
      if (data.parentFolderUri) {
        self.parentFolderUri = data.parentFolderUri;
      }
      
      if (data.owner) {
        self.owner = new data.owner.constructor();
        self.owner.constructFromObject(data.owner);
      }
      
    }

    
    /**
     * get The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * @return {String}
     **/
    self.getTemplateId = function() {
      return self.templateId;
    }

    /**
     * set The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * @param {String} templateId
     **/
    self.setTemplateId = function (templateId) {
      self.templateId = templateId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set 
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get When set to **true**, this custom tab is shared.
     * @return {String}
     **/
    self.getShared = function() {
      return self.shared;
    }

    /**
     * set When set to **true**, this custom tab is shared.
     * @param {String} shared
     **/
    self.setShared = function (shared) {
      self.shared = shared;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPassword = function() {
      return self.password;
    }

    /**
     * set 
     * @param {String} password
     **/
    self.setPassword = function (password) {
      self.password = password;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getNewPassword = function() {
      return self.newPassword;
    }

    /**
     * set 
     * @param {String} newPassword
     **/
    self.setNewPassword = function (newPassword) {
      self.newPassword = newPassword;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDescription = function() {
      return self.description;
    }

    /**
     * set 
     * @param {String} description
     **/
    self.setDescription = function (description) {
      self.description = description;
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
     * @return {UserInfo}
     **/
    self.getLastModifiedBy = function() {
      return self.lastModifiedBy;
    }

    /**
     * @param {UserInfo} lastModifiedBy
     **/
    self.setLastModifiedBy = function (lastModifiedBy) {
      self.lastModifiedBy = lastModifiedBy;
    }
    
    /**
     * get An integer value specifying the number of document pages in the template. Omit this property if not submitting a page count.
     * @return {Integer}
     **/
    self.getPageCount = function() {
      return self.pageCount;
    }

    /**
     * set An integer value specifying the number of document pages in the template. Omit this property if not submitting a page count.
     * @param {Integer} pageCount
     **/
    self.setPageCount = function (pageCount) {
      self.pageCount = pageCount;
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
     * get The name of the folder in which the template is located.
     * @return {String}
     **/
    self.getFolderName = function() {
      return self.folderName;
    }

    /**
     * set The name of the folder in which the template is located.
     * @param {String} folderName
     **/
    self.setFolderName = function (folderName) {
      self.folderName = folderName;
    }
    
    /**
     * get The ID for the folder.
     * @return {String}
     **/
    self.getFolderId = function() {
      return self.folderId;
    }

    /**
     * set The ID for the folder.
     * @param {String} folderId
     **/
    self.setFolderId = function (folderId) {
      self.folderId = folderId;
    }
    
    /**
     * get The URI of the folder.
     * @return {String}
     **/
    self.getFolderUri = function() {
      return self.folderUri;
    }

    /**
     * set The URI of the folder.
     * @param {String} folderUri
     **/
    self.setFolderUri = function (folderUri) {
      self.folderUri = folderUri;
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
     * @return {UserInfo}
     **/
    self.getOwner = function() {
      return self.owner;
    }

    /**
     * @param {UserInfo} owner
     **/
    self.setOwner = function (owner) {
      self.owner = owner;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EnvelopeTemplateDefinition = EnvelopeTemplateDefinition;
  }

  return EnvelopeTemplateDefinition;
  
  
}));
