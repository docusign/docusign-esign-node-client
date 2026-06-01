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
    root.Docusign.BulkSendingCopyPrefillTab = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendingCopyPrefillTab model module.
   * @module model/BulkSendingCopyPrefillTab
   */

  /**
   * Constructs a new <code>BulkSendingCopyPrefillTab</code>.
   * @alias module:model/BulkSendingCopyPrefillTab
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingCopyPrefillTab</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingCopyPrefillTab} obj Optional instance to populate.
   * @return {module:model/BulkSendingCopyPrefillTab} The populated <code>BulkSendingCopyPrefillTab</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('initialValue')) {
        obj['initialValue'] = ApiClient.convertToType(data['initialValue'], 'String');
      }
      if (data.hasOwnProperty('tabLabel')) {
        obj['tabLabel'] = ApiClient.convertToType(data['tabLabel'], 'String');
      }
    }
    return obj;
  }

  /**
   * The original value of the tab.
   * @member {String} initialValue
   */
  exports.prototype['initialValue'] = undefined;
  /**
   * The label string associated with the tab.
   * @member {String} tabLabel
   */
  exports.prototype['tabLabel'] = undefined;



  return exports;
}));


