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
    define(['ApiClient', 'model/AccountSignature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountSignature'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSignaturesInformation = factory(root.Docusign.ApiClient, root.Docusign.AccountSignature);
  }
}(this, function(ApiClient, AccountSignature) {
  'use strict';


  /**
   * The AccountSignaturesInformation model module.
   * @module model/AccountSignaturesInformation
   */

  /**
   * Constructs a new <code>AccountSignaturesInformation</code>.
   * @alias module:model/AccountSignaturesInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSignaturesInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSignaturesInformation} obj Optional instance to populate.
   * @return {module:model/AccountSignaturesInformation} The populated <code>AccountSignaturesInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountSignatures')) {
        obj['accountSignatures'] = ApiClient.convertToType(data['accountSignatures'], [AccountSignature]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/AccountSignature>} accountSignatures
   */
  exports.prototype['accountSignatures'] = undefined;



  return exports;
}));


