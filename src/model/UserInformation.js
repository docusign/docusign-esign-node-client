/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressInformation', 'model/ConnectUserObject', 'model/ErrorDetails', 'model/ForgottenPasswordInformation', 'model/Group', 'model/NameValue', 'model/UserSettingsInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'), require('./ConnectUserObject'), require('./ErrorDetails'), require('./ForgottenPasswordInformation'), require('./Group'), require('./NameValue'), require('./UserSettingsInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserInformation = factory(root.Docusign.ApiClient, root.Docusign.AddressInformation, root.Docusign.ConnectUserObject, root.Docusign.ErrorDetails, root.Docusign.ForgottenPasswordInformation, root.Docusign.Group, root.Docusign.NameValue, root.Docusign.UserSettingsInformation);
  }
}(this, function(ApiClient, AddressInformation, ConnectUserObject, ErrorDetails, ForgottenPasswordInformation, Group, NameValue, UserSettingsInformation) {
  'use strict';


  /**
   * The UserInformation model module.
   * @module model/UserInformation
   */

  /**
   * Constructs a new <code>UserInformation</code>.
   * User information.
   * @alias module:model/UserInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInformation} obj Optional instance to populate.
   * @return {module:model/UserInformation} The populated <code>UserInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activationAccessCode')) {
        obj['activationAccessCode'] = ApiClient.convertToType(data['activationAccessCode'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('connectConfigurations')) {
        obj['connectConfigurations'] = ApiClient.convertToType(data['connectConfigurations'], [ConnectUserObject]);
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('customSettings')) {
        obj['customSettings'] = ApiClient.convertToType(data['customSettings'], [NameValue]);
      }
      if (data.hasOwnProperty('defaultAccountId')) {
        obj['defaultAccountId'] = ApiClient.convertToType(data['defaultAccountId'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('enableConnectForUser')) {
        obj['enableConnectForUser'] = ApiClient.convertToType(data['enableConnectForUser'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordInfo')) {
        obj['forgottenPasswordInfo'] = ForgottenPasswordInformation.constructFromObject(data['forgottenPasswordInfo']);
      }
      if (data.hasOwnProperty('groupList')) {
        obj['groupList'] = ApiClient.convertToType(data['groupList'], [Group]);
      }
      if (data.hasOwnProperty('hasRemoteNotary')) {
        obj['hasRemoteNotary'] = ApiClient.convertToType(data['hasRemoteNotary'], 'Boolean');
      }
      if (data.hasOwnProperty('homeAddress')) {
        obj['homeAddress'] = AddressInformation.constructFromObject(data['homeAddress']);
      }
      if (data.hasOwnProperty('initialsImageUri')) {
        obj['initialsImageUri'] = ApiClient.convertToType(data['initialsImageUri'], 'String');
      }
      if (data.hasOwnProperty('isAdmin')) {
        obj['isAdmin'] = ApiClient.convertToType(data['isAdmin'], 'String');
      }
      if (data.hasOwnProperty('isAlternateAdmin')) {
        obj['isAlternateAdmin'] = ApiClient.convertToType(data['isAlternateAdmin'], 'String');
      }
      if (data.hasOwnProperty('isNAREnabled')) {
        obj['isNAREnabled'] = ApiClient.convertToType(data['isNAREnabled'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('lastLogin')) {
        obj['lastLogin'] = ApiClient.convertToType(data['lastLogin'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('loginStatus')) {
        obj['loginStatus'] = ApiClient.convertToType(data['loginStatus'], 'String');
      }
      if (data.hasOwnProperty('middleName')) {
        obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('passwordExpiration')) {
        obj['passwordExpiration'] = ApiClient.convertToType(data['passwordExpiration'], 'String');
      }
      if (data.hasOwnProperty('permissionProfileId')) {
        obj['permissionProfileId'] = ApiClient.convertToType(data['permissionProfileId'], 'String');
      }
      if (data.hasOwnProperty('permissionProfileName')) {
        obj['permissionProfileName'] = ApiClient.convertToType(data['permissionProfileName'], 'String');
      }
      if (data.hasOwnProperty('profileImageUri')) {
        obj['profileImageUri'] = ApiClient.convertToType(data['profileImageUri'], 'String');
      }
      if (data.hasOwnProperty('sendActivationEmail')) {
        obj['sendActivationEmail'] = ApiClient.convertToType(data['sendActivationEmail'], 'String');
      }
      if (data.hasOwnProperty('sendActivationOnInvalidLogin')) {
        obj['sendActivationOnInvalidLogin'] = ApiClient.convertToType(data['sendActivationOnInvalidLogin'], 'String');
      }
      if (data.hasOwnProperty('signatureImageUri')) {
        obj['signatureImageUri'] = ApiClient.convertToType(data['signatureImageUri'], 'String');
      }
      if (data.hasOwnProperty('subscribe')) {
        obj['subscribe'] = ApiClient.convertToType(data['subscribe'], 'String');
      }
      if (data.hasOwnProperty('suffixName')) {
        obj['suffixName'] = ApiClient.convertToType(data['suffixName'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('userAddedToAccountDateTime')) {
        obj['userAddedToAccountDateTime'] = ApiClient.convertToType(data['userAddedToAccountDateTime'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('userProfileLastModifiedDate')) {
        obj['userProfileLastModifiedDate'] = ApiClient.convertToType(data['userProfileLastModifiedDate'], 'String');
      }
      if (data.hasOwnProperty('userSettings')) {
        obj['userSettings'] = UserSettingsInformation.constructFromObject(data['userSettings']);
      }
      if (data.hasOwnProperty('userStatus')) {
        obj['userStatus'] = ApiClient.convertToType(data['userStatus'], 'String');
      }
      if (data.hasOwnProperty('userType')) {
        obj['userType'] = ApiClient.convertToType(data['userType'], 'String');
      }
      if (data.hasOwnProperty('workAddress')) {
        obj['workAddress'] = AddressInformation.constructFromObject(data['workAddress']);
      }
    }
    return obj;
  }

  /**
   * The activation code the new user must enter when activating their account.
   * @member {String} activationAccessCode
   */
  exports.prototype['activationAccessCode'] = undefined;
  /**
   * 
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ConnectUserObject>} connectConfigurations
   */
  exports.prototype['connectConfigurations'] = undefined;
  /**
   * 
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * Indicates the date and time the item was created.
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * The name/value pair information for the user custom setting.
   * @member {Array.<module:model/NameValue>} customSettings
   */
  exports.prototype['customSettings'] = undefined;
  /**
   * 
   * @member {String} defaultAccountId
   */
  exports.prototype['defaultAccountId'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Specifies whether the user is enabled for updates from DocuSign Connect. Valid values: true or false.
   * @member {String} enableConnectForUser
   */
  exports.prototype['enableConnectForUser'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * The user's first name.  Maximum Length: 50 characters.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * A complex element containing up to four Question/Answer pairs for forgotten password information.
   * @member {module:model/ForgottenPasswordInformation} forgottenPasswordInfo
   */
  exports.prototype['forgottenPasswordInfo'] = undefined;
  /**
   * A list of the group information for groups to add the user to. Group information can be found by calling [ML:GET group information]. The only required parameter is groupId.   The parameters are:  * groupId - The DocuSign group ID for the group. * groupName - The name of the group * permissionProfileId - The ID of the permission profile associated with the group. * groupType - The group type. 
   * @member {Array.<module:model/Group>} groupList
   */
  exports.prototype['groupList'] = undefined;
  /**
   * 
   * @member {Boolean} hasRemoteNotary
   */
  exports.prototype['hasRemoteNotary'] = undefined;
  /**
   * Specifies the email for the signing host. It is a Required element for In Person Signers recipient Type.  Maximum Length: 100 characters.
   * @member {module:model/AddressInformation} homeAddress
   */
  exports.prototype['homeAddress'] = undefined;
  /**
   * Contains the URI for an endpoint that you can use to retrieve the initials image.
   * @member {String} initialsImageUri
   */
  exports.prototype['initialsImageUri'] = undefined;
  /**
   * Determines if the feature set is actively set as part of the plan.
   * @member {String} isAdmin
   */
  exports.prototype['isAdmin'] = undefined;
  /**
   * 
   * @member {String} isAlternateAdmin
   */
  exports.prototype['isAlternateAdmin'] = undefined;
  /**
   * 
   * @member {String} isNAREnabled
   */
  exports.prototype['isNAREnabled'] = undefined;
  /**
   * 
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;
  /**
   * Shows the date-time when the user last logged on to the system.
   * @member {String} lastLogin
   */
  exports.prototype['lastLogin'] = undefined;
  /**
   * The user's last name.  Maximum Length: 50 characters.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Shows the current status of the user's password. Possible values are:   * password_reset * password_active * password_expired * password_locked * password_reset_failed  
   * @member {String} loginStatus
   */
  exports.prototype['loginStatus'] = undefined;
  /**
   * The user's middle name.  Maximum Length: 50 characters.
   * @member {String} middleName
   */
  exports.prototype['middleName'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * 
   * @member {String} passwordExpiration
   */
  exports.prototype['passwordExpiration'] = undefined;
  /**
   * 
   * @member {String} permissionProfileId
   */
  exports.prototype['permissionProfileId'] = undefined;
  /**
   * 
   * @member {String} permissionProfileName
   */
  exports.prototype['permissionProfileName'] = undefined;
  /**
   * 
   * @member {String} profileImageUri
   */
  exports.prototype['profileImageUri'] = undefined;
  /**
   * 
   * @member {String} sendActivationEmail
   */
  exports.prototype['sendActivationEmail'] = undefined;
  /**
   * When set to **true**, specifies that an additional activation email is sent to the user if they fail a log on before activating their account. 
   * @member {String} sendActivationOnInvalidLogin
   */
  exports.prototype['sendActivationOnInvalidLogin'] = undefined;
  /**
   * Contains the URI for an endpoint that you can use to retrieve the signature image.
   * @member {String} signatureImageUri
   */
  exports.prototype['signatureImageUri'] = undefined;
  /**
   * 
   * @member {String} subscribe
   */
  exports.prototype['subscribe'] = undefined;
  /**
   * The suffix for the user's name.   Maximum Length: 50 characters. 
   * @member {String} suffixName
   */
  exports.prototype['suffixName'] = undefined;
  /**
   * The title of the user.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * 
   * @member {String} userAddedToAccountDateTime
   */
  exports.prototype['userAddedToAccountDateTime'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * 
   * @member {String} userProfileLastModifiedDate
   */
  exports.prototype['userProfileLastModifiedDate'] = undefined;
  /**
   * The collection of settings representing the actions a user can perform. See [userSettingsInformation](/docs/esign-rest-api/reference/users/users/get/#userSettingsInformation) for available settings.
   * @member {module:model/UserSettingsInformation} userSettings
   */
  exports.prototype['userSettings'] = undefined;
  /**
   * 
   * @member {String} userStatus
   */
  exports.prototype['userStatus'] = undefined;
  /**
   * 
   * @member {String} userType
   */
  exports.prototype['userType'] = undefined;
  /**
   * 
   * @member {module:model/AddressInformation} workAddress
   */
  exports.prototype['workAddress'] = undefined;



  return exports;
}));


