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
    root.Docusign.SenderEmailNotifications = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SenderEmailNotifications model module.
   * @module model/SenderEmailNotifications
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SenderEmailNotifications</code>.
   * @alias module:model/SenderEmailNotifications
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SenderEmailNotifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SenderEmailNotifications} obj Optional instance to populate.
   * @return {module:model/SenderEmailNotifications} The populated <code>SenderEmailNotifications</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('changedSigner')) {
        obj['changedSigner'] = ApiClient.convertToType(data['changedSigner'], 'String');
      }
      if (data.hasOwnProperty('commentsOnlyPrivateAndMention')) {
        obj['commentsOnlyPrivateAndMention'] = ApiClient.convertToType(data['commentsOnlyPrivateAndMention'], 'String');
      }
      if (data.hasOwnProperty('commentsReceiveAll')) {
        obj['commentsReceiveAll'] = ApiClient.convertToType(data['commentsReceiveAll'], 'String');
      }
      if (data.hasOwnProperty('deliveryFailed')) {
        obj['deliveryFailed'] = ApiClient.convertToType(data['deliveryFailed'], 'String');
      }
      if (data.hasOwnProperty('envelopeComplete')) {
        obj['envelopeComplete'] = ApiClient.convertToType(data['envelopeComplete'], 'String');
      }
      if (data.hasOwnProperty('offlineSigningFailed')) {
        obj['offlineSigningFailed'] = ApiClient.convertToType(data['offlineSigningFailed'], 'String');
      }
      if (data.hasOwnProperty('purgeDocuments')) {
        obj['purgeDocuments'] = ApiClient.convertToType(data['purgeDocuments'], 'String');
      }
      if (data.hasOwnProperty('recipientViewed')) {
        obj['recipientViewed'] = ApiClient.convertToType(data['recipientViewed'], 'String');
      }
      if (data.hasOwnProperty('senderEnvelopeDeclined')) {
        obj['senderEnvelopeDeclined'] = ApiClient.convertToType(data['senderEnvelopeDeclined'], 'String');
      }
      if (data.hasOwnProperty('withdrawnConsent')) {
        obj['withdrawnConsent'] = ApiClient.convertToType(data['withdrawnConsent'], 'String');
      }
    }
    return obj;
  }

  /**
   * When set to **true**, the sender receives notification if the signer changes.
   * @member {String} changedSigner
   */
  exports.prototype['changedSigner'] = undefined;
  /**
   * 
   * @member {String} commentsOnlyPrivateAndMention
   */
  exports.prototype['commentsOnlyPrivateAndMention'] = undefined;
  /**
   * 
   * @member {String} commentsReceiveAll
   */
  exports.prototype['commentsReceiveAll'] = undefined;
  /**
   * When set to **true**, the sender receives notification if the delivery of the envelope fails.
   * @member {String} deliveryFailed
   */
  exports.prototype['deliveryFailed'] = undefined;
  /**
   * When set to **true**, the user receives notification that the envelope has been completed.
   * @member {String} envelopeComplete
   */
  exports.prototype['envelopeComplete'] = undefined;
  /**
   * When set to **true**, the user receives notification if the offline signing failed.
   * @member {String} offlineSigningFailed
   */
  exports.prototype['offlineSigningFailed'] = undefined;
  /**
   * 
   * @member {String} purgeDocuments
   */
  exports.prototype['purgeDocuments'] = undefined;
  /**
   * When set to **true**, the sender receives notification that the recipient viewed the enveloper.
   * @member {String} recipientViewed
   */
  exports.prototype['recipientViewed'] = undefined;
  /**
   * 
   * @member {String} senderEnvelopeDeclined
   */
  exports.prototype['senderEnvelopeDeclined'] = undefined;
  /**
   * When set to **true**, the user receives notification if consent is withdrawn.
   * @member {String} withdrawnConsent
   */
  exports.prototype['withdrawnConsent'] = undefined;



  return exports;
}));


