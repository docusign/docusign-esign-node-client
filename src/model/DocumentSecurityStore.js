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
    root.Docusign.DocumentSecurityStore = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DocumentSecurityStore model module.
   * @module model/DocumentSecurityStore
   */

  /**
   * Constructs a new <code>DocumentSecurityStore</code>.
   * @alias module:model/DocumentSecurityStore
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentSecurityStore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentSecurityStore} obj Optional instance to populate.
   * @return {module:model/DocumentSecurityStore} The populated <code>DocumentSecurityStore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('certificates')) {
        obj['certificates'] = ApiClient.convertToType(data['certificates'], ['String']);
      }
      if (data.hasOwnProperty('crls')) {
        obj['crls'] = ApiClient.convertToType(data['crls'], ['String']);
      }
      if (data.hasOwnProperty('ocsps')) {
        obj['ocsps'] = ApiClient.convertToType(data['ocsps'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} certificates
   */
  exports.prototype['certificates'] = undefined;
  /**
   * 
   * @member {Array.<String>} crls
   */
  exports.prototype['crls'] = undefined;
  /**
   * 
   * @member {Array.<String>} ocsps
   */
  exports.prototype['ocsps'] = undefined;



  return exports;
}));


