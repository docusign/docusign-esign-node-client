/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PaymentGatewayAccount = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
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

      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
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
    }
    return obj;
  }

  /**
   * 
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
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



  return exports;
}));


