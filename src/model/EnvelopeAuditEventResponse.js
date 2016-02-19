(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './EnvelopeAuditEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./EnvelopeAuditEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.EnvelopeAuditEvent);
  }
}(this, function(module, EnvelopeAuditEvent) {
  'use strict';

  
  

  
  var EnvelopeAuditEventResponse = function EnvelopeAuditEventResponse() { 
    var self = this;
    
    /**
     * Reserved: TBD
     * datatype: Array
     **/
    self.auditEvents = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.auditEvents) {
        self.auditEvents = data.auditEvents;
      }
      
    }

    
    /**
     * get Reserved: TBD
     * @return {Array}
     **/
    self.getAuditEvents = function() {
      return self.auditEvents;
    }

    /**
     * set Reserved: TBD
     * @param {Array} auditEvents
     **/
    self.setAuditEvents = function (auditEvents) {
      self.auditEvents = auditEvents;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EnvelopeAuditEventResponse = EnvelopeAuditEventResponse;
  }

  return EnvelopeAuditEventResponse;
  
  
}));
