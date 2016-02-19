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

  
  

  
  var Ssn9InformationInput = function Ssn9InformationInput() { 
    var self = this;
    
    /**
     * The recipient's Social Security Number(SSN).
     * datatype: String
     **/
    self.ssn9 = null;
    
    /**
     * Specifies the display level for the recipient. \nValid values are: \n\n* ReadOnly\n* Editable\n* DoNotDisplay
     * datatype: String
     **/
    self.displayLevelCode = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.ssn9) {
        self.ssn9 = data.ssn9;
      }
      
      if (data.displayLevelCode) {
        self.displayLevelCode = data.displayLevelCode;
      }
      
    }

    
    /**
     * get The recipient's Social Security Number(SSN).
     * @return {String}
     **/
    self.getSsn9 = function() {
      return self.ssn9;
    }

    /**
     * set The recipient's Social Security Number(SSN).
     * @param {String} ssn9
     **/
    self.setSsn9 = function (ssn9) {
      self.ssn9 = ssn9;
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
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Ssn9InformationInput = Ssn9InformationInput;
  }

  return Ssn9InformationInput;
  
  
}));
