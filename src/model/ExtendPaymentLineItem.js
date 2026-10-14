/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    root.Docusign.ExtendPaymentLineItem = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ExtendPaymentLineItem model module.
   * @module model/ExtendPaymentLineItem
   */

  /**
   * Constructs a new <code>ExtendPaymentLineItem</code>.
   * @alias module:model/ExtendPaymentLineItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExtendPaymentLineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendPaymentLineItem} obj Optional instance to populate.
   * @return {module:model/ExtendPaymentLineItem} The populated <code>ExtendPaymentLineItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountReference')) {
        obj['amountReference'] = ApiClient.convertToType(data['amountReference'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('priceId')) {
        obj['priceId'] = ApiClient.convertToType(data['priceId'], 'String');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('unitAmount')) {
        obj['unitAmount'] = ApiClient.convertToType(data['unitAmount'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} amountReference
   */
  exports.prototype['amountReference'] = undefined;
  /**
   * 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} priceId
   */
  exports.prototype['priceId'] = undefined;
  /**
   * 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * 
   * @member {String} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} unitAmount
   */
  exports.prototype['unitAmount'] = undefined;



  return exports;
}));


