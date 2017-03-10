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
    root.Docusign.UserSignatureDefinition = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The UserSignatureDefinition model module.
   * @module model/UserSignatureDefinition
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserSignatureDefinition</code>.
   * @alias module:model/UserSignatureDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserSignatureDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSignatureDefinition} obj Optional instance to populate.
   * @return {module:model/UserSignatureDefinition} The populated <code>UserSignatureDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('signatureFont')) {
        obj['signatureFont'] = ApiClient.convertToType(data['signatureFont'], 'String');
      }
      if (data.hasOwnProperty('signatureId')) {
        obj['signatureId'] = ApiClient.convertToType(data['signatureId'], 'String');
      }
      if (data.hasOwnProperty('signatureInitials')) {
        obj['signatureInitials'] = ApiClient.convertToType(data['signatureInitials'], 'String');
      }
      if (data.hasOwnProperty('signatureName')) {
        obj['signatureName'] = ApiClient.convertToType(data['signatureName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} signatureFont
   */
  exports.prototype['signatureFont'] = undefined;
  /**
   * Specifies the signature ID associated with the signature name. You can use the signature ID in the URI in place of the signature name, and the value stored in the `signatureName` property in the body is used. This allows the use of special characters (such as \"&\", \"<\", \">\") in a the signature name. Note that with each update to signatures, the returned signature ID might change, so the caller will need to trigger off the signature name to get the new signature ID.
   * @member {String} signatureId
   */
  exports.prototype['signatureId'] = undefined;
  /**
   * 
   * @member {String} signatureInitials
   */
  exports.prototype['signatureInitials'] = undefined;
  /**
   * Specifies the user signature name.
   * @member {String} signatureName
   */
  exports.prototype['signatureName'] = undefined;



  return exports;
}));


