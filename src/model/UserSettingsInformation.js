/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NameValue', 'model/SenderEmailNotifications', 'model/SignerEmailNotifications', 'model/UserAccountManagementGranularInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameValue'), require('./SenderEmailNotifications'), require('./SignerEmailNotifications'), require('./UserAccountManagementGranularInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserSettingsInformation = factory(root.Docusign.ApiClient, root.Docusign.NameValue, root.Docusign.SenderEmailNotifications, root.Docusign.SignerEmailNotifications, root.Docusign.UserAccountManagementGranularInformation);
  }
}(this, function(ApiClient, NameValue, SenderEmailNotifications, SignerEmailNotifications, UserAccountManagementGranularInformation) {
  'use strict';


  /**
   * The UserSettingsInformation model module.
   * @module model/UserSettingsInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserSettingsInformation</code>.
   * @alias module:model/UserSettingsInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserSettingsInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSettingsInformation} obj Optional instance to populate.
   * @return {module:model/UserSettingsInformation} The populated <code>UserSettingsInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountManagementGranular')) {
        obj['accountManagementGranular'] = UserAccountManagementGranularInformation.constructFromObject(data['accountManagementGranular']);
      }
      if (data.hasOwnProperty('senderEmailNotifications')) {
        obj['senderEmailNotifications'] = SenderEmailNotifications.constructFromObject(data['senderEmailNotifications']);
      }
      if (data.hasOwnProperty('signerEmailNotifications')) {
        obj['signerEmailNotifications'] = SignerEmailNotifications.constructFromObject(data['signerEmailNotifications']);
      }
      if (data.hasOwnProperty('userSettings')) {
        obj['userSettings'] = ApiClient.convertToType(data['userSettings'], [NameValue]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UserAccountManagementGranularInformation} accountManagementGranular
   */
  exports.prototype['accountManagementGranular'] = undefined;
  /**
   * @member {module:model/SenderEmailNotifications} senderEmailNotifications
   */
  exports.prototype['senderEmailNotifications'] = undefined;
  /**
   * @member {module:model/SignerEmailNotifications} signerEmailNotifications
   */
  exports.prototype['signerEmailNotifications'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NameValue>} userSettings
   */
  exports.prototype['userSettings'] = undefined;



  return exports;
}));


