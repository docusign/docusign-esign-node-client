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

  
  

  
  var DiagnosticsSettingsInformation = function DiagnosticsSettingsInformation() { 
    var self = this;
    
    /**
     * When set to **true**, enables API request logging for the user.
     * datatype: String
     **/
    self.apiRequestLogging = null;
    
    /**
     * Specifies the maximum number of API requests to log.
     * datatype: String
     **/
    self.apiRequestLogMaxEntries = null;
    
    /**
     * Indicates the remaining number of API requests that can be logged.
     * datatype: String
     **/
    self.apiRequestLogRemainingEntries = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.apiRequestLogging) {
        self.apiRequestLogging = data.apiRequestLogging;
      }
      
      if (data.apiRequestLogMaxEntries) {
        self.apiRequestLogMaxEntries = data.apiRequestLogMaxEntries;
      }
      
      if (data.apiRequestLogRemainingEntries) {
        self.apiRequestLogRemainingEntries = data.apiRequestLogRemainingEntries;
      }
      
    }

    
    /**
     * get When set to **true**, enables API request logging for the user.
     * @return {String}
     **/
    self.getApiRequestLogging = function() {
      return self.apiRequestLogging;
    }

    /**
     * set When set to **true**, enables API request logging for the user.
     * @param {String} apiRequestLogging
     **/
    self.setApiRequestLogging = function (apiRequestLogging) {
      self.apiRequestLogging = apiRequestLogging;
    }
    
    /**
     * get Specifies the maximum number of API requests to log.
     * @return {String}
     **/
    self.getApiRequestLogMaxEntries = function() {
      return self.apiRequestLogMaxEntries;
    }

    /**
     * set Specifies the maximum number of API requests to log.
     * @param {String} apiRequestLogMaxEntries
     **/
    self.setApiRequestLogMaxEntries = function (apiRequestLogMaxEntries) {
      self.apiRequestLogMaxEntries = apiRequestLogMaxEntries;
    }
    
    /**
     * get Indicates the remaining number of API requests that can be logged.
     * @return {String}
     **/
    self.getApiRequestLogRemainingEntries = function() {
      return self.apiRequestLogRemainingEntries;
    }

    /**
     * set Indicates the remaining number of API requests that can be logged.
     * @param {String} apiRequestLogRemainingEntries
     **/
    self.setApiRequestLogRemainingEntries = function (apiRequestLogRemainingEntries) {
      self.apiRequestLogRemainingEntries = apiRequestLogRemainingEntries;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.DiagnosticsSettingsInformation = DiagnosticsSettingsInformation;
  }

  return DiagnosticsSettingsInformation;
  
  
}));
