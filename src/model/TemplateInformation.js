(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './TemplateSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./TemplateSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.TemplateSummary);
  }
}(this, function(module, TemplateSummary) {
  'use strict';

  
  

  
  var TemplateInformation = function TemplateInformation() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.templates = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.templates) {
        self.templates = data.templates;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getTemplates = function() {
      return self.templates;
    }

    /**
     * set 
     * @param {Array} templates
     **/
    self.setTemplates = function (templates) {
      self.templates = templates;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TemplateInformation = TemplateInformation;
  }

  return TemplateInformation;
  
  
}));
