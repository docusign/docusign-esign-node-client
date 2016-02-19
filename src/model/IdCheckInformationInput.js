(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './AddressInformationInput', './DobInformationInput', './Ssn4InformationInput', './Ssn9InformationInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./AddressInformationInput'), require('./DobInformationInput'), require('./Ssn4InformationInput'), require('./Ssn9InformationInput'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.AddressInformationInput, root.Docusign.DobInformationInput, root.Docusign.Ssn4InformationInput, root.Docusign.Ssn9InformationInput);
  }
}(this, function(module, AddressInformationInput, DobInformationInput, Ssn4InformationInput, Ssn9InformationInput) {
  'use strict';

  
  

  
  var IdCheckInformationInput = function IdCheckInformationInput() { 
    var self = this;
    
    /**
     * datatype: AddressInformationInput
     **/
    self.addressInformationInput = null;
    
    /**
     * datatype: DobInformationInput
     **/
    self.dobInformationInput = null;
    
    /**
     * datatype: Ssn4InformationInput
     **/
    self.ssn4InformationInput = null;
    
    /**
     * datatype: Ssn9InformationInput
     **/
    self.ssn9InformationInput = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.addressInformationInput) {
        self.addressInformationInput = new data.addressInformationInput.constructor();
        self.addressInformationInput.constructFromObject(data.addressInformationInput);
      }
      
      if (data.dobInformationInput) {
        self.dobInformationInput = new data.dobInformationInput.constructor();
        self.dobInformationInput.constructFromObject(data.dobInformationInput);
      }
      
      if (data.ssn4InformationInput) {
        self.ssn4InformationInput = new data.ssn4InformationInput.constructor();
        self.ssn4InformationInput.constructFromObject(data.ssn4InformationInput);
      }
      
      if (data.ssn9InformationInput) {
        self.ssn9InformationInput = new data.ssn9InformationInput.constructor();
        self.ssn9InformationInput.constructFromObject(data.ssn9InformationInput);
      }
      
    }

    
    /**
     * @return {AddressInformationInput}
     **/
    self.getAddressInformationInput = function() {
      return self.addressInformationInput;
    }

    /**
     * @param {AddressInformationInput} addressInformationInput
     **/
    self.setAddressInformationInput = function (addressInformationInput) {
      self.addressInformationInput = addressInformationInput;
    }
    
    /**
     * @return {DobInformationInput}
     **/
    self.getDobInformationInput = function() {
      return self.dobInformationInput;
    }

    /**
     * @param {DobInformationInput} dobInformationInput
     **/
    self.setDobInformationInput = function (dobInformationInput) {
      self.dobInformationInput = dobInformationInput;
    }
    
    /**
     * @return {Ssn4InformationInput}
     **/
    self.getSsn4InformationInput = function() {
      return self.ssn4InformationInput;
    }

    /**
     * @param {Ssn4InformationInput} ssn4InformationInput
     **/
    self.setSsn4InformationInput = function (ssn4InformationInput) {
      self.ssn4InformationInput = ssn4InformationInput;
    }
    
    /**
     * @return {Ssn9InformationInput}
     **/
    self.getSsn9InformationInput = function() {
      return self.ssn9InformationInput;
    }

    /**
     * @param {Ssn9InformationInput} ssn9InformationInput
     **/
    self.setSsn9InformationInput = function (ssn9InformationInput) {
      self.ssn9InformationInput = ssn9InformationInput;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.IdCheckInformationInput = IdCheckInformationInput;
  }

  return IdCheckInformationInput;
  
  
}));
