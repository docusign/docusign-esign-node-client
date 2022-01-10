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
    root.Docusign.BulkSendBatchError = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendBatchError model module.
   * @module model/BulkSendBatchError
   */

  /**
   * Constructs a new <code>BulkSendBatchError</code>.
   * @alias module:model/BulkSendBatchError
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendBatchError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendBatchError} obj Optional instance to populate.
   * @return {module:model/BulkSendBatchError} The populated <code>BulkSendBatchError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('errorDetail')) {
        obj['errorDetail'] = ApiClient.convertToType(data['errorDetail'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * 
   * @member {String} errorDetail
   */
  exports.prototype['errorDetail'] = undefined;



  return exports;
}));


