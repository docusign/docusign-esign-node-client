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
   */

  /**
   * Constructs a new <code>UserAccountManagementGranularInformation</code>.
   * Describes which account management capabilities a user has.
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
      if (data.hasOwnProperty('canManageConnect')) {
        obj['canManageConnect'] = ApiClient.convertToType(data['canManageConnect'], 'String');
      }
      if (data.hasOwnProperty('canManageConnectMetadata')) {
        obj['canManageConnectMetadata'] = SettingsMetadata.constructFromObject(data['canManageConnectMetadata']);
      }
      if (data.hasOwnProperty('canManageDocumentRetention')) {
        obj['canManageDocumentRetention'] = ApiClient.convertToType(data['canManageDocumentRetention'], 'String');
      }
      if (data.hasOwnProperty('canManageDocumentRetentionMetadata')) {
        obj['canManageDocumentRetentionMetadata'] = SettingsMetadata.constructFromObject(data['canManageDocumentRetentionMetadata']);
      }
      if (data.hasOwnProperty('canManageEnvelopeTransfer')) {
        obj['canManageEnvelopeTransfer'] = ApiClient.convertToType(data['canManageEnvelopeTransfer'], 'String');
      }
      if (data.hasOwnProperty('canManageEnvelopeTransferMetadata')) {
        obj['canManageEnvelopeTransferMetadata'] = SettingsMetadata.constructFromObject(data['canManageEnvelopeTransferMetadata']);
      }
      if (data.hasOwnProperty('canManageGroupsButNotUsers')) {
        obj['canManageGroupsButNotUsers'] = ApiClient.convertToType(data['canManageGroupsButNotUsers'], 'String');
      }
      if (data.hasOwnProperty('canManageGroupsButNotUsersMetadata')) {
        obj['canManageGroupsButNotUsersMetadata'] = SettingsMetadata.constructFromObject(data['canManageGroupsButNotUsersMetadata']);
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
      if (data.hasOwnProperty('canManageStamps')) {
        obj['canManageStamps'] = ApiClient.convertToType(data['canManageStamps'], 'String');
      }
      if (data.hasOwnProperty('canManageStampsMetadata')) {
        obj['canManageStampsMetadata'] = SettingsMetadata.constructFromObject(data['canManageStampsMetadata']);
      }
      if (data.hasOwnProperty('canManageUsers')) {
        obj['canManageUsers'] = ApiClient.convertToType(data['canManageUsers'], 'String');
      }
      if (data.hasOwnProperty('canManageUsersMetadata')) {
        obj['canManageUsersMetadata'] = SettingsMetadata.constructFromObject(data['canManageUsersMetadata']);
      }
      if (data.hasOwnProperty('canViewUsers')) {
        obj['canViewUsers'] = ApiClient.convertToType(data['canViewUsers'], 'String');
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
   * 
   * @member {module:model/SettingsMetadata} canManageAccountSecuritySettingsMetadata
   */
  exports.prototype['canManageAccountSecuritySettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageAccountSettings
   */
  exports.prototype['canManageAccountSettings'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canManageAccountSettingsMetadata
   */
  exports.prototype['canManageAccountSettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageAdmins
   */
  exports.prototype['canManageAdmins'] = undefined;
  /**
   * Metadata that indicates whether the `canManageAdmins` property is editable. 
   * @member {module:model/SettingsMetadata} canManageAdminsMetadata
   */
  exports.prototype['canManageAdminsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageConnect
   */
  exports.prototype['canManageConnect'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canManageConnectMetadata
   */
  exports.prototype['canManageConnectMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageDocumentRetention
   */
  exports.prototype['canManageDocumentRetention'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canManageDocumentRetentionMetadata
   */
  exports.prototype['canManageDocumentRetentionMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageEnvelopeTransfer
   */
  exports.prototype['canManageEnvelopeTransfer'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canManageEnvelopeTransferMetadata
   */
  exports.prototype['canManageEnvelopeTransferMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageGroupsButNotUsers
   */
  exports.prototype['canManageGroupsButNotUsers'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canManageGroupsButNotUsersMetadata
   */
  exports.prototype['canManageGroupsButNotUsersMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageReporting
   */
  exports.prototype['canManageReporting'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canManageReportingMetadata
   */
  exports.prototype['canManageReportingMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageSharing
   */
  exports.prototype['canManageSharing'] = undefined;
  /**
   * Metadata that indicates whether the `canManageSharing` property is editable. 
   * @member {module:model/SettingsMetadata} canManageSharingMetadata
   */
  exports.prototype['canManageSharingMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageSigningGroups
   */
  exports.prototype['canManageSigningGroups'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canManageSigningGroupsMetadata
   */
  exports.prototype['canManageSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageStamps
   */
  exports.prototype['canManageStamps'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageStampsMetadata
   */
  exports.prototype['canManageStampsMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageUsers
   */
  exports.prototype['canManageUsers'] = undefined;
  /**
   * Metadata that indicates whether the `canManageUsers` property is editable. 
   * @member {module:model/SettingsMetadata} canManageUsersMetadata
   */
  exports.prototype['canManageUsersMetadata'] = undefined;
  /**
   * 
   * @member {String} canViewUsers
   */
  exports.prototype['canViewUsers'] = undefined;



  return exports;
}));


