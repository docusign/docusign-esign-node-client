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

  
  

  
  var Expirations = function Expirations() { 
    var self = this;
    
    /**
     * When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
     * datatype: String
     **/
    self.expireEnabled = null;
    
    /**
     * An integer that sets the number of days the envelope is active.
     * datatype: String
     **/
    self.expireAfter = null;
    
    /**
     * An integer that sets the number of days before envelope expiration that an expiration warning email is sent to the recipient. If set to 0 (zero), no warning email is sent.
     * datatype: String
     **/
    self.expireWarn = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.expireEnabled) {
        self.expireEnabled = data.expireEnabled;
      }
      
      if (data.expireAfter) {
        self.expireAfter = data.expireAfter;
      }
      
      if (data.expireWarn) {
        self.expireWarn = data.expireWarn;
      }
      
    }

    
    /**
     * get When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
     * @return {String}
     **/
    self.getExpireEnabled = function() {
      return self.expireEnabled;
    }

    /**
     * set When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
     * @param {String} expireEnabled
     **/
    self.setExpireEnabled = function (expireEnabled) {
      self.expireEnabled = expireEnabled;
    }
    
    /**
     * get An integer that sets the number of days the envelope is active.
     * @return {String}
     **/
    self.getExpireAfter = function() {
      return self.expireAfter;
    }

    /**
     * set An integer that sets the number of days the envelope is active.
     * @param {String} expireAfter
     **/
    self.setExpireAfter = function (expireAfter) {
      self.expireAfter = expireAfter;
    }
    
    /**
     * get An integer that sets the number of days before envelope expiration that an expiration warning email is sent to the recipient. If set to 0 (zero), no warning email is sent.
     * @return {String}
     **/
    self.getExpireWarn = function() {
      return self.expireWarn;
    }

    /**
     * set An integer that sets the number of days before envelope expiration that an expiration warning email is sent to the recipient. If set to 0 (zero), no warning email is sent.
     * @param {String} expireWarn
     **/
    self.setExpireWarn = function (expireWarn) {
      self.expireWarn = expireWarn;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Expirations = Expirations;
  }

  return Expirations;
  
  
}));
