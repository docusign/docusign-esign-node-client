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
    define(['ApiClient', 'model/AccessCodeFormat', 'model/AccountIdentityVerificationWorkflow', 'model/AccountNotification', 'model/AccountUISettings', 'model/AddressInformation', 'model/ExternalDocumentSources', 'model/IdCheckConfiguration', 'model/LinkedExternalPrimaryAccount', 'model/SettingsMetadata', 'model/TabAccountSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessCodeFormat'), require('./AccountIdentityVerificationWorkflow'), require('./AccountNotification'), require('./AccountUISettings'), require('./AddressInformation'), require('./ExternalDocumentSources'), require('./IdCheckConfiguration'), require('./LinkedExternalPrimaryAccount'), require('./SettingsMetadata'), require('./TabAccountSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSettingsInformation = factory(root.Docusign.ApiClient, root.Docusign.AccessCodeFormat, root.Docusign.AccountIdentityVerificationWorkflow, root.Docusign.AccountNotification, root.Docusign.AccountUISettings, root.Docusign.AddressInformation, root.Docusign.ExternalDocumentSources, root.Docusign.IdCheckConfiguration, root.Docusign.LinkedExternalPrimaryAccount, root.Docusign.SettingsMetadata, root.Docusign.TabAccountSettings);
  }
}(this, function(ApiClient, AccessCodeFormat, AccountIdentityVerificationWorkflow, AccountNotification, AccountUISettings, AddressInformation, ExternalDocumentSources, IdCheckConfiguration, LinkedExternalPrimaryAccount, SettingsMetadata, TabAccountSettings) {
  'use strict';


  /**
   * The AccountSettingsInformation model module.
   * @module model/AccountSettingsInformation
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
      if (data.hasOwnProperty('accountDefaultLanguage')) {
        obj['accountDefaultLanguage'] = ApiClient.convertToType(data['accountDefaultLanguage'], 'String');
      }
      if (data.hasOwnProperty('accountDefaultLanguageMetadata')) {
        obj['accountDefaultLanguageMetadata'] = SettingsMetadata.constructFromObject(data['accountDefaultLanguageMetadata']);
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
      if (data.hasOwnProperty('accountUISettings')) {
        obj['accountUISettings'] = AccountUISettings.constructFromObject(data['accountUISettings']);
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
      if (data.hasOwnProperty('allowAdvancedRecipientRoutingConditional')) {
        obj['allowAdvancedRecipientRoutingConditional'] = ApiClient.convertToType(data['allowAdvancedRecipientRoutingConditional'], 'String');
      }
      if (data.hasOwnProperty('allowAdvancedRecipientRoutingConditionalMetadata')) {
        obj['allowAdvancedRecipientRoutingConditionalMetadata'] = SettingsMetadata.constructFromObject(data['allowAdvancedRecipientRoutingConditionalMetadata']);
      }
      if (data.hasOwnProperty('allowAgentNameEmailEdit')) {
        obj['allowAgentNameEmailEdit'] = ApiClient.convertToType(data['allowAgentNameEmailEdit'], 'String');
      }
      if (data.hasOwnProperty('allowAgentNameEmailEditMetadata')) {
        obj['allowAgentNameEmailEditMetadata'] = SettingsMetadata.constructFromObject(data['allowAgentNameEmailEditMetadata']);
      }
      if (data.hasOwnProperty('allowAgreementActions')) {
        obj['allowAgreementActions'] = ApiClient.convertToType(data['allowAgreementActions'], 'String');
      }
      if (data.hasOwnProperty('allowAgreementActionsMetadata')) {
        obj['allowAgreementActionsMetadata'] = SettingsMetadata.constructFromObject(data['allowAgreementActionsMetadata']);
      }
      if (data.hasOwnProperty('allowAgreementOrchestrationWorkflows')) {
        obj['allowAgreementOrchestrationWorkflows'] = ApiClient.convertToType(data['allowAgreementOrchestrationWorkflows'], 'String');
      }
      if (data.hasOwnProperty('allowAgreementOrchestrationWorkflowsMetadata')) {
        obj['allowAgreementOrchestrationWorkflowsMetadata'] = SettingsMetadata.constructFromObject(data['allowAgreementOrchestrationWorkflowsMetadata']);
      }
      if (data.hasOwnProperty('allowAutoNavSettings')) {
        obj['allowAutoNavSettings'] = ApiClient.convertToType(data['allowAutoNavSettings'], 'String');
      }
      if (data.hasOwnProperty('allowAutoNavSettingsMetadata')) {
        obj['allowAutoNavSettingsMetadata'] = SettingsMetadata.constructFromObject(data['allowAutoNavSettingsMetadata']);
      }
      if (data.hasOwnProperty('allowAutoTagging')) {
        obj['allowAutoTagging'] = ApiClient.convertToType(data['allowAutoTagging'], 'String');
      }
      if (data.hasOwnProperty('allowAutoTaggingMetadata')) {
        obj['allowAutoTaggingMetadata'] = SettingsMetadata.constructFromObject(data['allowAutoTaggingMetadata']);
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
      if (data.hasOwnProperty('allowConnectOAuthUI')) {
        obj['allowConnectOAuthUI'] = ApiClient.convertToType(data['allowConnectOAuthUI'], 'String');
      }
      if (data.hasOwnProperty('allowConnectSendFinishLater')) {
        obj['allowConnectSendFinishLater'] = ApiClient.convertToType(data['allowConnectSendFinishLater'], 'String');
      }
      if (data.hasOwnProperty('allowConnectSendFinishLaterMetadata')) {
        obj['allowConnectSendFinishLaterMetadata'] = SettingsMetadata.constructFromObject(data['allowConnectSendFinishLaterMetadata']);
      }
      if (data.hasOwnProperty('allowConnectUnifiedPayloadUI')) {
        obj['allowConnectUnifiedPayloadUI'] = ApiClient.convertToType(data['allowConnectUnifiedPayloadUI'], 'String');
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
      if (data.hasOwnProperty('allowDelayedRouting')) {
        obj['allowDelayedRouting'] = ApiClient.convertToType(data['allowDelayedRouting'], 'String');
      }
      if (data.hasOwnProperty('allowDelayedRoutingMetadata')) {
        obj['allowDelayedRoutingMetadata'] = SettingsMetadata.constructFromObject(data['allowDelayedRoutingMetadata']);
      }
      if (data.hasOwnProperty('allowDelegatedSigning')) {
        obj['allowDelegatedSigning'] = ApiClient.convertToType(data['allowDelegatedSigning'], 'String');
      }
      if (data.hasOwnProperty('allowDelegatedSigningMetadata')) {
        obj['allowDelegatedSigningMetadata'] = SettingsMetadata.constructFromObject(data['allowDelegatedSigningMetadata']);
      }
      if (data.hasOwnProperty('allowDocGenDocuments')) {
        obj['allowDocGenDocuments'] = ApiClient.convertToType(data['allowDocGenDocuments'], 'String');
      }
      if (data.hasOwnProperty('allowDocGenDocumentsMetadata')) {
        obj['allowDocGenDocumentsMetadata'] = SettingsMetadata.constructFromObject(data['allowDocGenDocumentsMetadata']);
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
      if (data.hasOwnProperty('allowExternalLinkedAccounts')) {
        obj['allowExternalLinkedAccounts'] = ApiClient.convertToType(data['allowExternalLinkedAccounts'], 'String');
      }
      if (data.hasOwnProperty('allowExternalLinkedAccountsMetadata')) {
        obj['allowExternalLinkedAccountsMetadata'] = SettingsMetadata.constructFromObject(data['allowExternalLinkedAccountsMetadata']);
      }
      if (data.hasOwnProperty('allowExternalSignaturePad')) {
        obj['allowExternalSignaturePad'] = ApiClient.convertToType(data['allowExternalSignaturePad'], 'String');
      }
      if (data.hasOwnProperty('allowExternalSignaturePadMetadata')) {
        obj['allowExternalSignaturePadMetadata'] = SettingsMetadata.constructFromObject(data['allowExternalSignaturePadMetadata']);
      }
      if (data.hasOwnProperty('allowIDVForEUQualifiedSignatures')) {
        obj['allowIDVForEUQualifiedSignatures'] = ApiClient.convertToType(data['allowIDVForEUQualifiedSignatures'], 'String');
      }
      if (data.hasOwnProperty('allowIDVForEUQualifiedSignaturesMetadata')) {
        obj['allowIDVForEUQualifiedSignaturesMetadata'] = SettingsMetadata.constructFromObject(data['allowIDVForEUQualifiedSignaturesMetadata']);
      }
      if (data.hasOwnProperty('allowIDVLevel1')) {
        obj['allowIDVLevel1'] = ApiClient.convertToType(data['allowIDVLevel1'], 'String');
      }
      if (data.hasOwnProperty('allowIDVLevel1Metadata')) {
        obj['allowIDVLevel1Metadata'] = SettingsMetadata.constructFromObject(data['allowIDVLevel1Metadata']);
      }
      if (data.hasOwnProperty('allowIDVLevel2')) {
        obj['allowIDVLevel2'] = ApiClient.convertToType(data['allowIDVLevel2'], 'String');
      }
      if (data.hasOwnProperty('allowIDVLevel2Metadata')) {
        obj['allowIDVLevel2Metadata'] = SettingsMetadata.constructFromObject(data['allowIDVLevel2Metadata']);
      }
      if (data.hasOwnProperty('allowIDVLevel3')) {
        obj['allowIDVLevel3'] = ApiClient.convertToType(data['allowIDVLevel3'], 'String');
      }
      if (data.hasOwnProperty('allowIDVLevel3Metadata')) {
        obj['allowIDVLevel3Metadata'] = SettingsMetadata.constructFromObject(data['allowIDVLevel3Metadata']);
      }
      if (data.hasOwnProperty('allowIDVPlatform')) {
        obj['allowIDVPlatform'] = ApiClient.convertToType(data['allowIDVPlatform'], 'String');
      }
      if (data.hasOwnProperty('allowIDVPlatformMetadata')) {
        obj['allowIDVPlatformMetadata'] = SettingsMetadata.constructFromObject(data['allowIDVPlatformMetadata']);
      }
      if (data.hasOwnProperty('allowInPerson')) {
        obj['allowInPerson'] = ApiClient.convertToType(data['allowInPerson'], 'String');
      }
      if (data.hasOwnProperty('allowInPersonElectronicNotary')) {
        obj['allowInPersonElectronicNotary'] = ApiClient.convertToType(data['allowInPersonElectronicNotary'], 'String');
      }
      if (data.hasOwnProperty('allowInPersonElectronicNotaryMetadata')) {
        obj['allowInPersonElectronicNotaryMetadata'] = SettingsMetadata.constructFromObject(data['allowInPersonElectronicNotaryMetadata']);
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
      if (data.hasOwnProperty('allowManagingEnvelopesOnBehalfOfOthers')) {
        obj['allowManagingEnvelopesOnBehalfOfOthers'] = ApiClient.convertToType(data['allowManagingEnvelopesOnBehalfOfOthers'], 'String');
      }
      if (data.hasOwnProperty('allowManagingEnvelopesOnBehalfOfOthersMetadata')) {
        obj['allowManagingEnvelopesOnBehalfOfOthersMetadata'] = SettingsMetadata.constructFromObject(data['allowManagingEnvelopesOnBehalfOfOthersMetadata']);
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
      if (data.hasOwnProperty('allowOcrOfEnvelopeDocuments')) {
        obj['allowOcrOfEnvelopeDocuments'] = ApiClient.convertToType(data['allowOcrOfEnvelopeDocuments'], 'String');
      }
      if (data.hasOwnProperty('allowOcrOfEnvelopeDocumentsMetadata')) {
        obj['allowOcrOfEnvelopeDocumentsMetadata'] = SettingsMetadata.constructFromObject(data['allowOcrOfEnvelopeDocumentsMetadata']);
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
      if (data.hasOwnProperty('allowOrganizationDocusignMonitor')) {
        obj['allowOrganizationDocusignMonitor'] = ApiClient.convertToType(data['allowOrganizationDocusignMonitor'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationDocusignMonitorMetadata')) {
        obj['allowOrganizationDocusignMonitorMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationDocusignMonitorMetadata']);
      }
      if (data.hasOwnProperty('allowOrganizationDomainUserManagement')) {
        obj['allowOrganizationDomainUserManagement'] = ApiClient.convertToType(data['allowOrganizationDomainUserManagement'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationDomainUserManagementMetadata')) {
        obj['allowOrganizationDomainUserManagementMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationDomainUserManagementMetadata']);
      }
      if (data.hasOwnProperty('allowOrganizations')) {
        obj['allowOrganizations'] = ApiClient.convertToType(data['allowOrganizations'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationsMetadata')) {
        obj['allowOrganizationsMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationsMetadata']);
      }
      if (data.hasOwnProperty('allowOrganizationSsoManagement')) {
        obj['allowOrganizationSsoManagement'] = ApiClient.convertToType(data['allowOrganizationSsoManagement'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationSsoManagementMetadata')) {
        obj['allowOrganizationSsoManagementMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationSsoManagementMetadata']);
      }
      if (data.hasOwnProperty('allowOrganizationToUseInPersonElectronicNotary')) {
        obj['allowOrganizationToUseInPersonElectronicNotary'] = ApiClient.convertToType(data['allowOrganizationToUseInPersonElectronicNotary'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationToUseInPersonElectronicNotaryMetadata')) {
        obj['allowOrganizationToUseInPersonElectronicNotaryMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationToUseInPersonElectronicNotaryMetadata']);
      }
      if (data.hasOwnProperty('allowOrganizationToUseRemoteNotary')) {
        obj['allowOrganizationToUseRemoteNotary'] = ApiClient.convertToType(data['allowOrganizationToUseRemoteNotary'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationToUseRemoteNotaryMetadata')) {
        obj['allowOrganizationToUseRemoteNotaryMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationToUseRemoteNotaryMetadata']);
      }
      if (data.hasOwnProperty('allowOrganizationToUseThirdPartyElectronicNotary')) {
        obj['allowOrganizationToUseThirdPartyElectronicNotary'] = ApiClient.convertToType(data['allowOrganizationToUseThirdPartyElectronicNotary'], 'String');
      }
      if (data.hasOwnProperty('allowOrganizationToUseThirdPartyElectronicNotaryMetadata')) {
        obj['allowOrganizationToUseThirdPartyElectronicNotaryMetadata'] = SettingsMetadata.constructFromObject(data['allowOrganizationToUseThirdPartyElectronicNotaryMetadata']);
      }
      if (data.hasOwnProperty('allowParticipantRecipientType')) {
        obj['allowParticipantRecipientType'] = ApiClient.convertToType(data['allowParticipantRecipientType'], 'String');
      }
      if (data.hasOwnProperty('allowParticipantRecipientTypeMetadata')) {
        obj['allowParticipantRecipientTypeMetadata'] = SettingsMetadata.constructFromObject(data['allowParticipantRecipientTypeMetadata']);
      }
      if (data.hasOwnProperty('allowPaymentProcessing')) {
        obj['allowPaymentProcessing'] = ApiClient.convertToType(data['allowPaymentProcessing'], 'String');
      }
      if (data.hasOwnProperty('allowPaymentProcessingMetadata')) {
        obj['allowPaymentProcessingMetadata'] = SettingsMetadata.constructFromObject(data['allowPaymentProcessingMetadata']);
      }
      if (data.hasOwnProperty('allowPerformanceAnalytics')) {
        obj['allowPerformanceAnalytics'] = ApiClient.convertToType(data['allowPerformanceAnalytics'], 'String');
      }
      if (data.hasOwnProperty('allowPerformanceAnalyticsMetadata')) {
        obj['allowPerformanceAnalyticsMetadata'] = SettingsMetadata.constructFromObject(data['allowPerformanceAnalyticsMetadata']);
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
      if (data.hasOwnProperty('allowRecipientConnect')) {
        obj['allowRecipientConnect'] = ApiClient.convertToType(data['allowRecipientConnect'], 'String');
      }
      if (data.hasOwnProperty('allowRecipientConnectMetadata')) {
        obj['allowRecipientConnectMetadata'] = SettingsMetadata.constructFromObject(data['allowRecipientConnectMetadata']);
      }
      if (data.hasOwnProperty('allowReminders')) {
        obj['allowReminders'] = ApiClient.convertToType(data['allowReminders'], 'String');
      }
      if (data.hasOwnProperty('allowRemindersMetadata')) {
        obj['allowRemindersMetadata'] = SettingsMetadata.constructFromObject(data['allowRemindersMetadata']);
      }
      if (data.hasOwnProperty('allowRemoteNotary')) {
        obj['allowRemoteNotary'] = ApiClient.convertToType(data['allowRemoteNotary'], 'String');
      }
      if (data.hasOwnProperty('allowRemoteNotaryMetadata')) {
        obj['allowRemoteNotaryMetadata'] = SettingsMetadata.constructFromObject(data['allowRemoteNotaryMetadata']);
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
      if (data.hasOwnProperty('allowScheduledSending')) {
        obj['allowScheduledSending'] = ApiClient.convertToType(data['allowScheduledSending'], 'String');
      }
      if (data.hasOwnProperty('allowScheduledSendingMetadata')) {
        obj['allowScheduledSendingMetadata'] = SettingsMetadata.constructFromObject(data['allowScheduledSendingMetadata']);
      }
      if (data.hasOwnProperty('allowSecurityAppliance')) {
        obj['allowSecurityAppliance'] = ApiClient.convertToType(data['allowSecurityAppliance'], 'String');
      }
      if (data.hasOwnProperty('allowSecurityApplianceMetadata')) {
        obj['allowSecurityApplianceMetadata'] = SettingsMetadata.constructFromObject(data['allowSecurityApplianceMetadata']);
      }
      if (data.hasOwnProperty('allowSendingEnvelopesOnBehalfOfOthers')) {
        obj['allowSendingEnvelopesOnBehalfOfOthers'] = ApiClient.convertToType(data['allowSendingEnvelopesOnBehalfOfOthers'], 'String');
      }
      if (data.hasOwnProperty('allowSendingEnvelopesOnBehalfOfOthersMetadata')) {
        obj['allowSendingEnvelopesOnBehalfOfOthersMetadata'] = SettingsMetadata.constructFromObject(data['allowSendingEnvelopesOnBehalfOfOthersMetadata']);
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
      if (data.hasOwnProperty('allowSetEmbeddedRecipientStartURL')) {
        obj['allowSetEmbeddedRecipientStartURL'] = ApiClient.convertToType(data['allowSetEmbeddedRecipientStartURL'], 'String');
      }
      if (data.hasOwnProperty('allowSetEmbeddedRecipientStartURLMetadata')) {
        obj['allowSetEmbeddedRecipientStartURLMetadata'] = SettingsMetadata.constructFromObject(data['allowSetEmbeddedRecipientStartURLMetadata']);
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
      if (data.hasOwnProperty('allowSigningInsights')) {
        obj['allowSigningInsights'] = ApiClient.convertToType(data['allowSigningInsights'], 'String');
      }
      if (data.hasOwnProperty('allowSigningInsightsMetadata')) {
        obj['allowSigningInsightsMetadata'] = SettingsMetadata.constructFromObject(data['allowSigningInsightsMetadata']);
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
      if (data.hasOwnProperty('allowSMSDelivery')) {
        obj['allowSMSDelivery'] = ApiClient.convertToType(data['allowSMSDelivery'], 'String');
      }
      if (data.hasOwnProperty('allowSMSDeliveryMetadata')) {
        obj['allowSMSDeliveryMetadata'] = SettingsMetadata.constructFromObject(data['allowSMSDeliveryMetadata']);
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
      if (data.hasOwnProperty('allowThirdPartyElectronicNotary')) {
        obj['allowThirdPartyElectronicNotary'] = ApiClient.convertToType(data['allowThirdPartyElectronicNotary'], 'String');
      }
      if (data.hasOwnProperty('allowThirdPartyElectronicNotaryMetadata')) {
        obj['allowThirdPartyElectronicNotaryMetadata'] = SettingsMetadata.constructFromObject(data['allowThirdPartyElectronicNotaryMetadata']);
      }
      if (data.hasOwnProperty('allowUsersToAccessDirectory')) {
        obj['allowUsersToAccessDirectory'] = ApiClient.convertToType(data['allowUsersToAccessDirectory'], 'String');
      }
      if (data.hasOwnProperty('allowUsersToAccessDirectoryMetadata')) {
        obj['allowUsersToAccessDirectoryMetadata'] = SettingsMetadata.constructFromObject(data['allowUsersToAccessDirectoryMetadata']);
      }
      if (data.hasOwnProperty('allowValueInsights')) {
        obj['allowValueInsights'] = ApiClient.convertToType(data['allowValueInsights'], 'String');
      }
      if (data.hasOwnProperty('allowValueInsightsMetadata')) {
        obj['allowValueInsightsMetadata'] = SettingsMetadata.constructFromObject(data['allowValueInsightsMetadata']);
      }
      if (data.hasOwnProperty('allowWebForms')) {
        obj['allowWebForms'] = ApiClient.convertToType(data['allowWebForms'], 'String');
      }
      if (data.hasOwnProperty('allowWebFormsMetadata')) {
        obj['allowWebFormsMetadata'] = SettingsMetadata.constructFromObject(data['allowWebFormsMetadata']);
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
      if (data.hasOwnProperty('bulkSendActionResendLimit')) {
        obj['bulkSendActionResendLimit'] = ApiClient.convertToType(data['bulkSendActionResendLimit'], 'String');
      }
      if (data.hasOwnProperty('bulkSendMaxCopiesInBatch')) {
        obj['bulkSendMaxCopiesInBatch'] = ApiClient.convertToType(data['bulkSendMaxCopiesInBatch'], 'String');
      }
      if (data.hasOwnProperty('bulkSendMaxUnprocessedEnvelopesCount')) {
        obj['bulkSendMaxUnprocessedEnvelopesCount'] = ApiClient.convertToType(data['bulkSendMaxUnprocessedEnvelopesCount'], 'String');
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
      if (data.hasOwnProperty('canUseSalesforceOAuth')) {
        obj['canUseSalesforceOAuth'] = ApiClient.convertToType(data['canUseSalesforceOAuth'], 'String');
      }
      if (data.hasOwnProperty('canUseSalesforceOAuthMetadata')) {
        obj['canUseSalesforceOAuthMetadata'] = SettingsMetadata.constructFromObject(data['canUseSalesforceOAuthMetadata']);
      }
      if (data.hasOwnProperty('captureVoiceRecording')) {
        obj['captureVoiceRecording'] = ApiClient.convertToType(data['captureVoiceRecording'], 'String');
      }
      if (data.hasOwnProperty('captureVoiceRecordingMetadata')) {
        obj['captureVoiceRecordingMetadata'] = SettingsMetadata.constructFromObject(data['captureVoiceRecordingMetadata']);
      }
      if (data.hasOwnProperty('cfr21SimplifiedSigningEnabled')) {
        obj['cfr21SimplifiedSigningEnabled'] = ApiClient.convertToType(data['cfr21SimplifiedSigningEnabled'], 'String');
      }
      if (data.hasOwnProperty('cfr21SimplifiedSigningEnabledMetadata')) {
        obj['cfr21SimplifiedSigningEnabledMetadata'] = SettingsMetadata.constructFromObject(data['cfr21SimplifiedSigningEnabledMetadata']);
      }
      if (data.hasOwnProperty('cfrUseWideImage')) {
        obj['cfrUseWideImage'] = ApiClient.convertToType(data['cfrUseWideImage'], 'String');
      }
      if (data.hasOwnProperty('cfrUseWideImageMetadata')) {
        obj['cfrUseWideImageMetadata'] = SettingsMetadata.constructFromObject(data['cfrUseWideImageMetadata']);
      }
      if (data.hasOwnProperty('checkForMultipleAdminsOnAccount')) {
        obj['checkForMultipleAdminsOnAccount'] = ApiClient.convertToType(data['checkForMultipleAdminsOnAccount'], 'String');
      }
      if (data.hasOwnProperty('checkForMultipleAdminsOnAccountMetadata')) {
        obj['checkForMultipleAdminsOnAccountMetadata'] = SettingsMetadata.constructFromObject(data['checkForMultipleAdminsOnAccountMetadata']);
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
      if (data.hasOwnProperty('disableAutoTemplateMatching')) {
        obj['disableAutoTemplateMatching'] = ApiClient.convertToType(data['disableAutoTemplateMatching'], 'String');
      }
      if (data.hasOwnProperty('disableAutoTemplateMatchingMetadata')) {
        obj['disableAutoTemplateMatchingMetadata'] = SettingsMetadata.constructFromObject(data['disableAutoTemplateMatchingMetadata']);
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
      if (data.hasOwnProperty('dss_SIGN_28411_EnableLeavePagePrompt_RadminOption')) {
        obj['dss_SIGN_28411_EnableLeavePagePrompt_RadminOption'] = ApiClient.convertToType(data['dss_SIGN_28411_EnableLeavePagePrompt_RadminOption'], 'String');
      }
      if (data.hasOwnProperty('dss_SIGN_29182_SlideUpBar_RadminOption')) {
        obj['dss_SIGN_29182_SlideUpBar_RadminOption'] = ApiClient.convertToType(data['dss_SIGN_29182_SlideUpBar_RadminOption'], 'String');
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
      if (data.hasOwnProperty('enableAdmHealthcare')) {
        obj['enableAdmHealthcare'] = ApiClient.convertToType(data['enableAdmHealthcare'], 'String');
      }
      if (data.hasOwnProperty('enableAdmHealthcareMetadata')) {
        obj['enableAdmHealthcareMetadata'] = SettingsMetadata.constructFromObject(data['enableAdmHealthcareMetadata']);
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
      if (data.hasOwnProperty('enableAgreementActionsForCLM')) {
        obj['enableAgreementActionsForCLM'] = ApiClient.convertToType(data['enableAgreementActionsForCLM'], 'String');
      }
      if (data.hasOwnProperty('enableAgreementActionsForCLMMetadata')) {
        obj['enableAgreementActionsForCLMMetadata'] = SettingsMetadata.constructFromObject(data['enableAgreementActionsForCLMMetadata']);
      }
      if (data.hasOwnProperty('enableAgreementActionsForESign')) {
        obj['enableAgreementActionsForESign'] = ApiClient.convertToType(data['enableAgreementActionsForESign'], 'String');
      }
      if (data.hasOwnProperty('enableAgreementActionsForESignMetadata')) {
        obj['enableAgreementActionsForESignMetadata'] = SettingsMetadata.constructFromObject(data['enableAgreementActionsForESignMetadata']);
      }
      if (data.hasOwnProperty('enableAutoNav')) {
        obj['enableAutoNav'] = ApiClient.convertToType(data['enableAutoNav'], 'String');
      }
      if (data.hasOwnProperty('enableAutoNavMetadata')) {
        obj['enableAutoNavMetadata'] = SettingsMetadata.constructFromObject(data['enableAutoNavMetadata']);
      }
      if (data.hasOwnProperty('enableBccDummyLink')) {
        obj['enableBccDummyLink'] = ApiClient.convertToType(data['enableBccDummyLink'], 'String');
      }
      if (data.hasOwnProperty('enableBccDummyLinkMetadata')) {
        obj['enableBccDummyLinkMetadata'] = SettingsMetadata.constructFromObject(data['enableBccDummyLinkMetadata']);
      }
      if (data.hasOwnProperty('enableCalculatedFields')) {
        obj['enableCalculatedFields'] = ApiClient.convertToType(data['enableCalculatedFields'], 'String');
      }
      if (data.hasOwnProperty('enableCalculatedFieldsMetadata')) {
        obj['enableCalculatedFieldsMetadata'] = SettingsMetadata.constructFromObject(data['enableCalculatedFieldsMetadata']);
      }
      if (data.hasOwnProperty('enableClickPlus')) {
        obj['enableClickPlus'] = ApiClient.convertToType(data['enableClickPlus'], 'String');
      }
      if (data.hasOwnProperty('enableClickPlusConditionalContent')) {
        obj['enableClickPlusConditionalContent'] = ApiClient.convertToType(data['enableClickPlusConditionalContent'], 'String');
      }
      if (data.hasOwnProperty('enableClickPlusConditionalContentMetaData')) {
        obj['enableClickPlusConditionalContentMetaData'] = SettingsMetadata.constructFromObject(data['enableClickPlusConditionalContentMetaData']);
      }
      if (data.hasOwnProperty('enableClickPlusCustomFields')) {
        obj['enableClickPlusCustomFields'] = ApiClient.convertToType(data['enableClickPlusCustomFields'], 'String');
      }
      if (data.hasOwnProperty('enableClickPlusCustomFieldsMetaData')) {
        obj['enableClickPlusCustomFieldsMetaData'] = SettingsMetadata.constructFromObject(data['enableClickPlusCustomFieldsMetaData']);
      }
      if (data.hasOwnProperty('enableClickPlusCustomStyle')) {
        obj['enableClickPlusCustomStyle'] = ApiClient.convertToType(data['enableClickPlusCustomStyle'], 'String');
      }
      if (data.hasOwnProperty('enableClickPlusCustomStyleMetaData')) {
        obj['enableClickPlusCustomStyleMetaData'] = SettingsMetadata.constructFromObject(data['enableClickPlusCustomStyleMetaData']);
      }
      if (data.hasOwnProperty('enableClickPlusDynamicContent')) {
        obj['enableClickPlusDynamicContent'] = ApiClient.convertToType(data['enableClickPlusDynamicContent'], 'String');
      }
      if (data.hasOwnProperty('enableClickPlusDynamicContentMetaData')) {
        obj['enableClickPlusDynamicContentMetaData'] = SettingsMetadata.constructFromObject(data['enableClickPlusDynamicContentMetaData']);
      }
      if (data.hasOwnProperty('enableClickPlusMetaData')) {
        obj['enableClickPlusMetaData'] = SettingsMetadata.constructFromObject(data['enableClickPlusMetaData']);
      }
      if (data.hasOwnProperty('enableClickwraps')) {
        obj['enableClickwraps'] = ApiClient.convertToType(data['enableClickwraps'], 'String');
      }
      if (data.hasOwnProperty('enableClickwrapsMetadata')) {
        obj['enableClickwrapsMetadata'] = SettingsMetadata.constructFromObject(data['enableClickwrapsMetadata']);
      }
      if (data.hasOwnProperty('enableCombinedPDFDownloadForSBS')) {
        obj['enableCombinedPDFDownloadForSBS'] = ApiClient.convertToType(data['enableCombinedPDFDownloadForSBS'], 'String');
      }
      if (data.hasOwnProperty('enableCommentsHistoryDownloadInSigning')) {
        obj['enableCommentsHistoryDownloadInSigning'] = ApiClient.convertToType(data['enableCommentsHistoryDownloadInSigning'], 'String');
      }
      if (data.hasOwnProperty('enableCommentsHistoryDownloadInSigningMetadata')) {
        obj['enableCommentsHistoryDownloadInSigningMetadata'] = SettingsMetadata.constructFromObject(data['enableCommentsHistoryDownloadInSigningMetadata']);
      }
      if (data.hasOwnProperty('enableContactSuggestions')) {
        obj['enableContactSuggestions'] = ApiClient.convertToType(data['enableContactSuggestions'], 'String');
      }
      if (data.hasOwnProperty('enableContactSuggestionsMetadata')) {
        obj['enableContactSuggestionsMetadata'] = SettingsMetadata.constructFromObject(data['enableContactSuggestionsMetadata']);
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
      if (data.hasOwnProperty('enableESignAPIHourlyLimitManagement')) {
        obj['enableESignAPIHourlyLimitManagement'] = ApiClient.convertToType(data['enableESignAPIHourlyLimitManagement'], 'String');
      }
      if (data.hasOwnProperty('enableESignAPIHourlyLimitManagementMetadata')) {
        obj['enableESignAPIHourlyLimitManagementMetadata'] = SettingsMetadata.constructFromObject(data['enableESignAPIHourlyLimitManagementMetadata']);
      }
      if (data.hasOwnProperty('enableEsignCommunities')) {
        obj['enableEsignCommunities'] = ApiClient.convertToType(data['enableEsignCommunities'], 'String');
      }
      if (data.hasOwnProperty('enableEsignCommunitiesMetadata')) {
        obj['enableEsignCommunitiesMetadata'] = SettingsMetadata.constructFromObject(data['enableEsignCommunitiesMetadata']);
      }
      if (data.hasOwnProperty('enableIDFxAccountlessSMSAuthForPart11')) {
        obj['enableIDFxAccountlessSMSAuthForPart11'] = ApiClient.convertToType(data['enableIDFxAccountlessSMSAuthForPart11'], 'String');
      }
      if (data.hasOwnProperty('enableIDFxAccountlessSMSAuthForPart11Metadata')) {
        obj['enableIDFxAccountlessSMSAuthForPart11Metadata'] = SettingsMetadata.constructFromObject(data['enableIDFxAccountlessSMSAuthForPart11Metadata']);
      }
      if (data.hasOwnProperty('enableIDFxIntuitKBA')) {
        obj['enableIDFxIntuitKBA'] = ApiClient.convertToType(data['enableIDFxIntuitKBA'], 'String');
      }
      if (data.hasOwnProperty('enableIDFxIntuitKBAMetadata')) {
        obj['enableIDFxIntuitKBAMetadata'] = SettingsMetadata.constructFromObject(data['enableIDFxIntuitKBAMetadata']);
      }
      if (data.hasOwnProperty('enableIDFxPhoneAuthentication')) {
        obj['enableIDFxPhoneAuthentication'] = ApiClient.convertToType(data['enableIDFxPhoneAuthentication'], 'String');
      }
      if (data.hasOwnProperty('enableIDFxPhoneAuthenticationMetadata')) {
        obj['enableIDFxPhoneAuthenticationMetadata'] = SettingsMetadata.constructFromObject(data['enableIDFxPhoneAuthenticationMetadata']);
      }
      if (data.hasOwnProperty('enableInBrowserEditor')) {
        obj['enableInBrowserEditor'] = ApiClient.convertToType(data['enableInBrowserEditor'], 'String');
      }
      if (data.hasOwnProperty('enableInBrowserEditorMetadata')) {
        obj['enableInBrowserEditorMetadata'] = SettingsMetadata.constructFromObject(data['enableInBrowserEditorMetadata']);
      }
      if (data.hasOwnProperty('enableKeyTermsSuggestionsByDocumentType')) {
        obj['enableKeyTermsSuggestionsByDocumentType'] = ApiClient.convertToType(data['enableKeyTermsSuggestionsByDocumentType'], 'String');
      }
      if (data.hasOwnProperty('enableKeyTermsSuggestionsByDocumentTypeMetadata')) {
        obj['enableKeyTermsSuggestionsByDocumentTypeMetadata'] = SettingsMetadata.constructFromObject(data['enableKeyTermsSuggestionsByDocumentTypeMetadata']);
      }
      if (data.hasOwnProperty('enableParticipantRecipientSettingMetadata')) {
        obj['enableParticipantRecipientSettingMetadata'] = SettingsMetadata.constructFromObject(data['enableParticipantRecipientSettingMetadata']);
      }
      if (data.hasOwnProperty('enablePaymentProcessing')) {
        obj['enablePaymentProcessing'] = ApiClient.convertToType(data['enablePaymentProcessing'], 'String');
      }
      if (data.hasOwnProperty('enablePaymentProcessingMetadata')) {
        obj['enablePaymentProcessingMetadata'] = SettingsMetadata.constructFromObject(data['enablePaymentProcessingMetadata']);
      }
      if (data.hasOwnProperty('enablePDFAConversion')) {
        obj['enablePDFAConversion'] = ApiClient.convertToType(data['enablePDFAConversion'], 'String');
      }
      if (data.hasOwnProperty('enablePDFAConversionMetadata')) {
        obj['enablePDFAConversionMetadata'] = SettingsMetadata.constructFromObject(data['enablePDFAConversionMetadata']);
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
      if (data.hasOwnProperty('enableRecipientMayProvidePhoneNumber')) {
        obj['enableRecipientMayProvidePhoneNumber'] = ApiClient.convertToType(data['enableRecipientMayProvidePhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('enableRecipientMayProvidePhoneNumberMetadata')) {
        obj['enableRecipientMayProvidePhoneNumberMetadata'] = SettingsMetadata.constructFromObject(data['enableRecipientMayProvidePhoneNumberMetadata']);
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
      if (data.hasOwnProperty('enableSearch')) {
        obj['enableSearch'] = ApiClient.convertToType(data['enableSearch'], 'String');
      }
      if (data.hasOwnProperty('enableSearchMetadata')) {
        obj['enableSearchMetadata'] = SettingsMetadata.constructFromObject(data['enableSearchMetadata']);
      }
      if (data.hasOwnProperty('enableSearchSiteSpecificApi')) {
        obj['enableSearchSiteSpecificApi'] = ApiClient.convertToType(data['enableSearchSiteSpecificApi'], 'String');
      }
      if (data.hasOwnProperty('enableSearchSiteSpecificApiMetadata')) {
        obj['enableSearchSiteSpecificApiMetadata'] = SettingsMetadata.constructFromObject(data['enableSearchSiteSpecificApiMetadata']);
      }
      if (data.hasOwnProperty('enableSearchUI')) {
        obj['enableSearchUI'] = ApiClient.convertToType(data['enableSearchUI'], 'String');
      }
      if (data.hasOwnProperty('enableSearchUIMetadata')) {
        obj['enableSearchUIMetadata'] = SettingsMetadata.constructFromObject(data['enableSearchUIMetadata']);
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
      if (data.hasOwnProperty('enableSmartContracts')) {
        obj['enableSmartContracts'] = ApiClient.convertToType(data['enableSmartContracts'], 'String');
      }
      if (data.hasOwnProperty('enableSmartContractsMetadata')) {
        obj['enableSmartContractsMetadata'] = SettingsMetadata.constructFromObject(data['enableSmartContractsMetadata']);
      }
      if (data.hasOwnProperty('enableSMSAuthentication')) {
        obj['enableSMSAuthentication'] = ApiClient.convertToType(data['enableSMSAuthentication'], 'String');
      }
      if (data.hasOwnProperty('enableSMSAuthenticationMetadata')) {
        obj['enableSMSAuthenticationMetadata'] = SettingsMetadata.constructFromObject(data['enableSMSAuthenticationMetadata']);
      }
      if (data.hasOwnProperty('enableSMSDeliveryAdditionalNotification')) {
        obj['enableSMSDeliveryAdditionalNotification'] = ApiClient.convertToType(data['enableSMSDeliveryAdditionalNotification'], 'String');
      }
      if (data.hasOwnProperty('enableSMSDeliveryAdditionalNotificationMetadata')) {
        obj['enableSMSDeliveryAdditionalNotificationMetadata'] = SettingsMetadata.constructFromObject(data['enableSMSDeliveryAdditionalNotificationMetadata']);
      }
      if (data.hasOwnProperty('enableSMSDeliveryPrimary')) {
        obj['enableSMSDeliveryPrimary'] = ApiClient.convertToType(data['enableSMSDeliveryPrimary'], 'String');
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
      if (data.hasOwnProperty('EnvelopeLimitsTotalDocumentSizeAllowedInMB')) {
        obj['EnvelopeLimitsTotalDocumentSizeAllowedInMB'] = ApiClient.convertToType(data['EnvelopeLimitsTotalDocumentSizeAllowedInMB'], 'String');
      }
      if (data.hasOwnProperty('EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabled')) {
        obj['EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabled'] = ApiClient.convertToType(data['EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabled'], 'String');
      }
      if (data.hasOwnProperty('EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabledMetadata')) {
        obj['EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabledMetadata'] = SettingsMetadata.constructFromObject(data['EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabledMetadata']);
      }
      if (data.hasOwnProperty('EnvelopeLimitsTotalDocumentSizeAllowedInMBMetadata')) {
        obj['EnvelopeLimitsTotalDocumentSizeAllowedInMBMetadata'] = SettingsMetadata.constructFromObject(data['EnvelopeLimitsTotalDocumentSizeAllowedInMBMetadata']);
      }
      if (data.hasOwnProperty('envelopeSearchMode')) {
        obj['envelopeSearchMode'] = ApiClient.convertToType(data['envelopeSearchMode'], 'String');
      }
      if (data.hasOwnProperty('envelopeSearchModeMetadata')) {
        obj['envelopeSearchModeMetadata'] = SettingsMetadata.constructFromObject(data['envelopeSearchModeMetadata']);
      }
      if (data.hasOwnProperty('envelopeStampingDefaultValue')) {
        obj['envelopeStampingDefaultValue'] = ApiClient.convertToType(data['envelopeStampingDefaultValue'], 'String');
      }
      if (data.hasOwnProperty('envelopeStampingDefaultValueMetadata')) {
        obj['envelopeStampingDefaultValueMetadata'] = SettingsMetadata.constructFromObject(data['envelopeStampingDefaultValueMetadata']);
      }
      if (data.hasOwnProperty('exitPrompt')) {
        obj['exitPrompt'] = ApiClient.convertToType(data['exitPrompt'], 'String');
      }
      if (data.hasOwnProperty('exitPromptMetadata')) {
        obj['exitPromptMetadata'] = SettingsMetadata.constructFromObject(data['exitPromptMetadata']);
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
      if (data.hasOwnProperty('finishReminder')) {
        obj['finishReminder'] = ApiClient.convertToType(data['finishReminder'], 'String');
      }
      if (data.hasOwnProperty('finishReminderMetadata')) {
        obj['finishReminderMetadata'] = SettingsMetadata.constructFromObject(data['finishReminderMetadata']);
      }
      if (data.hasOwnProperty('guidedFormsHtmlAllowed')) {
        obj['guidedFormsHtmlAllowed'] = ApiClient.convertToType(data['guidedFormsHtmlAllowed'], 'String');
      }
      if (data.hasOwnProperty('guidedFormsHtmlAllowedMetadata')) {
        obj['guidedFormsHtmlAllowedMetadata'] = SettingsMetadata.constructFromObject(data['guidedFormsHtmlAllowedMetadata']);
      }
      if (data.hasOwnProperty('hasRecipientConnectClaimedDomain')) {
        obj['hasRecipientConnectClaimedDomain'] = ApiClient.convertToType(data['hasRecipientConnectClaimedDomain'], 'String');
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
      if (data.hasOwnProperty('idfxKBAAuthenticationOverride')) {
        obj['idfxKBAAuthenticationOverride'] = ApiClient.convertToType(data['idfxKBAAuthenticationOverride'], 'String');
      }
      if (data.hasOwnProperty('idfxKBAAuthenticationOverrideMetadata')) {
        obj['idfxKBAAuthenticationOverrideMetadata'] = SettingsMetadata.constructFromObject(data['idfxKBAAuthenticationOverrideMetadata']);
      }
      if (data.hasOwnProperty('idfxPhoneAuthenticationOverride')) {
        obj['idfxPhoneAuthenticationOverride'] = ApiClient.convertToType(data['idfxPhoneAuthenticationOverride'], 'String');
      }
      if (data.hasOwnProperty('idfxPhoneAuthenticationOverrideMetadata')) {
        obj['idfxPhoneAuthenticationOverrideMetadata'] = SettingsMetadata.constructFromObject(data['idfxPhoneAuthenticationOverrideMetadata']);
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
      if (data.hasOwnProperty('linkedExternalPrimaryAccounts')) {
        obj['linkedExternalPrimaryAccounts'] = ApiClient.convertToType(data['linkedExternalPrimaryAccounts'], [LinkedExternalPrimaryAccount]);
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
      if (data.hasOwnProperty('mergeMixedModeResults')) {
        obj['mergeMixedModeResults'] = ApiClient.convertToType(data['mergeMixedModeResults'], 'String');
      }
      if (data.hasOwnProperty('mergeMixedModeResultsMetadata')) {
        obj['mergeMixedModeResultsMetadata'] = SettingsMetadata.constructFromObject(data['mergeMixedModeResultsMetadata']);
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
      if (data.hasOwnProperty('pdfMaxChunkedUploadPartSize')) {
        obj['pdfMaxChunkedUploadPartSize'] = ApiClient.convertToType(data['pdfMaxChunkedUploadPartSize'], 'String');
      }
      if (data.hasOwnProperty('pdfMaxChunkedUploadPartSizeMetadata')) {
        obj['pdfMaxChunkedUploadPartSizeMetadata'] = SettingsMetadata.constructFromObject(data['pdfMaxChunkedUploadPartSizeMetadata']);
      }
      if (data.hasOwnProperty('pdfMaxChunkedUploadTotalSize')) {
        obj['pdfMaxChunkedUploadTotalSize'] = ApiClient.convertToType(data['pdfMaxChunkedUploadTotalSize'], 'String');
      }
      if (data.hasOwnProperty('pdfMaxChunkedUploadTotalSizeMetadata')) {
        obj['pdfMaxChunkedUploadTotalSizeMetadata'] = SettingsMetadata.constructFromObject(data['pdfMaxChunkedUploadTotalSizeMetadata']);
      }
      if (data.hasOwnProperty('pdfMaxIndividualUploadSize')) {
        obj['pdfMaxIndividualUploadSize'] = ApiClient.convertToType(data['pdfMaxIndividualUploadSize'], 'String');
      }
      if (data.hasOwnProperty('pdfMaxIndividualUploadSizeMetadata')) {
        obj['pdfMaxIndividualUploadSizeMetadata'] = SettingsMetadata.constructFromObject(data['pdfMaxIndividualUploadSizeMetadata']);
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
      if (data.hasOwnProperty('readOnlyMode')) {
        obj['readOnlyMode'] = ApiClient.convertToType(data['readOnlyMode'], 'String');
      }
      if (data.hasOwnProperty('readOnlyModeMetadata')) {
        obj['readOnlyModeMetadata'] = SettingsMetadata.constructFromObject(data['readOnlyModeMetadata']);
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
      if (data.hasOwnProperty('sendLockoutRecipientNotification')) {
        obj['sendLockoutRecipientNotification'] = ApiClient.convertToType(data['sendLockoutRecipientNotification'], 'String');
      }
      if (data.hasOwnProperty('sendLockoutRecipientNotificationMetadata')) {
        obj['sendLockoutRecipientNotificationMetadata'] = SettingsMetadata.constructFromObject(data['sendLockoutRecipientNotificationMetadata']);
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
      if (data.hasOwnProperty('showConditionalRoutingOnSend')) {
        obj['showConditionalRoutingOnSend'] = ApiClient.convertToType(data['showConditionalRoutingOnSend'], 'String');
      }
      if (data.hasOwnProperty('showConditionalRoutingOnSendMetadata')) {
        obj['showConditionalRoutingOnSendMetadata'] = SettingsMetadata.constructFromObject(data['showConditionalRoutingOnSendMetadata']);
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
      if (data.hasOwnProperty('showMaskedFieldsWhenDownloadingDocumentAsSender')) {
        obj['showMaskedFieldsWhenDownloadingDocumentAsSender'] = ApiClient.convertToType(data['showMaskedFieldsWhenDownloadingDocumentAsSender'], 'String');
      }
      if (data.hasOwnProperty('showMaskedFieldsWhenDownloadingDocumentAsSenderMetadata')) {
        obj['showMaskedFieldsWhenDownloadingDocumentAsSenderMetadata'] = SettingsMetadata.constructFromObject(data['showMaskedFieldsWhenDownloadingDocumentAsSenderMetadata']);
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
      if (data.hasOwnProperty('signDateTimeAccountLanguageOverride')) {
        obj['signDateTimeAccountLanguageOverride'] = ApiClient.convertToType(data['signDateTimeAccountLanguageOverride'], 'String');
      }
      if (data.hasOwnProperty('signDateTimeAccountLanguageOverrideMetadata')) {
        obj['signDateTimeAccountLanguageOverrideMetadata'] = SettingsMetadata.constructFromObject(data['signDateTimeAccountLanguageOverrideMetadata']);
      }
      if (data.hasOwnProperty('signDateTimeAccountTimezoneOverride')) {
        obj['signDateTimeAccountTimezoneOverride'] = ApiClient.convertToType(data['signDateTimeAccountTimezoneOverride'], 'String');
      }
      if (data.hasOwnProperty('signDateTimeAccountTimezoneOverrideMetadata')) {
        obj['signDateTimeAccountTimezoneOverrideMetadata'] = SettingsMetadata.constructFromObject(data['signDateTimeAccountTimezoneOverrideMetadata']);
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
      if (data.hasOwnProperty('useEnvelopeSearchMixedMode')) {
        obj['useEnvelopeSearchMixedMode'] = ApiClient.convertToType(data['useEnvelopeSearchMixedMode'], 'String');
      }
      if (data.hasOwnProperty('useEnvelopeSearchMixedModeMetadata')) {
        obj['useEnvelopeSearchMixedModeMetadata'] = SettingsMetadata.constructFromObject(data['useEnvelopeSearchMixedModeMetadata']);
      }
      if (data.hasOwnProperty('useMultiAppGroupsData')) {
        obj['useMultiAppGroupsData'] = ApiClient.convertToType(data['useMultiAppGroupsData'], 'String');
      }
      if (data.hasOwnProperty('useMultiAppGroupsDataMetadata')) {
        obj['useMultiAppGroupsDataMetadata'] = SettingsMetadata.constructFromObject(data['useMultiAppGroupsDataMetadata']);
      }
      if (data.hasOwnProperty('useNewBlobForPdf')) {
        obj['useNewBlobForPdf'] = ApiClient.convertToType(data['useNewBlobForPdf'], 'String');
      }
      if (data.hasOwnProperty('useNewBlobForPdfMetadata')) {
        obj['useNewBlobForPdfMetadata'] = SettingsMetadata.constructFromObject(data['useNewBlobForPdfMetadata']);
      }
      if (data.hasOwnProperty('useNewEnvelopeSearch')) {
        obj['useNewEnvelopeSearch'] = ApiClient.convertToType(data['useNewEnvelopeSearch'], 'String');
      }
      if (data.hasOwnProperty('useNewEnvelopeSearchMetadata')) {
        obj['useNewEnvelopeSearchMetadata'] = SettingsMetadata.constructFromObject(data['useNewEnvelopeSearchMetadata']);
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
      if (data.hasOwnProperty('useSmartContractsV1')) {
        obj['useSmartContractsV1'] = ApiClient.convertToType(data['useSmartContractsV1'], 'String');
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
   * Format of the string provided to a recipient in order to access an envelope.
   * @member {module:model/AccessCodeFormat} accessCodeFormat
   */
  exports.prototype['accessCodeFormat'] = undefined;
  /**
   * 
   * @member {String} accountDateTimeFormat
   */
  exports.prototype['accountDateTimeFormat'] = undefined;
  /**
   * Metadata that indicates whether the `accountDateTimeFormat` property is editable.
   * @member {module:model/SettingsMetadata} accountDateTimeFormatMetadata
   */
  exports.prototype['accountDateTimeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} accountDefaultLanguage
   */
  exports.prototype['accountDefaultLanguage'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} accountDefaultLanguageMetadata
   */
  exports.prototype['accountDefaultLanguageMetadata'] = undefined;
  /**
   * 
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * Metadata that indicates whether the `accountName` property is editable.
   * @member {module:model/SettingsMetadata} accountNameMetadata
   */
  exports.prototype['accountNameMetadata'] = undefined;
  /**
   * An object that specifies notifications (expirations and reminders) for the envelope.
   * @member {module:model/AccountNotification} accountNotification
   */
  exports.prototype['accountNotification'] = undefined;
  /**
   * An object that defines the settings to use in the UI.
   * @member {module:model/AccountUISettings} accountUISettings
   */
  exports.prototype['accountUISettings'] = undefined;
  /**
   * 
   * @member {String} adoptSigConfig
   */
  exports.prototype['adoptSigConfig'] = undefined;
  /**
   * Metadata that indicates whether the `adoptSigConfig` property is editable. 
   * @member {module:model/SettingsMetadata} adoptSigConfigMetadata
   */
  exports.prototype['adoptSigConfigMetadata'] = undefined;
  /**
   * 
   * @member {String} advancedCorrect
   */
  exports.prototype['advancedCorrect'] = undefined;
  /**
   * Metadata that indicates whether the `advancedCorrect` property is editable. 
   * @member {module:model/SettingsMetadata} advancedCorrectMetadata
   */
  exports.prototype['advancedCorrectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAccessCodeFormat
   */
  exports.prototype['allowAccessCodeFormat'] = undefined;
  /**
   * Metadata that indicates whether the `allowAccessCodeFormat` property is editable. 
   * @member {module:model/SettingsMetadata} allowAccessCodeFormatMetadata
   */
  exports.prototype['allowAccessCodeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAccountManagementGranular
   */
  exports.prototype['allowAccountManagementGranular'] = undefined;
  /**
   * Metadata that indicates whether the `allowAccountManagementGranular` property is editable. 
   * @member {module:model/SettingsMetadata} allowAccountManagementGranularMetadata
   */
  exports.prototype['allowAccountManagementGranularMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAccountMemberNameChange
   */
  exports.prototype['allowAccountMemberNameChange'] = undefined;
  /**
   * Metadata that indicates whether the `allowAccountMemberNameChange` property is editable. 
   * @member {module:model/SettingsMetadata} allowAccountMemberNameChangeMetadata
   */
  exports.prototype['allowAccountMemberNameChangeMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAdvancedRecipientRoutingConditional
   */
  exports.prototype['allowAdvancedRecipientRoutingConditional'] = undefined;
  /**
   * Metadata that indicates whether the ` allowAdvancedRecipientRoutingConditional` property is editable.
   * @member {module:model/SettingsMetadata} allowAdvancedRecipientRoutingConditionalMetadata
   */
  exports.prototype['allowAdvancedRecipientRoutingConditionalMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAgentNameEmailEdit
   */
  exports.prototype['allowAgentNameEmailEdit'] = undefined;
  /**
   * Metadata that indicates whether the `allowAgentNameEmailEdit` property is editable. 
   * @member {module:model/SettingsMetadata} allowAgentNameEmailEditMetadata
   */
  exports.prototype['allowAgentNameEmailEditMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAgreementActions
   */
  exports.prototype['allowAgreementActions'] = undefined;
  /**
   * Metadata about the `allowAgreementActions` property.
   * @member {module:model/SettingsMetadata} allowAgreementActionsMetadata
   */
  exports.prototype['allowAgreementActionsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAgreementOrchestrationWorkflows
   */
  exports.prototype['allowAgreementOrchestrationWorkflows'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowAgreementOrchestrationWorkflowsMetadata
   */
  exports.prototype['allowAgreementOrchestrationWorkflowsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowAutoNavSettings
   */
  exports.prototype['allowAutoNavSettings'] = undefined;
  /**
   * Metadata that indicates whether the `allowAutoNavSettings` property is editable. 
   * @member {module:model/SettingsMetadata} allowAutoNavSettingsMetadata
   */
  exports.prototype['allowAutoNavSettingsMetadata'] = undefined;
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
   * @member {String} allowBulkSend
   */
  exports.prototype['allowBulkSend'] = undefined;
  /**
   * Metadata that indicates whether the `allowBulkSend` property is editable. 
   * @member {module:model/SettingsMetadata} allowBulkSendMetadata
   */
  exports.prototype['allowBulkSendMetadata'] = undefined;
  /**
   * 
   * @member {String} allowCDWithdraw
   */
  exports.prototype['allowCDWithdraw'] = undefined;
  /**
   * Metadata that indicates whether the `allowCDWithdraw` property is editable. 
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
   * @member {String} allowConnectOAuthUI
   */
  exports.prototype['allowConnectOAuthUI'] = undefined;
  /**
   * 
   * @member {String} allowConnectSendFinishLater
   */
  exports.prototype['allowConnectSendFinishLater'] = undefined;
  /**
   * Metadata that indicates whether the `allowConnectSendFinishLater` property is editable. 
   * @member {module:model/SettingsMetadata} allowConnectSendFinishLaterMetadata
   */
  exports.prototype['allowConnectSendFinishLaterMetadata'] = undefined;
  /**
   * 
   * @member {String} allowConnectUnifiedPayloadUI
   */
  exports.prototype['allowConnectUnifiedPayloadUI'] = undefined;
  /**
   * 
   * @member {String} allowConsumerDisclosureOverride
   */
  exports.prototype['allowConsumerDisclosureOverride'] = undefined;
  /**
   * Metadata that indicates whether the `allowConsumerDisclosureOverride` property is editable. 
   * @member {module:model/SettingsMetadata} allowConsumerDisclosureOverrideMetadata
   */
  exports.prototype['allowConsumerDisclosureOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDataDownload
   */
  exports.prototype['allowDataDownload'] = undefined;
  /**
   * Metadata that indicates whether the `allowDataDownload` property is editable. 
   * @member {module:model/SettingsMetadata} allowDataDownloadMetadata
   */
  exports.prototype['allowDataDownloadMetadata'] = undefined;
  /**
   * \\\"true\\\" if the account has permission to use the delayed routing feature to insert delays before routing an envelope to a recipient, \\\"false\\\" otherwise.
   * @member {String} allowDelayedRouting
   */
  exports.prototype['allowDelayedRouting'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowDelayedRoutingMetadata
   */
  exports.prototype['allowDelayedRoutingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDelegatedSigning
   */
  exports.prototype['allowDelegatedSigning'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowDelegatedSigningMetadata
   */
  exports.prototype['allowDelegatedSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocGenDocuments
   */
  exports.prototype['allowDocGenDocuments'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowDocGenDocumentsMetadata
   */
  exports.prototype['allowDocGenDocumentsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocumentDisclosures
   */
  exports.prototype['allowDocumentDisclosures'] = undefined;
  /**
   * Metadata that indicates whether the `allowDocumentDisclosures` property is editable. 
   * @member {module:model/SettingsMetadata} allowDocumentDisclosuresMetadata
   */
  exports.prototype['allowDocumentDisclosuresMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocumentsOnSignedEnvelopes
   */
  exports.prototype['allowDocumentsOnSignedEnvelopes'] = undefined;
  /**
   * Metadata that indicates whether the `allowDocumentsOnSignedEnvelopes` property is editable. 
   * @member {module:model/SettingsMetadata} allowDocumentsOnSignedEnvelopesMetadata
   */
  exports.prototype['allowDocumentsOnSignedEnvelopesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowDocumentVisibility
   */
  exports.prototype['allowDocumentVisibility'] = undefined;
  /**
   * Metadata that indicates whether the `allowDocumentVisibility` property is editable. 
   * @member {module:model/SettingsMetadata} allowDocumentVisibilityMetadata
   */
  exports.prototype['allowDocumentVisibilityMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEHankoStamps
   */
  exports.prototype['allowEHankoStamps'] = undefined;
  /**
   * Metadata that indicates whether the `allowEHankoStamps` property is editable. 
   * @member {module:model/SettingsMetadata} allowEHankoStampsMetadata
   */
  exports.prototype['allowEHankoStampsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowENoteEOriginal
   */
  exports.prototype['allowENoteEOriginal'] = undefined;
  /**
   * Metadata that indicates whether the `allowENoteEOriginal` property is editable. 
   * @member {module:model/SettingsMetadata} allowENoteEOriginalMetadata
   */
  exports.prototype['allowENoteEOriginalMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeCorrect
   */
  exports.prototype['allowEnvelopeCorrect'] = undefined;
  /**
   * Metadata that indicates whether the `allowEnvelopeCorrect` property is editable. 
   * @member {module:model/SettingsMetadata} allowEnvelopeCorrectMetadata
   */
  exports.prototype['allowEnvelopeCorrectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeCustodyTransfer
   */
  exports.prototype['allowEnvelopeCustodyTransfer'] = undefined;
  /**
   * Metadata that indicates whether the `allowEnvelopeCustodyTransfer` property is editable. 
   * @member {module:model/SettingsMetadata} allowEnvelopeCustodyTransferMetadata
   */
  exports.prototype['allowEnvelopeCustodyTransferMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeCustomFields
   */
  exports.prototype['allowEnvelopeCustomFields'] = undefined;
  /**
   * Metadata that indicates whether the `allowEnvelopeCustomFields` property is editable. 
   * @member {module:model/SettingsMetadata} allowEnvelopeCustomFieldsMetadata
   */
  exports.prototype['allowEnvelopeCustomFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopePublishReporting
   */
  exports.prototype['allowEnvelopePublishReporting'] = undefined;
  /**
   * Metadata that indicates whether the `allowEnvelopePublishReporting` property is editable. 
   * @member {module:model/SettingsMetadata} allowEnvelopePublishReportingMetadata
   */
  exports.prototype['allowEnvelopePublishReportingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowEnvelopeReporting
   */
  exports.prototype['allowEnvelopeReporting'] = undefined;
  /**
   * Metadata that indicates whether the `allowEnvelopeReporting` property is editable. 
   * @member {module:model/SettingsMetadata} allowEnvelopeReportingMetadata
   */
  exports.prototype['allowEnvelopeReportingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExpression
   */
  exports.prototype['allowExpression'] = undefined;
  /**
   * Metadata that indicates whether the `allowExpression` property is editable. 
   * @member {module:model/SettingsMetadata} allowExpressionMetadata
   */
  exports.prototype['allowExpressionMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExpressSignerCertificate
   */
  exports.prototype['allowExpressSignerCertificate'] = undefined;
  /**
   * Metadata that indicates whether the `allowExpressSignerCertificate` property is editable. 
   * @member {module:model/SettingsMetadata} allowExpressSignerCertificateMetadata
   */
  exports.prototype['allowExpressSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExtendedSendingResourceFile
   */
  exports.prototype['allowExtendedSendingResourceFile'] = undefined;
  /**
   * Metadata that indicates whether the `allowExtendedSendingResourceFile` property is editable. 
   * @member {module:model/SettingsMetadata} allowExtendedSendingResourceFileMetadata
   */
  exports.prototype['allowExtendedSendingResourceFileMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExternalLinkedAccounts
   */
  exports.prototype['allowExternalLinkedAccounts'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowExternalLinkedAccountsMetadata
   */
  exports.prototype['allowExternalLinkedAccountsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowExternalSignaturePad
   */
  exports.prototype['allowExternalSignaturePad'] = undefined;
  /**
   * Metadata that indicates whether the `allowExternalSignaturePad` property is editable. 
   * @member {module:model/SettingsMetadata} allowExternalSignaturePadMetadata
   */
  exports.prototype['allowExternalSignaturePadMetadata'] = undefined;
  /**
   * 
   * @member {String} allowIDVForEUQualifiedSignatures
   */
  exports.prototype['allowIDVForEUQualifiedSignatures'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowIDVForEUQualifiedSignaturesMetadata
   */
  exports.prototype['allowIDVForEUQualifiedSignaturesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowIDVLevel1
   */
  exports.prototype['allowIDVLevel1'] = undefined;
  /**
   * Metadata that indicates whether the `allowIDVLevel1` property is editable.
   * @member {module:model/SettingsMetadata} allowIDVLevel1Metadata
   */
  exports.prototype['allowIDVLevel1Metadata'] = undefined;
  /**
   * 
   * @member {String} allowIDVLevel2
   */
  exports.prototype['allowIDVLevel2'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowIDVLevel2Metadata
   */
  exports.prototype['allowIDVLevel2Metadata'] = undefined;
  /**
   * 
   * @member {String} allowIDVLevel3
   */
  exports.prototype['allowIDVLevel3'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowIDVLevel3Metadata
   */
  exports.prototype['allowIDVLevel3Metadata'] = undefined;
  /**
   * 
   * @member {String} allowIDVPlatform
   */
  exports.prototype['allowIDVPlatform'] = undefined;
  /**
   * Metadata that indicates whether the `allowIDVPlatform` property is editable.
   * @member {module:model/SettingsMetadata} allowIDVPlatformMetadata
   */
  exports.prototype['allowIDVPlatformMetadata'] = undefined;
  /**
   * 
   * @member {String} allowInPerson
   */
  exports.prototype['allowInPerson'] = undefined;
  /**
   * Account Level Flag that determines the availability to perform In Person Electronic Notarial (IPEN) actions
   * @member {String} allowInPersonElectronicNotary
   */
  exports.prototype['allowInPersonElectronicNotary'] = undefined;
  /**
   * MetaData for the allowInPersonElectronicNotary flag
   * @member {module:model/SettingsMetadata} allowInPersonElectronicNotaryMetadata
   */
  exports.prototype['allowInPersonElectronicNotaryMetadata'] = undefined;
  /**
   * Metadata that indicates whether the `allowInPerson` property is editable. 
   * @member {module:model/SettingsMetadata} allowInPersonMetadata
   */
  exports.prototype['allowInPersonMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManagedStamps
   */
  exports.prototype['allowManagedStamps'] = undefined;
  /**
   * Metadata that indicates whether the `allowManagedStamps` property is editable. 
   * @member {module:model/SettingsMetadata} allowManagedStampsMetadata
   */
  exports.prototype['allowManagedStampsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowManagingEnvelopesOnBehalfOfOthers
   */
  exports.prototype['allowManagingEnvelopesOnBehalfOfOthers'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowManagingEnvelopesOnBehalfOfOthersMetadata
   */
  exports.prototype['allowManagingEnvelopesOnBehalfOfOthersMetadata'] = undefined;
  /**
   * When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
   * @member {String} allowMarkup
   */
  exports.prototype['allowMarkup'] = undefined;
  /**
   * Metadata that indicates whether the `allowMarkup` property is editable. 
   * @member {module:model/SettingsMetadata} allowMarkupMetadata
   */
  exports.prototype['allowMarkupMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMemberTimeZone
   */
  exports.prototype['allowMemberTimeZone'] = undefined;
  /**
   * Metadata that indicates whether the `allowMemberTimeZone` property is editable. 
   * @member {module:model/SettingsMetadata} allowMemberTimeZoneMetadata
   */
  exports.prototype['allowMemberTimeZoneMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMergeFields
   */
  exports.prototype['allowMergeFields'] = undefined;
  /**
   * Metadata that indicates whether the `allowMergeFields` property is editable. 
   * @member {module:model/SettingsMetadata} allowMergeFieldsMetadata
   */
  exports.prototype['allowMergeFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMultipleBrandProfiles
   */
  exports.prototype['allowMultipleBrandProfiles'] = undefined;
  /**
   * Metadata that indicates whether the `allowMultipleBrandProfiles` property is editable. 
   * @member {module:model/SettingsMetadata} allowMultipleBrandProfilesMetadata
   */
  exports.prototype['allowMultipleBrandProfilesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowMultipleSignerAttachments
   */
  exports.prototype['allowMultipleSignerAttachments'] = undefined;
  /**
   * Metadata that indicates whether the `allowMultipleSignerAttachments` property is editable. 
   * @member {module:model/SettingsMetadata} allowMultipleSignerAttachmentsMetadata
   */
  exports.prototype['allowMultipleSignerAttachmentsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowNonUSPhoneAuth
   */
  exports.prototype['allowNonUSPhoneAuth'] = undefined;
  /**
   * Metadata that indicates whether the `allowNonUSPhoneAuth` property is editable. 
   * @member {module:model/SettingsMetadata} allowNonUSPhoneAuthMetadata
   */
  exports.prototype['allowNonUSPhoneAuthMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOcrOfEnvelopeDocuments
   */
  exports.prototype['allowOcrOfEnvelopeDocuments'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowOcrOfEnvelopeDocumentsMetadata
   */
  exports.prototype['allowOcrOfEnvelopeDocumentsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOfflineSigning
   */
  exports.prototype['allowOfflineSigning'] = undefined;
  /**
   * Metadata that indicates whether the `allowOfflineSigning` property is editable. 
   * @member {module:model/SettingsMetadata} allowOfflineSigningMetadata
   */
  exports.prototype['allowOfflineSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOpenTrustSignerCertificate
   */
  exports.prototype['allowOpenTrustSignerCertificate'] = undefined;
  /**
   * Metadata that indicates whether the `allowOpenTrustSignerCertificate` property is editable. 
   * @member {module:model/SettingsMetadata} allowOpenTrustSignerCertificateMetadata
   */
  exports.prototype['allowOpenTrustSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOrganizationDocusignMonitor
   */
  exports.prototype['allowOrganizationDocusignMonitor'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowOrganizationDocusignMonitorMetadata
   */
  exports.prototype['allowOrganizationDocusignMonitorMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOrganizationDomainUserManagement
   */
  exports.prototype['allowOrganizationDomainUserManagement'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowOrganizationDomainUserManagementMetadata
   */
  exports.prototype['allowOrganizationDomainUserManagementMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOrganizations
   */
  exports.prototype['allowOrganizations'] = undefined;
  /**
   * Metadata that indicates whether the `allowOrganizations` property is editable. 
   * @member {module:model/SettingsMetadata} allowOrganizationsMetadata
   */
  exports.prototype['allowOrganizationsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOrganizationSsoManagement
   */
  exports.prototype['allowOrganizationSsoManagement'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowOrganizationSsoManagementMetadata
   */
  exports.prototype['allowOrganizationSsoManagementMetadata'] = undefined;
  /**
   * Organization Level Flag that determines the availability to perform In Person Electronic Notarial (IPEN) actions
   * @member {String} allowOrganizationToUseInPersonElectronicNotary
   */
  exports.prototype['allowOrganizationToUseInPersonElectronicNotary'] = undefined;
  /**
   * MetaData for the allowOrganizationToUseInPersonElectronicNotary flag
   * @member {module:model/SettingsMetadata} allowOrganizationToUseInPersonElectronicNotaryMetadata
   */
  exports.prototype['allowOrganizationToUseInPersonElectronicNotaryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowOrganizationToUseRemoteNotary
   */
  exports.prototype['allowOrganizationToUseRemoteNotary'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowOrganizationToUseRemoteNotaryMetadata
   */
  exports.prototype['allowOrganizationToUseRemoteNotaryMetadata'] = undefined;
  /**
   * Org level flag that determines the abailability to perform Third Party Notary (3PN) actions.
   * @member {String} allowOrganizationToUseThirdPartyElectronicNotary
   */
  exports.prototype['allowOrganizationToUseThirdPartyElectronicNotary'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowOrganizationToUseThirdPartyElectronicNotaryMetadata
   */
  exports.prototype['allowOrganizationToUseThirdPartyElectronicNotaryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowParticipantRecipientType
   */
  exports.prototype['allowParticipantRecipientType'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowParticipantRecipientTypeMetadata
   */
  exports.prototype['allowParticipantRecipientTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPaymentProcessing
   */
  exports.prototype['allowPaymentProcessing'] = undefined;
  /**
   * Metadata that indicates whether the `allowPaymentProcessing` property is editable. 
   * @member {module:model/SettingsMetadata} allowPaymentProcessingMetadata
   */
  exports.prototype['allowPaymentProcessingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPerformanceAnalytics
   */
  exports.prototype['allowPerformanceAnalytics'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowPerformanceAnalyticsMetadata
   */
  exports.prototype['allowPerformanceAnalyticsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPhoneAuthentication
   */
  exports.prototype['allowPhoneAuthentication'] = undefined;
  /**
   * Metadata that indicates whether the `allowPhoneAuthentication` property is editable. 
   * @member {module:model/SettingsMetadata} allowPhoneAuthenticationMetadata
   */
  exports.prototype['allowPhoneAuthenticationMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPhoneAuthOverride
   */
  exports.prototype['allowPhoneAuthOverride'] = undefined;
  /**
   * Metadata that indicates whether the `allowPhoneAuthOverride` property is editable. 
   * @member {module:model/SettingsMetadata} allowPhoneAuthOverrideMetadata
   */
  exports.prototype['allowPhoneAuthOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} allowPrivateSigningGroups
   */
  exports.prototype['allowPrivateSigningGroups'] = undefined;
  /**
   * Metadata that indicates whether the `allowPrivateSigningGroups` property is editable. 
   * @member {module:model/SettingsMetadata} allowPrivateSigningGroupsMetadata
   */
  exports.prototype['allowPrivateSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowRecipientConnect
   */
  exports.prototype['allowRecipientConnect'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowRecipientConnectMetadata
   */
  exports.prototype['allowRecipientConnectMetadata'] = undefined;
  /**
   * 
   * @member {String} allowReminders
   */
  exports.prototype['allowReminders'] = undefined;
  /**
   * Metadata that indicates whether the `allowReminders` property is editable. 
   * @member {module:model/SettingsMetadata} allowRemindersMetadata
   */
  exports.prototype['allowRemindersMetadata'] = undefined;
  /**
   * 
   * @member {String} allowRemoteNotary
   */
  exports.prototype['allowRemoteNotary'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowRemoteNotaryMetadata
   */
  exports.prototype['allowRemoteNotaryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowResourceFileBranding
   */
  exports.prototype['allowResourceFileBranding'] = undefined;
  /**
   * Metadata that indicates whether the `allowResourceFileBranding` property is editable. 
   * @member {module:model/SettingsMetadata} allowResourceFileBrandingMetadata
   */
  exports.prototype['allowResourceFileBrandingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSafeBioPharmaSignerCertificate
   */
  exports.prototype['allowSafeBioPharmaSignerCertificate'] = undefined;
  /**
   * Metadata that indicates whether the `allowSafeBioPharmaSignerCertificate` property is editable. 
   * @member {module:model/SettingsMetadata} allowSafeBioPharmaSignerCertificateMetadata
   */
  exports.prototype['allowSafeBioPharmaSignerCertificateMetadata'] = undefined;
  /**
   * \\\"true\\\" if the account has permission to use the scheduled sending feature to send envelopes at a specified datetime in the future, \\\"false\\\" otherwise.
   * @member {String} allowScheduledSending
   */
  exports.prototype['allowScheduledSending'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowScheduledSendingMetadata
   */
  exports.prototype['allowScheduledSendingMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSecurityAppliance
   */
  exports.prototype['allowSecurityAppliance'] = undefined;
  /**
   * Metadata that indicates whether the `allowSecurityAppliance` property is editable. 
   * @member {module:model/SettingsMetadata} allowSecurityApplianceMetadata
   */
  exports.prototype['allowSecurityApplianceMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSendingEnvelopesOnBehalfOfOthers
   */
  exports.prototype['allowSendingEnvelopesOnBehalfOfOthers'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowSendingEnvelopesOnBehalfOfOthersMetadata
   */
  exports.prototype['allowSendingEnvelopesOnBehalfOfOthersMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSendToCertifiedDelivery
   */
  exports.prototype['allowSendToCertifiedDelivery'] = undefined;
  /**
   * Metadata that indicates whether the `allowSendToCertifiedDelivery` property is editable. 
   * @member {module:model/SettingsMetadata} allowSendToCertifiedDeliveryMetadata
   */
  exports.prototype['allowSendToCertifiedDeliveryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSendToIntermediary
   */
  exports.prototype['allowSendToIntermediary'] = undefined;
  /**
   * Metadata that indicates whether the `allowSendToIntermediary` property is editable. 
   * @member {module:model/SettingsMetadata} allowSendToIntermediaryMetadata
   */
  exports.prototype['allowSendToIntermediaryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowServerTemplates
   */
  exports.prototype['allowServerTemplates'] = undefined;
  /**
   * Metadata that indicates whether the `allowServerTemplates` property is editable. 
   * @member {module:model/SettingsMetadata} allowServerTemplatesMetadata
   */
  exports.prototype['allowServerTemplatesMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSetEmbeddedRecipientStartURL
   */
  exports.prototype['allowSetEmbeddedRecipientStartURL'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowSetEmbeddedRecipientStartURLMetadata
   */
  exports.prototype['allowSetEmbeddedRecipientStartURLMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSharedTabs
   */
  exports.prototype['allowSharedTabs'] = undefined;
  /**
   * Metadata that indicates whether the `allowSharedTabs` property is editable. 
   * @member {module:model/SettingsMetadata} allowSharedTabsMetadata
   */
  exports.prototype['allowSharedTabsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignatureStamps
   */
  exports.prototype['allowSignatureStamps'] = undefined;
  /**
   * Metadata that indicates whether the `allowSignatureStamps` property is editable. 
   * @member {module:model/SettingsMetadata} allowSignatureStampsMetadata
   */
  exports.prototype['allowSignatureStampsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignDocumentFromHomePage
   */
  exports.prototype['allowSignDocumentFromHomePage'] = undefined;
  /**
   * Metadata that indicates whether the `allowSignDocumentFromHomePage` property is editable. 
   * @member {module:model/SettingsMetadata} allowSignDocumentFromHomePageMetadata
   */
  exports.prototype['allowSignDocumentFromHomePageMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignerReassign
   */
  exports.prototype['allowSignerReassign'] = undefined;
  /**
   * Metadata that indicates whether the `allowSignerReassign` property is editable. 
   * @member {module:model/SettingsMetadata} allowSignerReassignMetadata
   */
  exports.prototype['allowSignerReassignMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSignerReassignOverride
   */
  exports.prototype['allowSignerReassignOverride'] = undefined;
  /**
   * Metadata that indicates whether the `allowSignerReassignOverride` property is editable. 
   * @member {module:model/SettingsMetadata} allowSignerReassignOverrideMetadata
   */
  exports.prototype['allowSignerReassignOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSigningExtensions
   */
  exports.prototype['allowSigningExtensions'] = undefined;
  /**
   * Metadata that indicates whether the `allowSigningExtensions` property is editable. 
   * @member {module:model/SettingsMetadata} allowSigningExtensionsMetadata
   */
  exports.prototype['allowSigningExtensionsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSigningGroups
   */
  exports.prototype['allowSigningGroups'] = undefined;
  /**
   * Metadata that indicates whether the `allowSigningGroups` property is editable. 
   * @member {module:model/SettingsMetadata} allowSigningGroupsMetadata
   */
  exports.prototype['allowSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSigningInsights
   */
  exports.prototype['allowSigningInsights'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowSigningInsightsMetadata
   */
  exports.prototype['allowSigningInsightsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSigningRadioDeselect
   */
  exports.prototype['allowSigningRadioDeselect'] = undefined;
  /**
   * Metadata that indicates whether the `allowSigningRadioDeselect` property is editable. 
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
   * @member {String} allowSMSDelivery
   */
  exports.prototype['allowSMSDelivery'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowSMSDeliveryMetadata
   */
  exports.prototype['allowSMSDeliveryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowSocialIdLogin
   */
  exports.prototype['allowSocialIdLogin'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/SettingsMetadata} allowSocialIdLoginMetadata
   */
  exports.prototype['allowSocialIdLoginMetadata'] = undefined;
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
   * Account level flag that determines the availability to perform Third Party Notary (3PN) actions.
   * @member {String} allowThirdPartyElectronicNotary
   */
  exports.prototype['allowThirdPartyElectronicNotary'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowThirdPartyElectronicNotaryMetadata
   */
  exports.prototype['allowThirdPartyElectronicNotaryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowUsersToAccessDirectory
   */
  exports.prototype['allowUsersToAccessDirectory'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowUsersToAccessDirectoryMetadata
   */
  exports.prototype['allowUsersToAccessDirectoryMetadata'] = undefined;
  /**
   * 
   * @member {String} allowValueInsights
   */
  exports.prototype['allowValueInsights'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} allowValueInsightsMetadata
   */
  exports.prototype['allowValueInsightsMetadata'] = undefined;
  /**
   * 
   * @member {String} allowWebForms
   */
  exports.prototype['allowWebForms'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} allowWebFormsMetadata
   */
  exports.prototype['allowWebFormsMetadata'] = undefined;
  /**
   * 
   * @member {String} anchorPopulationScope
   */
  exports.prototype['anchorPopulationScope'] = undefined;
  /**
   * Metadata that indicates whether the `anchorPopulationScope` property is editable. 
   * @member {module:model/SettingsMetadata} anchorPopulationScopeMetadata
   */
  exports.prototype['anchorPopulationScopeMetadata'] = undefined;
  /**
   * 
   * @member {String} anchorTagVersionedPlacementEnabled
   */
  exports.prototype['anchorTagVersionedPlacementEnabled'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} anchorTagVersionedPlacementMetadataEnabled
   */
  exports.prototype['anchorTagVersionedPlacementMetadataEnabled'] = undefined;
  /**
   * 
   * @member {String} attachCompletedEnvelope
   */
  exports.prototype['attachCompletedEnvelope'] = undefined;
  /**
   * Metadata that indicates whether the `attachCompletedEnvelope` property is editable.
   * @member {module:model/SettingsMetadata} attachCompletedEnvelopeMetadata
   */
  exports.prototype['attachCompletedEnvelopeMetadata'] = undefined;
  /**
   * 
   * @member {String} authenticationCheck
   */
  exports.prototype['authenticationCheck'] = undefined;
  /**
   * Metadata that indicates whether the `authenticationCheck` property is editable. 
   * @member {module:model/SettingsMetadata} authenticationCheckMetadata
   */
  exports.prototype['authenticationCheckMetadata'] = undefined;
  /**
   * 
   * @member {String} autoNavRule
   */
  exports.prototype['autoNavRule'] = undefined;
  /**
   * Metadata that indicates whether the `autoNavRule` property is editable. 
   * @member {module:model/SettingsMetadata} autoNavRuleMetadata
   */
  exports.prototype['autoNavRuleMetadata'] = undefined;
  /**
   * 
   * @member {String} autoProvisionSignerAccount
   */
  exports.prototype['autoProvisionSignerAccount'] = undefined;
  /**
   * Metadata that indicates whether the `autoProvisionSignerAccount` property is editable. 
   * @member {module:model/SettingsMetadata} autoProvisionSignerAccountMetadata
   */
  exports.prototype['autoProvisionSignerAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} bccEmailArchive
   */
  exports.prototype['bccEmailArchive'] = undefined;
  /**
   * Metadata that indicates whether the `bccEmailArchive` property is editable. 
   * @member {module:model/SettingsMetadata} bccEmailArchiveMetadata
   */
  exports.prototype['bccEmailArchiveMetadata'] = undefined;
  /**
   * 
   * @member {String} betaSwitchConfiguration
   */
  exports.prototype['betaSwitchConfiguration'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} betaSwitchConfigurationMetadata
   */
  exports.prototype['betaSwitchConfigurationMetadata'] = undefined;
  /**
   * The billing address for the account.
   * @member {module:model/AddressInformation} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
  /**
   * Metadata that indicates whether the `billingAddress` property is editable. 
   * @member {module:model/SettingsMetadata} billingAddressMetadata
   */
  exports.prototype['billingAddressMetadata'] = undefined;
  /**
   * 
   * @member {String} bulkSend
   */
  exports.prototype['bulkSend'] = undefined;
  /**
   * 
   * @member {String} bulkSendActionResendLimit
   */
  exports.prototype['bulkSendActionResendLimit'] = undefined;
  /**
   * 
   * @member {String} bulkSendMaxCopiesInBatch
   */
  exports.prototype['bulkSendMaxCopiesInBatch'] = undefined;
  /**
   * 
   * @member {String} bulkSendMaxUnprocessedEnvelopesCount
   */
  exports.prototype['bulkSendMaxUnprocessedEnvelopesCount'] = undefined;
  /**
   * Metadata that indicates whether the `bulkSend` property is editable. 
   * @member {module:model/SettingsMetadata} bulkSendMetadata
   */
  exports.prototype['bulkSendMetadata'] = undefined;
  /**
   * 
   * @member {String} canSelfBrandSend
   */
  exports.prototype['canSelfBrandSend'] = undefined;
  /**
   * Metadata that indicates whether the `canSelfBrandSend` property is editable. 
   * @member {module:model/SettingsMetadata} canSelfBrandSendMetadata
   */
  exports.prototype['canSelfBrandSendMetadata'] = undefined;
  /**
   * 
   * @member {String} canSelfBrandSign
   */
  exports.prototype['canSelfBrandSign'] = undefined;
  /**
   * Metadata that indicates whether the `canSelfBrandSign` property is editable. 
   * @member {module:model/SettingsMetadata} canSelfBrandSignMetadata
   */
  exports.prototype['canSelfBrandSignMetadata'] = undefined;
  /**
   * 
   * @member {String} canUseSalesforceOAuth
   */
  exports.prototype['canUseSalesforceOAuth'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} canUseSalesforceOAuthMetadata
   */
  exports.prototype['canUseSalesforceOAuthMetadata'] = undefined;
  /**
   * 
   * @member {String} captureVoiceRecording
   */
  exports.prototype['captureVoiceRecording'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} captureVoiceRecordingMetadata
   */
  exports.prototype['captureVoiceRecordingMetadata'] = undefined;
  /**
   * 
   * @member {String} cfr21SimplifiedSigningEnabled
   */
  exports.prototype['cfr21SimplifiedSigningEnabled'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} cfr21SimplifiedSigningEnabledMetadata
   */
  exports.prototype['cfr21SimplifiedSigningEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} cfrUseWideImage
   */
  exports.prototype['cfrUseWideImage'] = undefined;
  /**
   * Metadata that indicates whether the `cfrUseWideImage` property is editable. 
   * @member {module:model/SettingsMetadata} cfrUseWideImageMetadata
   */
  exports.prototype['cfrUseWideImageMetadata'] = undefined;
  /**
   * 
   * @member {String} checkForMultipleAdminsOnAccount
   */
  exports.prototype['checkForMultipleAdminsOnAccount'] = undefined;
  /**
   * Metadata that indicates whether the `checkForMultipleAdminsOnAccount` property is editable.
   * @member {module:model/SettingsMetadata} checkForMultipleAdminsOnAccountMetadata
   */
  exports.prototype['checkForMultipleAdminsOnAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} chromeSignatureEnabled
   */
  exports.prototype['chromeSignatureEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `chromeSignatureEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} chromeSignatureEnabledMetadata
   */
  exports.prototype['chromeSignatureEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} commentEmailShowMessageText
   */
  exports.prototype['commentEmailShowMessageText'] = undefined;
  /**
   * Metadata that indicates whether the `commentEmailShowMessageText` property is editable. 
   * @member {module:model/SettingsMetadata} commentEmailShowMessageTextMetadata
   */
  exports.prototype['commentEmailShowMessageTextMetadata'] = undefined;
  /**
   * 
   * @member {String} commentsAllowEnvelopeOverride
   */
  exports.prototype['commentsAllowEnvelopeOverride'] = undefined;
  /**
   * Metadata that indicates whether the `commentsAllowEnvelopeOverride` property is editable. 
   * @member {module:model/SettingsMetadata} commentsAllowEnvelopeOverrideMetadata
   */
  exports.prototype['commentsAllowEnvelopeOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} conditionalFieldsEnabled
   */
  exports.prototype['conditionalFieldsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `conditionalFieldsEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} conditionalFieldsEnabledMetadata
   */
  exports.prototype['conditionalFieldsEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} consumerDisclosureFrequency
   */
  exports.prototype['consumerDisclosureFrequency'] = undefined;
  /**
   * Metadata that indicates whether the `consumerDisclosureFrequency` property is editable. 
   * @member {module:model/SettingsMetadata} consumerDisclosureFrequencyMetadata
   */
  exports.prototype['consumerDisclosureFrequencyMetadata'] = undefined;
  /**
   * 
   * @member {String} convertPdfFields
   */
  exports.prototype['convertPdfFields'] = undefined;
  /**
   * Metadata that indicates whether the `convertPdfFields` property is editable. 
   * @member {module:model/SettingsMetadata} convertPdfFieldsMetadata
   */
  exports.prototype['convertPdfFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} dataPopulationScope
   */
  exports.prototype['dataPopulationScope'] = undefined;
  /**
   * Metadata that indicates whether the `dataPopulationScope` property is editable. 
   * @member {module:model/SettingsMetadata} dataPopulationScopeMetadata
   */
  exports.prototype['dataPopulationScopeMetadata'] = undefined;
  /**
   * 
   * @member {String} disableAutoTemplateMatching
   */
  exports.prototype['disableAutoTemplateMatching'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} disableAutoTemplateMatchingMetadata
   */
  exports.prototype['disableAutoTemplateMatchingMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMobileApp
   */
  exports.prototype['disableMobileApp'] = undefined;
  /**
   * Metadata that indicates whether the `disableMobileApp` property is editable. 
   * @member {module:model/SettingsMetadata} disableMobileAppMetadata
   */
  exports.prototype['disableMobileAppMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMobilePushNotifications
   */
  exports.prototype['disableMobilePushNotifications'] = undefined;
  /**
   * Metadata that indicates whether the `disableMobilePushNotifications` property is editable. 
   * @member {module:model/SettingsMetadata} disableMobilePushNotificationsMetadata
   */
  exports.prototype['disableMobilePushNotificationsMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMobileSending
   */
  exports.prototype['disableMobileSending'] = undefined;
  /**
   * Metadata that indicates whether the `disableMobileSending` property is editable. 
   * @member {module:model/SettingsMetadata} disableMobileSendingMetadata
   */
  exports.prototype['disableMobileSendingMetadata'] = undefined;
  /**
   * 
   * @member {String} disableMultipleSessions
   */
  exports.prototype['disableMultipleSessions'] = undefined;
  /**
   * Metadata that indicates whether the `disableMultipleSessions` property is editable. 
   * @member {module:model/SettingsMetadata} disableMultipleSessionsMetadata
   */
  exports.prototype['disableMultipleSessionsMetadata'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} disablePurgeNotificationsForSenderMetadata
   */
  exports.prototype['disablePurgeNotificationsForSenderMetadata'] = undefined;
  /**
   * 
   * @member {String} disableSignerCertView
   */
  exports.prototype['disableSignerCertView'] = undefined;
  /**
   * Metadata that indicates whether the `disableSignerCertView` property is editable. 
   * @member {module:model/SettingsMetadata} disableSignerCertViewMetadata
   */
  exports.prototype['disableSignerCertViewMetadata'] = undefined;
  /**
   * 
   * @member {String} disableSignerHistoryView
   */
  exports.prototype['disableSignerHistoryView'] = undefined;
  /**
   * Metadata that indicates whether the `disableSignerHistoryView` property is editable. 
   * @member {module:model/SettingsMetadata} disableSignerHistoryViewMetadata
   */
  exports.prototype['disableSignerHistoryViewMetadata'] = undefined;
  /**
   * 
   * @member {String} disableStyleSignature
   */
  exports.prototype['disableStyleSignature'] = undefined;
  /**
   * Metadata that indicates whether the `disableStyleSignature` property is editable. 
   * @member {module:model/SettingsMetadata} disableStyleSignatureMetadata
   */
  exports.prototype['disableStyleSignatureMetadata'] = undefined;
  /**
   * 
   * @member {String} disableUploadSignature
   */
  exports.prototype['disableUploadSignature'] = undefined;
  /**
   * Metadata that indicates whether the `disableUploadSignature` property is editable. 
   * @member {module:model/SettingsMetadata} disableUploadSignatureMetadata
   */
  exports.prototype['disableUploadSignatureMetadata'] = undefined;
  /**
   * 
   * @member {String} disableUserSharing
   */
  exports.prototype['disableUserSharing'] = undefined;
  /**
   * Metadata that indicates whether the `disableUserSharing` property is editable. 
   * @member {module:model/SettingsMetadata} disableUserSharingMetadata
   */
  exports.prototype['disableUserSharingMetadata'] = undefined;
  /**
   * 
   * @member {String} displayBetaSwitch
   */
  exports.prototype['displayBetaSwitch'] = undefined;
  /**
   * Metadata that indicates whether the `displayBetaSwitch` property is editable. 
   * @member {module:model/SettingsMetadata} displayBetaSwitchMetadata
   */
  exports.prototype['displayBetaSwitchMetadata'] = undefined;
  /**
   * 
   * @member {String} documentConversionRestrictions
   */
  exports.prototype['documentConversionRestrictions'] = undefined;
  /**
   * Metadata that indicates whether the `documentConversionRestrictions` property is editable. 
   * @member {module:model/SettingsMetadata} documentConversionRestrictionsMetadata
   */
  exports.prototype['documentConversionRestrictionsMetadata'] = undefined;
  /**
   * 
   * @member {String} documentRetention
   */
  exports.prototype['documentRetention'] = undefined;
  /**
   * Metadata that indicates whether the `documentRetention` property is editable. 
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
   * Metadata that indicates whether the `documentVisibility` property is editable. 
   * @member {module:model/SettingsMetadata} documentVisibilityMetadata
   */
  exports.prototype['documentVisibilityMetadata'] = undefined;
  /**
   * 
   * @member {String} dss_SIGN_28411_EnableLeavePagePrompt_RadminOption
   */
  exports.prototype['dss_SIGN_28411_EnableLeavePagePrompt_RadminOption'] = undefined;
  /**
   * 
   * @member {String} dss_SIGN_29182_SlideUpBar_RadminOption
   */
  exports.prototype['dss_SIGN_29182_SlideUpBar_RadminOption'] = undefined;
  /**
   * 
   * @member {String} emailTemplateVersion
   */
  exports.prototype['emailTemplateVersion'] = undefined;
  /**
   * Metadata that indicates whether the `emailTemplateVersion` property is editable. 
   * @member {module:model/SettingsMetadata} emailTemplateVersionMetadata
   */
  exports.prototype['emailTemplateVersionMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAccessCodeGenerator
   */
  exports.prototype['enableAccessCodeGenerator'] = undefined;
  /**
   * Metadata that indicates whether the `enableAccessCodeGenerator` property is editable. 
   * @member {module:model/SettingsMetadata} enableAccessCodeGeneratorMetadata
   */
  exports.prototype['enableAccessCodeGeneratorMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAdmHealthcare
   */
  exports.prototype['enableAdmHealthcare'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableAdmHealthcareMetadata
   */
  exports.prototype['enableAdmHealthcareMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAdvancedPayments
   */
  exports.prototype['enableAdvancedPayments'] = undefined;
  /**
   * Metadata that indicates whether the `enableAdvancedPayments` property is editable. 
   * @member {module:model/SettingsMetadata} enableAdvancedPaymentsMetadata
   */
  exports.prototype['enableAdvancedPaymentsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAdvancedPowerForms
   */
  exports.prototype['enableAdvancedPowerForms'] = undefined;
  /**
   * Metadata that indicates whether the `enableAdvancedPowerForms` property is editable. 
   * @member {module:model/SettingsMetadata} enableAdvancedPowerFormsMetadata
   */
  exports.prototype['enableAdvancedPowerFormsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAgreementActionsForCLM
   */
  exports.prototype['enableAgreementActionsForCLM'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableAgreementActionsForCLMMetadata
   */
  exports.prototype['enableAgreementActionsForCLMMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAgreementActionsForESign
   */
  exports.prototype['enableAgreementActionsForESign'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableAgreementActionsForESignMetadata
   */
  exports.prototype['enableAgreementActionsForESignMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAutoNav
   */
  exports.prototype['enableAutoNav'] = undefined;
  /**
   * Metadata that indicates whether the `enableAutoNav` property is editable. 
   * @member {module:model/SettingsMetadata} enableAutoNavMetadata
   */
  exports.prototype['enableAutoNavMetadata'] = undefined;
  /**
   * 
   * @member {String} enableBccDummyLink
   */
  exports.prototype['enableBccDummyLink'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableBccDummyLinkMetadata
   */
  exports.prototype['enableBccDummyLinkMetadata'] = undefined;
  /**
   * 
   * @member {String} enableCalculatedFields
   */
  exports.prototype['enableCalculatedFields'] = undefined;
  /**
   * Metadata that indicates whether the `enableCalculatedFields` property is editable. 
   * @member {module:model/SettingsMetadata} enableCalculatedFieldsMetadata
   */
  exports.prototype['enableCalculatedFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableClickPlus
   */
  exports.prototype['enableClickPlus'] = undefined;
  /**
   * 
   * @member {String} enableClickPlusConditionalContent
   */
  exports.prototype['enableClickPlusConditionalContent'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableClickPlusConditionalContentMetaData
   */
  exports.prototype['enableClickPlusConditionalContentMetaData'] = undefined;
  /**
   * 
   * @member {String} enableClickPlusCustomFields
   */
  exports.prototype['enableClickPlusCustomFields'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableClickPlusCustomFieldsMetaData
   */
  exports.prototype['enableClickPlusCustomFieldsMetaData'] = undefined;
  /**
   * 
   * @member {String} enableClickPlusCustomStyle
   */
  exports.prototype['enableClickPlusCustomStyle'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableClickPlusCustomStyleMetaData
   */
  exports.prototype['enableClickPlusCustomStyleMetaData'] = undefined;
  /**
   * 
   * @member {String} enableClickPlusDynamicContent
   */
  exports.prototype['enableClickPlusDynamicContent'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableClickPlusDynamicContentMetaData
   */
  exports.prototype['enableClickPlusDynamicContentMetaData'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableClickPlusMetaData
   */
  exports.prototype['enableClickPlusMetaData'] = undefined;
  /**
   * 
   * @member {String} enableClickwraps
   */
  exports.prototype['enableClickwraps'] = undefined;
  /**
   * Metadata that indicates whether the `enableClickwraps` property is editable. 
   * @member {module:model/SettingsMetadata} enableClickwrapsMetadata
   */
  exports.prototype['enableClickwrapsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableCombinedPDFDownloadForSBS
   */
  exports.prototype['enableCombinedPDFDownloadForSBS'] = undefined;
  /**
   * 
   * @member {String} enableCommentsHistoryDownloadInSigning
   */
  exports.prototype['enableCommentsHistoryDownloadInSigning'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableCommentsHistoryDownloadInSigningMetadata
   */
  exports.prototype['enableCommentsHistoryDownloadInSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} enableContactSuggestions
   */
  exports.prototype['enableContactSuggestions'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableContactSuggestionsMetadata
   */
  exports.prototype['enableContactSuggestionsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableCustomerSatisfactionMetricTracking
   */
  exports.prototype['enableCustomerSatisfactionMetricTracking'] = undefined;
  /**
   * Metadata that indicates whether the `enableCustomerSatisfactionMetricTracking` property is editable. 
   * @member {module:model/SettingsMetadata} enableCustomerSatisfactionMetricTrackingMetadata
   */
  exports.prototype['enableCustomerSatisfactionMetricTrackingMetadata'] = undefined;
  /**
   * 
   * @member {String} enableDSPro
   */
  exports.prototype['enableDSPro'] = undefined;
  /**
   * Metadata that indicates whether the `enableDSPro` property is editable. 
   * @member {module:model/SettingsMetadata} enableDSProMetadata
   */
  exports.prototype['enableDSProMetadata'] = undefined;
  /**
   * 
   * @member {String} enableEnvelopeStampingByAccountAdmin
   */
  exports.prototype['enableEnvelopeStampingByAccountAdmin'] = undefined;
  /**
   * Metadata that indicates whether the `enableEnvelopeStampingByAccountAdmin` property is editable. 
   * @member {module:model/SettingsMetadata} enableEnvelopeStampingByAccountAdminMetadata
   */
  exports.prototype['enableEnvelopeStampingByAccountAdminMetadata'] = undefined;
  /**
   * 
   * @member {String} enableEnvelopeStampingByDSAdmin
   */
  exports.prototype['enableEnvelopeStampingByDSAdmin'] = undefined;
  /**
   * Metadata that indicates whether the `enableEnvelopeStampingByDSAdmin` property is editable. 
   * @member {module:model/SettingsMetadata} enableEnvelopeStampingByDSAdminMetadata
   */
  exports.prototype['enableEnvelopeStampingByDSAdminMetadata'] = undefined;
  /**
   * 
   * @member {String} enableESignAPIHourlyLimitManagement
   */
  exports.prototype['enableESignAPIHourlyLimitManagement'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableESignAPIHourlyLimitManagementMetadata
   */
  exports.prototype['enableESignAPIHourlyLimitManagementMetadata'] = undefined;
  /**
   * 
   * @member {String} enableEsignCommunities
   */
  exports.prototype['enableEsignCommunities'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableEsignCommunitiesMetadata
   */
  exports.prototype['enableEsignCommunitiesMetadata'] = undefined;
  /**
   * 
   * @member {String} enableIDFxAccountlessSMSAuthForPart11
   */
  exports.prototype['enableIDFxAccountlessSMSAuthForPart11'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableIDFxAccountlessSMSAuthForPart11Metadata
   */
  exports.prototype['enableIDFxAccountlessSMSAuthForPart11Metadata'] = undefined;
  /**
   * 
   * @member {String} enableIDFxIntuitKBA
   */
  exports.prototype['enableIDFxIntuitKBA'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableIDFxIntuitKBAMetadata
   */
  exports.prototype['enableIDFxIntuitKBAMetadata'] = undefined;
  /**
   * 
   * @member {String} enableIDFxPhoneAuthentication
   */
  exports.prototype['enableIDFxPhoneAuthentication'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableIDFxPhoneAuthenticationMetadata
   */
  exports.prototype['enableIDFxPhoneAuthenticationMetadata'] = undefined;
  /**
   * 
   * @member {String} enableInBrowserEditor
   */
  exports.prototype['enableInBrowserEditor'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableInBrowserEditorMetadata
   */
  exports.prototype['enableInBrowserEditorMetadata'] = undefined;
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
   * @member {module:model/SettingsMetadata} enableParticipantRecipientSettingMetadata
   */
  exports.prototype['enableParticipantRecipientSettingMetadata'] = undefined;
  /**
   * 
   * @member {String} enablePaymentProcessing
   */
  exports.prototype['enablePaymentProcessing'] = undefined;
  /**
   * Metadata that indicates whether the `enablePaymentProcessing` property is editable. 
   * @member {module:model/SettingsMetadata} enablePaymentProcessingMetadata
   */
  exports.prototype['enablePaymentProcessingMetadata'] = undefined;
  /**
   * 
   * @member {String} enablePDFAConversion
   */
  exports.prototype['enablePDFAConversion'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enablePDFAConversionMetadata
   */
  exports.prototype['enablePDFAConversionMetadata'] = undefined;
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
   * Metadata that indicates whether the `enablePowerFormDirect` property is editable. 
   * @member {module:model/SettingsMetadata} enablePowerFormDirectMetadata
   */
  exports.prototype['enablePowerFormDirectMetadata'] = undefined;
  /**
   * Metadata that indicates whether the `enablePowerForm` property is editable. 
   * @member {module:model/SettingsMetadata} enablePowerFormMetadata
   */
  exports.prototype['enablePowerFormMetadata'] = undefined;
  /**
   * 
   * @member {String} enableRecipientDomainValidation
   */
  exports.prototype['enableRecipientDomainValidation'] = undefined;
  /**
   * Metadata that indicates whether the `enableRecipientDomainValidation` property is editable. 
   * @member {module:model/SettingsMetadata} enableRecipientDomainValidationMetadata
   */
  exports.prototype['enableRecipientDomainValidationMetadata'] = undefined;
  /**
   * 
   * @member {String} enableRecipientMayProvidePhoneNumber
   */
  exports.prototype['enableRecipientMayProvidePhoneNumber'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableRecipientMayProvidePhoneNumberMetadata
   */
  exports.prototype['enableRecipientMayProvidePhoneNumberMetadata'] = undefined;
  /**
   * 
   * @member {String} enableReportLinks
   */
  exports.prototype['enableReportLinks'] = undefined;
  /**
   * Metadata that indicates whether the `enableReportLinks` property is editable. 
   * @member {module:model/SettingsMetadata} enableReportLinksMetadata
   */
  exports.prototype['enableReportLinksMetadata'] = undefined;
  /**
   * 
   * @member {String} enableRequireSignOnPaper
   */
  exports.prototype['enableRequireSignOnPaper'] = undefined;
  /**
   * Metadata that indicates whether the `enableRequireSignOnPaper` property is editable. 
   * @member {module:model/SettingsMetadata} enableRequireSignOnPaperMetadata
   */
  exports.prototype['enableRequireSignOnPaperMetadata'] = undefined;
  /**
   * 
   * @member {String} enableReservedDomain
   */
  exports.prototype['enableReservedDomain'] = undefined;
  /**
   * Metadata that indicates whether the `enableReservedDomain` property is editable. 
   * @member {module:model/SettingsMetadata} enableReservedDomainMetadata
   */
  exports.prototype['enableReservedDomainMetadata'] = undefined;
  /**
   * 
   * @member {String} enableResponsiveSigning
   */
  exports.prototype['enableResponsiveSigning'] = undefined;
  /**
   * Metadata that indicates whether the `enableResponsiveSigning` property is editable. 
   * @member {module:model/SettingsMetadata} enableResponsiveSigningMetadata
   */
  exports.prototype['enableResponsiveSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} enableScheduledRelease
   */
  exports.prototype['enableScheduledRelease'] = undefined;
  /**
   * Metadata that indicates whether the `enableScheduledRelease` property is editable. 
   * @member {module:model/SettingsMetadata} enableScheduledReleaseMetadata
   */
  exports.prototype['enableScheduledReleaseMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSearch
   */
  exports.prototype['enableSearch'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableSearchMetadata
   */
  exports.prototype['enableSearchMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSearchSiteSpecificApi
   */
  exports.prototype['enableSearchSiteSpecificApi'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableSearchSiteSpecificApiMetadata
   */
  exports.prototype['enableSearchSiteSpecificApiMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSearchUI
   */
  exports.prototype['enableSearchUI'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableSearchUIMetadata
   */
  exports.prototype['enableSearchUIMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendingTagsFontSettings
   */
  exports.prototype['enableSendingTagsFontSettings'] = undefined;
  /**
   * Metadata that indicates whether the `enableSendingTagsFontSettings` property is editable. 
   * @member {module:model/SettingsMetadata} enableSendingTagsFontSettingsMetadata
   */
  exports.prototype['enableSendingTagsFontSettingsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendToAgent
   */
  exports.prototype['enableSendToAgent'] = undefined;
  /**
   * Metadata that indicates whether the `enableSendToAgent` property is editable. 
   * @member {module:model/SettingsMetadata} enableSendToAgentMetadata
   */
  exports.prototype['enableSendToAgentMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendToIntermediary
   */
  exports.prototype['enableSendToIntermediary'] = undefined;
  /**
   * Metadata that indicates whether the `enableSendToIntermediary` property is editable. 
   * @member {module:model/SettingsMetadata} enableSendToIntermediaryMetadata
   */
  exports.prototype['enableSendToIntermediaryMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSendToManage
   */
  exports.prototype['enableSendToManage'] = undefined;
  /**
   * Metadata that indicates whether the `enableSendToManage` property is editable. 
   * @member {module:model/SettingsMetadata} enableSendToManageMetadata
   */
  exports.prototype['enableSendToManageMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSequentialSigningAPI
   */
  exports.prototype['enableSequentialSigningAPI'] = undefined;
  /**
   * Metadata that indicates whether the `enableSequentialSigningAPI` property is editable. 
   * @member {module:model/SettingsMetadata} enableSequentialSigningAPIMetadata
   */
  exports.prototype['enableSequentialSigningAPIMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSequentialSigningUI
   */
  exports.prototype['enableSequentialSigningUI'] = undefined;
  /**
   * Metadata that indicates whether the `enableSequentialSigningUI` property is editable. 
   * @member {module:model/SettingsMetadata} enableSequentialSigningUIMetadata
   */
  exports.prototype['enableSequentialSigningUIMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSignerAttachments
   */
  exports.prototype['enableSignerAttachments'] = undefined;
  /**
   * Metadata that indicates whether the `enableSignerAttachments` property is editable. 
   * @member {module:model/SettingsMetadata} enableSignerAttachmentsMetadata
   */
  exports.prototype['enableSignerAttachmentsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSigningExtensionComments
   */
  exports.prototype['enableSigningExtensionComments'] = undefined;
  /**
   * Metadata that indicates whether the `enableSigningExtensionComments` property is editable. 
   * @member {module:model/SettingsMetadata} enableSigningExtensionCommentsMetadata
   */
  exports.prototype['enableSigningExtensionCommentsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSigningExtensionConversations
   */
  exports.prototype['enableSigningExtensionConversations'] = undefined;
  /**
   * Metadata that indicates whether the `enableSigningExtensionConversations` property is editable. 
   * @member {module:model/SettingsMetadata} enableSigningExtensionConversationsMetadata
   */
  exports.prototype['enableSigningExtensionConversationsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSigningOrderSettingsForAccount
   */
  exports.prototype['enableSigningOrderSettingsForAccount'] = undefined;
  /**
   * Metadata that indicates whether the `enableSigningOrderSettingsForAccount` property is editable. 
   * @member {module:model/SettingsMetadata} enableSigningOrderSettingsForAccountMetadata
   */
  exports.prototype['enableSigningOrderSettingsForAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSignOnPaper
   */
  exports.prototype['enableSignOnPaper'] = undefined;
  /**
   * Metadata that indicates whether the `enableSignOnPaper` property is editable. 
   * @member {module:model/SettingsMetadata} enableSignOnPaperMetadata
   */
  exports.prototype['enableSignOnPaperMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSignOnPaperOverride
   */
  exports.prototype['enableSignOnPaperOverride'] = undefined;
  /**
   * Metadata that indicates whether the `enableSignOnPaperOverride` property is editable. 
   * @member {module:model/SettingsMetadata} enableSignOnPaperOverrideMetadata
   */
  exports.prototype['enableSignOnPaperOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSignWithNotary
   */
  exports.prototype['enableSignWithNotary'] = undefined;
  /**
   * Metadata that indicates whether the `enableSignWithNotary` property is editable. 
   * @member {module:model/SettingsMetadata} enableSignWithNotaryMetadata
   */
  exports.prototype['enableSignWithNotaryMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSmartContracts
   */
  exports.prototype['enableSmartContracts'] = undefined;
  /**
   * Metadata that indicates whether the `enableSmartContracts` property is editable.
   * @member {module:model/SettingsMetadata} enableSmartContractsMetadata
   */
  exports.prototype['enableSmartContractsMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSMSAuthentication
   */
  exports.prototype['enableSMSAuthentication'] = undefined;
  /**
   * Metadata that indicates whether the `enableSMSAuthentication` property is editable. 
   * @member {module:model/SettingsMetadata} enableSMSAuthenticationMetadata
   */
  exports.prototype['enableSMSAuthenticationMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSMSDeliveryAdditionalNotification
   */
  exports.prototype['enableSMSDeliveryAdditionalNotification'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableSMSDeliveryAdditionalNotificationMetadata
   */
  exports.prototype['enableSMSDeliveryAdditionalNotificationMetadata'] = undefined;
  /**
   * 
   * @member {String} enableSMSDeliveryPrimary
   */
  exports.prototype['enableSMSDeliveryPrimary'] = undefined;
  /**
   * 
   * @member {String} enableSocialIdLogin
   */
  exports.prototype['enableSocialIdLogin'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/SettingsMetadata} enableSocialIdLoginMetadata
   */
  exports.prototype['enableSocialIdLoginMetadata'] = undefined;
  /**
   * 
   * @member {String} enableStrikeThrough
   */
  exports.prototype['enableStrikeThrough'] = undefined;
  /**
   * Metadata that indicates whether the `enableStrikeThrough` property is editable. 
   * @member {module:model/SettingsMetadata} enableStrikeThroughMetadata
   */
  exports.prototype['enableStrikeThroughMetadata'] = undefined;
  /**
   * 
   * @member {String} enableTransactionPoint
   */
  exports.prototype['enableTransactionPoint'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} enableTransactionPointMetadata
   */
  exports.prototype['enableTransactionPointMetadata'] = undefined;
  /**
   * 
   * @member {String} enableVaulting
   */
  exports.prototype['enableVaulting'] = undefined;
  /**
   * Metadata that indicates whether the `enableVaulting` property is editable. 
   * @member {module:model/SettingsMetadata} enableVaultingMetadata
   */
  exports.prototype['enableVaultingMetadata'] = undefined;
  /**
   * 
   * @member {String} enableWitnessing
   */
  exports.prototype['enableWitnessing'] = undefined;
  /**
   * Metadata that indicates whether the `enableWitnessing` property is editable. 
   * @member {module:model/SettingsMetadata} enableWitnessingMetadata
   */
  exports.prototype['enableWitnessingMetadata'] = undefined;
  /**
   * 
   * @member {String} enforceTemplateNameUniqueness
   */
  exports.prototype['enforceTemplateNameUniqueness'] = undefined;
  /**
   * Metadata that indicates whether the `enforceTemplateNameUniqueness` property is editable. 
   * @member {module:model/SettingsMetadata} enforceTemplateNameUniquenessMetadata
   */
  exports.prototype['enforceTemplateNameUniquenessMetadata'] = undefined;
  /**
   * 
   * @member {String} envelopeIntegrationAllowed
   */
  exports.prototype['envelopeIntegrationAllowed'] = undefined;
  /**
   * Metadata that indicates whether the `envelopeIntegrationAllowed` property is editable. 
   * @member {module:model/SettingsMetadata} envelopeIntegrationAllowedMetadata
   */
  exports.prototype['envelopeIntegrationAllowedMetadata'] = undefined;
  /**
   * 
   * @member {String} envelopeIntegrationEnabled
   */
  exports.prototype['envelopeIntegrationEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `envelopeIntegrationEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} envelopeIntegrationEnabledMetadata
   */
  exports.prototype['envelopeIntegrationEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} EnvelopeLimitsTotalDocumentSizeAllowedInMB
   */
  exports.prototype['EnvelopeLimitsTotalDocumentSizeAllowedInMB'] = undefined;
  /**
   * 
   * @member {String} EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabled
   */
  exports.prototype['EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabled'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabledMetadata
   */
  exports.prototype['EnvelopeLimitsTotalDocumentSizeAllowedInMBEnabledMetadata'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} EnvelopeLimitsTotalDocumentSizeAllowedInMBMetadata
   */
  exports.prototype['EnvelopeLimitsTotalDocumentSizeAllowedInMBMetadata'] = undefined;
  /**
   * 
   * @member {String} envelopeSearchMode
   */
  exports.prototype['envelopeSearchMode'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} envelopeSearchModeMetadata
   */
  exports.prototype['envelopeSearchModeMetadata'] = undefined;
  /**
   * 
   * @member {String} envelopeStampingDefaultValue
   */
  exports.prototype['envelopeStampingDefaultValue'] = undefined;
  /**
   * Metadata that indicates whether the `envelopeStampingDefaultValue` property is editable. 
   * @member {module:model/SettingsMetadata} envelopeStampingDefaultValueMetadata
   */
  exports.prototype['envelopeStampingDefaultValueMetadata'] = undefined;
  /**
   * 
   * @member {String} exitPrompt
   */
  exports.prototype['exitPrompt'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} exitPromptMetadata
   */
  exports.prototype['exitPromptMetadata'] = undefined;
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
   * Metadata that indicates whether the `expressSendAllowTabs` property is editable. 
   * @member {module:model/SettingsMetadata} expressSendAllowTabsMetadata
   */
  exports.prototype['expressSendAllowTabsMetadata'] = undefined;
  /**
   * Metadata that indicates whether the `expressSend` property is editable. 
   * @member {module:model/SettingsMetadata} expressSendMetadata
   */
  exports.prototype['expressSendMetadata'] = undefined;
  /**
   * A list of external document sources such as DropBox and OneDrive.
   * @member {module:model/ExternalDocumentSources} externalDocumentSources
   */
  exports.prototype['externalDocumentSources'] = undefined;
  /**
   * 
   * @member {String} externalSignaturePadType
   */
  exports.prototype['externalSignaturePadType'] = undefined;
  /**
   * Metadata that indicates whether the `externalSignaturePadType` property is editable. 
   * @member {module:model/SettingsMetadata} externalSignaturePadTypeMetadata
   */
  exports.prototype['externalSignaturePadTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} faxOutEnabled
   */
  exports.prototype['faxOutEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `faxOutEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} faxOutEnabledMetadata
   */
  exports.prototype['faxOutEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} finishReminder
   */
  exports.prototype['finishReminder'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} finishReminderMetadata
   */
  exports.prototype['finishReminderMetadata'] = undefined;
  /**
   * 
   * @member {String} guidedFormsHtmlAllowed
   */
  exports.prototype['guidedFormsHtmlAllowed'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} guidedFormsHtmlAllowedMetadata
   */
  exports.prototype['guidedFormsHtmlAllowedMetadata'] = undefined;
  /**
   * 
   * @member {String} hasRecipientConnectClaimedDomain
   */
  exports.prototype['hasRecipientConnectClaimedDomain'] = undefined;
  /**
   * 
   * @member {String} hideAccountAddressInCoC
   */
  exports.prototype['hideAccountAddressInCoC'] = undefined;
  /**
   * Metadata that indicates whether the `hideAccountAddressInCoC` property is editable. 
   * @member {module:model/SettingsMetadata} hideAccountAddressInCoCMetadata
   */
  exports.prototype['hideAccountAddressInCoCMetadata'] = undefined;
  /**
   * 
   * @member {String} hidePricing
   */
  exports.prototype['hidePricing'] = undefined;
  /**
   * Metadata that indicates whether the `hidePricing` property is editable. 
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
   * Metadata that indicates whether the `idCheckExpireDays` property is editable. 
   * @member {module:model/SettingsMetadata} idCheckExpireDaysMetadata
   */
  exports.prototype['idCheckExpireDaysMetadata'] = undefined;
  /**
   * Metadata that indicates whether the `idCheckExpire` property is editable. 
   * @member {module:model/SettingsMetadata} idCheckExpireMetadata
   */
  exports.prototype['idCheckExpireMetadata'] = undefined;
  /**
   * 
   * @member {String} idCheckExpireMinutes
   */
  exports.prototype['idCheckExpireMinutes'] = undefined;
  /**
   * Metadata that indicates whether the `idCheckExpireMinutes` property is editable. 
   * @member {module:model/SettingsMetadata} idCheckExpireMinutesMetadata
   */
  exports.prototype['idCheckExpireMinutesMetadata'] = undefined;
  /**
   * 
   * @member {String} idCheckRequired
   */
  exports.prototype['idCheckRequired'] = undefined;
  /**
   * Metadata that indicates whether the `idCheckRequired` property is editable. 
   * @member {module:model/SettingsMetadata} idCheckRequiredMetadata
   */
  exports.prototype['idCheckRequiredMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/AccountIdentityVerificationWorkflow>} identityVerification
   */
  exports.prototype['identityVerification'] = undefined;
  /**
   * Metadata that indicates whether the `identityVerification` property is editable. 
   * @member {module:model/SettingsMetadata} identityVerificationMetadata
   */
  exports.prototype['identityVerificationMetadata'] = undefined;
  /**
   * 
   * @member {String} idfxKBAAuthenticationOverride
   */
  exports.prototype['idfxKBAAuthenticationOverride'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} idfxKBAAuthenticationOverrideMetadata
   */
  exports.prototype['idfxKBAAuthenticationOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} idfxPhoneAuthenticationOverride
   */
  exports.prototype['idfxPhoneAuthenticationOverride'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} idfxPhoneAuthenticationOverrideMetadata
   */
  exports.prototype['idfxPhoneAuthenticationOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} ignoreErrorIfAnchorTabNotFound
   */
  exports.prototype['ignoreErrorIfAnchorTabNotFound'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} ignoreErrorIfAnchorTabNotFoundMetadataEnabled
   */
  exports.prototype['ignoreErrorIfAnchorTabNotFoundMetadataEnabled'] = undefined;
  /**
   * 
   * @member {String} inPersonIDCheckQuestion
   */
  exports.prototype['inPersonIDCheckQuestion'] = undefined;
  /**
   * Metadata that indicates whether the `inPersonIDCheckQuestion` property is editable. 
   * @member {module:model/SettingsMetadata} inPersonIDCheckQuestionMetadata
   */
  exports.prototype['inPersonIDCheckQuestionMetadata'] = undefined;
  /**
   * 
   * @member {String} inPersonSigningEnabled
   */
  exports.prototype['inPersonSigningEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `inPersonSigningEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} inPersonSigningEnabledMetadata
   */
  exports.prototype['inPersonSigningEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} inSessionEnabled
   */
  exports.prototype['inSessionEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `inSessionEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} inSessionEnabledMetadata
   */
  exports.prototype['inSessionEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} inSessionSuppressEmails
   */
  exports.prototype['inSessionSuppressEmails'] = undefined;
  /**
   * Metadata that indicates whether the `inSessionSuppressEmails` property is editable. 
   * @member {module:model/SettingsMetadata} inSessionSuppressEmailsMetadata
   */
  exports.prototype['inSessionSuppressEmailsMetadata'] = undefined;
  /**
   * 
   * @member {Array.<module:model/LinkedExternalPrimaryAccount>} linkedExternalPrimaryAccounts
   */
  exports.prototype['linkedExternalPrimaryAccounts'] = undefined;
  /**
   * 
   * @member {String} maximumSigningGroups
   */
  exports.prototype['maximumSigningGroups'] = undefined;
  /**
   * Metadata that indicates whether the `maximumSigningGroups` property is editable. 
   * @member {module:model/SettingsMetadata} maximumSigningGroupsMetadata
   */
  exports.prototype['maximumSigningGroupsMetadata'] = undefined;
  /**
   * 
   * @member {String} maximumUsersPerSigningGroup
   */
  exports.prototype['maximumUsersPerSigningGroup'] = undefined;
  /**
   * Metadata that indicates whether the `maximumUsersPerSigningGroup` property is editable. 
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
   * @member {String} mergeMixedModeResults
   */
  exports.prototype['mergeMixedModeResults'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} mergeMixedModeResultsMetadata
   */
  exports.prototype['mergeMixedModeResultsMetadata'] = undefined;
  /**
   * 
   * @member {String} mobileSessionTimeout
   */
  exports.prototype['mobileSessionTimeout'] = undefined;
  /**
   * Metadata that indicates whether the `mobileSessionTimeout` property is editable. 
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
   * Metadata that indicates whether the `optInMobileSigningV02` property is editable. 
   * @member {module:model/SettingsMetadata} optInMobileSigningV02Metadata
   */
  exports.prototype['optInMobileSigningV02Metadata'] = undefined;
  /**
   * 
   * @member {String} optOutAutoNavTextAndTabColorUpdates
   */
  exports.prototype['optOutAutoNavTextAndTabColorUpdates'] = undefined;
  /**
   * Metadata that indicates whether the `optOutAutoNavTextAndTabColorUpdates` property is editable. 
   * @member {module:model/SettingsMetadata} optOutAutoNavTextAndTabColorUpdatesMetadata
   */
  exports.prototype['optOutAutoNavTextAndTabColorUpdatesMetadata'] = undefined;
  /**
   * 
   * @member {String} optOutNewPlatformSeal
   */
  exports.prototype['optOutNewPlatformSeal'] = undefined;
  /**
   * Metadata that indicates whether the `optOutNewPlatformSealPlatform` property is editable. 
   * @member {module:model/SettingsMetadata} optOutNewPlatformSealPlatformMetadata
   */
  exports.prototype['optOutNewPlatformSealPlatformMetadata'] = undefined;
  /**
   * 
   * @member {String} pdfMaxChunkedUploadPartSize
   */
  exports.prototype['pdfMaxChunkedUploadPartSize'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} pdfMaxChunkedUploadPartSizeMetadata
   */
  exports.prototype['pdfMaxChunkedUploadPartSizeMetadata'] = undefined;
  /**
   * 
   * @member {String} pdfMaxChunkedUploadTotalSize
   */
  exports.prototype['pdfMaxChunkedUploadTotalSize'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} pdfMaxChunkedUploadTotalSizeMetadata
   */
  exports.prototype['pdfMaxChunkedUploadTotalSizeMetadata'] = undefined;
  /**
   * 
   * @member {String} pdfMaxIndividualUploadSize
   */
  exports.prototype['pdfMaxIndividualUploadSize'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} pdfMaxIndividualUploadSizeMetadata
   */
  exports.prototype['pdfMaxIndividualUploadSizeMetadata'] = undefined;
  /**
   * 
   * @member {String} phoneAuthRecipientMayProvidePhoneNumber
   */
  exports.prototype['phoneAuthRecipientMayProvidePhoneNumber'] = undefined;
  /**
   * Metadata that indicates whether the `phoneAuthRecipientMayProvidePhoneNumber` property is editable. 
   * @member {module:model/SettingsMetadata} phoneAuthRecipientMayProvidePhoneNumberMetadata
   */
  exports.prototype['phoneAuthRecipientMayProvidePhoneNumberMetadata'] = undefined;
  /**
   * 
   * @member {String} pkiSignDownloadedPDFDocs
   */
  exports.prototype['pkiSignDownloadedPDFDocs'] = undefined;
  /**
   * Metadata that indicates whether the `pkiSignDownloadedPDFDocs` property is editable. 
   * @member {module:model/SettingsMetadata} pkiSignDownloadedPDFDocsMetadata
   */
  exports.prototype['pkiSignDownloadedPDFDocsMetadata'] = undefined;
  /**
   * 
   * @member {String} readOnlyMode
   */
  exports.prototype['readOnlyMode'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} readOnlyModeMetadata
   */
  exports.prototype['readOnlyModeMetadata'] = undefined;
  /**
   * 
   * @member {String} recipientsCanSignOffline
   */
  exports.prototype['recipientsCanSignOffline'] = undefined;
  /**
   * Metadata that indicates whether the `recipientsCanSignOffline` property is editable. 
   * @member {module:model/SettingsMetadata} recipientsCanSignOfflineMetadata
   */
  exports.prototype['recipientsCanSignOfflineMetadata'] = undefined;
  /**
   * 
   * @member {String} recipientSigningAutoNavigationControl
   */
  exports.prototype['recipientSigningAutoNavigationControl'] = undefined;
  /**
   * Metadata that indicates whether the `recipientSigningAutoNavigationControl` property is editable. 
   * @member {module:model/SettingsMetadata} recipientSigningAutoNavigationControlMetadata
   */
  exports.prototype['recipientSigningAutoNavigationControlMetadata'] = undefined;
  /**
   * 
   * @member {String} require21CFRpt11Compliance
   */
  exports.prototype['require21CFRpt11Compliance'] = undefined;
  /**
   * Metadata that indicates whether the `require21CFRpt11Compliance` property is editable. 
   * @member {module:model/SettingsMetadata} require21CFRpt11ComplianceMetadata
   */
  exports.prototype['require21CFRpt11ComplianceMetadata'] = undefined;
  /**
   * 
   * @member {String} requireDeclineReason
   */
  exports.prototype['requireDeclineReason'] = undefined;
  /**
   * Metadata that indicates whether the `requireDeclineReason` property is editable. 
   * @member {module:model/SettingsMetadata} requireDeclineReasonMetadata
   */
  exports.prototype['requireDeclineReasonMetadata'] = undefined;
  /**
   * 
   * @member {String} requireExternalUserManagement
   */
  exports.prototype['requireExternalUserManagement'] = undefined;
  /**
   * Metadata that indicates whether the `requireExternalUserManagement` property is editable. 
   * @member {module:model/SettingsMetadata} requireExternalUserManagementMetadata
   */
  exports.prototype['requireExternalUserManagementMetadata'] = undefined;
  /**
   * 
   * @member {String} requireSignerCertificateType
   */
  exports.prototype['requireSignerCertificateType'] = undefined;
  /**
   * Metadata that indicates whether the `requireSignerCertificateType` property is editable. 
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
   * Metadata that indicates whether the `selfSignedRecipientEmailDocument` property is editable. 
   * @member {module:model/SettingsMetadata} selfSignedRecipientEmailDocumentMetadata
   */
  exports.prototype['selfSignedRecipientEmailDocumentMetadata'] = undefined;
  /**
   * 
   * @member {String} selfSignedRecipientEmailDocumentUserOverride
   */
  exports.prototype['selfSignedRecipientEmailDocumentUserOverride'] = undefined;
  /**
   * Metadata that indicates whether the `selfSignedRecipientEmailDocumentUserOverride` property is editable. 
   * @member {module:model/SettingsMetadata} selfSignedRecipientEmailDocumentUserOverrideMetadata
   */
  exports.prototype['selfSignedRecipientEmailDocumentUserOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} senderCanSignInEachLocation
   */
  exports.prototype['senderCanSignInEachLocation'] = undefined;
  /**
   * Metadata that indicates whether the `senderCanSignInEachLocation` property is editable. 
   * @member {module:model/SettingsMetadata} senderCanSignInEachLocationMetadata
   */
  exports.prototype['senderCanSignInEachLocationMetadata'] = undefined;
  /**
   * 
   * @member {String} senderMustAuthenticateSigning
   */
  exports.prototype['senderMustAuthenticateSigning'] = undefined;
  /**
   * Metadata that indicates whether the `senderMustAuthenticateSigning` property is editable. 
   * @member {module:model/SettingsMetadata} senderMustAuthenticateSigningMetadata
   */
  exports.prototype['senderMustAuthenticateSigningMetadata'] = undefined;
  /**
   * 
   * @member {String} sendingTagsFontColor
   */
  exports.prototype['sendingTagsFontColor'] = undefined;
  /**
   * Metadata that indicates whether the `sendingTagsFontColor` property is editable. 
   * @member {module:model/SettingsMetadata} sendingTagsFontColorMetadata
   */
  exports.prototype['sendingTagsFontColorMetadata'] = undefined;
  /**
   * 
   * @member {String} sendingTagsFontName
   */
  exports.prototype['sendingTagsFontName'] = undefined;
  /**
   * Metadata that indicates whether the `sendingTagsFontName` property is editable. 
   * @member {module:model/SettingsMetadata} sendingTagsFontNameMetadata
   */
  exports.prototype['sendingTagsFontNameMetadata'] = undefined;
  /**
   * 
   * @member {String} sendingTagsFontSize
   */
  exports.prototype['sendingTagsFontSize'] = undefined;
  /**
   * Metadata that indicates whether the `sendingTagsFontSize` property is editable. 
   * @member {module:model/SettingsMetadata} sendingTagsFontSizeMetadata
   */
  exports.prototype['sendingTagsFontSizeMetadata'] = undefined;
  /**
   * 
   * @member {String} sendLockoutRecipientNotification
   */
  exports.prototype['sendLockoutRecipientNotification'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} sendLockoutRecipientNotificationMetadata
   */
  exports.prototype['sendLockoutRecipientNotificationMetadata'] = undefined;
  /**
   * 
   * @member {String} sendToCertifiedDeliveryEnabled
   */
  exports.prototype['sendToCertifiedDeliveryEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `sendToCertifiedDeliveryEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} sendToCertifiedDeliveryEnabledMetadata
   */
  exports.prototype['sendToCertifiedDeliveryEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} sessionTimeout
   */
  exports.prototype['sessionTimeout'] = undefined;
  /**
   * Metadata that indicates whether the `sessionTimeout` property is editable. 
   * @member {module:model/SettingsMetadata} sessionTimeoutMetadata
   */
  exports.prototype['sessionTimeoutMetadata'] = undefined;
  /**
   * 
   * @member {String} setRecipEmailLang
   */
  exports.prototype['setRecipEmailLang'] = undefined;
  /**
   * Metadata that indicates whether the `setRecipEmailLang` property is editable. 
   * @member {module:model/SettingsMetadata} setRecipEmailLangMetadata
   */
  exports.prototype['setRecipEmailLangMetadata'] = undefined;
  /**
   * 
   * @member {String} setRecipSignLang
   */
  exports.prototype['setRecipSignLang'] = undefined;
  /**
   * Metadata that indicates whether the `setRecipSignLang` property is editable. 
   * @member {module:model/SettingsMetadata} setRecipSignLangMetadata
   */
  exports.prototype['setRecipSignLangMetadata'] = undefined;
  /**
   * 
   * @member {String} sharedTemplateFolders
   */
  exports.prototype['sharedTemplateFolders'] = undefined;
  /**
   * Metadata that indicates whether the `sharedTemplateFolders` property is editable. 
   * @member {module:model/SettingsMetadata} sharedTemplateFoldersMetadata
   */
  exports.prototype['sharedTemplateFoldersMetadata'] = undefined;
  /**
   * 
   * @member {String} showCompleteDialogInEmbeddedSession
   */
  exports.prototype['showCompleteDialogInEmbeddedSession'] = undefined;
  /**
   * Metadata that indicates whether the `showCompleteDialogInEmbeddedSession` property is editable. 
   * @member {module:model/SettingsMetadata} showCompleteDialogInEmbeddedSessionMetadata
   */
  exports.prototype['showCompleteDialogInEmbeddedSessionMetadata'] = undefined;
  /**
   * 
   * @member {String} showConditionalRoutingOnSend
   */
  exports.prototype['showConditionalRoutingOnSend'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} showConditionalRoutingOnSendMetadata
   */
  exports.prototype['showConditionalRoutingOnSendMetadata'] = undefined;
  /**
   * 
   * @member {String} showInitialConditionalFields
   */
  exports.prototype['showInitialConditionalFields'] = undefined;
  /**
   * Metadata that indicates whether the `showInitialConditionalFields` property is editable. 
   * @member {module:model/SettingsMetadata} showInitialConditionalFieldsMetadata
   */
  exports.prototype['showInitialConditionalFieldsMetadata'] = undefined;
  /**
   * 
   * @member {String} showLocalizedWatermarks
   */
  exports.prototype['showLocalizedWatermarks'] = undefined;
  /**
   * Metadata that indicates whether the `showLocalizedWatermarks` property is editable. 
   * @member {module:model/SettingsMetadata} showLocalizedWatermarksMetadata
   */
  exports.prototype['showLocalizedWatermarksMetadata'] = undefined;
  /**
   * 
   * @member {String} showMaskedFieldsWhenDownloadingDocumentAsSender
   */
  exports.prototype['showMaskedFieldsWhenDownloadingDocumentAsSender'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} showMaskedFieldsWhenDownloadingDocumentAsSenderMetadata
   */
  exports.prototype['showMaskedFieldsWhenDownloadingDocumentAsSenderMetadata'] = undefined;
  /**
   * 
   * @member {String} showTutorials
   */
  exports.prototype['showTutorials'] = undefined;
  /**
   * Metadata that indicates whether the `showTutorials` property is editable. 
   * @member {module:model/SettingsMetadata} showTutorialsMetadata
   */
  exports.prototype['showTutorialsMetadata'] = undefined;
  /**
   * 
   * @member {Array.<String>} signatureProviders
   */
  exports.prototype['signatureProviders'] = undefined;
  /**
   * Metadata that indicates whether the `signatureProviders` property is editable. 
   * @member {module:model/SettingsMetadata} signatureProvidersMetadata
   */
  exports.prototype['signatureProvidersMetadata'] = undefined;
  /**
   * 
   * @member {String} signDateFormat
   */
  exports.prototype['signDateFormat'] = undefined;
  /**
   * Metadata that indicates whether the `signDateFormat` property is editable. 
   * @member {module:model/SettingsMetadata} signDateFormatMetadata
   */
  exports.prototype['signDateFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} signDateTimeAccountLanguageOverride
   */
  exports.prototype['signDateTimeAccountLanguageOverride'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} signDateTimeAccountLanguageOverrideMetadata
   */
  exports.prototype['signDateTimeAccountLanguageOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} signDateTimeAccountTimezoneOverride
   */
  exports.prototype['signDateTimeAccountTimezoneOverride'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} signDateTimeAccountTimezoneOverrideMetadata
   */
  exports.prototype['signDateTimeAccountTimezoneOverrideMetadata'] = undefined;
  /**
   * 
   * @member {String} signerAttachCertificateToEnvelopePDF
   */
  exports.prototype['signerAttachCertificateToEnvelopePDF'] = undefined;
  /**
   * Metadata that indicates whether the `signerAttachCertificateToEnvelopePDF` property is editable. 
   * @member {module:model/SettingsMetadata} signerAttachCertificateToEnvelopePDFMetadata
   */
  exports.prototype['signerAttachCertificateToEnvelopePDFMetadata'] = undefined;
  /**
   * 
   * @member {String} signerAttachConcat
   */
  exports.prototype['signerAttachConcat'] = undefined;
  /**
   * Metadata that indicates whether the `signerAttachConcat` property is editable. 
   * @member {module:model/SettingsMetadata} signerAttachConcatMetadata
   */
  exports.prototype['signerAttachConcatMetadata'] = undefined;
  /**
   * 
   * @member {String} signerCanCreateAccount
   */
  exports.prototype['signerCanCreateAccount'] = undefined;
  /**
   * Metadata that indicates whether the `signerCanCreateAccount` property is editable. 
   * @member {module:model/SettingsMetadata} signerCanCreateAccountMetadata
   */
  exports.prototype['signerCanCreateAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} signerCanSignOnMobile
   */
  exports.prototype['signerCanSignOnMobile'] = undefined;
  /**
   * Metadata that indicates whether the `signerCanSignOnMobile` property is editable. 
   * @member {module:model/SettingsMetadata} signerCanSignOnMobileMetadata
   */
  exports.prototype['signerCanSignOnMobileMetadata'] = undefined;
  /**
   * 
   * @member {String} signerInSessionUseEnvelopeCompleteEmail
   */
  exports.prototype['signerInSessionUseEnvelopeCompleteEmail'] = undefined;
  /**
   * Metadata that indicates whether the `signerInSessionUseEnvelopeCompleteEmail` property is editable. 
   * @member {module:model/SettingsMetadata} signerInSessionUseEnvelopeCompleteEmailMetadata
   */
  exports.prototype['signerInSessionUseEnvelopeCompleteEmailMetadata'] = undefined;
  /**
   * 
   * @member {String} signerLoginRequirements
   */
  exports.prototype['signerLoginRequirements'] = undefined;
  /**
   * Metadata that indicates whether the `signerLoginRequirements` property is editable. 
   * @member {module:model/SettingsMetadata} signerLoginRequirementsMetadata
   */
  exports.prototype['signerLoginRequirementsMetadata'] = undefined;
  /**
   * 
   * @member {String} signerMustHaveAccount
   */
  exports.prototype['signerMustHaveAccount'] = undefined;
  /**
   * Metadata that indicates whether the `signerMustHaveAccount` property is editable. 
   * @member {module:model/SettingsMetadata} signerMustHaveAccountMetadata
   */
  exports.prototype['signerMustHaveAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} signerMustLoginToSign
   */
  exports.prototype['signerMustLoginToSign'] = undefined;
  /**
   * Metadata that indicates whether the `signerMustLoginToSign` property is editable. 
   * @member {module:model/SettingsMetadata} signerMustLoginToSignMetadata
   */
  exports.prototype['signerMustLoginToSignMetadata'] = undefined;
  /**
   * 
   * @member {String} signerShowSecureFieldInitialValues
   */
  exports.prototype['signerShowSecureFieldInitialValues'] = undefined;
  /**
   * Metadata that indicates whether the `signerShowSecureFieldInitialValues` property is editable. 
   * @member {module:model/SettingsMetadata} signerShowSecureFieldInitialValuesMetadata
   */
  exports.prototype['signerShowSecureFieldInitialValuesMetadata'] = undefined;
  /**
   * 
   * @member {String} signingSessionTimeout
   */
  exports.prototype['signingSessionTimeout'] = undefined;
  /**
   * Metadata that indicates whether the `signingSessionTimeout` property is editable. 
   * @member {module:model/SettingsMetadata} signingSessionTimeoutMetadata
   */
  exports.prototype['signingSessionTimeoutMetadata'] = undefined;
  /**
   * 
   * @member {String} signingUiVersion
   */
  exports.prototype['signingUiVersion'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/SettingsMetadata} signingUiVersionMetadata
   */
  exports.prototype['signingUiVersionMetadata'] = undefined;
  /**
   * 
   * @member {String} signTimeFormat
   */
  exports.prototype['signTimeFormat'] = undefined;
  /**
   * Metadata that indicates whether the `signTimeFormat` property is editable. 
   * @member {module:model/SettingsMetadata} signTimeFormatMetadata
   */
  exports.prototype['signTimeFormatMetadata'] = undefined;
  /**
   * 
   * @member {String} signTimeShowAmPm
   */
  exports.prototype['signTimeShowAmPm'] = undefined;
  /**
   * Metadata that indicates whether the `signTimeShowAmPm` property is editable. 
   * @member {module:model/SettingsMetadata} signTimeShowAmPmMetadata
   */
  exports.prototype['signTimeShowAmPmMetadata'] = undefined;
  /**
   * 
   * @member {String} simplifiedSendingEnabled
   */
  exports.prototype['simplifiedSendingEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `simplifiedSendingEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} simplifiedSendingEnabledMetadata
   */
  exports.prototype['simplifiedSendingEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} singleSignOnEnabled
   */
  exports.prototype['singleSignOnEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `singleSignOnEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} singleSignOnEnabledMetadata
   */
  exports.prototype['singleSignOnEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} skipAuthCompletedEnvelopes
   */
  exports.prototype['skipAuthCompletedEnvelopes'] = undefined;
  /**
   * Metadata that indicates whether the `skipAuthCompletedEnvelopes` property is editable. 
   * @member {module:model/SettingsMetadata} skipAuthCompletedEnvelopesMetadata
   */
  exports.prototype['skipAuthCompletedEnvelopesMetadata'] = undefined;
  /**
   * 
   * @member {String} socialIdRecipAuth
   */
  exports.prototype['socialIdRecipAuth'] = undefined;
  /**
   * Metadata that indicates whether the `socialIdRecipAuth` property is editable. 
   * @member {module:model/SettingsMetadata} socialIdRecipAuthMetadata
   */
  exports.prototype['socialIdRecipAuthMetadata'] = undefined;
  /**
   * 
   * @member {String} specifyDocumentVisibility
   */
  exports.prototype['specifyDocumentVisibility'] = undefined;
  /**
   * Metadata that indicates whether the `specifyDocumentVisibility` property is editable. 
   * @member {module:model/SettingsMetadata} specifyDocumentVisibilityMetadata
   */
  exports.prototype['specifyDocumentVisibilityMetadata'] = undefined;
  /**
   * 
   * @member {String} startInAdvancedCorrect
   */
  exports.prototype['startInAdvancedCorrect'] = undefined;
  /**
   * Metadata that indicates whether the `startInAdvancedCorrect` property is editable. 
   * @member {module:model/SettingsMetadata} startInAdvancedCorrectMetadata
   */
  exports.prototype['startInAdvancedCorrectMetadata'] = undefined;
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
   * @member {String} suppressCertificateEnforcement
   */
  exports.prototype['suppressCertificateEnforcement'] = undefined;
  /**
   * Metadata that indicates whether the `suppressCertificateEnforcement` property is editable. 
   * @member {module:model/SettingsMetadata} suppressCertificateEnforcementMetadata
   */
  exports.prototype['suppressCertificateEnforcementMetadata'] = undefined;
  /**
   * Account-wide tab settings.
   * @member {module:model/TabAccountSettings} tabAccountSettings
   */
  exports.prototype['tabAccountSettings'] = undefined;
  /**
   * 
   * @member {String} timezoneOffsetAPI
   */
  exports.prototype['timezoneOffsetAPI'] = undefined;
  /**
   * Metadata that indicates whether the `timezoneOffsetAPI` property is editable. 
   * @member {module:model/SettingsMetadata} timezoneOffsetAPIMetadata
   */
  exports.prototype['timezoneOffsetAPIMetadata'] = undefined;
  /**
   * 
   * @member {String} timezoneOffsetUI
   */
  exports.prototype['timezoneOffsetUI'] = undefined;
  /**
   * Metadata that indicates whether the `timezoneOffsetUI` property is editable. 
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
   * Metadata that indicates whether the `useAccountLevelEmail` property is editable. 
   * @member {module:model/SettingsMetadata} useAccountLevelEmailMetadata
   */
  exports.prototype['useAccountLevelEmailMetadata'] = undefined;
  /**
   * 
   * @member {String} useConsumerDisclosure
   */
  exports.prototype['useConsumerDisclosure'] = undefined;
  /**
   * Metadata that indicates whether the `useConsumerDisclosure` property is editable. 
   * @member {module:model/SettingsMetadata} useConsumerDisclosureMetadata
   */
  exports.prototype['useConsumerDisclosureMetadata'] = undefined;
  /**
   * 
   * @member {String} useConsumerDisclosureWithinAccount
   */
  exports.prototype['useConsumerDisclosureWithinAccount'] = undefined;
  /**
   * Metadata that indicates whether the `useConsumerDisclosureWithinAccount` property is editable. 
   * @member {module:model/SettingsMetadata} useConsumerDisclosureWithinAccountMetadata
   */
  exports.prototype['useConsumerDisclosureWithinAccountMetadata'] = undefined;
  /**
   * 
   * @member {String} useDerivedKeys
   */
  exports.prototype['useDerivedKeys'] = undefined;
  /**
   * Metadata that indicates whether the `useDerivedKeys` property is editable. 
   * @member {module:model/SettingsMetadata} useDerivedKeysMetadata
   */
  exports.prototype['useDerivedKeysMetadata'] = undefined;
  /**
   * 
   * @member {String} useDocuSignExpressSignerCertificate
   */
  exports.prototype['useDocuSignExpressSignerCertificate'] = undefined;
  /**
   * Metadata that indicates whether the `useDocuSignExpressSignerCertificate` property is editable. 
   * @member {module:model/SettingsMetadata} useDocuSignExpressSignerCertificateMetadata
   */
  exports.prototype['useDocuSignExpressSignerCertificateMetadata'] = undefined;
  /**
   * 
   * @member {String} useEnvelopeSearchMixedMode
   */
  exports.prototype['useEnvelopeSearchMixedMode'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useEnvelopeSearchMixedModeMetadata
   */
  exports.prototype['useEnvelopeSearchMixedModeMetadata'] = undefined;
  /**
   * 
   * @member {String} useMultiAppGroupsData
   */
  exports.prototype['useMultiAppGroupsData'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} useMultiAppGroupsDataMetadata
   */
  exports.prototype['useMultiAppGroupsDataMetadata'] = undefined;
  /**
   * 
   * @member {String} useNewBlobForPdf
   */
  exports.prototype['useNewBlobForPdf'] = undefined;
  /**
   * Metadata that indicates whether the `useNewBlobForPdf` property is editable. 
   * @member {module:model/SettingsMetadata} useNewBlobForPdfMetadata
   */
  exports.prototype['useNewBlobForPdfMetadata'] = undefined;
  /**
   * 
   * @member {String} useNewEnvelopeSearch
   */
  exports.prototype['useNewEnvelopeSearch'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} useNewEnvelopeSearchMetadata
   */
  exports.prototype['useNewEnvelopeSearchMetadata'] = undefined;
  /**
   * 
   * @member {String} useSAFESignerCertificates
   */
  exports.prototype['useSAFESignerCertificates'] = undefined;
  /**
   * Metadata that indicates whether the `useSAFESignerCertificates` property is editable. 
   * @member {module:model/SettingsMetadata} useSAFESignerCertificatesMetadata
   */
  exports.prototype['useSAFESignerCertificatesMetadata'] = undefined;
  /**
   * 
   * @member {String} usesAPI
   */
  exports.prototype['usesAPI'] = undefined;
  /**
   * Metadata that indicates whether the `usesAPI` property is editable. 
   * @member {module:model/SettingsMetadata} usesAPIMetadata
   */
  exports.prototype['usesAPIMetadata'] = undefined;
  /**
   * 
   * @member {String} useSignatureProviderPlatform
   */
  exports.prototype['useSignatureProviderPlatform'] = undefined;
  /**
   * Metadata that indicates whether the `useSignatureProviderPlatform` property is editable. 
   * @member {module:model/SettingsMetadata} useSignatureProviderPlatformMetadata
   */
  exports.prototype['useSignatureProviderPlatformMetadata'] = undefined;
  /**
   * 
   * @member {String} useSmartContractsV1
   */
  exports.prototype['useSmartContractsV1'] = undefined;
  /**
   * 
   * @member {String} validationsAllowed
   */
  exports.prototype['validationsAllowed'] = undefined;
  /**
   * Metadata that indicates whether the `validationsAllowed` property is editable. 
   * @member {module:model/SettingsMetadata} validationsAllowedMetadata
   */
  exports.prototype['validationsAllowedMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsBrand
   */
  exports.prototype['validationsBrand'] = undefined;
  /**
   * Metadata that indicates whether the `validationsBrand` property is editable. 
   * @member {module:model/SettingsMetadata} validationsBrandMetadata
   */
  exports.prototype['validationsBrandMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsCadence
   */
  exports.prototype['validationsCadence'] = undefined;
  /**
   * Metadata that indicates whether the `validationsCadence` property is editable. 
   * @member {module:model/SettingsMetadata} validationsCadenceMetadata
   */
  exports.prototype['validationsCadenceMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsEnabled
   */
  exports.prototype['validationsEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `validationsEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} validationsEnabledMetadata
   */
  exports.prototype['validationsEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} validationsReport
   */
  exports.prototype['validationsReport'] = undefined;
  /**
   * Metadata that indicates whether the `validationsReport` property is editable. 
   * @member {module:model/SettingsMetadata} validationsReportMetadata
   */
  exports.prototype['validationsReportMetadata'] = undefined;
  /**
   * 
   * @member {String} waterMarkEnabled
   */
  exports.prototype['waterMarkEnabled'] = undefined;
  /**
   * Metadata that indicates whether the `waterMarkEnabled` property is editable. 
   * @member {module:model/SettingsMetadata} waterMarkEnabledMetadata
   */
  exports.prototype['waterMarkEnabledMetadata'] = undefined;
  /**
   * 
   * @member {String} writeReminderToEnvelopeHistory
   */
  exports.prototype['writeReminderToEnvelopeHistory'] = undefined;
  /**
   * Metadata that indicates whether the `writeReminderToEnvelopeHistory` property is editable. 
   * @member {module:model/SettingsMetadata} writeReminderToEnvelopeHistoryMetadata
   */
  exports.prototype['writeReminderToEnvelopeHistoryMetadata'] = undefined;
  /**
   * 
   * @member {String} wurflMinAllowableScreenSize
   */
  exports.prototype['wurflMinAllowableScreenSize'] = undefined;
  /**
   * Metadata that indicates whether the `wurflMinAllowableScreenSize` property is editable. 
   * @member {module:model/SettingsMetadata} wurflMinAllowableScreenSizeMetadata
   */
  exports.prototype['wurflMinAllowableScreenSizeMetadata'] = undefined;



  return exports;
}));


