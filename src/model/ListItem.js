/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
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
    root.Docusign.ListItem = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
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
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
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
   * Specifies the text that is shown in the dropdown list. 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Specifies the value that is used when the list item is selected.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


