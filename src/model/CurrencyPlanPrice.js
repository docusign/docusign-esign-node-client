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
    define(['ApiClient', 'model/CreditCardTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreditCardTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CurrencyPlanPrice = factory(root.Docusign.ApiClient, root.Docusign.CreditCardTypes);
  }
}(this, function(ApiClient, CreditCardTypes) {
  'use strict';


  /**
   * The CurrencyPlanPrice model module.
   * @module model/CurrencyPlanPrice
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CurrencyPlanPrice</code>.
   * @alias module:model/CurrencyPlanPrice
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CurrencyPlanPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrencyPlanPrice} obj Optional instance to populate.
   * @return {module:model/CurrencyPlanPrice} The populated <code>CurrencyPlanPrice</code> instance.
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
      if (data.hasOwnProperty('perSeatPrice')) {
        obj['perSeatPrice'] = ApiClient.convertToType(data['perSeatPrice'], 'String');
      }
      if (data.hasOwnProperty('supportedCardTypes')) {
        obj['supportedCardTypes'] = CreditCardTypes.constructFromObject(data['supportedCardTypes']);
      }
      if (data.hasOwnProperty('supportIncidentFee')) {
        obj['supportIncidentFee'] = ApiClient.convertToType(data['supportIncidentFee'], 'String');
      }
      if (data.hasOwnProperty('supportPlanFee')) {
        obj['supportPlanFee'] = ApiClient.convertToType(data['supportPlanFee'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the ISO currency code for the account.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * Specifies the currency symbol for the account.
   * @member {String} currencySymbol
   */
  exports.prototype['currencySymbol'] = undefined;
  /**
   * 
   * @member {String} perSeatPrice
   */
  exports.prototype['perSeatPrice'] = undefined;
  /**
   * @member {module:model/CreditCardTypes} supportedCardTypes
   */
  exports.prototype['supportedCardTypes'] = undefined;
  /**
   * The support incident fee charged for each support incident.
   * @member {String} supportIncidentFee
   */
  exports.prototype['supportIncidentFee'] = undefined;
  /**
   * The support plan fee charged for this plan.
   * @member {String} supportPlanFee
   */
  exports.prototype['supportPlanFee'] = undefined;



  return exports;
}));


