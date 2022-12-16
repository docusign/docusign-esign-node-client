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
    root.Docusign.DocGenSyntaxError = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DocGenSyntaxError model module.
   * @module model/DocGenSyntaxError
   */

  /**
   * Constructs a new <code>DocGenSyntaxError</code>.
   * @alias module:model/DocGenSyntaxError
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocGenSyntaxError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocGenSyntaxError} obj Optional instance to populate.
   * @return {module:model/DocGenSyntaxError} The populated <code>DocGenSyntaxError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('tagIdentifier')) {
        obj['tagIdentifier'] = ApiClient.convertToType(data['tagIdentifier'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * 
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * 
   * @member {String} tagIdentifier
   */
  exports.prototype['tagIdentifier'] = undefined;



  return exports;
}));


