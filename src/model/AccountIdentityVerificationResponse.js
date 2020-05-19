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
    define(['ApiClient', 'model/AccountIdentityVerificationWorkflow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentityVerificationWorkflow'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountIdentityVerificationResponse = factory(root.Docusign.ApiClient, root.Docusign.AccountIdentityVerificationWorkflow);
  }
}(this, function(ApiClient, AccountIdentityVerificationWorkflow) {
  'use strict';


  /**
   * The AccountIdentityVerificationResponse model module.
   * @module model/AccountIdentityVerificationResponse
   */

  /**
   * Constructs a new <code>AccountIdentityVerificationResponse</code>.
   * @alias module:model/AccountIdentityVerificationResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountIdentityVerificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountIdentityVerificationResponse} obj Optional instance to populate.
   * @return {module:model/AccountIdentityVerificationResponse} The populated <code>AccountIdentityVerificationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('identityVerification')) {
        obj['identityVerification'] = ApiClient.convertToType(data['identityVerification'], [AccountIdentityVerificationWorkflow]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/AccountIdentityVerificationWorkflow>} identityVerification
   */
  exports.prototype['identityVerification'] = undefined;



  return exports;
}));


