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
    root.Docusign.BillingInvoiceItem = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BillingInvoiceItem model module.
   * @module model/BillingInvoiceItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingInvoiceItem</code>.
   * Contains information about an item on a billing invoice.
   * @alias module:model/BillingInvoiceItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingInvoiceItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingInvoiceItem} obj Optional instance to populate.
   * @return {module:model/BillingInvoiceItem} The populated <code>BillingInvoiceItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('chargeAmount')) {
        obj['chargeAmount'] = ApiClient.convertToType(data['chargeAmount'], 'String');
      }
      if (data.hasOwnProperty('chargeName')) {
        obj['chargeName'] = ApiClient.convertToType(data['chargeName'], 'String');
      }
      if (data.hasOwnProperty('invoiceItemId')) {
        obj['invoiceItemId'] = ApiClient.convertToType(data['invoiceItemId'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
      }
      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} chargeAmount
   */
  exports.prototype['chargeAmount'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} chargeName
   */
  exports.prototype['chargeName'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} invoiceItemId
   */
  exports.prototype['invoiceItemId'] = undefined;
  /**
   * 
   * @member {String} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;



  return exports;
}));


