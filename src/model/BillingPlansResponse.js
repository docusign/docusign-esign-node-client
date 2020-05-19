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
    define(['ApiClient', 'model/BillingPlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingPlan'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingPlansResponse = factory(root.Docusign.ApiClient, root.Docusign.BillingPlan);
  }
}(this, function(ApiClient, BillingPlan) {
  'use strict';


  /**
   * The BillingPlansResponse model module.
   * @module model/BillingPlansResponse
   */

  /**
   * Constructs a new <code>BillingPlansResponse</code>.
   * Defines a billing plans response object.
   * @alias module:model/BillingPlansResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPlansResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPlansResponse} obj Optional instance to populate.
   * @return {module:model/BillingPlansResponse} The populated <code>BillingPlansResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingPlans')) {
        obj['billingPlans'] = ApiClient.convertToType(data['billingPlans'], [BillingPlan]);
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {Array.<module:model/BillingPlan>} billingPlans
   */
  exports.prototype['billingPlans'] = undefined;



  return exports;
}));


