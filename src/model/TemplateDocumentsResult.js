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

  
  

  
  var TemplateDocumentsResult = function TemplateDocumentsResult() { 
    var self = this;
    
    /**
     * The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * datatype: String
     **/
    self.templateId = null;
    
    /**
     * 
     * datatype: Array
     **/
    self.templateDocuments = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.templateId) {
        self.templateId = data.templateId;
      }
      
      if (data.templateDocuments) {
        self.templateDocuments = data.templateDocuments;
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
     * @return {Array}
     **/
    self.getTemplateDocuments = function() {
      return self.templateDocuments;
    }

    /**
     * set 
     * @param {Array} templateDocuments
     **/
    self.setTemplateDocuments = function (templateDocuments) {
      self.templateDocuments = templateDocuments;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TemplateDocumentsResult = TemplateDocumentsResult;
  }

  return TemplateDocumentsResult;
  
  
}));
