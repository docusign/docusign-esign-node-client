(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ApiRequestLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ApiRequestLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ApiRequestLog);
  }
}(this, function(module, ApiRequestLog) {
  'use strict';

  
  

  /**
   * Contains information about mutiple API request logs.
   **/
  var ApiRequestLogsResult = function ApiRequestLogsResult() { 
    var self = this;
    
    /**
     * Reserved: TBD
     * datatype: Array
     **/
    self.apiRequestLogs = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.apiRequestLogs) {
        self.apiRequestLogs = data.apiRequestLogs;
      }
      
    }

    
    /**
     * get Reserved: TBD
     * @return {Array}
     **/
    self.getApiRequestLogs = function() {
      return self.apiRequestLogs;
    }

    /**
     * set Reserved: TBD
     * @param {Array} apiRequestLogs
     **/
    self.setApiRequestLogs = function (apiRequestLogs) {
      self.apiRequestLogs = apiRequestLogs;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ApiRequestLogsResult = ApiRequestLogsResult;
  }

  return ApiRequestLogsResult;
  
  
}));
