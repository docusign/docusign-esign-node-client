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

  
  

  
  var ServerTemplate = function ServerTemplate() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.sequence = null;
    
    /**
     * The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * datatype: String
     **/
    self.templateId = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.sequence) {
        self.sequence = data.sequence;
      }
      
      if (data.templateId) {
        self.templateId = data.templateId;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getSequence = function() {
      return self.sequence;
    }

    /**
     * set 
     * @param {String} sequence
     **/
    self.setSequence = function (sequence) {
      self.sequence = sequence;
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
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ServerTemplate = ServerTemplate;
  }

  return ServerTemplate;
  
  
}));
