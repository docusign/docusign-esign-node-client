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
    define(['ApiClient', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ListItem = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PropertyMetadata) {
  'use strict';


  /**
   * The ListItem model module.
   * @module model/ListItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ListItem</code>.
   * @alias module:model/ListItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ListItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListItem} obj Optional instance to populate.
   * @return {module:model/ListItem} The populated <code>ListItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('selected')) {
        obj['selected'] = ApiClient.convertToType(data['selected'], 'String');
      }
      if (data.hasOwnProperty('selectedMetadata')) {
        obj['selectedMetadata'] = PropertyMetadata.constructFromObject(data['selectedMetadata']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('textMetadata')) {
        obj['textMetadata'] = PropertyMetadata.constructFromObject(data['textMetadata']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('valueMetadata')) {
        obj['valueMetadata'] = PropertyMetadata.constructFromObject(data['valueMetadata']);
      }
    }
    return obj;
  }

  /**
   * When set to **true**, indicates that this item is the default selection shown to a signer.   Only one selection can be set as the default.
   * @member {String} selected
   */
  exports.prototype['selected'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} selectedMetadata
   */
  exports.prototype['selectedMetadata'] = undefined;
  /**
   * Specifies the text that is shown in the dropdown list. 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} textMetadata
   */
  exports.prototype['textMetadata'] = undefined;
  /**
   * Specifies the value that is used when the list item is selected.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} valueMetadata
   */
  exports.prototype['valueMetadata'] = undefined;



  return exports;
}));


