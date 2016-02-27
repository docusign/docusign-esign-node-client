(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.NameValue);
  }
}(this, function(module, NameValue) {
  'use strict';

  
  

  /**
   * Contains account settings information.
   **/
  var AccountSettingsInformation = function AccountSettingsInformation() { 
    var self = this;
    
    /**
     * The list of account settings. These determine the features available for the account. Note that some features are determined by the plan used to create the account, and cannot be overridden.
     * datatype: Array
     **/
    self.accountSettings = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.accountSettings) {
        self.accountSettings = data.accountSettings;
      }
      
    }

    
    /**
     * get The list of account settings. These determine the features available for the account. Note that some features are determined by the plan used to create the account, and cannot be overridden.
     * @return {Array}
     **/
    self.getAccountSettings = function() {
      return self.accountSettings;
    }

    /**
     * set The list of account settings. These determine the features available for the account. Note that some features are determined by the plan used to create the account, and cannot be overridden.
     * @param {Array} accountSettings
     **/
    self.setAccountSettings = function (accountSettings) {
      self.accountSettings = accountSettings;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AccountSettingsInformation = AccountSettingsInformation;
  }

  return AccountSettingsInformation;
  
  
}));
