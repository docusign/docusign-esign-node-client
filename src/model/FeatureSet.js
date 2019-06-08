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
    define(['ApiClient', 'model/CurrencyFeatureSetPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CurrencyFeatureSetPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FeatureSet = factory(root.Docusign.ApiClient, root.Docusign.CurrencyFeatureSetPrice);
  }
}(this, function(ApiClient, CurrencyFeatureSetPrice) {
  'use strict';


  /**
   * The FeatureSet model module.
   * @module model/FeatureSet
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>FeatureSet</code>.
   * @alias module:model/FeatureSet
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FeatureSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureSet} obj Optional instance to populate.
   * @return {module:model/FeatureSet} The populated <code>FeatureSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencyFeatureSetPrices')) {
        obj['currencyFeatureSetPrices'] = ApiClient.convertToType(data['currencyFeatureSetPrices'], [CurrencyFeatureSetPrice]);
      }
      if (data.hasOwnProperty('envelopeFee')) {
        obj['envelopeFee'] = ApiClient.convertToType(data['envelopeFee'], 'String');
      }
      if (data.hasOwnProperty('featureSetId')) {
        obj['featureSetId'] = ApiClient.convertToType(data['featureSetId'], 'String');
      }
      if (data.hasOwnProperty('fixedFee')) {
        obj['fixedFee'] = ApiClient.convertToType(data['fixedFee'], 'String');
      }
      if (data.hasOwnProperty('is21CFRPart11')) {
        obj['is21CFRPart11'] = ApiClient.convertToType(data['is21CFRPart11'], 'String');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'String');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('seatFee')) {
        obj['seatFee'] = ApiClient.convertToType(data['seatFee'], 'String');
      }
    }
    return obj;
  }

  /**
   * A complex type that contains alternate currency values that are configured for this plan feature set.
   * @member {Array.<module:model/CurrencyFeatureSetPrice>} currencyFeatureSetPrices
   */
  exports.prototype['currencyFeatureSetPrices'] = undefined;
  /**
   * 
   * @member {String} envelopeFee
   */
  exports.prototype['envelopeFee'] = undefined;
  /**
   * A unique ID for the feature set.
   * @member {String} featureSetId
   */
  exports.prototype['featureSetId'] = undefined;
  /**
   * 
   * @member {String} fixedFee
   */
  exports.prototype['fixedFee'] = undefined;
  /**
   * When set to **true**, indicates that this module is enabled on the account.
   * @member {String} is21CFRPart11
   */
  exports.prototype['is21CFRPart11'] = undefined;
  /**
   * 
   * @member {String} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * Specifies whether the feature set is actively enabled as part of the plan.
   * @member {String} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * An incremental seat cost for seat-based plans. Only valid when isEnabled for the feature set is set to true.
   * @member {String} seatFee
   */
  exports.prototype['seatFee'] = undefined;



  return exports;
}));


