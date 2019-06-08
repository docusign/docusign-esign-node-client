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
    define(['ApiClient', 'model/NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SupportedLanguages = factory(root.Docusign.ApiClient, root.Docusign.NameValue);
  }
}(this, function(ApiClient, NameValue) {
  'use strict';


  /**
   * The SupportedLanguages model module.
   * @module model/SupportedLanguages
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SupportedLanguages</code>.
   * @alias module:model/SupportedLanguages
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SupportedLanguages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SupportedLanguages} obj Optional instance to populate.
   * @return {module:model/SupportedLanguages} The populated <code>SupportedLanguages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('languages')) {
        obj['languages'] = ApiClient.convertToType(data['languages'], [NameValue]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/NameValue>} languages
   */
  exports.prototype['languages'] = undefined;



  return exports;
}));


