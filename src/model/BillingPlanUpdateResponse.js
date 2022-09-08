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
    define(['ApiClient', 'model/BillingPlanPreview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingPlanPreview'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingPlanUpdateResponse = factory(root.Docusign.ApiClient, root.Docusign.BillingPlanPreview);
  }
}(this, function(ApiClient, BillingPlanPreview) {
  'use strict';


  /**
   * The BillingPlanUpdateResponse model module.
   * @module model/BillingPlanUpdateResponse
   */

  /**
   * Constructs a new <code>BillingPlanUpdateResponse</code>.
   * Defines a billing plan update response object.
   * @alias module:model/BillingPlanUpdateResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPlanUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPlanUpdateResponse} obj Optional instance to populate.
   * @return {module:model/BillingPlanUpdateResponse} The populated <code>BillingPlanUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountPaymentMethod')) {
        obj['accountPaymentMethod'] = ApiClient.convertToType(data['accountPaymentMethod'], 'String');
      }
      if (data.hasOwnProperty('billingPlanPreview')) {
        obj['billingPlanPreview'] = BillingPlanPreview.constructFromObject(data['billingPlanPreview']);
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('includedSeats')) {
        obj['includedSeats'] = ApiClient.convertToType(data['includedSeats'], 'String');
      }
      if (data.hasOwnProperty('paymentCycle')) {
        obj['paymentCycle'] = ApiClient.convertToType(data['paymentCycle'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('planName')) {
        obj['planName'] = ApiClient.convertToType(data['planName'], 'String');
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
   * @member {module:model/BillingPlanPreview} billingPlanPreview
   */
  exports.prototype['billingPlanPreview'] = undefined;
  /**
   * Specifies the ISO currency code for the account.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * The number of seats (users) included.
   * @member {String} includedSeats
   */
  exports.prototype['includedSeats'] = undefined;
  /**
   * 
   * @member {String} paymentCycle
   */
  exports.prototype['paymentCycle'] = undefined;
  /**
   * 
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * 
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * 
   * @member {String} planName
   */
  exports.prototype['planName'] = undefined;



  return exports;
}));


