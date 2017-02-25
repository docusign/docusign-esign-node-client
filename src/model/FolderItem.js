/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CustomFieldV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldV2'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FolderItem = factory(root.Docusign.ApiClient, root.Docusign.CustomFieldV2);
  }
}(this, function(ApiClient, CustomFieldV2) {
  'use strict';


  /**
   * The FolderItem model module.
   * @module model/FolderItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>FolderItem</code>.
   * @alias module:model/FolderItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FolderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FolderItem} obj Optional instance to populate.
   * @return {module:model/FolderItem} The populated <code>FolderItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('completedDateTime')) {
        obj['completedDateTime'] = ApiClient.convertToType(data['completedDateTime'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomFieldV2]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('envelopeUri')) {
        obj['envelopeUri'] = ApiClient.convertToType(data['envelopeUri'], 'String');
      }
      if (data.hasOwnProperty('is21CFRPart11')) {
        obj['is21CFRPart11'] = ApiClient.convertToType(data['is21CFRPart11'], 'String');
      }
      if (data.hasOwnProperty('isSignatureProviderEnvelope')) {
        obj['isSignatureProviderEnvelope'] = ApiClient.convertToType(data['isSignatureProviderEnvelope'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ownerName')) {
        obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
      }
      if (data.hasOwnProperty('pageCount')) {
        obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('senderEmail')) {
        obj['senderEmail'] = ApiClient.convertToType(data['senderEmail'], 'String');
      }
      if (data.hasOwnProperty('senderName')) {
        obj['senderName'] = ApiClient.convertToType(data['senderName'], 'String');
      }
      if (data.hasOwnProperty('sentDateTime')) {
        obj['sentDateTime'] = ApiClient.convertToType(data['sentDateTime'], 'String');
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the date and time this item was completed.
   * @member {String} completedDateTime
   */
  exports.prototype['completedDateTime'] = undefined;
  /**
   * Indicates the date and time the item was created.
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
   * @member {Array.<module:model/CustomFieldV2>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
   * @member {String} envelopeUri
   */
  exports.prototype['envelopeUri'] = undefined;
  /**
   * When set to **true**, indicates that this module is enabled on the account.
   * @member {String} is21CFRPart11
   */
  exports.prototype['is21CFRPart11'] = undefined;
  /**
   * 
   * @member {String} isSignatureProviderEnvelope
   */
  exports.prototype['isSignatureProviderEnvelope'] = undefined;
  /**
   * 
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Name of the envelope owner.
   * @member {String} ownerName
   */
  exports.prototype['ownerName'] = undefined;
  /**
   * 
   * @member {Number} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * 
   * @member {String} senderEmail
   */
  exports.prototype['senderEmail'] = undefined;
  /**
   * Name of the envelope sender.
   * @member {String} senderName
   */
  exports.prototype['senderName'] = undefined;
  /**
   * The date and time the envelope was sent.
   * @member {String} sentDateTime
   */
  exports.prototype['sentDateTime'] = undefined;
  /**
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


