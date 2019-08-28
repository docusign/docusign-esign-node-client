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
    define(['ApiClient', 'model/ForgottenPasswordInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ForgottenPasswordInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserPasswordInformation = factory(root.Docusign.ApiClient, root.Docusign.ForgottenPasswordInformation);
  }
}(this, function(ApiClient, ForgottenPasswordInformation) {
  'use strict';


  /**
   * The UserPasswordInformation model module.
   * @module model/UserPasswordInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserPasswordInformation</code>.
   * @alias module:model/UserPasswordInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserPasswordInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserPasswordInformation} obj Optional instance to populate.
   * @return {module:model/UserPasswordInformation} The populated <code>UserPasswordInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentPassword')) {
        obj['currentPassword'] = ApiClient.convertToType(data['currentPassword'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordInfo')) {
        obj['forgottenPasswordInfo'] = ForgottenPasswordInformation.constructFromObject(data['forgottenPasswordInfo']);
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * The user's current password to be changed.
   * @member {String} currentPassword
   */
  exports.prototype['currentPassword'] = undefined;
  /**
   * The user's email address for the associated account.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/ForgottenPasswordInformation} forgottenPasswordInfo
   */
  exports.prototype['forgottenPasswordInfo'] = undefined;
  /**
   * The user's new password.
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;



  return exports;
}));


