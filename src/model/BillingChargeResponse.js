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
    define(['ApiClient', 'model/BillingCharge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingCharge'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingChargeResponse = factory(root.Docusign.ApiClient, root.Docusign.BillingCharge);
  }
}(this, function(ApiClient, BillingCharge) {
  'use strict';


  /**
   * The BillingChargeResponse model module.
   * @module model/BillingChargeResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingChargeResponse</code>.
   * Defines a billing charge response object.
   * @alias module:model/BillingChargeResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingChargeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingChargeResponse} obj Optional instance to populate.
   * @return {module:model/BillingChargeResponse} The populated <code>BillingChargeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingChargeItems')) {
        obj['billingChargeItems'] = ApiClient.convertToType(data['billingChargeItems'], [BillingCharge]);
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {Array.<module:model/BillingCharge>} billingChargeItems
   */
  exports.prototype['billingChargeItems'] = undefined;



  return exports;
}));


