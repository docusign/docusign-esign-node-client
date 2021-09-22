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
    root.Docusign.DowngradePlanUpdateResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DowngradePlanUpdateResponse model module.
   * @module model/DowngradePlanUpdateResponse
   */

  /**
   * Constructs a new <code>DowngradePlanUpdateResponse</code>.
   * @alias module:model/DowngradePlanUpdateResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DowngradePlanUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DowngradePlanUpdateResponse} obj Optional instance to populate.
   * @return {module:model/DowngradePlanUpdateResponse} The populated <code>DowngradePlanUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountPaymentMethod')) {
        obj['accountPaymentMethod'] = ApiClient.convertToType(data['accountPaymentMethod'], 'String');
      }
      if (data.hasOwnProperty('discountApplied')) {
        obj['discountApplied'] = ApiClient.convertToType(data['discountApplied'], 'String');
      }
      if (data.hasOwnProperty('downgradeEffectiveDate')) {
        obj['downgradeEffectiveDate'] = ApiClient.convertToType(data['downgradeEffectiveDate'], 'String');
      }
      if (data.hasOwnProperty('downgradePaymentCycle')) {
        obj['downgradePaymentCycle'] = ApiClient.convertToType(data['downgradePaymentCycle'], 'String');
      }
      if (data.hasOwnProperty('downgradePlanId')) {
        obj['downgradePlanId'] = ApiClient.convertToType(data['downgradePlanId'], 'String');
      }
      if (data.hasOwnProperty('downgradePlanName')) {
        obj['downgradePlanName'] = ApiClient.convertToType(data['downgradePlanName'], 'String');
      }
      if (data.hasOwnProperty('downgradeRequestStatus')) {
        obj['downgradeRequestStatus'] = ApiClient.convertToType(data['downgradeRequestStatus'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('promoCode')) {
        obj['promoCode'] = ApiClient.convertToType(data['promoCode'], 'String');
      }
      if (data.hasOwnProperty('saleDiscount')) {
        obj['saleDiscount'] = ApiClient.convertToType(data['saleDiscount'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountPeriods')) {
        obj['saleDiscountPeriods'] = ApiClient.convertToType(data['saleDiscountPeriods'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountType')) {
        obj['saleDiscountType'] = ApiClient.convertToType(data['saleDiscountType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} accountPaymentMethod
   */
  exports.prototype['accountPaymentMethod'] = undefined;
  /**
   * 
   * @member {String} discountApplied
   */
  exports.prototype['discountApplied'] = undefined;
  /**
   * 
   * @member {String} downgradeEffectiveDate
   */
  exports.prototype['downgradeEffectiveDate'] = undefined;
  /**
   * 
   * @member {String} downgradePaymentCycle
   */
  exports.prototype['downgradePaymentCycle'] = undefined;
  /**
   * 
   * @member {String} downgradePlanId
   */
  exports.prototype['downgradePlanId'] = undefined;
  /**
   * 
   * @member {String} downgradePlanName
   */
  exports.prototype['downgradePlanName'] = undefined;
  /**
   * 
   * @member {String} downgradeRequestStatus
   */
  exports.prototype['downgradeRequestStatus'] = undefined;
  /**
   * 
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * 
   * @member {String} promoCode
   */
  exports.prototype['promoCode'] = undefined;
  /**
   * 
   * @member {String} saleDiscount
   */
  exports.prototype['saleDiscount'] = undefined;
  /**
   * 
   * @member {String} saleDiscountPeriods
   */
  exports.prototype['saleDiscountPeriods'] = undefined;
  /**
   * 
   * @member {String} saleDiscountType
   */
  exports.prototype['saleDiscountType'] = undefined;



  return exports;
}));


