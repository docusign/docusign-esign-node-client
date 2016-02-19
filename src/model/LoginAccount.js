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

  
  

  
  var LoginAccount = function LoginAccount() { 
    var self = this;
    
    /**
     * The name associated with the account.
     * datatype: String
     **/
    self.name = null;
    
    /**
     * The account ID associated with the envelope.
     * datatype: String
     **/
    self.accountId = null;
    
    /**
     * The GUID associated with the account ID.
     * datatype: String
     **/
    self.accountIdGuid = null;
    
    /**
     * The URL that should be used for successive calls to this account. It includes the protocal (https), the DocuSign server where the account is located, and the account number. Use this Url to make API calls against this account. Many of the API calls provide Uri's that are relative to this baseUrl.
     * datatype: String
     **/
    self.baseUrl = null;
    
    /**
     * This value is true if this is the default account for the user, otherwise false is returned.
     * datatype: String
     **/
    self.isDefault = null;
    
    /**
     * The name of this user as defined by the account.
     * datatype: String
     **/
    self.userName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.userId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.email = null;
    
    /**
     * An optional descirption of the site that hosts the account.
     * datatype: String
     **/
    self.siteDescription = null;
    
    /**
     * A list of settings on the acccount that indicate what features are available.
     * datatype: Array
     **/
    self.loginAccountSettings = [];
    
    /**
     * A list of user-level settings that indicate what user-specific features are available.
     * datatype: Array
     **/
    self.loginUserSettings = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.accountId) {
        self.accountId = data.accountId;
      }
      
      if (data.accountIdGuid) {
        self.accountIdGuid = data.accountIdGuid;
      }
      
      if (data.baseUrl) {
        self.baseUrl = data.baseUrl;
      }
      
      if (data.isDefault) {
        self.isDefault = data.isDefault;
      }
      
      if (data.userName) {
        self.userName = data.userName;
      }
      
      if (data.userId) {
        self.userId = data.userId;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.siteDescription) {
        self.siteDescription = data.siteDescription;
      }
      
      if (data.loginAccountSettings) {
        self.loginAccountSettings = data.loginAccountSettings;
      }
      
      if (data.loginUserSettings) {
        self.loginUserSettings = data.loginUserSettings;
      }
      
    }

    
    /**
     * get The name associated with the account.
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set The name associated with the account.
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get The account ID associated with the envelope.
     * @return {String}
     **/
    self.getAccountId = function() {
      return self.accountId;
    }

    /**
     * set The account ID associated with the envelope.
     * @param {String} accountId
     **/
    self.setAccountId = function (accountId) {
      self.accountId = accountId;
    }
    
    /**
     * get The GUID associated with the account ID.
     * @return {String}
     **/
    self.getAccountIdGuid = function() {
      return self.accountIdGuid;
    }

    /**
     * set The GUID associated with the account ID.
     * @param {String} accountIdGuid
     **/
    self.setAccountIdGuid = function (accountIdGuid) {
      self.accountIdGuid = accountIdGuid;
    }
    
    /**
     * get The URL that should be used for successive calls to this account. It includes the protocal (https), the DocuSign server where the account is located, and the account number. Use this Url to make API calls against this account. Many of the API calls provide Uri's that are relative to this baseUrl.
     * @return {String}
     **/
    self.getBaseUrl = function() {
      return self.baseUrl;
    }

    /**
     * set The URL that should be used for successive calls to this account. It includes the protocal (https), the DocuSign server where the account is located, and the account number. Use this Url to make API calls against this account. Many of the API calls provide Uri's that are relative to this baseUrl.
     * @param {String} baseUrl
     **/
    self.setBaseUrl = function (baseUrl) {
      self.baseUrl = baseUrl;
    }
    
    /**
     * get This value is true if this is the default account for the user, otherwise false is returned.
     * @return {String}
     **/
    self.getIsDefault = function() {
      return self.isDefault;
    }

    /**
     * set This value is true if this is the default account for the user, otherwise false is returned.
     * @param {String} isDefault
     **/
    self.setIsDefault = function (isDefault) {
      self.isDefault = isDefault;
    }
    
    /**
     * get The name of this user as defined by the account.
     * @return {String}
     **/
    self.getUserName = function() {
      return self.userName;
    }

    /**
     * set The name of this user as defined by the account.
     * @param {String} userName
     **/
    self.setUserName = function (userName) {
      self.userName = userName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserId = function() {
      return self.userId;
    }

    /**
     * set 
     * @param {String} userId
     **/
    self.setUserId = function (userId) {
      self.userId = userId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEmail = function() {
      return self.email;
    }

    /**
     * set 
     * @param {String} email
     **/
    self.setEmail = function (email) {
      self.email = email;
    }
    
    /**
     * get An optional descirption of the site that hosts the account.
     * @return {String}
     **/
    self.getSiteDescription = function() {
      return self.siteDescription;
    }

    /**
     * set An optional descirption of the site that hosts the account.
     * @param {String} siteDescription
     **/
    self.setSiteDescription = function (siteDescription) {
      self.siteDescription = siteDescription;
    }
    
    /**
     * get A list of settings on the acccount that indicate what features are available.
     * @return {Array}
     **/
    self.getLoginAccountSettings = function() {
      return self.loginAccountSettings;
    }

    /**
     * set A list of settings on the acccount that indicate what features are available.
     * @param {Array} loginAccountSettings
     **/
    self.setLoginAccountSettings = function (loginAccountSettings) {
      self.loginAccountSettings = loginAccountSettings;
    }
    
    /**
     * get A list of user-level settings that indicate what user-specific features are available.
     * @return {Array}
     **/
    self.getLoginUserSettings = function() {
      return self.loginUserSettings;
    }

    /**
     * set A list of user-level settings that indicate what user-specific features are available.
     * @param {Array} loginUserSettings
     **/
    self.setLoginUserSettings = function (loginUserSettings) {
      self.loginUserSettings = loginUserSettings;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.LoginAccount = LoginAccount;
  }

  return LoginAccount;
  
  
}));
