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

  
  

  
  var OfflineAttributes = function OfflineAttributes() { 
    var self = this;
    
    /**
     * A string containing information about the type of device used for offline signing.
     * datatype: String
     **/
    self.deviceName = null;
    
    /**
     * A string containing information about the model of the device used for offline signing.
     * datatype: String
     **/
    self.deviceModel = null;
    
    /**
     * A string containing the latitude of the device location at the time of signing.
     * datatype: String
     **/
    self.gpsLatitude = null;
    
    /**
     * A string containing the longitude of the device location at the time of signing.
     * datatype: String
     **/
    self.gpsLongitude = null;
    
    /**
     * A GUID identifying the account associated with the consumer disclosure
     * datatype: String
     **/
    self.accountEsignId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.offlineSigningHash = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.deviceName) {
        self.deviceName = data.deviceName;
      }
      
      if (data.deviceModel) {
        self.deviceModel = data.deviceModel;
      }
      
      if (data.gpsLatitude) {
        self.gpsLatitude = data.gpsLatitude;
      }
      
      if (data.gpsLongitude) {
        self.gpsLongitude = data.gpsLongitude;
      }
      
      if (data.accountEsignId) {
        self.accountEsignId = data.accountEsignId;
      }
      
      if (data.offlineSigningHash) {
        self.offlineSigningHash = data.offlineSigningHash;
      }
      
    }

    
    /**
     * get A string containing information about the type of device used for offline signing.
     * @return {String}
     **/
    self.getDeviceName = function() {
      return self.deviceName;
    }

    /**
     * set A string containing information about the type of device used for offline signing.
     * @param {String} deviceName
     **/
    self.setDeviceName = function (deviceName) {
      self.deviceName = deviceName;
    }
    
    /**
     * get A string containing information about the model of the device used for offline signing.
     * @return {String}
     **/
    self.getDeviceModel = function() {
      return self.deviceModel;
    }

    /**
     * set A string containing information about the model of the device used for offline signing.
     * @param {String} deviceModel
     **/
    self.setDeviceModel = function (deviceModel) {
      self.deviceModel = deviceModel;
    }
    
    /**
     * get A string containing the latitude of the device location at the time of signing.
     * @return {String}
     **/
    self.getGpsLatitude = function() {
      return self.gpsLatitude;
    }

    /**
     * set A string containing the latitude of the device location at the time of signing.
     * @param {String} gpsLatitude
     **/
    self.setGpsLatitude = function (gpsLatitude) {
      self.gpsLatitude = gpsLatitude;
    }
    
    /**
     * get A string containing the longitude of the device location at the time of signing.
     * @return {String}
     **/
    self.getGpsLongitude = function() {
      return self.gpsLongitude;
    }

    /**
     * set A string containing the longitude of the device location at the time of signing.
     * @param {String} gpsLongitude
     **/
    self.setGpsLongitude = function (gpsLongitude) {
      self.gpsLongitude = gpsLongitude;
    }
    
    /**
     * get A GUID identifying the account associated with the consumer disclosure
     * @return {String}
     **/
    self.getAccountEsignId = function() {
      return self.accountEsignId;
    }

    /**
     * set A GUID identifying the account associated with the consumer disclosure
     * @param {String} accountEsignId
     **/
    self.setAccountEsignId = function (accountEsignId) {
      self.accountEsignId = accountEsignId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOfflineSigningHash = function() {
      return self.offlineSigningHash;
    }

    /**
     * set 
     * @param {String} offlineSigningHash
     **/
    self.setOfflineSigningHash = function (offlineSigningHash) {
      self.offlineSigningHash = offlineSigningHash;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.OfflineAttributes = OfflineAttributes;
  }

  return OfflineAttributes;
  
  
}));
