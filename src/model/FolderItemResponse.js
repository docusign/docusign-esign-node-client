(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './FolderItemV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./FolderItemV2'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.FolderItemV2);
  }
}(this, function(module, FolderItemV2) {
  'use strict';

  
  

  
  var FolderItemResponse = function FolderItemResponse() { 
    var self = this;
    
    /**
     * The number of results returned in this response.
     * datatype: String
     **/
    self.resultSetSize = null;
    
    /**
     * Starting position of the current result set.
     * datatype: String
     **/
    self.startPosition = null;
    
    /**
     * The last position in the result set.
     * datatype: String
     **/
    self.endPosition = null;
    
    /**
     * 
     * datatype: String
     **/
    self.totalRows = null;
    
    /**
     * The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.
     * datatype: String
     **/
    self.nextUri = null;
    
    /**
     * The postal code for the billing address.
     * datatype: String
     **/
    self.previousUri = null;
    
    /**
     * A list of the envelopes in the specified folder or folders.
     * datatype: Array
     **/
    self.folderItems = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
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
      
      if (data.totalRows) {
        self.totalRows = data.totalRows;
      }
      
      if (data.nextUri) {
        self.nextUri = data.nextUri;
      }
      
      if (data.previousUri) {
        self.previousUri = data.previousUri;
      }
      
      if (data.folderItems) {
        self.folderItems = data.folderItems;
      }
      
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
     * get 
     * @return {String}
     **/
    self.getTotalRows = function() {
      return self.totalRows;
    }

    /**
     * set 
     * @param {String} totalRows
     **/
    self.setTotalRows = function (totalRows) {
      self.totalRows = totalRows;
    }
    
    /**
     * get The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.
     * @return {String}
     **/
    self.getNextUri = function() {
      return self.nextUri;
    }

    /**
     * set The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.
     * @param {String} nextUri
     **/
    self.setNextUri = function (nextUri) {
      self.nextUri = nextUri;
    }
    
    /**
     * get The postal code for the billing address.
     * @return {String}
     **/
    self.getPreviousUri = function() {
      return self.previousUri;
    }

    /**
     * set The postal code for the billing address.
     * @param {String} previousUri
     **/
    self.setPreviousUri = function (previousUri) {
      self.previousUri = previousUri;
    }
    
    /**
     * get A list of the envelopes in the specified folder or folders.
     * @return {Array}
     **/
    self.getFolderItems = function() {
      return self.folderItems;
    }

    /**
     * set A list of the envelopes in the specified folder or folders.
     * @param {Array} folderItems
     **/
    self.setFolderItems = function (folderItems) {
      self.folderItems = folderItems;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.FolderItemResponse = FolderItemResponse;
  }

  return FolderItemResponse;
  
  
}));
