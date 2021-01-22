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
    root.Docusign.SignatureProperties = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SignatureProperties model module.
   * @module model/SignatureProperties
   */

  /**
   * Constructs a new <code>SignatureProperties</code>.
   * @alias module:model/SignatureProperties
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignatureProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureProperties} obj Optional instance to populate.
   * @return {module:model/SignatureProperties} The populated <code>SignatureProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
      }
      if (data.hasOwnProperty('subFilter')) {
        obj['subFilter'] = ApiClient.convertToType(data['subFilter'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * 
   * @member {String} subFilter
   */
  exports.prototype['subFilter'] = undefined;



  return exports;
}));


