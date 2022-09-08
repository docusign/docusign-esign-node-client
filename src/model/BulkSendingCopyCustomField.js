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
    root.Docusign.BulkSendingCopyCustomField = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendingCopyCustomField model module.
   * @module model/BulkSendingCopyCustomField
   */

  /**
   * Constructs a new <code>BulkSendingCopyCustomField</code>.
   * This object contains details about a custom field for a bulk send copy. In a bulk send request, each custom field in the bulk send list must match a custom field in the envelope or template that you want to send.
   * @alias module:model/BulkSendingCopyCustomField
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingCopyCustomField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingCopyCustomField} obj Optional instance to populate.
   * @return {module:model/BulkSendingCopyCustomField} The populated <code>BulkSendingCopyCustomField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


