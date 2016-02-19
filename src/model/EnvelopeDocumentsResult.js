(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './EnvelopeDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./EnvelopeDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.EnvelopeDocument);
  }
}(this, function(module, EnvelopeDocument) {
  'use strict';

  
  

  
  var EnvelopeDocumentsResult = function EnvelopeDocumentsResult() { 
    var self = this;
    
    /**
     * The envelope ID of the envelope status that failed to post.
     * datatype: String
     **/
    self.envelopeId = null;
    
    /**
     * 
     * datatype: Array
     **/
    self.envelopeDocuments = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeId) {
        self.envelopeId = data.envelopeId;
      }
      
      if (data.envelopeDocuments) {
        self.envelopeDocuments = data.envelopeDocuments;
      }
      
    }

    
    /**
     * get The envelope ID of the envelope status that failed to post.
     * @return {String}
     **/
    self.getEnvelopeId = function() {
      return self.envelopeId;
    }

    /**
     * set The envelope ID of the envelope status that failed to post.
     * @param {String} envelopeId
     **/
    self.setEnvelopeId = function (envelopeId) {
      self.envelopeId = envelopeId;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getEnvelopeDocuments = function() {
      return self.envelopeDocuments;
    }

    /**
     * set 
     * @param {Array} envelopeDocuments
     **/
    self.setEnvelopeDocuments = function (envelopeDocuments) {
      self.envelopeDocuments = envelopeDocuments;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EnvelopeDocumentsResult = EnvelopeDocumentsResult;
  }

  return EnvelopeDocumentsResult;
  
  
}));
