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
    define(['ApiClient', 'model/BillingInvoice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingInvoice'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingInvoicesSummary = factory(root.Docusign.ApiClient, root.Docusign.BillingInvoice);
  }
}(this, function(ApiClient, BillingInvoice) {
  'use strict';


  /**
   * The BillingInvoicesSummary model module.
   * @module model/BillingInvoicesSummary
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingInvoicesSummary</code>.
   * @alias module:model/BillingInvoicesSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingInvoicesSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingInvoicesSummary} obj Optional instance to populate.
   * @return {module:model/BillingInvoicesSummary} The populated <code>BillingInvoicesSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingInvoices')) {
        obj['billingInvoices'] = ApiClient.convertToType(data['billingInvoices'], [BillingInvoice]);
      }
      if (data.hasOwnProperty('pastDueBalance')) {
        obj['pastDueBalance'] = ApiClient.convertToType(data['pastDueBalance'], 'String');
      }
      if (data.hasOwnProperty('paymentAllowed')) {
        obj['paymentAllowed'] = ApiClient.convertToType(data['paymentAllowed'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {Array.<module:model/BillingInvoice>} billingInvoices
   */
  exports.prototype['billingInvoices'] = undefined;
  /**
   * 
   * @member {String} pastDueBalance
   */
  exports.prototype['pastDueBalance'] = undefined;
  /**
   * 
   * @member {String} paymentAllowed
   */
  exports.prototype['paymentAllowed'] = undefined;



  return exports;
}));


