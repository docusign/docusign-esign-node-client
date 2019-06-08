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
    root.Docusign.BillingInvoicesResponse = factory(root.Docusign.ApiClient, root.Docusign.BillingInvoice);
  }
}(this, function(ApiClient, BillingInvoice) {
  'use strict';


  /**
   * The BillingInvoicesResponse model module.
   * @module model/BillingInvoicesResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingInvoicesResponse</code>.
   * Defines a billing invoice response object.
   * @alias module:model/BillingInvoicesResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingInvoicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingInvoicesResponse} obj Optional instance to populate.
   * @return {module:model/BillingInvoicesResponse} The populated <code>BillingInvoicesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingInvoices')) {
        obj['billingInvoices'] = ApiClient.convertToType(data['billingInvoices'], [BillingInvoice]);
      }
      if (data.hasOwnProperty('nextUri')) {
        obj['nextUri'] = ApiClient.convertToType(data['nextUri'], 'String');
      }
      if (data.hasOwnProperty('previousUri')) {
        obj['previousUri'] = ApiClient.convertToType(data['previousUri'], 'String');
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
   * The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null. 
   * @member {String} nextUri
   */
  exports.prototype['nextUri'] = undefined;
  /**
   * The postal code for the billing address.
   * @member {String} previousUri
   */
  exports.prototype['previousUri'] = undefined;



  return exports;
}));


