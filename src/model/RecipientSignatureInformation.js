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
    root.Docusign.RecipientSignatureInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientSignatureInformation model module.
   * @module model/RecipientSignatureInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientSignatureInformation</code>.
   * Allows the sender to pre-specify the signature name, signature initials and signature font used in the signature stamp for the recipient.  Used only with recipient types In Person Signers and Signers.
   * @alias module:model/RecipientSignatureInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientSignatureInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientSignatureInformation} obj Optional instance to populate.
   * @return {module:model/RecipientSignatureInformation} The populated <code>RecipientSignatureInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fontStyle')) {
        obj['fontStyle'] = ApiClient.convertToType(data['fontStyle'], 'String');
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
   * @member {String} fontStyle
   */
  exports.prototype['fontStyle'] = undefined;
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


