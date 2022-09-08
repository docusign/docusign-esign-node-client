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
    root.Docusign.BrandLogos = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BrandLogos model module.
   * @module model/BrandLogos
   */

  /**
   * Constructs a new <code>BrandLogos</code>.
   * The URIs for retrieving the logos that are associated with the brand.  These are read-only properties that provide a URI to logos in use. To update a logo use [AccountBrands: updateLogo](/docs/esign-rest-api/reference/accounts/accountbrands/updatelogo/). 
   * @alias module:model/BrandLogos
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandLogos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandLogos} obj Optional instance to populate.
   * @return {module:model/BrandLogos} The populated <code>BrandLogos</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('primary')) {
        obj['primary'] = ApiClient.convertToType(data['primary'], 'String');
      }
      if (data.hasOwnProperty('secondary')) {
        obj['secondary'] = ApiClient.convertToType(data['secondary'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {String} primary
   */
  exports.prototype['primary'] = undefined;
  /**
   * 
   * @member {String} secondary
   */
  exports.prototype['secondary'] = undefined;



  return exports;
}));


