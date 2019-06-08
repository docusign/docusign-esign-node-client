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
    define(['ApiClient', 'model/AppStoreProduct', 'model/CurrencyPlanPrice', 'model/FeatureSet', 'model/SeatDiscount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AppStoreProduct'), require('./CurrencyPlanPrice'), require('./FeatureSet'), require('./SeatDiscount'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingPlan = factory(root.Docusign.ApiClient, root.Docusign.AppStoreProduct, root.Docusign.CurrencyPlanPrice, root.Docusign.FeatureSet, root.Docusign.SeatDiscount);
  }
}(this, function(ApiClient, AppStoreProduct, CurrencyPlanPrice, FeatureSet, SeatDiscount) {
  'use strict';


  /**
   * The BillingPlan model module.
   * @module model/BillingPlan
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingPlan</code>.
   * Contains information about a billing plan.
   * @alias module:model/BillingPlan
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPlan} obj Optional instance to populate.
   * @return {module:model/BillingPlan} The populated <code>BillingPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appStoreProducts')) {
        obj['appStoreProducts'] = ApiClient.convertToType(data['appStoreProducts'], [AppStoreProduct]);
      }
      if (data.hasOwnProperty('currencyPlanPrices')) {
        obj['currencyPlanPrices'] = ApiClient.convertToType(data['currencyPlanPrices'], [CurrencyPlanPrice]);
      }
      if (data.hasOwnProperty('enableSupport')) {
        obj['enableSupport'] = ApiClient.convertToType(data['enableSupport'], 'String');
      }
      if (data.hasOwnProperty('includedSeats')) {
        obj['includedSeats'] = ApiClient.convertToType(data['includedSeats'], 'String');
      }
      if (data.hasOwnProperty('otherDiscountPercent')) {
        obj['otherDiscountPercent'] = ApiClient.convertToType(data['otherDiscountPercent'], 'String');
      }
      if (data.hasOwnProperty('paymentCycle')) {
        obj['paymentCycle'] = ApiClient.convertToType(data['paymentCycle'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('perSeatPrice')) {
        obj['perSeatPrice'] = ApiClient.convertToType(data['perSeatPrice'], 'String');
      }
      if (data.hasOwnProperty('planClassification')) {
        obj['planClassification'] = ApiClient.convertToType(data['planClassification'], 'String');
      }
      if (data.hasOwnProperty('planFeatureSets')) {
        obj['planFeatureSets'] = ApiClient.convertToType(data['planFeatureSets'], [FeatureSet]);
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('planName')) {
        obj['planName'] = ApiClient.convertToType(data['planName'], 'String');
      }
      if (data.hasOwnProperty('seatDiscounts')) {
        obj['seatDiscounts'] = ApiClient.convertToType(data['seatDiscounts'], [SeatDiscount]);
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
   * Reserved: TBD
   * @member {Array.<module:model/AppStoreProduct>} appStoreProducts
   */
  exports.prototype['appStoreProducts'] = undefined;
  /**
   * Contains the currencyCode and currencySymbol for the alternate currency values for envelopeFee, fixedFee, and seatFee that are configured for this plan feature set.
   * @member {Array.<module:model/CurrencyPlanPrice>} currencyPlanPrices
   */
  exports.prototype['currencyPlanPrices'] = undefined;
  /**
   * When set to **true**, then customer support is provided as part of the account plan.
   * @member {String} enableSupport
   */
  exports.prototype['enableSupport'] = undefined;
  /**
   * The number of seats (users) included.
   * @member {String} includedSeats
   */
  exports.prototype['includedSeats'] = undefined;
  /**
   * 
   * @member {String} otherDiscountPercent
   */
  exports.prototype['otherDiscountPercent'] = undefined;
  /**
   *  The payment cycle associated with the plan. The possible values are: Monthly or Annually. 
   * @member {String} paymentCycle
   */
  exports.prototype['paymentCycle'] = undefined;
  /**
   * 
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * The per seat price for the plan.
   * @member {String} perSeatPrice
   */
  exports.prototype['perSeatPrice'] = undefined;
  /**
   * Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
   * @member {String} planClassification
   */
  exports.prototype['planClassification'] = undefined;
  /**
   * 
   * @member {Array.<module:model/FeatureSet>} planFeatureSets
   */
  exports.prototype['planFeatureSets'] = undefined;
  /**
   * 
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * The name of the Billing Plan.
   * @member {String} planName
   */
  exports.prototype['planName'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SeatDiscount>} seatDiscounts
   */
  exports.prototype['seatDiscounts'] = undefined;
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


