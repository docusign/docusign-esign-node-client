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
    define(['ApiClient', 'model/Brand'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Brand'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BrandsResponse = factory(root.Docusign.ApiClient, root.Docusign.Brand);
  }
}(this, function(ApiClient, Brand) {
  'use strict';


  /**
   * The BrandsResponse model module.
   * @module model/BrandsResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BrandsResponse</code>.
   * @alias module:model/BrandsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandsResponse} obj Optional instance to populate.
   * @return {module:model/BrandsResponse} The populated <code>BrandsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('brands')) {
        obj['brands'] = ApiClient.convertToType(data['brands'], [Brand]);
      }
      if (data.hasOwnProperty('recipientBrandIdDefault')) {
        obj['recipientBrandIdDefault'] = ApiClient.convertToType(data['recipientBrandIdDefault'], 'String');
      }
      if (data.hasOwnProperty('senderBrandIdDefault')) {
        obj['senderBrandIdDefault'] = ApiClient.convertToType(data['senderBrandIdDefault'], 'String');
      }
    }
    return obj;
  }

  /**
   * The list of brands.
   * @member {Array.<module:model/Brand>} brands
   */
  exports.prototype['brands'] = undefined;
  /**
   * The brand seen by envelope recipients when a brand is not explicitly set.
   * @member {String} recipientBrandIdDefault
   */
  exports.prototype['recipientBrandIdDefault'] = undefined;
  /**
   * The brand seen by envelope senders when a brand is not explicitly set.
   * @member {String} senderBrandIdDefault
   */
  exports.prototype['senderBrandIdDefault'] = undefined;



  return exports;
}));


