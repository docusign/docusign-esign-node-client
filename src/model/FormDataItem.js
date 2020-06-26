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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FormDataItem = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The FormDataItem model module.
   * @module model/FormDataItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>FormDataItem</code>.
   * @alias module:model/FormDataItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FormDataItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormDataItem} obj Optional instance to populate.
   * @return {module:model/FormDataItem} The populated <code>FormDataItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('listSelectedValue')) {
        obj['listSelectedValue'] = ApiClient.convertToType(data['listSelectedValue'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('originalValue')) {
        obj['originalValue'] = ApiClient.convertToType(data['originalValue'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} listSelectedValue
   */
  exports.prototype['listSelectedValue'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The initial value of the tab when it was sent to the recipient. 
   * @member {String} originalValue
   */
  exports.prototype['originalValue'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


