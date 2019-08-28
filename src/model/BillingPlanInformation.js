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
    define(['ApiClient', 'model/AccountAddress', 'model/AppStoreReceipt', 'model/CreditCardInformation', 'model/DirectDebitProcessorInformation', 'model/PaymentProcessorInformation', 'model/PlanInformation', 'model/ReferralInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountAddress'), require('./AppStoreReceipt'), require('./CreditCardInformation'), require('./DirectDebitProcessorInformation'), require('./PaymentProcessorInformation'), require('./PlanInformation'), require('./ReferralInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingPlanInformation = factory(root.Docusign.ApiClient, root.Docusign.AccountAddress, root.Docusign.AppStoreReceipt, root.Docusign.CreditCardInformation, root.Docusign.DirectDebitProcessorInformation, root.Docusign.PaymentProcessorInformation, root.Docusign.PlanInformation, root.Docusign.ReferralInformation);
  }
}(this, function(ApiClient, AccountAddress, AppStoreReceipt, CreditCardInformation, DirectDebitProcessorInformation, PaymentProcessorInformation, PlanInformation, ReferralInformation) {
  'use strict';


  /**
   * The BillingPlanInformation model module.
   * @module model/BillingPlanInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingPlanInformation</code>.
   * @alias module:model/BillingPlanInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingPlanInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPlanInformation} obj Optional instance to populate.
   * @return {module:model/BillingPlanInformation} The populated <code>BillingPlanInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appStoreReceipt')) {
        obj['appStoreReceipt'] = AppStoreReceipt.constructFromObject(data['appStoreReceipt']);
      }
      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = AccountAddress.constructFromObject(data['billingAddress']);
      }
      if (data.hasOwnProperty('creditCardInformation')) {
        obj['creditCardInformation'] = CreditCardInformation.constructFromObject(data['creditCardInformation']);
      }
      if (data.hasOwnProperty('directDebitProcessorInformation')) {
        obj['directDebitProcessorInformation'] = DirectDebitProcessorInformation.constructFromObject(data['directDebitProcessorInformation']);
      }
      if (data.hasOwnProperty('downgradeReason')) {
        obj['downgradeReason'] = ApiClient.convertToType(data['downgradeReason'], 'String');
      }
      if (data.hasOwnProperty('enableSupport')) {
        obj['enableSupport'] = ApiClient.convertToType(data['enableSupport'], 'String');
      }
      if (data.hasOwnProperty('includedSeats')) {
        obj['includedSeats'] = ApiClient.convertToType(data['includedSeats'], 'String');
      }
      if (data.hasOwnProperty('incrementalSeats')) {
        obj['incrementalSeats'] = ApiClient.convertToType(data['incrementalSeats'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('paymentProcessorInformation')) {
        obj['paymentProcessorInformation'] = PaymentProcessorInformation.constructFromObject(data['paymentProcessorInformation']);
      }
      if (data.hasOwnProperty('planInformation')) {
        obj['planInformation'] = PlanInformation.constructFromObject(data['planInformation']);
      }
      if (data.hasOwnProperty('referralInformation')) {
        obj['referralInformation'] = ReferralInformation.constructFromObject(data['referralInformation']);
      }
      if (data.hasOwnProperty('renewalStatus')) {
        obj['renewalStatus'] = ApiClient.convertToType(data['renewalStatus'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountAmount')) {
        obj['saleDiscountAmount'] = ApiClient.convertToType(data['saleDiscountAmount'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountFixedAmount')) {
        obj['saleDiscountFixedAmount'] = ApiClient.convertToType(data['saleDiscountFixedAmount'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountPercent')) {
        obj['saleDiscountPercent'] = ApiClient.convertToType(data['saleDiscountPercent'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountPeriods')) {
        obj['saleDiscountPeriods'] = ApiClient.convertToType(data['saleDiscountPeriods'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountSeatPriceOverride')) {
        obj['saleDiscountSeatPriceOverride'] = ApiClient.convertToType(data['saleDiscountSeatPriceOverride'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AppStoreReceipt} appStoreReceipt
   */
  exports.prototype['appStoreReceipt'] = undefined;
  /**
   * @member {module:model/AccountAddress} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
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
   * @member {String} downgradeReason
   */
  exports.prototype['downgradeReason'] = undefined;
  /**
   * 
   * @member {String} enableSupport
   */
  exports.prototype['enableSupport'] = undefined;
  /**
   * The number of seats (users) included.
   * @member {String} includedSeats
   */
  exports.prototype['includedSeats'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} incrementalSeats
   */
  exports.prototype['incrementalSeats'] = undefined;
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
   * @member {module:model/PlanInformation} planInformation
   */
  exports.prototype['planInformation'] = undefined;
  /**
   * @member {module:model/ReferralInformation} referralInformation
   */
  exports.prototype['referralInformation'] = undefined;
  /**
   * 
   * @member {String} renewalStatus
   */
  exports.prototype['renewalStatus'] = undefined;
  /**
   * 
   * @member {String} saleDiscountAmount
   */
  exports.prototype['saleDiscountAmount'] = undefined;
  /**
   * 
   * @member {String} saleDiscountFixedAmount
   */
  exports.prototype['saleDiscountFixedAmount'] = undefined;
  /**
   * 
   * @member {String} saleDiscountPercent
   */
  exports.prototype['saleDiscountPercent'] = undefined;
  /**
   * 
   * @member {String} saleDiscountPeriods
   */
  exports.prototype['saleDiscountPeriods'] = undefined;
  /**
   * 
   * @member {String} saleDiscountSeatPriceOverride
   */
  exports.prototype['saleDiscountSeatPriceOverride'] = undefined;



  return exports;
}));


