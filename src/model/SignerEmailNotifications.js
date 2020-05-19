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
    root.Docusign.SignerEmailNotifications = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SignerEmailNotifications model module.
   * @module model/SignerEmailNotifications
   */

  /**
   * Constructs a new <code>SignerEmailNotifications</code>.
   * An array of email notifications that specifies the email the user receives when they are a sender. When the specific email notification is set to true, the user receives those types of email notifications from DocuSign. The user inherits the default account sender email notification settings when the user is created.
   * @alias module:model/SignerEmailNotifications
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignerEmailNotifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignerEmailNotifications} obj Optional instance to populate.
   * @return {module:model/SignerEmailNotifications} The populated <code>SignerEmailNotifications</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentNotification')) {
        obj['agentNotification'] = ApiClient.convertToType(data['agentNotification'], 'String');
      }
      if (data.hasOwnProperty('carbonCopyNotification')) {
        obj['carbonCopyNotification'] = ApiClient.convertToType(data['carbonCopyNotification'], 'String');
      }
      if (data.hasOwnProperty('certifiedDeliveryNotification')) {
        obj['certifiedDeliveryNotification'] = ApiClient.convertToType(data['certifiedDeliveryNotification'], 'String');
      }
      if (data.hasOwnProperty('commentsOnlyPrivateAndMention')) {
        obj['commentsOnlyPrivateAndMention'] = ApiClient.convertToType(data['commentsOnlyPrivateAndMention'], 'String');
      }
      if (data.hasOwnProperty('commentsReceiveAll')) {
        obj['commentsReceiveAll'] = ApiClient.convertToType(data['commentsReceiveAll'], 'String');
      }
      if (data.hasOwnProperty('documentMarkupActivation')) {
        obj['documentMarkupActivation'] = ApiClient.convertToType(data['documentMarkupActivation'], 'String');
      }
      if (data.hasOwnProperty('envelopeActivation')) {
        obj['envelopeActivation'] = ApiClient.convertToType(data['envelopeActivation'], 'String');
      }
      if (data.hasOwnProperty('envelopeComplete')) {
        obj['envelopeComplete'] = ApiClient.convertToType(data['envelopeComplete'], 'String');
      }
      if (data.hasOwnProperty('envelopeCorrected')) {
        obj['envelopeCorrected'] = ApiClient.convertToType(data['envelopeCorrected'], 'String');
      }
      if (data.hasOwnProperty('envelopeDeclined')) {
        obj['envelopeDeclined'] = ApiClient.convertToType(data['envelopeDeclined'], 'String');
      }
      if (data.hasOwnProperty('envelopeVoided')) {
        obj['envelopeVoided'] = ApiClient.convertToType(data['envelopeVoided'], 'String');
      }
      if (data.hasOwnProperty('faxReceived')) {
        obj['faxReceived'] = ApiClient.convertToType(data['faxReceived'], 'String');
      }
      if (data.hasOwnProperty('offlineSigningFailed')) {
        obj['offlineSigningFailed'] = ApiClient.convertToType(data['offlineSigningFailed'], 'String');
      }
      if (data.hasOwnProperty('purgeDocuments')) {
        obj['purgeDocuments'] = ApiClient.convertToType(data['purgeDocuments'], 'String');
      }
      if (data.hasOwnProperty('reassignedSigner')) {
        obj['reassignedSigner'] = ApiClient.convertToType(data['reassignedSigner'], 'String');
      }
      if (data.hasOwnProperty('whenSigningGroupMember')) {
        obj['whenSigningGroupMember'] = ApiClient.convertToType(data['whenSigningGroupMember'], 'String');
      }
    }
    return obj;
  }

  /**
   * When set to **true**, the user receives agent notification emails.
   * @member {String} agentNotification
   */
  exports.prototype['agentNotification'] = undefined;
  /**
   * When set to **true**, the user receives notifications of carbon copy deliveries.
   * @member {String} carbonCopyNotification
   */
  exports.prototype['carbonCopyNotification'] = undefined;
  /**
   * When set to **true**, the user receives notifications of certified deliveries.
   * @member {String} certifiedDeliveryNotification
   */
  exports.prototype['certifiedDeliveryNotification'] = undefined;
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
   * When set to **true**, the user receives notification that document markup has been activated.
   * @member {String} documentMarkupActivation
   */
  exports.prototype['documentMarkupActivation'] = undefined;
  /**
   * When set to **true**, the user receives notification that the envelope has been activated.
   * @member {String} envelopeActivation
   */
  exports.prototype['envelopeActivation'] = undefined;
  /**
   * When set to **true**, the user receives notification that the envelope has been completed.
   * @member {String} envelopeComplete
   */
  exports.prototype['envelopeComplete'] = undefined;
  /**
   * When set to **true**, the user receives notification that the envelope has been corrected.
   * @member {String} envelopeCorrected
   */
  exports.prototype['envelopeCorrected'] = undefined;
  /**
   * When set to **true**, the user receives notification that the envelope has been declined.
   * @member {String} envelopeDeclined
   */
  exports.prototype['envelopeDeclined'] = undefined;
  /**
   * When set to **true**, the user receives notification that the envelope has been voided.
   * @member {String} envelopeVoided
   */
  exports.prototype['envelopeVoided'] = undefined;
  /**
   * Reserved:
   * @member {String} faxReceived
   */
  exports.prototype['faxReceived'] = undefined;
  /**
   * When set to **true**, the user receives notification if the offline signing failed.
   * @member {String} offlineSigningFailed
   */
  exports.prototype['offlineSigningFailed'] = undefined;
  /**
   * When set to **true**, the user receives notification of document purges.
   * @member {String} purgeDocuments
   */
  exports.prototype['purgeDocuments'] = undefined;
  /**
   * When set to **true**, the user receives notification that the envelope has been reassigned.
   * @member {String} reassignedSigner
   */
  exports.prototype['reassignedSigner'] = undefined;
  /**
   * 
   * @member {String} whenSigningGroupMember
   */
  exports.prototype['whenSigningGroupMember'] = undefined;



  return exports;
}));


