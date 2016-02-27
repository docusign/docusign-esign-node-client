(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails);
  }
}(this, function(module, ErrorDetails) {
  'use strict';

  
  

  
  var DocumentTemplate = function DocumentTemplate() { 
    var self = this;
    
    /**
     * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * datatype: String
     **/
    self.documentId = null;
    
    /**
     * The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * datatype: String
     **/
    self.templateId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.documentStartPage = null;
    
    /**
     * 
     * datatype: String
     **/
    self.documentEndPage = null;
    
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
      
      if (data.templateId) {
        self.templateId = data.templateId;
      }
      
      if (data.documentStartPage) {
        self.documentStartPage = data.documentStartPage;
      }
      
      if (data.documentEndPage) {
        self.documentEndPage = data.documentEndPage;
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
    self.getDocumentStartPage = function() {
      return self.documentStartPage;
    }

    /**
     * set 
     * @param {String} documentStartPage
     **/
    self.setDocumentStartPage = function (documentStartPage) {
      self.documentStartPage = documentStartPage;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDocumentEndPage = function() {
      return self.documentEndPage;
    }

    /**
     * set 
     * @param {String} documentEndPage
     **/
    self.setDocumentEndPage = function (documentEndPage) {
      self.documentEndPage = documentEndPage;
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
    module.DocumentTemplate = DocumentTemplate;
  }

  return DocumentTemplate;
  
  
}));
