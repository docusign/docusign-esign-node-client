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
    define(['ApiClient', 'model/BulkSendingCopyTab', 'model/IdCheckInformationInput', 'model/RecipientEmailNotification', 'model/RecipientPhoneAuthentication', 'model/RecipientSMSAuthentication', 'model/RecipientSignatureProvider', 'model/SocialAuthentication'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkSendingCopyTab'), require('./IdCheckInformationInput'), require('./RecipientEmailNotification'), require('./RecipientPhoneAuthentication'), require('./RecipientSMSAuthentication'), require('./RecipientSignatureProvider'), require('./SocialAuthentication'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendingCopyRecipient = factory(root.Docusign.ApiClient, root.Docusign.BulkSendingCopyTab, root.Docusign.IdCheckInformationInput, root.Docusign.RecipientEmailNotification, root.Docusign.RecipientPhoneAuthentication, root.Docusign.RecipientSMSAuthentication, root.Docusign.RecipientSignatureProvider, root.Docusign.SocialAuthentication);
  }
}(this, function(ApiClient, BulkSendingCopyTab, IdCheckInformationInput, RecipientEmailNotification, RecipientPhoneAuthentication, RecipientSMSAuthentication, RecipientSignatureProvider, SocialAuthentication) {
  'use strict';


  /**
   * The BulkSendingCopyRecipient model module.
   * @module model/BulkSendingCopyRecipient
   */

  /**
   * Constructs a new <code>BulkSendingCopyRecipient</code>.
   * This object contains details about a bulk send recipient.
   * @alias module:model/BulkSendingCopyRecipient
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingCopyRecipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingCopyRecipient} obj Optional instance to populate.
   * @return {module:model/BulkSendingCopyRecipient} The populated <code>BulkSendingCopyRecipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
      }
      if (data.hasOwnProperty('deliveryMethod')) {
        obj['deliveryMethod'] = ApiClient.convertToType(data['deliveryMethod'], 'String');
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
      if (data.hasOwnProperty('faxNumber')) {
        obj['faxNumber'] = ApiClient.convertToType(data['faxNumber'], 'String');
      }
      if (data.hasOwnProperty('hostEmail')) {
        obj['hostEmail'] = ApiClient.convertToType(data['hostEmail'], 'String');
      }
      if (data.hasOwnProperty('hostName')) {
        obj['hostName'] = ApiClient.convertToType(data['hostName'], 'String');
      }
      if (data.hasOwnProperty('idCheckConfigurationName')) {
        obj['idCheckConfigurationName'] = ApiClient.convertToType(data['idCheckConfigurationName'], 'String');
      }
      if (data.hasOwnProperty('idCheckInformationInput')) {
        obj['idCheckInformationInput'] = IdCheckInformationInput.constructFromObject(data['idCheckInformationInput']);
      }
      if (data.hasOwnProperty('identificationMethod')) {
        obj['identificationMethod'] = ApiClient.convertToType(data['identificationMethod'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('phoneAuthentication')) {
        obj['phoneAuthentication'] = RecipientPhoneAuthentication.constructFromObject(data['phoneAuthentication']);
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('recipientSignatureProviders')) {
        obj['recipientSignatureProviders'] = ApiClient.convertToType(data['recipientSignatureProviders'], [RecipientSignatureProvider]);
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
      if (data.hasOwnProperty('signerName')) {
        obj['signerName'] = ApiClient.convertToType(data['signerName'], 'String');
      }
      if (data.hasOwnProperty('signingGroupId')) {
        obj['signingGroupId'] = ApiClient.convertToType(data['signingGroupId'], 'String');
      }
      if (data.hasOwnProperty('smsAuthentication')) {
        obj['smsAuthentication'] = RecipientSMSAuthentication.constructFromObject(data['smsAuthentication']);
      }
      if (data.hasOwnProperty('socialAuthentications')) {
        obj['socialAuthentications'] = ApiClient.convertToType(data['socialAuthentications'], [SocialAuthentication]);
      }
      if (data.hasOwnProperty('tabs')) {
        obj['tabs'] = ApiClient.convertToType(data['tabs'], [BulkSendingCopyTab]);
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
   * Specifies whether the recipient is embedded or remote.   If the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng.   Maximum length: 100 characters. 
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
   * @member {Array.<String>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * Reserved: For DocuSign use only.
   * @member {String} deliveryMethod
   */
  exports.prototype['deliveryMethod'] = undefined;
  /**
   * 
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
   * Reserved:
   * @member {String} faxNumber
   */
  exports.prototype['faxNumber'] = undefined;
  /**
   * 
   * @member {String} hostEmail
   */
  exports.prototype['hostEmail'] = undefined;
  /**
   * 
   * @member {String} hostName
   */
  exports.prototype['hostName'] = undefined;
  /**
   * Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account (these name can also be found in the web console sending interface in the Identify list for a recipient,) This overrides any default authentication setting.  *Example*: Your account has ID Check and SMS Authentication available and in the web console Identify list these appear as 'ID Check $' and 'SMS Auth $'. To use ID check in an envelope, the idCheckConfigurationName should be 'ID Check '. If you wanted to use SMS, it would be 'SMS Auth $' and you would need to add you would need to add phone number information to the `smsAuthentication` node.
   * @member {String} idCheckConfigurationName
   */
  exports.prototype['idCheckConfigurationName'] = undefined;
  /**
   * An object that contains input information related to a recipient ID check.
   * @member {module:model/IdCheckInformationInput} idCheckInformationInput
   */
  exports.prototype['idCheckInformationInput'] = undefined;
  /**
   * 
   * @member {String} identificationMethod
   */
  exports.prototype['identificationMethod'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Specifies a note that is unique to this recipient. This note is sent to the recipient via the signing email. The note displays in the signing UI near the upper left corner of the document on the signing screen.  Maximum Length: 1000 characters.
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * When `idCheckConfigurationName` is set to `Phone Auth $`, you use this complex type to provide the recipient authentication method details. It contains the following elements:  * `recipMayProvideNumber`: Boolean. When **true,** the recipient can use whatever phone number they choose. * `senderProvidedNumbers`: ArrayOfStrings.  A list of phone numbers the recipient can use. * `recordVoicePrint`: Reserved for DocuSign. * `validateRecipProvidedNumber`: Reserved for DocuSign.  
   * @member {module:model/RecipientPhoneAuthentication} phoneAuthentication
   */
  exports.prototype['phoneAuthentication'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
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
   * 
   * @member {String} signerName
   */
  exports.prototype['signerName'] = undefined;
  /**
   * When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
   * @member {String} signingGroupId
   */
  exports.prototype['signingGroupId'] = undefined;
  /**
   * When `idCheckConfigurationName` is set to `SMS Auth $`, you use this complex type to provide the recipient authentication method details. It contains the element `senderProvidedNumbers`, which is an array of phone numbers that the recipient can use for SMS text authentication.   
   * @member {module:model/RecipientSMSAuthentication} smsAuthentication
   */
  exports.prototype['smsAuthentication'] = undefined;
  /**
   *  Lists the social ID type that can be used for recipient authentication.
   * @member {Array.<module:model/SocialAuthentication>} socialAuthentications
   */
  exports.prototype['socialAuthentications'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BulkSendingCopyTab>} tabs
   */
  exports.prototype['tabs'] = undefined;



  return exports;
}));


