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
    define(['ApiClient', 'model/AuthenticationStatus', 'model/ConsentDetails', 'model/DocumentVisibility', 'model/ErrorDetails', 'model/FeatureAvailableMetadata', 'model/IdCheckInformationInput', 'model/PropertyMetadata', 'model/RecipientAdditionalNotification', 'model/RecipientAttachment', 'model/RecipientEmailNotification', 'model/RecipientIdentityVerification', 'model/RecipientPhoneAuthentication', 'model/RecipientPhoneNumber', 'model/RecipientSMSAuthentication', 'model/SocialAuthentication', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthenticationStatus'), require('./ConsentDetails'), require('./DocumentVisibility'), require('./ErrorDetails'), require('./FeatureAvailableMetadata'), require('./IdCheckInformationInput'), require('./PropertyMetadata'), require('./RecipientAdditionalNotification'), require('./RecipientAttachment'), require('./RecipientEmailNotification'), require('./RecipientIdentityVerification'), require('./RecipientPhoneAuthentication'), require('./RecipientPhoneNumber'), require('./RecipientSMSAuthentication'), require('./SocialAuthentication'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Participant = factory(root.Docusign.ApiClient, root.Docusign.AuthenticationStatus, root.Docusign.ConsentDetails, root.Docusign.DocumentVisibility, root.Docusign.ErrorDetails, root.Docusign.FeatureAvailableMetadata, root.Docusign.IdCheckInformationInput, root.Docusign.PropertyMetadata, root.Docusign.RecipientAdditionalNotification, root.Docusign.RecipientAttachment, root.Docusign.RecipientEmailNotification, root.Docusign.RecipientIdentityVerification, root.Docusign.RecipientPhoneAuthentication, root.Docusign.RecipientPhoneNumber, root.Docusign.RecipientSMSAuthentication, root.Docusign.SocialAuthentication, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, AuthenticationStatus, ConsentDetails, DocumentVisibility, ErrorDetails, FeatureAvailableMetadata, IdCheckInformationInput, PropertyMetadata, RecipientAdditionalNotification, RecipientAttachment, RecipientEmailNotification, RecipientIdentityVerification, RecipientPhoneAuthentication, RecipientPhoneNumber, RecipientSMSAuthentication, SocialAuthentication, UserInfo) {
  'use strict';


  /**
   * The Participant model module.
   * @module model/Participant
   */

  /**
   * Constructs a new <code>Participant</code>.
   * @alias module:model/Participant
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Participant} obj Optional instance to populate.
   * @return {module:model/Participant} The populated <code>Participant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('accessCodeMetadata')) {
        obj['accessCodeMetadata'] = PropertyMetadata.constructFromObject(data['accessCodeMetadata']);
      }
      if (data.hasOwnProperty('addAccessCodeToEmail')) {
        obj['addAccessCodeToEmail'] = ApiClient.convertToType(data['addAccessCodeToEmail'], 'String');
      }
      if (data.hasOwnProperty('additionalNotifications')) {
        obj['additionalNotifications'] = ApiClient.convertToType(data['additionalNotifications'], [RecipientAdditionalNotification]);
      }
      if (data.hasOwnProperty('allowSystemOverrideForLockedRecipient')) {
        obj['allowSystemOverrideForLockedRecipient'] = ApiClient.convertToType(data['allowSystemOverrideForLockedRecipient'], 'String');
      }
      if (data.hasOwnProperty('autoRespondedReason')) {
        obj['autoRespondedReason'] = ApiClient.convertToType(data['autoRespondedReason'], 'String');
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('completedCount')) {
        obj['completedCount'] = ApiClient.convertToType(data['completedCount'], 'String');
      }
      if (data.hasOwnProperty('consentDetailsList')) {
        obj['consentDetailsList'] = ApiClient.convertToType(data['consentDetailsList'], [ConsentDetails]);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
      }
      if (data.hasOwnProperty('declinedDateTime')) {
        obj['declinedDateTime'] = ApiClient.convertToType(data['declinedDateTime'], 'String');
      }
      if (data.hasOwnProperty('declinedReason')) {
        obj['declinedReason'] = ApiClient.convertToType(data['declinedReason'], 'String');
      }
      if (data.hasOwnProperty('deliveredDateTime')) {
        obj['deliveredDateTime'] = ApiClient.convertToType(data['deliveredDateTime'], 'String');
      }
      if (data.hasOwnProperty('deliveryMethod')) {
        obj['deliveryMethod'] = ApiClient.convertToType(data['deliveryMethod'], 'String');
      }
      if (data.hasOwnProperty('deliveryMethodMetadata')) {
        obj['deliveryMethodMetadata'] = PropertyMetadata.constructFromObject(data['deliveryMethodMetadata']);
      }
      if (data.hasOwnProperty('designatorId')) {
        obj['designatorId'] = ApiClient.convertToType(data['designatorId'], 'String');
      }
      if (data.hasOwnProperty('designatorIdGuid')) {
        obj['designatorIdGuid'] = ApiClient.convertToType(data['designatorIdGuid'], 'String');
      }
      if (data.hasOwnProperty('documentVisibility')) {
        obj['documentVisibility'] = ApiClient.convertToType(data['documentVisibility'], [DocumentVisibility]);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailMetadata')) {
        obj['emailMetadata'] = PropertyMetadata.constructFromObject(data['emailMetadata']);
      }
      if (data.hasOwnProperty('emailNotification')) {
        obj['emailNotification'] = RecipientEmailNotification.constructFromObject(data['emailNotification']);
      }
      if (data.hasOwnProperty('emailRecipientPostSigningURL')) {
        obj['emailRecipientPostSigningURL'] = ApiClient.convertToType(data['emailRecipientPostSigningURL'], 'String');
      }
      if (data.hasOwnProperty('embeddedRecipientStartURL')) {
        obj['embeddedRecipientStartURL'] = ApiClient.convertToType(data['embeddedRecipientStartURL'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('faxNumber')) {
        obj['faxNumber'] = ApiClient.convertToType(data['faxNumber'], 'String');
      }
      if (data.hasOwnProperty('faxNumberMetadata')) {
        obj['faxNumberMetadata'] = PropertyMetadata.constructFromObject(data['faxNumberMetadata']);
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('firstNameMetadata')) {
        obj['firstNameMetadata'] = PropertyMetadata.constructFromObject(data['firstNameMetadata']);
      }
      if (data.hasOwnProperty('fullName')) {
        obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
      }
      if (data.hasOwnProperty('fullNameMetadata')) {
        obj['fullNameMetadata'] = PropertyMetadata.constructFromObject(data['fullNameMetadata']);
      }
      if (data.hasOwnProperty('idCheckConfigurationName')) {
        obj['idCheckConfigurationName'] = ApiClient.convertToType(data['idCheckConfigurationName'], 'String');
      }
      if (data.hasOwnProperty('idCheckConfigurationNameMetadata')) {
        obj['idCheckConfigurationNameMetadata'] = PropertyMetadata.constructFromObject(data['idCheckConfigurationNameMetadata']);
      }
      if (data.hasOwnProperty('idCheckInformationInput')) {
        obj['idCheckInformationInput'] = IdCheckInformationInput.constructFromObject(data['idCheckInformationInput']);
      }
      if (data.hasOwnProperty('identityVerification')) {
        obj['identityVerification'] = RecipientIdentityVerification.constructFromObject(data['identityVerification']);
      }
      if (data.hasOwnProperty('inheritEmailNotificationConfiguration')) {
        obj['inheritEmailNotificationConfiguration'] = ApiClient.convertToType(data['inheritEmailNotificationConfiguration'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('lastNameMetadata')) {
        obj['lastNameMetadata'] = PropertyMetadata.constructFromObject(data['lastNameMetadata']);
      }
      if (data.hasOwnProperty('lockedRecipientPhoneAuthEditable')) {
        obj['lockedRecipientPhoneAuthEditable'] = ApiClient.convertToType(data['lockedRecipientPhoneAuthEditable'], 'String');
      }
      if (data.hasOwnProperty('lockedRecipientSmsEditable')) {
        obj['lockedRecipientSmsEditable'] = ApiClient.convertToType(data['lockedRecipientSmsEditable'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nameMetadata')) {
        obj['nameMetadata'] = PropertyMetadata.constructFromObject(data['nameMetadata']);
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('noteMetadata')) {
        obj['noteMetadata'] = PropertyMetadata.constructFromObject(data['noteMetadata']);
      }
      if (data.hasOwnProperty('participateFor')) {
        obj['participateFor'] = ApiClient.convertToType(data['participateFor'], 'String');
      }
      if (data.hasOwnProperty('participateForGuid')) {
        obj['participateForGuid'] = ApiClient.convertToType(data['participateForGuid'], 'String');
      }
      if (data.hasOwnProperty('phoneAuthentication')) {
        obj['phoneAuthentication'] = RecipientPhoneAuthentication.constructFromObject(data['phoneAuthentication']);
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = RecipientPhoneNumber.constructFromObject(data['phoneNumber']);
      }
      if (data.hasOwnProperty('recipientAttachments')) {
        obj['recipientAttachments'] = ApiClient.convertToType(data['recipientAttachments'], [RecipientAttachment]);
      }
      if (data.hasOwnProperty('recipientAuthenticationStatus')) {
        obj['recipientAuthenticationStatus'] = AuthenticationStatus.constructFromObject(data['recipientAuthenticationStatus']);
      }
      if (data.hasOwnProperty('recipientFeatureMetadata')) {
        obj['recipientFeatureMetadata'] = ApiClient.convertToType(data['recipientFeatureMetadata'], [FeatureAvailableMetadata]);
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('recipientIdGuid')) {
        obj['recipientIdGuid'] = ApiClient.convertToType(data['recipientIdGuid'], 'String');
      }
      if (data.hasOwnProperty('recipientType')) {
        obj['recipientType'] = ApiClient.convertToType(data['recipientType'], 'String');
      }
      if (data.hasOwnProperty('recipientTypeMetadata')) {
        obj['recipientTypeMetadata'] = PropertyMetadata.constructFromObject(data['recipientTypeMetadata']);
      }
      if (data.hasOwnProperty('requireIdLookup')) {
        obj['requireIdLookup'] = ApiClient.convertToType(data['requireIdLookup'], 'String');
      }
      if (data.hasOwnProperty('requireIdLookupMetadata')) {
        obj['requireIdLookupMetadata'] = PropertyMetadata.constructFromObject(data['requireIdLookupMetadata']);
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
      if (data.hasOwnProperty('routingOrder')) {
        obj['routingOrder'] = ApiClient.convertToType(data['routingOrder'], 'String');
      }
      if (data.hasOwnProperty('routingOrderMetadata')) {
        obj['routingOrderMetadata'] = PropertyMetadata.constructFromObject(data['routingOrderMetadata']);
      }
      if (data.hasOwnProperty('sentDateTime')) {
        obj['sentDateTime'] = ApiClient.convertToType(data['sentDateTime'], 'String');
      }
      if (data.hasOwnProperty('signedDateTime')) {
        obj['signedDateTime'] = ApiClient.convertToType(data['signedDateTime'], 'String');
      }
      if (data.hasOwnProperty('signingGroupId')) {
        obj['signingGroupId'] = ApiClient.convertToType(data['signingGroupId'], 'String');
      }
      if (data.hasOwnProperty('signingGroupIdMetadata')) {
        obj['signingGroupIdMetadata'] = PropertyMetadata.constructFromObject(data['signingGroupIdMetadata']);
      }
      if (data.hasOwnProperty('signingGroupName')) {
        obj['signingGroupName'] = ApiClient.convertToType(data['signingGroupName'], 'String');
      }
      if (data.hasOwnProperty('signingGroupUsers')) {
        obj['signingGroupUsers'] = ApiClient.convertToType(data['signingGroupUsers'], [UserInfo]);
      }
      if (data.hasOwnProperty('smsAuthentication')) {
        obj['smsAuthentication'] = RecipientSMSAuthentication.constructFromObject(data['smsAuthentication']);
      }
      if (data.hasOwnProperty('socialAuthentications')) {
        obj['socialAuthentications'] = ApiClient.convertToType(data['socialAuthentications'], [SocialAuthentication]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'String');
      }
      if (data.hasOwnProperty('suppressEmails')) {
        obj['suppressEmails'] = ApiClient.convertToType(data['suppressEmails'], 'String');
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
      if (data.hasOwnProperty('totalTabCount')) {
        obj['totalTabCount'] = ApiClient.convertToType(data['totalTabCount'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
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
   * @member {module:model/PropertyMetadata} accessCodeMetadata
   */
  exports.prototype['accessCodeMetadata'] = undefined;
  /**
   * This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
   * @member {String} addAccessCodeToEmail
   */
  exports.prototype['addAccessCodeToEmail'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientAdditionalNotification>} additionalNotifications
   */
  exports.prototype['additionalNotifications'] = undefined;
  /**
   * 
   * @member {String} allowSystemOverrideForLockedRecipient
   */
  exports.prototype['allowSystemOverrideForLockedRecipient'] = undefined;
  /**
   * 
   * @member {String} autoRespondedReason
   */
  exports.prototype['autoRespondedReason'] = undefined;
  /**
   * Specifies whether the recipient is embedded or remote.   If the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng.   Maximum length: 100 characters. 
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * 
   * @member {String} completedCount
   */
  exports.prototype['completedCount'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ConsentDetails>} consentDetailsList
   */
  exports.prototype['consentDetailsList'] = undefined;
  /**
   * An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
   * @member {Array.<String>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * The date and time the recipient declined the document.
   * @member {String} declinedDateTime
   */
  exports.prototype['declinedDateTime'] = undefined;
  /**
   * The reason the recipient declined the document.
   * @member {String} declinedReason
   */
  exports.prototype['declinedReason'] = undefined;
  /**
   * Reserved: For DocuSign use only.
   * @member {String} deliveredDateTime
   */
  exports.prototype['deliveredDateTime'] = undefined;
  /**
   * Reserved: For DocuSign use only.
   * @member {String} deliveryMethod
   */
  exports.prototype['deliveryMethod'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} deliveryMethodMetadata
   */
  exports.prototype['deliveryMethodMetadata'] = undefined;
  /**
   * 
   * @member {String} designatorId
   */
  exports.prototype['designatorId'] = undefined;
  /**
   * 
   * @member {String} designatorIdGuid
   */
  exports.prototype['designatorIdGuid'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocumentVisibility>} documentVisibility
   */
  exports.prototype['documentVisibility'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} emailMetadata
   */
  exports.prototype['emailMetadata'] = undefined;
  /**
   * @member {module:model/RecipientEmailNotification} emailNotification
   */
  exports.prototype['emailNotification'] = undefined;
  /**
   * 
   * @member {String} emailRecipientPostSigningURL
   */
  exports.prototype['emailRecipientPostSigningURL'] = undefined;
  /**
   * Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender's system (the server responding to the URL) must request a recipient token to launch a signing session.   If set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.  It is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient's identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.  If the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets.   *Example*:   `http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]` 
   * @member {String} embeddedRecipientStartURL
   */
  exports.prototype['embeddedRecipientStartURL'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Reserved:
   * @member {String} faxNumber
   */
  exports.prototype['faxNumber'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} faxNumberMetadata
   */
  exports.prototype['faxNumberMetadata'] = undefined;
  /**
   * The user's first name.  Maximum Length: 50 characters.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} firstNameMetadata
   */
  exports.prototype['firstNameMetadata'] = undefined;
  /**
   * 
   * @member {String} fullName
   */
  exports.prototype['fullName'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} fullNameMetadata
   */
  exports.prototype['fullNameMetadata'] = undefined;
  /**
   * Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account (these name can also be found in the web console sending interface in the Identify list for a recipient,) This overrides any default authentication setting.  *Example*: Your account has ID Check and SMS Authentication available and in the web console Identify list these appear as 'ID Check $' and 'SMS Auth $'. To use ID check in an envelope, the idCheckConfigurationName should be 'ID Check '. If you wanted to use SMS, it would be 'SMS Auth $' and you would need to add you would need to add phone number information to the `smsAuthentication` node.
   * @member {String} idCheckConfigurationName
   */
  exports.prototype['idCheckConfigurationName'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} idCheckConfigurationNameMetadata
   */
  exports.prototype['idCheckConfigurationNameMetadata'] = undefined;
  /**
   * @member {module:model/IdCheckInformationInput} idCheckInformationInput
   */
  exports.prototype['idCheckInformationInput'] = undefined;
  /**
   * @member {module:model/RecipientIdentityVerification} identityVerification
   */
  exports.prototype['identityVerification'] = undefined;
  /**
   * When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account. 
   * @member {String} inheritEmailNotificationConfiguration
   */
  exports.prototype['inheritEmailNotificationConfiguration'] = undefined;
  /**
   * 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} lastNameMetadata
   */
  exports.prototype['lastNameMetadata'] = undefined;
  /**
   * 
   * @member {String} lockedRecipientPhoneAuthEditable
   */
  exports.prototype['lockedRecipientPhoneAuthEditable'] = undefined;
  /**
   * 
   * @member {String} lockedRecipientSmsEditable
   */
  exports.prototype['lockedRecipientSmsEditable'] = undefined;
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
   * Specifies a note that is unique to this recipient. This note is sent to the recipient via the signing email. The note displays in the signing UI near the upper left corner of the document on the signing screen.  Maximum Length: 1000 characters.
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} noteMetadata
   */
  exports.prototype['noteMetadata'] = undefined;
  /**
   * 
   * @member {String} participateFor
   */
  exports.prototype['participateFor'] = undefined;
  /**
   * 
   * @member {String} participateForGuid
   */
  exports.prototype['participateForGuid'] = undefined;
  /**
   * @member {module:model/RecipientPhoneAuthentication} phoneAuthentication
   */
  exports.prototype['phoneAuthentication'] = undefined;
  /**
   * @member {module:model/RecipientPhoneNumber} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * Reserved:
   * @member {Array.<module:model/RecipientAttachment>} recipientAttachments
   */
  exports.prototype['recipientAttachments'] = undefined;
  /**
   * @member {module:model/AuthenticationStatus} recipientAuthenticationStatus
   */
  exports.prototype['recipientAuthenticationStatus'] = undefined;
  /**
   * 
   * @member {Array.<module:model/FeatureAvailableMetadata>} recipientFeatureMetadata
   */
  exports.prototype['recipientFeatureMetadata'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * 
   * @member {String} recipientIdGuid
   */
  exports.prototype['recipientIdGuid'] = undefined;
  /**
   * 
   * @member {String} recipientType
   */
  exports.prototype['recipientType'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} recipientTypeMetadata
   */
  exports.prototype['recipientTypeMetadata'] = undefined;
  /**
   * When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity. 
   * @member {String} requireIdLookup
   */
  exports.prototype['requireIdLookup'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} requireIdLookupMetadata
   */
  exports.prototype['requireIdLookupMetadata'] = undefined;
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
   * @member {module:model/PropertyMetadata} routingOrderMetadata
   */
  exports.prototype['routingOrderMetadata'] = undefined;
  /**
   * The date and time the envelope was sent.
   * @member {String} sentDateTime
   */
  exports.prototype['sentDateTime'] = undefined;
  /**
   * Reserved: For DocuSign use only. 
   * @member {String} signedDateTime
   */
  exports.prototype['signedDateTime'] = undefined;
  /**
   * When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
   * @member {String} signingGroupId
   */
  exports.prototype['signingGroupId'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} signingGroupIdMetadata
   */
  exports.prototype['signingGroupIdMetadata'] = undefined;
  /**
   * The display name for the signing group.   Maximum Length: 100 characters. 
   * @member {String} signingGroupName
   */
  exports.prototype['signingGroupName'] = undefined;
  /**
   * A complex type that contains information about users in the signing group.
   * @member {Array.<module:model/UserInfo>} signingGroupUsers
   */
  exports.prototype['signingGroupUsers'] = undefined;
  /**
   * @member {module:model/RecipientSMSAuthentication} smsAuthentication
   */
  exports.prototype['smsAuthentication'] = undefined;
  /**
   *  Lists the social ID type that can be used for recipient authentication.
   * @member {Array.<module:model/SocialAuthentication>} socialAuthentications
   */
  exports.prototype['socialAuthentications'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} statusCode
   */
  exports.prototype['statusCode'] = undefined;
  /**
   * 
   * @member {String} suppressEmails
   */
  exports.prototype['suppressEmails'] = undefined;
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
   * @member {String} totalTabCount
   */
  exports.prototype['totalTabCount'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


