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
    root.Docusign.AppStoreReceipt = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AppStoreReceipt model module.
   * @module model/AppStoreReceipt
   */

  /**
   * Constructs a new <code>AppStoreReceipt</code>.
   * Contains information about an APP store receipt.
   * @alias module:model/AppStoreReceipt
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AppStoreReceipt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppStoreReceipt} obj Optional instance to populate.
   * @return {module:model/AppStoreReceipt} The populated <code>AppStoreReceipt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('downgradeProductId')) {
        obj['downgradeProductId'] = ApiClient.convertToType(data['downgradeProductId'], 'String');
      }
      if (data.hasOwnProperty('isDowngradeCancellation')) {
        obj['isDowngradeCancellation'] = ApiClient.convertToType(data['isDowngradeCancellation'], 'String');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('receiptData')) {
        obj['receiptData'] = ApiClient.convertToType(data['receiptData'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} downgradeProductId
   */
  exports.prototype['downgradeProductId'] = undefined;
  /**
   * 
   * @member {String} isDowngradeCancellation
   */
  exports.prototype['isDowngradeCancellation'] = undefined;
  /**
   * 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} receiptData
   */
  exports.prototype['receiptData'] = undefined;



  return exports;
}));


