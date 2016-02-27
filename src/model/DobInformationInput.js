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

  
  

  
  var DobInformationInput = function DobInformationInput() { 
    var self = this;
    
    /**
     * Specifies the recipient’s date, month, and year of birth.
     * datatype: String
     **/
    self.dateOfBirth = null;
    
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
      
      if (data.dateOfBirth) {
        self.dateOfBirth = data.dateOfBirth;
      }
      
      if (data.displayLevelCode) {
        self.displayLevelCode = data.displayLevelCode;
      }
      
      if (data.receiveInResponse) {
        self.receiveInResponse = data.receiveInResponse;
      }
      
    }

    
    /**
     * get Specifies the recipient’s date, month, and year of birth.
     * @return {String}
     **/
    self.getDateOfBirth = function() {
      return self.dateOfBirth;
    }

    /**
     * set Specifies the recipient’s date, month, and year of birth.
     * @param {String} dateOfBirth
     **/
    self.setDateOfBirth = function (dateOfBirth) {
      self.dateOfBirth = dateOfBirth;
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
    module.DobInformationInput = DobInformationInput;
  }

  return DobInformationInput;
  
  
}));
