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
    root.Docusign.TabAccountSettings = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The TabAccountSettings model module.
   * @module model/TabAccountSettings
   */

  /**
   * Constructs a new <code>TabAccountSettings</code>.
   * @alias module:model/TabAccountSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TabAccountSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TabAccountSettings} obj Optional instance to populate.
   * @return {module:model/TabAccountSettings} The populated <code>TabAccountSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowTabOrder')) {
        obj['allowTabOrder'] = ApiClient.convertToType(data['allowTabOrder'], 'String');
      }
      if (data.hasOwnProperty('allowTabOrderMetadata')) {
        obj['allowTabOrderMetadata'] = SettingsMetadata.constructFromObject(data['allowTabOrderMetadata']);
      }
      if (data.hasOwnProperty('approveDeclineTabsEnabled')) {
        obj['approveDeclineTabsEnabled'] = ApiClient.convertToType(data['approveDeclineTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('approveDeclineTabsMetadata')) {
        obj['approveDeclineTabsMetadata'] = SettingsMetadata.constructFromObject(data['approveDeclineTabsMetadata']);
      }
      if (data.hasOwnProperty('calculatedFieldsEnabled')) {
        obj['calculatedFieldsEnabled'] = ApiClient.convertToType(data['calculatedFieldsEnabled'], 'String');
      }
      if (data.hasOwnProperty('calculatedFieldsMetadata')) {
        obj['calculatedFieldsMetadata'] = SettingsMetadata.constructFromObject(data['calculatedFieldsMetadata']);
      }
      if (data.hasOwnProperty('checkboxTabsEnabled')) {
        obj['checkboxTabsEnabled'] = ApiClient.convertToType(data['checkboxTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('checkBoxTabsMetadata')) {
        obj['checkBoxTabsMetadata'] = SettingsMetadata.constructFromObject(data['checkBoxTabsMetadata']);
      }
      if (data.hasOwnProperty('dataFieldRegexEnabled')) {
        obj['dataFieldRegexEnabled'] = ApiClient.convertToType(data['dataFieldRegexEnabled'], 'String');
      }
      if (data.hasOwnProperty('dataFieldRegexMetadata')) {
        obj['dataFieldRegexMetadata'] = SettingsMetadata.constructFromObject(data['dataFieldRegexMetadata']);
      }
      if (data.hasOwnProperty('dataFieldSizeEnabled')) {
        obj['dataFieldSizeEnabled'] = ApiClient.convertToType(data['dataFieldSizeEnabled'], 'String');
      }
      if (data.hasOwnProperty('dataFieldSizeMetadata')) {
        obj['dataFieldSizeMetadata'] = SettingsMetadata.constructFromObject(data['dataFieldSizeMetadata']);
      }
      if (data.hasOwnProperty('drawTabsEnabled')) {
        obj['drawTabsEnabled'] = ApiClient.convertToType(data['drawTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('drawTabsMetadata')) {
        obj['drawTabsMetadata'] = SettingsMetadata.constructFromObject(data['drawTabsMetadata']);
      }
      if (data.hasOwnProperty('enableTabAgreementDetails')) {
        obj['enableTabAgreementDetails'] = ApiClient.convertToType(data['enableTabAgreementDetails'], 'String');
      }
      if (data.hasOwnProperty('enableTabAgreementDetailsMetadata')) {
        obj['enableTabAgreementDetailsMetadata'] = SettingsMetadata.constructFromObject(data['enableTabAgreementDetailsMetadata']);
      }
      if (data.hasOwnProperty('firstLastEmailTabsEnabled')) {
        obj['firstLastEmailTabsEnabled'] = ApiClient.convertToType(data['firstLastEmailTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('firstLastEmailTabsMetadata')) {
        obj['firstLastEmailTabsMetadata'] = SettingsMetadata.constructFromObject(data['firstLastEmailTabsMetadata']);
      }
      if (data.hasOwnProperty('listTabsEnabled')) {
        obj['listTabsEnabled'] = ApiClient.convertToType(data['listTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('listTabsMetadata')) {
        obj['listTabsMetadata'] = SettingsMetadata.constructFromObject(data['listTabsMetadata']);
      }
      if (data.hasOwnProperty('noteTabsEnabled')) {
        obj['noteTabsEnabled'] = ApiClient.convertToType(data['noteTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('noteTabsMetadata')) {
        obj['noteTabsMetadata'] = SettingsMetadata.constructFromObject(data['noteTabsMetadata']);
      }
      if (data.hasOwnProperty('numericalTabsEnabled')) {
        obj['numericalTabsEnabled'] = ApiClient.convertToType(data['numericalTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('numericalTabsMetadata')) {
        obj['numericalTabsMetadata'] = SettingsMetadata.constructFromObject(data['numericalTabsMetadata']);
      }
      if (data.hasOwnProperty('prefillTabsEnabled')) {
        obj['prefillTabsEnabled'] = ApiClient.convertToType(data['prefillTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('prefillTabsMetadata')) {
        obj['prefillTabsMetadata'] = SettingsMetadata.constructFromObject(data['prefillTabsMetadata']);
      }
      if (data.hasOwnProperty('radioTabsEnabled')) {
        obj['radioTabsEnabled'] = ApiClient.convertToType(data['radioTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('radioTabsMetadata')) {
        obj['radioTabsMetadata'] = SettingsMetadata.constructFromObject(data['radioTabsMetadata']);
      }
      if (data.hasOwnProperty('savingCustomTabsEnabled')) {
        obj['savingCustomTabsEnabled'] = ApiClient.convertToType(data['savingCustomTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('savingCustomTabsMetadata')) {
        obj['savingCustomTabsMetadata'] = SettingsMetadata.constructFromObject(data['savingCustomTabsMetadata']);
      }
      if (data.hasOwnProperty('senderToChangeTabAssignmentsEnabled')) {
        obj['senderToChangeTabAssignmentsEnabled'] = ApiClient.convertToType(data['senderToChangeTabAssignmentsEnabled'], 'String');
      }
      if (data.hasOwnProperty('senderToChangeTabAssignmentsMetadata')) {
        obj['senderToChangeTabAssignmentsMetadata'] = SettingsMetadata.constructFromObject(data['senderToChangeTabAssignmentsMetadata']);
      }
      if (data.hasOwnProperty('sharedCustomTabsEnabled')) {
        obj['sharedCustomTabsEnabled'] = ApiClient.convertToType(data['sharedCustomTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('sharedCustomTabsMetadata')) {
        obj['sharedCustomTabsMetadata'] = SettingsMetadata.constructFromObject(data['sharedCustomTabsMetadata']);
      }
      if (data.hasOwnProperty('tabDataLabelEnabled')) {
        obj['tabDataLabelEnabled'] = ApiClient.convertToType(data['tabDataLabelEnabled'], 'String');
      }
      if (data.hasOwnProperty('tabDataLabelMetadata')) {
        obj['tabDataLabelMetadata'] = SettingsMetadata.constructFromObject(data['tabDataLabelMetadata']);
      }
      if (data.hasOwnProperty('tabLocationEnabled')) {
        obj['tabLocationEnabled'] = ApiClient.convertToType(data['tabLocationEnabled'], 'String');
      }
      if (data.hasOwnProperty('tabLocationMetadata')) {
        obj['tabLocationMetadata'] = SettingsMetadata.constructFromObject(data['tabLocationMetadata']);
      }
      if (data.hasOwnProperty('tabLockingEnabled')) {
        obj['tabLockingEnabled'] = ApiClient.convertToType(data['tabLockingEnabled'], 'String');
      }
      if (data.hasOwnProperty('tabLockingMetadata')) {
        obj['tabLockingMetadata'] = SettingsMetadata.constructFromObject(data['tabLockingMetadata']);
      }
      if (data.hasOwnProperty('tabScaleEnabled')) {
        obj['tabScaleEnabled'] = ApiClient.convertToType(data['tabScaleEnabled'], 'String');
      }
      if (data.hasOwnProperty('tabScaleMetadata')) {
        obj['tabScaleMetadata'] = SettingsMetadata.constructFromObject(data['tabScaleMetadata']);
      }
      if (data.hasOwnProperty('tabTextFormattingEnabled')) {
        obj['tabTextFormattingEnabled'] = ApiClient.convertToType(data['tabTextFormattingEnabled'], 'String');
      }
      if (data.hasOwnProperty('tabTextFormattingMetadata')) {
        obj['tabTextFormattingMetadata'] = SettingsMetadata.constructFromObject(data['tabTextFormattingMetadata']);
      }
      if (data.hasOwnProperty('textTabsEnabled')) {
        obj['textTabsEnabled'] = ApiClient.convertToType(data['textTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('textTabsMetadata')) {
        obj['textTabsMetadata'] = SettingsMetadata.constructFromObject(data['textTabsMetadata']);
      }
      if (data.hasOwnProperty('uriTabsEnabled')) {
        obj['uriTabsEnabled'] = ApiClient.convertToType(data['uriTabsEnabled'], 'String');
      }
      if (data.hasOwnProperty('uriTabsMetadata')) {
        obj['uriTabsMetadata'] = SettingsMetadata.constructFromObject(data['uriTabsMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} allowTabOrder
   */
  exports.prototype['allowTabOrder'] = undefined;
  /**
   * Metadata that indicates whether the `allowTabOrder` property is editable. 
   * @member {module:model/SettingsMetadata} allowTabOrderMetadata
   */
  exports.prototype['allowTabOrderMetadata'] = undefined;
  /**
   * 
   * @member {String} approveDeclineTabsEnabled
   */
  exports.prototype['approveDeclineTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `approveDeclineTabs` property is editable. 
   * @member {module:model/SettingsMetadata} approveDeclineTabsMetadata
   */
  exports.prototype['approveDeclineTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} calculatedFieldsEnabled
   */
  exports.prototype['calculatedFieldsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `calculatedFields` property is editable. 
   * @member {module:model/SettingsMetadata} calculatedFieldsMetadata
   */
  exports.prototype['calculatedFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} checkboxTabsEnabled
   */
  exports.prototype['checkboxTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `checkBoxTabs` property is editable.
   * @member {module:model/SettingsMetadata} checkBoxTabsMetadata
   */
  exports.prototype['checkBoxTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} dataFieldRegexEnabled
   */
  exports.prototype['dataFieldRegexEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `dataFieldRegex` property is editable. 
   * @member {module:model/SettingsMetadata} dataFieldRegexMetadata
   */
  exports.prototype['dataFieldRegexMetadata'] = undefined;
  /**
   * 
   * @member {String} dataFieldSizeEnabled
   */
  exports.prototype['dataFieldSizeEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `dataFieldSize` property is editable. 
   * @member {module:model/SettingsMetadata} dataFieldSizeMetadata
   */
  exports.prototype['dataFieldSizeMetadata'] = undefined;
  /**
   * 
   * @member {String} drawTabsEnabled
   */
  exports.prototype['drawTabsEnabled'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} drawTabsMetadata
   */
  exports.prototype['drawTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableTabAgreementDetails
   */
  exports.prototype['enableTabAgreementDetails'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableTabAgreementDetailsMetadata
   */
  exports.prototype['enableTabAgreementDetailsMetadata'] = undefined;
  /**
   * 
   * @member {String} firstLastEmailTabsEnabled
   */
  exports.prototype['firstLastEmailTabsEnabled'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} firstLastEmailTabsMetadata
   */
  exports.prototype['firstLastEmailTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} listTabsEnabled
   */
  exports.prototype['listTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `listTabs` property is editable. 
   * @member {module:model/SettingsMetadata} listTabsMetadata
   */
  exports.prototype['listTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} noteTabsEnabled
   */
  exports.prototype['noteTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `noteTabs` property is editable. 
   * @member {module:model/SettingsMetadata} noteTabsMetadata
   */
  exports.prototype['noteTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} numericalTabsEnabled
   */
  exports.prototype['numericalTabsEnabled'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} numericalTabsMetadata
   */
  exports.prototype['numericalTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} prefillTabsEnabled
   */
  exports.prototype['prefillTabsEnabled'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} prefillTabsMetadata
   */
  exports.prototype['prefillTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} radioTabsEnabled
   */
  exports.prototype['radioTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `radioTabs` property is editable. 
   * @member {module:model/SettingsMetadata} radioTabsMetadata
   */
  exports.prototype['radioTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} savingCustomTabsEnabled
   */
  exports.prototype['savingCustomTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `savingCustomTabs` property is editable. 
   * @member {module:model/SettingsMetadata} savingCustomTabsMetadata
   */
  exports.prototype['savingCustomTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} senderToChangeTabAssignmentsEnabled
   */
  exports.prototype['senderToChangeTabAssignmentsEnabled'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} senderToChangeTabAssignmentsMetadata
   */
  exports.prototype['senderToChangeTabAssignmentsMetadata'] = undefined;
  /**
   * 
   * @member {String} sharedCustomTabsEnabled
   */
  exports.prototype['sharedCustomTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `sharedCustomTabs` property is editable. 
   * @member {module:model/SettingsMetadata} sharedCustomTabsMetadata
   */
  exports.prototype['sharedCustomTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} tabDataLabelEnabled
   */
  exports.prototype['tabDataLabelEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `tabDataLabel` property is editable. 
   * @member {module:model/SettingsMetadata} tabDataLabelMetadata
   */
  exports.prototype['tabDataLabelMetadata'] = undefined;
  /**
   * 
   * @member {String} tabLocationEnabled
   */
  exports.prototype['tabLocationEnabled'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} tabLocationMetadata
   */
  exports.prototype['tabLocationMetadata'] = undefined;
  /**
   * 
   * @member {String} tabLockingEnabled
   */
  exports.prototype['tabLockingEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `tabLocking` property is editable. 
   * @member {module:model/SettingsMetadata} tabLockingMetadata
   */
  exports.prototype['tabLockingMetadata'] = undefined;
  /**
   * 
   * @member {String} tabScaleEnabled
   */
  exports.prototype['tabScaleEnabled'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} tabScaleMetadata
   */
  exports.prototype['tabScaleMetadata'] = undefined;
  /**
   * 
   * @member {String} tabTextFormattingEnabled
   */
  exports.prototype['tabTextFormattingEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `tabTextFormatting` property is editable. 
   * @member {module:model/SettingsMetadata} tabTextFormattingMetadata
   */
  exports.prototype['tabTextFormattingMetadata'] = undefined;
  /**
   * 
   * @member {String} textTabsEnabled
   */
  exports.prototype['textTabsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `textTabs` property is editable. 
   * @member {module:model/SettingsMetadata} textTabsMetadata
   */
  exports.prototype['textTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} uriTabsEnabled
   */
  exports.prototype['uriTabsEnabled'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} uriTabsMetadata
   */
  exports.prototype['uriTabsMetadata'] = undefined;



  return exports;
}));


