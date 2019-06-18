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
    define(['ApiClient', 'model/Province'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Province'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Country = factory(root.Docusign.ApiClient, root.Docusign.Province);
  }
}(this, function(ApiClient, Province) {
  'use strict';


  /**
   * The Country model module.
   * @module model/Country
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Country</code>.
   * @alias module:model/Country
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Country} obj Optional instance to populate.
   * @return {module:model/Country} The populated <code>Country</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isoCode')) {
        obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('provinces')) {
        obj['provinces'] = ApiClient.convertToType(data['provinces'], [Province]);
      }
      if (data.hasOwnProperty('provinceValidated')) {
        obj['provinceValidated'] = ApiClient.convertToType(data['provinceValidated'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} isoCode
   */
  exports.prototype['isoCode'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Province>} provinces
   */
  exports.prototype['provinces'] = undefined;
  /**
   * 
   * @member {String} provinceValidated
   */
  exports.prototype['provinceValidated'] = undefined;



  return exports;
}));


