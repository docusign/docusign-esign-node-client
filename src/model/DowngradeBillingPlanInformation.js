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
    define(['ApiClient', 'model/PlanInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlanInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DowngradeBillingPlanInformation = factory(root.Docusign.ApiClient, root.Docusign.PlanInformation);
  }
}(this, function(ApiClient, PlanInformation) {
  'use strict';


  /**
   * The DowngradeBillingPlanInformation model module.
   * @module model/DowngradeBillingPlanInformation
   */

  /**
   * Constructs a new <code>DowngradeBillingPlanInformation</code>.
   * @alias module:model/DowngradeBillingPlanInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DowngradeBillingPlanInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DowngradeBillingPlanInformation} obj Optional instance to populate.
   * @return {module:model/DowngradeBillingPlanInformation} The populated <code>DowngradeBillingPlanInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('downgradeEventType')) {
        obj['downgradeEventType'] = ApiClient.convertToType(data['downgradeEventType'], 'String');
      }
      if (data.hasOwnProperty('planInformation')) {
        obj['planInformation'] = PlanInformation.constructFromObject(data['planInformation']);
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
   * @member {String} downgradeEventType
   */
  exports.prototype['downgradeEventType'] = undefined;
  /**
   * An object used to identify the features and attributes of the account being created.
   * @member {module:model/PlanInformation} planInformation
   */
  exports.prototype['planInformation'] = undefined;
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


