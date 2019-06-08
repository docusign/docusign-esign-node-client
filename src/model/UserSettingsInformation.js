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
    define(['ApiClient', 'model/LocalePolicy', 'model/SealIdentifier', 'model/SenderEmailNotifications', 'model/SettingsMetadata', 'model/SignerEmailNotifications', 'model/UserAccountManagementGranularInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalePolicy'), require('./SealIdentifier'), require('./SenderEmailNotifications'), require('./SettingsMetadata'), require('./SignerEmailNotifications'), require('./UserAccountManagementGranularInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserSettingsInformation = factory(root.Docusign.ApiClient, root.Docusign.LocalePolicy, root.Docusign.SealIdentifier, root.Docusign.SenderEmailNotifications, root.Docusign.SettingsMetadata, root.Docusign.SignerEmailNotifications, root.Docusign.UserAccountManagementGranularInformation);
  }
}(this, function(ApiClient, LocalePolicy, SealIdentifier, SenderEmailNotifications, SettingsMetadata, SignerEmailNotifications, UserAccountManagementGranularInformation) {
  'use strict';


  /**
   * The UserSettingsInformation model module.
   * @module model/UserSettingsInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserSettingsInformation</code>.
   * @alias module:model/UserSettingsInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserSettingsInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSettingsInformation} obj Optional instance to populate.
   * @return {module:model/UserSettingsInformation} The populated <code>UserSettingsInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountManagementGranular')) {
        obj['accountManagementGranular'] = UserAccountManagementGranularInformation.constructFromObject(data['accountManagementGranular']);
      }
      if (data.hasOwnProperty('adminOnly')) {
        obj['adminOnly'] = ApiClient.convertToType(data['adminOnly'], 'String');
      }
      if (data.hasOwnProperty('adminOnlyMetadata')) {
        obj['adminOnlyMetadata'] = SettingsMetadata.constructFromObject(data['adminOnlyMetadata']);
      }
      if (data.hasOwnProperty('allowEnvelopeTransferTo')) {
        obj['allowEnvelopeTransferTo'] = ApiClient.convertToType(data['allowEnvelopeTransferTo'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopeTransferToMetadata')) {
        obj['allowEnvelopeTransferToMetadata'] = SettingsMetadata.constructFromObject(data['allowEnvelopeTransferToMetadata']);
      }
      if (data.hasOwnProperty('allowEsealRecipients')) {
        obj['allowEsealRecipients'] = ApiClient.convertToType(data['allowEsealRecipients'], 'String');
      }
      if (data.hasOwnProperty('allowEsealRecipientsMetadata')) {
        obj['allowEsealRecipientsMetadata'] = SettingsMetadata.constructFromObject(data['allowEsealRecipientsMetadata']);
      }
      if (data.hasOwnProperty('allowPowerFormsAdminToAccessAllPowerFormEnvelope')) {
        obj['allowPowerFormsAdminToAccessAllPowerFormEnvelope'] = ApiClient.convertToType(data['allowPowerFormsAdminToAccessAllPowerFormEnvelope'], 'String');
      }
      if (data.hasOwnProperty('allowPowerFormsAdminToAccessAllPowerFormEnvelopeMetadata')) {
        obj['allowPowerFormsAdminToAccessAllPowerFormEnvelopeMetadata'] = SettingsMetadata.constructFromObject(data['allowPowerFormsAdminToAccessAllPowerFormEnvelopeMetadata']);
      }
      if (data.hasOwnProperty('allowRecipientLanguageSelection')) {
        obj['allowRecipientLanguageSelection'] = ApiClient.convertToType(data['allowRecipientLanguageSelection'], 'String');
      }
      if (data.hasOwnProperty('allowRecipientLanguageSelectionMetadata')) {
        obj['allowRecipientLanguageSelectionMetadata'] = SettingsMetadata.constructFromObject(data['allowRecipientLanguageSelectionMetadata']);
      }
      if (data.hasOwnProperty('allowSendOnBehalfOf')) {
        obj['allowSendOnBehalfOf'] = ApiClient.convertToType(data['allowSendOnBehalfOf'], 'String');
      }
      if (data.hasOwnProperty('allowSendOnBehalfOfMetadata')) {
        obj['allowSendOnBehalfOfMetadata'] = SettingsMetadata.constructFromObject(data['allowSendOnBehalfOfMetadata']);
      }
      if (data.hasOwnProperty('allowSupplementalDocuments')) {
        obj['allowSupplementalDocuments'] = ApiClient.convertToType(data['allowSupplementalDocuments'], 'String');
      }
      if (data.hasOwnProperty('allowSupplementalDocumentsMetadata')) {
        obj['allowSupplementalDocumentsMetadata'] = SettingsMetadata.constructFromObject(data['allowSupplementalDocumentsMetadata']);
      }
      if (data.hasOwnProperty('anchorTagVersionedPlacementEnabled')) {
        obj['anchorTagVersionedPlacementEnabled'] = ApiClient.convertToType(data['anchorTagVersionedPlacementEnabled'], 'String');
      }
      if (data.hasOwnProperty('apiAccountWideAccess')) {
        obj['apiAccountWideAccess'] = ApiClient.convertToType(data['apiAccountWideAccess'], 'String');
      }
      if (data.hasOwnProperty('apiAccountWideAccessMetadata')) {
        obj['apiAccountWideAccessMetadata'] = SettingsMetadata.constructFromObject(data['apiAccountWideAccessMetadata']);
      }
      if (data.hasOwnProperty('apiCanExportAC')) {
        obj['apiCanExportAC'] = ApiClient.convertToType(data['apiCanExportAC'], 'String');
      }
      if (data.hasOwnProperty('apiCanExportACMetadata')) {
        obj['apiCanExportACMetadata'] = SettingsMetadata.constructFromObject(data['apiCanExportACMetadata']);
      }
      if (data.hasOwnProperty('bulkSend')) {
        obj['bulkSend'] = ApiClient.convertToType(data['bulkSend'], 'String');
      }
      if (data.hasOwnProperty('bulkSendMetadata')) {
        obj['bulkSendMetadata'] = SettingsMetadata.constructFromObject(data['bulkSendMetadata']);
      }
      if (data.hasOwnProperty('canChargeAccount')) {
        obj['canChargeAccount'] = ApiClient.convertToType(data['canChargeAccount'], 'String');
      }
      if (data.hasOwnProperty('canChargeAccountMetadata')) {
        obj['canChargeAccountMetadata'] = SettingsMetadata.constructFromObject(data['canChargeAccountMetadata']);
      }
      if (data.hasOwnProperty('canEditSharedAddressbook')) {
        obj['canEditSharedAddressbook'] = ApiClient.convertToType(data['canEditSharedAddressbook'], 'String');
      }
      if (data.hasOwnProperty('canEditSharedAddressbookMetadata')) {
        obj['canEditSharedAddressbookMetadata'] = SettingsMetadata.constructFromObject(data['canEditSharedAddressbookMetadata']);
      }
      if (data.hasOwnProperty('canLockEnvelopes')) {
        obj['canLockEnvelopes'] = ApiClient.convertToType(data['canLockEnvelopes'], 'String');
      }
      if (data.hasOwnProperty('canLockEnvelopesMetadata')) {
        obj['canLockEnvelopesMetadata'] = SettingsMetadata.constructFromObject(data['canLockEnvelopesMetadata']);
      }
      if (data.hasOwnProperty('canManageAccount')) {
        obj['canManageAccount'] = ApiClient.convertToType(data['canManageAccount'], 'String');
      }
      if (data.hasOwnProperty('canManageAccountMetadata')) {
        obj['canManageAccountMetadata'] = SettingsMetadata.constructFromObject(data['canManageAccountMetadata']);
      }
      if (data.hasOwnProperty('canManageDistributor')) {
        obj['canManageDistributor'] = ApiClient.convertToType(data['canManageDistributor'], 'String');
      }
      if (data.hasOwnProperty('canManageDistributorMetadata')) {
        obj['canManageDistributorMetadata'] = SettingsMetadata.constructFromObject(data['canManageDistributorMetadata']);
      }
      if (data.hasOwnProperty('canManageTemplates')) {
        obj['canManageTemplates'] = ApiClient.convertToType(data['canManageTemplates'], 'String');
      }
      if (data.hasOwnProperty('canManageTemplatesMetadata')) {
        obj['canManageTemplatesMetadata'] = SettingsMetadata.constructFromObject(data['canManageTemplatesMetadata']);
      }
      if (data.hasOwnProperty('canSendAPIRequests')) {
        obj['canSendAPIRequests'] = ApiClient.convertToType(data['canSendAPIRequests'], 'String');
      }
      if (data.hasOwnProperty('canSendAPIRequestsMetadata')) {
        obj['canSendAPIRequestsMetadata'] = SettingsMetadata.constructFromObject(data['canSendAPIRequestsMetadata']);
      }
      if (data.hasOwnProperty('canSendEnvelope')) {
        obj['canSendEnvelope'] = ApiClient.convertToType(data['canSendEnvelope'], 'String');
      }
      if (data.hasOwnProperty('canSendEnvelopeMetadata')) {
        obj['canSendEnvelopeMetadata'] = SettingsMetadata.constructFromObject(data['canSendEnvelopeMetadata']);
      }
      if (data.hasOwnProperty('canSignEnvelope')) {
        obj['canSignEnvelope'] = ApiClient.convertToType(data['canSignEnvelope'], 'String');
      }
      if (data.hasOwnProperty('canSignEnvelopeMetadata')) {
        obj['canSignEnvelopeMetadata'] = SettingsMetadata.constructFromObject(data['canSignEnvelopeMetadata']);
      }
      if (data.hasOwnProperty('canUseScratchpad')) {
        obj['canUseScratchpad'] = ApiClient.convertToType(data['canUseScratchpad'], 'String');
      }
      if (data.hasOwnProperty('canUseScratchpadMetadata')) {
        obj['canUseScratchpadMetadata'] = SettingsMetadata.constructFromObject(data['canUseScratchpadMetadata']);
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
      if (data.hasOwnProperty('enableDSPro')) {
        obj['enableDSPro'] = ApiClient.convertToType(data['enableDSPro'], 'String');
      }
      if (data.hasOwnProperty('enableDSProMetadata')) {
        obj['enableDSProMetadata'] = SettingsMetadata.constructFromObject(data['enableDSProMetadata']);
      }
      if (data.hasOwnProperty('enableSequentialSigningAPI')) {
        obj['enableSequentialSigningAPI'] = ApiClient.convertToType(data['enableSequentialSigningAPI'], 'String');
      }
      if (data.hasOwnProperty('enableSequentialSigningAPIMetadata')) {
        obj['enableSequentialSigningAPIMetadata'] = SettingsMetadata.constructFromObject(data['enableSequentialSigningAPIMetadata']);
      }
      if (data.hasOwnProperty('enableSequentialSigningUI')) {
        obj['enableSequentialSigningUI'] = ApiClient.convertToType(data['enableSequentialSigningUI'], 'String');
      }
      if (data.hasOwnProperty('enableSequentialSigningUIMetadata')) {
        obj['enableSequentialSigningUIMetadata'] = SettingsMetadata.constructFromObject(data['enableSequentialSigningUIMetadata']);
      }
      if (data.hasOwnProperty('enableSignerAttachments')) {
        obj['enableSignerAttachments'] = ApiClient.convertToType(data['enableSignerAttachments'], 'String');
      }
      if (data.hasOwnProperty('enableSignerAttachmentsMetadata')) {
        obj['enableSignerAttachmentsMetadata'] = SettingsMetadata.constructFromObject(data['enableSignerAttachmentsMetadata']);
      }
      if (data.hasOwnProperty('enableSignOnPaperOverride')) {
        obj['enableSignOnPaperOverride'] = ApiClient.convertToType(data['enableSignOnPaperOverride'], 'String');
      }
      if (data.hasOwnProperty('enableSignOnPaperOverrideMetadata')) {
        obj['enableSignOnPaperOverrideMetadata'] = SettingsMetadata.constructFromObject(data['enableSignOnPaperOverrideMetadata']);
      }
      if (data.hasOwnProperty('enableTransactionPoint')) {
        obj['enableTransactionPoint'] = ApiClient.convertToType(data['enableTransactionPoint'], 'String');
      }
      if (data.hasOwnProperty('enableTransactionPointMetadata')) {
        obj['enableTransactionPointMetadata'] = SettingsMetadata.constructFromObject(data['enableTransactionPointMetadata']);
      }
      if (data.hasOwnProperty('enableVaulting')) {
        obj['enableVaulting'] = ApiClient.convertToType(data['enableVaulting'], 'String');
      }
      if (data.hasOwnProperty('enableVaultingMetadata')) {
        obj['enableVaultingMetadata'] = SettingsMetadata.constructFromObject(data['enableVaultingMetadata']);
      }
      if (data.hasOwnProperty('expressSendOnly')) {
        obj['expressSendOnly'] = ApiClient.convertToType(data['expressSendOnly'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('localeMetadata')) {
        obj['localeMetadata'] = SettingsMetadata.constructFromObject(data['localeMetadata']);
      }
      if (data.hasOwnProperty('localePolicy')) {
        obj['localePolicy'] = LocalePolicy.constructFromObject(data['localePolicy']);
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
      }
      if (data.hasOwnProperty('modifiedByMetadata')) {
        obj['modifiedByMetadata'] = SettingsMetadata.constructFromObject(data['modifiedByMetadata']);
      }
      if (data.hasOwnProperty('modifiedDate')) {
        obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'String');
      }
      if (data.hasOwnProperty('modifiedDateMetadata')) {
        obj['modifiedDateMetadata'] = SettingsMetadata.constructFromObject(data['modifiedDateMetadata']);
      }
      if (data.hasOwnProperty('modifiedPage')) {
        obj['modifiedPage'] = ApiClient.convertToType(data['modifiedPage'], 'String');
      }
      if (data.hasOwnProperty('modifiedPageMetadata')) {
        obj['modifiedPageMetadata'] = SettingsMetadata.constructFromObject(data['modifiedPageMetadata']);
      }
      if (data.hasOwnProperty('newSendUI')) {
        obj['newSendUI'] = ApiClient.convertToType(data['newSendUI'], 'String');
      }
      if (data.hasOwnProperty('newSendUIMetadata')) {
        obj['newSendUIMetadata'] = SettingsMetadata.constructFromObject(data['newSendUIMetadata']);
      }
      if (data.hasOwnProperty('powerFormMode')) {
        obj['powerFormMode'] = ApiClient.convertToType(data['powerFormMode'], 'String');
      }
      if (data.hasOwnProperty('powerFormModeMetadata')) {
        obj['powerFormModeMetadata'] = SettingsMetadata.constructFromObject(data['powerFormModeMetadata']);
      }
      if (data.hasOwnProperty('recipientViewedNotification')) {
        obj['recipientViewedNotification'] = ApiClient.convertToType(data['recipientViewedNotification'], 'String');
      }
      if (data.hasOwnProperty('recipientViewedNotificationMetadata')) {
        obj['recipientViewedNotificationMetadata'] = SettingsMetadata.constructFromObject(data['recipientViewedNotificationMetadata']);
      }
      if (data.hasOwnProperty('sealIdentifiers')) {
        obj['sealIdentifiers'] = ApiClient.convertToType(data['sealIdentifiers'], [SealIdentifier]);
      }
      if (data.hasOwnProperty('selfSignedRecipientEmailDocument')) {
        obj['selfSignedRecipientEmailDocument'] = ApiClient.convertToType(data['selfSignedRecipientEmailDocument'], 'String');
      }
      if (data.hasOwnProperty('selfSignedRecipientEmailDocumentMetadata')) {
        obj['selfSignedRecipientEmailDocumentMetadata'] = SettingsMetadata.constructFromObject(data['selfSignedRecipientEmailDocumentMetadata']);
      }
      if (data.hasOwnProperty('senderEmailNotifications')) {
        obj['senderEmailNotifications'] = SenderEmailNotifications.constructFromObject(data['senderEmailNotifications']);
      }
      if (data.hasOwnProperty('signerEmailNotifications')) {
        obj['signerEmailNotifications'] = SignerEmailNotifications.constructFromObject(data['signerEmailNotifications']);
      }
      if (data.hasOwnProperty('supplementalDocumentIncludeInDownload')) {
        obj['supplementalDocumentIncludeInDownload'] = ApiClient.convertToType(data['supplementalDocumentIncludeInDownload'], 'String');
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
      if (data.hasOwnProperty('templateActiveCreation')) {
        obj['templateActiveCreation'] = ApiClient.convertToType(data['templateActiveCreation'], 'String');
      }
      if (data.hasOwnProperty('templateActiveCreationMetadata')) {
        obj['templateActiveCreationMetadata'] = SettingsMetadata.constructFromObject(data['templateActiveCreationMetadata']);
      }
      if (data.hasOwnProperty('templateApplyNotify')) {
        obj['templateApplyNotify'] = ApiClient.convertToType(data['templateApplyNotify'], 'String');
      }
      if (data.hasOwnProperty('templateApplyNotifyMetadata')) {
        obj['templateApplyNotifyMetadata'] = SettingsMetadata.constructFromObject(data['templateApplyNotifyMetadata']);
      }
      if (data.hasOwnProperty('templateAutoMatching')) {
        obj['templateAutoMatching'] = ApiClient.convertToType(data['templateAutoMatching'], 'String');
      }
      if (data.hasOwnProperty('templateAutoMatchingMetadata')) {
        obj['templateAutoMatchingMetadata'] = SettingsMetadata.constructFromObject(data['templateAutoMatchingMetadata']);
      }
      if (data.hasOwnProperty('templateMatchingSensitivity')) {
        obj['templateMatchingSensitivity'] = ApiClient.convertToType(data['templateMatchingSensitivity'], 'String');
      }
      if (data.hasOwnProperty('templateMatchingSensitivityMetadata')) {
        obj['templateMatchingSensitivityMetadata'] = SettingsMetadata.constructFromObject(data['templateMatchingSensitivityMetadata']);
      }
      if (data.hasOwnProperty('templatePageLevelMatching')) {
        obj['templatePageLevelMatching'] = ApiClient.convertToType(data['templatePageLevelMatching'], 'String');
      }
      if (data.hasOwnProperty('templatePageLevelMatchingMetadata')) {
        obj['templatePageLevelMatchingMetadata'] = SettingsMetadata.constructFromObject(data['templatePageLevelMatchingMetadata']);
      }
      if (data.hasOwnProperty('timezoneDST')) {
        obj['timezoneDST'] = ApiClient.convertToType(data['timezoneDST'], 'String');
      }
      if (data.hasOwnProperty('timezoneDSTMetadata')) {
        obj['timezoneDSTMetadata'] = SettingsMetadata.constructFromObject(data['timezoneDSTMetadata']);
      }
      if (data.hasOwnProperty('timezoneMask')) {
        obj['timezoneMask'] = ApiClient.convertToType(data['timezoneMask'], 'String');
      }
      if (data.hasOwnProperty('timezoneMaskMetadata')) {
        obj['timezoneMaskMetadata'] = SettingsMetadata.constructFromObject(data['timezoneMaskMetadata']);
      }
      if (data.hasOwnProperty('timezoneOffset')) {
        obj['timezoneOffset'] = ApiClient.convertToType(data['timezoneOffset'], 'String');
      }
      if (data.hasOwnProperty('timezoneOffsetMetadata')) {
        obj['timezoneOffsetMetadata'] = SettingsMetadata.constructFromObject(data['timezoneOffsetMetadata']);
      }
      if (data.hasOwnProperty('timezoneSendingPref')) {
        obj['timezoneSendingPref'] = ApiClient.convertToType(data['timezoneSendingPref'], 'String');
      }
      if (data.hasOwnProperty('timezoneSendingPrefMetadata')) {
        obj['timezoneSendingPrefMetadata'] = SettingsMetadata.constructFromObject(data['timezoneSendingPrefMetadata']);
      }
      if (data.hasOwnProperty('timezoneSigningPref')) {
        obj['timezoneSigningPref'] = ApiClient.convertToType(data['timezoneSigningPref'], 'String');
      }
      if (data.hasOwnProperty('timezoneSigningPrefMetadata')) {
        obj['timezoneSigningPrefMetadata'] = SettingsMetadata.constructFromObject(data['timezoneSigningPrefMetadata']);
      }
      if (data.hasOwnProperty('transactionPointSiteNameURL')) {
        obj['transactionPointSiteNameURL'] = ApiClient.convertToType(data['transactionPointSiteNameURL'], 'String');
      }
      if (data.hasOwnProperty('transactionPointSiteNameURLMetadata')) {
        obj['transactionPointSiteNameURLMetadata'] = SettingsMetadata.constructFromObject(data['transactionPointSiteNameURLMetadata']);
      }
      if (data.hasOwnProperty('transactionPointUserName')) {
        obj['transactionPointUserName'] = ApiClient.convertToType(data['transactionPointUserName'], 'String');
      }
      if (data.hasOwnProperty('transactionPointUserNameMetadata')) {
        obj['transactionPointUserNameMetadata'] = SettingsMetadata.constructFromObject(data['transactionPointUserNameMetadata']);
      }
      if (data.hasOwnProperty('vaultingMode')) {
        obj['vaultingMode'] = ApiClient.convertToType(data['vaultingMode'], 'String');
      }
      if (data.hasOwnProperty('vaultingModeMetadata')) {
        obj['vaultingModeMetadata'] = SettingsMetadata.constructFromObject(data['vaultingModeMetadata']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UserAccountManagementGranularInformation} accountManagementGranular
   */
  exports.prototype['accountManagementGranular'] = undefined;
  /**
   * 
   * @member {String} adminOnly
   */
  exports.prototype['adminOnly'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} adminOnlyMetadata
   */
  exports.prototype['adminOnlyMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeTransferTo
   */
  exports.prototype['allowEnvelopeTransferTo'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEnvelopeTransferToMetadata
   */
  exports.prototype['allowEnvelopeTransferToMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEsealRecipients
   */
  exports.prototype['allowEsealRecipients'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEsealRecipientsMetadata
   */
  exports.prototype['allowEsealRecipientsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPowerFormsAdminToAccessAllPowerFormEnvelope
   */
  exports.prototype['allowPowerFormsAdminToAccessAllPowerFormEnvelope'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowPowerFormsAdminToAccessAllPowerFormEnvelopeMetadata
   */
  exports.prototype['allowPowerFormsAdminToAccessAllPowerFormEnvelopeMetadata'] = undefined;
  /**
   * 
   * @member {String} allowRecipientLanguageSelection
   */
  exports.prototype['allowRecipientLanguageSelection'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowRecipientLanguageSelectionMetadata
   */
  exports.prototype['allowRecipientLanguageSelectionMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSendOnBehalfOf
   */
  exports.prototype['allowSendOnBehalfOf'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSendOnBehalfOfMetadata
   */
  exports.prototype['allowSendOnBehalfOfMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSupplementalDocuments
   */
  exports.prototype['allowSupplementalDocuments'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSupplementalDocumentsMetadata
   */
  exports.prototype['allowSupplementalDocumentsMetadata'] = undefined;
  /**
   * 
   * @member {String} anchorTagVersionedPlacementEnabled
   */
  exports.prototype['anchorTagVersionedPlacementEnabled'] = undefined;
  /**
   * 
   * @member {String} apiAccountWideAccess
   */
  exports.prototype['apiAccountWideAccess'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} apiAccountWideAccessMetadata
   */
  exports.prototype['apiAccountWideAccessMetadata'] = undefined;
  /**
   * 
   * @member {String} apiCanExportAC
   */
  exports.prototype['apiCanExportAC'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} apiCanExportACMetadata
   */
  exports.prototype['apiCanExportACMetadata'] = undefined;
  /**
   * 
   * @member {String} bulkSend
   */
  exports.prototype['bulkSend'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} bulkSendMetadata
   */
  exports.prototype['bulkSendMetadata'] = undefined;
  /**
   * 
   * @member {String} canChargeAccount
   */
  exports.prototype['canChargeAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canChargeAccountMetadata
   */
  exports.prototype['canChargeAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} canEditSharedAddressbook
   */
  exports.prototype['canEditSharedAddressbook'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canEditSharedAddressbookMetadata
   */
  exports.prototype['canEditSharedAddressbookMetadata'] = undefined;
  /**
   * 
   * @member {String} canLockEnvelopes
   */
  exports.prototype['canLockEnvelopes'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canLockEnvelopesMetadata
   */
  exports.prototype['canLockEnvelopesMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageAccount
   */
  exports.prototype['canManageAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageAccountMetadata
   */
  exports.prototype['canManageAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageDistributor
   */
  exports.prototype['canManageDistributor'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageDistributorMetadata
   */
  exports.prototype['canManageDistributorMetadata'] = undefined;
  /**
   * 
   * @member {String} canManageTemplates
   */
  exports.prototype['canManageTemplates'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canManageTemplatesMetadata
   */
  exports.prototype['canManageTemplatesMetadata'] = undefined;
  /**
   * 
   * @member {String} canSendAPIRequests
   */
  exports.prototype['canSendAPIRequests'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canSendAPIRequestsMetadata
   */
  exports.prototype['canSendAPIRequestsMetadata'] = undefined;
  /**
   * 
   * @member {String} canSendEnvelope
   */
  exports.prototype['canSendEnvelope'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canSendEnvelopeMetadata
   */
  exports.prototype['canSendEnvelopeMetadata'] = undefined;
  /**
   * 
   * @member {String} canSignEnvelope
   */
  exports.prototype['canSignEnvelope'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canSignEnvelopeMetadata
   */
  exports.prototype['canSignEnvelopeMetadata'] = undefined;
  /**
   * 
   * @member {String} canUseScratchpad
   */
  exports.prototype['canUseScratchpad'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canUseScratchpadMetadata
   */
  exports.prototype['canUseScratchpadMetadata'] = undefined;
  /**
   * 
   * @member {String} disableDocumentUpload
   */
  exports.prototype['disableDocumentUpload'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableDocumentUploadMetadata
   */
  exports.prototype['disableDocumentUploadMetadata'] = undefined;
  /**
   * 
   * @member {String} disableOtherActions
   */
  exports.prototype['disableOtherActions'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableOtherActionsMetadata
   */
  exports.prototype['disableOtherActionsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableDSPro
   */
  exports.prototype['enableDSPro'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableDSProMetadata
   */
  exports.prototype['enableDSProMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSequentialSigningAPI
   */
  exports.prototype['enableSequentialSigningAPI'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSequentialSigningAPIMetadata
   */
  exports.prototype['enableSequentialSigningAPIMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSequentialSigningUI
   */
  exports.prototype['enableSequentialSigningUI'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSequentialSigningUIMetadata
   */
  exports.prototype['enableSequentialSigningUIMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSignerAttachments
   */
  exports.prototype['enableSignerAttachments'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSignerAttachmentsMetadata
   */
  exports.prototype['enableSignerAttachmentsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSignOnPaperOverride
   */
  exports.prototype['enableSignOnPaperOverride'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSignOnPaperOverrideMetadata
   */
  exports.prototype['enableSignOnPaperOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} enableTransactionPoint
   */
  exports.prototype['enableTransactionPoint'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableTransactionPointMetadata
   */
  exports.prototype['enableTransactionPointMetadata'] = undefined;
  /**
   * 
   * @member {String} enableVaulting
   */
  exports.prototype['enableVaulting'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableVaultingMetadata
   */
  exports.prototype['enableVaultingMetadata'] = undefined;
  /**
   * 
   * @member {String} expressSendOnly
   */
  exports.prototype['expressSendOnly'] = undefined;
  /**
   * 
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} localeMetadata
   */
  exports.prototype['localeMetadata'] = undefined;
  /**
   * @member {module:model/LocalePolicy} localePolicy
   */
  exports.prototype['localePolicy'] = undefined;
  /**
   * 
   * @member {String} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} modifiedByMetadata
   */
  exports.prototype['modifiedByMetadata'] = undefined;
  /**
   * 
   * @member {String} modifiedDate
   */
  exports.prototype['modifiedDate'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} modifiedDateMetadata
   */
  exports.prototype['modifiedDateMetadata'] = undefined;
  /**
   * 
   * @member {String} modifiedPage
   */
  exports.prototype['modifiedPage'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} modifiedPageMetadata
   */
  exports.prototype['modifiedPageMetadata'] = undefined;
  /**
   * 
   * @member {String} newSendUI
   */
  exports.prototype['newSendUI'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} newSendUIMetadata
   */
  exports.prototype['newSendUIMetadata'] = undefined;
  /**
   * 
   * @member {String} powerFormMode
   */
  exports.prototype['powerFormMode'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} powerFormModeMetadata
   */
  exports.prototype['powerFormModeMetadata'] = undefined;
  /**
   * 
   * @member {String} recipientViewedNotification
   */
  exports.prototype['recipientViewedNotification'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} recipientViewedNotificationMetadata
   */
  exports.prototype['recipientViewedNotificationMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SealIdentifier>} sealIdentifiers
   */
  exports.prototype['sealIdentifiers'] = undefined;
  /**
   * 
   * @member {String} selfSignedRecipientEmailDocument
   */
  exports.prototype['selfSignedRecipientEmailDocument'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} selfSignedRecipientEmailDocumentMetadata
   */
  exports.prototype['selfSignedRecipientEmailDocumentMetadata'] = undefined;
  /**
   * @member {module:model/SenderEmailNotifications} senderEmailNotifications
   */
  exports.prototype['senderEmailNotifications'] = undefined;
  /**
   * @member {module:model/SignerEmailNotifications} signerEmailNotifications
   */
  exports.prototype['signerEmailNotifications'] = undefined;
  /**
   * 
   * @member {String} supplementalDocumentIncludeInDownload
   */
  exports.prototype['supplementalDocumentIncludeInDownload'] = undefined;
  /**
   * 
   * @member {String} supplementalDocumentsMustAccept
   */
  exports.prototype['supplementalDocumentsMustAccept'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} supplementalDocumentsMustAcceptMetadata
   */
  exports.prototype['supplementalDocumentsMustAcceptMetadata'] = undefined;
  /**
   * 
   * @member {String} supplementalDocumentsMustRead
   */
  exports.prototype['supplementalDocumentsMustRead'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} supplementalDocumentsMustReadMetadata
   */
  exports.prototype['supplementalDocumentsMustReadMetadata'] = undefined;
  /**
   * 
   * @member {String} supplementalDocumentsMustView
   */
  exports.prototype['supplementalDocumentsMustView'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} supplementalDocumentsMustViewMetadata
   */
  exports.prototype['supplementalDocumentsMustViewMetadata'] = undefined;
  /**
   * 
   * @member {String} templateActiveCreation
   */
  exports.prototype['templateActiveCreation'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} templateActiveCreationMetadata
   */
  exports.prototype['templateActiveCreationMetadata'] = undefined;
  /**
   * 
   * @member {String} templateApplyNotify
   */
  exports.prototype['templateApplyNotify'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} templateApplyNotifyMetadata
   */
  exports.prototype['templateApplyNotifyMetadata'] = undefined;
  /**
   * 
   * @member {String} templateAutoMatching
   */
  exports.prototype['templateAutoMatching'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} templateAutoMatchingMetadata
   */
  exports.prototype['templateAutoMatchingMetadata'] = undefined;
  /**
   * 
   * @member {String} templateMatchingSensitivity
   */
  exports.prototype['templateMatchingSensitivity'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} templateMatchingSensitivityMetadata
   */
  exports.prototype['templateMatchingSensitivityMetadata'] = undefined;
  /**
   * 
   * @member {String} templatePageLevelMatching
   */
  exports.prototype['templatePageLevelMatching'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} templatePageLevelMatchingMetadata
   */
  exports.prototype['templatePageLevelMatchingMetadata'] = undefined;
  /**
   * 
   * @member {String} timezoneDST
   */
  exports.prototype['timezoneDST'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timezoneDSTMetadata
   */
  exports.prototype['timezoneDSTMetadata'] = undefined;
  /**
   * 
   * @member {String} timezoneMask
   */
  exports.prototype['timezoneMask'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timezoneMaskMetadata
   */
  exports.prototype['timezoneMaskMetadata'] = undefined;
  /**
   * 
   * @member {String} timezoneOffset
   */
  exports.prototype['timezoneOffset'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timezoneOffsetMetadata
   */
  exports.prototype['timezoneOffsetMetadata'] = undefined;
  /**
   * 
   * @member {String} timezoneSendingPref
   */
  exports.prototype['timezoneSendingPref'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timezoneSendingPrefMetadata
   */
  exports.prototype['timezoneSendingPrefMetadata'] = undefined;
  /**
   * 
   * @member {String} timezoneSigningPref
   */
  exports.prototype['timezoneSigningPref'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timezoneSigningPrefMetadata
   */
  exports.prototype['timezoneSigningPrefMetadata'] = undefined;
  /**
   * 
   * @member {String} transactionPointSiteNameURL
   */
  exports.prototype['transactionPointSiteNameURL'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} transactionPointSiteNameURLMetadata
   */
  exports.prototype['transactionPointSiteNameURLMetadata'] = undefined;
  /**
   * 
   * @member {String} transactionPointUserName
   */
  exports.prototype['transactionPointUserName'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} transactionPointUserNameMetadata
   */
  exports.prototype['transactionPointUserNameMetadata'] = undefined;
  /**
   * 
   * @member {String} vaultingMode
   */
  exports.prototype['vaultingMode'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} vaultingModeMetadata
   */
  exports.prototype['vaultingModeMetadata'] = undefined;



  return exports;
}));


