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
    root.Docusign.AccountSignatureProviderOption = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AccountSignatureProviderOption model module.
   * @module model/AccountSignatureProviderOption
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountSignatureProviderOption</code>.
   * @alias module:model/AccountSignatureProviderOption
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSignatureProviderOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSignatureProviderOption} obj Optional instance to populate.
   * @return {module:model/AccountSignatureProviderOption} The populated <code>AccountSignatureProviderOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('signatureProviderOptionDisplayName')) {
        obj['signatureProviderOptionDisplayName'] = ApiClient.convertToType(data['signatureProviderOptionDisplayName'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderOptionId')) {
        obj['signatureProviderOptionId'] = ApiClient.convertToType(data['signatureProviderOptionId'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderOptionName')) {
        obj['signatureProviderOptionName'] = ApiClient.convertToType(data['signatureProviderOptionName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} signatureProviderOptionDisplayName
   */
  exports.prototype['signatureProviderOptionDisplayName'] = undefined;
  /**
   * 
   * @member {String} signatureProviderOptionId
   */
  exports.prototype['signatureProviderOptionId'] = undefined;
  /**
   * 
   * @member {String} signatureProviderOptionName
   */
  exports.prototype['signatureProviderOptionName'] = undefined;



  return exports;
}));


