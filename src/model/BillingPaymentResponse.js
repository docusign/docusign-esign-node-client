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
    define(['ApiClient', 'model/BillingPayment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingPayment'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingPaymentResponse = factory(root.Docusign.ApiClient, root.Docusign.BillingPayment);
  }
}(this, function(ApiClient, BillingPayment) {
  'use strict';


  /**
   * The BillingPaymentResponse model module.
   * @module model/BillingPaymentResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingPaymentResponse</code>.
   * Defines an billing payment response object.
   * @alias module:model/BillingPaymentResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPaymentResponse} obj Optional instance to populate.
   * @return {module:model/BillingPaymentResponse} The populated <code>BillingPaymentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingPayments')) {
        obj['billingPayments'] = ApiClient.convertToType(data['billingPayments'], [BillingPayment]);
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {Array.<module:model/BillingPayment>} billingPayments
   */
  exports.prototype['billingPayments'] = undefined;



  return exports;
}));


