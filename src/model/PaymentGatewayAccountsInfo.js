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
    define(['ApiClient', 'model/PaymentGatewayAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentGatewayAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PaymentGatewayAccountsInfo = factory(root.Docusign.ApiClient, root.Docusign.PaymentGatewayAccount);
  }
}(this, function(ApiClient, PaymentGatewayAccount) {
  'use strict';


  /**
   * The PaymentGatewayAccountsInfo model module.
   * @module model/PaymentGatewayAccountsInfo
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PaymentGatewayAccountsInfo</code>.
   * @alias module:model/PaymentGatewayAccountsInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentGatewayAccountsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentGatewayAccountsInfo} obj Optional instance to populate.
   * @return {module:model/PaymentGatewayAccountsInfo} The populated <code>PaymentGatewayAccountsInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentGatewayAccounts')) {
        obj['paymentGatewayAccounts'] = ApiClient.convertToType(data['paymentGatewayAccounts'], [PaymentGatewayAccount]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/PaymentGatewayAccount>} paymentGatewayAccounts
   */
  exports.prototype['paymentGatewayAccounts'] = undefined;



  return exports;
}));


