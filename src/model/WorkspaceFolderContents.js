(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './WorkspaceItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./WorkspaceItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.WorkspaceItem);
  }
}(this, function(module, WorkspaceItem) {
  'use strict';

  
  

  /**
   * Provides properties that describe the contents of a workspace folder.
   **/
  var WorkspaceFolderContents = function WorkspaceFolderContents() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.parentFolders = [];
    
    /**
     * 
     * datatype: Array
     **/
    self.items = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.workspaceId) {
        self.workspaceId = data.workspaceId;
      }
      
      if (data.parentFolders) {
        self.parentFolders = data.parentFolders;
      }
      
      if (data.folder) {
        self.folder = new data.folder.constructor();
        self.folder.constructFromObject(data.folder);
      }
      
      if (data.items) {
        self.items = data.items;
      }
      
      if (data.resultSetSize) {
        self.resultSetSize = data.resultSetSize;
      }
      
      if (data.startPosition) {
        self.startPosition = data.startPosition;
      }
      
      if (data.endPosition) {
        self.endPosition = data.endPosition;
      }
      
      if (data.totalSetSize) {
        self.totalSetSize = data.totalSetSize;
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
     * get 
     * @return {Array}
     **/
    self.getParentFolders = function() {
      return self.parentFolders;
    }

    /**
     * set 
     * @param {Array} parentFolders
     **/
    self.setParentFolders = function (parentFolders) {
      self.parentFolders = parentFolders;
    }
    
    /**
     * @return {WorkspaceItem}
     **/
    self.getFolder = function() {
      return self.folder;
    }

    /**
     * @param {WorkspaceItem} folder
     **/
    self.setFolder = function (folder) {
      self.folder = folder;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getItems = function() {
      return self.items;
    }

    /**
     * set 
     * @param {Array} items
     **/
    self.setItems = function (items) {
      self.items = items;
    }
    
    /**
     * get The number of results returned in this response.
     * @return {String}
     **/
    self.getResultSetSize = function() {
      return self.resultSetSize;
    }

    /**
     * set The number of results returned in this response.
     * @param {String} resultSetSize
     **/
    self.setResultSetSize = function (resultSetSize) {
      self.resultSetSize = resultSetSize;
    }
    
    /**
     * get Starting position of the current result set.
     * @return {String}
     **/
    self.getStartPosition = function() {
      return self.startPosition;
    }

    /**
     * set Starting position of the current result set.
     * @param {String} startPosition
     **/
    self.setStartPosition = function (startPosition) {
      self.startPosition = startPosition;
    }
    
    /**
     * get The last position in the result set.
     * @return {String}
     **/
    self.getEndPosition = function() {
      return self.endPosition;
    }

    /**
     * set The last position in the result set.
     * @param {String} endPosition
     **/
    self.setEndPosition = function (endPosition) {
      self.endPosition = endPosition;
    }
    
    /**
     * get The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
     * @return {String}
     **/
    self.getTotalSetSize = function() {
      return self.totalSetSize;
    }

    /**
     * set The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
     * @param {String} totalSetSize
     **/
    self.setTotalSetSize = function (totalSetSize) {
      self.totalSetSize = totalSetSize;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.WorkspaceFolderContents = WorkspaceFolderContents;
  }

  return WorkspaceFolderContents;
  
  
}));
