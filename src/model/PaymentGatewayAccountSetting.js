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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PaymentGatewayAccountSetting = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PaymentGatewayAccountSetting model module.
   * @module model/PaymentGatewayAccountSetting
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PaymentGatewayAccountSetting</code>.
   * @alias module:model/PaymentGatewayAccountSetting
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentGatewayAccountSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentGatewayAccountSetting} obj Optional instance to populate.
   * @return {module:model/PaymentGatewayAccountSetting} The populated <code>PaymentGatewayAccountSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiFields')) {
        obj['apiFields'] = ApiClient.convertToType(data['apiFields'], 'String');
      }
      if (data.hasOwnProperty('authorizationCode')) {
        obj['authorizationCode'] = ApiClient.convertToType(data['authorizationCode'], 'String');
      }
      if (data.hasOwnProperty('credentialStatus')) {
        obj['credentialStatus'] = ApiClient.convertToType(data['credentialStatus'], 'String');
      }
      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} apiFields
   */
  exports.prototype['apiFields'] = undefined;
  /**
   * 
   * @member {String} authorizationCode
   */
  exports.prototype['authorizationCode'] = undefined;
  /**
   * 
   * @member {String} credentialStatus
   */
  exports.prototype['credentialStatus'] = undefined;
  /**
   * 
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;



  return exports;
}));


