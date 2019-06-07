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
    define(['ApiClient', 'model/SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConsumerDisclosure = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The ConsumerDisclosure model module.
   * @module model/ConsumerDisclosure
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConsumerDisclosure</code>.
   * @alias module:model/ConsumerDisclosure
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConsumerDisclosure</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsumerDisclosure} obj Optional instance to populate.
   * @return {module:model/ConsumerDisclosure} The populated <code>ConsumerDisclosure</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountEsignId')) {
        obj['accountEsignId'] = ApiClient.convertToType(data['accountEsignId'], 'String');
      }
      if (data.hasOwnProperty('allowCDWithdraw')) {
        obj['allowCDWithdraw'] = ApiClient.convertToType(data['allowCDWithdraw'], 'String');
      }
      if (data.hasOwnProperty('allowCDWithdrawMetadata')) {
        obj['allowCDWithdrawMetadata'] = SettingsMetadata.constructFromObject(data['allowCDWithdrawMetadata']);
      }
      if (data.hasOwnProperty('changeEmail')) {
        obj['changeEmail'] = ApiClient.convertToType(data['changeEmail'], 'String');
      }
      if (data.hasOwnProperty('changeEmailOther')) {
        obj['changeEmailOther'] = ApiClient.convertToType(data['changeEmailOther'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('companyPhone')) {
        obj['companyPhone'] = ApiClient.convertToType(data['companyPhone'], 'String');
      }
      if (data.hasOwnProperty('copyCostPerPage')) {
        obj['copyCostPerPage'] = ApiClient.convertToType(data['copyCostPerPage'], 'String');
      }
      if (data.hasOwnProperty('copyFeeCollectionMethod')) {
        obj['copyFeeCollectionMethod'] = ApiClient.convertToType(data['copyFeeCollectionMethod'], 'String');
      }
      if (data.hasOwnProperty('copyRequestEmail')) {
        obj['copyRequestEmail'] = ApiClient.convertToType(data['copyRequestEmail'], 'String');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
      }
      if (data.hasOwnProperty('enableEsign')) {
        obj['enableEsign'] = ApiClient.convertToType(data['enableEsign'], 'String');
      }
      if (data.hasOwnProperty('esignAgreement')) {
        obj['esignAgreement'] = ApiClient.convertToType(data['esignAgreement'], 'String');
      }
      if (data.hasOwnProperty('esignText')) {
        obj['esignText'] = ApiClient.convertToType(data['esignText'], 'String');
      }
      if (data.hasOwnProperty('languageCode')) {
        obj['languageCode'] = ApiClient.convertToType(data['languageCode'], 'String');
      }
      if (data.hasOwnProperty('mustAgreeToEsign')) {
        obj['mustAgreeToEsign'] = ApiClient.convertToType(data['mustAgreeToEsign'], 'String');
      }
      if (data.hasOwnProperty('pdfId')) {
        obj['pdfId'] = ApiClient.convertToType(data['pdfId'], 'String');
      }
      if (data.hasOwnProperty('useBrand')) {
        obj['useBrand'] = ApiClient.convertToType(data['useBrand'], 'String');
      }
      if (data.hasOwnProperty('useConsumerDisclosureWithinAccount')) {
        obj['useConsumerDisclosureWithinAccount'] = ApiClient.convertToType(data['useConsumerDisclosureWithinAccount'], 'String');
      }
      if (data.hasOwnProperty('useConsumerDisclosureWithinAccountMetadata')) {
        obj['useConsumerDisclosureWithinAccountMetadata'] = SettingsMetadata.constructFromObject(data['useConsumerDisclosureWithinAccountMetadata']);
      }
      if (data.hasOwnProperty('withdrawAddressLine1')) {
        obj['withdrawAddressLine1'] = ApiClient.convertToType(data['withdrawAddressLine1'], 'String');
      }
      if (data.hasOwnProperty('withdrawAddressLine2')) {
        obj['withdrawAddressLine2'] = ApiClient.convertToType(data['withdrawAddressLine2'], 'String');
      }
      if (data.hasOwnProperty('withdrawByEmail')) {
        obj['withdrawByEmail'] = ApiClient.convertToType(data['withdrawByEmail'], 'String');
      }
      if (data.hasOwnProperty('withdrawByMail')) {
        obj['withdrawByMail'] = ApiClient.convertToType(data['withdrawByMail'], 'String');
      }
      if (data.hasOwnProperty('withdrawByPhone')) {
        obj['withdrawByPhone'] = ApiClient.convertToType(data['withdrawByPhone'], 'String');
      }
      if (data.hasOwnProperty('withdrawCity')) {
        obj['withdrawCity'] = ApiClient.convertToType(data['withdrawCity'], 'String');
      }
      if (data.hasOwnProperty('withdrawConsequences')) {
        obj['withdrawConsequences'] = ApiClient.convertToType(data['withdrawConsequences'], 'String');
      }
      if (data.hasOwnProperty('withdrawEmail')) {
        obj['withdrawEmail'] = ApiClient.convertToType(data['withdrawEmail'], 'String');
      }
      if (data.hasOwnProperty('withdrawOther')) {
        obj['withdrawOther'] = ApiClient.convertToType(data['withdrawOther'], 'String');
      }
      if (data.hasOwnProperty('withdrawPhone')) {
        obj['withdrawPhone'] = ApiClient.convertToType(data['withdrawPhone'], 'String');
      }
      if (data.hasOwnProperty('withdrawPostalCode')) {
        obj['withdrawPostalCode'] = ApiClient.convertToType(data['withdrawPostalCode'], 'String');
      }
      if (data.hasOwnProperty('withdrawState')) {
        obj['withdrawState'] = ApiClient.convertToType(data['withdrawState'], 'String');
      }
    }
    return obj;
  }

  /**
   * A GUID identifying the account associated with the consumer disclosure
   * @member {String} accountEsignId
   */
  exports.prototype['accountEsignId'] = undefined;
  /**
   * Indicates whether the customer can withdraw their acceptance of the consumer disclosure.
   * @member {String} allowCDWithdraw
   */
  exports.prototype['allowCDWithdraw'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowCDWithdrawMetadata
   */
  exports.prototype['allowCDWithdrawMetadata'] = undefined;
  /**
   * 
   * @member {String} changeEmail
   */
  exports.prototype['changeEmail'] = undefined;
  /**
   * 
   * @member {String} changeEmailOther
   */
  exports.prototype['changeEmailOther'] = undefined;
  /**
   * The name of the company associated with the consumer disclosure.
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * The phone number of the company associated with the consumer disclosure.
   * @member {String} companyPhone
   */
  exports.prototype['companyPhone'] = undefined;
  /**
   * 
   * @member {String} copyCostPerPage
   */
  exports.prototype['copyCostPerPage'] = undefined;
  /**
   * Specifies the fee collection method for cases in which the customer requires paper copies of the document.  Maximum Length: 255 characters
   * @member {String} copyFeeCollectionMethod
   */
  exports.prototype['copyFeeCollectionMethod'] = undefined;
  /**
   * 
   * @member {String} copyRequestEmail
   */
  exports.prototype['copyRequestEmail'] = undefined;
  /**
   * 
   * @member {String} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * 
   * @member {String} enableEsign
   */
  exports.prototype['enableEsign'] = undefined;
  /**
   * The Electronic Record and Signature Disclosure text. The disclosure text includes the html formatting.
   * @member {String} esignAgreement
   */
  exports.prototype['esignAgreement'] = undefined;
  /**
   * 
   * @member {String} esignText
   */
  exports.prototype['esignText'] = undefined;
  /**
   * 
   * @member {String} languageCode
   */
  exports.prototype['languageCode'] = undefined;
  /**
   * 
   * @member {String} mustAgreeToEsign
   */
  exports.prototype['mustAgreeToEsign'] = undefined;
  /**
   * 
   * @member {String} pdfId
   */
  exports.prototype['pdfId'] = undefined;
  /**
   * 
   * @member {String} useBrand
   */
  exports.prototype['useBrand'] = undefined;
  /**
   * 
   * @member {String} useConsumerDisclosureWithinAccount
   */
  exports.prototype['useConsumerDisclosureWithinAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useConsumerDisclosureWithinAccountMetadata
   */
  exports.prototype['useConsumerDisclosureWithinAccountMetadata'] = undefined;
  /**
   * Contains the first address line of the postal address to which a customer can send a consent withdrawal notification.  Maximum length: 100 characters. 
   * @member {String} withdrawAddressLine1
   */
  exports.prototype['withdrawAddressLine1'] = undefined;
  /**
   * Contains the second address line of the postal address to which a customer can send a consent withdrawal notification.  Maximum length: 100 characters. 
   * @member {String} withdrawAddressLine2
   */
  exports.prototype['withdrawAddressLine2'] = undefined;
  /**
   * Indicates whether the customer can withdraw consent by email.
   * @member {String} withdrawByEmail
   */
  exports.prototype['withdrawByEmail'] = undefined;
  /**
   * Indicates whether the customer can withdraw consent by postal mail.
   * @member {String} withdrawByMail
   */
  exports.prototype['withdrawByMail'] = undefined;
  /**
   * Indicates whether the customer can withdraw consent by phone.
   * @member {String} withdrawByPhone
   */
  exports.prototype['withdrawByPhone'] = undefined;
  /**
   * Contains the city of the postal address to which a customer can send a consent withdrawal notification.  Maximum length: 50 characters. 
   * @member {String} withdrawCity
   */
  exports.prototype['withdrawCity'] = undefined;
  /**
   * Indicates the consequences of withdrawing consent.
   * @member {String} withdrawConsequences
   */
  exports.prototype['withdrawConsequences'] = undefined;
  /**
   * Contains the email address to which a customer can send a consent withdrawal notification.  Maximum length: 100 characters. 
   * @member {String} withdrawEmail
   */
  exports.prototype['withdrawEmail'] = undefined;
  /**
   * Indicates other information need to withdraw consent.  Maximum length: 255 characters.
   * @member {String} withdrawOther
   */
  exports.prototype['withdrawOther'] = undefined;
  /**
   * Contains the phone number which a customer can call to register consent withdrawal notification.  Maximum length: 20 characters. 
   * @member {String} withdrawPhone
   */
  exports.prototype['withdrawPhone'] = undefined;
  /**
   * Contains the postal code of the postal address to which a customer can send a consent withdrawal notification.  Maximum length: 20 characters. 
   * @member {String} withdrawPostalCode
   */
  exports.prototype['withdrawPostalCode'] = undefined;
  /**
   * Contains the state of the postal address to which a customer can send a consent withdrawal notification.
   * @member {String} withdrawState
   */
  exports.prototype['withdrawState'] = undefined;



  return exports;
}));


