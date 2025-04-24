/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/ExternalPrimaryAccountRecipientAuthRequirements'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExternalPrimaryAccountRecipientAuthRequirements'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.LinkedExternalPrimaryAccount = factory(root.Docusign.ApiClient, root.Docusign.ExternalPrimaryAccountRecipientAuthRequirements);
  }
}(this, function(ApiClient, ExternalPrimaryAccountRecipientAuthRequirements) {
  'use strict';


  /**
   * The LinkedExternalPrimaryAccount model module.
   * @module model/LinkedExternalPrimaryAccount
   */

  /**
   * Constructs a new <code>LinkedExternalPrimaryAccount</code>.
   * @alias module:model/LinkedExternalPrimaryAccount
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LinkedExternalPrimaryAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LinkedExternalPrimaryAccount} obj Optional instance to populate.
   * @return {module:model/LinkedExternalPrimaryAccount} The populated <code>LinkedExternalPrimaryAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('configurationId')) {
        obj['configurationId'] = ApiClient.convertToType(data['configurationId'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('exemptMembersOfSameAccountFromAuth')) {
        obj['exemptMembersOfSameAccountFromAuth'] = ApiClient.convertToType(data['exemptMembersOfSameAccountFromAuth'], 'String');
      }
      if (data.hasOwnProperty('linkId')) {
        obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
      }
      if (data.hasOwnProperty('pdfFieldHandlingOption')) {
        obj['pdfFieldHandlingOption'] = ApiClient.convertToType(data['pdfFieldHandlingOption'], 'String');
      }
      if (data.hasOwnProperty('pdfFieldHandlingPrefillTabPermission')) {
        obj['pdfFieldHandlingPrefillTabPermission'] = ApiClient.convertToType(data['pdfFieldHandlingPrefillTabPermission'], 'String');
      }
      if (data.hasOwnProperty('pdfFieldHandlingStandardInputTabPermission')) {
        obj['pdfFieldHandlingStandardInputTabPermission'] = ApiClient.convertToType(data['pdfFieldHandlingStandardInputTabPermission'], 'String');
      }
      if (data.hasOwnProperty('pdfFieldHandlingStandardTabPermission')) {
        obj['pdfFieldHandlingStandardTabPermission'] = ApiClient.convertToType(data['pdfFieldHandlingStandardTabPermission'], 'String');
      }
      if (data.hasOwnProperty('recipientAuthRequirements')) {
        obj['recipientAuthRequirements'] = ExternalPrimaryAccountRecipientAuthRequirements.constructFromObject(data['recipientAuthRequirements']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * 
   * @member {String} configurationId
   */
  exports.prototype['configurationId'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {String} exemptMembersOfSameAccountFromAuth
   */
  exports.prototype['exemptMembersOfSameAccountFromAuth'] = undefined;
  /**
   * 
   * @member {String} linkId
   */
  exports.prototype['linkId'] = undefined;
  /**
   * 
   * @member {String} pdfFieldHandlingOption
   */
  exports.prototype['pdfFieldHandlingOption'] = undefined;
  /**
   * 
   * @member {String} pdfFieldHandlingPrefillTabPermission
   */
  exports.prototype['pdfFieldHandlingPrefillTabPermission'] = undefined;
  /**
   * 
   * @member {String} pdfFieldHandlingStandardInputTabPermission
   */
  exports.prototype['pdfFieldHandlingStandardInputTabPermission'] = undefined;
  /**
   * 
   * @member {String} pdfFieldHandlingStandardTabPermission
   */
  exports.prototype['pdfFieldHandlingStandardTabPermission'] = undefined;
  /**
   * 
   * @member {module:model/ExternalPrimaryAccountRecipientAuthRequirements} recipientAuthRequirements
   */
  exports.prototype['recipientAuthRequirements'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


