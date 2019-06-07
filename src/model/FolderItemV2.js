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
    define(['ApiClient', 'model/Recipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Recipients'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FolderItemV2 = factory(root.Docusign.ApiClient, root.Docusign.Recipients);
  }
}(this, function(ApiClient, Recipients) {
  'use strict';


  /**
   * The FolderItemV2 model module.
   * @module model/FolderItemV2
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>FolderItemV2</code>.
   * @alias module:model/FolderItemV2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FolderItemV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FolderItemV2} obj Optional instance to populate.
   * @return {module:model/FolderItemV2} The populated <code>FolderItemV2</code> instance.
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
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('envelopeUri')) {
        obj['envelopeUri'] = ApiClient.convertToType(data['envelopeUri'], 'String');
      }
      if (data.hasOwnProperty('expireDateTime')) {
        obj['expireDateTime'] = ApiClient.convertToType(data['expireDateTime'], 'String');
      }
      if (data.hasOwnProperty('folderId')) {
        obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
      }
      if (data.hasOwnProperty('folderUri')) {
        obj['folderUri'] = ApiClient.convertToType(data['folderUri'], 'String');
      }
      if (data.hasOwnProperty('is21CFRPart11')) {
        obj['is21CFRPart11'] = ApiClient.convertToType(data['is21CFRPart11'], 'String');
      }
      if (data.hasOwnProperty('ownerName')) {
        obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = Recipients.constructFromObject(data['recipients']);
      }
      if (data.hasOwnProperty('recipientsUri')) {
        obj['recipientsUri'] = ApiClient.convertToType(data['recipientsUri'], 'String');
      }
      if (data.hasOwnProperty('senderCompany')) {
        obj['senderCompany'] = ApiClient.convertToType(data['senderCompany'], 'String');
      }
      if (data.hasOwnProperty('senderEmail')) {
        obj['senderEmail'] = ApiClient.convertToType(data['senderEmail'], 'String');
      }
      if (data.hasOwnProperty('senderName')) {
        obj['senderName'] = ApiClient.convertToType(data['senderName'], 'String');
      }
      if (data.hasOwnProperty('senderUserId')) {
        obj['senderUserId'] = ApiClient.convertToType(data['senderUserId'], 'String');
      }
      if (data.hasOwnProperty('sentDateTime')) {
        obj['sentDateTime'] = ApiClient.convertToType(data['sentDateTime'], 'String');
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
      if (data.hasOwnProperty('templateUri')) {
        obj['templateUri'] = ApiClient.convertToType(data['templateUri'], 'String');
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
   * The date and time the envelope is set to expire.
   * @member {String} expireDateTime
   */
  exports.prototype['expireDateTime'] = undefined;
  /**
   * 
   * @member {String} folderId
   */
  exports.prototype['folderId'] = undefined;
  /**
   * 
   * @member {String} folderUri
   */
  exports.prototype['folderUri'] = undefined;
  /**
   * When set to **true**, indicates that this module is enabled on the account.
   * @member {String} is21CFRPart11
   */
  exports.prototype['is21CFRPart11'] = undefined;
  /**
   * 
   * @member {String} ownerName
   */
  exports.prototype['ownerName'] = undefined;
  /**
   * @member {module:model/Recipients} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the recipients.
   * @member {String} recipientsUri
   */
  exports.prototype['recipientsUri'] = undefined;
  /**
   * 
   * @member {String} senderCompany
   */
  exports.prototype['senderCompany'] = undefined;
  /**
   * 
   * @member {String} senderEmail
   */
  exports.prototype['senderEmail'] = undefined;
  /**
   * 
   * @member {String} senderName
   */
  exports.prototype['senderName'] = undefined;
  /**
   * 
   * @member {String} senderUserId
   */
  exports.prototype['senderUserId'] = undefined;
  /**
   * The date and time the envelope was sent.
   * @member {String} sentDateTime
   */
  exports.prototype['sentDateTime'] = undefined;
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
   * @member {String} templateUri
   */
  exports.prototype['templateUri'] = undefined;



  return exports;
}));


