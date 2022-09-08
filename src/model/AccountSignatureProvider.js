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
    define(['ApiClient', 'model/AccountSignatureProviderOption', 'model/SignatureProviderRequiredOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountSignatureProviderOption'), require('./SignatureProviderRequiredOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSignatureProvider = factory(root.Docusign.ApiClient, root.Docusign.AccountSignatureProviderOption, root.Docusign.SignatureProviderRequiredOption);
  }
}(this, function(ApiClient, AccountSignatureProviderOption, SignatureProviderRequiredOption) {
  'use strict';


  /**
   * The AccountSignatureProvider model module.
   * @module model/AccountSignatureProvider
   */

  /**
   * Constructs a new <code>AccountSignatureProvider</code>.
   * Contains information abotu the signature provider associated with the Identity Verification workflow.  If empty, then this specific workflow is not intended for signers. 
   * @alias module:model/AccountSignatureProvider
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSignatureProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSignatureProvider} obj Optional instance to populate.
   * @return {module:model/AccountSignatureProvider} The populated <code>AccountSignatureProvider</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isRequired')) {
        obj['isRequired'] = ApiClient.convertToType(data['isRequired'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderDisplayName')) {
        obj['signatureProviderDisplayName'] = ApiClient.convertToType(data['signatureProviderDisplayName'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderId')) {
        obj['signatureProviderId'] = ApiClient.convertToType(data['signatureProviderId'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderName')) {
        obj['signatureProviderName'] = ApiClient.convertToType(data['signatureProviderName'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderOptionsMetadata')) {
        obj['signatureProviderOptionsMetadata'] = ApiClient.convertToType(data['signatureProviderOptionsMetadata'], [AccountSignatureProviderOption]);
      }
      if (data.hasOwnProperty('signatureProviderRequiredOptions')) {
        obj['signatureProviderRequiredOptions'] = ApiClient.convertToType(data['signatureProviderRequiredOptions'], [SignatureProviderRequiredOption]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} isRequired
   */
  exports.prototype['isRequired'] = undefined;
  /**
   * 
   * @member {String} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * 
   * @member {String} signatureProviderDisplayName
   */
  exports.prototype['signatureProviderDisplayName'] = undefined;
  /**
   * 
   * @member {String} signatureProviderId
   */
  exports.prototype['signatureProviderId'] = undefined;
  /**
   * 
   * @member {String} signatureProviderName
   */
  exports.prototype['signatureProviderName'] = undefined;
  /**
   * 
   * @member {Array.<module:model/AccountSignatureProviderOption>} signatureProviderOptionsMetadata
   */
  exports.prototype['signatureProviderOptionsMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SignatureProviderRequiredOption>} signatureProviderRequiredOptions
   */
  exports.prototype['signatureProviderRequiredOptions'] = undefined;



  return exports;
}));


