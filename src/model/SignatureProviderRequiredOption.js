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
    root.Docusign.SignatureProviderRequiredOption = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SignatureProviderRequiredOption model module.
   * @module model/SignatureProviderRequiredOption
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SignatureProviderRequiredOption</code>.
   * @alias module:model/SignatureProviderRequiredOption
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignatureProviderRequiredOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureProviderRequiredOption} obj Optional instance to populate.
   * @return {module:model/SignatureProviderRequiredOption} The populated <code>SignatureProviderRequiredOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requiredSignatureProviderOptionIds')) {
        obj['requiredSignatureProviderOptionIds'] = ApiClient.convertToType(data['requiredSignatureProviderOptionIds'], ['String']);
      }
      if (data.hasOwnProperty('signerType')) {
        obj['signerType'] = ApiClient.convertToType(data['signerType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} requiredSignatureProviderOptionIds
   */
  exports.prototype['requiredSignatureProviderOptionIds'] = undefined;
  /**
   * 
   * @member {String} signerType
   */
  exports.prototype['signerType'] = undefined;



  return exports;
}));


