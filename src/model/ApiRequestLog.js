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

  
  

  /**
   * Contains API request log information.
   **/
  var ApiRequestLog = function ApiRequestLog() { 
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
    self.description = null;
    
    /**
     * Indicates the date and time the item was created.
     * datatype: String
     **/
    self.createdDateTime = null;
    
    /**
     * 
     * datatype: String
     **/
    self.requestLogId = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.description) {
        self.description = data.description;
      }
      
      if (data.createdDateTime) {
        self.createdDateTime = data.createdDateTime;
      }
      
      if (data.requestLogId) {
        self.requestLogId = data.requestLogId;
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
    self.getDescription = function() {
      return self.description;
    }

    /**
     * set 
     * @param {String} description
     **/
    self.setDescription = function (description) {
      self.description = description;
    }
    
    /**
     * get Indicates the date and time the item was created.
     * @return {String}
     **/
    self.getCreatedDateTime = function() {
      return self.createdDateTime;
    }

    /**
     * set Indicates the date and time the item was created.
     * @param {String} createdDateTime
     **/
    self.setCreatedDateTime = function (createdDateTime) {
      self.createdDateTime = createdDateTime;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getRequestLogId = function() {
      return self.requestLogId;
    }

    /**
     * set 
     * @param {String} requestLogId
     **/
    self.setRequestLogId = function (requestLogId) {
      self.requestLogId = requestLogId;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ApiRequestLog = ApiRequestLog;
  }

  return ApiRequestLog;
  
  
}));
