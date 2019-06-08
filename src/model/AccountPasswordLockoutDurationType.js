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
    root.Docusign.AccountPasswordLockoutDurationType = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AccountPasswordLockoutDurationType model module.
   * @module model/AccountPasswordLockoutDurationType
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountPasswordLockoutDurationType</code>.
   * @alias module:model/AccountPasswordLockoutDurationType
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountPasswordLockoutDurationType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountPasswordLockoutDurationType} obj Optional instance to populate.
   * @return {module:model/AccountPasswordLockoutDurationType} The populated <code>AccountPasswordLockoutDurationType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} options
   */
  exports.prototype['options'] = undefined;



  return exports;
}));


