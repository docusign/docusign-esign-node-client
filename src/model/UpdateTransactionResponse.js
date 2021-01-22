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
    root.Docusign.UpdateTransactionResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The UpdateTransactionResponse model module.
   * @module model/UpdateTransactionResponse
   */

  /**
   * Constructs a new <code>UpdateTransactionResponse</code>.
   * @alias module:model/UpdateTransactionResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UpdateTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateTransactionResponse} obj Optional instance to populate.
   * @return {module:model/UpdateTransactionResponse} The populated <code>UpdateTransactionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('redirectionUrl')) {
        obj['redirectionUrl'] = ApiClient.convertToType(data['redirectionUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} redirectionUrl
   */
  exports.prototype['redirectionUrl'] = undefined;



  return exports;
}));


