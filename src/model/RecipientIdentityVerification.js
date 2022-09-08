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
    define(['ApiClient', 'model/PropertyMetadata', 'model/RecipientIdentityInputOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'), require('./RecipientIdentityInputOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientIdentityVerification = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata, root.Docusign.RecipientIdentityInputOption);
  }
}(this, function(ApiClient, PropertyMetadata, RecipientIdentityInputOption) {
  'use strict';


  /**
   * The RecipientIdentityVerification model module.
   * @module model/RecipientIdentityVerification
   */

  /**
   * Constructs a new <code>RecipientIdentityVerification</code>.
   * Specifies ID Verification applied on an envelope by workflow ID. See the [list](/docs/esign-rest-api/reference/accounts/identityverifications/list/) method in the [IdentityVerifications](/docs/esign-rest-api/reference/accounts/identityverifications/) resource for more information on how to retrieve workflow IDs available for an account. This can be used in addition to other [recipient authentication](https://support.docusign.com/en/guides/ndse-user-guide-recipient-authentication) methods.
   * @alias module:model/RecipientIdentityVerification
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientIdentityVerification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientIdentityVerification} obj Optional instance to populate.
   * @return {module:model/RecipientIdentityVerification} The populated <code>RecipientIdentityVerification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('inputOptions')) {
        obj['inputOptions'] = ApiClient.convertToType(data['inputOptions'], [RecipientIdentityInputOption]);
      }
      if (data.hasOwnProperty('workflowId')) {
        obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
      }
      if (data.hasOwnProperty('workflowIdMetadata')) {
        obj['workflowIdMetadata'] = PropertyMetadata.constructFromObject(data['workflowIdMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/RecipientIdentityInputOption>} inputOptions
   */
  exports.prototype['inputOptions'] = undefined;
  /**
   * 
   * @member {String} workflowId
   */
  exports.prototype['workflowId'] = undefined;
  /**
   * 
   * @member {module:model/PropertyMetadata} workflowIdMetadata
   */
  exports.prototype['workflowIdMetadata'] = undefined;



  return exports;
}));


