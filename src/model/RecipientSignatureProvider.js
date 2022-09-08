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
    define(['ApiClient', 'model/PropertyMetadata', 'model/RecipientSignatureProviderOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'), require('./RecipientSignatureProviderOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientSignatureProvider = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata, root.Docusign.RecipientSignatureProviderOptions);
  }
}(this, function(ApiClient, PropertyMetadata, RecipientSignatureProviderOptions) {
  'use strict';


  /**
   * The RecipientSignatureProvider model module.
   * @module model/RecipientSignatureProvider
   */

  /**
   * Constructs a new <code>RecipientSignatureProvider</code>.
   * An Electronic or Standards Based Signature (digital signature) provider for the signer to use. [More information](/docs/esign-rest-api/esign101/concepts/standards-based-signatures/). 
   * @alias module:model/RecipientSignatureProvider
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientSignatureProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientSignatureProvider} obj Optional instance to populate.
   * @return {module:model/RecipientSignatureProvider} The populated <code>RecipientSignatureProvider</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sealDocumentsWithTabsOnly')) {
        obj['sealDocumentsWithTabsOnly'] = ApiClient.convertToType(data['sealDocumentsWithTabsOnly'], 'String');
      }
      if (data.hasOwnProperty('sealName')) {
        obj['sealName'] = ApiClient.convertToType(data['sealName'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderName')) {
        obj['signatureProviderName'] = ApiClient.convertToType(data['signatureProviderName'], 'String');
      }
      if (data.hasOwnProperty('signatureProviderNameMetadata')) {
        obj['signatureProviderNameMetadata'] = PropertyMetadata.constructFromObject(data['signatureProviderNameMetadata']);
      }
      if (data.hasOwnProperty('signatureProviderOptions')) {
        obj['signatureProviderOptions'] = RecipientSignatureProviderOptions.constructFromObject(data['signatureProviderOptions']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} sealDocumentsWithTabsOnly
   */
  exports.prototype['sealDocumentsWithTabsOnly'] = undefined;
  /**
   * 
   * @member {String} sealName
   */
  exports.prototype['sealName'] = undefined;
  /**
   * 
   * @member {String} signatureProviderName
   */
  exports.prototype['signatureProviderName'] = undefined;
  /**
   * Metadata that indicates whether the `signatureProviderName` property is editable. 
   * @member {module:model/PropertyMetadata} signatureProviderNameMetadata
   */
  exports.prototype['signatureProviderNameMetadata'] = undefined;
  /**
   * Not applicable for this object.
   * @member {module:model/RecipientSignatureProviderOptions} signatureProviderOptions
   */
  exports.prototype['signatureProviderOptions'] = undefined;



  return exports;
}));


