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

  
  

  /**
   * Contains address information.
   **/
  var AddressInformation = function AddressInformation() { 
    var self = this;
    
    /**
     * The first line of the address.
     * datatype: String
     **/
    self.street1 = null;
    
    /**
     * The second line of the address (optional).
     * datatype: String
     **/
    self.street2 = null;
    
    /**
     * The city associated with the address.
     * datatype: String
     **/
    self.city = null;
    
    /**
     * The state or province associated with the address.
     * datatype: String
     **/
    self.state = null;
    
    /**
     * The zip or postal code associated with the address.
     * datatype: String
     **/
    self.zip = null;
    
    /**
     * A phone number associated with the address.
     * datatype: String
     **/
    self.phone = null;
    
    /**
     * A Fax number associated with the address if one is available.
     * datatype: String
     **/
    self.fax = null;
    
    /**
     * Specifies the country associated with the address.
     * datatype: String
     **/
    self.country = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.street1) {
        self.street1 = data.street1;
      }
      
      if (data.street2) {
        self.street2 = data.street2;
      }
      
      if (data.city) {
        self.city = data.city;
      }
      
      if (data.state) {
        self.state = data.state;
      }
      
      if (data.zip) {
        self.zip = data.zip;
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
     * get The first line of the address.
     * @return {String}
     **/
    self.getStreet1 = function() {
      return self.street1;
    }

    /**
     * set The first line of the address.
     * @param {String} street1
     **/
    self.setStreet1 = function (street1) {
      self.street1 = street1;
    }
    
    /**
     * get The second line of the address (optional).
     * @return {String}
     **/
    self.getStreet2 = function() {
      return self.street2;
    }

    /**
     * set The second line of the address (optional).
     * @param {String} street2
     **/
    self.setStreet2 = function (street2) {
      self.street2 = street2;
    }
    
    /**
     * get The city associated with the address.
     * @return {String}
     **/
    self.getCity = function() {
      return self.city;
    }

    /**
     * set The city associated with the address.
     * @param {String} city
     **/
    self.setCity = function (city) {
      self.city = city;
    }
    
    /**
     * get The state or province associated with the address.
     * @return {String}
     **/
    self.getState = function() {
      return self.state;
    }

    /**
     * set The state or province associated with the address.
     * @param {String} state
     **/
    self.setState = function (state) {
      self.state = state;
    }
    
    /**
     * get The zip or postal code associated with the address.
     * @return {String}
     **/
    self.getZip = function() {
      return self.zip;
    }

    /**
     * set The zip or postal code associated with the address.
     * @param {String} zip
     **/
    self.setZip = function (zip) {
      self.zip = zip;
    }
    
    /**
     * get A phone number associated with the address.
     * @return {String}
     **/
    self.getPhone = function() {
      return self.phone;
    }

    /**
     * set A phone number associated with the address.
     * @param {String} phone
     **/
    self.setPhone = function (phone) {
      self.phone = phone;
    }
    
    /**
     * get A Fax number associated with the address if one is available.
     * @return {String}
     **/
    self.getFax = function() {
      return self.fax;
    }

    /**
     * set A Fax number associated with the address if one is available.
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
    module.AddressInformation = AddressInformation;
  }

  return AddressInformation;
  
  
}));
