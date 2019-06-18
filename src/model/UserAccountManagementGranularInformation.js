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
    define(['ApiClient', 'model/SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserAccountManagementGranularInformation = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The UserAccountManagementGranularInformation model module.
   * @module model/UserAccountManagementGranularInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserAccountManagementGranularInformation</code>.
   * @alias module:model/UserAccountManagementGranularInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAccountManagementGranularInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAccountManagementGranularInformation} obj Optional instance to populate.
   * @return {module:model/UserAccountManagementGranularInformation} The populated <code>UserAccountManagementGranularInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canManageAccountSecuritySettings')) {
        obj['canManageAccountSecuritySettings'] = ApiClient.convertToType(data['canManageAccountSecuritySettings'], 'String');
      }
      if (data.hasOwnProperty('canManageAccountSecuritySettingsMetadata')) {
        obj['canManageAccountSecuritySettingsMetadata'] = SettingsMetadata.constructFromObject(data['canManageAccountSecuritySettingsMetadata']);
      }
      if (data.hasOwnProperty('canManageAccountSettings')) {
        obj['canManageAccountSettings'] = ApiClient.convertToType(data['canManageAccountSettings'], 'String');
      }
      if (data.hasOwnProperty('canManageAccountSettingsMetadata')) {
        obj['canManageAccountSettingsMetadata'] = SettingsMetadata.constructFromObject(data['canManageAccountSettingsMetadata']);
      }
      if (data.hasOwnProperty('canManageAdmins')) {
        obj['canManageAdmins'] = ApiClient.convertToType(data['canManageAdmins'], 'String');
      }
      if (data.hasOwnProperty('canManageAdminsMetadata')) {
        obj['canManageAdminsMetadata'] = SettingsMetadata.constructFromObject(data['canManageAdminsMetadata']);
      }
      if (data.hasOwnProperty('canManageReporting')) {
        obj['canManageReporting'] = ApiClient.convertToType(data['canManageReporting'], 'String');
      }
      if (data.hasOwnProperty('canManageReportingMetadata')) {
        obj['canManageReportingMetadata'] = SettingsMetadata.constructFromObject(data['canManageReportingMetadata']);
      }
      if (data.hasOwnProperty('canManageSharing')) {
        obj['canManageSharing'] = ApiClient.convertToType(data['canManageSharing'], 'String');
      }
      if (data.hasOwnProperty('canManageSharingMetadata')) {
        obj['canManageSharingMetadata'] = SettingsMetadata.constructFromObject(data['canManageSharingMetadata']);
      }
      if (data.hasOwnProperty('canManageSigningGroups')) {
        obj['canManageSigningGroups'] = ApiClient.convertToType(data['canManageSigningGroups'], 'String');
      }
      if (data.hasOwnProperty('canManageSigningGroupsMetadata')) {
        obj['canManageSigningGroupsMetadata'] = SettingsMetadata.constructFromObject(data['canManageSigningGroupsMetadata']);
      }
      if (data.hasOwnProperty('canManageUsers')) {
        obj['canManageUsers'] = ApiClient.convertToType(data['canManageUsers'], 'String');
      }
      if (data.hasOwnProperty('canManageUsersMetadata')) {
        obj['canManageUsersMetadata'] = SettingsMetadata.constructFromObject(data['canManageUsersMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} canManageAccountSecuritySettings
   */
  exports.prototype['canManageAccountSecuritySettings'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageAccountSecuritySettingsMetadata
   */
  exports.prototype['canManageAccountSecuritySettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageAccountSettings
   */
  exports.prototype['canManageAccountSettings'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageAccountSettingsMetadata
   */
  exports.prototype['canManageAccountSettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageAdmins
   */
  exports.prototype['canManageAdmins'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageAdminsMetadata
   */
  exports.prototype['canManageAdminsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageReporting
   */
  exports.prototype['canManageReporting'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageReportingMetadata
   */
  exports.prototype['canManageReportingMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageSharing
   */
  exports.prototype['canManageSharing'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageSharingMetadata
   */
  exports.prototype['canManageSharingMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageSigningGroups
   */
  exports.prototype['canManageSigningGroups'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageSigningGroupsMetadata
   */
  exports.prototype['canManageSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageUsers
   */
  exports.prototype['canManageUsers'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageUsersMetadata
   */
  exports.prototype['canManageUsersMetadata'] = undefined;



  return exports;
}));


