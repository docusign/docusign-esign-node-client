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
    define(['ApiClient', 'model/SenderEmailNotifications', 'model/SignerEmailNotifications'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SenderEmailNotifications'), require('./SignerEmailNotifications'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotificationDefaultSettings = factory(root.Docusign.ApiClient, root.Docusign.SenderEmailNotifications, root.Docusign.SignerEmailNotifications);
  }
}(this, function(ApiClient, SenderEmailNotifications, SignerEmailNotifications) {
  'use strict';


  /**
   * The NotificationDefaultSettings model module.
   * @module model/NotificationDefaultSettings
   */

  /**
   * Constructs a new <code>NotificationDefaultSettings</code>.
   * Contains details about the default notification settings for the envelope notifications that senders and signers receive.
   * @alias module:model/NotificationDefaultSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotificationDefaultSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationDefaultSettings} obj Optional instance to populate.
   * @return {module:model/NotificationDefaultSettings} The populated <code>NotificationDefaultSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('senderEmailNotifications')) {
        obj['senderEmailNotifications'] = SenderEmailNotifications.constructFromObject(data['senderEmailNotifications']);
      }
      if (data.hasOwnProperty('signerEmailNotifications')) {
        obj['signerEmailNotifications'] = SignerEmailNotifications.constructFromObject(data['signerEmailNotifications']);
      }
    }
    return obj;
  }

  /**
   *   An array of email notifications that sets the email the user receives when they are a sender. When the specific email notification is set to true, the user will receive those types of email notifications from DocuSign.   The user inherits the default account sender email notification settings when the user is created. The email notifications are:  * envelopeComplete * changedSigner  * senderEnvelopeDeclined  * withdrawnConsent  * recipientViewed  * deliveryFailed   
   * @member {module:model/SenderEmailNotifications} senderEmailNotifications
   */
  exports.prototype['senderEmailNotifications'] = undefined;
  /**
   * An array of email notifications that specifies the email the user receives when they are a recipient. When the specific email notification is set to true, the user receives those types of email notifications from DocuSign. The user inherits the default account email notification settings when the user is created. 
   * @member {module:model/SignerEmailNotifications} signerEmailNotifications
   */
  exports.prototype['signerEmailNotifications'] = undefined;



  return exports;
}));


