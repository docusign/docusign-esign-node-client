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
    root.Docusign.DisplayApplianceRecipient = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisplayApplianceRecipient model module.
   * @module model/DisplayApplianceRecipient
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayApplianceRecipient</code>.
   * @alias module:model/DisplayApplianceRecipient
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayApplianceRecipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayApplianceRecipient} obj Optional instance to populate.
   * @return {module:model/DisplayApplianceRecipient} The populated <code>DisplayApplianceRecipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cfrPart11')) {
        obj['cfrPart11'] = ApiClient.convertToType(data['cfrPart11'], 'Boolean');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('digitalSignatureBase64')) {
        obj['digitalSignatureBase64'] = ApiClient.convertToType(data['digitalSignatureBase64'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fullName')) {
        obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
      }
      if (data.hasOwnProperty('initialsBase64')) {
        obj['initialsBase64'] = ApiClient.convertToType(data['initialsBase64'], 'String');
      }
      if (data.hasOwnProperty('inPersonEmail')) {
        obj['inPersonEmail'] = ApiClient.convertToType(data['inPersonEmail'], 'String');
      }
      if (data.hasOwnProperty('isNotary')) {
        obj['isNotary'] = ApiClient.convertToType(data['isNotary'], 'Boolean');
      }
      if (data.hasOwnProperty('notarySealBase64')) {
        obj['notarySealBase64'] = ApiClient.convertToType(data['notarySealBase64'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('recipientCompleteCount')) {
        obj['recipientCompleteCount'] = ApiClient.convertToType(data['recipientCompleteCount'], 'Number');
      }
      if (data.hasOwnProperty('recipientGuidId')) {
        obj['recipientGuidId'] = ApiClient.convertToType(data['recipientGuidId'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('recipientStatus')) {
        obj['recipientStatus'] = ApiClient.convertToType(data['recipientStatus'], 'String');
      }
      if (data.hasOwnProperty('recipientType')) {
        obj['recipientType'] = ApiClient.convertToType(data['recipientType'], 'String');
      }
      if (data.hasOwnProperty('rowState')) {
        obj['rowState'] = ApiClient.convertToType(data['rowState'], 'String');
      }
      if (data.hasOwnProperty('signatureBase64')) {
        obj['signatureBase64'] = ApiClient.convertToType(data['signatureBase64'], 'String');
      }
      if (data.hasOwnProperty('signed')) {
        obj['signed'] = ApiClient.convertToType(data['signed'], 'Boolean');
      }
      if (data.hasOwnProperty('signerApplyTabs')) {
        obj['signerApplyTabs'] = ApiClient.convertToType(data['signerApplyTabs'], 'Boolean');
      }
      if (data.hasOwnProperty('signerAttachmentBase64')) {
        obj['signerAttachmentBase64'] = ApiClient.convertToType(data['signerAttachmentBase64'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Boolean} cfrPart11
   */
  exports.prototype['cfrPart11'] = undefined;
  /**
   * 
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * 
   * @member {String} digitalSignatureBase64
   */
  exports.prototype['digitalSignatureBase64'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {String} fullName
   */
  exports.prototype['fullName'] = undefined;
  /**
   * 
   * @member {String} initialsBase64
   */
  exports.prototype['initialsBase64'] = undefined;
  /**
   * 
   * @member {String} inPersonEmail
   */
  exports.prototype['inPersonEmail'] = undefined;
  /**
   * 
   * @member {Boolean} isNotary
   */
  exports.prototype['isNotary'] = undefined;
  /**
   * 
   * @member {String} notarySealBase64
   */
  exports.prototype['notarySealBase64'] = undefined;
  /**
   * 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * 
   * @member {Number} recipientCompleteCount
   */
  exports.prototype['recipientCompleteCount'] = undefined;
  /**
   * 
   * @member {String} recipientGuidId
   */
  exports.prototype['recipientGuidId'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * 
   * @member {String} recipientStatus
   */
  exports.prototype['recipientStatus'] = undefined;
  /**
   * 
   * @member {String} recipientType
   */
  exports.prototype['recipientType'] = undefined;
  /**
   * 
   * @member {String} rowState
   */
  exports.prototype['rowState'] = undefined;
  /**
   * 
   * @member {String} signatureBase64
   */
  exports.prototype['signatureBase64'] = undefined;
  /**
   * 
   * @member {Boolean} signed
   */
  exports.prototype['signed'] = undefined;
  /**
   * 
   * @member {Boolean} signerApplyTabs
   */
  exports.prototype['signerApplyTabs'] = undefined;
  /**
   * 
   * @member {String} signerAttachmentBase64
   */
  exports.prototype['signerAttachmentBase64'] = undefined;
  /**
   * 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


