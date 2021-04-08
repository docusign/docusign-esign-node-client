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
    root.Docusign.LocalePolicyTab = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The LocalePolicyTab model module.
   * @module model/LocalePolicyTab
   */

  /**
   * Constructs a new <code>LocalePolicyTab</code>.
   * @alias module:model/LocalePolicyTab
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LocalePolicyTab</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocalePolicyTab} obj Optional instance to populate.
   * @return {module:model/LocalePolicyTab} The populated <code>LocalePolicyTab</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressFormat')) {
        obj['addressFormat'] = ApiClient.convertToType(data['addressFormat'], 'String');
      }
      if (data.hasOwnProperty('calendarType')) {
        obj['calendarType'] = ApiClient.convertToType(data['calendarType'], 'String');
      }
      if (data.hasOwnProperty('cultureName')) {
        obj['cultureName'] = ApiClient.convertToType(data['cultureName'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('currencyNegativeFormat')) {
        obj['currencyNegativeFormat'] = ApiClient.convertToType(data['currencyNegativeFormat'], 'String');
      }
      if (data.hasOwnProperty('currencyPositiveFormat')) {
        obj['currencyPositiveFormat'] = ApiClient.convertToType(data['currencyPositiveFormat'], 'String');
      }
      if (data.hasOwnProperty('customDateFormat')) {
        obj['customDateFormat'] = ApiClient.convertToType(data['customDateFormat'], 'String');
      }
      if (data.hasOwnProperty('customTimeFormat')) {
        obj['customTimeFormat'] = ApiClient.convertToType(data['customTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('dateFormat')) {
        obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
      }
      if (data.hasOwnProperty('initialFormat')) {
        obj['initialFormat'] = ApiClient.convertToType(data['initialFormat'], 'String');
      }
      if (data.hasOwnProperty('nameFormat')) {
        obj['nameFormat'] = ApiClient.convertToType(data['nameFormat'], 'String');
      }
      if (data.hasOwnProperty('timeFormat')) {
        obj['timeFormat'] = ApiClient.convertToType(data['timeFormat'], 'String');
      }
      if (data.hasOwnProperty('timeZone')) {
        obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} addressFormat
   */
  exports.prototype['addressFormat'] = undefined;
  /**
   * 
   * @member {String} calendarType
   */
  exports.prototype['calendarType'] = undefined;
  /**
   * 
   * @member {String} cultureName
   */
  exports.prototype['cultureName'] = undefined;
  /**
   * 
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * 
   * @member {String} currencyNegativeFormat
   */
  exports.prototype['currencyNegativeFormat'] = undefined;
  /**
   * 
   * @member {String} currencyPositiveFormat
   */
  exports.prototype['currencyPositiveFormat'] = undefined;
  /**
   * 
   * @member {String} customDateFormat
   */
  exports.prototype['customDateFormat'] = undefined;
  /**
   * 
   * @member {String} customTimeFormat
   */
  exports.prototype['customTimeFormat'] = undefined;
  /**
   * 
   * @member {String} dateFormat
   */
  exports.prototype['dateFormat'] = undefined;
  /**
   * 
   * @member {String} initialFormat
   */
  exports.prototype['initialFormat'] = undefined;
  /**
   * 
   * @member {String} nameFormat
   */
  exports.prototype['nameFormat'] = undefined;
  /**
   * 
   * @member {String} timeFormat
   */
  exports.prototype['timeFormat'] = undefined;
  /**
   * 
   * @member {String} timeZone
   */
  exports.prototype['timeZone'] = undefined;



  return exports;
}));


