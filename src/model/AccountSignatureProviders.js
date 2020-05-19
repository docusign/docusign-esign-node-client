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
    define(['ApiClient', 'model/AccountSignatureProvider'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountSignatureProvider'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSignatureProviders = factory(root.Docusign.ApiClient, root.Docusign.AccountSignatureProvider);
  }
}(this, function(ApiClient, AccountSignatureProvider) {
  'use strict';


  /**
   * The AccountSignatureProviders model module.
   * @module model/AccountSignatureProviders
   */

  /**
   * Constructs a new <code>AccountSignatureProviders</code>.
   * @alias module:model/AccountSignatureProviders
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSignatureProviders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSignatureProviders} obj Optional instance to populate.
   * @return {module:model/AccountSignatureProviders} The populated <code>AccountSignatureProviders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('signatureProviders')) {
        obj['signatureProviders'] = ApiClient.convertToType(data['signatureProviders'], [AccountSignatureProvider]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/AccountSignatureProvider>} signatureProviders
   */
  exports.prototype['signatureProviders'] = undefined;



  return exports;
}));


