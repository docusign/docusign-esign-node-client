(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Document', './InlineTemplate', './ServerTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Document'), require('./InlineTemplate'), require('./ServerTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Document, root.Docusign.InlineTemplate, root.Docusign.ServerTemplate);
  }
}(this, function(module, Document, InlineTemplate, ServerTemplate) {
  'use strict';

  
  

  
  var CompositeTemplate = function CompositeTemplate() { 
    var self = this;
    
    /**
     * Specifies the identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the composite template ID to which the document should be added. If composite template ID is not specified in the content-disposition, the document is applied based on the value of the `documentId` property only. If no document object is specified, the composite template inherits the first document.
     * datatype: String
     **/
    self.compositeTemplateId = null;
    
    /**
     * 0 or more server-side templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value
     * datatype: Array
     **/
    self.serverTemplates = [];
    
    /**
     * Zero or more inline templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value.
     * datatype: Array
     **/
    self.inlineTemplates = [];
    
    /**
     * 
     * datatype: String
     **/
    self.pdfMetaDataTemplateSequence = null;
    
    /**
     * datatype: Document
     **/
    self.document = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.compositeTemplateId) {
        self.compositeTemplateId = data.compositeTemplateId;
      }
      
      if (data.serverTemplates) {
        self.serverTemplates = data.serverTemplates;
      }
      
      if (data.inlineTemplates) {
        self.inlineTemplates = data.inlineTemplates;
      }
      
      if (data.pdfMetaDataTemplateSequence) {
        self.pdfMetaDataTemplateSequence = data.pdfMetaDataTemplateSequence;
      }
      
      if (data.document) {
        self.document = new data.document.constructor();
        self.document.constructFromObject(data.document);
      }
      
    }

    
    /**
     * get Specifies the identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the composite template ID to which the document should be added. If composite template ID is not specified in the content-disposition, the document is applied based on the value of the `documentId` property only. If no document object is specified, the composite template inherits the first document.
     * @return {String}
     **/
    self.getCompositeTemplateId = function() {
      return self.compositeTemplateId;
    }

    /**
     * set Specifies the identify the composite template. It is used as a reference when adding document object information. If used, the document content-disposition must include the composite template ID to which the document should be added. If composite template ID is not specified in the content-disposition, the document is applied based on the value of the `documentId` property only. If no document object is specified, the composite template inherits the first document.
     * @param {String} compositeTemplateId
     **/
    self.setCompositeTemplateId = function (compositeTemplateId) {
      self.compositeTemplateId = compositeTemplateId;
    }
    
    /**
     * get 0 or more server-side templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value
     * @return {Array}
     **/
    self.getServerTemplates = function() {
      return self.serverTemplates;
    }

    /**
     * set 0 or more server-side templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value
     * @param {Array} serverTemplates
     **/
    self.setServerTemplates = function (serverTemplates) {
      self.serverTemplates = serverTemplates;
    }
    
    /**
     * get Zero or more inline templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value.
     * @return {Array}
     **/
    self.getInlineTemplates = function() {
      return self.inlineTemplates;
    }

    /**
     * set Zero or more inline templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value.
     * @param {Array} inlineTemplates
     **/
    self.setInlineTemplates = function (inlineTemplates) {
      self.inlineTemplates = inlineTemplates;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPdfMetaDataTemplateSequence = function() {
      return self.pdfMetaDataTemplateSequence;
    }

    /**
     * set 
     * @param {String} pdfMetaDataTemplateSequence
     **/
    self.setPdfMetaDataTemplateSequence = function (pdfMetaDataTemplateSequence) {
      self.pdfMetaDataTemplateSequence = pdfMetaDataTemplateSequence;
    }
    
    /**
     * @return {Document}
     **/
    self.getDocument = function() {
      return self.document;
    }

    /**
     * @param {Document} document
     **/
    self.setDocument = function (document) {
      self.document = document;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.CompositeTemplate = CompositeTemplate;
  }

  return CompositeTemplate;
  
  
}));
