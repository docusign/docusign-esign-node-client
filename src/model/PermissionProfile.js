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
    define(['ApiClient', 'model/AccountRoleSettings', 'model/UserInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountRoleSettings'), require('./UserInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PermissionProfile = factory(root.Docusign.ApiClient, root.Docusign.AccountRoleSettings, root.Docusign.UserInformation);
  }
}(this, function(ApiClient, AccountRoleSettings, UserInformation) {
  'use strict';


  /**
   * The PermissionProfile model module.
   * @module model/PermissionProfile
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PermissionProfile</code>.
   * @alias module:model/PermissionProfile
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PermissionProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionProfile} obj Optional instance to populate.
   * @return {module:model/PermissionProfile} The populated <code>PermissionProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('modifiedByUsername')) {
        obj['modifiedByUsername'] = ApiClient.convertToType(data['modifiedByUsername'], 'String');
      }
      if (data.hasOwnProperty('modifiedDateTime')) {
        obj['modifiedDateTime'] = ApiClient.convertToType(data['modifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('permissionProfileId')) {
        obj['permissionProfileId'] = ApiClient.convertToType(data['permissionProfileId'], 'String');
      }
      if (data.hasOwnProperty('permissionProfileName')) {
        obj['permissionProfileName'] = ApiClient.convertToType(data['permissionProfileName'], 'String');
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = AccountRoleSettings.constructFromObject(data['settings']);
      }
      if (data.hasOwnProperty('userCount')) {
        obj['userCount'] = ApiClient.convertToType(data['userCount'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserInformation]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} modifiedByUsername
   */
  exports.prototype['modifiedByUsername'] = undefined;
  /**
   * 
   * @member {String} modifiedDateTime
   */
  exports.prototype['modifiedDateTime'] = undefined;
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
   * @member {module:model/AccountRoleSettings} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * 
   * @member {String} userCount
   */
  exports.prototype['userCount'] = undefined;
  /**
   * 
   * @member {Array.<module:model/UserInformation>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


