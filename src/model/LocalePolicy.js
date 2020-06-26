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
    root.Docusign.LocalePolicy = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The LocalePolicy model module.
   * @module model/LocalePolicy
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LocalePolicy</code>.
   * @alias module:model/LocalePolicy
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LocalePolicy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocalePolicy} obj Optional instance to populate.
   * @return {module:model/LocalePolicy} The populated <code>LocalePolicy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressFormat')) {
        obj['addressFormat'] = ApiClient.convertToType(data['addressFormat'], 'String');
      }
      if (data.hasOwnProperty('addressFormatMetadata')) {
        obj['addressFormatMetadata'] = SettingsMetadata.constructFromObject(data['addressFormatMetadata']);
      }
      if (data.hasOwnProperty('allowRegion')) {
        obj['allowRegion'] = ApiClient.convertToType(data['allowRegion'], 'String');
      }
      if (data.hasOwnProperty('calendarType')) {
        obj['calendarType'] = ApiClient.convertToType(data['calendarType'], 'String');
      }
      if (data.hasOwnProperty('calendarTypeMetadata')) {
        obj['calendarTypeMetadata'] = SettingsMetadata.constructFromObject(data['calendarTypeMetadata']);
      }
      if (data.hasOwnProperty('cultureName')) {
        obj['cultureName'] = ApiClient.convertToType(data['cultureName'], 'String');
      }
      if (data.hasOwnProperty('cultureNameMetadata')) {
        obj['cultureNameMetadata'] = SettingsMetadata.constructFromObject(data['cultureNameMetadata']);
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('currencyCodeMetadata')) {
        obj['currencyCodeMetadata'] = SettingsMetadata.constructFromObject(data['currencyCodeMetadata']);
      }
      if (data.hasOwnProperty('currencyNegativeFormat')) {
        obj['currencyNegativeFormat'] = ApiClient.convertToType(data['currencyNegativeFormat'], 'String');
      }
      if (data.hasOwnProperty('currencyNegativeFormatMetadata')) {
        obj['currencyNegativeFormatMetadata'] = SettingsMetadata.constructFromObject(data['currencyNegativeFormatMetadata']);
      }
      if (data.hasOwnProperty('currencyPositiveFormat')) {
        obj['currencyPositiveFormat'] = ApiClient.convertToType(data['currencyPositiveFormat'], 'String');
      }
      if (data.hasOwnProperty('currencyPositiveFormatMetadata')) {
        obj['currencyPositiveFormatMetadata'] = SettingsMetadata.constructFromObject(data['currencyPositiveFormatMetadata']);
      }
      if (data.hasOwnProperty('customDateFormat')) {
        obj['customDateFormat'] = ApiClient.convertToType(data['customDateFormat'], 'String');
      }
      if (data.hasOwnProperty('customSignDateFormat')) {
        obj['customSignDateFormat'] = ApiClient.convertToType(data['customSignDateFormat'], 'String');
      }
      if (data.hasOwnProperty('customSignTimeFormat')) {
        obj['customSignTimeFormat'] = ApiClient.convertToType(data['customSignTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('customTimeFormat')) {
        obj['customTimeFormat'] = ApiClient.convertToType(data['customTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('dateFormat')) {
        obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
      }
      if (data.hasOwnProperty('dateFormatMetadata')) {
        obj['dateFormatMetadata'] = SettingsMetadata.constructFromObject(data['dateFormatMetadata']);
      }
      if (data.hasOwnProperty('effectiveAddressFormat')) {
        obj['effectiveAddressFormat'] = ApiClient.convertToType(data['effectiveAddressFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveCalendarType')) {
        obj['effectiveCalendarType'] = ApiClient.convertToType(data['effectiveCalendarType'], 'String');
      }
      if (data.hasOwnProperty('effectiveCurrencyCode')) {
        obj['effectiveCurrencyCode'] = ApiClient.convertToType(data['effectiveCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('effectiveCurrencyNegativeFormat')) {
        obj['effectiveCurrencyNegativeFormat'] = ApiClient.convertToType(data['effectiveCurrencyNegativeFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveCurrencyPositiveFormat')) {
        obj['effectiveCurrencyPositiveFormat'] = ApiClient.convertToType(data['effectiveCurrencyPositiveFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveCustomDateFormat')) {
        obj['effectiveCustomDateFormat'] = ApiClient.convertToType(data['effectiveCustomDateFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveCustomTimeFormat')) {
        obj['effectiveCustomTimeFormat'] = ApiClient.convertToType(data['effectiveCustomTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveDateFormat')) {
        obj['effectiveDateFormat'] = ApiClient.convertToType(data['effectiveDateFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveInitialFormat')) {
        obj['effectiveInitialFormat'] = ApiClient.convertToType(data['effectiveInitialFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveNameFormat')) {
        obj['effectiveNameFormat'] = ApiClient.convertToType(data['effectiveNameFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveTimeFormat')) {
        obj['effectiveTimeFormat'] = ApiClient.convertToType(data['effectiveTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('effectiveTimeZone')) {
        obj['effectiveTimeZone'] = ApiClient.convertToType(data['effectiveTimeZone'], 'String');
      }
      if (data.hasOwnProperty('initialFormat')) {
        obj['initialFormat'] = ApiClient.convertToType(data['initialFormat'], 'String');
      }
      if (data.hasOwnProperty('initialFormatMetadata')) {
        obj['initialFormatMetadata'] = SettingsMetadata.constructFromObject(data['initialFormatMetadata']);
      }
      if (data.hasOwnProperty('nameFormat')) {
        obj['nameFormat'] = ApiClient.convertToType(data['nameFormat'], 'String');
      }
      if (data.hasOwnProperty('nameFormatMetadata')) {
        obj['nameFormatMetadata'] = SettingsMetadata.constructFromObject(data['nameFormatMetadata']);
      }
      if (data.hasOwnProperty('signDateFormat')) {
        obj['signDateFormat'] = ApiClient.convertToType(data['signDateFormat'], 'String');
      }
      if (data.hasOwnProperty('signDateFormatMetadata')) {
        obj['signDateFormatMetadata'] = SettingsMetadata.constructFromObject(data['signDateFormatMetadata']);
      }
      if (data.hasOwnProperty('signTimeFormat')) {
        obj['signTimeFormat'] = ApiClient.convertToType(data['signTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('signTimeFormatMetadata')) {
        obj['signTimeFormatMetadata'] = SettingsMetadata.constructFromObject(data['signTimeFormatMetadata']);
      }
      if (data.hasOwnProperty('timeFormat')) {
        obj['timeFormat'] = ApiClient.convertToType(data['timeFormat'], 'String');
      }
      if (data.hasOwnProperty('timeFormatMetadata')) {
        obj['timeFormatMetadata'] = SettingsMetadata.constructFromObject(data['timeFormatMetadata']);
      }
      if (data.hasOwnProperty('timeZone')) {
        obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
      }
      if (data.hasOwnProperty('timeZoneMetadata')) {
        obj['timeZoneMetadata'] = SettingsMetadata.constructFromObject(data['timeZoneMetadata']);
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
   * @member {module:model/SettingsMetadata} addressFormatMetadata
   */
  exports.prototype['addressFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} allowRegion
   */
  exports.prototype['allowRegion'] = undefined;
  /**
   * 
   * @member {String} calendarType
   */
  exports.prototype['calendarType'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} calendarTypeMetadata
   */
  exports.prototype['calendarTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} cultureName
   */
  exports.prototype['cultureName'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} cultureNameMetadata
   */
  exports.prototype['cultureNameMetadata'] = undefined;
  /**
   * 
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} currencyCodeMetadata
   */
  exports.prototype['currencyCodeMetadata'] = undefined;
  /**
   * 
   * @member {String} currencyNegativeFormat
   */
  exports.prototype['currencyNegativeFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} currencyNegativeFormatMetadata
   */
  exports.prototype['currencyNegativeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} currencyPositiveFormat
   */
  exports.prototype['currencyPositiveFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} currencyPositiveFormatMetadata
   */
  exports.prototype['currencyPositiveFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} customDateFormat
   */
  exports.prototype['customDateFormat'] = undefined;
  /**
   * 
   * @member {String} customSignDateFormat
   */
  exports.prototype['customSignDateFormat'] = undefined;
  /**
   * 
   * @member {String} customSignTimeFormat
   */
  exports.prototype['customSignTimeFormat'] = undefined;
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
   * @member {module:model/SettingsMetadata} dateFormatMetadata
   */
  exports.prototype['dateFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} effectiveAddressFormat
   */
  exports.prototype['effectiveAddressFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveCalendarType
   */
  exports.prototype['effectiveCalendarType'] = undefined;
  /**
   * 
   * @member {String} effectiveCurrencyCode
   */
  exports.prototype['effectiveCurrencyCode'] = undefined;
  /**
   * 
   * @member {String} effectiveCurrencyNegativeFormat
   */
  exports.prototype['effectiveCurrencyNegativeFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveCurrencyPositiveFormat
   */
  exports.prototype['effectiveCurrencyPositiveFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveCustomDateFormat
   */
  exports.prototype['effectiveCustomDateFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveCustomTimeFormat
   */
  exports.prototype['effectiveCustomTimeFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveDateFormat
   */
  exports.prototype['effectiveDateFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveInitialFormat
   */
  exports.prototype['effectiveInitialFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveNameFormat
   */
  exports.prototype['effectiveNameFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveTimeFormat
   */
  exports.prototype['effectiveTimeFormat'] = undefined;
  /**
   * 
   * @member {String} effectiveTimeZone
   */
  exports.prototype['effectiveTimeZone'] = undefined;
  /**
   * 
   * @member {String} initialFormat
   */
  exports.prototype['initialFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} initialFormatMetadata
   */
  exports.prototype['initialFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} nameFormat
   */
  exports.prototype['nameFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} nameFormatMetadata
   */
  exports.prototype['nameFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} signDateFormat
   */
  exports.prototype['signDateFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signDateFormatMetadata
   */
  exports.prototype['signDateFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} signTimeFormat
   */
  exports.prototype['signTimeFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signTimeFormatMetadata
   */
  exports.prototype['signTimeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} timeFormat
   */
  exports.prototype['timeFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timeFormatMetadata
   */
  exports.prototype['timeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} timeZone
   */
  exports.prototype['timeZone'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timeZoneMetadata
   */
  exports.prototype['timeZoneMetadata'] = undefined;



  return exports;
}));


