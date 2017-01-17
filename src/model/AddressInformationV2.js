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

  
  

  
  var AddressInformationV2 = function AddressInformationV2() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.address1) {
        self.address1 = data.address1;
      }
      
      if (data.address2) {
        self.address2 = data.address2;
      }
      
      if (data.city) {
        self.city = data.city;
      }
      
      if (data.stateOrProvince) {
        self.stateOrProvince = data.stateOrProvince;
      }
      
      if (data.postalCode) {
        self.postalCode = data.postalCode;
      }
      
      if (data.phone) {
        self.phone = data.phone;
      }
      
      if (data.fax) {
        self.fax = data.fax;
      }
      
      if (data.country) {
        self.country = data.country;
      }
      
    }

    
    /**
     * get First Line of the address.\nMaximum length: 100 characters.
     * @return {String}
     **/
    self.getAddress1 = function() {
      return self.address1;
    }

    /**
     * set First Line of the address.\nMaximum length: 100 characters.
     * @param {String} address1
     **/
    self.setAddress1 = function (address1) {
      self.address1 = address1;
    }
    
    /**
     * get Second Line of the address.\nMaximum length: 100 characters.
     * @return {String}
     **/
    self.getAddress2 = function() {
      return self.address2;
    }

    /**
     * set Second Line of the address.\nMaximum length: 100 characters.
     * @param {String} address2
     **/
    self.setAddress2 = function (address2) {
      self.address2 = address2;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCity = function() {
      return self.city;
    }

    /**
     * set 
     * @param {String} city
     **/
    self.setCity = function (city) {
      self.city = city;
    }
    
    /**
     * get The state or province associated with the address.
     * @return {String}
     **/
    self.getStateOrProvince = function() {
      return self.stateOrProvince;
    }

    /**
     * set The state or province associated with the address.
     * @param {String} stateOrProvince
     **/
    self.setStateOrProvince = function (stateOrProvince) {
      self.stateOrProvince = stateOrProvince;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPostalCode = function() {
      return self.postalCode;
    }

    /**
     * set 
     * @param {String} postalCode
     **/
    self.setPostalCode = function (postalCode) {
      self.postalCode = postalCode;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPhone = function() {
      return self.phone;
    }

    /**
     * set 
     * @param {String} phone
     **/
    self.setPhone = function (phone) {
      self.phone = phone;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFax = function() {
      return self.fax;
    }

    /**
     * set 
     * @param {String} fax
     **/
    self.setFax = function (fax) {
      self.fax = fax;
    }
    
    /**
     * get Specifies the country associated with the address.
     * @return {String}
     **/
    self.getCountry = function() {
      return self.country;
    }

    /**
     * set Specifies the country associated with the address.
     * @param {String} country
     **/
    self.setCountry = function (country) {
      self.country = country;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AddressInformationV2 = AddressInformationV2;
  }

  return AddressInformationV2;
  
  
}));
