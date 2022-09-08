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
    define(['ApiClient', 'model/RecipientAdditionalNotification', 'model/RecipientEmailNotification', 'model/RecipientPhoneNumber', 'model/RecipientSignatureProvider', 'model/Tabs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecipientAdditionalNotification'), require('./RecipientEmailNotification'), require('./RecipientPhoneNumber'), require('./RecipientSignatureProvider'), require('./Tabs'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateRole = factory(root.Docusign.ApiClient, root.Docusign.RecipientAdditionalNotification, root.Docusign.RecipientEmailNotification, root.Docusign.RecipientPhoneNumber, root.Docusign.RecipientSignatureProvider, root.Docusign.Tabs);
  }
}(this, function(ApiClient, RecipientAdditionalNotification, RecipientEmailNotification, RecipientPhoneNumber, RecipientSignatureProvider, Tabs) {
  'use strict';


  /**
   * The TemplateRole model module.
   * @module model/TemplateRole
   */

  /**
   * Constructs a new <code>TemplateRole</code>.
   * Information about a specific role.
   * @alias module:model/TemplateRole
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateRole} obj Optional instance to populate.
   * @return {module:model/TemplateRole} The populated <code>TemplateRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('additionalNotifications')) {
        obj['additionalNotifications'] = ApiClient.convertToType(data['additionalNotifications'], [RecipientAdditionalNotification]);
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('defaultRecipient')) {
        obj['defaultRecipient'] = ApiClient.convertToType(data['defaultRecipient'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailNotification')) {
        obj['emailNotification'] = RecipientEmailNotification.constructFromObject(data['emailNotification']);
      }
      if (data.hasOwnProperty('embeddedRecipientStartURL')) {
        obj['embeddedRecipientStartURL'] = ApiClient.convertToType(data['embeddedRecipientStartURL'], 'String');
      }
      if (data.hasOwnProperty('inPersonSignerName')) {
        obj['inPersonSignerName'] = ApiClient.convertToType(data['inPersonSignerName'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = RecipientPhoneNumber.constructFromObject(data['phoneNumber']);
      }
      if (data.hasOwnProperty('recipientSignatureProviders')) {
        obj['recipientSignatureProviders'] = ApiClient.convertToType(data['recipientSignatureProviders'], [RecipientSignatureProvider]);
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
      if (data.hasOwnProperty('routingOrder')) {
        obj['routingOrder'] = ApiClient.convertToType(data['routingOrder'], 'String');
      }
      if (data.hasOwnProperty('signingGroupId')) {
        obj['signingGroupId'] = ApiClient.convertToType(data['signingGroupId'], 'String');
      }
      if (data.hasOwnProperty('tabs')) {
        obj['tabs'] = Tabs.constructFromObject(data['tabs']);
      }
    }
    return obj;
  }

  /**
   * If a value is provided, the recipient must enter the value as the access code to view and sign the envelope.   Maximum Length: 50 characters and it must conform to the account's access code format setting.  If blank, but the signer `accessCode` property is set in the envelope, then that value is used.  If blank and the signer `accessCode` property is not set, then the access code is not required.
   * @member {String} accessCode
   */
  exports.prototype['accessCode'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientAdditionalNotification>} additionalNotifications
   */
  exports.prototype['additionalNotifications'] = undefined;
  /**
   * Specifies whether the recipient is embedded or remote.   If the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng.   Maximum length: 100 characters. 
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * When set to **true**, this recipient is the default recipient and any tabs generated by the transformPdfFields option are mapped to this recipient.
   * @member {String} defaultRecipient
   */
  exports.prototype['defaultRecipient'] = undefined;
  /**
   * Specifies the email associated with a role name.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * An optional complex type that sets a specific email subject and body for this recipient's notification email.   **Note:** You can set the `emailNotification` property separately for each recipient. If you set the value only for certain recipients, the other recipients will inherit the this value from the top-level `emailSubject` and `emailBlurb`. 
   * @member {module:model/RecipientEmailNotification} emailNotification
   */
  exports.prototype['emailNotification'] = undefined;
  /**
   * Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session.   If set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.  It is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient's identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.  If the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets.   *Example*:   `http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]` 
   * @member {String} embeddedRecipientStartURL
   */
  exports.prototype['embeddedRecipientStartURL'] = undefined;
  /**
   * Specifies the full legal name of the signer in person signer template roles.  Maximum Length: 100 characters.
   * @member {String} inPersonSignerName
   */
  exports.prototype['inPersonSignerName'] = undefined;
  /**
   * Specifies the recipient's name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Describes the recipient phone number.
   * @member {module:model/RecipientPhoneNumber} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientSignatureProvider>} recipientSignatureProviders
   */
  exports.prototype['recipientSignatureProviders'] = undefined;
  /**
   * Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
   * @member {String} roleName
   */
  exports.prototype['roleName'] = undefined;
  /**
   * Specifies the routing order of the recipient in the envelope. 
   * @member {String} routingOrder
   */
  exports.prototype['routingOrder'] = undefined;
  /**
   * When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
   * @member {String} signingGroupId
   */
  exports.prototype['signingGroupId'] = undefined;
  /**
   * A list of tabs, which are represented graphically as symbols on documents at the time of signing. Tabs show recipients where to sign, initial, or enter data. They may also display data to the recipients.
   * @member {module:model/Tabs} tabs
   */
  exports.prototype['tabs'] = undefined;



  return exports;
}));


