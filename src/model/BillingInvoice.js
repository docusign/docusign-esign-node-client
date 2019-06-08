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
    define(['ApiClient', 'model/BillingInvoiceItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingInvoiceItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingInvoice = factory(root.Docusign.ApiClient, root.Docusign.BillingInvoiceItem);
  }
}(this, function(ApiClient, BillingInvoiceItem) {
  'use strict';


  /**
   * The BillingInvoice model module.
   * @module model/BillingInvoice
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingInvoice</code>.
   * Contains information about a billing invoice.
   * @alias module:model/BillingInvoice
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingInvoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingInvoice} obj Optional instance to populate.
   * @return {module:model/BillingInvoice} The populated <code>BillingInvoice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
      }
      if (data.hasOwnProperty('dueDate')) {
        obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
      }
      if (data.hasOwnProperty('invoiceId')) {
        obj['invoiceId'] = ApiClient.convertToType(data['invoiceId'], 'String');
      }
      if (data.hasOwnProperty('invoiceItems')) {
        obj['invoiceItems'] = ApiClient.convertToType(data['invoiceItems'], [BillingInvoiceItem]);
      }
      if (data.hasOwnProperty('invoiceNumber')) {
        obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
      }
      if (data.hasOwnProperty('invoiceUri')) {
        obj['invoiceUri'] = ApiClient.convertToType(data['invoiceUri'], 'String');
      }
      if (data.hasOwnProperty('nonTaxableAmount')) {
        obj['nonTaxableAmount'] = ApiClient.convertToType(data['nonTaxableAmount'], 'String');
      }
      if (data.hasOwnProperty('pdfAvailable')) {
        obj['pdfAvailable'] = ApiClient.convertToType(data['pdfAvailable'], 'String');
      }
      if (data.hasOwnProperty('taxableAmount')) {
        obj['taxableAmount'] = ApiClient.convertToType(data['taxableAmount'], 'String');
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
   * @member {String} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} dueDate
   */
  exports.prototype['dueDate'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} invoiceId
   */
  exports.prototype['invoiceId'] = undefined;
  /**
   * Reserved: TBD
   * @member {Array.<module:model/BillingInvoiceItem>} invoiceItems
   */
  exports.prototype['invoiceItems'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} invoiceNumber
   */
  exports.prototype['invoiceNumber'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve invoice information.
   * @member {String} invoiceUri
   */
  exports.prototype['invoiceUri'] = undefined;
  /**
   * 
   * @member {String} nonTaxableAmount
   */
  exports.prototype['nonTaxableAmount'] = undefined;
  /**
   * 
   * @member {String} pdfAvailable
   */
  exports.prototype['pdfAvailable'] = undefined;
  /**
   * 
   * @member {String} taxableAmount
   */
  exports.prototype['taxableAmount'] = undefined;



  return exports;
}));


