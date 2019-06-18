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
    define(['ApiClient', 'model/NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.LoginAccount = factory(root.Docusign.ApiClient, root.Docusign.NameValue);
  }
}(this, function(ApiClient, NameValue) {
  'use strict';


  /**
   * The LoginAccount model module.
   * @module model/LoginAccount
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LoginAccount</code>.
   * @alias module:model/LoginAccount
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LoginAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginAccount} obj Optional instance to populate.
   * @return {module:model/LoginAccount} The populated <code>LoginAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountIdGuid')) {
        obj['accountIdGuid'] = ApiClient.convertToType(data['accountIdGuid'], 'String');
      }
      if (data.hasOwnProperty('baseUrl')) {
        obj['baseUrl'] = ApiClient.convertToType(data['baseUrl'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'String');
      }
      if (data.hasOwnProperty('loginAccountSettings')) {
        obj['loginAccountSettings'] = ApiClient.convertToType(data['loginAccountSettings'], [NameValue]);
      }
      if (data.hasOwnProperty('loginUserSettings')) {
        obj['loginUserSettings'] = ApiClient.convertToType(data['loginUserSettings'], [NameValue]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('siteDescription')) {
        obj['siteDescription'] = ApiClient.convertToType(data['siteDescription'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The GUID associated with the account ID.
   * @member {String} accountIdGuid
   */
  exports.prototype['accountIdGuid'] = undefined;
  /**
   * The URL that should be used for successive calls to this account. It includes the protocal (https), the DocuSign server where the account is located, and the account number. Use this Url to make API calls against this account. Many of the API calls provide Uri's that are relative to this baseUrl.
   * @member {String} baseUrl
   */
  exports.prototype['baseUrl'] = undefined;
  /**
   * The email address for the user.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * This value is true if this is the default account for the user, otherwise false is returned.
   * @member {String} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * A list of settings on the acccount that indicate what features are available.
   * @member {Array.<module:model/NameValue>} loginAccountSettings
   */
  exports.prototype['loginAccountSettings'] = undefined;
  /**
   * A list of user-level settings that indicate what user-specific features are available.
   * @member {Array.<module:model/NameValue>} loginUserSettings
   */
  exports.prototype['loginUserSettings'] = undefined;
  /**
   * The name associated with the account.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * An optional descirption of the site that hosts the account.
   * @member {String} siteDescription
   */
  exports.prototype['siteDescription'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * The name of this user as defined by the account.
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


