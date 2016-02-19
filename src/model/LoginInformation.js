(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './LoginAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./LoginAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.LoginAccount);
  }
}(this, function(module, LoginAccount) {
  'use strict';

  
  

  
  var LoginInformation = function LoginInformation() { 
    var self = this;
    
    /**
     * The list of accounts that authenticating user is a member of.
     * datatype: Array
     **/
    self.loginAccounts = [];
    
    /**
     * Contains a token that can be used for authentication in API calls instead of using the user name and password. Only returned if the `api_password=true` query string is added to the URL.
     * datatype: String
     **/
    self.apiPassword = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.loginAccounts) {
        self.loginAccounts = data.loginAccounts;
      }
      
      if (data.apiPassword) {
        self.apiPassword = data.apiPassword;
      }
      
    }

    
    /**
     * get The list of accounts that authenticating user is a member of.
     * @return {Array}
     **/
    self.getLoginAccounts = function() {
      return self.loginAccounts;
    }

    /**
     * set The list of accounts that authenticating user is a member of.
     * @param {Array} loginAccounts
     **/
    self.setLoginAccounts = function (loginAccounts) {
      self.loginAccounts = loginAccounts;
    }
    
    /**
     * get Contains a token that can be used for authentication in API calls instead of using the user name and password. Only returned if the `api_password=true` query string is added to the URL.
     * @return {String}
     **/
    self.getApiPassword = function() {
      return self.apiPassword;
    }

    /**
     * set Contains a token that can be used for authentication in API calls instead of using the user name and password. Only returned if the `api_password=true` query string is added to the URL.
     * @param {String} apiPassword
     **/
    self.setApiPassword = function (apiPassword) {
      self.apiPassword = apiPassword;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.LoginInformation = LoginInformation;
  }

  return LoginInformation;
  
  
}));
