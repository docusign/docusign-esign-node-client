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
    root.Docusign.BillingPayment = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BillingPayment model module.
   * @module model/BillingPayment
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingPayment</code>.
   * Contains information on a billing plan.
   * @alias module:model/BillingPayment
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPayment} obj Optional instance to populate.
   * @return {module:model/BillingPayment} The populated <code>BillingPayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('invoiceId')) {
        obj['invoiceId'] = ApiClient.convertToType(data['invoiceId'], 'String');
      }
      if (data.hasOwnProperty('paymentId')) {
        obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} invoiceId
   */
  exports.prototype['invoiceId'] = undefined;
  /**
   * 
   * @member {String} paymentId
   */
  exports.prototype['paymentId'] = undefined;



  return exports;
}));


