/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    root.Docusign.ConnectionInstance = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConnectionInstance model module.
   * @module model/ConnectionInstance
   */

  /**
   * Constructs a new <code>ConnectionInstance</code>.
   * @alias module:model/ConnectionInstance
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectionInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectionInstance} obj Optional instance to populate.
   * @return {module:model/ConnectionInstance} The populated <code>ConnectionInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connectionKey')) {
        obj['connectionKey'] = ApiClient.convertToType(data['connectionKey'], 'String');
      }
      if (data.hasOwnProperty('connectionValue')) {
        obj['connectionValue'] = ApiClient.convertToType(data['connectionValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} connectionKey
   */
  exports.prototype['connectionKey'] = undefined;
  /**
   * 
   * @member {String} connectionValue
   */
  exports.prototype['connectionValue'] = undefined;



  return exports;
}));


