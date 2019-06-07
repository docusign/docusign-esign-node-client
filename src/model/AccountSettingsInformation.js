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
    define(['ApiClient', 'model/AccessCodeFormat', 'model/AccountIdentityVerificationWorkflow', 'model/AccountNotification', 'model/AddressInformation', 'model/ExternalDocumentSources', 'model/IdCheckConfiguration', 'model/SettingsMetadata', 'model/TabAccountSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessCodeFormat'), require('./AccountIdentityVerificationWorkflow'), require('./AccountNotification'), require('./AddressInformation'), require('./ExternalDocumentSources'), require('./IdCheckConfiguration'), require('./SettingsMetadata'), require('./TabAccountSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSettingsInformation = factory(root.Docusign.ApiClient, root.Docusign.AccessCodeFormat, root.Docusign.AccountIdentityVerificationWorkflow, root.Docusign.AccountNotification, root.Docusign.AddressInformation, root.Docusign.ExternalDocumentSources, root.Docusign.IdCheckConfiguration, root.Docusign.SettingsMetadata, root.Docusign.TabAccountSettings);
  }
}(this, function(ApiClient, AccessCodeFormat, AccountIdentityVerificationWorkflow, AccountNotification, AddressInformation, ExternalDocumentSources, IdCheckConfiguration, SettingsMetadata, TabAccountSettings) {
  'use strict';


  /**
   * The AccountSettingsInformation model module.
   * @module model/AccountSettingsInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountSettingsInformation</code>.
   * Contains account settings information.
   * @alias module:model/AccountSettingsInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSettingsInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSettingsInformation} obj Optional instance to populate.
   * @return {module:model/AccountSettingsInformation} The populated <code>AccountSettingsInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCodeFormat')) {
        obj['accessCodeFormat'] = AccessCodeFormat.constructFromObject(data['accessCodeFormat']);
      }
      if (data.hasOwnProperty('accountDateTimeFormat')) {
        obj['accountDateTimeFormat'] = ApiClient.convertToType(data['accountDateTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('accountDateTimeFormatMetadata')) {
        obj['accountDateTimeFormatMetadata'] = SettingsMetadata.constructFromObject(data['accountDateTimeFormatMetadata']);
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('accountNameMetadata')) {
        obj['accountNameMetadata'] = SettingsMetadata.constructFromObject(data['accountNameMetadata']);
      }
      if (data.hasOwnProperty('accountNotification')) {
        obj['accountNotification'] = AccountNotification.constructFromObject(data['accountNotification']);
      }
      if (data.hasOwnProperty('adoptSigConfig')) {
        obj['adoptSigConfig'] = ApiClient.convertToType(data['adoptSigConfig'], 'String');
      }
      if (data.hasOwnProperty('adoptSigConfigMetadata')) {
        obj['adoptSigConfigMetadata'] = SettingsMetadata.constructFromObject(data['adoptSigConfigMetadata']);
      }
      if (data.hasOwnProperty('advancedCorrect')) {
        obj['advancedCorrect'] = ApiClient.convertToType(data['advancedCorrect'], 'String');
      }
      if (data.hasOwnProperty('advancedCorrectMetadata')) {
        obj['advancedCorrectMetadata'] = SettingsMetadata.constructFromObject(data['advancedCorrectMetadata']);
      }
      if (data.hasOwnProperty('allowAccessCodeFormat')) {
        obj['allowAccessCodeFormat'] = ApiClient.convertToType(data['allowAccessCodeFormat'], 'String');
      }
      if (data.hasOwnProperty('allowAccessCodeFormatMetadata')) {
        obj['allowAccessCodeFormatMetadata'] = SettingsMetadata.constructFromObject(data['allowAccessCodeFormatMetadata']);
      }
      if (data.hasOwnProperty('allowAccountManagementGranular')) {
        obj['allowAccountManagementGranular'] = ApiClient.convertToType(data['allowAccountManagementGranular'], 'String');
      }
      if (data.hasOwnProperty('allowAccountManagementGranularMetadata')) {
        obj['allowAccountManagementGranularMetadata'] = SettingsMetadata.constructFromObject(data['allowAccountManagementGranularMetadata']);
      }
      if (data.hasOwnProperty('allowAccountMemberNameChange')) {
        obj['allowAccountMemberNameChange'] = ApiClient.convertToType(data['allowAccountMemberNameChange'], 'String');
      }
      if (data.hasOwnProperty('allowAccountMemberNameChangeMetadata')) {
        obj['allowAccountMemberNameChangeMetadata'] = SettingsMetadata.constructFromObject(data['allowAccountMemberNameChangeMetadata']);
      }
      if (data.hasOwnProperty('allowAgentNameEmailEdit')) {
        obj['allowAgentNameEmailEdit'] = ApiClient.convertToType(data['allowAgentNameEmailEdit'], 'String');
      }
      if (data.hasOwnProperty('allowAgentNameEmailEditMetadata')) {
        obj['allowAgentNameEmailEditMetadata'] = SettingsMetadata.constructFromObject(data['allowAgentNameEmailEditMetadata']);
      }
      if (data.hasOwnProperty('allowAutoNavSettings')) {
        obj['allowAutoNavSettings'] = ApiClient.convertToType(data['allowAutoNavSettings'], 'String');
      }
      if (data.hasOwnProperty('allowAutoNavSettingsMetadata')) {
        obj['allowAutoNavSettingsMetadata'] = SettingsMetadata.constructFromObject(data['allowAutoNavSettingsMetadata']);
      }
      if (data.hasOwnProperty('allowBulkSend')) {
        obj['allowBulkSend'] = ApiClient.convertToType(data['allowBulkSend'], 'String');
      }
      if (data.hasOwnProperty('allowBulkSendMetadata')) {
        obj['allowBulkSendMetadata'] = SettingsMetadata.constructFromObject(data['allowBulkSendMetadata']);
      }
      if (data.hasOwnProperty('allowCDWithdraw')) {
        obj['allowCDWithdraw'] = ApiClient.convertToType(data['allowCDWithdraw'], 'String');
      }
      if (data.hasOwnProperty('allowCDWithdrawMetadata')) {
        obj['allowCDWithdrawMetadata'] = SettingsMetadata.constructFromObject(data['allowCDWithdrawMetadata']);
      }
      if (data.hasOwnProperty('allowConnectHttpListenerConfigs')) {
        obj['allowConnectHttpListenerConfigs'] = ApiClient.convertToType(data['allowConnectHttpListenerConfigs'], 'String');
      }
      if (data.hasOwnProperty('allowConnectSendFinishLater')) {
        obj['allowConnectSendFinishLater'] = ApiClient.convertToType(data['allowConnectSendFinishLater'], 'String');
      }
      if (data.hasOwnProperty('allowConnectSendFinishLaterMetadata')) {
        obj['allowConnectSendFinishLaterMetadata'] = SettingsMetadata.constructFromObject(data['allowConnectSendFinishLaterMetadata']);
      }
      if (data.hasOwnProperty('allowConsumerDisclosureOverride')) {
        obj['allowConsumerDisclosureOverride'] = ApiClient.convertToType(data['allowConsumerDisclosureOverride'], 'String');
      }
      if (data.hasOwnProperty('allowConsumerDisclosureOverrideMetadata')) {
        obj['allowConsumerDisclosureOverrideMetadata'] = SettingsMetadata.constructFromObject(data['allowConsumerDisclosureOverrideMetadata']);
      }
      if (data.hasOwnProperty('allowDataDownload')) {
        obj['allowDataDownload'] = ApiClient.convertToType(data['allowDataDownload'], 'String');
      }
      if (data.hasOwnProperty('allowDataDownloadMetadata')) {
        obj['allowDataDownloadMetadata'] = SettingsMetadata.constructFromObject(data['allowDataDownloadMetadata']);
      }
      if (data.hasOwnProperty('allowDocumentDisclosures')) {
        obj['allowDocumentDisclosures'] = ApiClient.convertToType(data['allowDocumentDisclosures'], 'String');
      }
      if (data.hasOwnProperty('allowDocumentDisclosuresMetadata')) {
        obj['allowDocumentDisclosuresMetadata'] = SettingsMetadata.constructFromObject(data['allowDocumentDisclosuresMetadata']);
      }
      if (data.hasOwnProperty('allowDocumentsOnSignedEnvelopes')) {
        obj['allowDocumentsOnSignedEnvelopes'] = ApiClient.convertToType(data['allowDocumentsOnSignedEnvelopes'], 'String');
      }
      if (data.hasOwnProperty('allowDocumentsOnSignedEnvelopesMetadata')) {
        obj['allowDocumentsOnSignedEnvelopesMetadata'] = SettingsMetadata.constructFromObject(data['allowDocumentsOnSignedEnvelopesMetadata']);
      }
      if (data.hasOwnProperty('allowDocumentVisibility')) {
        obj['allowDocumentVisibility'] = ApiClient.convertToType(data['allowDocumentVisibility'], 'String');
      }
      if (data.hasOwnProperty('allowDocumentVisibilityMetadata')) {
        obj['allowDocumentVisibilityMetadata'] = SettingsMetadata.constructFromObject(data['allowDocumentVisibilityMetadata']);
      }
      if (data.hasOwnProperty('allowEHankoStamps')) {
        obj['allowEHankoStamps'] = ApiClient.convertToType(data['allowEHankoStamps'], 'String');
      }
      if (data.hasOwnProperty('allowEHankoStampsMetadata')) {
        obj['allowEHankoStampsMetadata'] = SettingsMetadata.constructFromObject(data['allowEHankoStampsMetadata']);
      }
      if (data.hasOwnProperty('allowENoteEOriginal')) {
        obj['allowENoteEOriginal'] = ApiClient.convertToType(data['allowENoteEOriginal'], 'String');
      }
      if (data.hasOwnProperty('allowENoteEOriginalMetadata')) {
        obj['allowENoteEOriginalMetadata'] = SettingsMetadata.constructFromObject(data['allowENoteEOriginalMetadata']);
      }
      if (data.hasOwnProperty('allowEnvelopeCorrect')) {
        obj['allowEnvelopeCorrect'] = ApiClient.convertToType(data['allowEnvelopeCorrect'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopeCorrectMetadata')) {
        obj['allowEnvelopeCorrectMetadata'] = SettingsMetadata.constructFromObject(data['allowEnvelopeCorrectMetadata']);
      }
      if (data.hasOwnProperty('allowEnvelopeCustodyTransfer')) {
        obj['allowEnvelopeCustodyTransfer'] = ApiClient.convertToType(data['allowEnvelopeCustodyTransfer'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopeCustodyTransferMetadata')) {
        obj['allowEnvelopeCustodyTransferMetadata'] = SettingsMetadata.constructFromObject(data['allowEnvelopeCustodyTransferMetadata']);
      }
      if (data.hasOwnProperty('allowEnvelopeCustomFields')) {
        obj['allowEnvelopeCustomFields'] = ApiClient.convertToType(data['allowEnvelopeCustomFields'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopeCustomFieldsMetadata')) {
        obj['allowEnvelopeCustomFieldsMetadata'] = SettingsMetadata.constructFromObject(data['allowEnvelopeCustomFieldsMetadata']);
      }
      if (data.hasOwnProperty('allowEnvelopePublishReporting')) {
        obj['allowEnvelopePublishReporting'] = ApiClient.convertToType(data['allowEnvelopePublishReporting'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopePublishReportingMetadata')) {
        obj['allowEnvelopePublishReportingMetadata'] = SettingsMetadata.constructFromObject(data['allowEnvelopePublishReportingMetadata']);
      }
      if (data.hasOwnProperty('allowEnvelopeReporting')) {
        obj['allowEnvelopeReporting'] = ApiClient.convertToType(data['allowEnvelopeReporting'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopeReportingMetadata')) {
        obj['allowEnvelopeReportingMetadata'] = SettingsMetadata.constructFromObject(data['allowEnvelopeReportingMetadata']);
      }
      if (data.hasOwnProperty('allowExpression')) {
        obj['allowExpression'] = ApiClient.convertToType(data['allowExpression'], 'String');
      }
      if (data.hasOwnProperty('allowExpressionMetadata')) {
        obj['allowExpressionMetadata'] = SettingsMetadata.constructFromObject(data['allowExpressionMetadata']);
      }
      if (data.hasOwnProperty('allowExpressSignerCertificate')) {
        obj['allowExpressSignerCertificate'] = ApiClient.convertToType(data['allowExpressSignerCertificate'], 'String');
      }
      if (data.hasOwnProperty('allowExpressSignerCertificateMetadata')) {
        obj['allowExpressSignerCertificateMetadata'] = SettingsMetadata.constructFromObject(data['allowExpressSignerCertificateMetadata']);
      }
      if (data.hasOwnProperty('allowExtendedSendingResourceFile')) {
        obj['allowExtendedSendingResourceFile'] = ApiClient.convertToType(data['allowExtendedSendingResourceFile'], 'String');
      }
      if (data.hasOwnProperty('allowExtendedSendingResourceFileMetadata')) {
        obj['allowExtendedSendingResourceFileMetadata'] = SettingsMetadata.constructFromObject(data['allowExtendedSendingResourceFileMetadata']);
      }
      if (data.hasOwnProperty('allowExternalSignaturePad')) {
        obj['allowExternalSignaturePad'] = ApiClient.convertToType(data['allowExternalSignaturePad'], 'String');
      }
      if (data.hasOwnProperty('allowExternalSignaturePadMetadata')) {
        obj['allowExternalSignaturePadMetadata'] = SettingsMetadata.constructFromObject(data['allowExternalSignaturePadMetadata']);
      }
      if (data.hasOwnProperty('allowInPerson')) {
        obj['allowInPerson'] = ApiClient.convertToType(data['allowInPerson'], 'String');
      }
      if (data.hasOwnProperty('allowInPersonMetadata')) {
        obj['allowInPersonMetadata'] = SettingsMetadata.constructFromObject(data['allowInPersonMetadata']);
      }
      if (data.hasOwnProperty('allowManagedStamps')) {
        obj['allowManagedStamps'] = ApiClient.convertToType(data['allowManagedStamps'], 'String');
      }
      if (data.hasOwnProperty('allowManagedStampsMetadata')) {
        obj['allowManagedStampsMetadata'] = SettingsMetadata.constructFromObject(data['allowManagedStampsMetadata']);
      }
      if (data.hasOwnProperty('allowMarkup')) {
        obj['allowMarkup'] = ApiClient.convertToType(data['allowMarkup'], 'String');
      }
      if (data.hasOwnProperty('allowMarkupMetadata')) {
        obj['allowMarkupMetadata'] = SettingsMetadata.constructFromObject(data['allowMarkupMetadata']);
      }
      if (data.hasOwnProperty('allowMemberTimeZone')) {
        obj['allowMemberTimeZone'] = ApiClient.convertToType(data['allowMemberTimeZone'], 'String');
      }
      if (data.hasOwnProperty('allowMemberTimeZoneMetadata')) {
        obj['allowMemberTimeZoneMetadata'] = SettingsMetadata.constructFromObject(data['allowMemberTimeZoneMetadata']);
      }
      if (data.hasOwnProperty('allowMergeFields')) {
        obj['allowMergeFields'] = ApiClient.convertToType(data['allowMergeFields'], 'String');
      }
      if (data.hasOwnProperty('allowMergeFieldsMetadata')) {
        obj['allowMergeFieldsMetadata'] = SettingsMetadata.constructFromObject(data['allowMergeFieldsMetadata']);
      }
      if (data.hasOwnProperty('allowMultipleBrandProfiles')) {
        obj['allowMultipleBrandProfiles'] = ApiClient.convertToType(data['allowMultipleBrandProfiles'], 'String');
      }
      if (data.hasOwnProperty('allowMultipleBrandProfilesMetadata')) {
        obj['allowMultipleBrandProfilesMetadata'] = SettingsMetadata.constructFromObject(data['allowMultipleBrandProfilesMetadata']);
      }
      if (data.hasOwnProperty('allowMultipleSignerAttachments')) {
        obj['allowMultipleSignerAttachments'] = ApiClient.convertToType(data['allowMultipleSignerAttachments'], 'String');
      }
      if (data.hasOwnProperty('allowMultipleSignerAttachmentsMetadata')) {
        obj['allowMultipleSignerAttachmentsMetadata'] = SettingsMetadata.constructFromObject(data['allowMultipleSignerAttachmentsMetadata']);
      }
      if (data.hasOwnProperty('allowNonUSPhoneAuth')) {
        obj['allowNonUSPhoneAuth'] = ApiClient.convertToType(data['allowNonUSPhoneAuth'], 'String');
      }
      if (data.hasOwnProperty('allowNonUSPhoneAuthMetadata')) {
        obj['allowNonUSPhoneAuthMetadata'] = SettingsMetadata.constructFromObject(data['allowNonUSPhoneAuthMetadata']);
      }
      if (data.hasOwnProperty('allowOfflineSigning')) {
        obj['allowOfflineSigning'] = ApiClient.convertToType(data['allowOfflineSigning'], 'String');
      }
      if (data.hasOwnProperty('allowOfflineSigningMetadata')) {
        obj['allowOfflineSigningMetadata'] = SettingsMetadata.constructFromObject(data['allowOfflineSigningMetadata']);
      }
      if (data.hasOwnProperty('allowOpenTrustSignerCertificate')) {
        obj['allowOpenTrustSignerCertificate'] = ApiClient.convertToType(data['allowOpenTrustSignerCertificate'], 'String');
      }
      if (data.hasOwnProperty('allowOpenTrustSignerCertificateMetadata')) {
        obj['allowOpenTrustSignerCertificateMetadata'] = SettingsMetadata.constructFromObject(data['allowOpenTrustSignerCertificateMetadata']);
      }
      if (data.hasOwnProperty('allowOrganizations')) {
        obj['allowOrganizations'] = ApiClient.convertToType(data['allowOrganizations'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationsMetadata')) {
        obj['allowOrganizationsMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationsMetadata']);
      }
      if (data.hasOwnProperty('allowPaymentProcessing')) {
        obj['allowPaymentProcessing'] = ApiClient.convertToType(data['allowPaymentProcessing'], 'String');
      }
      if (data.hasOwnProperty('allowPaymentProcessingMetadata')) {
        obj['allowPaymentProcessingMetadata'] = SettingsMetadata.constructFromObject(data['allowPaymentProcessingMetadata']);
      }
      if (data.hasOwnProperty('allowPersonalSignerCertificate')) {
        obj['allowPersonalSignerCertificate'] = ApiClient.convertToType(data['allowPersonalSignerCertificate'], 'String');
      }
      if (data.hasOwnProperty('allowPersonalSignerCertificateMetadata')) {
        obj['allowPersonalSignerCertificateMetadata'] = SettingsMetadata.constructFromObject(data['allowPersonalSignerCertificateMetadata']);
      }
      if (data.hasOwnProperty('allowPhoneAuthentication')) {
        obj['allowPhoneAuthentication'] = ApiClient.convertToType(data['allowPhoneAuthentication'], 'String');
      }
      if (data.hasOwnProperty('allowPhoneAuthenticationMetadata')) {
        obj['allowPhoneAuthenticationMetadata'] = SettingsMetadata.constructFromObject(data['allowPhoneAuthenticationMetadata']);
      }
      if (data.hasOwnProperty('allowPhoneAuthOverride')) {
        obj['allowPhoneAuthOverride'] = ApiClient.convertToType(data['allowPhoneAuthOverride'], 'String');
      }
      if (data.hasOwnProperty('allowPhoneAuthOverrideMetadata')) {
        obj['allowPhoneAuthOverrideMetadata'] = SettingsMetadata.constructFromObject(data['allowPhoneAuthOverrideMetadata']);
      }
      if (data.hasOwnProperty('allowPrivateSigningGroups')) {
        obj['allowPrivateSigningGroups'] = ApiClient.convertToType(data['allowPrivateSigningGroups'], 'String');
      }
      if (data.hasOwnProperty('allowPrivateSigningGroupsMetadata')) {
        obj['allowPrivateSigningGroupsMetadata'] = SettingsMetadata.constructFromObject(data['allowPrivateSigningGroupsMetadata']);
      }
      if (data.hasOwnProperty('allowReminders')) {
        obj['allowReminders'] = ApiClient.convertToType(data['allowReminders'], 'String');
      }
      if (data.hasOwnProperty('allowRemindersMetadata')) {
        obj['allowRemindersMetadata'] = SettingsMetadata.constructFromObject(data['allowRemindersMetadata']);
      }
      if (data.hasOwnProperty('allowResourceFileBranding')) {
        obj['allowResourceFileBranding'] = ApiClient.convertToType(data['allowResourceFileBranding'], 'String');
      }
      if (data.hasOwnProperty('allowResourceFileBrandingMetadata')) {
        obj['allowResourceFileBrandingMetadata'] = SettingsMetadata.constructFromObject(data['allowResourceFileBrandingMetadata']);
      }
      if (data.hasOwnProperty('allowSafeBioPharmaSignerCertificate')) {
        obj['allowSafeBioPharmaSignerCertificate'] = ApiClient.convertToType(data['allowSafeBioPharmaSignerCertificate'], 'String');
      }
      if (data.hasOwnProperty('allowSafeBioPharmaSignerCertificateMetadata')) {
        obj['allowSafeBioPharmaSignerCertificateMetadata'] = SettingsMetadata.constructFromObject(data['allowSafeBioPharmaSignerCertificateMetadata']);
      }
      if (data.hasOwnProperty('allowSecurityAppliance')) {
        obj['allowSecurityAppliance'] = ApiClient.convertToType(data['allowSecurityAppliance'], 'String');
      }
      if (data.hasOwnProperty('allowSecurityApplianceMetadata')) {
        obj['allowSecurityApplianceMetadata'] = SettingsMetadata.constructFromObject(data['allowSecurityApplianceMetadata']);
      }
      if (data.hasOwnProperty('allowSendToCertifiedDelivery')) {
        obj['allowSendToCertifiedDelivery'] = ApiClient.convertToType(data['allowSendToCertifiedDelivery'], 'String');
      }
      if (data.hasOwnProperty('allowSendToCertifiedDeliveryMetadata')) {
        obj['allowSendToCertifiedDeliveryMetadata'] = SettingsMetadata.constructFromObject(data['allowSendToCertifiedDeliveryMetadata']);
      }
      if (data.hasOwnProperty('allowSendToIntermediary')) {
        obj['allowSendToIntermediary'] = ApiClient.convertToType(data['allowSendToIntermediary'], 'String');
      }
      if (data.hasOwnProperty('allowSendToIntermediaryMetadata')) {
        obj['allowSendToIntermediaryMetadata'] = SettingsMetadata.constructFromObject(data['allowSendToIntermediaryMetadata']);
      }
      if (data.hasOwnProperty('allowServerTemplates')) {
        obj['allowServerTemplates'] = ApiClient.convertToType(data['allowServerTemplates'], 'String');
      }
      if (data.hasOwnProperty('allowServerTemplatesMetadata')) {
        obj['allowServerTemplatesMetadata'] = SettingsMetadata.constructFromObject(data['allowServerTemplatesMetadata']);
      }
      if (data.hasOwnProperty('allowSharedTabs')) {
        obj['allowSharedTabs'] = ApiClient.convertToType(data['allowSharedTabs'], 'String');
      }
      if (data.hasOwnProperty('allowSharedTabsMetadata')) {
        obj['allowSharedTabsMetadata'] = SettingsMetadata.constructFromObject(data['allowSharedTabsMetadata']);
      }
      if (data.hasOwnProperty('allowSignatureStamps')) {
        obj['allowSignatureStamps'] = ApiClient.convertToType(data['allowSignatureStamps'], 'String');
      }
      if (data.hasOwnProperty('allowSignatureStampsMetadata')) {
        obj['allowSignatureStampsMetadata'] = SettingsMetadata.constructFromObject(data['allowSignatureStampsMetadata']);
      }
      if (data.hasOwnProperty('allowSignDocumentFromHomePage')) {
        obj['allowSignDocumentFromHomePage'] = ApiClient.convertToType(data['allowSignDocumentFromHomePage'], 'String');
      }
      if (data.hasOwnProperty('allowSignDocumentFromHomePageMetadata')) {
        obj['allowSignDocumentFromHomePageMetadata'] = SettingsMetadata.constructFromObject(data['allowSignDocumentFromHomePageMetadata']);
      }
      if (data.hasOwnProperty('allowSignerReassign')) {
        obj['allowSignerReassign'] = ApiClient.convertToType(data['allowSignerReassign'], 'String');
      }
      if (data.hasOwnProperty('allowSignerReassignMetadata')) {
        obj['allowSignerReassignMetadata'] = SettingsMetadata.constructFromObject(data['allowSignerReassignMetadata']);
      }
      if (data.hasOwnProperty('allowSignerReassignOverride')) {
        obj['allowSignerReassignOverride'] = ApiClient.convertToType(data['allowSignerReassignOverride'], 'String');
      }
      if (data.hasOwnProperty('allowSignerReassignOverrideMetadata')) {
        obj['allowSignerReassignOverrideMetadata'] = SettingsMetadata.constructFromObject(data['allowSignerReassignOverrideMetadata']);
      }
      if (data.hasOwnProperty('allowSigningExtensions')) {
        obj['allowSigningExtensions'] = ApiClient.convertToType(data['allowSigningExtensions'], 'String');
      }
      if (data.hasOwnProperty('allowSigningExtensionsMetadata')) {
        obj['allowSigningExtensionsMetadata'] = SettingsMetadata.constructFromObject(data['allowSigningExtensionsMetadata']);
      }
      if (data.hasOwnProperty('allowSigningGroups')) {
        obj['allowSigningGroups'] = ApiClient.convertToType(data['allowSigningGroups'], 'String');
      }
      if (data.hasOwnProperty('allowSigningGroupsMetadata')) {
        obj['allowSigningGroupsMetadata'] = SettingsMetadata.constructFromObject(data['allowSigningGroupsMetadata']);
      }
      if (data.hasOwnProperty('allowSigningRadioDeselect')) {
        obj['allowSigningRadioDeselect'] = ApiClient.convertToType(data['allowSigningRadioDeselect'], 'String');
      }
      if (data.hasOwnProperty('allowSigningRadioDeselectMetadata')) {
        obj['allowSigningRadioDeselectMetadata'] = SettingsMetadata.constructFromObject(data['allowSigningRadioDeselectMetadata']);
      }
      if (data.hasOwnProperty('allowSignNow')) {
        obj['allowSignNow'] = ApiClient.convertToType(data['allowSignNow'], 'String');
      }
      if (data.hasOwnProperty('allowSignNowMetadata')) {
        obj['allowSignNowMetadata'] = ApiClient.convertToType(data['allowSignNowMetadata'], 'String');
      }
      if (data.hasOwnProperty('allowSocialIdLogin')) {
        obj['allowSocialIdLogin'] = ApiClient.convertToType(data['allowSocialIdLogin'], 'String');
      }
      if (data.hasOwnProperty('allowSocialIdLoginMetadata')) {
        obj['allowSocialIdLoginMetadata'] = SettingsMetadata.constructFromObject(data['allowSocialIdLoginMetadata']);
      }
      if (data.hasOwnProperty('allowSupplementalDocuments')) {
        obj['allowSupplementalDocuments'] = ApiClient.convertToType(data['allowSupplementalDocuments'], 'String');
      }
      if (data.hasOwnProperty('allowSupplementalDocumentsMetadata')) {
        obj['allowSupplementalDocumentsMetadata'] = SettingsMetadata.constructFromObject(data['allowSupplementalDocumentsMetadata']);
      }
      if (data.hasOwnProperty('anchorPopulationScope')) {
        obj['anchorPopulationScope'] = ApiClient.convertToType(data['anchorPopulationScope'], 'String');
      }
      if (data.hasOwnProperty('anchorPopulationScopeMetadata')) {
        obj['anchorPopulationScopeMetadata'] = SettingsMetadata.constructFromObject(data['anchorPopulationScopeMetadata']);
      }
      if (data.hasOwnProperty('anchorTagVersionedPlacementEnabled')) {
        obj['anchorTagVersionedPlacementEnabled'] = ApiClient.convertToType(data['anchorTagVersionedPlacementEnabled'], 'String');
      }
      if (data.hasOwnProperty('anchorTagVersionedPlacementMetadataEnabled')) {
        obj['anchorTagVersionedPlacementMetadataEnabled'] = SettingsMetadata.constructFromObject(data['anchorTagVersionedPlacementMetadataEnabled']);
      }
      if (data.hasOwnProperty('attachCompletedEnvelope')) {
        obj['attachCompletedEnvelope'] = ApiClient.convertToType(data['attachCompletedEnvelope'], 'String');
      }
      if (data.hasOwnProperty('attachCompletedEnvelopeMetadata')) {
        obj['attachCompletedEnvelopeMetadata'] = SettingsMetadata.constructFromObject(data['attachCompletedEnvelopeMetadata']);
      }
      if (data.hasOwnProperty('authenticationCheck')) {
        obj['authenticationCheck'] = ApiClient.convertToType(data['authenticationCheck'], 'String');
      }
      if (data.hasOwnProperty('authenticationCheckMetadata')) {
        obj['authenticationCheckMetadata'] = SettingsMetadata.constructFromObject(data['authenticationCheckMetadata']);
      }
      if (data.hasOwnProperty('autoNavRule')) {
        obj['autoNavRule'] = ApiClient.convertToType(data['autoNavRule'], 'String');
      }
      if (data.hasOwnProperty('autoNavRuleMetadata')) {
        obj['autoNavRuleMetadata'] = SettingsMetadata.constructFromObject(data['autoNavRuleMetadata']);
      }
      if (data.hasOwnProperty('autoProvisionSignerAccount')) {
        obj['autoProvisionSignerAccount'] = ApiClient.convertToType(data['autoProvisionSignerAccount'], 'String');
      }
      if (data.hasOwnProperty('autoProvisionSignerAccountMetadata')) {
        obj['autoProvisionSignerAccountMetadata'] = SettingsMetadata.constructFromObject(data['autoProvisionSignerAccountMetadata']);
      }
      if (data.hasOwnProperty('bccEmailArchive')) {
        obj['bccEmailArchive'] = ApiClient.convertToType(data['bccEmailArchive'], 'String');
      }
      if (data.hasOwnProperty('bccEmailArchiveMetadata')) {
        obj['bccEmailArchiveMetadata'] = SettingsMetadata.constructFromObject(data['bccEmailArchiveMetadata']);
      }
      if (data.hasOwnProperty('betaSwitchConfiguration')) {
        obj['betaSwitchConfiguration'] = ApiClient.convertToType(data['betaSwitchConfiguration'], 'String');
      }
      if (data.hasOwnProperty('betaSwitchConfigurationMetadata')) {
        obj['betaSwitchConfigurationMetadata'] = SettingsMetadata.constructFromObject(data['betaSwitchConfigurationMetadata']);
      }
      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = AddressInformation.constructFromObject(data['billingAddress']);
      }
      if (data.hasOwnProperty('billingAddressMetadata')) {
        obj['billingAddressMetadata'] = SettingsMetadata.constructFromObject(data['billingAddressMetadata']);
      }
      if (data.hasOwnProperty('bulkSend')) {
        obj['bulkSend'] = ApiClient.convertToType(data['bulkSend'], 'String');
      }
      if (data.hasOwnProperty('bulkSendMetadata')) {
        obj['bulkSendMetadata'] = SettingsMetadata.constructFromObject(data['bulkSendMetadata']);
      }
      if (data.hasOwnProperty('canSelfBrandSend')) {
        obj['canSelfBrandSend'] = ApiClient.convertToType(data['canSelfBrandSend'], 'String');
      }
      if (data.hasOwnProperty('canSelfBrandSendMetadata')) {
        obj['canSelfBrandSendMetadata'] = SettingsMetadata.constructFromObject(data['canSelfBrandSendMetadata']);
      }
      if (data.hasOwnProperty('canSelfBrandSign')) {
        obj['canSelfBrandSign'] = ApiClient.convertToType(data['canSelfBrandSign'], 'String');
      }
      if (data.hasOwnProperty('canSelfBrandSignMetadata')) {
        obj['canSelfBrandSignMetadata'] = SettingsMetadata.constructFromObject(data['canSelfBrandSignMetadata']);
      }
      if (data.hasOwnProperty('captureVoiceRecording')) {
        obj['captureVoiceRecording'] = ApiClient.convertToType(data['captureVoiceRecording'], 'String');
      }
      if (data.hasOwnProperty('captureVoiceRecordingMetadata')) {
        obj['captureVoiceRecordingMetadata'] = SettingsMetadata.constructFromObject(data['captureVoiceRecordingMetadata']);
      }
      if (data.hasOwnProperty('cfrUseWideImage')) {
        obj['cfrUseWideImage'] = ApiClient.convertToType(data['cfrUseWideImage'], 'String');
      }
      if (data.hasOwnProperty('cfrUseWideImageMetadata')) {
        obj['cfrUseWideImageMetadata'] = SettingsMetadata.constructFromObject(data['cfrUseWideImageMetadata']);
      }
      if (data.hasOwnProperty('chromeSignatureEnabled')) {
        obj['chromeSignatureEnabled'] = ApiClient.convertToType(data['chromeSignatureEnabled'], 'String');
      }
      if (data.hasOwnProperty('chromeSignatureEnabledMetadata')) {
        obj['chromeSignatureEnabledMetadata'] = SettingsMetadata.constructFromObject(data['chromeSignatureEnabledMetadata']);
      }
      if (data.hasOwnProperty('commentEmailShowMessageText')) {
        obj['commentEmailShowMessageText'] = ApiClient.convertToType(data['commentEmailShowMessageText'], 'String');
      }
      if (data.hasOwnProperty('commentEmailShowMessageTextMetadata')) {
        obj['commentEmailShowMessageTextMetadata'] = SettingsMetadata.constructFromObject(data['commentEmailShowMessageTextMetadata']);
      }
      if (data.hasOwnProperty('commentsAllowEnvelopeOverride')) {
        obj['commentsAllowEnvelopeOverride'] = ApiClient.convertToType(data['commentsAllowEnvelopeOverride'], 'String');
      }
      if (data.hasOwnProperty('commentsAllowEnvelopeOverrideMetadata')) {
        obj['commentsAllowEnvelopeOverrideMetadata'] = SettingsMetadata.constructFromObject(data['commentsAllowEnvelopeOverrideMetadata']);
      }
      if (data.hasOwnProperty('conditionalFieldsEnabled')) {
        obj['conditionalFieldsEnabled'] = ApiClient.convertToType(data['conditionalFieldsEnabled'], 'String');
      }
      if (data.hasOwnProperty('conditionalFieldsEnabledMetadata')) {
        obj['conditionalFieldsEnabledMetadata'] = SettingsMetadata.constructFromObject(data['conditionalFieldsEnabledMetadata']);
      }
      if (data.hasOwnProperty('consumerDisclosureFrequency')) {
        obj['consumerDisclosureFrequency'] = ApiClient.convertToType(data['consumerDisclosureFrequency'], 'String');
      }
      if (data.hasOwnProperty('consumerDisclosureFrequencyMetadata')) {
        obj['consumerDisclosureFrequencyMetadata'] = SettingsMetadata.constructFromObject(data['consumerDisclosureFrequencyMetadata']);
      }
      if (data.hasOwnProperty('convertPdfFields')) {
        obj['convertPdfFields'] = ApiClient.convertToType(data['convertPdfFields'], 'String');
      }
      if (data.hasOwnProperty('convertPdfFieldsMetadata')) {
        obj['convertPdfFieldsMetadata'] = SettingsMetadata.constructFromObject(data['convertPdfFieldsMetadata']);
      }
      if (data.hasOwnProperty('dataPopulationScope')) {
        obj['dataPopulationScope'] = ApiClient.convertToType(data['dataPopulationScope'], 'String');
      }
      if (data.hasOwnProperty('dataPopulationScopeMetadata')) {
        obj['dataPopulationScopeMetadata'] = SettingsMetadata.constructFromObject(data['dataPopulationScopeMetadata']);
      }
      if (data.hasOwnProperty('disableMobileApp')) {
        obj['disableMobileApp'] = ApiClient.convertToType(data['disableMobileApp'], 'String');
      }
      if (data.hasOwnProperty('disableMobileAppMetadata')) {
        obj['disableMobileAppMetadata'] = SettingsMetadata.constructFromObject(data['disableMobileAppMetadata']);
      }
      if (data.hasOwnProperty('disableMobilePushNotifications')) {
        obj['disableMobilePushNotifications'] = ApiClient.convertToType(data['disableMobilePushNotifications'], 'String');
      }
      if (data.hasOwnProperty('disableMobilePushNotificationsMetadata')) {
        obj['disableMobilePushNotificationsMetadata'] = SettingsMetadata.constructFromObject(data['disableMobilePushNotificationsMetadata']);
      }
      if (data.hasOwnProperty('disableMobileSending')) {
        obj['disableMobileSending'] = ApiClient.convertToType(data['disableMobileSending'], 'String');
      }
      if (data.hasOwnProperty('disableMobileSendingMetadata')) {
        obj['disableMobileSendingMetadata'] = SettingsMetadata.constructFromObject(data['disableMobileSendingMetadata']);
      }
      if (data.hasOwnProperty('disableMultipleSessions')) {
        obj['disableMultipleSessions'] = ApiClient.convertToType(data['disableMultipleSessions'], 'String');
      }
      if (data.hasOwnProperty('disableMultipleSessionsMetadata')) {
        obj['disableMultipleSessionsMetadata'] = SettingsMetadata.constructFromObject(data['disableMultipleSessionsMetadata']);
      }
      if (data.hasOwnProperty('disablePurgeNotificationsForSenderMetadata')) {
        obj['disablePurgeNotificationsForSenderMetadata'] = SettingsMetadata.constructFromObject(data['disablePurgeNotificationsForSenderMetadata']);
      }
      if (data.hasOwnProperty('disableSignerCertView')) {
        obj['disableSignerCertView'] = ApiClient.convertToType(data['disableSignerCertView'], 'String');
      }
      if (data.hasOwnProperty('disableSignerCertViewMetadata')) {
        obj['disableSignerCertViewMetadata'] = SettingsMetadata.constructFromObject(data['disableSignerCertViewMetadata']);
      }
      if (data.hasOwnProperty('disableSignerHistoryView')) {
        obj['disableSignerHistoryView'] = ApiClient.convertToType(data['disableSignerHistoryView'], 'String');
      }
      if (data.hasOwnProperty('disableSignerHistoryViewMetadata')) {
        obj['disableSignerHistoryViewMetadata'] = SettingsMetadata.constructFromObject(data['disableSignerHistoryViewMetadata']);
      }
      if (data.hasOwnProperty('disableStyleSignature')) {
        obj['disableStyleSignature'] = ApiClient.convertToType(data['disableStyleSignature'], 'String');
      }
      if (data.hasOwnProperty('disableStyleSignatureMetadata')) {
        obj['disableStyleSignatureMetadata'] = SettingsMetadata.constructFromObject(data['disableStyleSignatureMetadata']);
      }
      if (data.hasOwnProperty('disableUploadSignature')) {
        obj['disableUploadSignature'] = ApiClient.convertToType(data['disableUploadSignature'], 'String');
      }
      if (data.hasOwnProperty('disableUploadSignatureMetadata')) {
        obj['disableUploadSignatureMetadata'] = SettingsMetadata.constructFromObject(data['disableUploadSignatureMetadata']);
      }
      if (data.hasOwnProperty('disableUserSharing')) {
        obj['disableUserSharing'] = ApiClient.convertToType(data['disableUserSharing'], 'String');
      }
      if (data.hasOwnProperty('disableUserSharingMetadata')) {
        obj['disableUserSharingMetadata'] = SettingsMetadata.constructFromObject(data['disableUserSharingMetadata']);
      }
      if (data.hasOwnProperty('displayBetaSwitch')) {
        obj['displayBetaSwitch'] = ApiClient.convertToType(data['displayBetaSwitch'], 'String');
      }
      if (data.hasOwnProperty('displayBetaSwitchMetadata')) {
        obj['displayBetaSwitchMetadata'] = SettingsMetadata.constructFromObject(data['displayBetaSwitchMetadata']);
      }
      if (data.hasOwnProperty('documentConversionRestrictions')) {
        obj['documentConversionRestrictions'] = ApiClient.convertToType(data['documentConversionRestrictions'], 'String');
      }
      if (data.hasOwnProperty('documentConversionRestrictionsMetadata')) {
        obj['documentConversionRestrictionsMetadata'] = SettingsMetadata.constructFromObject(data['documentConversionRestrictionsMetadata']);
      }
      if (data.hasOwnProperty('documentRetention')) {
        obj['documentRetention'] = ApiClient.convertToType(data['documentRetention'], 'String');
      }
      if (data.hasOwnProperty('documentRetentionMetadata')) {
        obj['documentRetentionMetadata'] = SettingsMetadata.constructFromObject(data['documentRetentionMetadata']);
      }
      if (data.hasOwnProperty('documentRetentionPurgeTabs')) {
        obj['documentRetentionPurgeTabs'] = ApiClient.convertToType(data['documentRetentionPurgeTabs'], 'String');
      }
      if (data.hasOwnProperty('documentVisibility')) {
        obj['documentVisibility'] = ApiClient.convertToType(data['documentVisibility'], 'String');
      }
      if (data.hasOwnProperty('documentVisibilityMetadata')) {
        obj['documentVisibilityMetadata'] = SettingsMetadata.constructFromObject(data['documentVisibilityMetadata']);
      }
      if (data.hasOwnProperty('emailTemplateVersion')) {
        obj['emailTemplateVersion'] = ApiClient.convertToType(data['emailTemplateVersion'], 'String');
      }
      if (data.hasOwnProperty('emailTemplateVersionMetadata')) {
        obj['emailTemplateVersionMetadata'] = SettingsMetadata.constructFromObject(data['emailTemplateVersionMetadata']);
      }
      if (data.hasOwnProperty('enableAccessCodeGenerator')) {
        obj['enableAccessCodeGenerator'] = ApiClient.convertToType(data['enableAccessCodeGenerator'], 'String');
      }
      if (data.hasOwnProperty('enableAccessCodeGeneratorMetadata')) {
        obj['enableAccessCodeGeneratorMetadata'] = SettingsMetadata.constructFromObject(data['enableAccessCodeGeneratorMetadata']);
      }
      if (data.hasOwnProperty('enableAdvancedPayments')) {
        obj['enableAdvancedPayments'] = ApiClient.convertToType(data['enableAdvancedPayments'], 'String');
      }
      if (data.hasOwnProperty('enableAdvancedPaymentsMetadata')) {
        obj['enableAdvancedPaymentsMetadata'] = SettingsMetadata.constructFromObject(data['enableAdvancedPaymentsMetadata']);
      }
      if (data.hasOwnProperty('enableAdvancedPowerForms')) {
        obj['enableAdvancedPowerForms'] = ApiClient.convertToType(data['enableAdvancedPowerForms'], 'String');
      }
      if (data.hasOwnProperty('enableAdvancedPowerFormsMetadata')) {
        obj['enableAdvancedPowerFormsMetadata'] = SettingsMetadata.constructFromObject(data['enableAdvancedPowerFormsMetadata']);
      }
      if (data.hasOwnProperty('enableAutoNav')) {
        obj['enableAutoNav'] = ApiClient.convertToType(data['enableAutoNav'], 'String');
      }
      if (data.hasOwnProperty('enableAutoNavMetadata')) {
        obj['enableAutoNavMetadata'] = SettingsMetadata.constructFromObject(data['enableAutoNavMetadata']);
      }
      if (data.hasOwnProperty('enableCalculatedFields')) {
        obj['enableCalculatedFields'] = ApiClient.convertToType(data['enableCalculatedFields'], 'String');
      }
      if (data.hasOwnProperty('enableCalculatedFieldsMetadata')) {
        obj['enableCalculatedFieldsMetadata'] = SettingsMetadata.constructFromObject(data['enableCalculatedFieldsMetadata']);
      }
      if (data.hasOwnProperty('enableClickwraps')) {
        obj['enableClickwraps'] = ApiClient.convertToType(data['enableClickwraps'], 'String');
      }
      if (data.hasOwnProperty('enableClickwrapsMetadata')) {
        obj['enableClickwrapsMetadata'] = SettingsMetadata.constructFromObject(data['enableClickwrapsMetadata']);
      }
      if (data.hasOwnProperty('enableCustomerSatisfactionMetricTracking')) {
        obj['enableCustomerSatisfactionMetricTracking'] = ApiClient.convertToType(data['enableCustomerSatisfactionMetricTracking'], 'String');
      }
      if (data.hasOwnProperty('enableCustomerSatisfactionMetricTrackingMetadata')) {
        obj['enableCustomerSatisfactionMetricTrackingMetadata'] = SettingsMetadata.constructFromObject(data['enableCustomerSatisfactionMetricTrackingMetadata']);
      }
      if (data.hasOwnProperty('enableDSPro')) {
        obj['enableDSPro'] = ApiClient.convertToType(data['enableDSPro'], 'String');
      }
      if (data.hasOwnProperty('enableDSProMetadata')) {
        obj['enableDSProMetadata'] = SettingsMetadata.constructFromObject(data['enableDSProMetadata']);
      }
      if (data.hasOwnProperty('enableEnvelopeStampingByAccountAdmin')) {
        obj['enableEnvelopeStampingByAccountAdmin'] = ApiClient.convertToType(data['enableEnvelopeStampingByAccountAdmin'], 'String');
      }
      if (data.hasOwnProperty('enableEnvelopeStampingByAccountAdminMetadata')) {
        obj['enableEnvelopeStampingByAccountAdminMetadata'] = SettingsMetadata.constructFromObject(data['enableEnvelopeStampingByAccountAdminMetadata']);
      }
      if (data.hasOwnProperty('enableEnvelopeStampingByDSAdmin')) {
        obj['enableEnvelopeStampingByDSAdmin'] = ApiClient.convertToType(data['enableEnvelopeStampingByDSAdmin'], 'String');
      }
      if (data.hasOwnProperty('enableEnvelopeStampingByDSAdminMetadata')) {
        obj['enableEnvelopeStampingByDSAdminMetadata'] = SettingsMetadata.constructFromObject(data['enableEnvelopeStampingByDSAdminMetadata']);
      }
      if (data.hasOwnProperty('enablePaymentProcessing')) {
        obj['enablePaymentProcessing'] = ApiClient.convertToType(data['enablePaymentProcessing'], 'String');
      }
      if (data.hasOwnProperty('enablePaymentProcessingMetadata')) {
        obj['enablePaymentProcessingMetadata'] = SettingsMetadata.constructFromObject(data['enablePaymentProcessingMetadata']);
      }
      if (data.hasOwnProperty('enablePowerForm')) {
        obj['enablePowerForm'] = ApiClient.convertToType(data['enablePowerForm'], 'String');
      }
      if (data.hasOwnProperty('enablePowerFormDirect')) {
        obj['enablePowerFormDirect'] = ApiClient.convertToType(data['enablePowerFormDirect'], 'String');
      }
      if (data.hasOwnProperty('enablePowerFormDirectMetadata')) {
        obj['enablePowerFormDirectMetadata'] = SettingsMetadata.constructFromObject(data['enablePowerFormDirectMetadata']);
      }
      if (data.hasOwnProperty('enablePowerFormMetadata')) {
        obj['enablePowerFormMetadata'] = SettingsMetadata.constructFromObject(data['enablePowerFormMetadata']);
      }
      if (data.hasOwnProperty('enableRecipientDomainValidation')) {
        obj['enableRecipientDomainValidation'] = ApiClient.convertToType(data['enableRecipientDomainValidation'], 'String');
      }
      if (data.hasOwnProperty('enableRecipientDomainValidationMetadata')) {
        obj['enableRecipientDomainValidationMetadata'] = SettingsMetadata.constructFromObject(data['enableRecipientDomainValidationMetadata']);
      }
      if (data.hasOwnProperty('enableReportLinks')) {
        obj['enableReportLinks'] = ApiClient.convertToType(data['enableReportLinks'], 'String');
      }
      if (data.hasOwnProperty('enableReportLinksMetadata')) {
        obj['enableReportLinksMetadata'] = SettingsMetadata.constructFromObject(data['enableReportLinksMetadata']);
      }
      if (data.hasOwnProperty('enableRequireSignOnPaper')) {
        obj['enableRequireSignOnPaper'] = ApiClient.convertToType(data['enableRequireSignOnPaper'], 'String');
      }
      if (data.hasOwnProperty('enableRequireSignOnPaperMetadata')) {
        obj['enableRequireSignOnPaperMetadata'] = SettingsMetadata.constructFromObject(data['enableRequireSignOnPaperMetadata']);
      }
      if (data.hasOwnProperty('enableReservedDomain')) {
        obj['enableReservedDomain'] = ApiClient.convertToType(data['enableReservedDomain'], 'String');
      }
      if (data.hasOwnProperty('enableReservedDomainMetadata')) {
        obj['enableReservedDomainMetadata'] = SettingsMetadata.constructFromObject(data['enableReservedDomainMetadata']);
      }
      if (data.hasOwnProperty('enableResponsiveSigning')) {
        obj['enableResponsiveSigning'] = ApiClient.convertToType(data['enableResponsiveSigning'], 'String');
      }
      if (data.hasOwnProperty('enableResponsiveSigningMetadata')) {
        obj['enableResponsiveSigningMetadata'] = SettingsMetadata.constructFromObject(data['enableResponsiveSigningMetadata']);
      }
      if (data.hasOwnProperty('enableScheduledRelease')) {
        obj['enableScheduledRelease'] = ApiClient.convertToType(data['enableScheduledRelease'], 'String');
      }
      if (data.hasOwnProperty('enableScheduledReleaseMetadata')) {
        obj['enableScheduledReleaseMetadata'] = SettingsMetadata.constructFromObject(data['enableScheduledReleaseMetadata']);
      }
      if (data.hasOwnProperty('enableSendingTagsFontSettings')) {
        obj['enableSendingTagsFontSettings'] = ApiClient.convertToType(data['enableSendingTagsFontSettings'], 'String');
      }
      if (data.hasOwnProperty('enableSendingTagsFontSettingsMetadata')) {
        obj['enableSendingTagsFontSettingsMetadata'] = SettingsMetadata.constructFromObject(data['enableSendingTagsFontSettingsMetadata']);
      }
      if (data.hasOwnProperty('enableSendToAgent')) {
        obj['enableSendToAgent'] = ApiClient.convertToType(data['enableSendToAgent'], 'String');
      }
      if (data.hasOwnProperty('enableSendToAgentMetadata')) {
        obj['enableSendToAgentMetadata'] = SettingsMetadata.constructFromObject(data['enableSendToAgentMetadata']);
      }
      if (data.hasOwnProperty('enableSendToIntermediary')) {
        obj['enableSendToIntermediary'] = ApiClient.convertToType(data['enableSendToIntermediary'], 'String');
      }
      if (data.hasOwnProperty('enableSendToIntermediaryMetadata')) {
        obj['enableSendToIntermediaryMetadata'] = SettingsMetadata.constructFromObject(data['enableSendToIntermediaryMetadata']);
      }
      if (data.hasOwnProperty('enableSendToManage')) {
        obj['enableSendToManage'] = ApiClient.convertToType(data['enableSendToManage'], 'String');
      }
      if (data.hasOwnProperty('enableSendToManageMetadata')) {
        obj['enableSendToManageMetadata'] = SettingsMetadata.constructFromObject(data['enableSendToManageMetadata']);
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
      if (data.hasOwnProperty('enableSigningExtensionComments')) {
        obj['enableSigningExtensionComments'] = ApiClient.convertToType(data['enableSigningExtensionComments'], 'String');
      }
      if (data.hasOwnProperty('enableSigningExtensionCommentsMetadata')) {
        obj['enableSigningExtensionCommentsMetadata'] = SettingsMetadata.constructFromObject(data['enableSigningExtensionCommentsMetadata']);
      }
      if (data.hasOwnProperty('enableSigningExtensionConversations')) {
        obj['enableSigningExtensionConversations'] = ApiClient.convertToType(data['enableSigningExtensionConversations'], 'String');
      }
      if (data.hasOwnProperty('enableSigningExtensionConversationsMetadata')) {
        obj['enableSigningExtensionConversationsMetadata'] = SettingsMetadata.constructFromObject(data['enableSigningExtensionConversationsMetadata']);
      }
      if (data.hasOwnProperty('enableSigningOrderSettingsForAccount')) {
        obj['enableSigningOrderSettingsForAccount'] = ApiClient.convertToType(data['enableSigningOrderSettingsForAccount'], 'String');
      }
      if (data.hasOwnProperty('enableSigningOrderSettingsForAccountMetadata')) {
        obj['enableSigningOrderSettingsForAccountMetadata'] = SettingsMetadata.constructFromObject(data['enableSigningOrderSettingsForAccountMetadata']);
      }
      if (data.hasOwnProperty('enableSignOnPaper')) {
        obj['enableSignOnPaper'] = ApiClient.convertToType(data['enableSignOnPaper'], 'String');
      }
      if (data.hasOwnProperty('enableSignOnPaperMetadata')) {
        obj['enableSignOnPaperMetadata'] = SettingsMetadata.constructFromObject(data['enableSignOnPaperMetadata']);
      }
      if (data.hasOwnProperty('enableSignOnPaperOverride')) {
        obj['enableSignOnPaperOverride'] = ApiClient.convertToType(data['enableSignOnPaperOverride'], 'String');
      }
      if (data.hasOwnProperty('enableSignOnPaperOverrideMetadata')) {
        obj['enableSignOnPaperOverrideMetadata'] = SettingsMetadata.constructFromObject(data['enableSignOnPaperOverrideMetadata']);
      }
      if (data.hasOwnProperty('enableSignWithNotary')) {
        obj['enableSignWithNotary'] = ApiClient.convertToType(data['enableSignWithNotary'], 'String');
      }
      if (data.hasOwnProperty('enableSignWithNotaryMetadata')) {
        obj['enableSignWithNotaryMetadata'] = SettingsMetadata.constructFromObject(data['enableSignWithNotaryMetadata']);
      }
      if (data.hasOwnProperty('enableSMSAuthentication')) {
        obj['enableSMSAuthentication'] = ApiClient.convertToType(data['enableSMSAuthentication'], 'String');
      }
      if (data.hasOwnProperty('enableSMSAuthenticationMetadata')) {
        obj['enableSMSAuthenticationMetadata'] = SettingsMetadata.constructFromObject(data['enableSMSAuthenticationMetadata']);
      }
      if (data.hasOwnProperty('enableSocialIdLogin')) {
        obj['enableSocialIdLogin'] = ApiClient.convertToType(data['enableSocialIdLogin'], 'String');
      }
      if (data.hasOwnProperty('enableSocialIdLoginMetadata')) {
        obj['enableSocialIdLoginMetadata'] = SettingsMetadata.constructFromObject(data['enableSocialIdLoginMetadata']);
      }
      if (data.hasOwnProperty('enableStrikeThrough')) {
        obj['enableStrikeThrough'] = ApiClient.convertToType(data['enableStrikeThrough'], 'String');
      }
      if (data.hasOwnProperty('enableStrikeThroughMetadata')) {
        obj['enableStrikeThroughMetadata'] = SettingsMetadata.constructFromObject(data['enableStrikeThroughMetadata']);
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
      if (data.hasOwnProperty('enableWitnessing')) {
        obj['enableWitnessing'] = ApiClient.convertToType(data['enableWitnessing'], 'String');
      }
      if (data.hasOwnProperty('enableWitnessingMetadata')) {
        obj['enableWitnessingMetadata'] = SettingsMetadata.constructFromObject(data['enableWitnessingMetadata']);
      }
      if (data.hasOwnProperty('enforceTemplateNameUniqueness')) {
        obj['enforceTemplateNameUniqueness'] = ApiClient.convertToType(data['enforceTemplateNameUniqueness'], 'String');
      }
      if (data.hasOwnProperty('enforceTemplateNameUniquenessMetadata')) {
        obj['enforceTemplateNameUniquenessMetadata'] = SettingsMetadata.constructFromObject(data['enforceTemplateNameUniquenessMetadata']);
      }
      if (data.hasOwnProperty('envelopeIntegrationAllowed')) {
        obj['envelopeIntegrationAllowed'] = ApiClient.convertToType(data['envelopeIntegrationAllowed'], 'String');
      }
      if (data.hasOwnProperty('envelopeIntegrationAllowedMetadata')) {
        obj['envelopeIntegrationAllowedMetadata'] = SettingsMetadata.constructFromObject(data['envelopeIntegrationAllowedMetadata']);
      }
      if (data.hasOwnProperty('envelopeIntegrationEnabled')) {
        obj['envelopeIntegrationEnabled'] = ApiClient.convertToType(data['envelopeIntegrationEnabled'], 'String');
      }
      if (data.hasOwnProperty('envelopeIntegrationEnabledMetadata')) {
        obj['envelopeIntegrationEnabledMetadata'] = SettingsMetadata.constructFromObject(data['envelopeIntegrationEnabledMetadata']);
      }
      if (data.hasOwnProperty('envelopeStampingDefaultValue')) {
        obj['envelopeStampingDefaultValue'] = ApiClient.convertToType(data['envelopeStampingDefaultValue'], 'String');
      }
      if (data.hasOwnProperty('envelopeStampingDefaultValueMetadata')) {
        obj['envelopeStampingDefaultValueMetadata'] = SettingsMetadata.constructFromObject(data['envelopeStampingDefaultValueMetadata']);
      }
      if (data.hasOwnProperty('expressSend')) {
        obj['expressSend'] = ApiClient.convertToType(data['expressSend'], 'String');
      }
      if (data.hasOwnProperty('expressSendAllowTabs')) {
        obj['expressSendAllowTabs'] = ApiClient.convertToType(data['expressSendAllowTabs'], 'String');
      }
      if (data.hasOwnProperty('expressSendAllowTabsMetadata')) {
        obj['expressSendAllowTabsMetadata'] = SettingsMetadata.constructFromObject(data['expressSendAllowTabsMetadata']);
      }
      if (data.hasOwnProperty('expressSendMetadata')) {
        obj['expressSendMetadata'] = SettingsMetadata.constructFromObject(data['expressSendMetadata']);
      }
      if (data.hasOwnProperty('externalDocumentSources')) {
        obj['externalDocumentSources'] = ExternalDocumentSources.constructFromObject(data['externalDocumentSources']);
      }
      if (data.hasOwnProperty('externalSignaturePadType')) {
        obj['externalSignaturePadType'] = ApiClient.convertToType(data['externalSignaturePadType'], 'String');
      }
      if (data.hasOwnProperty('externalSignaturePadTypeMetadata')) {
        obj['externalSignaturePadTypeMetadata'] = SettingsMetadata.constructFromObject(data['externalSignaturePadTypeMetadata']);
      }
      if (data.hasOwnProperty('faxOutEnabled')) {
        obj['faxOutEnabled'] = ApiClient.convertToType(data['faxOutEnabled'], 'String');
      }
      if (data.hasOwnProperty('faxOutEnabledMetadata')) {
        obj['faxOutEnabledMetadata'] = SettingsMetadata.constructFromObject(data['faxOutEnabledMetadata']);
      }
      if (data.hasOwnProperty('hideAccountAddressInCoC')) {
        obj['hideAccountAddressInCoC'] = ApiClient.convertToType(data['hideAccountAddressInCoC'], 'String');
      }
      if (data.hasOwnProperty('hideAccountAddressInCoCMetadata')) {
        obj['hideAccountAddressInCoCMetadata'] = SettingsMetadata.constructFromObject(data['hideAccountAddressInCoCMetadata']);
      }
      if (data.hasOwnProperty('hidePricing')) {
        obj['hidePricing'] = ApiClient.convertToType(data['hidePricing'], 'String');
      }
      if (data.hasOwnProperty('hidePricingMetadata')) {
        obj['hidePricingMetadata'] = SettingsMetadata.constructFromObject(data['hidePricingMetadata']);
      }
      if (data.hasOwnProperty('idCheckConfigurations')) {
        obj['idCheckConfigurations'] = ApiClient.convertToType(data['idCheckConfigurations'], [IdCheckConfiguration]);
      }
      if (data.hasOwnProperty('idCheckExpire')) {
        obj['idCheckExpire'] = ApiClient.convertToType(data['idCheckExpire'], 'String');
      }
      if (data.hasOwnProperty('idCheckExpireDays')) {
        obj['idCheckExpireDays'] = ApiClient.convertToType(data['idCheckExpireDays'], 'String');
      }
      if (data.hasOwnProperty('idCheckExpireDaysMetadata')) {
        obj['idCheckExpireDaysMetadata'] = SettingsMetadata.constructFromObject(data['idCheckExpireDaysMetadata']);
      }
      if (data.hasOwnProperty('idCheckExpireMetadata')) {
        obj['idCheckExpireMetadata'] = SettingsMetadata.constructFromObject(data['idCheckExpireMetadata']);
      }
      if (data.hasOwnProperty('idCheckExpireMinutes')) {
        obj['idCheckExpireMinutes'] = ApiClient.convertToType(data['idCheckExpireMinutes'], 'String');
      }
      if (data.hasOwnProperty('idCheckExpireMinutesMetadata')) {
        obj['idCheckExpireMinutesMetadata'] = SettingsMetadata.constructFromObject(data['idCheckExpireMinutesMetadata']);
      }
      if (data.hasOwnProperty('idCheckRequired')) {
        obj['idCheckRequired'] = ApiClient.convertToType(data['idCheckRequired'], 'String');
      }
      if (data.hasOwnProperty('idCheckRequiredMetadata')) {
        obj['idCheckRequiredMetadata'] = SettingsMetadata.constructFromObject(data['idCheckRequiredMetadata']);
      }
      if (data.hasOwnProperty('identityVerification')) {
        obj['identityVerification'] = ApiClient.convertToType(data['identityVerification'], [AccountIdentityVerificationWorkflow]);
      }
      if (data.hasOwnProperty('identityVerificationMetadata')) {
        obj['identityVerificationMetadata'] = SettingsMetadata.constructFromObject(data['identityVerificationMetadata']);
      }
      if (data.hasOwnProperty('ignoreErrorIfAnchorTabNotFound')) {
        obj['ignoreErrorIfAnchorTabNotFound'] = ApiClient.convertToType(data['ignoreErrorIfAnchorTabNotFound'], 'String');
      }
      if (data.hasOwnProperty('ignoreErrorIfAnchorTabNotFoundMetadataEnabled')) {
        obj['ignoreErrorIfAnchorTabNotFoundMetadataEnabled'] = SettingsMetadata.constructFromObject(data['ignoreErrorIfAnchorTabNotFoundMetadataEnabled']);
      }
      if (data.hasOwnProperty('inPersonIDCheckQuestion')) {
        obj['inPersonIDCheckQuestion'] = ApiClient.convertToType(data['inPersonIDCheckQuestion'], 'String');
      }
      if (data.hasOwnProperty('inPersonIDCheckQuestionMetadata')) {
        obj['inPersonIDCheckQuestionMetadata'] = SettingsMetadata.constructFromObject(data['inPersonIDCheckQuestionMetadata']);
      }
      if (data.hasOwnProperty('inPersonSigningEnabled')) {
        obj['inPersonSigningEnabled'] = ApiClient.convertToType(data['inPersonSigningEnabled'], 'String');
      }
      if (data.hasOwnProperty('inPersonSigningEnabledMetadata')) {
        obj['inPersonSigningEnabledMetadata'] = SettingsMetadata.constructFromObject(data['inPersonSigningEnabledMetadata']);
      }
      if (data.hasOwnProperty('inSessionEnabled')) {
        obj['inSessionEnabled'] = ApiClient.convertToType(data['inSessionEnabled'], 'String');
      }
      if (data.hasOwnProperty('inSessionEnabledMetadata')) {
        obj['inSessionEnabledMetadata'] = SettingsMetadata.constructFromObject(data['inSessionEnabledMetadata']);
      }
      if (data.hasOwnProperty('inSessionSuppressEmails')) {
        obj['inSessionSuppressEmails'] = ApiClient.convertToType(data['inSessionSuppressEmails'], 'String');
      }
      if (data.hasOwnProperty('inSessionSuppressEmailsMetadata')) {
        obj['inSessionSuppressEmailsMetadata'] = SettingsMetadata.constructFromObject(data['inSessionSuppressEmailsMetadata']);
      }
      if (data.hasOwnProperty('maximumSigningGroups')) {
        obj['maximumSigningGroups'] = ApiClient.convertToType(data['maximumSigningGroups'], 'String');
      }
      if (data.hasOwnProperty('maximumSigningGroupsMetadata')) {
        obj['maximumSigningGroupsMetadata'] = SettingsMetadata.constructFromObject(data['maximumSigningGroupsMetadata']);
      }
      if (data.hasOwnProperty('maximumUsersPerSigningGroup')) {
        obj['maximumUsersPerSigningGroup'] = ApiClient.convertToType(data['maximumUsersPerSigningGroup'], 'String');
      }
      if (data.hasOwnProperty('maximumUsersPerSigningGroupMetadata')) {
        obj['maximumUsersPerSigningGroupMetadata'] = SettingsMetadata.constructFromObject(data['maximumUsersPerSigningGroupMetadata']);
      }
      if (data.hasOwnProperty('maxNumberOfCustomStamps')) {
        obj['maxNumberOfCustomStamps'] = ApiClient.convertToType(data['maxNumberOfCustomStamps'], 'String');
      }
      if (data.hasOwnProperty('mobileSessionTimeout')) {
        obj['mobileSessionTimeout'] = ApiClient.convertToType(data['mobileSessionTimeout'], 'String');
      }
      if (data.hasOwnProperty('mobileSessionTimeoutMetadata')) {
        obj['mobileSessionTimeoutMetadata'] = SettingsMetadata.constructFromObject(data['mobileSessionTimeoutMetadata']);
      }
      if (data.hasOwnProperty('numberOfActiveCustomStamps')) {
        obj['numberOfActiveCustomStamps'] = ApiClient.convertToType(data['numberOfActiveCustomStamps'], 'String');
      }
      if (data.hasOwnProperty('optInMobileSigningV02')) {
        obj['optInMobileSigningV02'] = ApiClient.convertToType(data['optInMobileSigningV02'], 'String');
      }
      if (data.hasOwnProperty('optInMobileSigningV02Metadata')) {
        obj['optInMobileSigningV02Metadata'] = SettingsMetadata.constructFromObject(data['optInMobileSigningV02Metadata']);
      }
      if (data.hasOwnProperty('optOutAutoNavTextAndTabColorUpdates')) {
        obj['optOutAutoNavTextAndTabColorUpdates'] = ApiClient.convertToType(data['optOutAutoNavTextAndTabColorUpdates'], 'String');
      }
      if (data.hasOwnProperty('optOutAutoNavTextAndTabColorUpdatesMetadata')) {
        obj['optOutAutoNavTextAndTabColorUpdatesMetadata'] = SettingsMetadata.constructFromObject(data['optOutAutoNavTextAndTabColorUpdatesMetadata']);
      }
      if (data.hasOwnProperty('optOutNewPlatformSeal')) {
        obj['optOutNewPlatformSeal'] = ApiClient.convertToType(data['optOutNewPlatformSeal'], 'String');
      }
      if (data.hasOwnProperty('optOutNewPlatformSealPlatformMetadata')) {
        obj['optOutNewPlatformSealPlatformMetadata'] = SettingsMetadata.constructFromObject(data['optOutNewPlatformSealPlatformMetadata']);
      }
      if (data.hasOwnProperty('phoneAuthRecipientMayProvidePhoneNumber')) {
        obj['phoneAuthRecipientMayProvidePhoneNumber'] = ApiClient.convertToType(data['phoneAuthRecipientMayProvidePhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('phoneAuthRecipientMayProvidePhoneNumberMetadata')) {
        obj['phoneAuthRecipientMayProvidePhoneNumberMetadata'] = SettingsMetadata.constructFromObject(data['phoneAuthRecipientMayProvidePhoneNumberMetadata']);
      }
      if (data.hasOwnProperty('pkiSignDownloadedPDFDocs')) {
        obj['pkiSignDownloadedPDFDocs'] = ApiClient.convertToType(data['pkiSignDownloadedPDFDocs'], 'String');
      }
      if (data.hasOwnProperty('pkiSignDownloadedPDFDocsMetadata')) {
        obj['pkiSignDownloadedPDFDocsMetadata'] = SettingsMetadata.constructFromObject(data['pkiSignDownloadedPDFDocsMetadata']);
      }
      if (data.hasOwnProperty('recipientsCanSignOffline')) {
        obj['recipientsCanSignOffline'] = ApiClient.convertToType(data['recipientsCanSignOffline'], 'String');
      }
      if (data.hasOwnProperty('recipientsCanSignOfflineMetadata')) {
        obj['recipientsCanSignOfflineMetadata'] = SettingsMetadata.constructFromObject(data['recipientsCanSignOfflineMetadata']);
      }
      if (data.hasOwnProperty('recipientSigningAutoNavigationControl')) {
        obj['recipientSigningAutoNavigationControl'] = ApiClient.convertToType(data['recipientSigningAutoNavigationControl'], 'String');
      }
      if (data.hasOwnProperty('recipientSigningAutoNavigationControlMetadata')) {
        obj['recipientSigningAutoNavigationControlMetadata'] = SettingsMetadata.constructFromObject(data['recipientSigningAutoNavigationControlMetadata']);
      }
      if (data.hasOwnProperty('require21CFRpt11Compliance')) {
        obj['require21CFRpt11Compliance'] = ApiClient.convertToType(data['require21CFRpt11Compliance'], 'String');
      }
      if (data.hasOwnProperty('require21CFRpt11ComplianceMetadata')) {
        obj['require21CFRpt11ComplianceMetadata'] = SettingsMetadata.constructFromObject(data['require21CFRpt11ComplianceMetadata']);
      }
      if (data.hasOwnProperty('requireDeclineReason')) {
        obj['requireDeclineReason'] = ApiClient.convertToType(data['requireDeclineReason'], 'String');
      }
      if (data.hasOwnProperty('requireDeclineReasonMetadata')) {
        obj['requireDeclineReasonMetadata'] = SettingsMetadata.constructFromObject(data['requireDeclineReasonMetadata']);
      }
      if (data.hasOwnProperty('requireExternalUserManagement')) {
        obj['requireExternalUserManagement'] = ApiClient.convertToType(data['requireExternalUserManagement'], 'String');
      }
      if (data.hasOwnProperty('requireExternalUserManagementMetadata')) {
        obj['requireExternalUserManagementMetadata'] = SettingsMetadata.constructFromObject(data['requireExternalUserManagementMetadata']);
      }
      if (data.hasOwnProperty('requireSignerCertificateType')) {
        obj['requireSignerCertificateType'] = ApiClient.convertToType(data['requireSignerCertificateType'], 'String');
      }
      if (data.hasOwnProperty('requireSignerCertificateTypeMetadata')) {
        obj['requireSignerCertificateTypeMetadata'] = SettingsMetadata.constructFromObject(data['requireSignerCertificateTypeMetadata']);
      }
      if (data.hasOwnProperty('rsaVeridAccountName')) {
        obj['rsaVeridAccountName'] = ApiClient.convertToType(data['rsaVeridAccountName'], 'String');
      }
      if (data.hasOwnProperty('rsaVeridPassword')) {
        obj['rsaVeridPassword'] = ApiClient.convertToType(data['rsaVeridPassword'], 'String');
      }
      if (data.hasOwnProperty('rsaVeridRuleset')) {
        obj['rsaVeridRuleset'] = ApiClient.convertToType(data['rsaVeridRuleset'], 'String');
      }
      if (data.hasOwnProperty('rsaVeridUserId')) {
        obj['rsaVeridUserId'] = ApiClient.convertToType(data['rsaVeridUserId'], 'String');
      }
      if (data.hasOwnProperty('selfSignedRecipientEmailDocument')) {
        obj['selfSignedRecipientEmailDocument'] = ApiClient.convertToType(data['selfSignedRecipientEmailDocument'], 'String');
      }
      if (data.hasOwnProperty('selfSignedRecipientEmailDocumentMetadata')) {
        obj['selfSignedRecipientEmailDocumentMetadata'] = SettingsMetadata.constructFromObject(data['selfSignedRecipientEmailDocumentMetadata']);
      }
      if (data.hasOwnProperty('selfSignedRecipientEmailDocumentUserOverride')) {
        obj['selfSignedRecipientEmailDocumentUserOverride'] = ApiClient.convertToType(data['selfSignedRecipientEmailDocumentUserOverride'], 'String');
      }
      if (data.hasOwnProperty('selfSignedRecipientEmailDocumentUserOverrideMetadata')) {
        obj['selfSignedRecipientEmailDocumentUserOverrideMetadata'] = SettingsMetadata.constructFromObject(data['selfSignedRecipientEmailDocumentUserOverrideMetadata']);
      }
      if (data.hasOwnProperty('senderCanSignInEachLocation')) {
        obj['senderCanSignInEachLocation'] = ApiClient.convertToType(data['senderCanSignInEachLocation'], 'String');
      }
      if (data.hasOwnProperty('senderCanSignInEachLocationMetadata')) {
        obj['senderCanSignInEachLocationMetadata'] = SettingsMetadata.constructFromObject(data['senderCanSignInEachLocationMetadata']);
      }
      if (data.hasOwnProperty('senderMustAuthenticateSigning')) {
        obj['senderMustAuthenticateSigning'] = ApiClient.convertToType(data['senderMustAuthenticateSigning'], 'String');
      }
      if (data.hasOwnProperty('senderMustAuthenticateSigningMetadata')) {
        obj['senderMustAuthenticateSigningMetadata'] = SettingsMetadata.constructFromObject(data['senderMustAuthenticateSigningMetadata']);
      }
      if (data.hasOwnProperty('sendingTagsFontColor')) {
        obj['sendingTagsFontColor'] = ApiClient.convertToType(data['sendingTagsFontColor'], 'String');
      }
      if (data.hasOwnProperty('sendingTagsFontColorMetadata')) {
        obj['sendingTagsFontColorMetadata'] = SettingsMetadata.constructFromObject(data['sendingTagsFontColorMetadata']);
      }
      if (data.hasOwnProperty('sendingTagsFontName')) {
        obj['sendingTagsFontName'] = ApiClient.convertToType(data['sendingTagsFontName'], 'String');
      }
      if (data.hasOwnProperty('sendingTagsFontNameMetadata')) {
        obj['sendingTagsFontNameMetadata'] = SettingsMetadata.constructFromObject(data['sendingTagsFontNameMetadata']);
      }
      if (data.hasOwnProperty('sendingTagsFontSize')) {
        obj['sendingTagsFontSize'] = ApiClient.convertToType(data['sendingTagsFontSize'], 'String');
      }
      if (data.hasOwnProperty('sendingTagsFontSizeMetadata')) {
        obj['sendingTagsFontSizeMetadata'] = SettingsMetadata.constructFromObject(data['sendingTagsFontSizeMetadata']);
      }
      if (data.hasOwnProperty('sendToCertifiedDeliveryEnabled')) {
        obj['sendToCertifiedDeliveryEnabled'] = ApiClient.convertToType(data['sendToCertifiedDeliveryEnabled'], 'String');
      }
      if (data.hasOwnProperty('sendToCertifiedDeliveryEnabledMetadata')) {
        obj['sendToCertifiedDeliveryEnabledMetadata'] = SettingsMetadata.constructFromObject(data['sendToCertifiedDeliveryEnabledMetadata']);
      }
      if (data.hasOwnProperty('sessionTimeout')) {
        obj['sessionTimeout'] = ApiClient.convertToType(data['sessionTimeout'], 'String');
      }
      if (data.hasOwnProperty('sessionTimeoutMetadata')) {
        obj['sessionTimeoutMetadata'] = SettingsMetadata.constructFromObject(data['sessionTimeoutMetadata']);
      }
      if (data.hasOwnProperty('setRecipEmailLang')) {
        obj['setRecipEmailLang'] = ApiClient.convertToType(data['setRecipEmailLang'], 'String');
      }
      if (data.hasOwnProperty('setRecipEmailLangMetadata')) {
        obj['setRecipEmailLangMetadata'] = SettingsMetadata.constructFromObject(data['setRecipEmailLangMetadata']);
      }
      if (data.hasOwnProperty('setRecipSignLang')) {
        obj['setRecipSignLang'] = ApiClient.convertToType(data['setRecipSignLang'], 'String');
      }
      if (data.hasOwnProperty('setRecipSignLangMetadata')) {
        obj['setRecipSignLangMetadata'] = SettingsMetadata.constructFromObject(data['setRecipSignLangMetadata']);
      }
      if (data.hasOwnProperty('sharedTemplateFolders')) {
        obj['sharedTemplateFolders'] = ApiClient.convertToType(data['sharedTemplateFolders'], 'String');
      }
      if (data.hasOwnProperty('sharedTemplateFoldersMetadata')) {
        obj['sharedTemplateFoldersMetadata'] = SettingsMetadata.constructFromObject(data['sharedTemplateFoldersMetadata']);
      }
      if (data.hasOwnProperty('showCompleteDialogInEmbeddedSession')) {
        obj['showCompleteDialogInEmbeddedSession'] = ApiClient.convertToType(data['showCompleteDialogInEmbeddedSession'], 'String');
      }
      if (data.hasOwnProperty('showCompleteDialogInEmbeddedSessionMetadata')) {
        obj['showCompleteDialogInEmbeddedSessionMetadata'] = SettingsMetadata.constructFromObject(data['showCompleteDialogInEmbeddedSessionMetadata']);
      }
      if (data.hasOwnProperty('showInitialConditionalFields')) {
        obj['showInitialConditionalFields'] = ApiClient.convertToType(data['showInitialConditionalFields'], 'String');
      }
      if (data.hasOwnProperty('showInitialConditionalFieldsMetadata')) {
        obj['showInitialConditionalFieldsMetadata'] = SettingsMetadata.constructFromObject(data['showInitialConditionalFieldsMetadata']);
      }
      if (data.hasOwnProperty('showLocalizedWatermarks')) {
        obj['showLocalizedWatermarks'] = ApiClient.convertToType(data['showLocalizedWatermarks'], 'String');
      }
      if (data.hasOwnProperty('showLocalizedWatermarksMetadata')) {
        obj['showLocalizedWatermarksMetadata'] = SettingsMetadata.constructFromObject(data['showLocalizedWatermarksMetadata']);
      }
      if (data.hasOwnProperty('showTutorials')) {
        obj['showTutorials'] = ApiClient.convertToType(data['showTutorials'], 'String');
      }
      if (data.hasOwnProperty('showTutorialsMetadata')) {
        obj['showTutorialsMetadata'] = SettingsMetadata.constructFromObject(data['showTutorialsMetadata']);
      }
      if (data.hasOwnProperty('signatureProviders')) {
        obj['signatureProviders'] = ApiClient.convertToType(data['signatureProviders'], ['String']);
      }
      if (data.hasOwnProperty('signatureProvidersMetadata')) {
        obj['signatureProvidersMetadata'] = SettingsMetadata.constructFromObject(data['signatureProvidersMetadata']);
      }
      if (data.hasOwnProperty('signDateFormat')) {
        obj['signDateFormat'] = ApiClient.convertToType(data['signDateFormat'], 'String');
      }
      if (data.hasOwnProperty('signDateFormatMetadata')) {
        obj['signDateFormatMetadata'] = SettingsMetadata.constructFromObject(data['signDateFormatMetadata']);
      }
      if (data.hasOwnProperty('signerAttachCertificateToEnvelopePDF')) {
        obj['signerAttachCertificateToEnvelopePDF'] = ApiClient.convertToType(data['signerAttachCertificateToEnvelopePDF'], 'String');
      }
      if (data.hasOwnProperty('signerAttachCertificateToEnvelopePDFMetadata')) {
        obj['signerAttachCertificateToEnvelopePDFMetadata'] = SettingsMetadata.constructFromObject(data['signerAttachCertificateToEnvelopePDFMetadata']);
      }
      if (data.hasOwnProperty('signerAttachConcat')) {
        obj['signerAttachConcat'] = ApiClient.convertToType(data['signerAttachConcat'], 'String');
      }
      if (data.hasOwnProperty('signerAttachConcatMetadata')) {
        obj['signerAttachConcatMetadata'] = SettingsMetadata.constructFromObject(data['signerAttachConcatMetadata']);
      }
      if (data.hasOwnProperty('signerCanCreateAccount')) {
        obj['signerCanCreateAccount'] = ApiClient.convertToType(data['signerCanCreateAccount'], 'String');
      }
      if (data.hasOwnProperty('signerCanCreateAccountMetadata')) {
        obj['signerCanCreateAccountMetadata'] = SettingsMetadata.constructFromObject(data['signerCanCreateAccountMetadata']);
      }
      if (data.hasOwnProperty('signerCanSignOnMobile')) {
        obj['signerCanSignOnMobile'] = ApiClient.convertToType(data['signerCanSignOnMobile'], 'String');
      }
      if (data.hasOwnProperty('signerCanSignOnMobileMetadata')) {
        obj['signerCanSignOnMobileMetadata'] = SettingsMetadata.constructFromObject(data['signerCanSignOnMobileMetadata']);
      }
      if (data.hasOwnProperty('signerInSessionUseEnvelopeCompleteEmail')) {
        obj['signerInSessionUseEnvelopeCompleteEmail'] = ApiClient.convertToType(data['signerInSessionUseEnvelopeCompleteEmail'], 'String');
      }
      if (data.hasOwnProperty('signerInSessionUseEnvelopeCompleteEmailMetadata')) {
        obj['signerInSessionUseEnvelopeCompleteEmailMetadata'] = SettingsMetadata.constructFromObject(data['signerInSessionUseEnvelopeCompleteEmailMetadata']);
      }
      if (data.hasOwnProperty('signerLoginRequirements')) {
        obj['signerLoginRequirements'] = ApiClient.convertToType(data['signerLoginRequirements'], 'String');
      }
      if (data.hasOwnProperty('signerLoginRequirementsMetadata')) {
        obj['signerLoginRequirementsMetadata'] = SettingsMetadata.constructFromObject(data['signerLoginRequirementsMetadata']);
      }
      if (data.hasOwnProperty('signerMustHaveAccount')) {
        obj['signerMustHaveAccount'] = ApiClient.convertToType(data['signerMustHaveAccount'], 'String');
      }
      if (data.hasOwnProperty('signerMustHaveAccountMetadata')) {
        obj['signerMustHaveAccountMetadata'] = SettingsMetadata.constructFromObject(data['signerMustHaveAccountMetadata']);
      }
      if (data.hasOwnProperty('signerMustLoginToSign')) {
        obj['signerMustLoginToSign'] = ApiClient.convertToType(data['signerMustLoginToSign'], 'String');
      }
      if (data.hasOwnProperty('signerMustLoginToSignMetadata')) {
        obj['signerMustLoginToSignMetadata'] = SettingsMetadata.constructFromObject(data['signerMustLoginToSignMetadata']);
      }
      if (data.hasOwnProperty('signerShowSecureFieldInitialValues')) {
        obj['signerShowSecureFieldInitialValues'] = ApiClient.convertToType(data['signerShowSecureFieldInitialValues'], 'String');
      }
      if (data.hasOwnProperty('signerShowSecureFieldInitialValuesMetadata')) {
        obj['signerShowSecureFieldInitialValuesMetadata'] = SettingsMetadata.constructFromObject(data['signerShowSecureFieldInitialValuesMetadata']);
      }
      if (data.hasOwnProperty('signingSessionTimeout')) {
        obj['signingSessionTimeout'] = ApiClient.convertToType(data['signingSessionTimeout'], 'String');
      }
      if (data.hasOwnProperty('signingSessionTimeoutMetadata')) {
        obj['signingSessionTimeoutMetadata'] = SettingsMetadata.constructFromObject(data['signingSessionTimeoutMetadata']);
      }
      if (data.hasOwnProperty('signingUiVersion')) {
        obj['signingUiVersion'] = ApiClient.convertToType(data['signingUiVersion'], 'String');
      }
      if (data.hasOwnProperty('signingUiVersionMetadata')) {
        obj['signingUiVersionMetadata'] = SettingsMetadata.constructFromObject(data['signingUiVersionMetadata']);
      }
      if (data.hasOwnProperty('signTimeFormat')) {
        obj['signTimeFormat'] = ApiClient.convertToType(data['signTimeFormat'], 'String');
      }
      if (data.hasOwnProperty('signTimeFormatMetadata')) {
        obj['signTimeFormatMetadata'] = SettingsMetadata.constructFromObject(data['signTimeFormatMetadata']);
      }
      if (data.hasOwnProperty('signTimeShowAmPm')) {
        obj['signTimeShowAmPm'] = ApiClient.convertToType(data['signTimeShowAmPm'], 'String');
      }
      if (data.hasOwnProperty('signTimeShowAmPmMetadata')) {
        obj['signTimeShowAmPmMetadata'] = SettingsMetadata.constructFromObject(data['signTimeShowAmPmMetadata']);
      }
      if (data.hasOwnProperty('simplifiedSendingEnabled')) {
        obj['simplifiedSendingEnabled'] = ApiClient.convertToType(data['simplifiedSendingEnabled'], 'String');
      }
      if (data.hasOwnProperty('simplifiedSendingEnabledMetadata')) {
        obj['simplifiedSendingEnabledMetadata'] = SettingsMetadata.constructFromObject(data['simplifiedSendingEnabledMetadata']);
      }
      if (data.hasOwnProperty('singleSignOnEnabled')) {
        obj['singleSignOnEnabled'] = ApiClient.convertToType(data['singleSignOnEnabled'], 'String');
      }
      if (data.hasOwnProperty('singleSignOnEnabledMetadata')) {
        obj['singleSignOnEnabledMetadata'] = SettingsMetadata.constructFromObject(data['singleSignOnEnabledMetadata']);
      }
      if (data.hasOwnProperty('skipAuthCompletedEnvelopes')) {
        obj['skipAuthCompletedEnvelopes'] = ApiClient.convertToType(data['skipAuthCompletedEnvelopes'], 'String');
      }
      if (data.hasOwnProperty('skipAuthCompletedEnvelopesMetadata')) {
        obj['skipAuthCompletedEnvelopesMetadata'] = SettingsMetadata.constructFromObject(data['skipAuthCompletedEnvelopesMetadata']);
      }
      if (data.hasOwnProperty('socialIdRecipAuth')) {
        obj['socialIdRecipAuth'] = ApiClient.convertToType(data['socialIdRecipAuth'], 'String');
      }
      if (data.hasOwnProperty('socialIdRecipAuthMetadata')) {
        obj['socialIdRecipAuthMetadata'] = SettingsMetadata.constructFromObject(data['socialIdRecipAuthMetadata']);
      }
      if (data.hasOwnProperty('specifyDocumentVisibility')) {
        obj['specifyDocumentVisibility'] = ApiClient.convertToType(data['specifyDocumentVisibility'], 'String');
      }
      if (data.hasOwnProperty('specifyDocumentVisibilityMetadata')) {
        obj['specifyDocumentVisibilityMetadata'] = SettingsMetadata.constructFromObject(data['specifyDocumentVisibilityMetadata']);
      }
      if (data.hasOwnProperty('startInAdvancedCorrect')) {
        obj['startInAdvancedCorrect'] = ApiClient.convertToType(data['startInAdvancedCorrect'], 'String');
      }
      if (data.hasOwnProperty('startInAdvancedCorrectMetadata')) {
        obj['startInAdvancedCorrectMetadata'] = SettingsMetadata.constructFromObject(data['startInAdvancedCorrectMetadata']);
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
      if (data.hasOwnProperty('suppressCertificateEnforcement')) {
        obj['suppressCertificateEnforcement'] = ApiClient.convertToType(data['suppressCertificateEnforcement'], 'String');
      }
      if (data.hasOwnProperty('suppressCertificateEnforcementMetadata')) {
        obj['suppressCertificateEnforcementMetadata'] = SettingsMetadata.constructFromObject(data['suppressCertificateEnforcementMetadata']);
      }
      if (data.hasOwnProperty('tabAccountSettings')) {
        obj['tabAccountSettings'] = TabAccountSettings.constructFromObject(data['tabAccountSettings']);
      }
      if (data.hasOwnProperty('timezoneOffsetAPI')) {
        obj['timezoneOffsetAPI'] = ApiClient.convertToType(data['timezoneOffsetAPI'], 'String');
      }
      if (data.hasOwnProperty('timezoneOffsetAPIMetadata')) {
        obj['timezoneOffsetAPIMetadata'] = SettingsMetadata.constructFromObject(data['timezoneOffsetAPIMetadata']);
      }
      if (data.hasOwnProperty('timezoneOffsetUI')) {
        obj['timezoneOffsetUI'] = ApiClient.convertToType(data['timezoneOffsetUI'], 'String');
      }
      if (data.hasOwnProperty('timezoneOffsetUIMetadata')) {
        obj['timezoneOffsetUIMetadata'] = SettingsMetadata.constructFromObject(data['timezoneOffsetUIMetadata']);
      }
      if (data.hasOwnProperty('universalSignatureOptIn')) {
        obj['universalSignatureOptIn'] = ApiClient.convertToType(data['universalSignatureOptIn'], 'String');
      }
      if (data.hasOwnProperty('useAccountLevelEmail')) {
        obj['useAccountLevelEmail'] = ApiClient.convertToType(data['useAccountLevelEmail'], 'String');
      }
      if (data.hasOwnProperty('useAccountLevelEmailMetadata')) {
        obj['useAccountLevelEmailMetadata'] = SettingsMetadata.constructFromObject(data['useAccountLevelEmailMetadata']);
      }
      if (data.hasOwnProperty('useConsumerDisclosure')) {
        obj['useConsumerDisclosure'] = ApiClient.convertToType(data['useConsumerDisclosure'], 'String');
      }
      if (data.hasOwnProperty('useConsumerDisclosureMetadata')) {
        obj['useConsumerDisclosureMetadata'] = SettingsMetadata.constructFromObject(data['useConsumerDisclosureMetadata']);
      }
      if (data.hasOwnProperty('useConsumerDisclosureWithinAccount')) {
        obj['useConsumerDisclosureWithinAccount'] = ApiClient.convertToType(data['useConsumerDisclosureWithinAccount'], 'String');
      }
      if (data.hasOwnProperty('useConsumerDisclosureWithinAccountMetadata')) {
        obj['useConsumerDisclosureWithinAccountMetadata'] = SettingsMetadata.constructFromObject(data['useConsumerDisclosureWithinAccountMetadata']);
      }
      if (data.hasOwnProperty('useDerivedKeys')) {
        obj['useDerivedKeys'] = ApiClient.convertToType(data['useDerivedKeys'], 'String');
      }
      if (data.hasOwnProperty('useDerivedKeysMetadata')) {
        obj['useDerivedKeysMetadata'] = SettingsMetadata.constructFromObject(data['useDerivedKeysMetadata']);
      }
      if (data.hasOwnProperty('useDocuSignExpressSignerCertificate')) {
        obj['useDocuSignExpressSignerCertificate'] = ApiClient.convertToType(data['useDocuSignExpressSignerCertificate'], 'String');
      }
      if (data.hasOwnProperty('useDocuSignExpressSignerCertificateMetadata')) {
        obj['useDocuSignExpressSignerCertificateMetadata'] = SettingsMetadata.constructFromObject(data['useDocuSignExpressSignerCertificateMetadata']);
      }
      if (data.hasOwnProperty('useNewBlobForPdf')) {
        obj['useNewBlobForPdf'] = ApiClient.convertToType(data['useNewBlobForPdf'], 'String');
      }
      if (data.hasOwnProperty('useNewBlobForPdfMetadata')) {
        obj['useNewBlobForPdfMetadata'] = SettingsMetadata.constructFromObject(data['useNewBlobForPdfMetadata']);
      }
      if (data.hasOwnProperty('useSAFESignerCertificates')) {
        obj['useSAFESignerCertificates'] = ApiClient.convertToType(data['useSAFESignerCertificates'], 'String');
      }
      if (data.hasOwnProperty('useSAFESignerCertificatesMetadata')) {
        obj['useSAFESignerCertificatesMetadata'] = SettingsMetadata.constructFromObject(data['useSAFESignerCertificatesMetadata']);
      }
      if (data.hasOwnProperty('usesAPI')) {
        obj['usesAPI'] = ApiClient.convertToType(data['usesAPI'], 'String');
      }
      if (data.hasOwnProperty('usesAPIMetadata')) {
        obj['usesAPIMetadata'] = SettingsMetadata.constructFromObject(data['usesAPIMetadata']);
      }
      if (data.hasOwnProperty('useSignatureProviderPlatform')) {
        obj['useSignatureProviderPlatform'] = ApiClient.convertToType(data['useSignatureProviderPlatform'], 'String');
      }
      if (data.hasOwnProperty('useSignatureProviderPlatformMetadata')) {
        obj['useSignatureProviderPlatformMetadata'] = SettingsMetadata.constructFromObject(data['useSignatureProviderPlatformMetadata']);
      }
      if (data.hasOwnProperty('validationsAllowed')) {
        obj['validationsAllowed'] = ApiClient.convertToType(data['validationsAllowed'], 'String');
      }
      if (data.hasOwnProperty('validationsAllowedMetadata')) {
        obj['validationsAllowedMetadata'] = SettingsMetadata.constructFromObject(data['validationsAllowedMetadata']);
      }
      if (data.hasOwnProperty('validationsBrand')) {
        obj['validationsBrand'] = ApiClient.convertToType(data['validationsBrand'], 'String');
      }
      if (data.hasOwnProperty('validationsBrandMetadata')) {
        obj['validationsBrandMetadata'] = SettingsMetadata.constructFromObject(data['validationsBrandMetadata']);
      }
      if (data.hasOwnProperty('validationsCadence')) {
        obj['validationsCadence'] = ApiClient.convertToType(data['validationsCadence'], 'String');
      }
      if (data.hasOwnProperty('validationsCadenceMetadata')) {
        obj['validationsCadenceMetadata'] = SettingsMetadata.constructFromObject(data['validationsCadenceMetadata']);
      }
      if (data.hasOwnProperty('validationsEnabled')) {
        obj['validationsEnabled'] = ApiClient.convertToType(data['validationsEnabled'], 'String');
      }
      if (data.hasOwnProperty('validationsEnabledMetadata')) {
        obj['validationsEnabledMetadata'] = SettingsMetadata.constructFromObject(data['validationsEnabledMetadata']);
      }
      if (data.hasOwnProperty('validationsReport')) {
        obj['validationsReport'] = ApiClient.convertToType(data['validationsReport'], 'String');
      }
      if (data.hasOwnProperty('validationsReportMetadata')) {
        obj['validationsReportMetadata'] = SettingsMetadata.constructFromObject(data['validationsReportMetadata']);
      }
      if (data.hasOwnProperty('waterMarkEnabled')) {
        obj['waterMarkEnabled'] = ApiClient.convertToType(data['waterMarkEnabled'], 'String');
      }
      if (data.hasOwnProperty('waterMarkEnabledMetadata')) {
        obj['waterMarkEnabledMetadata'] = SettingsMetadata.constructFromObject(data['waterMarkEnabledMetadata']);
      }
      if (data.hasOwnProperty('writeReminderToEnvelopeHistory')) {
        obj['writeReminderToEnvelopeHistory'] = ApiClient.convertToType(data['writeReminderToEnvelopeHistory'], 'String');
      }
      if (data.hasOwnProperty('writeReminderToEnvelopeHistoryMetadata')) {
        obj['writeReminderToEnvelopeHistoryMetadata'] = SettingsMetadata.constructFromObject(data['writeReminderToEnvelopeHistoryMetadata']);
      }
      if (data.hasOwnProperty('wurflMinAllowableScreenSize')) {
        obj['wurflMinAllowableScreenSize'] = ApiClient.convertToType(data['wurflMinAllowableScreenSize'], 'String');
      }
      if (data.hasOwnProperty('wurflMinAllowableScreenSizeMetadata')) {
        obj['wurflMinAllowableScreenSizeMetadata'] = SettingsMetadata.constructFromObject(data['wurflMinAllowableScreenSizeMetadata']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccessCodeFormat} accessCodeFormat
   */
  exports.prototype['accessCodeFormat'] = undefined;
  /**
   * 
   * @member {String} accountDateTimeFormat
   */
  exports.prototype['accountDateTimeFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} accountDateTimeFormatMetadata
   */
  exports.prototype['accountDateTimeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} accountNameMetadata
   */
  exports.prototype['accountNameMetadata'] = undefined;
  /**
   * @member {module:model/AccountNotification} accountNotification
   */
  exports.prototype['accountNotification'] = undefined;
  /**
   * 
   * @member {String} adoptSigConfig
   */
  exports.prototype['adoptSigConfig'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} adoptSigConfigMetadata
   */
  exports.prototype['adoptSigConfigMetadata'] = undefined;
  /**
   * 
   * @member {String} advancedCorrect
   */
  exports.prototype['advancedCorrect'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} advancedCorrectMetadata
   */
  exports.prototype['advancedCorrectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAccessCodeFormat
   */
  exports.prototype['allowAccessCodeFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowAccessCodeFormatMetadata
   */
  exports.prototype['allowAccessCodeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAccountManagementGranular
   */
  exports.prototype['allowAccountManagementGranular'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowAccountManagementGranularMetadata
   */
  exports.prototype['allowAccountManagementGranularMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAccountMemberNameChange
   */
  exports.prototype['allowAccountMemberNameChange'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowAccountMemberNameChangeMetadata
   */
  exports.prototype['allowAccountMemberNameChangeMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAgentNameEmailEdit
   */
  exports.prototype['allowAgentNameEmailEdit'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowAgentNameEmailEditMetadata
   */
  exports.prototype['allowAgentNameEmailEditMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAutoNavSettings
   */
  exports.prototype['allowAutoNavSettings'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowAutoNavSettingsMetadata
   */
  exports.prototype['allowAutoNavSettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowBulkSend
   */
  exports.prototype['allowBulkSend'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowBulkSendMetadata
   */
  exports.prototype['allowBulkSendMetadata'] = undefined;
  /**
   * 
   * @member {String} allowCDWithdraw
   */
  exports.prototype['allowCDWithdraw'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowCDWithdrawMetadata
   */
  exports.prototype['allowCDWithdrawMetadata'] = undefined;
  /**
   * 
   * @member {String} allowConnectHttpListenerConfigs
   */
  exports.prototype['allowConnectHttpListenerConfigs'] = undefined;
  /**
   * 
   * @member {String} allowConnectSendFinishLater
   */
  exports.prototype['allowConnectSendFinishLater'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowConnectSendFinishLaterMetadata
   */
  exports.prototype['allowConnectSendFinishLaterMetadata'] = undefined;
  /**
   * 
   * @member {String} allowConsumerDisclosureOverride
   */
  exports.prototype['allowConsumerDisclosureOverride'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowConsumerDisclosureOverrideMetadata
   */
  exports.prototype['allowConsumerDisclosureOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDataDownload
   */
  exports.prototype['allowDataDownload'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowDataDownloadMetadata
   */
  exports.prototype['allowDataDownloadMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocumentDisclosures
   */
  exports.prototype['allowDocumentDisclosures'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowDocumentDisclosuresMetadata
   */
  exports.prototype['allowDocumentDisclosuresMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocumentsOnSignedEnvelopes
   */
  exports.prototype['allowDocumentsOnSignedEnvelopes'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowDocumentsOnSignedEnvelopesMetadata
   */
  exports.prototype['allowDocumentsOnSignedEnvelopesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocumentVisibility
   */
  exports.prototype['allowDocumentVisibility'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowDocumentVisibilityMetadata
   */
  exports.prototype['allowDocumentVisibilityMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEHankoStamps
   */
  exports.prototype['allowEHankoStamps'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEHankoStampsMetadata
   */
  exports.prototype['allowEHankoStampsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowENoteEOriginal
   */
  exports.prototype['allowENoteEOriginal'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowENoteEOriginalMetadata
   */
  exports.prototype['allowENoteEOriginalMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeCorrect
   */
  exports.prototype['allowEnvelopeCorrect'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEnvelopeCorrectMetadata
   */
  exports.prototype['allowEnvelopeCorrectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeCustodyTransfer
   */
  exports.prototype['allowEnvelopeCustodyTransfer'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEnvelopeCustodyTransferMetadata
   */
  exports.prototype['allowEnvelopeCustodyTransferMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeCustomFields
   */
  exports.prototype['allowEnvelopeCustomFields'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEnvelopeCustomFieldsMetadata
   */
  exports.prototype['allowEnvelopeCustomFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopePublishReporting
   */
  exports.prototype['allowEnvelopePublishReporting'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEnvelopePublishReportingMetadata
   */
  exports.prototype['allowEnvelopePublishReportingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeReporting
   */
  exports.prototype['allowEnvelopeReporting'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowEnvelopeReportingMetadata
   */
  exports.prototype['allowEnvelopeReportingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExpression
   */
  exports.prototype['allowExpression'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowExpressionMetadata
   */
  exports.prototype['allowExpressionMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExpressSignerCertificate
   */
  exports.prototype['allowExpressSignerCertificate'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowExpressSignerCertificateMetadata
   */
  exports.prototype['allowExpressSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExtendedSendingResourceFile
   */
  exports.prototype['allowExtendedSendingResourceFile'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowExtendedSendingResourceFileMetadata
   */
  exports.prototype['allowExtendedSendingResourceFileMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExternalSignaturePad
   */
  exports.prototype['allowExternalSignaturePad'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowExternalSignaturePadMetadata
   */
  exports.prototype['allowExternalSignaturePadMetadata'] = undefined;
  /**
   * 
   * @member {String} allowInPerson
   */
  exports.prototype['allowInPerson'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowInPersonMetadata
   */
  exports.prototype['allowInPersonMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManagedStamps
   */
  exports.prototype['allowManagedStamps'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowManagedStampsMetadata
   */
  exports.prototype['allowManagedStampsMetadata'] = undefined;
  /**
   * When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
   * @member {String} allowMarkup
   */
  exports.prototype['allowMarkup'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowMarkupMetadata
   */
  exports.prototype['allowMarkupMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMemberTimeZone
   */
  exports.prototype['allowMemberTimeZone'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowMemberTimeZoneMetadata
   */
  exports.prototype['allowMemberTimeZoneMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMergeFields
   */
  exports.prototype['allowMergeFields'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowMergeFieldsMetadata
   */
  exports.prototype['allowMergeFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMultipleBrandProfiles
   */
  exports.prototype['allowMultipleBrandProfiles'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowMultipleBrandProfilesMetadata
   */
  exports.prototype['allowMultipleBrandProfilesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMultipleSignerAttachments
   */
  exports.prototype['allowMultipleSignerAttachments'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowMultipleSignerAttachmentsMetadata
   */
  exports.prototype['allowMultipleSignerAttachmentsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowNonUSPhoneAuth
   */
  exports.prototype['allowNonUSPhoneAuth'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowNonUSPhoneAuthMetadata
   */
  exports.prototype['allowNonUSPhoneAuthMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOfflineSigning
   */
  exports.prototype['allowOfflineSigning'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowOfflineSigningMetadata
   */
  exports.prototype['allowOfflineSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOpenTrustSignerCertificate
   */
  exports.prototype['allowOpenTrustSignerCertificate'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowOpenTrustSignerCertificateMetadata
   */
  exports.prototype['allowOpenTrustSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOrganizations
   */
  exports.prototype['allowOrganizations'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowOrganizationsMetadata
   */
  exports.prototype['allowOrganizationsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPaymentProcessing
   */
  exports.prototype['allowPaymentProcessing'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowPaymentProcessingMetadata
   */
  exports.prototype['allowPaymentProcessingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPersonalSignerCertificate
   */
  exports.prototype['allowPersonalSignerCertificate'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowPersonalSignerCertificateMetadata
   */
  exports.prototype['allowPersonalSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPhoneAuthentication
   */
  exports.prototype['allowPhoneAuthentication'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowPhoneAuthenticationMetadata
   */
  exports.prototype['allowPhoneAuthenticationMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPhoneAuthOverride
   */
  exports.prototype['allowPhoneAuthOverride'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowPhoneAuthOverrideMetadata
   */
  exports.prototype['allowPhoneAuthOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPrivateSigningGroups
   */
  exports.prototype['allowPrivateSigningGroups'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowPrivateSigningGroupsMetadata
   */
  exports.prototype['allowPrivateSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowReminders
   */
  exports.prototype['allowReminders'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowRemindersMetadata
   */
  exports.prototype['allowRemindersMetadata'] = undefined;
  /**
   * 
   * @member {String} allowResourceFileBranding
   */
  exports.prototype['allowResourceFileBranding'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowResourceFileBrandingMetadata
   */
  exports.prototype['allowResourceFileBrandingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSafeBioPharmaSignerCertificate
   */
  exports.prototype['allowSafeBioPharmaSignerCertificate'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSafeBioPharmaSignerCertificateMetadata
   */
  exports.prototype['allowSafeBioPharmaSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSecurityAppliance
   */
  exports.prototype['allowSecurityAppliance'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSecurityApplianceMetadata
   */
  exports.prototype['allowSecurityApplianceMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSendToCertifiedDelivery
   */
  exports.prototype['allowSendToCertifiedDelivery'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSendToCertifiedDeliveryMetadata
   */
  exports.prototype['allowSendToCertifiedDeliveryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSendToIntermediary
   */
  exports.prototype['allowSendToIntermediary'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSendToIntermediaryMetadata
   */
  exports.prototype['allowSendToIntermediaryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowServerTemplates
   */
  exports.prototype['allowServerTemplates'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowServerTemplatesMetadata
   */
  exports.prototype['allowServerTemplatesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSharedTabs
   */
  exports.prototype['allowSharedTabs'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSharedTabsMetadata
   */
  exports.prototype['allowSharedTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignatureStamps
   */
  exports.prototype['allowSignatureStamps'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSignatureStampsMetadata
   */
  exports.prototype['allowSignatureStampsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignDocumentFromHomePage
   */
  exports.prototype['allowSignDocumentFromHomePage'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSignDocumentFromHomePageMetadata
   */
  exports.prototype['allowSignDocumentFromHomePageMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignerReassign
   */
  exports.prototype['allowSignerReassign'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSignerReassignMetadata
   */
  exports.prototype['allowSignerReassignMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignerReassignOverride
   */
  exports.prototype['allowSignerReassignOverride'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSignerReassignOverrideMetadata
   */
  exports.prototype['allowSignerReassignOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSigningExtensions
   */
  exports.prototype['allowSigningExtensions'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSigningExtensionsMetadata
   */
  exports.prototype['allowSigningExtensionsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSigningGroups
   */
  exports.prototype['allowSigningGroups'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSigningGroupsMetadata
   */
  exports.prototype['allowSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSigningRadioDeselect
   */
  exports.prototype['allowSigningRadioDeselect'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSigningRadioDeselectMetadata
   */
  exports.prototype['allowSigningRadioDeselectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignNow
   */
  exports.prototype['allowSignNow'] = undefined;
  /**
   * 
   * @member {String} allowSignNowMetadata
   */
  exports.prototype['allowSignNowMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSocialIdLogin
   */
  exports.prototype['allowSocialIdLogin'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSocialIdLoginMetadata
   */
  exports.prototype['allowSocialIdLoginMetadata'] = undefined;
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
   * @member {String} anchorPopulationScope
   */
  exports.prototype['anchorPopulationScope'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} anchorPopulationScopeMetadata
   */
  exports.prototype['anchorPopulationScopeMetadata'] = undefined;
  /**
   * 
   * @member {String} anchorTagVersionedPlacementEnabled
   */
  exports.prototype['anchorTagVersionedPlacementEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} anchorTagVersionedPlacementMetadataEnabled
   */
  exports.prototype['anchorTagVersionedPlacementMetadataEnabled'] = undefined;
  /**
   * 
   * @member {String} attachCompletedEnvelope
   */
  exports.prototype['attachCompletedEnvelope'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} attachCompletedEnvelopeMetadata
   */
  exports.prototype['attachCompletedEnvelopeMetadata'] = undefined;
  /**
   * 
   * @member {String} authenticationCheck
   */
  exports.prototype['authenticationCheck'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} authenticationCheckMetadata
   */
  exports.prototype['authenticationCheckMetadata'] = undefined;
  /**
   * 
   * @member {String} autoNavRule
   */
  exports.prototype['autoNavRule'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} autoNavRuleMetadata
   */
  exports.prototype['autoNavRuleMetadata'] = undefined;
  /**
   * 
   * @member {String} autoProvisionSignerAccount
   */
  exports.prototype['autoProvisionSignerAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} autoProvisionSignerAccountMetadata
   */
  exports.prototype['autoProvisionSignerAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} bccEmailArchive
   */
  exports.prototype['bccEmailArchive'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} bccEmailArchiveMetadata
   */
  exports.prototype['bccEmailArchiveMetadata'] = undefined;
  /**
   * 
   * @member {String} betaSwitchConfiguration
   */
  exports.prototype['betaSwitchConfiguration'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} betaSwitchConfigurationMetadata
   */
  exports.prototype['betaSwitchConfigurationMetadata'] = undefined;
  /**
   * @member {module:model/AddressInformation} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} billingAddressMetadata
   */
  exports.prototype['billingAddressMetadata'] = undefined;
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
   * @member {String} canSelfBrandSend
   */
  exports.prototype['canSelfBrandSend'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canSelfBrandSendMetadata
   */
  exports.prototype['canSelfBrandSendMetadata'] = undefined;
  /**
   * 
   * @member {String} canSelfBrandSign
   */
  exports.prototype['canSelfBrandSign'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} canSelfBrandSignMetadata
   */
  exports.prototype['canSelfBrandSignMetadata'] = undefined;
  /**
   * 
   * @member {String} captureVoiceRecording
   */
  exports.prototype['captureVoiceRecording'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} captureVoiceRecordingMetadata
   */
  exports.prototype['captureVoiceRecordingMetadata'] = undefined;
  /**
   * 
   * @member {String} cfrUseWideImage
   */
  exports.prototype['cfrUseWideImage'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} cfrUseWideImageMetadata
   */
  exports.prototype['cfrUseWideImageMetadata'] = undefined;
  /**
   * 
   * @member {String} chromeSignatureEnabled
   */
  exports.prototype['chromeSignatureEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} chromeSignatureEnabledMetadata
   */
  exports.prototype['chromeSignatureEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} commentEmailShowMessageText
   */
  exports.prototype['commentEmailShowMessageText'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} commentEmailShowMessageTextMetadata
   */
  exports.prototype['commentEmailShowMessageTextMetadata'] = undefined;
  /**
   * 
   * @member {String} commentsAllowEnvelopeOverride
   */
  exports.prototype['commentsAllowEnvelopeOverride'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} commentsAllowEnvelopeOverrideMetadata
   */
  exports.prototype['commentsAllowEnvelopeOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} conditionalFieldsEnabled
   */
  exports.prototype['conditionalFieldsEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} conditionalFieldsEnabledMetadata
   */
  exports.prototype['conditionalFieldsEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} consumerDisclosureFrequency
   */
  exports.prototype['consumerDisclosureFrequency'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} consumerDisclosureFrequencyMetadata
   */
  exports.prototype['consumerDisclosureFrequencyMetadata'] = undefined;
  /**
   * 
   * @member {String} convertPdfFields
   */
  exports.prototype['convertPdfFields'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} convertPdfFieldsMetadata
   */
  exports.prototype['convertPdfFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} dataPopulationScope
   */
  exports.prototype['dataPopulationScope'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} dataPopulationScopeMetadata
   */
  exports.prototype['dataPopulationScopeMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMobileApp
   */
  exports.prototype['disableMobileApp'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableMobileAppMetadata
   */
  exports.prototype['disableMobileAppMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMobilePushNotifications
   */
  exports.prototype['disableMobilePushNotifications'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableMobilePushNotificationsMetadata
   */
  exports.prototype['disableMobilePushNotificationsMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMobileSending
   */
  exports.prototype['disableMobileSending'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableMobileSendingMetadata
   */
  exports.prototype['disableMobileSendingMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMultipleSessions
   */
  exports.prototype['disableMultipleSessions'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableMultipleSessionsMetadata
   */
  exports.prototype['disableMultipleSessionsMetadata'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disablePurgeNotificationsForSenderMetadata
   */
  exports.prototype['disablePurgeNotificationsForSenderMetadata'] = undefined;
  /**
   * 
   * @member {String} disableSignerCertView
   */
  exports.prototype['disableSignerCertView'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableSignerCertViewMetadata
   */
  exports.prototype['disableSignerCertViewMetadata'] = undefined;
  /**
   * 
   * @member {String} disableSignerHistoryView
   */
  exports.prototype['disableSignerHistoryView'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableSignerHistoryViewMetadata
   */
  exports.prototype['disableSignerHistoryViewMetadata'] = undefined;
  /**
   * 
   * @member {String} disableStyleSignature
   */
  exports.prototype['disableStyleSignature'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableStyleSignatureMetadata
   */
  exports.prototype['disableStyleSignatureMetadata'] = undefined;
  /**
   * 
   * @member {String} disableUploadSignature
   */
  exports.prototype['disableUploadSignature'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableUploadSignatureMetadata
   */
  exports.prototype['disableUploadSignatureMetadata'] = undefined;
  /**
   * 
   * @member {String} disableUserSharing
   */
  exports.prototype['disableUserSharing'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} disableUserSharingMetadata
   */
  exports.prototype['disableUserSharingMetadata'] = undefined;
  /**
   * 
   * @member {String} displayBetaSwitch
   */
  exports.prototype['displayBetaSwitch'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} displayBetaSwitchMetadata
   */
  exports.prototype['displayBetaSwitchMetadata'] = undefined;
  /**
   * 
   * @member {String} documentConversionRestrictions
   */
  exports.prototype['documentConversionRestrictions'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} documentConversionRestrictionsMetadata
   */
  exports.prototype['documentConversionRestrictionsMetadata'] = undefined;
  /**
   * 
   * @member {String} documentRetention
   */
  exports.prototype['documentRetention'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} documentRetentionMetadata
   */
  exports.prototype['documentRetentionMetadata'] = undefined;
  /**
   * 
   * @member {String} documentRetentionPurgeTabs
   */
  exports.prototype['documentRetentionPurgeTabs'] = undefined;
  /**
   * 
   * @member {String} documentVisibility
   */
  exports.prototype['documentVisibility'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} documentVisibilityMetadata
   */
  exports.prototype['documentVisibilityMetadata'] = undefined;
  /**
   * 
   * @member {String} emailTemplateVersion
   */
  exports.prototype['emailTemplateVersion'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} emailTemplateVersionMetadata
   */
  exports.prototype['emailTemplateVersionMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAccessCodeGenerator
   */
  exports.prototype['enableAccessCodeGenerator'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableAccessCodeGeneratorMetadata
   */
  exports.prototype['enableAccessCodeGeneratorMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAdvancedPayments
   */
  exports.prototype['enableAdvancedPayments'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableAdvancedPaymentsMetadata
   */
  exports.prototype['enableAdvancedPaymentsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAdvancedPowerForms
   */
  exports.prototype['enableAdvancedPowerForms'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableAdvancedPowerFormsMetadata
   */
  exports.prototype['enableAdvancedPowerFormsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAutoNav
   */
  exports.prototype['enableAutoNav'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableAutoNavMetadata
   */
  exports.prototype['enableAutoNavMetadata'] = undefined;
  /**
   * 
   * @member {String} enableCalculatedFields
   */
  exports.prototype['enableCalculatedFields'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableCalculatedFieldsMetadata
   */
  exports.prototype['enableCalculatedFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableClickwraps
   */
  exports.prototype['enableClickwraps'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableClickwrapsMetadata
   */
  exports.prototype['enableClickwrapsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableCustomerSatisfactionMetricTracking
   */
  exports.prototype['enableCustomerSatisfactionMetricTracking'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableCustomerSatisfactionMetricTrackingMetadata
   */
  exports.prototype['enableCustomerSatisfactionMetricTrackingMetadata'] = undefined;
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
   * @member {String} enableEnvelopeStampingByAccountAdmin
   */
  exports.prototype['enableEnvelopeStampingByAccountAdmin'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableEnvelopeStampingByAccountAdminMetadata
   */
  exports.prototype['enableEnvelopeStampingByAccountAdminMetadata'] = undefined;
  /**
   * 
   * @member {String} enableEnvelopeStampingByDSAdmin
   */
  exports.prototype['enableEnvelopeStampingByDSAdmin'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableEnvelopeStampingByDSAdminMetadata
   */
  exports.prototype['enableEnvelopeStampingByDSAdminMetadata'] = undefined;
  /**
   * 
   * @member {String} enablePaymentProcessing
   */
  exports.prototype['enablePaymentProcessing'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enablePaymentProcessingMetadata
   */
  exports.prototype['enablePaymentProcessingMetadata'] = undefined;
  /**
   * 
   * @member {String} enablePowerForm
   */
  exports.prototype['enablePowerForm'] = undefined;
  /**
   * 
   * @member {String} enablePowerFormDirect
   */
  exports.prototype['enablePowerFormDirect'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enablePowerFormDirectMetadata
   */
  exports.prototype['enablePowerFormDirectMetadata'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enablePowerFormMetadata
   */
  exports.prototype['enablePowerFormMetadata'] = undefined;
  /**
   * 
   * @member {String} enableRecipientDomainValidation
   */
  exports.prototype['enableRecipientDomainValidation'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableRecipientDomainValidationMetadata
   */
  exports.prototype['enableRecipientDomainValidationMetadata'] = undefined;
  /**
   * 
   * @member {String} enableReportLinks
   */
  exports.prototype['enableReportLinks'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableReportLinksMetadata
   */
  exports.prototype['enableReportLinksMetadata'] = undefined;
  /**
   * 
   * @member {String} enableRequireSignOnPaper
   */
  exports.prototype['enableRequireSignOnPaper'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableRequireSignOnPaperMetadata
   */
  exports.prototype['enableRequireSignOnPaperMetadata'] = undefined;
  /**
   * 
   * @member {String} enableReservedDomain
   */
  exports.prototype['enableReservedDomain'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableReservedDomainMetadata
   */
  exports.prototype['enableReservedDomainMetadata'] = undefined;
  /**
   * 
   * @member {String} enableResponsiveSigning
   */
  exports.prototype['enableResponsiveSigning'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableResponsiveSigningMetadata
   */
  exports.prototype['enableResponsiveSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} enableScheduledRelease
   */
  exports.prototype['enableScheduledRelease'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableScheduledReleaseMetadata
   */
  exports.prototype['enableScheduledReleaseMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendingTagsFontSettings
   */
  exports.prototype['enableSendingTagsFontSettings'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSendingTagsFontSettingsMetadata
   */
  exports.prototype['enableSendingTagsFontSettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendToAgent
   */
  exports.prototype['enableSendToAgent'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSendToAgentMetadata
   */
  exports.prototype['enableSendToAgentMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendToIntermediary
   */
  exports.prototype['enableSendToIntermediary'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSendToIntermediaryMetadata
   */
  exports.prototype['enableSendToIntermediaryMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendToManage
   */
  exports.prototype['enableSendToManage'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSendToManageMetadata
   */
  exports.prototype['enableSendToManageMetadata'] = undefined;
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
   * @member {String} enableSigningExtensionComments
   */
  exports.prototype['enableSigningExtensionComments'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSigningExtensionCommentsMetadata
   */
  exports.prototype['enableSigningExtensionCommentsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSigningExtensionConversations
   */
  exports.prototype['enableSigningExtensionConversations'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSigningExtensionConversationsMetadata
   */
  exports.prototype['enableSigningExtensionConversationsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSigningOrderSettingsForAccount
   */
  exports.prototype['enableSigningOrderSettingsForAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSigningOrderSettingsForAccountMetadata
   */
  exports.prototype['enableSigningOrderSettingsForAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSignOnPaper
   */
  exports.prototype['enableSignOnPaper'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSignOnPaperMetadata
   */
  exports.prototype['enableSignOnPaperMetadata'] = undefined;
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
   * @member {String} enableSignWithNotary
   */
  exports.prototype['enableSignWithNotary'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSignWithNotaryMetadata
   */
  exports.prototype['enableSignWithNotaryMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSMSAuthentication
   */
  exports.prototype['enableSMSAuthentication'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSMSAuthenticationMetadata
   */
  exports.prototype['enableSMSAuthenticationMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSocialIdLogin
   */
  exports.prototype['enableSocialIdLogin'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSocialIdLoginMetadata
   */
  exports.prototype['enableSocialIdLoginMetadata'] = undefined;
  /**
   * 
   * @member {String} enableStrikeThrough
   */
  exports.prototype['enableStrikeThrough'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableStrikeThroughMetadata
   */
  exports.prototype['enableStrikeThroughMetadata'] = undefined;
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
   * @member {String} enableWitnessing
   */
  exports.prototype['enableWitnessing'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableWitnessingMetadata
   */
  exports.prototype['enableWitnessingMetadata'] = undefined;
  /**
   * 
   * @member {String} enforceTemplateNameUniqueness
   */
  exports.prototype['enforceTemplateNameUniqueness'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enforceTemplateNameUniquenessMetadata
   */
  exports.prototype['enforceTemplateNameUniquenessMetadata'] = undefined;
  /**
   * 
   * @member {String} envelopeIntegrationAllowed
   */
  exports.prototype['envelopeIntegrationAllowed'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} envelopeIntegrationAllowedMetadata
   */
  exports.prototype['envelopeIntegrationAllowedMetadata'] = undefined;
  /**
   * 
   * @member {String} envelopeIntegrationEnabled
   */
  exports.prototype['envelopeIntegrationEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} envelopeIntegrationEnabledMetadata
   */
  exports.prototype['envelopeIntegrationEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} envelopeStampingDefaultValue
   */
  exports.prototype['envelopeStampingDefaultValue'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} envelopeStampingDefaultValueMetadata
   */
  exports.prototype['envelopeStampingDefaultValueMetadata'] = undefined;
  /**
   * 
   * @member {String} expressSend
   */
  exports.prototype['expressSend'] = undefined;
  /**
   * 
   * @member {String} expressSendAllowTabs
   */
  exports.prototype['expressSendAllowTabs'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} expressSendAllowTabsMetadata
   */
  exports.prototype['expressSendAllowTabsMetadata'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} expressSendMetadata
   */
  exports.prototype['expressSendMetadata'] = undefined;
  /**
   * @member {module:model/ExternalDocumentSources} externalDocumentSources
   */
  exports.prototype['externalDocumentSources'] = undefined;
  /**
   * 
   * @member {String} externalSignaturePadType
   */
  exports.prototype['externalSignaturePadType'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} externalSignaturePadTypeMetadata
   */
  exports.prototype['externalSignaturePadTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} faxOutEnabled
   */
  exports.prototype['faxOutEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} faxOutEnabledMetadata
   */
  exports.prototype['faxOutEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} hideAccountAddressInCoC
   */
  exports.prototype['hideAccountAddressInCoC'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} hideAccountAddressInCoCMetadata
   */
  exports.prototype['hideAccountAddressInCoCMetadata'] = undefined;
  /**
   * 
   * @member {String} hidePricing
   */
  exports.prototype['hidePricing'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} hidePricingMetadata
   */
  exports.prototype['hidePricingMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/IdCheckConfiguration>} idCheckConfigurations
   */
  exports.prototype['idCheckConfigurations'] = undefined;
  /**
   * 
   * @member {String} idCheckExpire
   */
  exports.prototype['idCheckExpire'] = undefined;
  /**
   * 
   * @member {String} idCheckExpireDays
   */
  exports.prototype['idCheckExpireDays'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} idCheckExpireDaysMetadata
   */
  exports.prototype['idCheckExpireDaysMetadata'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} idCheckExpireMetadata
   */
  exports.prototype['idCheckExpireMetadata'] = undefined;
  /**
   * 
   * @member {String} idCheckExpireMinutes
   */
  exports.prototype['idCheckExpireMinutes'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} idCheckExpireMinutesMetadata
   */
  exports.prototype['idCheckExpireMinutesMetadata'] = undefined;
  /**
   * 
   * @member {String} idCheckRequired
   */
  exports.prototype['idCheckRequired'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} idCheckRequiredMetadata
   */
  exports.prototype['idCheckRequiredMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/AccountIdentityVerificationWorkflow>} identityVerification
   */
  exports.prototype['identityVerification'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} identityVerificationMetadata
   */
  exports.prototype['identityVerificationMetadata'] = undefined;
  /**
   * 
   * @member {String} ignoreErrorIfAnchorTabNotFound
   */
  exports.prototype['ignoreErrorIfAnchorTabNotFound'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} ignoreErrorIfAnchorTabNotFoundMetadataEnabled
   */
  exports.prototype['ignoreErrorIfAnchorTabNotFoundMetadataEnabled'] = undefined;
  /**
   * 
   * @member {String} inPersonIDCheckQuestion
   */
  exports.prototype['inPersonIDCheckQuestion'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} inPersonIDCheckQuestionMetadata
   */
  exports.prototype['inPersonIDCheckQuestionMetadata'] = undefined;
  /**
   * 
   * @member {String} inPersonSigningEnabled
   */
  exports.prototype['inPersonSigningEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} inPersonSigningEnabledMetadata
   */
  exports.prototype['inPersonSigningEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} inSessionEnabled
   */
  exports.prototype['inSessionEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} inSessionEnabledMetadata
   */
  exports.prototype['inSessionEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} inSessionSuppressEmails
   */
  exports.prototype['inSessionSuppressEmails'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} inSessionSuppressEmailsMetadata
   */
  exports.prototype['inSessionSuppressEmailsMetadata'] = undefined;
  /**
   * 
   * @member {String} maximumSigningGroups
   */
  exports.prototype['maximumSigningGroups'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} maximumSigningGroupsMetadata
   */
  exports.prototype['maximumSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} maximumUsersPerSigningGroup
   */
  exports.prototype['maximumUsersPerSigningGroup'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} maximumUsersPerSigningGroupMetadata
   */
  exports.prototype['maximumUsersPerSigningGroupMetadata'] = undefined;
  /**
   * 
   * @member {String} maxNumberOfCustomStamps
   */
  exports.prototype['maxNumberOfCustomStamps'] = undefined;
  /**
   * 
   * @member {String} mobileSessionTimeout
   */
  exports.prototype['mobileSessionTimeout'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} mobileSessionTimeoutMetadata
   */
  exports.prototype['mobileSessionTimeoutMetadata'] = undefined;
  /**
   * 
   * @member {String} numberOfActiveCustomStamps
   */
  exports.prototype['numberOfActiveCustomStamps'] = undefined;
  /**
   * 
   * @member {String} optInMobileSigningV02
   */
  exports.prototype['optInMobileSigningV02'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} optInMobileSigningV02Metadata
   */
  exports.prototype['optInMobileSigningV02Metadata'] = undefined;
  /**
   * 
   * @member {String} optOutAutoNavTextAndTabColorUpdates
   */
  exports.prototype['optOutAutoNavTextAndTabColorUpdates'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} optOutAutoNavTextAndTabColorUpdatesMetadata
   */
  exports.prototype['optOutAutoNavTextAndTabColorUpdatesMetadata'] = undefined;
  /**
   * 
   * @member {String} optOutNewPlatformSeal
   */
  exports.prototype['optOutNewPlatformSeal'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} optOutNewPlatformSealPlatformMetadata
   */
  exports.prototype['optOutNewPlatformSealPlatformMetadata'] = undefined;
  /**
   * 
   * @member {String} phoneAuthRecipientMayProvidePhoneNumber
   */
  exports.prototype['phoneAuthRecipientMayProvidePhoneNumber'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} phoneAuthRecipientMayProvidePhoneNumberMetadata
   */
  exports.prototype['phoneAuthRecipientMayProvidePhoneNumberMetadata'] = undefined;
  /**
   * 
   * @member {String} pkiSignDownloadedPDFDocs
   */
  exports.prototype['pkiSignDownloadedPDFDocs'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} pkiSignDownloadedPDFDocsMetadata
   */
  exports.prototype['pkiSignDownloadedPDFDocsMetadata'] = undefined;
  /**
   * 
   * @member {String} recipientsCanSignOffline
   */
  exports.prototype['recipientsCanSignOffline'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} recipientsCanSignOfflineMetadata
   */
  exports.prototype['recipientsCanSignOfflineMetadata'] = undefined;
  /**
   * 
   * @member {String} recipientSigningAutoNavigationControl
   */
  exports.prototype['recipientSigningAutoNavigationControl'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} recipientSigningAutoNavigationControlMetadata
   */
  exports.prototype['recipientSigningAutoNavigationControlMetadata'] = undefined;
  /**
   * 
   * @member {String} require21CFRpt11Compliance
   */
  exports.prototype['require21CFRpt11Compliance'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} require21CFRpt11ComplianceMetadata
   */
  exports.prototype['require21CFRpt11ComplianceMetadata'] = undefined;
  /**
   * 
   * @member {String} requireDeclineReason
   */
  exports.prototype['requireDeclineReason'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} requireDeclineReasonMetadata
   */
  exports.prototype['requireDeclineReasonMetadata'] = undefined;
  /**
   * 
   * @member {String} requireExternalUserManagement
   */
  exports.prototype['requireExternalUserManagement'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} requireExternalUserManagementMetadata
   */
  exports.prototype['requireExternalUserManagementMetadata'] = undefined;
  /**
   * 
   * @member {String} requireSignerCertificateType
   */
  exports.prototype['requireSignerCertificateType'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} requireSignerCertificateTypeMetadata
   */
  exports.prototype['requireSignerCertificateTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} rsaVeridAccountName
   */
  exports.prototype['rsaVeridAccountName'] = undefined;
  /**
   * 
   * @member {String} rsaVeridPassword
   */
  exports.prototype['rsaVeridPassword'] = undefined;
  /**
   * 
   * @member {String} rsaVeridRuleset
   */
  exports.prototype['rsaVeridRuleset'] = undefined;
  /**
   * 
   * @member {String} rsaVeridUserId
   */
  exports.prototype['rsaVeridUserId'] = undefined;
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
   * 
   * @member {String} selfSignedRecipientEmailDocumentUserOverride
   */
  exports.prototype['selfSignedRecipientEmailDocumentUserOverride'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} selfSignedRecipientEmailDocumentUserOverrideMetadata
   */
  exports.prototype['selfSignedRecipientEmailDocumentUserOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} senderCanSignInEachLocation
   */
  exports.prototype['senderCanSignInEachLocation'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} senderCanSignInEachLocationMetadata
   */
  exports.prototype['senderCanSignInEachLocationMetadata'] = undefined;
  /**
   * 
   * @member {String} senderMustAuthenticateSigning
   */
  exports.prototype['senderMustAuthenticateSigning'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} senderMustAuthenticateSigningMetadata
   */
  exports.prototype['senderMustAuthenticateSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} sendingTagsFontColor
   */
  exports.prototype['sendingTagsFontColor'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} sendingTagsFontColorMetadata
   */
  exports.prototype['sendingTagsFontColorMetadata'] = undefined;
  /**
   * 
   * @member {String} sendingTagsFontName
   */
  exports.prototype['sendingTagsFontName'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} sendingTagsFontNameMetadata
   */
  exports.prototype['sendingTagsFontNameMetadata'] = undefined;
  /**
   * 
   * @member {String} sendingTagsFontSize
   */
  exports.prototype['sendingTagsFontSize'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} sendingTagsFontSizeMetadata
   */
  exports.prototype['sendingTagsFontSizeMetadata'] = undefined;
  /**
   * 
   * @member {String} sendToCertifiedDeliveryEnabled
   */
  exports.prototype['sendToCertifiedDeliveryEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} sendToCertifiedDeliveryEnabledMetadata
   */
  exports.prototype['sendToCertifiedDeliveryEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} sessionTimeout
   */
  exports.prototype['sessionTimeout'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} sessionTimeoutMetadata
   */
  exports.prototype['sessionTimeoutMetadata'] = undefined;
  /**
   * 
   * @member {String} setRecipEmailLang
   */
  exports.prototype['setRecipEmailLang'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} setRecipEmailLangMetadata
   */
  exports.prototype['setRecipEmailLangMetadata'] = undefined;
  /**
   * 
   * @member {String} setRecipSignLang
   */
  exports.prototype['setRecipSignLang'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} setRecipSignLangMetadata
   */
  exports.prototype['setRecipSignLangMetadata'] = undefined;
  /**
   * 
   * @member {String} sharedTemplateFolders
   */
  exports.prototype['sharedTemplateFolders'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} sharedTemplateFoldersMetadata
   */
  exports.prototype['sharedTemplateFoldersMetadata'] = undefined;
  /**
   * 
   * @member {String} showCompleteDialogInEmbeddedSession
   */
  exports.prototype['showCompleteDialogInEmbeddedSession'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} showCompleteDialogInEmbeddedSessionMetadata
   */
  exports.prototype['showCompleteDialogInEmbeddedSessionMetadata'] = undefined;
  /**
   * 
   * @member {String} showInitialConditionalFields
   */
  exports.prototype['showInitialConditionalFields'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} showInitialConditionalFieldsMetadata
   */
  exports.prototype['showInitialConditionalFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} showLocalizedWatermarks
   */
  exports.prototype['showLocalizedWatermarks'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} showLocalizedWatermarksMetadata
   */
  exports.prototype['showLocalizedWatermarksMetadata'] = undefined;
  /**
   * 
   * @member {String} showTutorials
   */
  exports.prototype['showTutorials'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} showTutorialsMetadata
   */
  exports.prototype['showTutorialsMetadata'] = undefined;
  /**
   * 
   * @member {Array.<String>} signatureProviders
   */
  exports.prototype['signatureProviders'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signatureProvidersMetadata
   */
  exports.prototype['signatureProvidersMetadata'] = undefined;
  /**
   * 
   * @member {String} signDateFormat
   */
  exports.prototype['signDateFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signDateFormatMetadata
   */
  exports.prototype['signDateFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} signerAttachCertificateToEnvelopePDF
   */
  exports.prototype['signerAttachCertificateToEnvelopePDF'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerAttachCertificateToEnvelopePDFMetadata
   */
  exports.prototype['signerAttachCertificateToEnvelopePDFMetadata'] = undefined;
  /**
   * 
   * @member {String} signerAttachConcat
   */
  exports.prototype['signerAttachConcat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerAttachConcatMetadata
   */
  exports.prototype['signerAttachConcatMetadata'] = undefined;
  /**
   * 
   * @member {String} signerCanCreateAccount
   */
  exports.prototype['signerCanCreateAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerCanCreateAccountMetadata
   */
  exports.prototype['signerCanCreateAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} signerCanSignOnMobile
   */
  exports.prototype['signerCanSignOnMobile'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerCanSignOnMobileMetadata
   */
  exports.prototype['signerCanSignOnMobileMetadata'] = undefined;
  /**
   * 
   * @member {String} signerInSessionUseEnvelopeCompleteEmail
   */
  exports.prototype['signerInSessionUseEnvelopeCompleteEmail'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerInSessionUseEnvelopeCompleteEmailMetadata
   */
  exports.prototype['signerInSessionUseEnvelopeCompleteEmailMetadata'] = undefined;
  /**
   * 
   * @member {String} signerLoginRequirements
   */
  exports.prototype['signerLoginRequirements'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerLoginRequirementsMetadata
   */
  exports.prototype['signerLoginRequirementsMetadata'] = undefined;
  /**
   * 
   * @member {String} signerMustHaveAccount
   */
  exports.prototype['signerMustHaveAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerMustHaveAccountMetadata
   */
  exports.prototype['signerMustHaveAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} signerMustLoginToSign
   */
  exports.prototype['signerMustLoginToSign'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerMustLoginToSignMetadata
   */
  exports.prototype['signerMustLoginToSignMetadata'] = undefined;
  /**
   * 
   * @member {String} signerShowSecureFieldInitialValues
   */
  exports.prototype['signerShowSecureFieldInitialValues'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signerShowSecureFieldInitialValuesMetadata
   */
  exports.prototype['signerShowSecureFieldInitialValuesMetadata'] = undefined;
  /**
   * 
   * @member {String} signingSessionTimeout
   */
  exports.prototype['signingSessionTimeout'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signingSessionTimeoutMetadata
   */
  exports.prototype['signingSessionTimeoutMetadata'] = undefined;
  /**
   * 
   * @member {String} signingUiVersion
   */
  exports.prototype['signingUiVersion'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signingUiVersionMetadata
   */
  exports.prototype['signingUiVersionMetadata'] = undefined;
  /**
   * 
   * @member {String} signTimeFormat
   */
  exports.prototype['signTimeFormat'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signTimeFormatMetadata
   */
  exports.prototype['signTimeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} signTimeShowAmPm
   */
  exports.prototype['signTimeShowAmPm'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} signTimeShowAmPmMetadata
   */
  exports.prototype['signTimeShowAmPmMetadata'] = undefined;
  /**
   * 
   * @member {String} simplifiedSendingEnabled
   */
  exports.prototype['simplifiedSendingEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} simplifiedSendingEnabledMetadata
   */
  exports.prototype['simplifiedSendingEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} singleSignOnEnabled
   */
  exports.prototype['singleSignOnEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} singleSignOnEnabledMetadata
   */
  exports.prototype['singleSignOnEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} skipAuthCompletedEnvelopes
   */
  exports.prototype['skipAuthCompletedEnvelopes'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} skipAuthCompletedEnvelopesMetadata
   */
  exports.prototype['skipAuthCompletedEnvelopesMetadata'] = undefined;
  /**
   * 
   * @member {String} socialIdRecipAuth
   */
  exports.prototype['socialIdRecipAuth'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} socialIdRecipAuthMetadata
   */
  exports.prototype['socialIdRecipAuthMetadata'] = undefined;
  /**
   * 
   * @member {String} specifyDocumentVisibility
   */
  exports.prototype['specifyDocumentVisibility'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} specifyDocumentVisibilityMetadata
   */
  exports.prototype['specifyDocumentVisibilityMetadata'] = undefined;
  /**
   * 
   * @member {String} startInAdvancedCorrect
   */
  exports.prototype['startInAdvancedCorrect'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} startInAdvancedCorrectMetadata
   */
  exports.prototype['startInAdvancedCorrectMetadata'] = undefined;
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
   * @member {String} suppressCertificateEnforcement
   */
  exports.prototype['suppressCertificateEnforcement'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} suppressCertificateEnforcementMetadata
   */
  exports.prototype['suppressCertificateEnforcementMetadata'] = undefined;
  /**
   * @member {module:model/TabAccountSettings} tabAccountSettings
   */
  exports.prototype['tabAccountSettings'] = undefined;
  /**
   * 
   * @member {String} timezoneOffsetAPI
   */
  exports.prototype['timezoneOffsetAPI'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timezoneOffsetAPIMetadata
   */
  exports.prototype['timezoneOffsetAPIMetadata'] = undefined;
  /**
   * 
   * @member {String} timezoneOffsetUI
   */
  exports.prototype['timezoneOffsetUI'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} timezoneOffsetUIMetadata
   */
  exports.prototype['timezoneOffsetUIMetadata'] = undefined;
  /**
   * 
   * @member {String} universalSignatureOptIn
   */
  exports.prototype['universalSignatureOptIn'] = undefined;
  /**
   * 
   * @member {String} useAccountLevelEmail
   */
  exports.prototype['useAccountLevelEmail'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useAccountLevelEmailMetadata
   */
  exports.prototype['useAccountLevelEmailMetadata'] = undefined;
  /**
   * 
   * @member {String} useConsumerDisclosure
   */
  exports.prototype['useConsumerDisclosure'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useConsumerDisclosureMetadata
   */
  exports.prototype['useConsumerDisclosureMetadata'] = undefined;
  /**
   * 
   * @member {String} useConsumerDisclosureWithinAccount
   */
  exports.prototype['useConsumerDisclosureWithinAccount'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useConsumerDisclosureWithinAccountMetadata
   */
  exports.prototype['useConsumerDisclosureWithinAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} useDerivedKeys
   */
  exports.prototype['useDerivedKeys'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useDerivedKeysMetadata
   */
  exports.prototype['useDerivedKeysMetadata'] = undefined;
  /**
   * 
   * @member {String} useDocuSignExpressSignerCertificate
   */
  exports.prototype['useDocuSignExpressSignerCertificate'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useDocuSignExpressSignerCertificateMetadata
   */
  exports.prototype['useDocuSignExpressSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} useNewBlobForPdf
   */
  exports.prototype['useNewBlobForPdf'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useNewBlobForPdfMetadata
   */
  exports.prototype['useNewBlobForPdfMetadata'] = undefined;
  /**
   * 
   * @member {String} useSAFESignerCertificates
   */
  exports.prototype['useSAFESignerCertificates'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useSAFESignerCertificatesMetadata
   */
  exports.prototype['useSAFESignerCertificatesMetadata'] = undefined;
  /**
   * 
   * @member {String} usesAPI
   */
  exports.prototype['usesAPI'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} usesAPIMetadata
   */
  exports.prototype['usesAPIMetadata'] = undefined;
  /**
   * 
   * @member {String} useSignatureProviderPlatform
   */
  exports.prototype['useSignatureProviderPlatform'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useSignatureProviderPlatformMetadata
   */
  exports.prototype['useSignatureProviderPlatformMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsAllowed
   */
  exports.prototype['validationsAllowed'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} validationsAllowedMetadata
   */
  exports.prototype['validationsAllowedMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsBrand
   */
  exports.prototype['validationsBrand'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} validationsBrandMetadata
   */
  exports.prototype['validationsBrandMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsCadence
   */
  exports.prototype['validationsCadence'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} validationsCadenceMetadata
   */
  exports.prototype['validationsCadenceMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsEnabled
   */
  exports.prototype['validationsEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} validationsEnabledMetadata
   */
  exports.prototype['validationsEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsReport
   */
  exports.prototype['validationsReport'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} validationsReportMetadata
   */
  exports.prototype['validationsReportMetadata'] = undefined;
  /**
   * 
   * @member {String} waterMarkEnabled
   */
  exports.prototype['waterMarkEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} waterMarkEnabledMetadata
   */
  exports.prototype['waterMarkEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} writeReminderToEnvelopeHistory
   */
  exports.prototype['writeReminderToEnvelopeHistory'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} writeReminderToEnvelopeHistoryMetadata
   */
  exports.prototype['writeReminderToEnvelopeHistoryMetadata'] = undefined;
  /**
   * 
   * @member {String} wurflMinAllowableScreenSize
   */
  exports.prototype['wurflMinAllowableScreenSize'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} wurflMinAllowableScreenSizeMetadata
   */
  exports.prototype['wurflMinAllowableScreenSizeMetadata'] = undefined;



  return exports;
}));


