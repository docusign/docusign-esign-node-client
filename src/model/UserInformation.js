(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './AddressInformationV2', './ErrorDetails', './ForgottenPasswordInformation', './Group', './NameValue', './UserAccountManagementGranularInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./AddressInformationV2'), require('./ErrorDetails'), require('./ForgottenPasswordInformation'), require('./Group'), require('./NameValue'), require('./UserAccountManagementGranularInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.AddressInformationV2, root.Docusign.ErrorDetails, root.Docusign.ForgottenPasswordInformation, root.Docusign.Group, root.Docusign.NameValue, root.Docusign.UserAccountManagementGranularInformation);
  }
}(this, function(module, AddressInformationV2, ErrorDetails, ForgottenPasswordInformation, Group, NameValue, UserAccountManagementGranularInformation) {
  'use strict';

  
  

  
  var UserInformation = function UserInformation() { 
    var self = this;
    
    /**
     * The name/value pair information for user settings. These determine the actions that a user can take in the account. The `[ML:userSettings]` are listed and described below.
     * datatype: Array
     **/
    self.userSettings = [];
    
    /**
     * A list of the group information for groups to add the user to. Group information can be found by calling [ML:GET group information]. The only required parameter is groupId. \n\nThe parameters are:\n\n* groupId – The DocuSign group ID for the group.\n* groupName – The name of the group\n* permissionProfileId – The ID of the permission profile associated with the group.\n* groupType – The group type.
     * datatype: Array
     **/
    self.groupList = [];
    
    /**
     * The name/value pair information for the user custom setting.
     * datatype: Array
     **/
    self.customSettings = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.userName) {
        self.userName = data.userName;
      }
      
      if (data.userId) {
        self.userId = data.userId;
      }
      
      if (data.userType) {
        self.userType = data.userType;
      }
      
      if (data.isAdmin) {
        self.isAdmin = data.isAdmin;
      }
      
      if (data.userStatus) {
        self.userStatus = data.userStatus;
      }
      
      if (data.uri) {
        self.uri = data.uri;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.password) {
        self.password = data.password;
      }
      
      if (data.title) {
        self.title = data.title;
      }
      
      if (data.createdDateTime) {
        self.createdDateTime = data.createdDateTime;
      }
      
      if (data.firstName) {
        self.firstName = data.firstName;
      }
      
      if (data.middleName) {
        self.middleName = data.middleName;
      }
      
      if (data.lastName) {
        self.lastName = data.lastName;
      }
      
      if (data.suffixName) {
        self.suffixName = data.suffixName;
      }
      
      if (data.permissionProfileId) {
        self.permissionProfileId = data.permissionProfileId;
      }
      
      if (data.permissionProfileName) {
        self.permissionProfileName = data.permissionProfileName;
      }
      
      if (data.userSettings) {
        self.userSettings = data.userSettings;
      }
      
      if (data.accountManagementGranular) {
        self.accountManagementGranular = new data.accountManagementGranular.constructor();
        self.accountManagementGranular.constructFromObject(data.accountManagementGranular);
      }
      
      if (data.sendActivationOnInvalidLogin) {
        self.sendActivationOnInvalidLogin = data.sendActivationOnInvalidLogin;
      }
      
      if (data.activationAccessCode) {
        self.activationAccessCode = data.activationAccessCode;
      }
      
      if (data.enableConnectForUser) {
        self.enableConnectForUser = data.enableConnectForUser;
      }
      
      if (data.forgottenPasswordInfo) {
        self.forgottenPasswordInfo = new data.forgottenPasswordInfo.constructor();
        self.forgottenPasswordInfo.constructFromObject(data.forgottenPasswordInfo);
      }
      
      if (data.groupList) {
        self.groupList = data.groupList;
      }
      
      if (data.workAddress) {
        self.workAddress = new data.workAddress.constructor();
        self.workAddress.constructFromObject(data.workAddress);
      }
      
      if (data.homeAddress) {
        self.homeAddress = new data.homeAddress.constructor();
        self.homeAddress.constructFromObject(data.homeAddress);
      }
      
      if (data.loginStatus) {
        self.loginStatus = data.loginStatus;
      }
      
      if (data.passwordExpiration) {
        self.passwordExpiration = data.passwordExpiration;
      }
      
      if (data.lastLogin) {
        self.lastLogin = data.lastLogin;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
      if (data.customSettings) {
        self.customSettings = data.customSettings;
      }
      
      if (data.profileImageUri) {
        self.profileImageUri = data.profileImageUri;
      }
      
      if (data.userProfileLastModifiedDate) {
        self.userProfileLastModifiedDate = data.userProfileLastModifiedDate;
      }
      
      if (data.signatureImageUri) {
        self.signatureImageUri = data.signatureImageUri;
      }
      
      if (data.initialsImageUri) {
        self.initialsImageUri = data.initialsImageUri;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getUserName = function() {
      return self.userName;
    }

    /**
     * set 
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
    self.getUserType = function() {
      return self.userType;
    }

    /**
     * set 
     * @param {String} userType
     **/
    self.setUserType = function (userType) {
      self.userType = userType;
    }
    
    /**
     * get Determines if the feature set is actively set as part of the plan.
     * @return {String}
     **/
    self.getIsAdmin = function() {
      return self.isAdmin;
    }

    /**
     * set Determines if the feature set is actively set as part of the plan.
     * @param {String} isAdmin
     **/
    self.setIsAdmin = function (isAdmin) {
      self.isAdmin = isAdmin;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserStatus = function() {
      return self.userStatus;
    }

    /**
     * set 
     * @param {String} userStatus
     **/
    self.setUserStatus = function (userStatus) {
      self.userStatus = userStatus;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUri = function() {
      return self.uri;
    }

    /**
     * set 
     * @param {String} uri
     **/
    self.setUri = function (uri) {
      self.uri = uri;
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
     * get 
     * @return {String}
     **/
    self.getPassword = function() {
      return self.password;
    }

    /**
     * set 
     * @param {String} password
     **/
    self.setPassword = function (password) {
      self.password = password;
    }
    
    /**
     * get The title of the user.
     * @return {String}
     **/
    self.getTitle = function() {
      return self.title;
    }

    /**
     * set The title of the user.
     * @param {String} title
     **/
    self.setTitle = function (title) {
      self.title = title;
    }
    
    /**
     * get Indicates the date and time the item was created.
     * @return {String}
     **/
    self.getCreatedDateTime = function() {
      return self.createdDateTime;
    }

    /**
     * set Indicates the date and time the item was created.
     * @param {String} createdDateTime
     **/
    self.setCreatedDateTime = function (createdDateTime) {
      self.createdDateTime = createdDateTime;
    }
    
    /**
     * get The user’s first name. \nMaximum Length: 50 characters.
     * @return {String}
     **/
    self.getFirstName = function() {
      return self.firstName;
    }

    /**
     * set The user’s first name. \nMaximum Length: 50 characters.
     * @param {String} firstName
     **/
    self.setFirstName = function (firstName) {
      self.firstName = firstName;
    }
    
    /**
     * get The user’s middle name. \nMaximum Length: 50 characters.
     * @return {String}
     **/
    self.getMiddleName = function() {
      return self.middleName;
    }

    /**
     * set The user’s middle name. \nMaximum Length: 50 characters.
     * @param {String} middleName
     **/
    self.setMiddleName = function (middleName) {
      self.middleName = middleName;
    }
    
    /**
     * get The user’s last name. \nMaximum Length: 50 characters.
     * @return {String}
     **/
    self.getLastName = function() {
      return self.lastName;
    }

    /**
     * set The user’s last name. \nMaximum Length: 50 characters.
     * @param {String} lastName
     **/
    self.setLastName = function (lastName) {
      self.lastName = lastName;
    }
    
    /**
     * get The suffix for the user's name. \n\nMaximum Length: 50 characters.
     * @return {String}
     **/
    self.getSuffixName = function() {
      return self.suffixName;
    }

    /**
     * set The suffix for the user's name. \n\nMaximum Length: 50 characters.
     * @param {String} suffixName
     **/
    self.setSuffixName = function (suffixName) {
      self.suffixName = suffixName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPermissionProfileId = function() {
      return self.permissionProfileId;
    }

    /**
     * set 
     * @param {String} permissionProfileId
     **/
    self.setPermissionProfileId = function (permissionProfileId) {
      self.permissionProfileId = permissionProfileId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPermissionProfileName = function() {
      return self.permissionProfileName;
    }

    /**
     * set 
     * @param {String} permissionProfileName
     **/
    self.setPermissionProfileName = function (permissionProfileName) {
      self.permissionProfileName = permissionProfileName;
    }
    
    /**
     * get The name/value pair information for user settings. These determine the actions that a user can take in the account. The `[ML:userSettings]` are listed and described below.
     * @return {Array}
     **/
    self.getUserSettings = function() {
      return self.userSettings;
    }

    /**
     * set The name/value pair information for user settings. These determine the actions that a user can take in the account. The `[ML:userSettings]` are listed and described below.
     * @param {Array} userSettings
     **/
    self.setUserSettings = function (userSettings) {
      self.userSettings = userSettings;
    }
    
    /**
     * @return {UserAccountManagementGranularInformation}
     **/
    self.getAccountManagementGranular = function() {
      return self.accountManagementGranular;
    }

    /**
     * @param {UserAccountManagementGranularInformation} accountManagementGranular
     **/
    self.setAccountManagementGranular = function (accountManagementGranular) {
      self.accountManagementGranular = accountManagementGranular;
    }
    
    /**
     * get When set to **true**, specifies that an additional activation email is sent to the user if they fail a log on before activating their account.
     * @return {String}
     **/
    self.getSendActivationOnInvalidLogin = function() {
      return self.sendActivationOnInvalidLogin;
    }

    /**
     * set When set to **true**, specifies that an additional activation email is sent to the user if they fail a log on before activating their account.
     * @param {String} sendActivationOnInvalidLogin
     **/
    self.setSendActivationOnInvalidLogin = function (sendActivationOnInvalidLogin) {
      self.sendActivationOnInvalidLogin = sendActivationOnInvalidLogin;
    }
    
    /**
     * get The activation code the new user must enter when activating their account.
     * @return {String}
     **/
    self.getActivationAccessCode = function() {
      return self.activationAccessCode;
    }

    /**
     * set The activation code the new user must enter when activating their account.
     * @param {String} activationAccessCode
     **/
    self.setActivationAccessCode = function (activationAccessCode) {
      self.activationAccessCode = activationAccessCode;
    }
    
    /**
     * get Specifies whether the user is enabled for updates from DocuSign Connect. Valid values: true or false.
     * @return {String}
     **/
    self.getEnableConnectForUser = function() {
      return self.enableConnectForUser;
    }

    /**
     * set Specifies whether the user is enabled for updates from DocuSign Connect. Valid values: true or false.
     * @param {String} enableConnectForUser
     **/
    self.setEnableConnectForUser = function (enableConnectForUser) {
      self.enableConnectForUser = enableConnectForUser;
    }
    
    /**
     * @return {ForgottenPasswordInformation}
     **/
    self.getForgottenPasswordInfo = function() {
      return self.forgottenPasswordInfo;
    }

    /**
     * @param {ForgottenPasswordInformation} forgottenPasswordInfo
     **/
    self.setForgottenPasswordInfo = function (forgottenPasswordInfo) {
      self.forgottenPasswordInfo = forgottenPasswordInfo;
    }
    
    /**
     * get A list of the group information for groups to add the user to. Group information can be found by calling [ML:GET group information]. The only required parameter is groupId. \n\nThe parameters are:\n\n* groupId – The DocuSign group ID for the group.\n* groupName – The name of the group\n* permissionProfileId – The ID of the permission profile associated with the group.\n* groupType – The group type.
     * @return {Array}
     **/
    self.getGroupList = function() {
      return self.groupList;
    }

    /**
     * set A list of the group information for groups to add the user to. Group information can be found by calling [ML:GET group information]. The only required parameter is groupId. \n\nThe parameters are:\n\n* groupId – The DocuSign group ID for the group.\n* groupName – The name of the group\n* permissionProfileId – The ID of the permission profile associated with the group.\n* groupType – The group type.
     * @param {Array} groupList
     **/
    self.setGroupList = function (groupList) {
      self.groupList = groupList;
    }
    
    /**
     * @return {AddressInformationV2}
     **/
    self.getWorkAddress = function() {
      return self.workAddress;
    }

    /**
     * @param {AddressInformationV2} workAddress
     **/
    self.setWorkAddress = function (workAddress) {
      self.workAddress = workAddress;
    }
    
    /**
     * @return {AddressInformationV2}
     **/
    self.getHomeAddress = function() {
      return self.homeAddress;
    }

    /**
     * @param {AddressInformationV2} homeAddress
     **/
    self.setHomeAddress = function (homeAddress) {
      self.homeAddress = homeAddress;
    }
    
    /**
     * get Shows the current status of the user’s password. Possible values are: \n\n* password_reset\n* password_active\n* password_expired\n* password_locked\n* password_reset_failed
     * @return {String}
     **/
    self.getLoginStatus = function() {
      return self.loginStatus;
    }

    /**
     * set Shows the current status of the user’s password. Possible values are: \n\n* password_reset\n* password_active\n* password_expired\n* password_locked\n* password_reset_failed
     * @param {String} loginStatus
     **/
    self.setLoginStatus = function (loginStatus) {
      self.loginStatus = loginStatus;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPasswordExpiration = function() {
      return self.passwordExpiration;
    }

    /**
     * set 
     * @param {String} passwordExpiration
     **/
    self.setPasswordExpiration = function (passwordExpiration) {
      self.passwordExpiration = passwordExpiration;
    }
    
    /**
     * get Shows the date-time when the user last logged on to the system.
     * @return {String}
     **/
    self.getLastLogin = function() {
      return self.lastLogin;
    }

    /**
     * set Shows the date-time when the user last logged on to the system.
     * @param {String} lastLogin
     **/
    self.setLastLogin = function (lastLogin) {
      self.lastLogin = lastLogin;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    
    /**
     * get The name/value pair information for the user custom setting.
     * @return {Array}
     **/
    self.getCustomSettings = function() {
      return self.customSettings;
    }

    /**
     * set The name/value pair information for the user custom setting.
     * @param {Array} customSettings
     **/
    self.setCustomSettings = function (customSettings) {
      self.customSettings = customSettings;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getProfileImageUri = function() {
      return self.profileImageUri;
    }

    /**
     * set 
     * @param {String} profileImageUri
     **/
    self.setProfileImageUri = function (profileImageUri) {
      self.profileImageUri = profileImageUri;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserProfileLastModifiedDate = function() {
      return self.userProfileLastModifiedDate;
    }

    /**
     * set 
     * @param {String} userProfileLastModifiedDate
     **/
    self.setUserProfileLastModifiedDate = function (userProfileLastModifiedDate) {
      self.userProfileLastModifiedDate = userProfileLastModifiedDate;
    }
    
    /**
     * get Contains the URI for an endpoint that you can use to retrieve the signature image.
     * @return {String}
     **/
    self.getSignatureImageUri = function() {
      return self.signatureImageUri;
    }

    /**
     * set Contains the URI for an endpoint that you can use to retrieve the signature image.
     * @param {String} signatureImageUri
     **/
    self.setSignatureImageUri = function (signatureImageUri) {
      self.signatureImageUri = signatureImageUri;
    }
    
    /**
     * get Contains the URI for an endpoint that you can use to retrieve the initials image.
     * @return {String}
     **/
    self.getInitialsImageUri = function() {
      return self.initialsImageUri;
    }

    /**
     * set Contains the URI for an endpoint that you can use to retrieve the initials image.
     * @param {String} initialsImageUri
     **/
    self.setInitialsImageUri = function (initialsImageUri) {
      self.initialsImageUri = initialsImageUri;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.UserInformation = UserInformation;
  }

  return UserInformation;
  
  
}));
