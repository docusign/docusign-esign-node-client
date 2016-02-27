(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.NameValue);
  }
}(this, function(module, NameValue) {
  'use strict';

  
  

  
  var EnvelopeAuditEvent = function EnvelopeAuditEvent() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.eventFields = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.eventFields) {
        self.eventFields = data.eventFields;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getEventFields = function() {
      return self.eventFields;
    }

    /**
     * set 
     * @param {Array} eventFields
     **/
    self.setEventFields = function (eventFields) {
      self.eventFields = eventFields;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EnvelopeAuditEvent = EnvelopeAuditEvent;
  }

  return EnvelopeAuditEvent;
  
  
}));
