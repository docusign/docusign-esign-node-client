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
    define(['ApiClient', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientSignatureProviderOptions = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PropertyMetadata) {
  'use strict';


  /**
   * The RecipientSignatureProviderOptions model module.
   * @module model/RecipientSignatureProviderOptions
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientSignatureProviderOptions</code>.
   * @alias module:model/RecipientSignatureProviderOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientSignatureProviderOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientSignatureProviderOptions} obj Optional instance to populate.
   * @return {module:model/RecipientSignatureProviderOptions} The populated <code>RecipientSignatureProviderOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cpfNumber')) {
        obj['cpfNumber'] = ApiClient.convertToType(data['cpfNumber'], 'String');
      }
      if (data.hasOwnProperty('cpfNumberMetadata')) {
        obj['cpfNumberMetadata'] = PropertyMetadata.constructFromObject(data['cpfNumberMetadata']);
      }
      if (data.hasOwnProperty('oneTimePassword')) {
        obj['oneTimePassword'] = ApiClient.convertToType(data['oneTimePassword'], 'String');
      }
      if (data.hasOwnProperty('oneTimePasswordMetadata')) {
        obj['oneTimePasswordMetadata'] = PropertyMetadata.constructFromObject(data['oneTimePasswordMetadata']);
      }
      if (data.hasOwnProperty('signerRole')) {
        obj['signerRole'] = ApiClient.convertToType(data['signerRole'], 'String');
      }
      if (data.hasOwnProperty('signerRoleMetadata')) {
        obj['signerRoleMetadata'] = PropertyMetadata.constructFromObject(data['signerRoleMetadata']);
      }
      if (data.hasOwnProperty('sms')) {
        obj['sms'] = ApiClient.convertToType(data['sms'], 'String');
      }
      if (data.hasOwnProperty('smsMetadata')) {
        obj['smsMetadata'] = PropertyMetadata.constructFromObject(data['smsMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} cpfNumber
   */
  exports.prototype['cpfNumber'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} cpfNumberMetadata
   */
  exports.prototype['cpfNumberMetadata'] = undefined;
  /**
   * 
   * @member {String} oneTimePassword
   */
  exports.prototype['oneTimePassword'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} oneTimePasswordMetadata
   */
  exports.prototype['oneTimePasswordMetadata'] = undefined;
  /**
   * 
   * @member {String} signerRole
   */
  exports.prototype['signerRole'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} signerRoleMetadata
   */
  exports.prototype['signerRoleMetadata'] = undefined;
  /**
   * 
   * @member {String} sms
   */
  exports.prototype['sms'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} smsMetadata
   */
  exports.prototype['smsMetadata'] = undefined;



  return exports;
}));


