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
    root.Docusign.AccountPasswordExpirePasswordDays = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AccountPasswordExpirePasswordDays model module.
   * @module model/AccountPasswordExpirePasswordDays
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountPasswordExpirePasswordDays</code>.
   * @alias module:model/AccountPasswordExpirePasswordDays
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountPasswordExpirePasswordDays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountPasswordExpirePasswordDays} obj Optional instance to populate.
   * @return {module:model/AccountPasswordExpirePasswordDays} The populated <code>AccountPasswordExpirePasswordDays</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maximumDays')) {
        obj['maximumDays'] = ApiClient.convertToType(data['maximumDays'], 'String');
      }
      if (data.hasOwnProperty('minimumDays')) {
        obj['minimumDays'] = ApiClient.convertToType(data['minimumDays'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} maximumDays
   */
  exports.prototype['maximumDays'] = undefined;
  /**
   * 
   * @member {String} minimumDays
   */
  exports.prototype['minimumDays'] = undefined;



  return exports;
}));


