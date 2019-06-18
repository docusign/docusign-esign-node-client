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
    define(['ApiClient', 'model/AccountAddress', 'model/AccountBillingPlan', 'model/BillingPlan', 'model/CreditCardInformation', 'model/DirectDebitProcessorInformation', 'model/PaymentProcessorInformation', 'model/ReferralInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountAddress'), require('./AccountBillingPlan'), require('./BillingPlan'), require('./CreditCardInformation'), require('./DirectDebitProcessorInformation'), require('./PaymentProcessorInformation'), require('./ReferralInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountBillingPlanResponse = factory(root.Docusign.ApiClient, root.Docusign.AccountAddress, root.Docusign.AccountBillingPlan, root.Docusign.BillingPlan, root.Docusign.CreditCardInformation, root.Docusign.DirectDebitProcessorInformation, root.Docusign.PaymentProcessorInformation, root.Docusign.ReferralInformation);
  }
}(this, function(ApiClient, AccountAddress, AccountBillingPlan, BillingPlan, CreditCardInformation, DirectDebitProcessorInformation, PaymentProcessorInformation, ReferralInformation) {
  'use strict';


  /**
   * The AccountBillingPlanResponse model module.
   * @module model/AccountBillingPlanResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountBillingPlanResponse</code>.
   * Defines an account billing plan response object.
   * @alias module:model/AccountBillingPlanResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountBillingPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountBillingPlanResponse} obj Optional instance to populate.
   * @return {module:model/AccountBillingPlanResponse} The populated <code>AccountBillingPlanResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = AccountAddress.constructFromObject(data['billingAddress']);
      }
      if (data.hasOwnProperty('billingAddressIsCreditCardAddress')) {
        obj['billingAddressIsCreditCardAddress'] = ApiClient.convertToType(data['billingAddressIsCreditCardAddress'], 'String');
      }
      if (data.hasOwnProperty('billingPlan')) {
        obj['billingPlan'] = AccountBillingPlan.constructFromObject(data['billingPlan']);
      }
      if (data.hasOwnProperty('creditCardInformation')) {
        obj['creditCardInformation'] = CreditCardInformation.constructFromObject(data['creditCardInformation']);
      }
      if (data.hasOwnProperty('directDebitProcessorInformation')) {
        obj['directDebitProcessorInformation'] = DirectDebitProcessorInformation.constructFromObject(data['directDebitProcessorInformation']);
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('paymentProcessorInformation')) {
        obj['paymentProcessorInformation'] = PaymentProcessorInformation.constructFromObject(data['paymentProcessorInformation']);
      }
      if (data.hasOwnProperty('referralInformation')) {
        obj['referralInformation'] = ReferralInformation.constructFromObject(data['referralInformation']);
      }
      if (data.hasOwnProperty('successorPlans')) {
        obj['successorPlans'] = ApiClient.convertToType(data['successorPlans'], [BillingPlan]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountAddress} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
  /**
   * When set to **true**, the credit card address information is the same as that returned as the billing address. If false, then the billing address is considered a billing contact address, and the credit card address can be different.
   * @member {String} billingAddressIsCreditCardAddress
   */
  exports.prototype['billingAddressIsCreditCardAddress'] = undefined;
  /**
   * @member {module:model/AccountBillingPlan} billingPlan
   */
  exports.prototype['billingPlan'] = undefined;
  /**
   * @member {module:model/CreditCardInformation} creditCardInformation
   */
  exports.prototype['creditCardInformation'] = undefined;
  /**
   * @member {module:model/DirectDebitProcessorInformation} directDebitProcessorInformation
   */
  exports.prototype['directDebitProcessorInformation'] = undefined;
  /**
   * 
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * @member {module:model/PaymentProcessorInformation} paymentProcessorInformation
   */
  exports.prototype['paymentProcessorInformation'] = undefined;
  /**
   * @member {module:model/ReferralInformation} referralInformation
   */
  exports.prototype['referralInformation'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BillingPlan>} successorPlans
   */
  exports.prototype['successorPlans'] = undefined;



  return exports;
}));


