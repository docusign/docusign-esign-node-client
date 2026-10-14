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
    define(['ApiClient', 'model/DocGenFormField', 'model/DocumentHtmlDefinition', 'model/MatchBox', 'model/NameValue', 'model/Tabs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocGenFormField'), require('./DocumentHtmlDefinition'), require('./MatchBox'), require('./NameValue'), require('./Tabs'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeGenAndSendProperties = factory(root.Docusign.ApiClient, root.Docusign.DocGenFormField, root.Docusign.DocumentHtmlDefinition, root.Docusign.MatchBox, root.Docusign.NameValue, root.Docusign.Tabs);
  }
}(this, function(ApiClient, DocGenFormField, DocumentHtmlDefinition, MatchBox, NameValue, Tabs) {
  'use strict';


  /**
   * The EnvelopeGenAndSendProperties model module.
   * @module model/EnvelopeGenAndSendProperties
   */

  /**
   * Constructs a new <code>EnvelopeGenAndSendProperties</code>.
   * @alias module:model/EnvelopeGenAndSendProperties
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeGenAndSendProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeGenAndSendProperties} obj Optional instance to populate.
   * @return {module:model/EnvelopeGenAndSendProperties} The populated <code>EnvelopeGenAndSendProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applyAnchorTabs')) {
        obj['applyAnchorTabs'] = ApiClient.convertToType(data['applyAnchorTabs'], 'String');
      }
      if (data.hasOwnProperty('archiveDocumentType')) {
        obj['archiveDocumentType'] = ApiClient.convertToType(data['archiveDocumentType'], 'String');
      }
      if (data.hasOwnProperty('assignTabsToRecipientId')) {
        obj['assignTabsToRecipientId'] = ApiClient.convertToType(data['assignTabsToRecipientId'], 'String');
      }
      if (data.hasOwnProperty('authoritativeCopy')) {
        obj['authoritativeCopy'] = ApiClient.convertToType(data['authoritativeCopy'], 'String');
      }
      if (data.hasOwnProperty('base64DataJson')) {
        obj['base64DataJson'] = ApiClient.convertToType(data['base64DataJson'], 'String');
      }
      if (data.hasOwnProperty('base64GenerateTemplateDocument')) {
        obj['base64GenerateTemplateDocument'] = ApiClient.convertToType(data['base64GenerateTemplateDocument'], 'String');
      }
      if (data.hasOwnProperty('dataJson')) {
        obj['dataJson'] = ApiClient.convertToType(data['dataJson'], 'String');
      }
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
      if (data.hasOwnProperty('docGenDocumentStatus')) {
        obj['docGenDocumentStatus'] = ApiClient.convertToType(data['docGenDocumentStatus'], 'String');
      }
      if (data.hasOwnProperty('docGenFormFields')) {
        obj['docGenFormFields'] = ApiClient.convertToType(data['docGenFormFields'], [DocGenFormField]);
      }
      if (data.hasOwnProperty('documentBase64')) {
        obj['documentBase64'] = ApiClient.convertToType(data['documentBase64'], 'String');
      }
      if (data.hasOwnProperty('documentFields')) {
        obj['documentFields'] = ApiClient.convertToType(data['documentFields'], [NameValue]);
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentName')) {
        obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
      }
      if (data.hasOwnProperty('documentSequence')) {
        obj['documentSequence'] = ApiClient.convertToType(data['documentSequence'], 'String');
      }
      if (data.hasOwnProperty('documentTemplateId')) {
        obj['documentTemplateId'] = ApiClient.convertToType(data['documentTemplateId'], 'String');
      }
      if (data.hasOwnProperty('encryptedWithKeyManager')) {
        obj['encryptedWithKeyManager'] = ApiClient.convertToType(data['encryptedWithKeyManager'], 'String');
      }
      if (data.hasOwnProperty('fileExtension')) {
        obj['fileExtension'] = ApiClient.convertToType(data['fileExtension'], 'String');
      }
      if (data.hasOwnProperty('fileFormatHint')) {
        obj['fileFormatHint'] = ApiClient.convertToType(data['fileFormatHint'], 'String');
      }
      if (data.hasOwnProperty('generateDocumentTemplateKind')) {
        obj['generateDocumentTemplateKind'] = ApiClient.convertToType(data['generateDocumentTemplateKind'], 'String');
      }
      if (data.hasOwnProperty('generateDocumentTemplateSource')) {
        obj['generateDocumentTemplateSource'] = ApiClient.convertToType(data['generateDocumentTemplateSource'], 'String');
      }
      if (data.hasOwnProperty('generateTemplateDocumentId')) {
        obj['generateTemplateDocumentId'] = ApiClient.convertToType(data['generateTemplateDocumentId'], 'String');
      }
      if (data.hasOwnProperty('htmlDefinition')) {
        obj['htmlDefinition'] = DocumentHtmlDefinition.constructFromObject(data['htmlDefinition']);
      }
      if (data.hasOwnProperty('includeInDownload')) {
        obj['includeInDownload'] = ApiClient.convertToType(data['includeInDownload'], 'String');
      }
      if (data.hasOwnProperty('isDocGenDocument')) {
        obj['isDocGenDocument'] = ApiClient.convertToType(data['isDocGenDocument'], 'String');
      }
      if (data.hasOwnProperty('matchBoxes')) {
        obj['matchBoxes'] = ApiClient.convertToType(data['matchBoxes'], [MatchBox]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('pages')) {
        obj['pages'] = ApiClient.convertToType(data['pages'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('pdfFormFieldOption')) {
        obj['pdfFormFieldOption'] = ApiClient.convertToType(data['pdfFormFieldOption'], 'String');
      }
      if (data.hasOwnProperty('remoteUrl')) {
        obj['remoteUrl'] = ApiClient.convertToType(data['remoteUrl'], 'String');
      }
      if (data.hasOwnProperty('signerMustAcknowledge')) {
        obj['signerMustAcknowledge'] = ApiClient.convertToType(data['signerMustAcknowledge'], 'String');
      }
      if (data.hasOwnProperty('signerMustAcknowledgeUseAccountDefault')) {
        obj['signerMustAcknowledgeUseAccountDefault'] = ApiClient.convertToType(data['signerMustAcknowledgeUseAccountDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('tabs')) {
        obj['tabs'] = Tabs.constructFromObject(data['tabs']);
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
      if (data.hasOwnProperty('transformPdfFields')) {
        obj['transformPdfFields'] = ApiClient.convertToType(data['transformPdfFields'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} applyAnchorTabs
   */
  exports.prototype['applyAnchorTabs'] = undefined;
  /**
   * 
   * @member {String} archiveDocumentType
   */
  exports.prototype['archiveDocumentType'] = undefined;
  /**
   * 
   * @member {String} assignTabsToRecipientId
   */
  exports.prototype['assignTabsToRecipientId'] = undefined;
  /**
   * Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
   * @member {String} authoritativeCopy
   */
  exports.prototype['authoritativeCopy'] = undefined;
  /**
   * 
   * @member {String} base64DataJson
   */
  exports.prototype['base64DataJson'] = undefined;
  /**
   * 
   * @member {String} base64GenerateTemplateDocument
   */
  exports.prototype['base64GenerateTemplateDocument'] = undefined;
  /**
   * 
   * @member {String} dataJson
   */
  exports.prototype['dataJson'] = undefined;
  /**
   * 
   * @member {String} display
   */
  exports.prototype['display'] = undefined;
  /**
   * 
   * @member {String} docGenDocumentStatus
   */
  exports.prototype['docGenDocumentStatus'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocGenFormField>} docGenFormFields
   */
  exports.prototype['docGenFormFields'] = undefined;
  /**
   * 
   * @member {String} documentBase64
   */
  exports.prototype['documentBase64'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NameValue>} documentFields
   */
  exports.prototype['documentFields'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} documentName
   */
  exports.prototype['documentName'] = undefined;
  /**
   * 
   * @member {String} documentSequence
   */
  exports.prototype['documentSequence'] = undefined;
  /**
   * 
   * @member {String} documentTemplateId
   */
  exports.prototype['documentTemplateId'] = undefined;
  /**
   * 
   * @member {String} encryptedWithKeyManager
   */
  exports.prototype['encryptedWithKeyManager'] = undefined;
  /**
   * 
   * @member {String} fileExtension
   */
  exports.prototype['fileExtension'] = undefined;
  /**
   * 
   * @member {String} fileFormatHint
   */
  exports.prototype['fileFormatHint'] = undefined;
  /**
   * 
   * @member {String} generateDocumentTemplateKind
   */
  exports.prototype['generateDocumentTemplateKind'] = undefined;
  /**
   * 
   * @member {String} generateDocumentTemplateSource
   */
  exports.prototype['generateDocumentTemplateSource'] = undefined;
  /**
   * 
   * @member {String} generateTemplateDocumentId
   */
  exports.prototype['generateTemplateDocumentId'] = undefined;
  /**
   * 
   * @member {module:model/DocumentHtmlDefinition} htmlDefinition
   */
  exports.prototype['htmlDefinition'] = undefined;
  /**
   * 
   * @member {String} includeInDownload
   */
  exports.prototype['includeInDownload'] = undefined;
  /**
   * 
   * @member {String} isDocGenDocument
   */
  exports.prototype['isDocGenDocument'] = undefined;
  /**
   * 
   * @member {Array.<module:model/MatchBox>} matchBoxes
   */
  exports.prototype['matchBoxes'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 
   * @member {String} pages
   */
  exports.prototype['pages'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * 
   * @member {String} pdfFormFieldOption
   */
  exports.prototype['pdfFormFieldOption'] = undefined;
  /**
   * 
   * @member {String} remoteUrl
   */
  exports.prototype['remoteUrl'] = undefined;
  /**
   * 
   * @member {String} signerMustAcknowledge
   */
  exports.prototype['signerMustAcknowledge'] = undefined;
  /**
   * 
   * @member {Boolean} signerMustAcknowledgeUseAccountDefault
   */
  exports.prototype['signerMustAcknowledgeUseAccountDefault'] = undefined;
  /**
   * 
   * @member {module:model/Tabs} tabs
   */
  exports.prototype['tabs'] = undefined;
  /**
   * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
   * @member {String} templateLocked
   */
  exports.prototype['templateLocked'] = undefined;
  /**
   * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
   * @member {String} templateRequired
   */
  exports.prototype['templateRequired'] = undefined;
  /**
   * 
   * @member {String} transformPdfFields
   */
  exports.prototype['transformPdfFields'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


