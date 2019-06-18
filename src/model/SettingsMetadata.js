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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SettingsMetadata = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SettingsMetadata model module.
   * @module model/SettingsMetadata
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SettingsMetadata</code>.
   * @alias module:model/SettingsMetadata
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SettingsMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsMetadata} obj Optional instance to populate.
   * @return {module:model/SettingsMetadata} The populated <code>SettingsMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('is21CFRPart11')) {
        obj['is21CFRPart11'] = ApiClient.convertToType(data['is21CFRPart11'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], ['String']);
      }
      if (data.hasOwnProperty('rights')) {
        obj['rights'] = ApiClient.convertToType(data['rights'], 'String');
      }
      if (data.hasOwnProperty('uiHint')) {
        obj['uiHint'] = ApiClient.convertToType(data['uiHint'], 'String');
      }
      if (data.hasOwnProperty('uiOrder')) {
        obj['uiOrder'] = ApiClient.convertToType(data['uiOrder'], 'String');
      }
      if (data.hasOwnProperty('uiType')) {
        obj['uiType'] = ApiClient.convertToType(data['uiType'], 'String');
      }
    }
    return obj;
  }

  /**
   * When set to **true**, indicates that this module is enabled on the account.
   * @member {String} is21CFRPart11
   */
  exports.prototype['is21CFRPart11'] = undefined;
  /**
   * 
   * @member {Array.<String>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * 
   * @member {String} rights
   */
  exports.prototype['rights'] = undefined;
  /**
   * 
   * @member {String} uiHint
   */
  exports.prototype['uiHint'] = undefined;
  /**
   * 
   * @member {String} uiOrder
   */
  exports.prototype['uiOrder'] = undefined;
  /**
   * 
   * @member {String} uiType
   */
  exports.prototype['uiType'] = undefined;



  return exports;
}));


