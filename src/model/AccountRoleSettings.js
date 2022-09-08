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
    define(['ApiClient', 'model/SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountRoleSettings = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The AccountRoleSettings model module.
   * @module model/AccountRoleSettings
   */

  /**
   * Constructs a new <code>AccountRoleSettings</code>.
   * This object defines account permissions for users who are associated with the account permission profile. 
   * @alias module:model/AccountRoleSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountRoleSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountRoleSettings} obj Optional instance to populate.
   * @return {module:model/AccountRoleSettings} The populated <code>AccountRoleSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowAccountManagement')) {
        obj['allowAccountManagement'] = ApiClient.convertToType(data['allowAccountManagement'], 'String');
      }
      if (data.hasOwnProperty('allowAccountManagementMetadata')) {
        obj['allowAccountManagementMetadata'] = SettingsMetadata.constructFromObject(data['allowAccountManagementMetadata']);
      }
      if (data.hasOwnProperty('allowApiAccess')) {
        obj['allowApiAccess'] = ApiClient.convertToType(data['allowApiAccess'], 'String');
      }
      if (data.hasOwnProperty('allowApiAccessMetadata')) {
        obj['allowApiAccessMetadata'] = SettingsMetadata.constructFromObject(data['allowApiAccessMetadata']);
      }
      if (data.hasOwnProperty('allowApiAccessToAccount')) {
        obj['allowApiAccessToAccount'] = ApiClient.convertToType(data['allowApiAccessToAccount'], 'String');
      }
      if (data.hasOwnProperty('allowApiAccessToAccountMetadata')) {
        obj['allowApiAccessToAccountMetadata'] = SettingsMetadata.constructFromObject(data['allowApiAccessToAccountMetadata']);
      }
      if (data.hasOwnProperty('allowApiSendingOnBehalfOfOthers')) {
        obj['allowApiSendingOnBehalfOfOthers'] = ApiClient.convertToType(data['allowApiSendingOnBehalfOfOthers'], 'String');
      }
      if (data.hasOwnProperty('allowApiSendingOnBehalfOfOthersMetadata')) {
        obj['allowApiSendingOnBehalfOfOthersMetadata'] = SettingsMetadata.constructFromObject(data['allowApiSendingOnBehalfOfOthersMetadata']);
      }
      if (data.hasOwnProperty('allowApiSequentialSigning')) {
        obj['allowApiSequentialSigning'] = ApiClient.convertToType(data['allowApiSequentialSigning'], 'String');
      }
      if (data.hasOwnProperty('allowApiSequentialSigningMetadata')) {
        obj['allowApiSequentialSigningMetadata'] = SettingsMetadata.constructFromObject(data['allowApiSequentialSigningMetadata']);
      }
      if (data.hasOwnProperty('allowAutoTagging')) {
        obj['allowAutoTagging'] = ApiClient.convertToType(data['allowAutoTagging'], 'String');
      }
      if (data.hasOwnProperty('allowAutoTaggingMetadata')) {
        obj['allowAutoTaggingMetadata'] = SettingsMetadata.constructFromObject(data['allowAutoTaggingMetadata']);
      }
      if (data.hasOwnProperty('allowBulkSending')) {
        obj['allowBulkSending'] = ApiClient.convertToType(data['allowBulkSending'], 'String');
      }
      if (data.hasOwnProperty('allowBulkSendingMetadata')) {
        obj['allowBulkSendingMetadata'] = SettingsMetadata.constructFromObject(data['allowBulkSendingMetadata']);
      }
      if (data.hasOwnProperty('allowDocuSignDesktopClient')) {
        obj['allowDocuSignDesktopClient'] = ApiClient.convertToType(data['allowDocuSignDesktopClient'], 'String');
      }
      if (data.hasOwnProperty('allowDocuSignDesktopClientMetadata')) {
        obj['allowDocuSignDesktopClientMetadata'] = SettingsMetadata.constructFromObject(data['allowDocuSignDesktopClientMetadata']);
      }
      if (data.hasOwnProperty('allowedAddressBookAccess')) {
        obj['allowedAddressBookAccess'] = ApiClient.convertToType(data['allowedAddressBookAccess'], 'String');
      }
      if (data.hasOwnProperty('allowedAddressBookAccessMetadata')) {
        obj['allowedAddressBookAccessMetadata'] = SettingsMetadata.constructFromObject(data['allowedAddressBookAccessMetadata']);
      }
      if (data.hasOwnProperty('allowedClickwrapsAccess')) {
        obj['allowedClickwrapsAccess'] = ApiClient.convertToType(data['allowedClickwrapsAccess'], 'String');
      }
      if (data.hasOwnProperty('allowedClickwrapsAccessMetadata')) {
        obj['allowedClickwrapsAccessMetadata'] = SettingsMetadata.constructFromObject(data['allowedClickwrapsAccessMetadata']);
      }
      if (data.hasOwnProperty('allowedTemplateAccess')) {
        obj['allowedTemplateAccess'] = ApiClient.convertToType(data['allowedTemplateAccess'], 'String');
      }
      if (data.hasOwnProperty('allowedTemplateAccessMetadata')) {
        obj['allowedTemplateAccessMetadata'] = SettingsMetadata.constructFromObject(data['allowedTemplateAccessMetadata']);
      }
      if (data.hasOwnProperty('allowedToBeEnvelopeTransferRecipient')) {
        obj['allowedToBeEnvelopeTransferRecipient'] = ApiClient.convertToType(data['allowedToBeEnvelopeTransferRecipient'], 'String');
      }
      if (data.hasOwnProperty('allowedToBeEnvelopeTransferRecipientMetadata')) {
        obj['allowedToBeEnvelopeTransferRecipientMetadata'] = SettingsMetadata.constructFromObject(data['allowedToBeEnvelopeTransferRecipientMetadata']);
      }
      if (data.hasOwnProperty('allowEnvelopeSending')) {
        obj['allowEnvelopeSending'] = ApiClient.convertToType(data['allowEnvelopeSending'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopeSendingMetadata')) {
        obj['allowEnvelopeSendingMetadata'] = SettingsMetadata.constructFromObject(data['allowEnvelopeSendingMetadata']);
      }
      if (data.hasOwnProperty('allowESealRecipients')) {
        obj['allowESealRecipients'] = ApiClient.convertToType(data['allowESealRecipients'], 'String');
      }
      if (data.hasOwnProperty('allowESealRecipientsMetadata')) {
        obj['allowESealRecipientsMetadata'] = SettingsMetadata.constructFromObject(data['allowESealRecipientsMetadata']);
      }
      if (data.hasOwnProperty('allowPowerFormsAdminToAccessAllPowerFormEnvelopes')) {
        obj['allowPowerFormsAdminToAccessAllPowerFormEnvelopes'] = ApiClient.convertToType(data['allowPowerFormsAdminToAccessAllPowerFormEnvelopes'], 'String');
      }
      if (data.hasOwnProperty('allowPowerFormsAdminToAccessAllPowerFormEnvelopesMetadata')) {
        obj['allowPowerFormsAdminToAccessAllPowerFormEnvelopesMetadata'] = SettingsMetadata.constructFromObject(data['allowPowerFormsAdminToAccessAllPowerFormEnvelopesMetadata']);
      }
      if (data.hasOwnProperty('allowSendersToSetRecipientEmailLanguage')) {
        obj['allowSendersToSetRecipientEmailLanguage'] = ApiClient.convertToType(data['allowSendersToSetRecipientEmailLanguage'], 'String');
      }
      if (data.hasOwnProperty('allowSendersToSetRecipientEmailLanguageMetadata')) {
        obj['allowSendersToSetRecipientEmailLanguageMetadata'] = SettingsMetadata.constructFromObject(data['allowSendersToSetRecipientEmailLanguageMetadata']);
      }
      if (data.hasOwnProperty('allowSignerAttachments')) {
        obj['allowSignerAttachments'] = ApiClient.convertToType(data['allowSignerAttachments'], 'String');
      }
      if (data.hasOwnProperty('allowSignerAttachmentsMetadata')) {
        obj['allowSignerAttachmentsMetadata'] = SettingsMetadata.constructFromObject(data['allowSignerAttachmentsMetadata']);
      }
      if (data.hasOwnProperty('allowSupplementalDocuments')) {
        obj['allowSupplementalDocuments'] = ApiClient.convertToType(data['allowSupplementalDocuments'], 'String');
      }
      if (data.hasOwnProperty('allowSupplementalDocumentsMetadata')) {
        obj['allowSupplementalDocumentsMetadata'] = SettingsMetadata.constructFromObject(data['allowSupplementalDocumentsMetadata']);
      }
      if (data.hasOwnProperty('allowTaggingInSendAndCorrect')) {
        obj['allowTaggingInSendAndCorrect'] = ApiClient.convertToType(data['allowTaggingInSendAndCorrect'], 'String');
      }
      if (data.hasOwnProperty('allowTaggingInSendAndCorrectMetadata')) {
        obj['allowTaggingInSendAndCorrectMetadata'] = SettingsMetadata.constructFromObject(data['allowTaggingInSendAndCorrectMetadata']);
      }
      if (data.hasOwnProperty('allowVaulting')) {
        obj['allowVaulting'] = ApiClient.convertToType(data['allowVaulting'], 'String');
      }
      if (data.hasOwnProperty('allowVaultingMetadata')) {
        obj['allowVaultingMetadata'] = SettingsMetadata.constructFromObject(data['allowVaultingMetadata']);
      }
      if (data.hasOwnProperty('allowWetSigningOverride')) {
        obj['allowWetSigningOverride'] = ApiClient.convertToType(data['allowWetSigningOverride'], 'String');
      }
      if (data.hasOwnProperty('allowWetSigningOverrideMetadata')) {
        obj['allowWetSigningOverrideMetadata'] = SettingsMetadata.constructFromObject(data['allowWetSigningOverrideMetadata']);
      }
      if (data.hasOwnProperty('canCreateWorkspaces')) {
        obj['canCreateWorkspaces'] = ApiClient.convertToType(data['canCreateWorkspaces'], 'String');
      }
      if (data.hasOwnProperty('canCreateWorkspacesMetadata')) {
        obj['canCreateWorkspacesMetadata'] = SettingsMetadata.constructFromObject(data['canCreateWorkspacesMetadata']);
      }
      if (data.hasOwnProperty('canSendEnvelopesViaSMS')) {
        obj['canSendEnvelopesViaSMS'] = ApiClient.convertToType(data['canSendEnvelopesViaSMS'], 'String');
      }
      if (data.hasOwnProperty('canSendEnvelopesViaSMSMetadata')) {
        obj['canSendEnvelopesViaSMSMetadata'] = SettingsMetadata.constructFromObject(data['canSendEnvelopesViaSMSMetadata']);
      }
      if (data.hasOwnProperty('disableDocumentUpload')) {
        obj['disableDocumentUpload'] = ApiClient.convertToType(data['disableDocumentUpload'], 'String');
      }
      if (data.hasOwnProperty('disableDocumentUploadMetadata')) {
        obj['disableDocumentUploadMetadata'] = SettingsMetadata.constructFromObject(data['disableDocumentUploadMetadata']);
      }
      if (data.hasOwnProperty('disableOtherActions')) {
        obj['disableOtherActions'] = ApiClient.convertToType(data['disableOtherActions'], 'String');
      }
      if (data.hasOwnProperty('disableOtherActionsMetadata')) {
        obj['disableOtherActionsMetadata'] = SettingsMetadata.constructFromObject(data['disableOtherActionsMetadata']);
      }
      if (data.hasOwnProperty('enableApiRequestLogging')) {
        obj['enableApiRequestLogging'] = ApiClient.convertToType(data['enableApiRequestLogging'], 'String');
      }
      if (data.hasOwnProperty('enableApiRequestLoggingMetadata')) {
        obj['enableApiRequestLoggingMetadata'] = SettingsMetadata.constructFromObject(data['enableApiRequestLoggingMetadata']);
      }
      if (data.hasOwnProperty('enableKeyTermsSuggestionsByDocumentType')) {
        obj['enableKeyTermsSuggestionsByDocumentType'] = ApiClient.convertToType(data['enableKeyTermsSuggestionsByDocumentType'], 'String');
      }
      if (data.hasOwnProperty('enableKeyTermsSuggestionsByDocumentTypeMetadata')) {
        obj['enableKeyTermsSuggestionsByDocumentTypeMetadata'] = SettingsMetadata.constructFromObject(data['enableKeyTermsSuggestionsByDocumentTypeMetadata']);
      }
      if (data.hasOwnProperty('enableRecipientViewingNotifications')) {
        obj['enableRecipientViewingNotifications'] = ApiClient.convertToType(data['enableRecipientViewingNotifications'], 'String');
      }
      if (data.hasOwnProperty('enableRecipientViewingNotificationsMetadata')) {
        obj['enableRecipientViewingNotificationsMetadata'] = SettingsMetadata.constructFromObject(data['enableRecipientViewingNotificationsMetadata']);
      }
      if (data.hasOwnProperty('enableSequentialSigningInterface')) {
        obj['enableSequentialSigningInterface'] = ApiClient.convertToType(data['enableSequentialSigningInterface'], 'String');
      }
      if (data.hasOwnProperty('enableSequentialSigningInterfaceMetadata')) {
        obj['enableSequentialSigningInterfaceMetadata'] = SettingsMetadata.constructFromObject(data['enableSequentialSigningInterfaceMetadata']);
      }
      if (data.hasOwnProperty('enableTransactionPointIntegration')) {
        obj['enableTransactionPointIntegration'] = ApiClient.convertToType(data['enableTransactionPointIntegration'], 'String');
      }
      if (data.hasOwnProperty('enableTransactionPointIntegrationMetadata')) {
        obj['enableTransactionPointIntegrationMetadata'] = SettingsMetadata.constructFromObject(data['enableTransactionPointIntegrationMetadata']);
      }
      if (data.hasOwnProperty('powerFormRole')) {
        obj['powerFormRole'] = ApiClient.convertToType(data['powerFormRole'], 'String');
      }
      if (data.hasOwnProperty('powerFormRoleMetadata')) {
        obj['powerFormRoleMetadata'] = SettingsMetadata.constructFromObject(data['powerFormRoleMetadata']);
      }
      if (data.hasOwnProperty('receiveCompletedSelfSignedDocumentsAsEmailLinks')) {
        obj['receiveCompletedSelfSignedDocumentsAsEmailLinks'] = ApiClient.convertToType(data['receiveCompletedSelfSignedDocumentsAsEmailLinks'], 'String');
      }
      if (data.hasOwnProperty('receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata')) {
        obj['receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata'] = SettingsMetadata.constructFromObject(data['receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata']);
      }
      if (data.hasOwnProperty('signingUiVersionMetadata')) {
        obj['signingUiVersionMetadata'] = SettingsMetadata.constructFromObject(data['signingUiVersionMetadata']);
      }
      if (data.hasOwnProperty('supplementalDocumentsMustAccept')) {
        obj['supplementalDocumentsMustAccept'] = ApiClient.convertToType(data['supplementalDocumentsMustAccept'], 'String');
      }
      if (data.hasOwnProperty('supplementalDocumentsMustAcceptMetadata')) {
        obj['supplementalDocumentsMustAcceptMetadata'] = SettingsMetadata.constructFromObject(data['supplementalDocumentsMustAcceptMetadata']);
      }
      if (data.hasOwnProperty('supplementalDocumentsMustRead')) {
        obj['supplementalDocumentsMustRead'] = ApiClient.convertToType(data['supplementalDocumentsMustRead'], 'String');
      }
      if (data.hasOwnProperty('supplementalDocumentsMustReadMetadata')) {
        obj['supplementalDocumentsMustReadMetadata'] = SettingsMetadata.constructFromObject(data['supplementalDocumentsMustReadMetadata']);
      }
      if (data.hasOwnProperty('supplementalDocumentsMustView')) {
        obj['supplementalDocumentsMustView'] = ApiClient.convertToType(data['supplementalDocumentsMustView'], 'String');
      }
      if (data.hasOwnProperty('supplementalDocumentsMustViewMetadata')) {
        obj['supplementalDocumentsMustViewMetadata'] = SettingsMetadata.constructFromObject(data['supplementalDocumentsMustViewMetadata']);
      }
      if (data.hasOwnProperty('useNewDocuSignExperienceInterface')) {
        obj['useNewDocuSignExperienceInterface'] = ApiClient.convertToType(data['useNewDocuSignExperienceInterface'], 'String');
      }
      if (data.hasOwnProperty('useNewDocuSignExperienceInterfaceMetadata')) {
        obj['useNewDocuSignExperienceInterfaceMetadata'] = SettingsMetadata.constructFromObject(data['useNewDocuSignExperienceInterfaceMetadata']);
      }
      if (data.hasOwnProperty('useNewSendingInterface')) {
        obj['useNewSendingInterface'] = ApiClient.convertToType(data['useNewSendingInterface'], 'String');
      }
      if (data.hasOwnProperty('useNewSendingInterfaceMetadata')) {
        obj['useNewSendingInterfaceMetadata'] = SettingsMetadata.constructFromObject(data['useNewSendingInterfaceMetadata']);
      }
      if (data.hasOwnProperty('vaultingMode')) {
        obj['vaultingMode'] = ApiClient.convertToType(data['vaultingMode'], 'String');
      }
      if (data.hasOwnProperty('vaultingModeMetadata')) {
        obj['vaultingModeMetadata'] = SettingsMetadata.constructFromObject(data['vaultingModeMetadata']);
      }
      if (data.hasOwnProperty('webForms')) {
        obj['webForms'] = ApiClient.convertToType(data['webForms'], 'String');
      }
      if (data.hasOwnProperty('webFormsMetadata')) {
        obj['webFormsMetadata'] = SettingsMetadata.constructFromObject(data['webFormsMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} allowAccountManagement
   */
  exports.prototype['allowAccountManagement'] = undefined;
  /**
   * Metadata that indicates whether the `allowAccountManagement` property is editable. 
   * @member {module:model/SettingsMetadata} allowAccountManagementMetadata
   */
  exports.prototype['allowAccountManagementMetadata'] = undefined;
  /**
   * 
   * @member {String} allowApiAccess
   */
  exports.prototype['allowApiAccess'] = undefined;
  /**
   * Metadata that indicates whether the `allowApiAccess` property is editable. 
   * @member {module:model/SettingsMetadata} allowApiAccessMetadata
   */
  exports.prototype['allowApiAccessMetadata'] = undefined;
  /**
   * 
   * @member {String} allowApiAccessToAccount
   */
  exports.prototype['allowApiAccessToAccount'] = undefined;
  /**
   * Metadata that indicates whether the `allowApiAccessToAccount` property is editable. 
   * @member {module:model/SettingsMetadata} allowApiAccessToAccountMetadata
   */
  exports.prototype['allowApiAccessToAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} allowApiSendingOnBehalfOfOthers
   */
  exports.prototype['allowApiSendingOnBehalfOfOthers'] = undefined;
  /**
   * Metadata that indicates whether the `allowApiSendingOnBehalfOfOthers` property is editable. 
   * @member {module:model/SettingsMetadata} allowApiSendingOnBehalfOfOthersMetadata
   */
  exports.prototype['allowApiSendingOnBehalfOfOthersMetadata'] = undefined;
  /**
   * 
   * @member {String} allowApiSequentialSigning
   */
  exports.prototype['allowApiSequentialSigning'] = undefined;
  /**
   * Metadata that indicates whether the `allowApiSequentialSigning` property is editable. 
   * @member {module:model/SettingsMetadata} allowApiSequentialSigningMetadata
   */
  exports.prototype['allowApiSequentialSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAutoTagging
   */
  exports.prototype['allowAutoTagging'] = undefined;
  /**
   * Metadata that indicates whether the `allowAutoTagging` property is editable.
   * @member {module:model/SettingsMetadata} allowAutoTaggingMetadata
   */
  exports.prototype['allowAutoTaggingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowBulkSending
   */
  exports.prototype['allowBulkSending'] = undefined;
  /**
   * Metadata that indicates whether the `allowBulkSending` property is editable. 
   * @member {module:model/SettingsMetadata} allowBulkSendingMetadata
   */
  exports.prototype['allowBulkSendingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocuSignDesktopClient
   */
  exports.prototype['allowDocuSignDesktopClient'] = undefined;
  /**
   * Metadata that indicates whether the `allowDocuSignDesktopClient` property is editable. 
   * @member {module:model/SettingsMetadata} allowDocuSignDesktopClientMetadata
   */
  exports.prototype['allowDocuSignDesktopClientMetadata'] = undefined;
  /**
   * 
   * @member {String} allowedAddressBookAccess
   */
  exports.prototype['allowedAddressBookAccess'] = undefined;
  /**
   * Metadata that indicates whether the `allowedAddressBookAccess` property is editable. 
   * @member {module:model/SettingsMetadata} allowedAddressBookAccessMetadata
   */
  exports.prototype['allowedAddressBookAccessMetadata'] = undefined;
  /**
   * 
   * @member {String} allowedClickwrapsAccess
   */
  exports.prototype['allowedClickwrapsAccess'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowedClickwrapsAccessMetadata
   */
  exports.prototype['allowedClickwrapsAccessMetadata'] = undefined;
  /**
   * 
   * @member {String} allowedTemplateAccess
   */
  exports.prototype['allowedTemplateAccess'] = undefined;
  /**
   * Metadata that indicates whether the `allowedTemplateAccess` property is editable. 
   * @member {module:model/SettingsMetadata} allowedTemplateAccessMetadata
   */
  exports.prototype['allowedTemplateAccessMetadata'] = undefined;
  /**
   * 
   * @member {String} allowedToBeEnvelopeTransferRecipient
   */
  exports.prototype['allowedToBeEnvelopeTransferRecipient'] = undefined;
  /**
   * Metadata that indicates whether the `allowedToBeEnvelopeTransferRecipient` property is editable. 
   * @member {module:model/SettingsMetadata} allowedToBeEnvelopeTransferRecipientMetadata
   */
  exports.prototype['allowedToBeEnvelopeTransferRecipientMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeSending
   */
  exports.prototype['allowEnvelopeSending'] = undefined;
  /**
   * Metadata that indicates whether the `allowEnvelopeSending` property is editable. 
   * @member {module:model/SettingsMetadata} allowEnvelopeSendingMetadata
   */
  exports.prototype['allowEnvelopeSendingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowESealRecipients
   */
  exports.prototype['allowESealRecipients'] = undefined;
  /**
   * Metadata that indicates whether the `allowESealRecipients` property is editable.
   * @member {module:model/SettingsMetadata} allowESealRecipientsMetadata
   */
  exports.prototype['allowESealRecipientsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPowerFormsAdminToAccessAllPowerFormEnvelopes
   */
  exports.prototype['allowPowerFormsAdminToAccessAllPowerFormEnvelopes'] = undefined;
  /**
   * Metadata that indicates whether the `allowPowerFormsAdminToAccessAllPowerFormEnvelopes` property is editable.
   * @member {module:model/SettingsMetadata} allowPowerFormsAdminToAccessAllPowerFormEnvelopesMetadata
   */
  exports.prototype['allowPowerFormsAdminToAccessAllPowerFormEnvelopesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSendersToSetRecipientEmailLanguage
   */
  exports.prototype['allowSendersToSetRecipientEmailLanguage'] = undefined;
  /**
   * Metadata that indicates whether the `allowSendersToSetRecipientEmailLanguage` property is editable. 
   * @member {module:model/SettingsMetadata} allowSendersToSetRecipientEmailLanguageMetadata
   */
  exports.prototype['allowSendersToSetRecipientEmailLanguageMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignerAttachments
   */
  exports.prototype['allowSignerAttachments'] = undefined;
  /**
   * Metadata that indicates whether the `allowSignerAttachments` property is editable. 
   * @member {module:model/SettingsMetadata} allowSignerAttachmentsMetadata
   */
  exports.prototype['allowSignerAttachmentsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSupplementalDocuments
   */
  exports.prototype['allowSupplementalDocuments'] = undefined;
  /**
   * Metadata that indicates whether the `allowSupplementalDocuments` property is editable.
   * @member {module:model/SettingsMetadata} allowSupplementalDocumentsMetadata
   */
  exports.prototype['allowSupplementalDocumentsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowTaggingInSendAndCorrect
   */
  exports.prototype['allowTaggingInSendAndCorrect'] = undefined;
  /**
   * Metadata that indicates whether the `allowTaggingInSendAndCorrect` property is editable. 
   * @member {module:model/SettingsMetadata} allowTaggingInSendAndCorrectMetadata
   */
  exports.prototype['allowTaggingInSendAndCorrectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowVaulting
   */
  exports.prototype['allowVaulting'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} allowVaultingMetadata
   */
  exports.prototype['allowVaultingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowWetSigningOverride
   */
  exports.prototype['allowWetSigningOverride'] = undefined;
  /**
   * Metadata that indicates whether the `allowWetSigningOverride` property is editable. 
   * @member {module:model/SettingsMetadata} allowWetSigningOverrideMetadata
   */
  exports.prototype['allowWetSigningOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} canCreateWorkspaces
   */
  exports.prototype['canCreateWorkspaces'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} canCreateWorkspacesMetadata
   */
  exports.prototype['canCreateWorkspacesMetadata'] = undefined;
  /**
   * 
   * @member {String} canSendEnvelopesViaSMS
   */
  exports.prototype['canSendEnvelopesViaSMS'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canSendEnvelopesViaSMSMetadata
   */
  exports.prototype['canSendEnvelopesViaSMSMetadata'] = undefined;
  /**
   * 
   * @member {String} disableDocumentUpload
   */
  exports.prototype['disableDocumentUpload'] = undefined;
  /**
   * Metadata that indicates whether the `disableDocumentUpload` property is editable. 
   * @member {module:model/SettingsMetadata} disableDocumentUploadMetadata
   */
  exports.prototype['disableDocumentUploadMetadata'] = undefined;
  /**
   * 
   * @member {String} disableOtherActions
   */
  exports.prototype['disableOtherActions'] = undefined;
  /**
   * Metadata that indicates whether the `disableOtherActions` property is editable. 
   * @member {module:model/SettingsMetadata} disableOtherActionsMetadata
   */
  exports.prototype['disableOtherActionsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableApiRequestLogging
   */
  exports.prototype['enableApiRequestLogging'] = undefined;
  /**
   * Metadata that indicates whether the `enableApiRequestLogging` property is editable. 
   * @member {module:model/SettingsMetadata} enableApiRequestLoggingMetadata
   */
  exports.prototype['enableApiRequestLoggingMetadata'] = undefined;
  /**
   * 
   * @member {String} enableKeyTermsSuggestionsByDocumentType
   */
  exports.prototype['enableKeyTermsSuggestionsByDocumentType'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableKeyTermsSuggestionsByDocumentTypeMetadata
   */
  exports.prototype['enableKeyTermsSuggestionsByDocumentTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} enableRecipientViewingNotifications
   */
  exports.prototype['enableRecipientViewingNotifications'] = undefined;
  /**
   * Metadata that indicates whether the `enableRecipientViewingNotifications` property is editable. 
   * @member {module:model/SettingsMetadata} enableRecipientViewingNotificationsMetadata
   */
  exports.prototype['enableRecipientViewingNotificationsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSequentialSigningInterface
   */
  exports.prototype['enableSequentialSigningInterface'] = undefined;
  /**
   * Metadata that indicates whether the `enableSequentialSigningInterface` property is editable. 
   * @member {module:model/SettingsMetadata} enableSequentialSigningInterfaceMetadata
   */
  exports.prototype['enableSequentialSigningInterfaceMetadata'] = undefined;
  /**
   * 
   * @member {String} enableTransactionPointIntegration
   */
  exports.prototype['enableTransactionPointIntegration'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} enableTransactionPointIntegrationMetadata
   */
  exports.prototype['enableTransactionPointIntegrationMetadata'] = undefined;
  /**
   * 
   * @member {String} powerFormRole
   */
  exports.prototype['powerFormRole'] = undefined;
  /**
   * Metadata that indicates whether the `powerFormRole` property is editable. 
   * @member {module:model/SettingsMetadata} powerFormRoleMetadata
   */
  exports.prototype['powerFormRoleMetadata'] = undefined;
  /**
   * 
   * @member {String} receiveCompletedSelfSignedDocumentsAsEmailLinks
   */
  exports.prototype['receiveCompletedSelfSignedDocumentsAsEmailLinks'] = undefined;
  /**
   * Metadata that indicates whether the `receiveCompletedSelfSignedDocumentsAsEmailLinks` property is editable. 
   * @member {module:model/SettingsMetadata} receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata
   */
  exports.prototype['receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} signingUiVersionMetadata
   */
  exports.prototype['signingUiVersionMetadata'] = undefined;
  /**
   * 
   * @member {String} supplementalDocumentsMustAccept
   */
  exports.prototype['supplementalDocumentsMustAccept'] = undefined;
  /**
   * Metadata that indicates whether the `supplementalDocumentsMustAccept` property is editable. 
   * @member {module:model/SettingsMetadata} supplementalDocumentsMustAcceptMetadata
   */
  exports.prototype['supplementalDocumentsMustAcceptMetadata'] = undefined;
  /**
   * 
   * @member {String} supplementalDocumentsMustRead
   */
  exports.prototype['supplementalDocumentsMustRead'] = undefined;
  /**
   * Metadata that indicates whether the `supplementalDocumentsMustRead` property is editable. 
   * @member {module:model/SettingsMetadata} supplementalDocumentsMustReadMetadata
   */
  exports.prototype['supplementalDocumentsMustReadMetadata'] = undefined;
  /**
   * 
   * @member {String} supplementalDocumentsMustView
   */
  exports.prototype['supplementalDocumentsMustView'] = undefined;
  /**
   * Metadata that indicates whether the `supplementalDocumentsMustView` property is editable. 
   * @member {module:model/SettingsMetadata} supplementalDocumentsMustViewMetadata
   */
  exports.prototype['supplementalDocumentsMustViewMetadata'] = undefined;
  /**
   * 
   * @member {String} useNewDocuSignExperienceInterface
   */
  exports.prototype['useNewDocuSignExperienceInterface'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} useNewDocuSignExperienceInterfaceMetadata
   */
  exports.prototype['useNewDocuSignExperienceInterfaceMetadata'] = undefined;
  /**
   * 
   * @member {String} useNewSendingInterface
   */
  exports.prototype['useNewSendingInterface'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} useNewSendingInterfaceMetadata
   */
  exports.prototype['useNewSendingInterfaceMetadata'] = undefined;
  /**
   * 
   * @member {String} vaultingMode
   */
  exports.prototype['vaultingMode'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} vaultingModeMetadata
   */
  exports.prototype['vaultingModeMetadata'] = undefined;
  /**
   * 
   * @member {String} webForms
   */
  exports.prototype['webForms'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} webFormsMetadata
   */
  exports.prototype['webFormsMetadata'] = undefined;



  return exports;
}));


