(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './Filter', './Folder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./Filter'), require('./Folder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.Filter, root.Docusign.Folder);
  }
}(this, function(module, ErrorDetails, Filter, Folder) {
  'use strict';

  
  

  
  var Folder = function Folder() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.ownerUserName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.ownerEmail = null;
    
    /**
     * 
     * datatype: String
     **/
    self.ownerUserId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.type = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * 
     * datatype: String
     **/
    self.uri = null;
    
    /**
     * 
     * datatype: String
     **/
    self.parentFolderId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.parentFolderUri = null;
    
    /**
     * 
     * datatype: String
     **/
    self.folderId = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    
    /**
     * A collection of folder objects returned in a response.
     * datatype: Array
     **/
    self.folders = [];
    
    /**
     * datatype: Filter
     **/
    self.filter = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.ownerUserName) {
        self.ownerUserName = data.ownerUserName;
      }
      
      if (data.ownerEmail) {
        self.ownerEmail = data.ownerEmail;
      }
      
      if (data.ownerUserId) {
        self.ownerUserId = data.ownerUserId;
      }
      
      if (data.type) {
        self.type = data.type;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.uri) {
        self.uri = data.uri;
      }
      
      if (data.parentFolderId) {
        self.parentFolderId = data.parentFolderId;
      }
      
      if (data.parentFolderUri) {
        self.parentFolderUri = data.parentFolderUri;
      }
      
      if (data.folderId) {
        self.folderId = data.folderId;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
      if (data.folders) {
        self.folders = data.folders;
      }
      
      if (data.filter) {
        self.filter = new data.filter.constructor();
        self.filter.constructFromObject(data.filter);
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getOwnerUserName = function() {
      return self.ownerUserName;
    }

    /**
     * set 
     * @param {String} ownerUserName
     **/
    self.setOwnerUserName = function (ownerUserName) {
      self.ownerUserName = ownerUserName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOwnerEmail = function() {
      return self.ownerEmail;
    }

    /**
     * set 
     * @param {String} ownerEmail
     **/
    self.setOwnerEmail = function (ownerEmail) {
      self.ownerEmail = ownerEmail;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOwnerUserId = function() {
      return self.ownerUserId;
    }

    /**
     * set 
     * @param {String} ownerUserId
     **/
    self.setOwnerUserId = function (ownerUserId) {
      self.ownerUserId = ownerUserId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getType = function() {
      return self.type;
    }

    /**
     * set 
     * @param {String} type
     **/
    self.setType = function (type) {
      self.type = type;
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
    self.getParentFolderId = function() {
      return self.parentFolderId;
    }

    /**
     * set 
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
     * get 
     * @return {String}
     **/
    self.getFolderId = function() {
      return self.folderId;
    }

    /**
     * set 
     * @param {String} folderId
     **/
    self.setFolderId = function (folderId) {
      self.folderId = folderId;
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
    
    /**
     * get A collection of folder objects returned in a response.
     * @return {Array}
     **/
    self.getFolders = function() {
      return self.folders;
    }

    /**
     * set A collection of folder objects returned in a response.
     * @param {Array} folders
     **/
    self.setFolders = function (folders) {
      self.folders = folders;
    }
    
    /**
     * @return {Filter}
     **/
    self.getFilter = function() {
      return self.filter;
    }

    /**
     * @param {Filter} filter
     **/
    self.setFilter = function (filter) {
      self.filter = filter;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Folder = Folder;
  }

  return Folder;
  
  
}));
