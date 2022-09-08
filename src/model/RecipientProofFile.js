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
    root.Docusign.RecipientProofFile = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientProofFile model module.
   * @module model/RecipientProofFile
   */

  /**
   * Constructs a new <code>RecipientProofFile</code>.
   * The proof file of the recipient. [ID Evidence](/docs/idevidence-api/) uses proof files to store the identification data that recipients submit when verifying their ID with [ID Verification](/docs/esign-rest-api/esign101/concepts/documents/)
   * @alias module:model/RecipientProofFile
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientProofFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientProofFile} obj Optional instance to populate.
   * @return {module:model/RecipientProofFile} The populated <code>RecipientProofFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hasIdentityAttempts')) {
        obj['hasIdentityAttempts'] = ApiClient.convertToType(data['hasIdentityAttempts'], 'String');
      }
      if (data.hasOwnProperty('isInProofFile')) {
        obj['isInProofFile'] = ApiClient.convertToType(data['isInProofFile'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} hasIdentityAttempts
   */
  exports.prototype['hasIdentityAttempts'] = undefined;
  /**
   * 
   * @member {String} isInProofFile
   */
  exports.prototype['isInProofFile'] = undefined;



  return exports;
}));


