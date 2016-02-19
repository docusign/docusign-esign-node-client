(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './FolderItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./FolderItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.FolderItem);
  }
}(this, function(module, FolderItem) {
  'use strict';

  
  

  
  var FolderItemsResponse = function FolderItemsResponse() { 
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
     * The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
     * datatype: String
     **/
    self.totalSetSize = null;
    
    /**
     * The postal code for the billing address.
     * datatype: String
     **/
    self.previousUri = null;
    
    /**
     * The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.
     * datatype: String
     **/
    self.nextUri = null;
    
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
      
      if (data.totalSetSize) {
        self.totalSetSize = data.totalSetSize;
      }
      
      if (data.previousUri) {
        self.previousUri = data.previousUri;
      }
      
      if (data.nextUri) {
        self.nextUri = data.nextUri;
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
    module.FolderItemsResponse = FolderItemsResponse;
  }

  return FolderItemsResponse;
  
  
}));
