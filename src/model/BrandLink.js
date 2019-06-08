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
    root.Docusign.BrandLink = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BrandLink model module.
   * @module model/BrandLink
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BrandLink</code>.
   * @alias module:model/BrandLink
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandLink} obj Optional instance to populate.
   * @return {module:model/BrandLink} The populated <code>BrandLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('linkText')) {
        obj['linkText'] = ApiClient.convertToType(data['linkText'], 'String');
      }
      if (data.hasOwnProperty('linkType')) {
        obj['linkType'] = ApiClient.convertToType(data['linkType'], 'String');
      }
      if (data.hasOwnProperty('showLink')) {
        obj['showLink'] = ApiClient.convertToType(data['showLink'], 'String');
      }
      if (data.hasOwnProperty('urlOrMailTo')) {
        obj['urlOrMailTo'] = ApiClient.convertToType(data['urlOrMailTo'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} linkText
   */
  exports.prototype['linkText'] = undefined;
  /**
   * 
   * @member {String} linkType
   */
  exports.prototype['linkType'] = undefined;
  /**
   * 
   * @member {String} showLink
   */
  exports.prototype['showLink'] = undefined;
  /**
   * 
   * @member {String} urlOrMailTo
   */
  exports.prototype['urlOrMailTo'] = undefined;



  return exports;
}));


