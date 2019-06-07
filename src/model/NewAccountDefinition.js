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
    define(['ApiClient', 'model/AccountAddress', 'model/AccountSettingsInformation', 'model/CreditCardInformation', 'model/DirectDebitProcessorInformation', 'model/PaymentProcessorInformation', 'model/PlanInformation', 'model/ReferralInformation', 'model/SocialAccountInformation', 'model/UserInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountAddress'), require('./AccountSettingsInformation'), require('./CreditCardInformation'), require('./DirectDebitProcessorInformation'), require('./PaymentProcessorInformation'), require('./PlanInformation'), require('./ReferralInformation'), require('./SocialAccountInformation'), require('./UserInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NewAccountDefinition = factory(root.Docusign.ApiClient, root.Docusign.AccountAddress, root.Docusign.AccountSettingsInformation, root.Docusign.CreditCardInformation, root.Docusign.DirectDebitProcessorInformation, root.Docusign.PaymentProcessorInformation, root.Docusign.PlanInformation, root.Docusign.ReferralInformation, root.Docusign.SocialAccountInformation, root.Docusign.UserInformation);
  }
}(this, function(ApiClient, AccountAddress, AccountSettingsInformation, CreditCardInformation, DirectDebitProcessorInformation, PaymentProcessorInformation, PlanInformation, ReferralInformation, SocialAccountInformation, UserInformation) {
  'use strict';


  /**
   * The NewAccountDefinition model module.
   * @module model/NewAccountDefinition
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>NewAccountDefinition</code>.
   * @alias module:model/NewAccountDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NewAccountDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewAccountDefinition} obj Optional instance to populate.
   * @return {module:model/NewAccountDefinition} The populated <code>NewAccountDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('accountSettings')) {
        obj['accountSettings'] = AccountSettingsInformation.constructFromObject(data['accountSettings']);
      }
      if (data.hasOwnProperty('addressInformation')) {
        obj['addressInformation'] = AccountAddress.constructFromObject(data['addressInformation']);
      }
      if (data.hasOwnProperty('creditCardInformation')) {
        obj['creditCardInformation'] = CreditCardInformation.constructFromObject(data['creditCardInformation']);
      }
      if (data.hasOwnProperty('directDebitProcessorInformation')) {
        obj['directDebitProcessorInformation'] = DirectDebitProcessorInformation.constructFromObject(data['directDebitProcessorInformation']);
      }
      if (data.hasOwnProperty('distributorCode')) {
        obj['distributorCode'] = ApiClient.convertToType(data['distributorCode'], 'String');
      }
      if (data.hasOwnProperty('distributorPassword')) {
        obj['distributorPassword'] = ApiClient.convertToType(data['distributorPassword'], 'String');
      }
      if (data.hasOwnProperty('initialUser')) {
        obj['initialUser'] = UserInformation.constructFromObject(data['initialUser']);
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
      if (data.hasOwnProperty('socialAccountInformation')) {
        obj['socialAccountInformation'] = SocialAccountInformation.constructFromObject(data['socialAccountInformation']);
      }
    }
    return obj;
  }

  /**
   * The account name for the new account.
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * @member {module:model/AccountSettingsInformation} accountSettings
   */
  exports.prototype['accountSettings'] = undefined;
  /**
   * @member {module:model/AccountAddress} addressInformation
   */
  exports.prototype['addressInformation'] = undefined;
  /**
   * @member {module:model/CreditCardInformation} creditCardInformation
   */
  exports.prototype['creditCardInformation'] = undefined;
  /**
   * @member {module:model/DirectDebitProcessorInformation} directDebitProcessorInformation
   */
  exports.prototype['directDebitProcessorInformation'] = undefined;
  /**
   * The code that identifies the billing plan groups and plans for the new account.
   * @member {String} distributorCode
   */
  exports.prototype['distributorCode'] = undefined;
  /**
   * The password for the distributorCode.
   * @member {String} distributorPassword
   */
  exports.prototype['distributorPassword'] = undefined;
  /**
   * @member {module:model/UserInformation} initialUser
   */
  exports.prototype['initialUser'] = undefined;
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
   * @member {module:model/SocialAccountInformation} socialAccountInformation
   */
  exports.prototype['socialAccountInformation'] = undefined;



  return exports;
}));


