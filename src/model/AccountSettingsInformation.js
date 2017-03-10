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
    define(['ApiClient', 'model/NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSettingsInformation = factory(root.Docusign.ApiClient, root.Docusign.NameValue);
  }
}(this, function(ApiClient, NameValue) {
  'use strict';


  /**
   * The AccountSettingsInformation model module.
   * @module model/AccountSettingsInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountSettingsInformation</code>.
   * Contains account settings information.
   * @alias module:model/AccountSettingsInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSettingsInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSettingsInformation} obj Optional instance to populate.
   * @return {module:model/AccountSettingsInformation} The populated <code>AccountSettingsInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountSettings')) {
        obj['accountSettings'] = ApiClient.convertToType(data['accountSettings'], [NameValue]);
      }
    }
    return obj;
  }

  /**
   * The list of account settings. These determine the features available for the account. Note that some features are determined by the plan used to create the account, and cannot be overridden.
   * @member {Array.<module:model/NameValue>} accountSettings
   */
  exports.prototype['accountSettings'] = undefined;



  return exports;
}));


