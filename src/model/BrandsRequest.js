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
    define(['ApiClient', 'model/BrandRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BrandRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BrandsRequest = factory(root.Docusign.ApiClient, root.Docusign.BrandRequest);
  }
}(this, function(ApiClient, BrandRequest) {
  'use strict';


  /**
   * The BrandsRequest model module.
   * @module model/BrandsRequest
   */

  /**
   * Constructs a new <code>BrandsRequest</code>.
   * Details about one or more brands.
   * @alias module:model/BrandsRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandsRequest} obj Optional instance to populate.
   * @return {module:model/BrandsRequest} The populated <code>BrandsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('brands')) {
        obj['brands'] = ApiClient.convertToType(data['brands'], [BrandRequest]);
      }
    }
    return obj;
  }

  /**
   * The list of brands.
   * @member {Array.<module:model/BrandRequest>} brands
   */
  exports.prototype['brands'] = undefined;



  return exports;
}));


