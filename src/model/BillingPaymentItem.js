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
    root.Docusign.BillingPaymentItem = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BillingPaymentItem model module.
   * @module model/BillingPaymentItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingPaymentItem</code>.
   * Defines a billing payment request object.
   * @alias module:model/BillingPaymentItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPaymentItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPaymentItem} obj Optional instance to populate.
   * @return {module:model/BillingPaymentItem} The populated <code>BillingPaymentItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('paymentDate')) {
        obj['paymentDate'] = ApiClient.convertToType(data['paymentDate'], 'String');
      }
      if (data.hasOwnProperty('paymentId')) {
        obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
      }
      if (data.hasOwnProperty('paymentNumber')) {
        obj['paymentNumber'] = ApiClient.convertToType(data['paymentNumber'], 'String');
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
   * 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 
   * @member {String} paymentDate
   */
  exports.prototype['paymentDate'] = undefined;
  /**
   * 
   * @member {String} paymentId
   */
  exports.prototype['paymentId'] = undefined;
  /**
   * When set to **true**, a PDF version of the invoice is available.   To get the PDF, make the call again and change \"Accept:\" in the header to \"Accept: application/pdf\".
   * @member {String} paymentNumber
   */
  exports.prototype['paymentNumber'] = undefined;



  return exports;
}));


