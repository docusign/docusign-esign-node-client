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
    root.Docusign.TextCustomField = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The TextCustomField model module.
   * @module model/TextCustomField
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TextCustomField</code>.
   * @alias module:model/TextCustomField
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TextCustomField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextCustomField} obj Optional instance to populate.
   * @return {module:model/TextCustomField} The populated <code>TextCustomField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configurationType')) {
        obj['configurationType'] = ApiClient.convertToType(data['configurationType'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('fieldId')) {
        obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'String');
      }
      if (data.hasOwnProperty('show')) {
        obj['show'] = ApiClient.convertToType(data['show'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
   * @member {String} configurationType
   */
  exports.prototype['configurationType'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * An ID used to specify a custom field.
   * @member {String} fieldId
   */
  exports.prototype['fieldId'] = undefined;
  /**
   * The name of the custom field.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * When set to **true**, the signer is required to fill out this tab
   * @member {String} required
   */
  exports.prototype['required'] = undefined;
  /**
   * A boolean indicating if the value should be displayed.
   * @member {String} show
   */
  exports.prototype['show'] = undefined;
  /**
   * The value of the custom field.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


