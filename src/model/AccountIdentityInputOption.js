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
    root.Docusign.AccountIdentityInputOption = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AccountIdentityInputOption model module.
   * @module model/AccountIdentityInputOption
   */

  /**
   * Constructs a new <code>AccountIdentityInputOption</code>.
   * @alias module:model/AccountIdentityInputOption
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountIdentityInputOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountIdentityInputOption} obj Optional instance to populate.
   * @return {module:model/AccountIdentityInputOption} The populated <code>AccountIdentityInputOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isRequired')) {
        obj['isRequired'] = ApiClient.convertToType(data['isRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('optionName')) {
        obj['optionName'] = ApiClient.convertToType(data['optionName'], 'String');
      }
      if (data.hasOwnProperty('valueType')) {
        obj['valueType'] = ApiClient.convertToType(data['valueType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Boolean} isRequired
   */
  exports.prototype['isRequired'] = undefined;
  /**
   * 
   * @member {String} optionName
   */
  exports.prototype['optionName'] = undefined;
  /**
   * 
   * @member {String} valueType
   */
  exports.prototype['valueType'] = undefined;



  return exports;
}));


