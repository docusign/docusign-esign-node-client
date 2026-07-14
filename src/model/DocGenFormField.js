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
    define(['ApiClient', 'model/ConnectedObjectDetails', 'model/DocGenFormFieldOption', 'model/DocGenFormFieldRowValue', 'model/DocGenFormFieldValidation', 'model/DocGenFormat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectedObjectDetails'), require('./DocGenFormFieldOption'), require('./DocGenFormFieldRowValue'), require('./DocGenFormFieldValidation'), require('./DocGenFormat'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocGenFormField = factory(root.Docusign.ApiClient, root.Docusign.ConnectedObjectDetails, root.Docusign.DocGenFormFieldOption, root.Docusign.DocGenFormFieldRowValue, root.Docusign.DocGenFormFieldValidation, root.Docusign.DocGenFormat);
  }
}(this, function(ApiClient, ConnectedObjectDetails, DocGenFormFieldOption, DocGenFormFieldRowValue, DocGenFormFieldValidation, DocGenFormat) {
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

      if (data.hasOwnProperty('connectedObjectDetails')) {
        obj['connectedObjectDetails'] = ConnectedObjectDetails.constructFromObject(data['connectedObjectDetails']);
      }
      if (data.hasOwnProperty('defaultValue')) {
        obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], Object);
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = DocGenFormat.constructFromObject(data['format']);
      }
      if (data.hasOwnProperty('fullyQualifiedPath')) {
        obj['fullyQualifiedPath'] = ApiClient.convertToType(data['fullyQualifiedPath'], 'String');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [DocGenFormFieldOption]);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('predefinedValidation')) {
        obj['predefinedValidation'] = ApiClient.convertToType(data['predefinedValidation'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'String');
      }
      if (data.hasOwnProperty('rowValues')) {
        obj['rowValues'] = ApiClient.convertToType(data['rowValues'], [DocGenFormFieldRowValue]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('validation')) {
        obj['validation'] = DocGenFormFieldValidation.constructFromObject(data['validation']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/ConnectedObjectDetails} connectedObjectDetails
   */
  exports.prototype['connectedObjectDetails'] = undefined;
  /**
   * 
   * @member {String} defaultValue
   */
  exports.prototype['defaultValue'] = undefined;
  /**
   * 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 
   * @member {Object} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * 
   * @member {module:model/DocGenFormat} format
   */
  exports.prototype['format'] = undefined;
  /**
   * 
   * @member {String} fullyQualifiedPath
   */
  exports.prototype['fullyQualifiedPath'] = undefined;
  /**
   * 
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;
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
   * 
   * @member {Array.<module:model/DocGenFormFieldOption>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 
   * @member {String} predefinedValidation
   */
  exports.prototype['predefinedValidation'] = undefined;
  /**
   * 
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * When set to **true**, the signer is required to fill out this tab
   * @member {String} required
   */
  exports.prototype['required'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocGenFormFieldRowValue>} rowValues
   */
  exports.prototype['rowValues'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {module:model/DocGenFormFieldValidation} validation
   */
  exports.prototype['validation'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


