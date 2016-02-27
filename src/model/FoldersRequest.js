(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined);
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign);
  }
}(this, function(module) {
  'use strict';

  
  

  
  var FoldersRequest = function FoldersRequest() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.envelopeIds = [];
    
    /**
     * The folder ID the envelope is being moved from.
     * datatype: String
     **/
    self.fromFolderId = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeIds) {
        self.envelopeIds = data.envelopeIds;
      }
      
      if (data.fromFolderId) {
        self.fromFolderId = data.fromFolderId;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getEnvelopeIds = function() {
      return self.envelopeIds;
    }

    /**
     * set 
     * @param {Array} envelopeIds
     **/
    self.setEnvelopeIds = function (envelopeIds) {
      self.envelopeIds = envelopeIds;
    }
    
    /**
     * get The folder ID the envelope is being moved from.
     * @return {String}
     **/
    self.getFromFolderId = function() {
      return self.fromFolderId;
    }

    /**
     * set The folder ID the envelope is being moved from.
     * @param {String} fromFolderId
     **/
    self.setFromFolderId = function (fromFolderId) {
      self.fromFolderId = fromFolderId;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.FoldersRequest = FoldersRequest;
  }

  return FoldersRequest;
  
  
}));
