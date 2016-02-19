(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './DocumentTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./DocumentTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.DocumentTemplate);
  }
}(this, function(module, DocumentTemplate) {
  'use strict';

  
  

  
  var DocumentTemplateList = function DocumentTemplateList() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.documentTemplates = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.documentTemplates) {
        self.documentTemplates = data.documentTemplates;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getDocumentTemplates = function() {
      return self.documentTemplates;
    }

    /**
     * set 
     * @param {Array} documentTemplates
     **/
    self.setDocumentTemplates = function (documentTemplates) {
      self.documentTemplates = documentTemplates;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.DocumentTemplateList = DocumentTemplateList;
  }

  return DocumentTemplateList;
  
  
}));
