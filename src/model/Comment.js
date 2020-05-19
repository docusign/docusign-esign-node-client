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
    root.Docusign.Comment = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Comment model module.
   * @module model/Comment
   */

  /**
   * Constructs a new <code>Comment</code>.
   * @alias module:model/Comment
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Comment} obj Optional instance to populate.
   * @return {module:model/Comment} The populated <code>Comment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('hmac')) {
        obj['hmac'] = ApiClient.convertToType(data['hmac'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('mentions')) {
        obj['mentions'] = ApiClient.convertToType(data['mentions'], ['String']);
      }
      if (data.hasOwnProperty('read')) {
        obj['read'] = ApiClient.convertToType(data['read'], 'Boolean');
      }
      if (data.hasOwnProperty('sentByEmail')) {
        obj['sentByEmail'] = ApiClient.convertToType(data['sentByEmail'], 'String');
      }
      if (data.hasOwnProperty('sentByFullName')) {
        obj['sentByFullName'] = ApiClient.convertToType(data['sentByFullName'], 'String');
      }
      if (data.hasOwnProperty('sentByImageId')) {
        obj['sentByImageId'] = ApiClient.convertToType(data['sentByImageId'], 'String');
      }
      if (data.hasOwnProperty('sentByInitials')) {
        obj['sentByInitials'] = ApiClient.convertToType(data['sentByInitials'], 'String');
      }
      if (data.hasOwnProperty('sentByRecipientId')) {
        obj['sentByRecipientId'] = ApiClient.convertToType(data['sentByRecipientId'], 'String');
      }
      if (data.hasOwnProperty('sentByUserId')) {
        obj['sentByUserId'] = ApiClient.convertToType(data['sentByUserId'], 'String');
      }
      if (data.hasOwnProperty('signingGroupId')) {
        obj['signingGroupId'] = ApiClient.convertToType(data['signingGroupId'], 'String');
      }
      if (data.hasOwnProperty('signingGroupName')) {
        obj['signingGroupName'] = ApiClient.convertToType(data['signingGroupName'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('tabId')) {
        obj['tabId'] = ApiClient.convertToType(data['tabId'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('threadId')) {
        obj['threadId'] = ApiClient.convertToType(data['threadId'], 'String');
      }
      if (data.hasOwnProperty('threadOriginatorId')) {
        obj['threadOriginatorId'] = ApiClient.convertToType(data['threadOriginatorId'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
      if (data.hasOwnProperty('timeStampFormatted')) {
        obj['timeStampFormatted'] = ApiClient.convertToType(data['timeStampFormatted'], 'String');
      }
      if (data.hasOwnProperty('visibleTo')) {
        obj['visibleTo'] = ApiClient.convertToType(data['visibleTo'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * 
   * @member {String} hmac
   */
  exports.prototype['hmac'] = undefined;
  /**
   * 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {Array.<String>} mentions
   */
  exports.prototype['mentions'] = undefined;
  /**
   * 
   * @member {Boolean} read
   */
  exports.prototype['read'] = undefined;
  /**
   * 
   * @member {String} sentByEmail
   */
  exports.prototype['sentByEmail'] = undefined;
  /**
   * 
   * @member {String} sentByFullName
   */
  exports.prototype['sentByFullName'] = undefined;
  /**
   * 
   * @member {String} sentByImageId
   */
  exports.prototype['sentByImageId'] = undefined;
  /**
   * 
   * @member {String} sentByInitials
   */
  exports.prototype['sentByInitials'] = undefined;
  /**
   * 
   * @member {String} sentByRecipientId
   */
  exports.prototype['sentByRecipientId'] = undefined;
  /**
   * 
   * @member {String} sentByUserId
   */
  exports.prototype['sentByUserId'] = undefined;
  /**
   * When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
   * @member {String} signingGroupId
   */
  exports.prototype['signingGroupId'] = undefined;
  /**
   * The display name for the signing group.   Maximum Length: 100 characters. 
   * @member {String} signingGroupName
   */
  exports.prototype['signingGroupName'] = undefined;
  /**
   * 
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].     
   * @member {String} tabId
   */
  exports.prototype['tabId'] = undefined;
  /**
   * 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * 
   * @member {String} threadId
   */
  exports.prototype['threadId'] = undefined;
  /**
   * 
   * @member {String} threadOriginatorId
   */
  exports.prototype['threadOriginatorId'] = undefined;
  /**
   * 
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * 
   * @member {String} timeStampFormatted
   */
  exports.prototype['timeStampFormatted'] = undefined;
  /**
   * 
   * @member {Array.<String>} visibleTo
   */
  exports.prototype['visibleTo'] = undefined;



  return exports;
}));


