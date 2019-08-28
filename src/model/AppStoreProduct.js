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
    root.Docusign.AppStoreProduct = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AppStoreProduct model module.
   * @module model/AppStoreProduct
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AppStoreProduct</code>.
   * Contains information about an APP store product.
   * @alias module:model/AppStoreProduct
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AppStoreProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppStoreProduct} obj Optional instance to populate.
   * @return {module:model/AppStoreProduct} The populated <code>AppStoreProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('marketPlace')) {
        obj['marketPlace'] = ApiClient.convertToType(data['marketPlace'], 'String');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} marketPlace
   */
  exports.prototype['marketPlace'] = undefined;
  /**
   * The Product ID from the AppStore.
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;



  return exports;
}));


