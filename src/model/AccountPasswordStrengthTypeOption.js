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
    root.Docusign.AccountPasswordStrengthTypeOption = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AccountPasswordStrengthTypeOption model module.
   * @module model/AccountPasswordStrengthTypeOption
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountPasswordStrengthTypeOption</code>.
   * @alias module:model/AccountPasswordStrengthTypeOption
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountPasswordStrengthTypeOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountPasswordStrengthTypeOption} obj Optional instance to populate.
   * @return {module:model/AccountPasswordStrengthTypeOption} The populated <code>AccountPasswordStrengthTypeOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('minimumLength')) {
        obj['minimumLength'] = ApiClient.convertToType(data['minimumLength'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeDigit')) {
        obj['passwordIncludeDigit'] = ApiClient.convertToType(data['passwordIncludeDigit'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeDigitOrSpecialCharacter')) {
        obj['passwordIncludeDigitOrSpecialCharacter'] = ApiClient.convertToType(data['passwordIncludeDigitOrSpecialCharacter'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeLowerCase')) {
        obj['passwordIncludeLowerCase'] = ApiClient.convertToType(data['passwordIncludeLowerCase'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeSpecialCharacter')) {
        obj['passwordIncludeSpecialCharacter'] = ApiClient.convertToType(data['passwordIncludeSpecialCharacter'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeUpperCase')) {
        obj['passwordIncludeUpperCase'] = ApiClient.convertToType(data['passwordIncludeUpperCase'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} minimumLength
   */
  exports.prototype['minimumLength'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeDigit
   */
  exports.prototype['passwordIncludeDigit'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeDigitOrSpecialCharacter
   */
  exports.prototype['passwordIncludeDigitOrSpecialCharacter'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeLowerCase
   */
  exports.prototype['passwordIncludeLowerCase'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeSpecialCharacter
   */
  exports.prototype['passwordIncludeSpecialCharacter'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeUpperCase
   */
  exports.prototype['passwordIncludeUpperCase'] = undefined;



  return exports;
}));


