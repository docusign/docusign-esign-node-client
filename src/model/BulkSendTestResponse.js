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
    root.Docusign.BulkSendTestResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendTestResponse model module.
   * @module model/BulkSendTestResponse
   */

  /**
   * Constructs a new <code>BulkSendTestResponse</code>.
   * This object contains the results of a bulk send test.
   * @alias module:model/BulkSendTestResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendTestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendTestResponse} obj Optional instance to populate.
   * @return {module:model/BulkSendTestResponse} The populated <code>BulkSendTestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canBeSent')) {
        obj['canBeSent'] = ApiClient.convertToType(data['canBeSent'], 'Boolean');
      }
      if (data.hasOwnProperty('validationErrorDetails')) {
        obj['validationErrorDetails'] = ApiClient.convertToType(data['validationErrorDetails'], ['String']);
      }
      if (data.hasOwnProperty('validationErrors')) {
        obj['validationErrors'] = ApiClient.convertToType(data['validationErrors'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Boolean} canBeSent
   */
  exports.prototype['canBeSent'] = undefined;
  /**
   * 
   * @member {Array.<String>} validationErrorDetails
   */
  exports.prototype['validationErrorDetails'] = undefined;
  /**
   * 
   * @member {Array.<String>} validationErrors
   */
  exports.prototype['validationErrors'] = undefined;



  return exports;
}));


