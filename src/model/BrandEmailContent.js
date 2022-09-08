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
    root.Docusign.BrandEmailContent = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BrandEmailContent model module.
   * @module model/BrandEmailContent
   */

  /**
   * Constructs a new <code>BrandEmailContent</code>.
   * Deprecated.
   * @alias module:model/BrandEmailContent
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandEmailContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandEmailContent} obj Optional instance to populate.
   * @return {module:model/BrandEmailContent} The populated <code>BrandEmailContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('emailContentType')) {
        obj['emailContentType'] = ApiClient.convertToType(data['emailContentType'], 'String');
      }
      if (data.hasOwnProperty('emailToLink')) {
        obj['emailToLink'] = ApiClient.convertToType(data['emailToLink'], 'String');
      }
      if (data.hasOwnProperty('linkText')) {
        obj['linkText'] = ApiClient.convertToType(data['linkText'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * 
   * @member {String} emailContentType
   */
  exports.prototype['emailContentType'] = undefined;
  /**
   * 
   * @member {String} emailToLink
   */
  exports.prototype['emailToLink'] = undefined;
  /**
   * 
   * @member {String} linkText
   */
  exports.prototype['linkText'] = undefined;



  return exports;
}));


