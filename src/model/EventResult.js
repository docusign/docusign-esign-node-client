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

  
  

  
  var EventResult = function EventResult() { 
    var self = this;
    
    /**
     * Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * datatype: String
     **/
    self.status = null;
    
    /**
     * 
     * datatype: String
     **/
    self.eventTimestamp = null;
    
    /**
     * 
     * datatype: String
     **/
    self.failureDescription = null;
    
    /**
     * 
     * datatype: String
     **/
    self.vendorFailureStatusCode = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.eventTimestamp) {
        self.eventTimestamp = data.eventTimestamp;
      }
      
      if (data.failureDescription) {
        self.failureDescription = data.failureDescription;
      }
      
      if (data.vendorFailureStatusCode) {
        self.vendorFailureStatusCode = data.vendorFailureStatusCode;
      }
      
    }

    
    /**
     * get Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @return {String}
     **/
    self.getStatus = function() {
      return self.status;
    }

    /**
     * set Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @param {String} status
     **/
    self.setStatus = function (status) {
      self.status = status;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEventTimestamp = function() {
      return self.eventTimestamp;
    }

    /**
     * set 
     * @param {String} eventTimestamp
     **/
    self.setEventTimestamp = function (eventTimestamp) {
      self.eventTimestamp = eventTimestamp;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFailureDescription = function() {
      return self.failureDescription;
    }

    /**
     * set 
     * @param {String} failureDescription
     **/
    self.setFailureDescription = function (failureDescription) {
      self.failureDescription = failureDescription;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getVendorFailureStatusCode = function() {
      return self.vendorFailureStatusCode;
    }

    /**
     * set 
     * @param {String} vendorFailureStatusCode
     **/
    self.setVendorFailureStatusCode = function (vendorFailureStatusCode) {
      self.vendorFailureStatusCode = vendorFailureStatusCode;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EventResult = EventResult;
  }

  return EventResult;
  
  
}));
