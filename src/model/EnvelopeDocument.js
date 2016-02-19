(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './SignatureType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./SignatureType'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.SignatureType);
  }
}(this, function(module, ErrorDetails, SignatureType) {
  'use strict';

  
  

  
  var EnvelopeDocument = function EnvelopeDocument() { 
    var self = this;
    
    /**
     * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * datatype: String
     **/
    self.documentId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * 
     * datatype: String
     **/
    self.type = null;
    
    /**
     * 
     * datatype: String
     **/
    self.uri = null;
    
    /**
     * 
     * datatype: String
     **/
    self.order = null;
    
    /**
     * 
     * datatype: String
     **/
    self.pages = null;
    
    /**
     * 
     * datatype: String
     **/
    self.containsPdfFormFields = null;
    
    /**
     * 
     * datatype: Array
     **/
    self.availableDocumentTypes = [];
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.documentId) {
        self.documentId = data.documentId;
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
      
      if (data.order) {
        self.order = data.order;
      }
      
      if (data.pages) {
        self.pages = data.pages;
      }
      
      if (data.containsPdfFormFields) {
        self.containsPdfFormFields = data.containsPdfFormFields;
      }
      
      if (data.availableDocumentTypes) {
        self.availableDocumentTypes = data.availableDocumentTypes;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @return {String}
     **/
    self.getDocumentId = function() {
      return self.documentId;
    }

    /**
     * set Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @param {String} documentId
     **/
    self.setDocumentId = function (documentId) {
      self.documentId = documentId;
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
    self.getOrder = function() {
      return self.order;
    }

    /**
     * set 
     * @param {String} order
     **/
    self.setOrder = function (order) {
      self.order = order;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPages = function() {
      return self.pages;
    }

    /**
     * set 
     * @param {String} pages
     **/
    self.setPages = function (pages) {
      self.pages = pages;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getContainsPdfFormFields = function() {
      return self.containsPdfFormFields;
    }

    /**
     * set 
     * @param {String} containsPdfFormFields
     **/
    self.setContainsPdfFormFields = function (containsPdfFormFields) {
      self.containsPdfFormFields = containsPdfFormFields;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getAvailableDocumentTypes = function() {
      return self.availableDocumentTypes;
    }

    /**
     * set 
     * @param {Array} availableDocumentTypes
     **/
    self.setAvailableDocumentTypes = function (availableDocumentTypes) {
      self.availableDocumentTypes = availableDocumentTypes;
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
    module.EnvelopeDocument = EnvelopeDocument;
  }

  return EnvelopeDocument;
  
  
}));
