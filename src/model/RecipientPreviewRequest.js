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
    root.Docusign.RecipientPreviewRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientPreviewRequest model module.
   * @module model/RecipientPreviewRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientPreviewRequest</code>.
   * @alias module:model/RecipientPreviewRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientPreviewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientPreviewRequest} obj Optional instance to populate.
   * @return {module:model/RecipientPreviewRequest} The populated <code>RecipientPreviewRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assertionId')) {
        obj['assertionId'] = ApiClient.convertToType(data['assertionId'], 'String');
      }
      if (data.hasOwnProperty('authenticationInstant')) {
        obj['authenticationInstant'] = ApiClient.convertToType(data['authenticationInstant'], 'String');
      }
      if (data.hasOwnProperty('authenticationMethod')) {
        obj['authenticationMethod'] = ApiClient.convertToType(data['authenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('pingFrequency')) {
        obj['pingFrequency'] = ApiClient.convertToType(data['pingFrequency'], 'String');
      }
      if (data.hasOwnProperty('pingUrl')) {
        obj['pingUrl'] = ApiClient.convertToType(data['pingUrl'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('securityDomain')) {
        obj['securityDomain'] = ApiClient.convertToType(data['securityDomain'], 'String');
      }
      if (data.hasOwnProperty('xFrameOptions')) {
        obj['xFrameOptions'] = ApiClient.convertToType(data['xFrameOptions'], 'String');
      }
      if (data.hasOwnProperty('xFrameOptionsAllowFromUrl')) {
        obj['xFrameOptionsAllowFromUrl'] = ApiClient.convertToType(data['xFrameOptionsAllowFromUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} assertionId
   */
  exports.prototype['assertionId'] = undefined;
  /**
   * 
   * @member {String} authenticationInstant
   */
  exports.prototype['authenticationInstant'] = undefined;
  /**
   * 
   * @member {String} authenticationMethod
   */
  exports.prototype['authenticationMethod'] = undefined;
  /**
   * 
   * @member {String} pingFrequency
   */
  exports.prototype['pingFrequency'] = undefined;
  /**
   * 
   * @member {String} pingUrl
   */
  exports.prototype['pingUrl'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * 
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * 
   * @member {String} securityDomain
   */
  exports.prototype['securityDomain'] = undefined;
  /**
   * 
   * @member {String} xFrameOptions
   */
  exports.prototype['xFrameOptions'] = undefined;
  /**
   * 
   * @member {String} xFrameOptionsAllowFromUrl
   */
  exports.prototype['xFrameOptionsAllowFromUrl'] = undefined;



  return exports;
}));


