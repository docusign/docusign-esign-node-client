/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    root.Docusign.AccountManagementGranular = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The AccountManagementGranular model module.
   * @module model/AccountManagementGranular
   */

  /**
   * Constructs a new <code>AccountManagementGranular</code>.
   * @alias module:model/AccountManagementGranular
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountManagementGranular</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountManagementGranular} obj Optional instance to populate.
   * @return {module:model/AccountManagementGranular} The populated <code>AccountManagementGranular</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowManageAccountSecuritySettings')) {
        obj['allowManageAccountSecuritySettings'] = ApiClient.convertToType(data['allowManageAccountSecuritySettings'], 'String');
      }
      if (data.hasOwnProperty('allowManageAccountSecuritySettingsMetadata')) {
        obj['allowManageAccountSecuritySettingsMetadata'] = SettingsMetadata.constructFromObject(data['allowManageAccountSecuritySettingsMetadata']);
      }
      if (data.hasOwnProperty('allowManageAccountSettings')) {
        obj['allowManageAccountSettings'] = ApiClient.convertToType(data['allowManageAccountSettings'], 'String');
      }
      if (data.hasOwnProperty('allowManageAccountSettingsMetadata')) {
        obj['allowManageAccountSettingsMetadata'] = SettingsMetadata.constructFromObject(data['allowManageAccountSettingsMetadata']);
      }
      if (data.hasOwnProperty('allowManageAdmins')) {
        obj['allowManageAdmins'] = ApiClient.convertToType(data['allowManageAdmins'], 'String');
      }
      if (data.hasOwnProperty('allowManageAdminsMetadata')) {
        obj['allowManageAdminsMetadata'] = SettingsMetadata.constructFromObject(data['allowManageAdminsMetadata']);
      }
      if (data.hasOwnProperty('allowManageConnect')) {
        obj['allowManageConnect'] = ApiClient.convertToType(data['allowManageConnect'], 'String');
      }
      if (data.hasOwnProperty('allowManageConnectMetadata')) {
        obj['allowManageConnectMetadata'] = SettingsMetadata.constructFromObject(data['allowManageConnectMetadata']);
      }
      if (data.hasOwnProperty('allowManageDocumentRetention')) {
        obj['allowManageDocumentRetention'] = ApiClient.convertToType(data['allowManageDocumentRetention'], 'String');
      }
      if (data.hasOwnProperty('allowManageDocumentRetentionMetadata')) {
        obj['allowManageDocumentRetentionMetadata'] = SettingsMetadata.constructFromObject(data['allowManageDocumentRetentionMetadata']);
      }
      if (data.hasOwnProperty('allowManageEnvelopeTransfer')) {
        obj['allowManageEnvelopeTransfer'] = ApiClient.convertToType(data['allowManageEnvelopeTransfer'], 'String');
      }
      if (data.hasOwnProperty('allowManageEnvelopeTransferMetadata')) {
        obj['allowManageEnvelopeTransferMetadata'] = SettingsMetadata.constructFromObject(data['allowManageEnvelopeTransferMetadata']);
      }
      if (data.hasOwnProperty('allowManageGroupsButNotUsers')) {
        obj['allowManageGroupsButNotUsers'] = ApiClient.convertToType(data['allowManageGroupsButNotUsers'], 'String');
      }
      if (data.hasOwnProperty('allowManageGroupsButNotUsersMetadata')) {
        obj['allowManageGroupsButNotUsersMetadata'] = SettingsMetadata.constructFromObject(data['allowManageGroupsButNotUsersMetadata']);
      }
      if (data.hasOwnProperty('allowManageJointAgreements')) {
        obj['allowManageJointAgreements'] = ApiClient.convertToType(data['allowManageJointAgreements'], 'String');
      }
      if (data.hasOwnProperty('allowManageJointAgreementsMetadata')) {
        obj['allowManageJointAgreementsMetadata'] = SettingsMetadata.constructFromObject(data['allowManageJointAgreementsMetadata']);
      }
      if (data.hasOwnProperty('allowManageReporting')) {
        obj['allowManageReporting'] = ApiClient.convertToType(data['allowManageReporting'], 'String');
      }
      if (data.hasOwnProperty('allowManageReportingMetadata')) {
        obj['allowManageReportingMetadata'] = SettingsMetadata.constructFromObject(data['allowManageReportingMetadata']);
      }
      if (data.hasOwnProperty('allowManageSharing')) {
        obj['allowManageSharing'] = ApiClient.convertToType(data['allowManageSharing'], 'String');
      }
      if (data.hasOwnProperty('allowManageSharingMetadata')) {
        obj['allowManageSharingMetadata'] = SettingsMetadata.constructFromObject(data['allowManageSharingMetadata']);
      }
      if (data.hasOwnProperty('allowManageSigningGroups')) {
        obj['allowManageSigningGroups'] = ApiClient.convertToType(data['allowManageSigningGroups'], 'String');
      }
      if (data.hasOwnProperty('allowManageSigningGroupsMetadata')) {
        obj['allowManageSigningGroupsMetadata'] = SettingsMetadata.constructFromObject(data['allowManageSigningGroupsMetadata']);
      }
      if (data.hasOwnProperty('allowManageStamps')) {
        obj['allowManageStamps'] = ApiClient.convertToType(data['allowManageStamps'], 'String');
      }
      if (data.hasOwnProperty('allowManageStampsMetadata')) {
        obj['allowManageStampsMetadata'] = SettingsMetadata.constructFromObject(data['allowManageStampsMetadata']);
      }
      if (data.hasOwnProperty('allowManageUsers')) {
        obj['allowManageUsers'] = ApiClient.convertToType(data['allowManageUsers'], 'String');
      }
      if (data.hasOwnProperty('allowManageUsersMetadata')) {
        obj['allowManageUsersMetadata'] = SettingsMetadata.constructFromObject(data['allowManageUsersMetadata']);
      }
      if (data.hasOwnProperty('allowViewUsers')) {
        obj['allowViewUsers'] = ApiClient.convertToType(data['allowViewUsers'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} allowManageAccountSecuritySettings
   */
  exports.prototype['allowManageAccountSecuritySettings'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageAccountSecuritySettingsMetadata
   */
  exports.prototype['allowManageAccountSecuritySettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageAccountSettings
   */
  exports.prototype['allowManageAccountSettings'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageAccountSettingsMetadata
   */
  exports.prototype['allowManageAccountSettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageAdmins
   */
  exports.prototype['allowManageAdmins'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageAdminsMetadata
   */
  exports.prototype['allowManageAdminsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageConnect
   */
  exports.prototype['allowManageConnect'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageConnectMetadata
   */
  exports.prototype['allowManageConnectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageDocumentRetention
   */
  exports.prototype['allowManageDocumentRetention'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageDocumentRetentionMetadata
   */
  exports.prototype['allowManageDocumentRetentionMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageEnvelopeTransfer
   */
  exports.prototype['allowManageEnvelopeTransfer'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageEnvelopeTransferMetadata
   */
  exports.prototype['allowManageEnvelopeTransferMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageGroupsButNotUsers
   */
  exports.prototype['allowManageGroupsButNotUsers'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageGroupsButNotUsersMetadata
   */
  exports.prototype['allowManageGroupsButNotUsersMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageJointAgreements
   */
  exports.prototype['allowManageJointAgreements'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageJointAgreementsMetadata
   */
  exports.prototype['allowManageJointAgreementsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageReporting
   */
  exports.prototype['allowManageReporting'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageReportingMetadata
   */
  exports.prototype['allowManageReportingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageSharing
   */
  exports.prototype['allowManageSharing'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageSharingMetadata
   */
  exports.prototype['allowManageSharingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageSigningGroups
   */
  exports.prototype['allowManageSigningGroups'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageSigningGroupsMetadata
   */
  exports.prototype['allowManageSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageStamps
   */
  exports.prototype['allowManageStamps'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageStampsMetadata
   */
  exports.prototype['allowManageStampsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManageUsers
   */
  exports.prototype['allowManageUsers'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowManageUsersMetadata
   */
  exports.prototype['allowManageUsersMetadata'] = undefined;
  /**
   * 
   * @member {String} allowViewUsers
   */
  exports.prototype['allowViewUsers'] = undefined;



  return exports;
}));


