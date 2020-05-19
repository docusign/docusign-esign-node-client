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
    define(['ApiClient', 'model/AccountPasswordStrengthTypeOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountPasswordStrengthTypeOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountPasswordStrengthType = factory(root.Docusign.ApiClient, root.Docusign.AccountPasswordStrengthTypeOption);
  }
}(this, function(ApiClient, AccountPasswordStrengthTypeOption) {
  'use strict';


  /**
   * The AccountPasswordStrengthType model module.
   * @module model/AccountPasswordStrengthType
   */

  /**
   * Constructs a new <code>AccountPasswordStrengthType</code>.
   * @alias module:model/AccountPasswordStrengthType
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountPasswordStrengthType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountPasswordStrengthType} obj Optional instance to populate.
   * @return {module:model/AccountPasswordStrengthType} The populated <code>AccountPasswordStrengthType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [AccountPasswordStrengthTypeOption]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/AccountPasswordStrengthTypeOption>} options
   */
  exports.prototype['options'] = undefined;



  return exports;
}));


