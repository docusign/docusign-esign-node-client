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
    define(['ApiClient', 'model/UserSignature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserSignature'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserSignaturesInformation = factory(root.Docusign.ApiClient, root.Docusign.UserSignature);
  }
}(this, function(ApiClient, UserSignature) {
  'use strict';


  /**
   * The UserSignaturesInformation model module.
   * @module model/UserSignaturesInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserSignaturesInformation</code>.
   * @alias module:model/UserSignaturesInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserSignaturesInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSignaturesInformation} obj Optional instance to populate.
   * @return {module:model/UserSignaturesInformation} The populated <code>UserSignaturesInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userSignatures')) {
        obj['userSignatures'] = ApiClient.convertToType(data['userSignatures'], [UserSignature]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/UserSignature>} userSignatures
   */
  exports.prototype['userSignatures'] = undefined;



  return exports;
}));


