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
    root.Docusign.PurchasedEnvelopesInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PurchasedEnvelopesInformation model module.
   * @module model/PurchasedEnvelopesInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PurchasedEnvelopesInformation</code>.
   * @alias module:model/PurchasedEnvelopesInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PurchasedEnvelopesInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PurchasedEnvelopesInformation} obj Optional instance to populate.
   * @return {module:model/PurchasedEnvelopesInformation} The populated <code>PurchasedEnvelopesInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('appName')) {
        obj['appName'] = ApiClient.convertToType(data['appName'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('platform')) {
        obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
      }
      if (data.hasOwnProperty('receiptData')) {
        obj['receiptData'] = ApiClient.convertToType(data['receiptData'], 'String');
      }
      if (data.hasOwnProperty('storeName')) {
        obj['storeName'] = ApiClient.convertToType(data['storeName'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The total amount of the purchase.
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The AppName of the client application.
   * @member {String} appName
   */
  exports.prototype['appName'] = undefined;
  /**
   * Specifies the ISO currency code of the purchase. This is based on the ISO 4217 currency code information.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * The Platform of the client application
   * @member {String} platform
   */
  exports.prototype['platform'] = undefined;
  /**
   * The Product ID from the AppStore.
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * The quantity of envelopes to add to the account.
   * @member {String} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * The encrypted Base64 encoded receipt data.
   * @member {String} receiptData
   */
  exports.prototype['receiptData'] = undefined;
  /**
   * The name of the AppStore.
   * @member {String} storeName
   */
  exports.prototype['storeName'] = undefined;
  /**
   * Specifies the Transaction ID from the AppStore.
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;



  return exports;
}));


