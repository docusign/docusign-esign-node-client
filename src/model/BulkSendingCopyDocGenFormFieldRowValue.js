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
    define(['ApiClient', 'model/BulksendingCopyDocGenFormField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulksendingCopyDocGenFormField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendingCopyDocGenFormFieldRowValue = factory(root.Docusign.ApiClient, root.Docusign.BulksendingCopyDocGenFormField);
  }
}(this, function(ApiClient, BulksendingCopyDocGenFormField) {
  'use strict';


  /**
   * The BulkSendingCopyDocGenFormFieldRowValue model module.
   * @module model/BulkSendingCopyDocGenFormFieldRowValue
   */

  /**
   * Constructs a new <code>BulkSendingCopyDocGenFormFieldRowValue</code>.
   * @alias module:model/BulkSendingCopyDocGenFormFieldRowValue
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingCopyDocGenFormFieldRowValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingCopyDocGenFormFieldRowValue} obj Optional instance to populate.
   * @return {module:model/BulkSendingCopyDocGenFormFieldRowValue} The populated <code>BulkSendingCopyDocGenFormFieldRowValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('docGenFormFieldList')) {
        obj['docGenFormFieldList'] = ApiClient.convertToType(data['docGenFormFieldList'], [BulksendingCopyDocGenFormField]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/BulksendingCopyDocGenFormField>} docGenFormFieldList
   */
  exports.prototype['docGenFormFieldList'] = undefined;



  return exports;
}));


