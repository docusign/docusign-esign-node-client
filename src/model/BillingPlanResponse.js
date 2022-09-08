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
    root.Docusign.BillingPlanResponse = factory(root.Docusign.ApiClient, root.Docusign.BillingPlan);
  }
}(this, function(ApiClient, BillingPlan) {
  'use strict';


  /**
   * The BillingPlanResponse model module.
   * @module model/BillingPlanResponse
   */

  /**
   * Constructs a new <code>BillingPlanResponse</code>.
   * Defines a billing plan response object.
   * @alias module:model/BillingPlanResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPlanResponse} obj Optional instance to populate.
   * @return {module:model/BillingPlanResponse} The populated <code>BillingPlanResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingPlan')) {
        obj['billingPlan'] = BillingPlan.constructFromObject(data['billingPlan']);
      }
      if (data.hasOwnProperty('successorPlans')) {
        obj['successorPlans'] = ApiClient.convertToType(data['successorPlans'], [BillingPlan]);
      }
    }
    return obj;
  }

  /**
   * An object that contains details about the billing plan.
   * @member {module:model/BillingPlan} billingPlan
   */
  exports.prototype['billingPlan'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BillingPlan>} successorPlans
   */
  exports.prototype['successorPlans'] = undefined;



  return exports;
}));


