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
    root.Docusign.BillingPlanPreview = factory(root.Docusign.ApiClient, root.Docusign.BillingInvoice);
  }
}(this, function(ApiClient, BillingInvoice) {
  'use strict';


  /**
   * The BillingPlanPreview model module.
   * @module model/BillingPlanPreview
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingPlanPreview</code>.
   * Contains information about a preview billing plan.
   * @alias module:model/BillingPlanPreview
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPlanPreview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPlanPreview} obj Optional instance to populate.
   * @return {module:model/BillingPlanPreview} The populated <code>BillingPlanPreview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('invoice')) {
        obj['invoice'] = BillingInvoice.constructFromObject(data['invoice']);
      }
      if (data.hasOwnProperty('isProrated')) {
        obj['isProrated'] = ApiClient.convertToType(data['isProrated'], 'String');
      }
      if (data.hasOwnProperty('subtotalAmount')) {
        obj['subtotalAmount'] = ApiClient.convertToType(data['subtotalAmount'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the ISO currency code for the account.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * @member {module:model/BillingInvoice} invoice
   */
  exports.prototype['invoice'] = undefined;
  /**
   * 
   * @member {String} isProrated
   */
  exports.prototype['isProrated'] = undefined;
  /**
   * 
   * @member {String} subtotalAmount
   */
  exports.prototype['subtotalAmount'] = undefined;
  /**
   * 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;



  return exports;
}));


