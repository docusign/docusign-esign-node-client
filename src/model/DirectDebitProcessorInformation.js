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
    root.Docusign.DirectDebitProcessorInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DirectDebitProcessorInformation model module.
   * @module model/DirectDebitProcessorInformation
   */

  /**
   * Constructs a new <code>DirectDebitProcessorInformation</code>.
   * Contains information about a bank that processes a customer's direct debit payments.
   * @alias module:model/DirectDebitProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DirectDebitProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectDebitProcessorInformation} obj Optional instance to populate.
   * @return {module:model/DirectDebitProcessorInformation} The populated <code>DirectDebitProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bankBranchCode')) {
        obj['bankBranchCode'] = ApiClient.convertToType(data['bankBranchCode'], 'String');
      }
      if (data.hasOwnProperty('bankCheckDigit')) {
        obj['bankCheckDigit'] = ApiClient.convertToType(data['bankCheckDigit'], 'String');
      }
      if (data.hasOwnProperty('bankCode')) {
        obj['bankCode'] = ApiClient.convertToType(data['bankCode'], 'String');
      }
      if (data.hasOwnProperty('bankName')) {
        obj['bankName'] = ApiClient.convertToType(data['bankName'], 'String');
      }
      if (data.hasOwnProperty('bankTransferAccountName')) {
        obj['bankTransferAccountName'] = ApiClient.convertToType(data['bankTransferAccountName'], 'String');
      }
      if (data.hasOwnProperty('bankTransferAccountNumber')) {
        obj['bankTransferAccountNumber'] = ApiClient.convertToType(data['bankTransferAccountNumber'], 'String');
      }
      if (data.hasOwnProperty('bankTransferType')) {
        obj['bankTransferType'] = ApiClient.convertToType(data['bankTransferType'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('iBAN')) {
        obj['iBAN'] = ApiClient.convertToType(data['iBAN'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} bankBranchCode
   */
  exports.prototype['bankBranchCode'] = undefined;
  /**
   * 
   * @member {String} bankCheckDigit
   */
  exports.prototype['bankCheckDigit'] = undefined;
  /**
   * 
   * @member {String} bankCode
   */
  exports.prototype['bankCode'] = undefined;
  /**
   * 
   * @member {String} bankName
   */
  exports.prototype['bankName'] = undefined;
  /**
   * 
   * @member {String} bankTransferAccountName
   */
  exports.prototype['bankTransferAccountName'] = undefined;
  /**
   * 
   * @member {String} bankTransferAccountNumber
   */
  exports.prototype['bankTransferAccountNumber'] = undefined;
  /**
   * 
   * @member {String} bankTransferType
   */
  exports.prototype['bankTransferType'] = undefined;
  /**
   * Specifies the country associated with the address.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The user's first name.  Maximum Length: 50 characters.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * 
   * @member {String} iBAN
   */
  exports.prototype['iBAN'] = undefined;
  /**
   * 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;



  return exports;
}));


