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
    root.Docusign.DisplayApplianceSignerAttachment = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisplayApplianceSignerAttachment model module.
   * @module model/DisplayApplianceSignerAttachment
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayApplianceSignerAttachment</code>.
   * @alias module:model/DisplayApplianceSignerAttachment
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayApplianceSignerAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayApplianceSignerAttachment} obj Optional instance to populate.
   * @return {module:model/DisplayApplianceSignerAttachment} The populated <code>DisplayApplianceSignerAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attachmentDescription')) {
        obj['attachmentDescription'] = ApiClient.convertToType(data['attachmentDescription'], 'String');
      }
      if (data.hasOwnProperty('attachmentTabId')) {
        obj['attachmentTabId'] = ApiClient.convertToType(data['attachmentTabId'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('pageCount')) {
        obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
      }
      if (data.hasOwnProperty('pageId')) {
        obj['pageId'] = ApiClient.convertToType(data['pageId'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} attachmentDescription
   */
  exports.prototype['attachmentDescription'] = undefined;
  /**
   * 
   * @member {String} attachmentTabId
   */
  exports.prototype['attachmentTabId'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * 
   * @member {Number} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * 
   * @member {String} pageId
   */
  exports.prototype['pageId'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;



  return exports;
}));


