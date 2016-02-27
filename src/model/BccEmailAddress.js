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
   * Contains information about the BCC email address.
   **/
  var BccEmailAddress = function BccEmailAddress() { 
    var self = this;
    
    /**
     * Only users with canManageAccount setting can use this option. An array of up to 5 email addresses the envelope is sent to as a BCC email. \n \nExample: If your account has BCC for Email Archive set up for the email address 'archive@mycompany.com' and you send an envelope using the BCC Email Override to send a BCC email to 'salesarchive@mycompany.com', then a copy of the envelope is only sent to the 'salesarchive@mycompany.com' email address.
     * datatype: String
     **/
    self.bccEmailAddressId = null;
    
    /**
     * Specifies the BCC email address. DocuSign verifies that the email format is correct, but does not verify that the email is active.Using this overrides the BCC for Email Archive information setting for this envelope.\n\nMaximum of length: 100 characters.
     * datatype: String
     **/
    self.email = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.bccEmailAddressId) {
        self.bccEmailAddressId = data.bccEmailAddressId;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
    }

    
    /**
     * get Only users with canManageAccount setting can use this option. An array of up to 5 email addresses the envelope is sent to as a BCC email. \n \nExample: If your account has BCC for Email Archive set up for the email address 'archive@mycompany.com' and you send an envelope using the BCC Email Override to send a BCC email to 'salesarchive@mycompany.com', then a copy of the envelope is only sent to the 'salesarchive@mycompany.com' email address.
     * @return {String}
     **/
    self.getBccEmailAddressId = function() {
      return self.bccEmailAddressId;
    }

    /**
     * set Only users with canManageAccount setting can use this option. An array of up to 5 email addresses the envelope is sent to as a BCC email. \n \nExample: If your account has BCC for Email Archive set up for the email address 'archive@mycompany.com' and you send an envelope using the BCC Email Override to send a BCC email to 'salesarchive@mycompany.com', then a copy of the envelope is only sent to the 'salesarchive@mycompany.com' email address.
     * @param {String} bccEmailAddressId
     **/
    self.setBccEmailAddressId = function (bccEmailAddressId) {
      self.bccEmailAddressId = bccEmailAddressId;
    }
    
    /**
     * get Specifies the BCC email address. DocuSign verifies that the email format is correct, but does not verify that the email is active.Using this overrides the BCC for Email Archive information setting for this envelope.\n\nMaximum of length: 100 characters.
     * @return {String}
     **/
    self.getEmail = function() {
      return self.email;
    }

    /**
     * set Specifies the BCC email address. DocuSign verifies that the email format is correct, but does not verify that the email is active.Using this overrides the BCC for Email Archive information setting for this envelope.\n\nMaximum of length: 100 characters.
     * @param {String} email
     **/
    self.setEmail = function (email) {
      self.email = email;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.BccEmailAddress = BccEmailAddress;
  }

  return BccEmailAddress;
  
  
}));
