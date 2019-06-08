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
    root.Docusign.BrandResourceUrls = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BrandResourceUrls model module.
   * @module model/BrandResourceUrls
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BrandResourceUrls</code>.
   * @alias module:model/BrandResourceUrls
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandResourceUrls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandResourceUrls} obj Optional instance to populate.
   * @return {module:model/BrandResourceUrls} The populated <code>BrandResourceUrls</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('sending')) {
        obj['sending'] = ApiClient.convertToType(data['sending'], 'String');
      }
      if (data.hasOwnProperty('signing')) {
        obj['signing'] = ApiClient.convertToType(data['signing'], 'String');
      }
      if (data.hasOwnProperty('signingCaptive')) {
        obj['signingCaptive'] = ApiClient.convertToType(data['signingCaptive'], 'String');
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
   * @member {String} sending
   */
  exports.prototype['sending'] = undefined;
  /**
   * 
   * @member {String} signing
   */
  exports.prototype['signing'] = undefined;
  /**
   * 
   * @member {String} signingCaptive
   */
  exports.prototype['signingCaptive'] = undefined;



  return exports;
}));


