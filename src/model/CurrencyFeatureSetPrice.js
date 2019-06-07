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
    root.Docusign.CurrencyFeatureSetPrice = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The CurrencyFeatureSetPrice model module.
   * @module model/CurrencyFeatureSetPrice
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CurrencyFeatureSetPrice</code>.
   * @alias module:model/CurrencyFeatureSetPrice
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CurrencyFeatureSetPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrencyFeatureSetPrice} obj Optional instance to populate.
   * @return {module:model/CurrencyFeatureSetPrice} The populated <code>CurrencyFeatureSetPrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('currencySymbol')) {
        obj['currencySymbol'] = ApiClient.convertToType(data['currencySymbol'], 'String');
      }
      if (data.hasOwnProperty('envelopeFee')) {
        obj['envelopeFee'] = ApiClient.convertToType(data['envelopeFee'], 'String');
      }
      if (data.hasOwnProperty('fixedFee')) {
        obj['fixedFee'] = ApiClient.convertToType(data['fixedFee'], 'String');
      }
      if (data.hasOwnProperty('seatFee')) {
        obj['seatFee'] = ApiClient.convertToType(data['seatFee'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the alternate ISO currency code for the account. 
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * Specifies the alternate currency symbol for the account.
   * @member {String} currencySymbol
   */
  exports.prototype['currencySymbol'] = undefined;
  /**
   * An incremental envelope cost for plans with envelope overages (when `isEnabled` is set to **true**.)
   * @member {String} envelopeFee
   */
  exports.prototype['envelopeFee'] = undefined;
  /**
   * Specifies a one-time fee associated with the plan (when `isEnabled` is set to **true**.)
   * @member {String} fixedFee
   */
  exports.prototype['fixedFee'] = undefined;
  /**
   * Specifies an incremental seat cost for seat-based plans (when `isEnabled` is set to **true**.)
   * @member {String} seatFee
   */
  exports.prototype['seatFee'] = undefined;



  return exports;
}));


