(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Attachment', './AuthenticationStatus', './ErrorDetails', './IdCheckInformationInput', './RecipientEmailNotification', './RecipientPhoneAuthentication', './RecipientSAMLAuthentication', './RecipientSMSAuthentication', './SocialAuthentication', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Attachment'), require('./AuthenticationStatus'), require('./ErrorDetails'), require('./IdCheckInformationInput'), require('./RecipientEmailNotification'), require('./RecipientPhoneAuthentication'), require('./RecipientSAMLAuthentication'), require('./RecipientSMSAuthentication'), require('./SocialAuthentication'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Attachment, root.Docusign.AuthenticationStatus, root.Docusign.ErrorDetails, root.Docusign.IdCheckInformationInput, root.Docusign.RecipientEmailNotification, root.Docusign.RecipientPhoneAuthentication, root.Docusign.RecipientSAMLAuthentication, root.Docusign.RecipientSMSAuthentication, root.Docusign.SocialAuthentication, root.Docusign.UserInfo);
  }
}(this, function(module, Attachment, AuthenticationStatus, ErrorDetails, IdCheckInformationInput, RecipientEmailNotification, RecipientPhoneAuthentication, RecipientSAMLAuthentication, RecipientSMSAuthentication, SocialAuthentication, UserInfo) {
  'use strict';

  
  

  
  var Editor = function Editor() { 
    var self = this;
    
    /**
     * legal name of the recipient.\n\nMaximum Length: 100 characters.
     * datatype: String
     **/
    self.name = null;
    
    /**
     * Email id of the recipient. Notification of the document to sign is sent to this email id. \n\nMaximum length: 100 characters.
     * datatype: String
     **/
    self.email = null;
    
    /**
     * 
     * datatype: String
     **/
    self.emailRecipientPostSigningURL = null;
    
    /**
     * When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
     * datatype: String
     **/
    self.signingGroupId = null;
    
    /**
     * The display name for the signing group. \n\nMaximum Length: 100 characters.
     * datatype: String
     **/
    self.signingGroupName = null;
    
    /**
     * A complex type that contains information about users in the signing group.
     * datatype: Array
     **/
    self.signingGroupUsers = [];
    
    /**
     * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * datatype: String
     **/
    self.recipientId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.recipientIdGuid = null;
    
    /**
     * If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. \n\nMaximum Length: 50 characters and must conform to account’s access code format setting.\n\nIf blank, but the signer `accessCode` property is set in the envelope, then that value is used.\n\nIf blank and the signer `accessCode` property is not set, then access code is not required.
     * datatype: String
     **/
    self.accessCode = null;
    
    /**
     * This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
     * datatype: String
     **/
    self.addAccessCodeToEmail = null;
    
    /**
     * When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity.
     * datatype: String
     **/
    self.requireIdLookup = null;
    
    /**
     * Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account (these name can also be found in the web console sending interface in the Identify list for a recipient,) This overrides any default authentication setting.\n\n*Example*: Your account has ID Check and SMS Authentication available and in the web console Identify list these appear as 'ID Check $' and 'SMS Auth $'. To use ID check in an envelope, the idCheckConfigurationName should be 'ID Check '. If you wanted to use SMS, it would be 'SMS Auth $' and you would need to add you would need to add phone number information to the `smsAuthentication` node.
     * datatype: String
     **/
    self.idCheckConfigurationName = null;
    
    /**
     * Lists the social ID type that can be used for recipient authentication.
     * datatype: Array
     **/
    self.socialAuthentications = [];
    
    /**
     * datatype: RecipientPhoneAuthentication
     **/
    self.phoneAuthentication = null;
    
    /**
     * datatype: RecipientSAMLAuthentication
     **/
    self.samlAuthentication = null;
    
    /**
     * datatype: RecipientSMSAuthentication
     **/
    self.smsAuthentication = null;
    
    /**
     * 
     * datatype: String
     **/
    self.userId = null;
    
    /**
     * Specifies whether the recipient is embedded or remote. \n\nIf the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng. \n\nMaximum length: 100 characters.
     * datatype: String
     **/
    self.clientUserId = null;
    
    /**
     * Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender’s system (the server responding to the URL) must request a recipient token to launch a signing session. \n\nIf set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.\n\nIt is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient’s identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.\n\nIf the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets. \n\n*Example*: \n\n`http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]`
     * datatype: String
     **/
    self.embeddedRecipientStartURL = null;
    
    /**
     * An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
     * datatype: Array
     **/
    self.customFields = [];
    
    /**
     * Specifies the routing order of the recipient in the envelope.
     * datatype: String
     **/
    self.routingOrder = null;
    
    /**
     * datatype: IdCheckInformationInput
     **/
    self.idCheckInformationInput = null;
    
    /**
     * Reserved:
     * datatype: Array
     **/
    self.recipientAttachments = [];
    
    /**
     * Specifies a note that is unique to this recipient. This note is sent to the recipient via the signing email. The note displays in the signing UI near the upper left corner of the document on the signing screen.\n\nMaximum Length: 1000 characters.
     * datatype: String
     **/
    self.note = null;
    
    /**
     * Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
     * datatype: String
     **/
    self.roleName = null;
    
    /**
     * Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * datatype: String
     **/
    self.status = null;
    
    /**
     * Reserved: For DocuSign use only.
     * datatype: String
     **/
    self.signedDateTime = null;
    
    /**
     * Reserved: For DocuSign use only.
     * datatype: String
     **/
    self.deliveredDateTime = null;
    
    /**
     * The date and time the recipient declined the document.
     * datatype: String
     **/
    self.declinedDateTime = null;
    
    /**
     * The date and time the envelope was sent.
     * datatype: String
     **/
    self.sentDateTime = null;
    
    /**
     * The reason the recipient declined the document.
     * datatype: String
     **/
    self.declinedReason = null;
    
    /**
     * Reserved: For DocuSign use only.
     * datatype: String
     **/
    self.deliveryMethod = null;
    
    /**
     * Reserved:
     * datatype: String
     **/
    self.faxNumber = null;
    
    /**
     * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * datatype: String
     **/
    self.templateLocked = null;
    
    /**
     * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * datatype: String
     **/
    self.templateRequired = null;
    
    /**
     * datatype: RecipientEmailNotification
     **/
    self.emailNotification = null;
    
    /**
     * When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account.
     * datatype: String
     **/
    self.inheritEmailNotificationConfiguration = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    
    /**
     * datatype: AuthenticationStatus
     **/
    self.recipientAuthenticationStatus = null;
    
    /**
     * 
     * datatype: String
     **/
    self.totalTabCount = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.emailRecipientPostSigningURL) {
        self.emailRecipientPostSigningURL = data.emailRecipientPostSigningURL;
      }
      
      if (data.signingGroupId) {
        self.signingGroupId = data.signingGroupId;
      }
      
      if (data.signingGroupName) {
        self.signingGroupName = data.signingGroupName;
      }
      
      if (data.signingGroupUsers) {
        self.signingGroupUsers = data.signingGroupUsers;
      }
      
      if (data.recipientId) {
        self.recipientId = data.recipientId;
      }
      
      if (data.recipientIdGuid) {
        self.recipientIdGuid = data.recipientIdGuid;
      }
      
      if (data.accessCode) {
        self.accessCode = data.accessCode;
      }
      
      if (data.addAccessCodeToEmail) {
        self.addAccessCodeToEmail = data.addAccessCodeToEmail;
      }
      
      if (data.requireIdLookup) {
        self.requireIdLookup = data.requireIdLookup;
      }
      
      if (data.idCheckConfigurationName) {
        self.idCheckConfigurationName = data.idCheckConfigurationName;
      }
      
      if (data.socialAuthentications) {
        self.socialAuthentications = data.socialAuthentications;
      }
      
      if (data.phoneAuthentication) {
        self.phoneAuthentication = new data.phoneAuthentication.constructor();
        self.phoneAuthentication.constructFromObject(data.phoneAuthentication);
      }
      
      if (data.samlAuthentication) {
        self.samlAuthentication = new data.samlAuthentication.constructor();
        self.samlAuthentication.constructFromObject(data.samlAuthentication);
      }
      
      if (data.smsAuthentication) {
        self.smsAuthentication = new data.smsAuthentication.constructor();
        self.smsAuthentication.constructFromObject(data.smsAuthentication);
      }
      
      if (data.userId) {
        self.userId = data.userId;
      }
      
      if (data.clientUserId) {
        self.clientUserId = data.clientUserId;
      }
      
      if (data.embeddedRecipientStartURL) {
        self.embeddedRecipientStartURL = data.embeddedRecipientStartURL;
      }
      
      if (data.customFields) {
        self.customFields = data.customFields;
      }
      
      if (data.routingOrder) {
        self.routingOrder = data.routingOrder;
      }
      
      if (data.idCheckInformationInput) {
        self.idCheckInformationInput = new data.idCheckInformationInput.constructor();
        self.idCheckInformationInput.constructFromObject(data.idCheckInformationInput);
      }
      
      if (data.recipientAttachments) {
        self.recipientAttachments = data.recipientAttachments;
      }
      
      if (data.note) {
        self.note = data.note;
      }
      
      if (data.roleName) {
        self.roleName = data.roleName;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.signedDateTime) {
        self.signedDateTime = data.signedDateTime;
      }
      
      if (data.deliveredDateTime) {
        self.deliveredDateTime = data.deliveredDateTime;
      }
      
      if (data.declinedDateTime) {
        self.declinedDateTime = data.declinedDateTime;
      }
      
      if (data.sentDateTime) {
        self.sentDateTime = data.sentDateTime;
      }
      
      if (data.declinedReason) {
        self.declinedReason = data.declinedReason;
      }
      
      if (data.deliveryMethod) {
        self.deliveryMethod = data.deliveryMethod;
      }
      
      if (data.faxNumber) {
        self.faxNumber = data.faxNumber;
      }
      
      if (data.templateLocked) {
        self.templateLocked = data.templateLocked;
      }
      
      if (data.templateRequired) {
        self.templateRequired = data.templateRequired;
      }
      
      if (data.emailNotification) {
        self.emailNotification = new data.emailNotification.constructor();
        self.emailNotification.constructFromObject(data.emailNotification);
      }
      
      if (data.inheritEmailNotificationConfiguration) {
        self.inheritEmailNotificationConfiguration = data.inheritEmailNotificationConfiguration;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
      if (data.recipientAuthenticationStatus) {
        self.recipientAuthenticationStatus = new data.recipientAuthenticationStatus.constructor();
        self.recipientAuthenticationStatus.constructFromObject(data.recipientAuthenticationStatus);
      }
      
      if (data.totalTabCount) {
        self.totalTabCount = data.totalTabCount;
      }
      
    }

    
    /**
     * get legal name of the recipient.\n\nMaximum Length: 100 characters.
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set legal name of the recipient.\n\nMaximum Length: 100 characters.
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get Email id of the recipient. Notification of the document to sign is sent to this email id. \n\nMaximum length: 100 characters.
     * @return {String}
     **/
    self.getEmail = function() {
      return self.email;
    }

    /**
     * set Email id of the recipient. Notification of the document to sign is sent to this email id. \n\nMaximum length: 100 characters.
     * @param {String} email
     **/
    self.setEmail = function (email) {
      self.email = email;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEmailRecipientPostSigningURL = function() {
      return self.emailRecipientPostSigningURL;
    }

    /**
     * set 
     * @param {String} emailRecipientPostSigningURL
     **/
    self.setEmailRecipientPostSigningURL = function (emailRecipientPostSigningURL) {
      self.emailRecipientPostSigningURL = emailRecipientPostSigningURL;
    }
    
    /**
     * get When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
     * @return {String}
     **/
    self.getSigningGroupId = function() {
      return self.signingGroupId;
    }

    /**
     * set When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
     * @param {String} signingGroupId
     **/
    self.setSigningGroupId = function (signingGroupId) {
      self.signingGroupId = signingGroupId;
    }
    
    /**
     * get The display name for the signing group. \n\nMaximum Length: 100 characters.
     * @return {String}
     **/
    self.getSigningGroupName = function() {
      return self.signingGroupName;
    }

    /**
     * set The display name for the signing group. \n\nMaximum Length: 100 characters.
     * @param {String} signingGroupName
     **/
    self.setSigningGroupName = function (signingGroupName) {
      self.signingGroupName = signingGroupName;
    }
    
    /**
     * get A complex type that contains information about users in the signing group.
     * @return {Array}
     **/
    self.getSigningGroupUsers = function() {
      return self.signingGroupUsers;
    }

    /**
     * set A complex type that contains information about users in the signing group.
     * @param {Array} signingGroupUsers
     **/
    self.setSigningGroupUsers = function (signingGroupUsers) {
      self.signingGroupUsers = signingGroupUsers;
    }
    
    /**
     * get Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @return {String}
     **/
    self.getRecipientId = function() {
      return self.recipientId;
    }

    /**
     * set Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @param {String} recipientId
     **/
    self.setRecipientId = function (recipientId) {
      self.recipientId = recipientId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getRecipientIdGuid = function() {
      return self.recipientIdGuid;
    }

    /**
     * set 
     * @param {String} recipientIdGuid
     **/
    self.setRecipientIdGuid = function (recipientIdGuid) {
      self.recipientIdGuid = recipientIdGuid;
    }
    
    /**
     * get If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. \n\nMaximum Length: 50 characters and must conform to account’s access code format setting.\n\nIf blank, but the signer `accessCode` property is set in the envelope, then that value is used.\n\nIf blank and the signer `accessCode` property is not set, then access code is not required.
     * @return {String}
     **/
    self.getAccessCode = function() {
      return self.accessCode;
    }

    /**
     * set If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. \n\nMaximum Length: 50 characters and must conform to account’s access code format setting.\n\nIf blank, but the signer `accessCode` property is set in the envelope, then that value is used.\n\nIf blank and the signer `accessCode` property is not set, then access code is not required.
     * @param {String} accessCode
     **/
    self.setAccessCode = function (accessCode) {
      self.accessCode = accessCode;
    }
    
    /**
     * get This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
     * @return {String}
     **/
    self.getAddAccessCodeToEmail = function() {
      return self.addAccessCodeToEmail;
    }

    /**
     * set This Optional attribute indicates that the access code will be added to the email sent to the recipient; this nullifies the Security measure of Access Code on the recipient.
     * @param {String} addAccessCodeToEmail
     **/
    self.setAddAccessCodeToEmail = function (addAccessCodeToEmail) {
      self.addAccessCodeToEmail = addAccessCodeToEmail;
    }
    
    /**
     * get When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity.
     * @return {String}
     **/
    self.getRequireIdLookup = function() {
      return self.requireIdLookup;
    }

    /**
     * set When set to **true**, the recipient is required to use the specified ID check method (including Phone and SMS authentication) to validate their identity.
     * @param {String} requireIdLookup
     **/
    self.setRequireIdLookup = function (requireIdLookup) {
      self.requireIdLookup = requireIdLookup;
    }
    
    /**
     * get Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account (these name can also be found in the web console sending interface in the Identify list for a recipient,) This overrides any default authentication setting.\n\n*Example*: Your account has ID Check and SMS Authentication available and in the web console Identify list these appear as 'ID Check $' and 'SMS Auth $'. To use ID check in an envelope, the idCheckConfigurationName should be 'ID Check '. If you wanted to use SMS, it would be 'SMS Auth $' and you would need to add you would need to add phone number information to the `smsAuthentication` node.
     * @return {String}
     **/
    self.getIdCheckConfigurationName = function() {
      return self.idCheckConfigurationName;
    }

    /**
     * set Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account (these name can also be found in the web console sending interface in the Identify list for a recipient,) This overrides any default authentication setting.\n\n*Example*: Your account has ID Check and SMS Authentication available and in the web console Identify list these appear as 'ID Check $' and 'SMS Auth $'. To use ID check in an envelope, the idCheckConfigurationName should be 'ID Check '. If you wanted to use SMS, it would be 'SMS Auth $' and you would need to add you would need to add phone number information to the `smsAuthentication` node.
     * @param {String} idCheckConfigurationName
     **/
    self.setIdCheckConfigurationName = function (idCheckConfigurationName) {
      self.idCheckConfigurationName = idCheckConfigurationName;
    }
    
    /**
     * get Lists the social ID type that can be used for recipient authentication.
     * @return {Array}
     **/
    self.getSocialAuthentications = function() {
      return self.socialAuthentications;
    }

    /**
     * set Lists the social ID type that can be used for recipient authentication.
     * @param {Array} socialAuthentications
     **/
    self.setSocialAuthentications = function (socialAuthentications) {
      self.socialAuthentications = socialAuthentications;
    }
    
    /**
     * @return {RecipientPhoneAuthentication}
     **/
    self.getPhoneAuthentication = function() {
      return self.phoneAuthentication;
    }

    /**
     * @param {RecipientPhoneAuthentication} phoneAuthentication
     **/
    self.setPhoneAuthentication = function (phoneAuthentication) {
      self.phoneAuthentication = phoneAuthentication;
    }
    
    /**
     * @return {RecipientSAMLAuthentication}
     **/
    self.getSamlAuthentication = function() {
      return self.samlAuthentication;
    }

    /**
     * @param {RecipientSAMLAuthentication} samlAuthentication
     **/
    self.setSamlAuthentication = function (samlAuthentication) {
      self.samlAuthentication = samlAuthentication;
    }
    
    /**
     * @return {RecipientSMSAuthentication}
     **/
    self.getSmsAuthentication = function() {
      return self.smsAuthentication;
    }

    /**
     * @param {RecipientSMSAuthentication} smsAuthentication
     **/
    self.setSmsAuthentication = function (smsAuthentication) {
      self.smsAuthentication = smsAuthentication;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUserId = function() {
      return self.userId;
    }

    /**
     * set 
     * @param {String} userId
     **/
    self.setUserId = function (userId) {
      self.userId = userId;
    }
    
    /**
     * get Specifies whether the recipient is embedded or remote. \n\nIf the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng. \n\nMaximum length: 100 characters.
     * @return {String}
     **/
    self.getClientUserId = function() {
      return self.clientUserId;
    }

    /**
     * set Specifies whether the recipient is embedded or remote. \n\nIf the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng. \n\nMaximum length: 100 characters.
     * @param {String} clientUserId
     **/
    self.setClientUserId = function (clientUserId) {
      self.clientUserId = clientUserId;
    }
    
    /**
     * get Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender’s system (the server responding to the URL) must request a recipient token to launch a signing session. \n\nIf set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.\n\nIt is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient’s identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.\n\nIf the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets. \n\n*Example*: \n\n`http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]`
     * @return {String}
     **/
    self.getEmbeddedRecipientStartURL = function() {
      return self.embeddedRecipientStartURL;
    }

    /**
     * set Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender’s system (the server responding to the URL) must request a recipient token to launch a signing session. \n\nIf set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.\n\nIt is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient’s identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.\n\nIf the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets. \n\n*Example*: \n\n`http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]`
     * @param {String} embeddedRecipientStartURL
     **/
    self.setEmbeddedRecipientStartURL = function (embeddedRecipientStartURL) {
      self.embeddedRecipientStartURL = embeddedRecipientStartURL;
    }
    
    /**
     * get An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
     * @return {Array}
     **/
    self.getCustomFields = function() {
      return self.customFields;
    }

    /**
     * set An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
     * @param {Array} customFields
     **/
    self.setCustomFields = function (customFields) {
      self.customFields = customFields;
    }
    
    /**
     * get Specifies the routing order of the recipient in the envelope.
     * @return {String}
     **/
    self.getRoutingOrder = function() {
      return self.routingOrder;
    }

    /**
     * set Specifies the routing order of the recipient in the envelope.
     * @param {String} routingOrder
     **/
    self.setRoutingOrder = function (routingOrder) {
      self.routingOrder = routingOrder;
    }
    
    /**
     * @return {IdCheckInformationInput}
     **/
    self.getIdCheckInformationInput = function() {
      return self.idCheckInformationInput;
    }

    /**
     * @param {IdCheckInformationInput} idCheckInformationInput
     **/
    self.setIdCheckInformationInput = function (idCheckInformationInput) {
      self.idCheckInformationInput = idCheckInformationInput;
    }
    
    /**
     * get Reserved:
     * @return {Array}
     **/
    self.getRecipientAttachments = function() {
      return self.recipientAttachments;
    }

    /**
     * set Reserved:
     * @param {Array} recipientAttachments
     **/
    self.setRecipientAttachments = function (recipientAttachments) {
      self.recipientAttachments = recipientAttachments;
    }
    
    /**
     * get Specifies a note that is unique to this recipient. This note is sent to the recipient via the signing email. The note displays in the signing UI near the upper left corner of the document on the signing screen.\n\nMaximum Length: 1000 characters.
     * @return {String}
     **/
    self.getNote = function() {
      return self.note;
    }

    /**
     * set Specifies a note that is unique to this recipient. This note is sent to the recipient via the signing email. The note displays in the signing UI near the upper left corner of the document on the signing screen.\n\nMaximum Length: 1000 characters.
     * @param {String} note
     **/
    self.setNote = function (note) {
      self.note = note;
    }
    
    /**
     * get Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
     * @return {String}
     **/
    self.getRoleName = function() {
      return self.roleName;
    }

    /**
     * set Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
     * @param {String} roleName
     **/
    self.setRoleName = function (roleName) {
      self.roleName = roleName;
    }
    
    /**
     * get Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @return {String}
     **/
    self.getStatus = function() {
      return self.status;
    }

    /**
     * set Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @param {String} status
     **/
    self.setStatus = function (status) {
      self.status = status;
    }
    
    /**
     * get Reserved: For DocuSign use only.
     * @return {String}
     **/
    self.getSignedDateTime = function() {
      return self.signedDateTime;
    }

    /**
     * set Reserved: For DocuSign use only.
     * @param {String} signedDateTime
     **/
    self.setSignedDateTime = function (signedDateTime) {
      self.signedDateTime = signedDateTime;
    }
    
    /**
     * get Reserved: For DocuSign use only.
     * @return {String}
     **/
    self.getDeliveredDateTime = function() {
      return self.deliveredDateTime;
    }

    /**
     * set Reserved: For DocuSign use only.
     * @param {String} deliveredDateTime
     **/
    self.setDeliveredDateTime = function (deliveredDateTime) {
      self.deliveredDateTime = deliveredDateTime;
    }
    
    /**
     * get The date and time the recipient declined the document.
     * @return {String}
     **/
    self.getDeclinedDateTime = function() {
      return self.declinedDateTime;
    }

    /**
     * set The date and time the recipient declined the document.
     * @param {String} declinedDateTime
     **/
    self.setDeclinedDateTime = function (declinedDateTime) {
      self.declinedDateTime = declinedDateTime;
    }
    
    /**
     * get The date and time the envelope was sent.
     * @return {String}
     **/
    self.getSentDateTime = function() {
      return self.sentDateTime;
    }

    /**
     * set The date and time the envelope was sent.
     * @param {String} sentDateTime
     **/
    self.setSentDateTime = function (sentDateTime) {
      self.sentDateTime = sentDateTime;
    }
    
    /**
     * get The reason the recipient declined the document.
     * @return {String}
     **/
    self.getDeclinedReason = function() {
      return self.declinedReason;
    }

    /**
     * set The reason the recipient declined the document.
     * @param {String} declinedReason
     **/
    self.setDeclinedReason = function (declinedReason) {
      self.declinedReason = declinedReason;
    }
    
    /**
     * get Reserved: For DocuSign use only.
     * @return {String}
     **/
    self.getDeliveryMethod = function() {
      return self.deliveryMethod;
    }

    /**
     * set Reserved: For DocuSign use only.
     * @param {String} deliveryMethod
     **/
    self.setDeliveryMethod = function (deliveryMethod) {
      self.deliveryMethod = deliveryMethod;
    }
    
    /**
     * get Reserved:
     * @return {String}
     **/
    self.getFaxNumber = function() {
      return self.faxNumber;
    }

    /**
     * set Reserved:
     * @param {String} faxNumber
     **/
    self.setFaxNumber = function (faxNumber) {
      self.faxNumber = faxNumber;
    }
    
    /**
     * get When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * @return {String}
     **/
    self.getTemplateLocked = function() {
      return self.templateLocked;
    }

    /**
     * set When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * @param {String} templateLocked
     **/
    self.setTemplateLocked = function (templateLocked) {
      self.templateLocked = templateLocked;
    }
    
    /**
     * get When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * @return {String}
     **/
    self.getTemplateRequired = function() {
      return self.templateRequired;
    }

    /**
     * set When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * @param {String} templateRequired
     **/
    self.setTemplateRequired = function (templateRequired) {
      self.templateRequired = templateRequired;
    }
    
    /**
     * @return {RecipientEmailNotification}
     **/
    self.getEmailNotification = function() {
      return self.emailNotification;
    }

    /**
     * @param {RecipientEmailNotification} emailNotification
     **/
    self.setEmailNotification = function (emailNotification) {
      self.emailNotification = emailNotification;
    }
    
    /**
     * get When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account.
     * @return {String}
     **/
    self.getInheritEmailNotificationConfiguration = function() {
      return self.inheritEmailNotificationConfiguration;
    }

    /**
     * set When set to **true** and the envelope recipient creates a DocuSign account after signing, the Manage Account Email Notification settings are used as the default settings for the recipient's account.
     * @param {String} inheritEmailNotificationConfiguration
     **/
    self.setInheritEmailNotificationConfiguration = function (inheritEmailNotificationConfiguration) {
      self.inheritEmailNotificationConfiguration = inheritEmailNotificationConfiguration;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    
    /**
     * @return {AuthenticationStatus}
     **/
    self.getRecipientAuthenticationStatus = function() {
      return self.recipientAuthenticationStatus;
    }

    /**
     * @param {AuthenticationStatus} recipientAuthenticationStatus
     **/
    self.setRecipientAuthenticationStatus = function (recipientAuthenticationStatus) {
      self.recipientAuthenticationStatus = recipientAuthenticationStatus;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getTotalTabCount = function() {
      return self.totalTabCount;
    }

    /**
     * set 
     * @param {String} totalTabCount
     **/
    self.setTotalTabCount = function (totalTabCount) {
      self.totalTabCount = totalTabCount;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Editor = Editor;
  }

  return Editor;
  
  
}));
