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
    define(['ApiClient', 'model/ErrorDetails', 'model/NameValue', 'model/Page', 'model/PropertyMetadata', 'model/SignatureType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./NameValue'), require('./Page'), require('./PropertyMetadata'), require('./SignatureType'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeDocument = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.NameValue, root.Docusign.Page, root.Docusign.PropertyMetadata, root.Docusign.SignatureType);
  }
}(this, function(ApiClient, ErrorDetails, NameValue, Page, PropertyMetadata, SignatureType) {
  'use strict';


  /**
   * The EnvelopeDocument model module.
   * @module model/EnvelopeDocument
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeDocument</code>.
   * @alias module:model/EnvelopeDocument
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeDocument} obj Optional instance to populate.
   * @return {module:model/EnvelopeDocument} The populated <code>EnvelopeDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addedRecipientIds')) {
        obj['addedRecipientIds'] = ApiClient.convertToType(data['addedRecipientIds'], ['String']);
      }
      if (data.hasOwnProperty('attachmentTabId')) {
        obj['attachmentTabId'] = ApiClient.convertToType(data['attachmentTabId'], 'String');
      }
      if (data.hasOwnProperty('authoritativeCopy')) {
        obj['authoritativeCopy'] = ApiClient.convertToType(data['authoritativeCopy'], 'String');
      }
      if (data.hasOwnProperty('authoritativeCopyMetadata')) {
        obj['authoritativeCopyMetadata'] = PropertyMetadata.constructFromObject(data['authoritativeCopyMetadata']);
      }
      if (data.hasOwnProperty('availableDocumentTypes')) {
        obj['availableDocumentTypes'] = ApiClient.convertToType(data['availableDocumentTypes'], [SignatureType]);
      }
      if (data.hasOwnProperty('containsPdfFormFields')) {
        obj['containsPdfFormFields'] = ApiClient.convertToType(data['containsPdfFormFields'], 'String');
      }
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
      if (data.hasOwnProperty('displayMetadata')) {
        obj['displayMetadata'] = PropertyMetadata.constructFromObject(data['displayMetadata']);
      }
      if (data.hasOwnProperty('documentFields')) {
        obj['documentFields'] = ApiClient.convertToType(data['documentFields'], [NameValue]);
      }
      if (data.hasOwnProperty('documentGroup')) {
        obj['documentGroup'] = ApiClient.convertToType(data['documentGroup'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentIdGuid')) {
        obj['documentIdGuid'] = ApiClient.convertToType(data['documentIdGuid'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('includeInDownload')) {
        obj['includeInDownload'] = ApiClient.convertToType(data['includeInDownload'], 'String');
      }
      if (data.hasOwnProperty('includeInDownloadMetadata')) {
        obj['includeInDownloadMetadata'] = PropertyMetadata.constructFromObject(data['includeInDownloadMetadata']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nameMetadata')) {
        obj['nameMetadata'] = PropertyMetadata.constructFromObject(data['nameMetadata']);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('pages')) {
        obj['pages'] = ApiClient.convertToType(data['pages'], [Page]);
      }
      if (data.hasOwnProperty('signerMustAcknowledge')) {
        obj['signerMustAcknowledge'] = ApiClient.convertToType(data['signerMustAcknowledge'], 'String');
      }
      if (data.hasOwnProperty('signerMustAcknowledgeMetadata')) {
        obj['signerMustAcknowledgeMetadata'] = PropertyMetadata.constructFromObject(data['signerMustAcknowledgeMetadata']);
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} addedRecipientIds
   */
  exports.prototype['addedRecipientIds'] = undefined;
  /**
   * 
   * @member {String} attachmentTabId
   */
  exports.prototype['attachmentTabId'] = undefined;
  /**
   * Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
   * @member {String} authoritativeCopy
   */
  exports.prototype['authoritativeCopy'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} authoritativeCopyMetadata
   */
  exports.prototype['authoritativeCopyMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SignatureType>} availableDocumentTypes
   */
  exports.prototype['availableDocumentTypes'] = undefined;
  /**
   * 
   * @member {String} containsPdfFormFields
   */
  exports.prototype['containsPdfFormFields'] = undefined;
  /**
   * 
   * @member {String} display
   */
  exports.prototype['display'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} displayMetadata
   */
  exports.prototype['displayMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NameValue>} documentFields
   */
  exports.prototype['documentFields'] = undefined;
  /**
   * 
   * @member {String} documentGroup
   */
  exports.prototype['documentGroup'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} documentIdGuid
   */
  exports.prototype['documentIdGuid'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} includeInDownload
   */
  exports.prototype['includeInDownload'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} includeInDownloadMetadata
   */
  exports.prototype['includeInDownloadMetadata'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} nameMetadata
   */
  exports.prototype['nameMetadata'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Page>} pages
   */
  exports.prototype['pages'] = undefined;
  /**
   * 
   * @member {String} signerMustAcknowledge
   */
  exports.prototype['signerMustAcknowledge'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} signerMustAcknowledgeMetadata
   */
  exports.prototype['signerMustAcknowledgeMetadata'] = undefined;
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
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


