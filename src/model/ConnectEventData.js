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
    root.Docusign.ConnectEventData = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConnectEventData model module.
   * @module model/ConnectEventData
   */

  /**
   * Constructs a new <code>ConnectEventData</code>.
   * This object lets you choose the data format of your Connect response. For  more information about using this object, see [Connect webhooks with JSON notifications](https://www.docusign.com/blog/developers/connect-webhooks-json-notifications). 
   * @alias module:model/ConnectEventData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectEventData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectEventData} obj Optional instance to populate.
   * @return {module:model/ConnectEventData} The populated <code>ConnectEventData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('includeData')) {
        obj['includeData'] = ApiClient.convertToType(data['includeData'], ['String']);
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * 
   * @member {Array.<String>} includeData
   */
  exports.prototype['includeData'] = undefined;
  /**
   * 
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


