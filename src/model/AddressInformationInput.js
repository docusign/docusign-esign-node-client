(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './AddressInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./AddressInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.AddressInformation);
  }
}(this, function(module, AddressInformation) {
  'use strict';

  
  

  /**
   * Contains address input information.
   **/
  var AddressInformationInput = function AddressInformationInput() { 
    var self = this;
    
    /**
     * datatype: AddressInformation
     **/
    self.addressInformation = null;
    
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
      
      if (data.addressInformation) {
        self.addressInformation = new data.addressInformation.constructor();
        self.addressInformation.constructFromObject(data.addressInformation);
      }
      
      if (data.displayLevelCode) {
        self.displayLevelCode = data.displayLevelCode;
      }
      
      if (data.receiveInResponse) {
        self.receiveInResponse = data.receiveInResponse;
      }
      
    }

    
    /**
     * @return {AddressInformation}
     **/
    self.getAddressInformation = function() {
      return self.addressInformation;
    }

    /**
     * @param {AddressInformation} addressInformation
     **/
    self.setAddressInformation = function (addressInformation) {
      self.addressInformation = addressInformation;
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
    module.AddressInformationInput = AddressInformationInput;
  }

  return AddressInformationInput;
  
  
}));
