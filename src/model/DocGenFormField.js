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
    root.Docusign.DocGenFormField = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DocGenFormField model module.
   * @module model/DocGenFormField
   */

  /**
   * Constructs a new <code>DocGenFormField</code>.
   * @alias module:model/DocGenFormField
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocGenFormField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocGenFormField} obj Optional instance to populate.
   * @return {module:model/DocGenFormField} The populated <code>DocGenFormField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * When set to **true**, the signer is required to fill out this tab
   * @member {String} required
   */
  exports.prototype['required'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


