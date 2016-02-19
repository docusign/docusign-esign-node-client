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

  
  

  
  var Ssn4InformationInput = function Ssn4InformationInput() { 
    var self = this;
    
    /**
     * The last four digits of the recipient's Social Security Number (SSN).
     * datatype: String
     **/
    self.ssn4 = null;
    
    /**
     * Specifies the display level for the recipient. \nValid values are: \n\n* ReadOnly\n* Editable\n* DoNotDisplay
     * datatype: String
     **/
    self.displayLevelCode = null;
    
    /**
     * When set to **true**, the information needs to be returned in the response.
     * datatype: String
     **/
    self.receiveInResponse = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.ssn4) {
        self.ssn4 = data.ssn4;
      }
      
      if (data.displayLevelCode) {
        self.displayLevelCode = data.displayLevelCode;
      }
      
      if (data.receiveInResponse) {
        self.receiveInResponse = data.receiveInResponse;
      }
      
    }

    
    /**
     * get The last four digits of the recipient's Social Security Number (SSN).
     * @return {String}
     **/
    self.getSsn4 = function() {
      return self.ssn4;
    }

    /**
     * set The last four digits of the recipient's Social Security Number (SSN).
     * @param {String} ssn4
     **/
    self.setSsn4 = function (ssn4) {
      self.ssn4 = ssn4;
    }
    
    /**
     * get Specifies the display level for the recipient. \nValid values are: \n\n* ReadOnly\n* Editable\n* DoNotDisplay
     * @return {String}
     **/
    self.getDisplayLevelCode = function() {
      return self.displayLevelCode;
    }

    /**
     * set Specifies the display level for the recipient. \nValid values are: \n\n* ReadOnly\n* Editable\n* DoNotDisplay
     * @param {String} displayLevelCode
     **/
    self.setDisplayLevelCode = function (displayLevelCode) {
      self.displayLevelCode = displayLevelCode;
    }
    
    /**
     * get When set to **true**, the information needs to be returned in the response.
     * @return {String}
     **/
    self.getReceiveInResponse = function() {
      return self.receiveInResponse;
    }

    /**
     * set When set to **true**, the information needs to be returned in the response.
     * @param {String} receiveInResponse
     **/
    self.setReceiveInResponse = function (receiveInResponse) {
      self.receiveInResponse = receiveInResponse;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Ssn4InformationInput = Ssn4InformationInput;
  }

  return Ssn4InformationInput;
  
  
}));
