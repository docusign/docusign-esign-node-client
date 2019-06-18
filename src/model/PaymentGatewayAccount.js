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
    define(['ApiClient', 'model/PayPalLegacySettings', 'model/PaymentGatewayAccountSetting', 'model/PaymentMethodWithOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PayPalLegacySettings'), require('./PaymentGatewayAccountSetting'), require('./PaymentMethodWithOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PaymentGatewayAccount = factory(root.Docusign.ApiClient, root.Docusign.PayPalLegacySettings, root.Docusign.PaymentGatewayAccountSetting, root.Docusign.PaymentMethodWithOptions);
  }
}(this, function(ApiClient, PayPalLegacySettings, PaymentGatewayAccountSetting, PaymentMethodWithOptions) {
  'use strict';


  /**
   * The PaymentGatewayAccount model module.
   * @module model/PaymentGatewayAccount
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PaymentGatewayAccount</code>.
   * @alias module:model/PaymentGatewayAccount
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentGatewayAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentGatewayAccount} obj Optional instance to populate.
   * @return {module:model/PaymentGatewayAccount} The populated <code>PaymentGatewayAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('config')) {
        obj['config'] = PaymentGatewayAccountSetting.constructFromObject(data['config']);
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'String');
      }
      if (data.hasOwnProperty('isLegacy')) {
        obj['isLegacy'] = ApiClient.convertToType(data['isLegacy'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('paymentGateway')) {
        obj['paymentGateway'] = ApiClient.convertToType(data['paymentGateway'], 'String');
      }
      if (data.hasOwnProperty('paymentGatewayAccountId')) {
        obj['paymentGatewayAccountId'] = ApiClient.convertToType(data['paymentGatewayAccountId'], 'String');
      }
      if (data.hasOwnProperty('paymentGatewayDisplayName')) {
        obj['paymentGatewayDisplayName'] = ApiClient.convertToType(data['paymentGatewayDisplayName'], 'String');
      }
      if (data.hasOwnProperty('payPalLegacySettings')) {
        obj['payPalLegacySettings'] = PayPalLegacySettings.constructFromObject(data['payPalLegacySettings']);
      }
      if (data.hasOwnProperty('supportedCurrencies')) {
        obj['supportedCurrencies'] = ApiClient.convertToType(data['supportedCurrencies'], ['String']);
      }
      if (data.hasOwnProperty('supportedPaymentMethods')) {
        obj['supportedPaymentMethods'] = ApiClient.convertToType(data['supportedPaymentMethods'], ['String']);
      }
      if (data.hasOwnProperty('supportedPaymentMethodsWithOptions')) {
        obj['supportedPaymentMethodsWithOptions'] = ApiClient.convertToType(data['supportedPaymentMethodsWithOptions'], [PaymentMethodWithOptions]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentGatewayAccountSetting} config
   */
  exports.prototype['config'] = undefined;
  /**
   * 
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * 
   * @member {String} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;
  /**
   * 
   * @member {String} isLegacy
   */
  exports.prototype['isLegacy'] = undefined;
  /**
   * 
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * 
   * @member {String} paymentGateway
   */
  exports.prototype['paymentGateway'] = undefined;
  /**
   * 
   * @member {String} paymentGatewayAccountId
   */
  exports.prototype['paymentGatewayAccountId'] = undefined;
  /**
   * 
   * @member {String} paymentGatewayDisplayName
   */
  exports.prototype['paymentGatewayDisplayName'] = undefined;
  /**
   * @member {module:model/PayPalLegacySettings} payPalLegacySettings
   */
  exports.prototype['payPalLegacySettings'] = undefined;
  /**
   * 
   * @member {Array.<String>} supportedCurrencies
   */
  exports.prototype['supportedCurrencies'] = undefined;
  /**
   * 
   * @member {Array.<String>} supportedPaymentMethods
   */
  exports.prototype['supportedPaymentMethods'] = undefined;
  /**
   * 
   * @member {Array.<module:model/PaymentMethodWithOptions>} supportedPaymentMethodsWithOptions
   */
  exports.prototype['supportedPaymentMethodsWithOptions'] = undefined;



  return exports;
}));


