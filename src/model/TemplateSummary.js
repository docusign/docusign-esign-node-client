(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './TemplateMatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./TemplateMatch'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.TemplateMatch);
  }
}(this, function(module, TemplateMatch) {
  'use strict';

  
  

  
  var TemplateSummary = function TemplateSummary() { 
    var self = this;
    
    /**
     * The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * datatype: String
     **/
    self.templateId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * datatype: String
     **/
    self.documentId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.documentName = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.applied = null;
    
    /**
     * datatype: TemplateMatch
     **/
    self.templateMatch = null;
    
    /**
     * 
     * datatype: String
     **/
    self.uri = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.templateId) {
        self.templateId = data.templateId;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.documentId) {
        self.documentId = data.documentId;
      }
      
      if (data.documentName) {
        self.documentName = data.documentName;
      }
      
      if (data.applied) {
        self.applied = data.applied;
      }
      
      if (data.templateMatch) {
        self.templateMatch = new data.templateMatch.constructor();
        self.templateMatch.constructFromObject(data.templateMatch);
      }
      
      if (data.uri) {
        self.uri = data.uri;
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
    self.getDocumentName = function() {
      return self.documentName;
    }

    /**
     * set 
     * @param {String} documentName
     **/
    self.setDocumentName = function (documentName) {
      self.documentName = documentName;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getApplied = function() {
      return self.applied;
    }

    /**
     * set Reserved: TBD
     * @param {String} applied
     **/
    self.setApplied = function (applied) {
      self.applied = applied;
    }
    
    /**
     * @return {TemplateMatch}
     **/
    self.getTemplateMatch = function() {
      return self.templateMatch;
    }

    /**
     * @param {TemplateMatch} templateMatch
     **/
    self.setTemplateMatch = function (templateMatch) {
      self.templateMatch = templateMatch;
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
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TemplateSummary = TemplateSummary;
  }

  return TemplateSummary;
  
  
}));
