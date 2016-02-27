(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './BccEmailAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./BccEmailAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.BccEmailAddress);
  }
}(this, function(module, BccEmailAddress) {
  'use strict';

  
  

  
  var EmailSettings = function EmailSettings() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.replyEmailAddressOverride = null;
    
    /**
     * 
     * datatype: String
     **/
    self.replyEmailNameOverride = null;
    
    /**
     * A list of email addresses that receive a copy of all email communications for an envelope. You can use this for archiving purposes.
     * datatype: Array
     **/
    self.bccEmailAddresses = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.replyEmailAddressOverride) {
        self.replyEmailAddressOverride = data.replyEmailAddressOverride;
      }
      
      if (data.replyEmailNameOverride) {
        self.replyEmailNameOverride = data.replyEmailNameOverride;
      }
      
      if (data.bccEmailAddresses) {
        self.bccEmailAddresses = data.bccEmailAddresses;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getReplyEmailAddressOverride = function() {
      return self.replyEmailAddressOverride;
    }

    /**
     * set 
     * @param {String} replyEmailAddressOverride
     **/
    self.setReplyEmailAddressOverride = function (replyEmailAddressOverride) {
      self.replyEmailAddressOverride = replyEmailAddressOverride;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getReplyEmailNameOverride = function() {
      return self.replyEmailNameOverride;
    }

    /**
     * set 
     * @param {String} replyEmailNameOverride
     **/
    self.setReplyEmailNameOverride = function (replyEmailNameOverride) {
      self.replyEmailNameOverride = replyEmailNameOverride;
    }
    
    /**
     * get A list of email addresses that receive a copy of all email communications for an envelope. You can use this for archiving purposes.
     * @return {Array}
     **/
    self.getBccEmailAddresses = function() {
      return self.bccEmailAddresses;
    }

    /**
     * set A list of email addresses that receive a copy of all email communications for an envelope. You can use this for archiving purposes.
     * @param {Array} bccEmailAddresses
     **/
    self.setBccEmailAddresses = function (bccEmailAddresses) {
      self.bccEmailAddresses = bccEmailAddresses;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EmailSettings = EmailSettings;
  }

  return EmailSettings;
  
  
}));
