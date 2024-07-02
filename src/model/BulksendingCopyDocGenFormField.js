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
    define(['ApiClient', 'model/BulkSendingCopyDocGenFormFieldRowValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkSendingCopyDocGenFormFieldRowValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulksendingCopyDocGenFormField = factory(root.Docusign.ApiClient, root.Docusign.BulkSendingCopyDocGenFormFieldRowValue);
  }
}(this, function(ApiClient, BulkSendingCopyDocGenFormFieldRowValue) {
  'use strict';


  /**
   * The BulksendingCopyDocGenFormField model module.
   * @module model/BulksendingCopyDocGenFormField
   */

  /**
   * Constructs a new <code>BulksendingCopyDocGenFormField</code>.
   * @alias module:model/BulksendingCopyDocGenFormField
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulksendingCopyDocGenFormField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulksendingCopyDocGenFormField} obj Optional instance to populate.
   * @return {module:model/BulksendingCopyDocGenFormField} The populated <code>BulksendingCopyDocGenFormField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rowValues')) {
        obj['rowValues'] = ApiClient.convertToType(data['rowValues'], [BulkSendingCopyDocGenFormFieldRowValue]);
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
   * 
   * @member {Array.<module:model/BulkSendingCopyDocGenFormFieldRowValue>} rowValues
   */
  exports.prototype['rowValues'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


