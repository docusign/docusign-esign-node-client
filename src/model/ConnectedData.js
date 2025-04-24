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
    root.Docusign.ConnectedData = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConnectedData model module.
   * @module model/ConnectedData
   */

  /**
   * Constructs a new <code>ConnectedData</code>.
   * @alias module:model/ConnectedData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectedData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectedData} obj Optional instance to populate.
   * @return {module:model/ConnectedData} The populated <code>ConnectedData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('propertyName')) {
        obj['propertyName'] = ApiClient.convertToType(data['propertyName'], 'String');
      }
      if (data.hasOwnProperty('supportedOperation')) {
        obj['supportedOperation'] = ApiClient.convertToType(data['supportedOperation'], 'String');
      }
      if (data.hasOwnProperty('supportedUri')) {
        obj['supportedUri'] = ApiClient.convertToType(data['supportedUri'], 'String');
      }
      if (data.hasOwnProperty('typeName')) {
        obj['typeName'] = ApiClient.convertToType(data['typeName'], 'String');
      }
      if (data.hasOwnProperty('typeSystemNamespace')) {
        obj['typeSystemNamespace'] = ApiClient.convertToType(data['typeSystemNamespace'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} propertyName
   */
  exports.prototype['propertyName'] = undefined;
  /**
   * 
   * @member {String} supportedOperation
   */
  exports.prototype['supportedOperation'] = undefined;
  /**
   * 
   * @member {String} supportedUri
   */
  exports.prototype['supportedUri'] = undefined;
  /**
   * 
   * @member {String} typeName
   */
  exports.prototype['typeName'] = undefined;
  /**
   * 
   * @member {String} typeSystemNamespace
   */
  exports.prototype['typeSystemNamespace'] = undefined;



  return exports;
}));


