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
    root.Docusign.DisplayApplianceAccount = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisplayApplianceAccount model module.
   * @module model/DisplayApplianceAccount
   */

  /**
   * Constructs a new <code>DisplayApplianceAccount</code>.
   * @alias module:model/DisplayApplianceAccount
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayApplianceAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayApplianceAccount} obj Optional instance to populate.
   * @return {module:model/DisplayApplianceAccount} The populated <code>DisplayApplianceAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('optOutAutoNavTextAndTabColorUpdates')) {
        obj['optOutAutoNavTextAndTabColorUpdates'] = ApiClient.convertToType(data['optOutAutoNavTextAndTabColorUpdates'], 'Boolean');
      }
      if (data.hasOwnProperty('showInitialConditionalFields')) {
        obj['showInitialConditionalFields'] = ApiClient.convertToType(data['showInitialConditionalFields'], 'Boolean');
      }
      if (data.hasOwnProperty('signingVersion')) {
        obj['signingVersion'] = ApiClient.convertToType(data['signingVersion'], 'String');
      }
      if (data.hasOwnProperty('tagHasSigBlock')) {
        obj['tagHasSigBlock'] = ApiClient.convertToType(data['tagHasSigBlock'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * 
   * @member {Boolean} optOutAutoNavTextAndTabColorUpdates
   */
  exports.prototype['optOutAutoNavTextAndTabColorUpdates'] = undefined;
  /**
   * 
   * @member {Boolean} showInitialConditionalFields
   */
  exports.prototype['showInitialConditionalFields'] = undefined;
  /**
   * 
   * @member {String} signingVersion
   */
  exports.prototype['signingVersion'] = undefined;
  /**
   * 
   * @member {Boolean} tagHasSigBlock
   */
  exports.prototype['tagHasSigBlock'] = undefined;



  return exports;
}));


