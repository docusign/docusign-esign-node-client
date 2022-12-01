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
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/AccessCodeFormat', 'model/AccountAddress', 'model/AccountBillingPlan', 'model/AccountBillingPlanResponse', 'model/AccountIdentityInputOption', 'model/AccountIdentityVerificationResponse', 'model/AccountIdentityVerificationStep', 'model/AccountIdentityVerificationWorkflow', 'model/AccountInformation', 'model/AccountMinimumPasswordLength', 'model/AccountNotification', 'model/AccountPasswordExpirePasswordDays', 'model/AccountPasswordLockoutDurationMinutes', 'model/AccountPasswordLockoutDurationType', 'model/AccountPasswordMinimumPasswordAgeDays', 'model/AccountPasswordQuestionsRequired', 'model/AccountPasswordRules', 'model/AccountPasswordStrengthType', 'model/AccountPasswordStrengthTypeOption', 'model/AccountRoleSettings', 'model/AccountSeals', 'model/AccountSettingsInformation', 'model/AccountSharedAccess', 'model/AccountSignature', 'model/AccountSignatureDefinition', 'model/AccountSignatureProvider', 'model/AccountSignatureProviderOption', 'model/AccountSignatureProviders', 'model/AccountSignaturesInformation', 'model/AccountUISettings', 'model/AddOn', 'model/AddressInformation', 'model/AddressInformationInput', 'model/AdminMessage', 'model/Agent', 'model/ApiRequestLog', 'model/ApiRequestLogsResult', 'model/AppStoreProduct', 'model/AppStoreReceipt', 'model/Approve', 'model/AskAnAdmin', 'model/Attachment', 'model/AuthenticationMethod', 'model/AuthenticationStatus', 'model/BccEmailAddress', 'model/BccEmailArchive', 'model/BccEmailArchiveHistory', 'model/BccEmailArchiveHistoryList', 'model/BccEmailArchiveList', 'model/BillingCharge', 'model/BillingChargeResponse', 'model/BillingDiscount', 'model/BillingEntityInformationResponse', 'model/BillingInvoice', 'model/BillingInvoiceItem', 'model/BillingInvoicesResponse', 'model/BillingInvoicesSummary', 'model/BillingPayment', 'model/BillingPaymentItem', 'model/BillingPaymentRequest', 'model/BillingPaymentResponse', 'model/BillingPaymentsResponse', 'model/BillingPlan', 'model/BillingPlanInformation', 'model/BillingPlanPreview', 'model/BillingPlanResponse', 'model/BillingPlanUpdateResponse', 'model/BillingPlansResponse', 'model/BillingPrice', 'model/Brand', 'model/BrandEmailContent', 'model/BrandLink', 'model/BrandLogos', 'model/BrandRequest', 'model/BrandResourceUrls', 'model/BrandResources', 'model/BrandResourcesList', 'model/BrandsRequest', 'model/BrandsResponse', 'model/BulkEnvelope', 'model/BulkEnvelopeStatus', 'model/BulkProcessRequest', 'model/BulkProcessResponse', 'model/BulkProcessResult', 'model/BulkProcessingListSummaries', 'model/BulkProcessingListSummary', 'model/BulkProcessingLists', 'model/BulkRecipient', 'model/BulkRecipientSignatureProvider', 'model/BulkRecipientTabLabel', 'model/BulkRecipientsResponse', 'model/BulkRecipientsUpdateResponse', 'model/BulkSendBatchActionRequest', 'model/BulkSendBatchError', 'model/BulkSendBatchRequest', 'model/BulkSendBatchStatus', 'model/BulkSendBatchSummaries', 'model/BulkSendBatchSummary', 'model/BulkSendEnvelopesInfo', 'model/BulkSendErrorStatus', 'model/BulkSendRequest', 'model/BulkSendResponse', 'model/BulkSendTestResponse', 'model/BulkSendingCopy', 'model/BulkSendingCopyCustomField', 'model/BulkSendingCopyRecipient', 'model/BulkSendingCopyTab', 'model/BulkSendingList', 'model/BulkSendingListSummaries', 'model/BulkSendingListSummary', 'model/CaptiveRecipient', 'model/CaptiveRecipientInformation', 'model/CarbonCopy', 'model/CertifiedDelivery', 'model/Checkbox', 'model/ChunkedUploadPart', 'model/ChunkedUploadRequest', 'model/ChunkedUploadResponse', 'model/CloudStorageProvider', 'model/CloudStorageProviders', 'model/Comment', 'model/CommentHistoryResult', 'model/CommentPublish', 'model/CommentThread', 'model/CommentsPublish', 'model/CommissionCounty', 'model/CommissionExpiration', 'model/CommissionNumber', 'model/CommissionState', 'model/Company', 'model/CompositeTemplate', 'model/ConditionalRecipientRule', 'model/ConditionalRecipientRuleCondition', 'model/ConditionalRecipientRuleFilter', 'model/ConnectConfigResults', 'model/ConnectCustomConfiguration', 'model/ConnectDebugLog', 'model/ConnectDeleteFailureResult', 'model/ConnectEventData', 'model/ConnectFailureFilter', 'model/ConnectFailureResult', 'model/ConnectFailureResults', 'model/ConnectHistoricalEnvelopeRepublish', 'model/ConnectLog', 'model/ConnectLogs', 'model/ConnectOAuthConfig', 'model/ConnectSalesforceField', 'model/ConnectSalesforceObject', 'model/ConnectUserInfo', 'model/ConnectUserObject', 'model/ConsentDetails', 'model/ConsoleViewRequest', 'model/ConsumerDisclosure', 'model/Contact', 'model/ContactGetResponse', 'model/ContactModRequest', 'model/ContactPhoneNumber', 'model/ContactUpdateResponse', 'model/CorrectViewRequest', 'model/Country', 'model/CreditCardInformation', 'model/CreditCardTypes', 'model/Currency', 'model/CurrencyFeatureSetPrice', 'model/CurrencyPlanPrice', 'model/CustomField', 'model/CustomFields', 'model/CustomFieldsEnvelope', 'model/CustomSettingsInformation', 'model/DateSigned', 'model/DateStampProperties', 'model/Decline', 'model/DelayedRouting', 'model/DelegationInfo', 'model/DiagnosticsSettingsInformation', 'model/DirectDebitProcessorInformation', 'model/DobInformationInput', 'model/DocGenFormField', 'model/DocGenSyntaxError', 'model/Document', 'model/DocumentFieldsInformation', 'model/DocumentHtmlCollapsibleDisplaySettings', 'model/DocumentHtmlDefinition', 'model/DocumentHtmlDefinitionOriginal', 'model/DocumentHtmlDefinitionOriginals', 'model/DocumentHtmlDefinitions', 'model/DocumentHtmlDisplayAnchor', 'model/DocumentHtmlDisplaySettings', 'model/DocumentTemplate', 'model/DocumentTemplateList', 'model/DocumentVisibility', 'model/DocumentVisibilityList', 'model/DowngradRequestBillingInfoResponse', 'model/DowngradeBillingPlanInformation', 'model/DowngradePlanUpdateResponse', 'model/DowngradeRequestInformation', 'model/Draw', 'model/ENoteConfiguration', 'model/Editor', 'model/Email', 'model/EmailAddress', 'model/EmailSettings', 'model/Envelope', 'model/EnvelopeAttachment', 'model/EnvelopeAttachmentsRequest', 'model/EnvelopeAttachmentsResult', 'model/EnvelopeAuditEvent', 'model/EnvelopeAuditEventResponse', 'model/EnvelopeCustomMetadata', 'model/EnvelopeDefinition', 'model/EnvelopeDelayRule', 'model/EnvelopeDocument', 'model/EnvelopeDocumentsResult', 'model/EnvelopeEvent', 'model/EnvelopeFormData', 'model/EnvelopeId', 'model/EnvelopeIdsRequest', 'model/EnvelopeMetadata', 'model/EnvelopeNotificationRequest', 'model/EnvelopePublishTransaction', 'model/EnvelopePublishTransactionErrorRollup', 'model/EnvelopePurgeConfiguration', 'model/EnvelopeSummary', 'model/EnvelopeTemplate', 'model/EnvelopeTemplateResults', 'model/EnvelopeTransactionStatus', 'model/EnvelopeTransferRule', 'model/EnvelopeTransferRuleInformation', 'model/EnvelopeTransferRuleRequest', 'model/EnvelopeUpdateSummary', 'model/EnvelopesInformation', 'model/ErrorDetails', 'model/EventNotification', 'model/EventResult', 'model/Expirations', 'model/ExternalDocServiceErrorDetails', 'model/ExternalDocumentSources', 'model/ExternalFile', 'model/ExternalFolder', 'model/ExternalPrimaryAccountRecipientAuthRequirements', 'model/FavoriteTemplatesContentItem', 'model/FavoriteTemplatesInfo', 'model/FeatureAvailableMetadata', 'model/FeatureSet', 'model/FileType', 'model/FileTypeList', 'model/Filter', 'model/FirstName', 'model/Folder', 'model/FolderItemResponse', 'model/FolderItemV2', 'model/FolderItemsResponse', 'model/FolderSharedItem', 'model/FoldersRequest', 'model/FoldersResponse', 'model/ForgottenPasswordInformation', 'model/FormDataItem', 'model/FormulaTab', 'model/FullName', 'model/GraphicsContext', 'model/Group', 'model/GroupInformation', 'model/IdCheckConfiguration', 'model/IdCheckInformationInput', 'model/IdCheckSecurityStep', 'model/IdEvidenceResourceToken', 'model/IdEvidenceViewLink', 'model/InPersonSigner', 'model/InitialHere', 'model/InlineTemplate', 'model/IntegratedConnectUserInfoList', 'model/IntegratedUserInfoList', 'model/Intermediary', 'model/Jurisdiction', 'model/LastName', 'model/LinkedExternalPrimaryAccount', 'model/List', 'model/ListCustomField', 'model/ListItem', 'model/LocalePolicy', 'model/LocalePolicyTab', 'model/LockInformation', 'model/LockRequest', 'model/LoginAccount', 'model/LoginInformation', 'model/MatchBox', 'model/MemberGroupSharedItem', 'model/MemberSharedItems', 'model/MergeField', 'model/MobileNotifierConfiguration', 'model/MobileNotifierConfigurationInformation', 'model/ModelDate', 'model/ModelNumber', 'model/Money', 'model/NameValue', 'model/NewAccountDefinition', 'model/NewAccountSummary', 'model/NewUser', 'model/NewUsersDefinition', 'model/NewUsersSummary', 'model/Notarize', 'model/Notary', 'model/NotaryHost', 'model/NotaryJournal', 'model/NotaryJournalCredibleWitness', 'model/NotaryJournalList', 'model/NotaryJournalMetaData', 'model/NotaryJurisdiction', 'model/NotaryJurisdictionList', 'model/NotaryRecipient', 'model/NotaryResult', 'model/NotarySeal', 'model/Note', 'model/Notification', 'model/NotificationDefaultSettings', 'model/NotificationDefaults', 'model/OauthAccess', 'model/OfflineAttributes', 'model/Page', 'model/PageImages', 'model/PageRequest', 'model/Participant', 'model/PathExtendedElement', 'model/PayPalLegacySettings', 'model/PaymentDetails', 'model/PaymentGatewayAccount', 'model/PaymentGatewayAccountSetting', 'model/PaymentGatewayAccountsInfo', 'model/PaymentLineItem', 'model/PaymentMethodWithOptions', 'model/PaymentProcessorInformation', 'model/PaymentSignerValues', 'model/PermissionProfile', 'model/PermissionProfileInformation', 'model/PhoneNumber', 'model/PlanInformation', 'model/PolyLine', 'model/PolyLineOverlay', 'model/PowerForm', 'model/PowerFormFormDataEnvelope', 'model/PowerFormFormDataRecipient', 'model/PowerFormRecipient', 'model/PowerFormSendersResponse', 'model/PowerFormsFormDataResponse', 'model/PowerFormsRequest', 'model/PowerFormsResponse', 'model/PrefillFormData', 'model/PrefillTabs', 'model/PropertyMetadata', 'model/Province', 'model/ProvisioningInformation', 'model/PurchasedEnvelopesInformation', 'model/Radio', 'model/RadioGroup', 'model/RecipientAdditionalNotification', 'model/RecipientAttachment', 'model/RecipientDomain', 'model/RecipientEmailNotification', 'model/RecipientEvent', 'model/RecipientFormData', 'model/RecipientGroup', 'model/RecipientIdentityInputOption', 'model/RecipientIdentityPhoneNumber', 'model/RecipientIdentityVerification', 'model/RecipientNamesResponse', 'model/RecipientOption', 'model/RecipientPhoneAuthentication', 'model/RecipientPhoneNumber', 'model/RecipientPreviewRequest', 'model/RecipientProofFile', 'model/RecipientRouting', 'model/RecipientRules', 'model/RecipientSMSAuthentication', 'model/RecipientSignatureInformation', 'model/RecipientSignatureProvider', 'model/RecipientSignatureProviderOptions', 'model/RecipientTokenClientURLs', 'model/RecipientUpdateResponse', 'model/RecipientViewRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/ReferralInformation', 'model/Reminders', 'model/ResourceInformation', 'model/ReturnUrlRequest', 'model/ScheduledSending', 'model/SealIdentifier', 'model/SealSign', 'model/SeatDiscount', 'model/SenderCompany', 'model/SenderEmailNotifications', 'model/SenderName', 'model/ServerTemplate', 'model/ServiceInformation', 'model/ServiceVersion', 'model/SettingsMetadata', 'model/SharedItem', 'model/SignHere', 'model/SignatureGroup', 'model/SignatureGroupDef', 'model/SignatureProviderRequiredOption', 'model/SignatureType', 'model/SignatureUser', 'model/SignatureUserDef', 'model/Signer', 'model/SignerAttachment', 'model/SignerEmailNotifications', 'model/SigningGroup', 'model/SigningGroupInformation', 'model/SigningGroupUser', 'model/SigningGroupUsers', 'model/SmartContractInformation', 'model/SmartSection', 'model/SmartSectionAnchorPosition', 'model/SmartSectionCollapsibleDisplaySettings', 'model/SmartSectionDisplaySettings', 'model/SocialAccountInformation', 'model/SocialAuthentication', 'model/Ssn', 'model/Ssn4InformationInput', 'model/Ssn9InformationInput', 'model/Stamp', 'model/SupportedLanguages', 'model/TabAccountSettings', 'model/TabGroup', 'model/TabMetadata', 'model/TabMetadataList', 'model/Tabs', 'model/TemplateCustomFields', 'model/TemplateDocumentVisibilityList', 'model/TemplateDocumentsResult', 'model/TemplateInformation', 'model/TemplateMatch', 'model/TemplateNotificationRequest', 'model/TemplateRecipients', 'model/TemplateRole', 'model/TemplateSharedItem', 'model/TemplateSummary', 'model/TemplateTabs', 'model/TemplateUpdateSummary', 'model/Text', 'model/TextCustomField', 'model/Title', 'model/UsageHistory', 'model/UserAccountManagementGranularInformation', 'model/UserInfo', 'model/UserInfoList', 'model/UserInformation', 'model/UserInformationList', 'model/UserPasswordInformation', 'model/UserPasswordRules', 'model/UserProfile', 'model/UserSettingsInformation', 'model/UserSharedItem', 'model/UserSignature', 'model/UserSignatureDefinition', 'model/UserSignaturesInformation', 'model/UserSocialIdResult', 'model/UsersResponse', 'model/View', 'model/ViewUrl', 'model/Watermark', 'model/Witness', 'model/Workflow', 'model/WorkflowStep', 'model/Workspace', 'model/WorkspaceFolderContents', 'model/WorkspaceItem', 'model/WorkspaceItemList', 'model/WorkspaceList', 'model/WorkspaceSettings', 'model/WorkspaceUser', 'model/WorkspaceUserAuthorization', 'model/Zip', 'api/AccountsApi', 'api/AuthenticationApi', 'api/BillingApi', 'api/BulkEnvelopesApi', 'api/BulkProcessDataApi', 'api/BulkProcessDataSendApi', 'api/CloudStorageApi', 'api/ConnectApi', 'api/CustomTabsApi', 'api/DiagnosticsApi', 'api/EmailArchiveApi', 'api/EnvelopesApi', 'api/FoldersApi', 'api/GroupsApi', 'api/NotaryApi', 'api/OrganizationsApi', 'api/PowerFormsApi', 'api/SigningGroupsApi', 'api/TemplatesApi', 'api/TrustServiceProvidersApi', 'api/UsersApi', 'api/WorkspacesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/AccessCodeFormat'), require('./model/AccountAddress'), require('./model/AccountBillingPlan'), require('./model/AccountBillingPlanResponse'), require('./model/AccountIdentityInputOption'), require('./model/AccountIdentityVerificationResponse'), require('./model/AccountIdentityVerificationStep'), require('./model/AccountIdentityVerificationWorkflow'), require('./model/AccountInformation'), require('./model/AccountMinimumPasswordLength'), require('./model/AccountNotification'), require('./model/AccountPasswordExpirePasswordDays'), require('./model/AccountPasswordLockoutDurationMinutes'), require('./model/AccountPasswordLockoutDurationType'), require('./model/AccountPasswordMinimumPasswordAgeDays'), require('./model/AccountPasswordQuestionsRequired'), require('./model/AccountPasswordRules'), require('./model/AccountPasswordStrengthType'), require('./model/AccountPasswordStrengthTypeOption'), require('./model/AccountRoleSettings'), require('./model/AccountSeals'), require('./model/AccountSettingsInformation'), require('./model/AccountSharedAccess'), require('./model/AccountSignature'), require('./model/AccountSignatureDefinition'), require('./model/AccountSignatureProvider'), require('./model/AccountSignatureProviderOption'), require('./model/AccountSignatureProviders'), require('./model/AccountSignaturesInformation'), require('./model/AccountUISettings'), require('./model/AddOn'), require('./model/AddressInformation'), require('./model/AddressInformationInput'), require('./model/AdminMessage'), require('./model/Agent'), require('./model/ApiRequestLog'), require('./model/ApiRequestLogsResult'), require('./model/AppStoreProduct'), require('./model/AppStoreReceipt'), require('./model/Approve'), require('./model/AskAnAdmin'), require('./model/Attachment'), require('./model/AuthenticationMethod'), require('./model/AuthenticationStatus'), require('./model/BccEmailAddress'), require('./model/BccEmailArchive'), require('./model/BccEmailArchiveHistory'), require('./model/BccEmailArchiveHistoryList'), require('./model/BccEmailArchiveList'), require('./model/BillingCharge'), require('./model/BillingChargeResponse'), require('./model/BillingDiscount'), require('./model/BillingEntityInformationResponse'), require('./model/BillingInvoice'), require('./model/BillingInvoiceItem'), require('./model/BillingInvoicesResponse'), require('./model/BillingInvoicesSummary'), require('./model/BillingPayment'), require('./model/BillingPaymentItem'), require('./model/BillingPaymentRequest'), require('./model/BillingPaymentResponse'), require('./model/BillingPaymentsResponse'), require('./model/BillingPlan'), require('./model/BillingPlanInformation'), require('./model/BillingPlanPreview'), require('./model/BillingPlanResponse'), require('./model/BillingPlanUpdateResponse'), require('./model/BillingPlansResponse'), require('./model/BillingPrice'), require('./model/Brand'), require('./model/BrandEmailContent'), require('./model/BrandLink'), require('./model/BrandLogos'), require('./model/BrandRequest'), require('./model/BrandResourceUrls'), require('./model/BrandResources'), require('./model/BrandResourcesList'), require('./model/BrandsRequest'), require('./model/BrandsResponse'), require('./model/BulkEnvelope'), require('./model/BulkEnvelopeStatus'), require('./model/BulkProcessRequest'), require('./model/BulkProcessResponse'), require('./model/BulkProcessResult'), require('./model/BulkProcessingListSummaries'), require('./model/BulkProcessingListSummary'), require('./model/BulkProcessingLists'), require('./model/BulkRecipient'), require('./model/BulkRecipientSignatureProvider'), require('./model/BulkRecipientTabLabel'), require('./model/BulkRecipientsResponse'), require('./model/BulkRecipientsUpdateResponse'), require('./model/BulkSendBatchActionRequest'), require('./model/BulkSendBatchError'), require('./model/BulkSendBatchRequest'), require('./model/BulkSendBatchStatus'), require('./model/BulkSendBatchSummaries'), require('./model/BulkSendBatchSummary'), require('./model/BulkSendEnvelopesInfo'), require('./model/BulkSendErrorStatus'), require('./model/BulkSendRequest'), require('./model/BulkSendResponse'), require('./model/BulkSendTestResponse'), require('./model/BulkSendingCopy'), require('./model/BulkSendingCopyCustomField'), require('./model/BulkSendingCopyRecipient'), require('./model/BulkSendingCopyTab'), require('./model/BulkSendingList'), require('./model/BulkSendingListSummaries'), require('./model/BulkSendingListSummary'), require('./model/CaptiveRecipient'), require('./model/CaptiveRecipientInformation'), require('./model/CarbonCopy'), require('./model/CertifiedDelivery'), require('./model/Checkbox'), require('./model/ChunkedUploadPart'), require('./model/ChunkedUploadRequest'), require('./model/ChunkedUploadResponse'), require('./model/CloudStorageProvider'), require('./model/CloudStorageProviders'), require('./model/Comment'), require('./model/CommentHistoryResult'), require('./model/CommentPublish'), require('./model/CommentThread'), require('./model/CommentsPublish'), require('./model/CommissionCounty'), require('./model/CommissionExpiration'), require('./model/CommissionNumber'), require('./model/CommissionState'), require('./model/Company'), require('./model/CompositeTemplate'), require('./model/ConditionalRecipientRule'), require('./model/ConditionalRecipientRuleCondition'), require('./model/ConditionalRecipientRuleFilter'), require('./model/ConnectConfigResults'), require('./model/ConnectCustomConfiguration'), require('./model/ConnectDebugLog'), require('./model/ConnectDeleteFailureResult'), require('./model/ConnectEventData'), require('./model/ConnectFailureFilter'), require('./model/ConnectFailureResult'), require('./model/ConnectFailureResults'), require('./model/ConnectHistoricalEnvelopeRepublish'), require('./model/ConnectLog'), require('./model/ConnectLogs'), require('./model/ConnectOAuthConfig'), require('./model/ConnectSalesforceField'), require('./model/ConnectSalesforceObject'), require('./model/ConnectUserInfo'), require('./model/ConnectUserObject'), require('./model/ConsentDetails'), require('./model/ConsoleViewRequest'), require('./model/ConsumerDisclosure'), require('./model/Contact'), require('./model/ContactGetResponse'), require('./model/ContactModRequest'), require('./model/ContactPhoneNumber'), require('./model/ContactUpdateResponse'), require('./model/CorrectViewRequest'), require('./model/Country'), require('./model/CreditCardInformation'), require('./model/CreditCardTypes'), require('./model/Currency'), require('./model/CurrencyFeatureSetPrice'), require('./model/CurrencyPlanPrice'), require('./model/CustomField'), require('./model/CustomFields'), require('./model/CustomFieldsEnvelope'), require('./model/CustomSettingsInformation'), require('./model/DateSigned'), require('./model/DateStampProperties'), require('./model/Decline'), require('./model/DelayedRouting'), require('./model/DelegationInfo'), require('./model/DiagnosticsSettingsInformation'), require('./model/DirectDebitProcessorInformation'), require('./model/DobInformationInput'), require('./model/DocGenFormField'), require('./model/DocGenSyntaxError'), require('./model/Document'), require('./model/DocumentFieldsInformation'), require('./model/DocumentHtmlCollapsibleDisplaySettings'), require('./model/DocumentHtmlDefinition'), require('./model/DocumentHtmlDefinitionOriginal'), require('./model/DocumentHtmlDefinitionOriginals'), require('./model/DocumentHtmlDefinitions'), require('./model/DocumentHtmlDisplayAnchor'), require('./model/DocumentHtmlDisplaySettings'), require('./model/DocumentTemplate'), require('./model/DocumentTemplateList'), require('./model/DocumentVisibility'), require('./model/DocumentVisibilityList'), require('./model/DowngradRequestBillingInfoResponse'), require('./model/DowngradeBillingPlanInformation'), require('./model/DowngradePlanUpdateResponse'), require('./model/DowngradeRequestInformation'), require('./model/Draw'), require('./model/ENoteConfiguration'), require('./model/Editor'), require('./model/Email'), require('./model/EmailAddress'), require('./model/EmailSettings'), require('./model/Envelope'), require('./model/EnvelopeAttachment'), require('./model/EnvelopeAttachmentsRequest'), require('./model/EnvelopeAttachmentsResult'), require('./model/EnvelopeAuditEvent'), require('./model/EnvelopeAuditEventResponse'), require('./model/EnvelopeCustomMetadata'), require('./model/EnvelopeDefinition'), require('./model/EnvelopeDelayRule'), require('./model/EnvelopeDocument'), require('./model/EnvelopeDocumentsResult'), require('./model/EnvelopeEvent'), require('./model/EnvelopeFormData'), require('./model/EnvelopeId'), require('./model/EnvelopeIdsRequest'), require('./model/EnvelopeMetadata'), require('./model/EnvelopeNotificationRequest'), require('./model/EnvelopePublishTransaction'), require('./model/EnvelopePublishTransactionErrorRollup'), require('./model/EnvelopePurgeConfiguration'), require('./model/EnvelopeSummary'), require('./model/EnvelopeTemplate'), require('./model/EnvelopeTemplateResults'), require('./model/EnvelopeTransactionStatus'), require('./model/EnvelopeTransferRule'), require('./model/EnvelopeTransferRuleInformation'), require('./model/EnvelopeTransferRuleRequest'), require('./model/EnvelopeUpdateSummary'), require('./model/EnvelopesInformation'), require('./model/ErrorDetails'), require('./model/EventNotification'), require('./model/EventResult'), require('./model/Expirations'), require('./model/ExternalDocServiceErrorDetails'), require('./model/ExternalDocumentSources'), require('./model/ExternalFile'), require('./model/ExternalFolder'), require('./model/ExternalPrimaryAccountRecipientAuthRequirements'), require('./model/FavoriteTemplatesContentItem'), require('./model/FavoriteTemplatesInfo'), require('./model/FeatureAvailableMetadata'), require('./model/FeatureSet'), require('./model/FileType'), require('./model/FileTypeList'), require('./model/Filter'), require('./model/FirstName'), require('./model/Folder'), require('./model/FolderItemResponse'), require('./model/FolderItemV2'), require('./model/FolderItemsResponse'), require('./model/FolderSharedItem'), require('./model/FoldersRequest'), require('./model/FoldersResponse'), require('./model/ForgottenPasswordInformation'), require('./model/FormDataItem'), require('./model/FormulaTab'), require('./model/FullName'), require('./model/GraphicsContext'), require('./model/Group'), require('./model/GroupInformation'), require('./model/IdCheckConfiguration'), require('./model/IdCheckInformationInput'), require('./model/IdCheckSecurityStep'), require('./model/IdEvidenceResourceToken'), require('./model/IdEvidenceViewLink'), require('./model/InPersonSigner'), require('./model/InitialHere'), require('./model/InlineTemplate'), require('./model/IntegratedConnectUserInfoList'), require('./model/IntegratedUserInfoList'), require('./model/Intermediary'), require('./model/Jurisdiction'), require('./model/LastName'), require('./model/LinkedExternalPrimaryAccount'), require('./model/List'), require('./model/ListCustomField'), require('./model/ListItem'), require('./model/LocalePolicy'), require('./model/LocalePolicyTab'), require('./model/LockInformation'), require('./model/LockRequest'), require('./model/LoginAccount'), require('./model/LoginInformation'), require('./model/MatchBox'), require('./model/MemberGroupSharedItem'), require('./model/MemberSharedItems'), require('./model/MergeField'), require('./model/MobileNotifierConfiguration'), require('./model/MobileNotifierConfigurationInformation'), require('./model/ModelDate'), require('./model/ModelNumber'), require('./model/Money'), require('./model/NameValue'), require('./model/NewAccountDefinition'), require('./model/NewAccountSummary'), require('./model/NewUser'), require('./model/NewUsersDefinition'), require('./model/NewUsersSummary'), require('./model/Notarize'), require('./model/Notary'), require('./model/NotaryHost'), require('./model/NotaryJournal'), require('./model/NotaryJournalCredibleWitness'), require('./model/NotaryJournalList'), require('./model/NotaryJournalMetaData'), require('./model/NotaryJurisdiction'), require('./model/NotaryJurisdictionList'), require('./model/NotaryRecipient'), require('./model/NotaryResult'), require('./model/NotarySeal'), require('./model/Note'), require('./model/Notification'), require('./model/NotificationDefaultSettings'), require('./model/NotificationDefaults'), require('./model/OauthAccess'), require('./model/OfflineAttributes'), require('./model/Page'), require('./model/PageImages'), require('./model/PageRequest'), require('./model/Participant'), require('./model/PathExtendedElement'), require('./model/PayPalLegacySettings'), require('./model/PaymentDetails'), require('./model/PaymentGatewayAccount'), require('./model/PaymentGatewayAccountSetting'), require('./model/PaymentGatewayAccountsInfo'), require('./model/PaymentLineItem'), require('./model/PaymentMethodWithOptions'), require('./model/PaymentProcessorInformation'), require('./model/PaymentSignerValues'), require('./model/PermissionProfile'), require('./model/PermissionProfileInformation'), require('./model/PhoneNumber'), require('./model/PlanInformation'), require('./model/PolyLine'), require('./model/PolyLineOverlay'), require('./model/PowerForm'), require('./model/PowerFormFormDataEnvelope'), require('./model/PowerFormFormDataRecipient'), require('./model/PowerFormRecipient'), require('./model/PowerFormSendersResponse'), require('./model/PowerFormsFormDataResponse'), require('./model/PowerFormsRequest'), require('./model/PowerFormsResponse'), require('./model/PrefillFormData'), require('./model/PrefillTabs'), require('./model/PropertyMetadata'), require('./model/Province'), require('./model/ProvisioningInformation'), require('./model/PurchasedEnvelopesInformation'), require('./model/Radio'), require('./model/RadioGroup'), require('./model/RecipientAdditionalNotification'), require('./model/RecipientAttachment'), require('./model/RecipientDomain'), require('./model/RecipientEmailNotification'), require('./model/RecipientEvent'), require('./model/RecipientFormData'), require('./model/RecipientGroup'), require('./model/RecipientIdentityInputOption'), require('./model/RecipientIdentityPhoneNumber'), require('./model/RecipientIdentityVerification'), require('./model/RecipientNamesResponse'), require('./model/RecipientOption'), require('./model/RecipientPhoneAuthentication'), require('./model/RecipientPhoneNumber'), require('./model/RecipientPreviewRequest'), require('./model/RecipientProofFile'), require('./model/RecipientRouting'), require('./model/RecipientRules'), require('./model/RecipientSMSAuthentication'), require('./model/RecipientSignatureInformation'), require('./model/RecipientSignatureProvider'), require('./model/RecipientSignatureProviderOptions'), require('./model/RecipientTokenClientURLs'), require('./model/RecipientUpdateResponse'), require('./model/RecipientViewRequest'), require('./model/Recipients'), require('./model/RecipientsUpdateSummary'), require('./model/ReferralInformation'), require('./model/Reminders'), require('./model/ResourceInformation'), require('./model/ReturnUrlRequest'), require('./model/ScheduledSending'), require('./model/SealIdentifier'), require('./model/SealSign'), require('./model/SeatDiscount'), require('./model/SenderCompany'), require('./model/SenderEmailNotifications'), require('./model/SenderName'), require('./model/ServerTemplate'), require('./model/ServiceInformation'), require('./model/ServiceVersion'), require('./model/SettingsMetadata'), require('./model/SharedItem'), require('./model/SignHere'), require('./model/SignatureGroup'), require('./model/SignatureGroupDef'), require('./model/SignatureProviderRequiredOption'), require('./model/SignatureType'), require('./model/SignatureUser'), require('./model/SignatureUserDef'), require('./model/Signer'), require('./model/SignerAttachment'), require('./model/SignerEmailNotifications'), require('./model/SigningGroup'), require('./model/SigningGroupInformation'), require('./model/SigningGroupUser'), require('./model/SigningGroupUsers'), require('./model/SmartContractInformation'), require('./model/SmartSection'), require('./model/SmartSectionAnchorPosition'), require('./model/SmartSectionCollapsibleDisplaySettings'), require('./model/SmartSectionDisplaySettings'), require('./model/SocialAccountInformation'), require('./model/SocialAuthentication'), require('./model/Ssn'), require('./model/Ssn4InformationInput'), require('./model/Ssn9InformationInput'), require('./model/Stamp'), require('./model/SupportedLanguages'), require('./model/TabAccountSettings'), require('./model/TabGroup'), require('./model/TabMetadata'), require('./model/TabMetadataList'), require('./model/Tabs'), require('./model/TemplateCustomFields'), require('./model/TemplateDocumentVisibilityList'), require('./model/TemplateDocumentsResult'), require('./model/TemplateInformation'), require('./model/TemplateMatch'), require('./model/TemplateNotificationRequest'), require('./model/TemplateRecipients'), require('./model/TemplateRole'), require('./model/TemplateSharedItem'), require('./model/TemplateSummary'), require('./model/TemplateTabs'), require('./model/TemplateUpdateSummary'), require('./model/Text'), require('./model/TextCustomField'), require('./model/Title'), require('./model/UsageHistory'), require('./model/UserAccountManagementGranularInformation'), require('./model/UserInfo'), require('./model/UserInfoList'), require('./model/UserInformation'), require('./model/UserInformationList'), require('./model/UserPasswordInformation'), require('./model/UserPasswordRules'), require('./model/UserProfile'), require('./model/UserSettingsInformation'), require('./model/UserSharedItem'), require('./model/UserSignature'), require('./model/UserSignatureDefinition'), require('./model/UserSignaturesInformation'), require('./model/UserSocialIdResult'), require('./model/UsersResponse'), require('./model/View'), require('./model/ViewUrl'), require('./model/Watermark'), require('./model/Witness'), require('./model/Workflow'), require('./model/WorkflowStep'), require('./model/Workspace'), require('./model/WorkspaceFolderContents'), require('./model/WorkspaceItem'), require('./model/WorkspaceItemList'), require('./model/WorkspaceList'), require('./model/WorkspaceSettings'), require('./model/WorkspaceUser'), require('./model/WorkspaceUserAuthorization'), require('./model/Zip'), require('./api/AccountsApi'), require('./api/AuthenticationApi'), require('./api/BillingApi'), require('./api/BulkEnvelopesApi'), require('./api/BulkProcessDataApi'), require('./api/BulkProcessDataSendApi'), require('./api/CloudStorageApi'), require('./api/ConnectApi'), require('./api/CustomTabsApi'), require('./api/DiagnosticsApi'), require('./api/EmailArchiveApi'), require('./api/EnvelopesApi'), require('./api/FoldersApi'), require('./api/GroupsApi'), require('./api/NotaryApi'), require('./api/OrganizationsApi'), require('./api/PowerFormsApi'), require('./api/SigningGroupsApi'), require('./api/TemplatesApi'), require('./api/TrustServiceProvidersApi'), require('./api/UsersApi'), require('./api/WorkspacesApi'));
  }
}(function(Configuration, ApiClient, AccessCodeFormat, AccountAddress, AccountBillingPlan, AccountBillingPlanResponse, AccountIdentityInputOption, AccountIdentityVerificationResponse, AccountIdentityVerificationStep, AccountIdentityVerificationWorkflow, AccountInformation, AccountMinimumPasswordLength, AccountNotification, AccountPasswordExpirePasswordDays, AccountPasswordLockoutDurationMinutes, AccountPasswordLockoutDurationType, AccountPasswordMinimumPasswordAgeDays, AccountPasswordQuestionsRequired, AccountPasswordRules, AccountPasswordStrengthType, AccountPasswordStrengthTypeOption, AccountRoleSettings, AccountSeals, AccountSettingsInformation, AccountSharedAccess, AccountSignature, AccountSignatureDefinition, AccountSignatureProvider, AccountSignatureProviderOption, AccountSignatureProviders, AccountSignaturesInformation, AccountUISettings, AddOn, AddressInformation, AddressInformationInput, AdminMessage, Agent, ApiRequestLog, ApiRequestLogsResult, AppStoreProduct, AppStoreReceipt, Approve, AskAnAdmin, Attachment, AuthenticationMethod, AuthenticationStatus, BccEmailAddress, BccEmailArchive, BccEmailArchiveHistory, BccEmailArchiveHistoryList, BccEmailArchiveList, BillingCharge, BillingChargeResponse, BillingDiscount, BillingEntityInformationResponse, BillingInvoice, BillingInvoiceItem, BillingInvoicesResponse, BillingInvoicesSummary, BillingPayment, BillingPaymentItem, BillingPaymentRequest, BillingPaymentResponse, BillingPaymentsResponse, BillingPlan, BillingPlanInformation, BillingPlanPreview, BillingPlanResponse, BillingPlanUpdateResponse, BillingPlansResponse, BillingPrice, Brand, BrandEmailContent, BrandLink, BrandLogos, BrandRequest, BrandResourceUrls, BrandResources, BrandResourcesList, BrandsRequest, BrandsResponse, BulkEnvelope, BulkEnvelopeStatus, BulkProcessRequest, BulkProcessResponse, BulkProcessResult, BulkProcessingListSummaries, BulkProcessingListSummary, BulkProcessingLists, BulkRecipient, BulkRecipientSignatureProvider, BulkRecipientTabLabel, BulkRecipientsResponse, BulkRecipientsUpdateResponse, BulkSendBatchActionRequest, BulkSendBatchError, BulkSendBatchRequest, BulkSendBatchStatus, BulkSendBatchSummaries, BulkSendBatchSummary, BulkSendEnvelopesInfo, BulkSendErrorStatus, BulkSendRequest, BulkSendResponse, BulkSendTestResponse, BulkSendingCopy, BulkSendingCopyCustomField, BulkSendingCopyRecipient, BulkSendingCopyTab, BulkSendingList, BulkSendingListSummaries, BulkSendingListSummary, CaptiveRecipient, CaptiveRecipientInformation, CarbonCopy, CertifiedDelivery, Checkbox, ChunkedUploadPart, ChunkedUploadRequest, ChunkedUploadResponse, CloudStorageProvider, CloudStorageProviders, Comment, CommentHistoryResult, CommentPublish, CommentThread, CommentsPublish, CommissionCounty, CommissionExpiration, CommissionNumber, CommissionState, Company, CompositeTemplate, ConditionalRecipientRule, ConditionalRecipientRuleCondition, ConditionalRecipientRuleFilter, ConnectConfigResults, ConnectCustomConfiguration, ConnectDebugLog, ConnectDeleteFailureResult, ConnectEventData, ConnectFailureFilter, ConnectFailureResult, ConnectFailureResults, ConnectHistoricalEnvelopeRepublish, ConnectLog, ConnectLogs, ConnectOAuthConfig, ConnectSalesforceField, ConnectSalesforceObject, ConnectUserInfo, ConnectUserObject, ConsentDetails, ConsoleViewRequest, ConsumerDisclosure, Contact, ContactGetResponse, ContactModRequest, ContactPhoneNumber, ContactUpdateResponse, CorrectViewRequest, Country, CreditCardInformation, CreditCardTypes, Currency, CurrencyFeatureSetPrice, CurrencyPlanPrice, CustomField, CustomFields, CustomFieldsEnvelope, CustomSettingsInformation, DateSigned, DateStampProperties, Decline, DelayedRouting, DelegationInfo, DiagnosticsSettingsInformation, DirectDebitProcessorInformation, DobInformationInput, DocGenFormField, DocGenSyntaxError, Document, DocumentFieldsInformation, DocumentHtmlCollapsibleDisplaySettings, DocumentHtmlDefinition, DocumentHtmlDefinitionOriginal, DocumentHtmlDefinitionOriginals, DocumentHtmlDefinitions, DocumentHtmlDisplayAnchor, DocumentHtmlDisplaySettings, DocumentTemplate, DocumentTemplateList, DocumentVisibility, DocumentVisibilityList, DowngradRequestBillingInfoResponse, DowngradeBillingPlanInformation, DowngradePlanUpdateResponse, DowngradeRequestInformation, Draw, ENoteConfiguration, Editor, Email, EmailAddress, EmailSettings, Envelope, EnvelopeAttachment, EnvelopeAttachmentsRequest, EnvelopeAttachmentsResult, EnvelopeAuditEvent, EnvelopeAuditEventResponse, EnvelopeCustomMetadata, EnvelopeDefinition, EnvelopeDelayRule, EnvelopeDocument, EnvelopeDocumentsResult, EnvelopeEvent, EnvelopeFormData, EnvelopeId, EnvelopeIdsRequest, EnvelopeMetadata, EnvelopeNotificationRequest, EnvelopePublishTransaction, EnvelopePublishTransactionErrorRollup, EnvelopePurgeConfiguration, EnvelopeSummary, EnvelopeTemplate, EnvelopeTemplateResults, EnvelopeTransactionStatus, EnvelopeTransferRule, EnvelopeTransferRuleInformation, EnvelopeTransferRuleRequest, EnvelopeUpdateSummary, EnvelopesInformation, ErrorDetails, EventNotification, EventResult, Expirations, ExternalDocServiceErrorDetails, ExternalDocumentSources, ExternalFile, ExternalFolder, ExternalPrimaryAccountRecipientAuthRequirements, FavoriteTemplatesContentItem, FavoriteTemplatesInfo, FeatureAvailableMetadata, FeatureSet, FileType, FileTypeList, Filter, FirstName, Folder, FolderItemResponse, FolderItemV2, FolderItemsResponse, FolderSharedItem, FoldersRequest, FoldersResponse, ForgottenPasswordInformation, FormDataItem, FormulaTab, FullName, GraphicsContext, Group, GroupInformation, IdCheckConfiguration, IdCheckInformationInput, IdCheckSecurityStep, IdEvidenceResourceToken, IdEvidenceViewLink, InPersonSigner, InitialHere, InlineTemplate, IntegratedConnectUserInfoList, IntegratedUserInfoList, Intermediary, Jurisdiction, LastName, LinkedExternalPrimaryAccount, List, ListCustomField, ListItem, LocalePolicy, LocalePolicyTab, LockInformation, LockRequest, LoginAccount, LoginInformation, MatchBox, MemberGroupSharedItem, MemberSharedItems, MergeField, MobileNotifierConfiguration, MobileNotifierConfigurationInformation, ModelDate, ModelNumber, Money, NameValue, NewAccountDefinition, NewAccountSummary, NewUser, NewUsersDefinition, NewUsersSummary, Notarize, Notary, NotaryHost, NotaryJournal, NotaryJournalCredibleWitness, NotaryJournalList, NotaryJournalMetaData, NotaryJurisdiction, NotaryJurisdictionList, NotaryRecipient, NotaryResult, NotarySeal, Note, Notification, NotificationDefaultSettings, NotificationDefaults, OauthAccess, OfflineAttributes, Page, PageImages, PageRequest, Participant, PathExtendedElement, PayPalLegacySettings, PaymentDetails, PaymentGatewayAccount, PaymentGatewayAccountSetting, PaymentGatewayAccountsInfo, PaymentLineItem, PaymentMethodWithOptions, PaymentProcessorInformation, PaymentSignerValues, PermissionProfile, PermissionProfileInformation, PhoneNumber, PlanInformation, PolyLine, PolyLineOverlay, PowerForm, PowerFormFormDataEnvelope, PowerFormFormDataRecipient, PowerFormRecipient, PowerFormSendersResponse, PowerFormsFormDataResponse, PowerFormsRequest, PowerFormsResponse, PrefillFormData, PrefillTabs, PropertyMetadata, Province, ProvisioningInformation, PurchasedEnvelopesInformation, Radio, RadioGroup, RecipientAdditionalNotification, RecipientAttachment, RecipientDomain, RecipientEmailNotification, RecipientEvent, RecipientFormData, RecipientGroup, RecipientIdentityInputOption, RecipientIdentityPhoneNumber, RecipientIdentityVerification, RecipientNamesResponse, RecipientOption, RecipientPhoneAuthentication, RecipientPhoneNumber, RecipientPreviewRequest, RecipientProofFile, RecipientRouting, RecipientRules, RecipientSMSAuthentication, RecipientSignatureInformation, RecipientSignatureProvider, RecipientSignatureProviderOptions, RecipientTokenClientURLs, RecipientUpdateResponse, RecipientViewRequest, Recipients, RecipientsUpdateSummary, ReferralInformation, Reminders, ResourceInformation, ReturnUrlRequest, ScheduledSending, SealIdentifier, SealSign, SeatDiscount, SenderCompany, SenderEmailNotifications, SenderName, ServerTemplate, ServiceInformation, ServiceVersion, SettingsMetadata, SharedItem, SignHere, SignatureGroup, SignatureGroupDef, SignatureProviderRequiredOption, SignatureType, SignatureUser, SignatureUserDef, Signer, SignerAttachment, SignerEmailNotifications, SigningGroup, SigningGroupInformation, SigningGroupUser, SigningGroupUsers, SmartContractInformation, SmartSection, SmartSectionAnchorPosition, SmartSectionCollapsibleDisplaySettings, SmartSectionDisplaySettings, SocialAccountInformation, SocialAuthentication, Ssn, Ssn4InformationInput, Ssn9InformationInput, Stamp, SupportedLanguages, TabAccountSettings, TabGroup, TabMetadata, TabMetadataList, Tabs, TemplateCustomFields, TemplateDocumentVisibilityList, TemplateDocumentsResult, TemplateInformation, TemplateMatch, TemplateNotificationRequest, TemplateRecipients, TemplateRole, TemplateSharedItem, TemplateSummary, TemplateTabs, TemplateUpdateSummary, Text, TextCustomField, Title, UsageHistory, UserAccountManagementGranularInformation, UserInfo, UserInfoList, UserInformation, UserInformationList, UserPasswordInformation, UserPasswordRules, UserProfile, UserSettingsInformation, UserSharedItem, UserSignature, UserSignatureDefinition, UserSignaturesInformation, UserSocialIdResult, UsersResponse, View, ViewUrl, Watermark, Witness, Workflow, WorkflowStep, Workspace, WorkspaceFolderContents, WorkspaceItem, WorkspaceItemList, WorkspaceList, WorkspaceSettings, WorkspaceUser, WorkspaceUserAuthorization, Zip, AccountsApi, AuthenticationApi, BillingApi, BulkEnvelopesApi, BulkProcessDataApi, BulkProcessDataSendApi, CloudStorageApi, ConnectApi, CustomTabsApi, DiagnosticsApi, EmailArchiveApi, EnvelopesApi, FoldersApi, GroupsApi, NotaryApi, OrganizationsApi, PowerFormsApi, SigningGroupsApi, TemplatesApi, TrustServiceProvidersApi, UsersApi, WorkspacesApi) {
  'use strict';

  /**
   * DocuSign Node.js API client..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Docusign = require('index'); // See note below*.
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   */
  var exports = {
	/**
	 * The configuration constructor.
	 * @property {module:Configuration}
	 */
	 Configuration: Configuration,
	/**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessCodeFormat model constructor.
     * @property {module:model/AccessCodeFormat}
     */
    AccessCodeFormat: AccessCodeFormat,
    /**
     * The AccountAddress model constructor.
     * @property {module:model/AccountAddress}
     */
    AccountAddress: AccountAddress,
    /**
     * The AccountBillingPlan model constructor.
     * @property {module:model/AccountBillingPlan}
     */
    AccountBillingPlan: AccountBillingPlan,
    /**
     * The AccountBillingPlanResponse model constructor.
     * @property {module:model/AccountBillingPlanResponse}
     */
    AccountBillingPlanResponse: AccountBillingPlanResponse,
    /**
     * The AccountIdentityInputOption model constructor.
     * @property {module:model/AccountIdentityInputOption}
     */
    AccountIdentityInputOption: AccountIdentityInputOption,
    /**
     * The AccountIdentityVerificationResponse model constructor.
     * @property {module:model/AccountIdentityVerificationResponse}
     */
    AccountIdentityVerificationResponse: AccountIdentityVerificationResponse,
    /**
     * The AccountIdentityVerificationStep model constructor.
     * @property {module:model/AccountIdentityVerificationStep}
     */
    AccountIdentityVerificationStep: AccountIdentityVerificationStep,
    /**
     * The AccountIdentityVerificationWorkflow model constructor.
     * @property {module:model/AccountIdentityVerificationWorkflow}
     */
    AccountIdentityVerificationWorkflow: AccountIdentityVerificationWorkflow,
    /**
     * The AccountInformation model constructor.
     * @property {module:model/AccountInformation}
     */
    AccountInformation: AccountInformation,
    /**
     * The AccountMinimumPasswordLength model constructor.
     * @property {module:model/AccountMinimumPasswordLength}
     */
    AccountMinimumPasswordLength: AccountMinimumPasswordLength,
    /**
     * The AccountNotification model constructor.
     * @property {module:model/AccountNotification}
     */
    AccountNotification: AccountNotification,
    /**
     * The AccountPasswordExpirePasswordDays model constructor.
     * @property {module:model/AccountPasswordExpirePasswordDays}
     */
    AccountPasswordExpirePasswordDays: AccountPasswordExpirePasswordDays,
    /**
     * The AccountPasswordLockoutDurationMinutes model constructor.
     * @property {module:model/AccountPasswordLockoutDurationMinutes}
     */
    AccountPasswordLockoutDurationMinutes: AccountPasswordLockoutDurationMinutes,
    /**
     * The AccountPasswordLockoutDurationType model constructor.
     * @property {module:model/AccountPasswordLockoutDurationType}
     */
    AccountPasswordLockoutDurationType: AccountPasswordLockoutDurationType,
    /**
     * The AccountPasswordMinimumPasswordAgeDays model constructor.
     * @property {module:model/AccountPasswordMinimumPasswordAgeDays}
     */
    AccountPasswordMinimumPasswordAgeDays: AccountPasswordMinimumPasswordAgeDays,
    /**
     * The AccountPasswordQuestionsRequired model constructor.
     * @property {module:model/AccountPasswordQuestionsRequired}
     */
    AccountPasswordQuestionsRequired: AccountPasswordQuestionsRequired,
    /**
     * The AccountPasswordRules model constructor.
     * @property {module:model/AccountPasswordRules}
     */
    AccountPasswordRules: AccountPasswordRules,
    /**
     * The AccountPasswordStrengthType model constructor.
     * @property {module:model/AccountPasswordStrengthType}
     */
    AccountPasswordStrengthType: AccountPasswordStrengthType,
    /**
     * The AccountPasswordStrengthTypeOption model constructor.
     * @property {module:model/AccountPasswordStrengthTypeOption}
     */
    AccountPasswordStrengthTypeOption: AccountPasswordStrengthTypeOption,
    /**
     * The AccountRoleSettings model constructor.
     * @property {module:model/AccountRoleSettings}
     */
    AccountRoleSettings: AccountRoleSettings,
    /**
     * The AccountSeals model constructor.
     * @property {module:model/AccountSeals}
     */
    AccountSeals: AccountSeals,
    /**
     * The AccountSettingsInformation model constructor.
     * @property {module:model/AccountSettingsInformation}
     */
    AccountSettingsInformation: AccountSettingsInformation,
    /**
     * The AccountSharedAccess model constructor.
     * @property {module:model/AccountSharedAccess}
     */
    AccountSharedAccess: AccountSharedAccess,
    /**
     * The AccountSignature model constructor.
     * @property {module:model/AccountSignature}
     */
    AccountSignature: AccountSignature,
    /**
     * The AccountSignatureDefinition model constructor.
     * @property {module:model/AccountSignatureDefinition}
     */
    AccountSignatureDefinition: AccountSignatureDefinition,
    /**
     * The AccountSignatureProvider model constructor.
     * @property {module:model/AccountSignatureProvider}
     */
    AccountSignatureProvider: AccountSignatureProvider,
    /**
     * The AccountSignatureProviderOption model constructor.
     * @property {module:model/AccountSignatureProviderOption}
     */
    AccountSignatureProviderOption: AccountSignatureProviderOption,
    /**
     * The AccountSignatureProviders model constructor.
     * @property {module:model/AccountSignatureProviders}
     */
    AccountSignatureProviders: AccountSignatureProviders,
    /**
     * The AccountSignaturesInformation model constructor.
     * @property {module:model/AccountSignaturesInformation}
     */
    AccountSignaturesInformation: AccountSignaturesInformation,
    /**
     * The AccountUISettings model constructor.
     * @property {module:model/AccountUISettings}
     */
    AccountUISettings: AccountUISettings,
    /**
     * The AddOn model constructor.
     * @property {module:model/AddOn}
     */
    AddOn: AddOn,
    /**
     * The AddressInformation model constructor.
     * @property {module:model/AddressInformation}
     */
    AddressInformation: AddressInformation,
    /**
     * The AddressInformationInput model constructor.
     * @property {module:model/AddressInformationInput}
     */
    AddressInformationInput: AddressInformationInput,
    /**
     * The AdminMessage model constructor.
     * @property {module:model/AdminMessage}
     */
    AdminMessage: AdminMessage,
    /**
     * The Agent model constructor.
     * @property {module:model/Agent}
     */
    Agent: Agent,
    /**
     * The ApiRequestLog model constructor.
     * @property {module:model/ApiRequestLog}
     */
    ApiRequestLog: ApiRequestLog,
    /**
     * The ApiRequestLogsResult model constructor.
     * @property {module:model/ApiRequestLogsResult}
     */
    ApiRequestLogsResult: ApiRequestLogsResult,
    /**
     * The AppStoreProduct model constructor.
     * @property {module:model/AppStoreProduct}
     */
    AppStoreProduct: AppStoreProduct,
    /**
     * The AppStoreReceipt model constructor.
     * @property {module:model/AppStoreReceipt}
     */
    AppStoreReceipt: AppStoreReceipt,
    /**
     * The Approve model constructor.
     * @property {module:model/Approve}
     */
    Approve: Approve,
    /**
     * The AskAnAdmin model constructor.
     * @property {module:model/AskAnAdmin}
     */
    AskAnAdmin: AskAnAdmin,
    /**
     * The Attachment model constructor.
     * @property {module:model/Attachment}
     */
    Attachment: Attachment,
    /**
     * The AuthenticationMethod model constructor.
     * @property {module:model/AuthenticationMethod}
     */
    AuthenticationMethod: AuthenticationMethod,
    /**
     * The AuthenticationStatus model constructor.
     * @property {module:model/AuthenticationStatus}
     */
    AuthenticationStatus: AuthenticationStatus,
    /**
     * The BccEmailAddress model constructor.
     * @property {module:model/BccEmailAddress}
     */
    BccEmailAddress: BccEmailAddress,
    /**
     * The BccEmailArchive model constructor.
     * @property {module:model/BccEmailArchive}
     */
    BccEmailArchive: BccEmailArchive,
    /**
     * The BccEmailArchiveHistory model constructor.
     * @property {module:model/BccEmailArchiveHistory}
     */
    BccEmailArchiveHistory: BccEmailArchiveHistory,
    /**
     * The BccEmailArchiveHistoryList model constructor.
     * @property {module:model/BccEmailArchiveHistoryList}
     */
    BccEmailArchiveHistoryList: BccEmailArchiveHistoryList,
    /**
     * The BccEmailArchiveList model constructor.
     * @property {module:model/BccEmailArchiveList}
     */
    BccEmailArchiveList: BccEmailArchiveList,
    /**
     * The BillingCharge model constructor.
     * @property {module:model/BillingCharge}
     */
    BillingCharge: BillingCharge,
    /**
     * The BillingChargeResponse model constructor.
     * @property {module:model/BillingChargeResponse}
     */
    BillingChargeResponse: BillingChargeResponse,
    /**
     * The BillingDiscount model constructor.
     * @property {module:model/BillingDiscount}
     */
    BillingDiscount: BillingDiscount,
    /**
     * The BillingEntityInformationResponse model constructor.
     * @property {module:model/BillingEntityInformationResponse}
     */
    BillingEntityInformationResponse: BillingEntityInformationResponse,
    /**
     * The BillingInvoice model constructor.
     * @property {module:model/BillingInvoice}
     */
    BillingInvoice: BillingInvoice,
    /**
     * The BillingInvoiceItem model constructor.
     * @property {module:model/BillingInvoiceItem}
     */
    BillingInvoiceItem: BillingInvoiceItem,
    /**
     * The BillingInvoicesResponse model constructor.
     * @property {module:model/BillingInvoicesResponse}
     */
    BillingInvoicesResponse: BillingInvoicesResponse,
    /**
     * The BillingInvoicesSummary model constructor.
     * @property {module:model/BillingInvoicesSummary}
     */
    BillingInvoicesSummary: BillingInvoicesSummary,
    /**
     * The BillingPayment model constructor.
     * @property {module:model/BillingPayment}
     */
    BillingPayment: BillingPayment,
    /**
     * The BillingPaymentItem model constructor.
     * @property {module:model/BillingPaymentItem}
     */
    BillingPaymentItem: BillingPaymentItem,
    /**
     * The BillingPaymentRequest model constructor.
     * @property {module:model/BillingPaymentRequest}
     */
    BillingPaymentRequest: BillingPaymentRequest,
    /**
     * The BillingPaymentResponse model constructor.
     * @property {module:model/BillingPaymentResponse}
     */
    BillingPaymentResponse: BillingPaymentResponse,
    /**
     * The BillingPaymentsResponse model constructor.
     * @property {module:model/BillingPaymentsResponse}
     */
    BillingPaymentsResponse: BillingPaymentsResponse,
    /**
     * The BillingPlan model constructor.
     * @property {module:model/BillingPlan}
     */
    BillingPlan: BillingPlan,
    /**
     * The BillingPlanInformation model constructor.
     * @property {module:model/BillingPlanInformation}
     */
    BillingPlanInformation: BillingPlanInformation,
    /**
     * The BillingPlanPreview model constructor.
     * @property {module:model/BillingPlanPreview}
     */
    BillingPlanPreview: BillingPlanPreview,
    /**
     * The BillingPlanResponse model constructor.
     * @property {module:model/BillingPlanResponse}
     */
    BillingPlanResponse: BillingPlanResponse,
    /**
     * The BillingPlanUpdateResponse model constructor.
     * @property {module:model/BillingPlanUpdateResponse}
     */
    BillingPlanUpdateResponse: BillingPlanUpdateResponse,
    /**
     * The BillingPlansResponse model constructor.
     * @property {module:model/BillingPlansResponse}
     */
    BillingPlansResponse: BillingPlansResponse,
    /**
     * The BillingPrice model constructor.
     * @property {module:model/BillingPrice}
     */
    BillingPrice: BillingPrice,
    /**
     * The Brand model constructor.
     * @property {module:model/Brand}
     */
    Brand: Brand,
    /**
     * The BrandEmailContent model constructor.
     * @property {module:model/BrandEmailContent}
     */
    BrandEmailContent: BrandEmailContent,
    /**
     * The BrandLink model constructor.
     * @property {module:model/BrandLink}
     */
    BrandLink: BrandLink,
    /**
     * The BrandLogos model constructor.
     * @property {module:model/BrandLogos}
     */
    BrandLogos: BrandLogos,
    /**
     * The BrandRequest model constructor.
     * @property {module:model/BrandRequest}
     */
    BrandRequest: BrandRequest,
    /**
     * The BrandResourceUrls model constructor.
     * @property {module:model/BrandResourceUrls}
     */
    BrandResourceUrls: BrandResourceUrls,
    /**
     * The BrandResources model constructor.
     * @property {module:model/BrandResources}
     */
    BrandResources: BrandResources,
    /**
     * The BrandResourcesList model constructor.
     * @property {module:model/BrandResourcesList}
     */
    BrandResourcesList: BrandResourcesList,
    /**
     * The BrandsRequest model constructor.
     * @property {module:model/BrandsRequest}
     */
    BrandsRequest: BrandsRequest,
    /**
     * The BrandsResponse model constructor.
     * @property {module:model/BrandsResponse}
     */
    BrandsResponse: BrandsResponse,
    /**
     * The BulkEnvelope model constructor.
     * @property {module:model/BulkEnvelope}
     */
    BulkEnvelope: BulkEnvelope,
    /**
     * The BulkEnvelopeStatus model constructor.
     * @property {module:model/BulkEnvelopeStatus}
     */
    BulkEnvelopeStatus: BulkEnvelopeStatus,
    /**
     * The BulkProcessRequest model constructor.
     * @property {module:model/BulkProcessRequest}
     */
    BulkProcessRequest: BulkProcessRequest,
    /**
     * The BulkProcessResponse model constructor.
     * @property {module:model/BulkProcessResponse}
     */
    BulkProcessResponse: BulkProcessResponse,
    /**
     * The BulkProcessResult model constructor.
     * @property {module:model/BulkProcessResult}
     */
    BulkProcessResult: BulkProcessResult,
    /**
     * The BulkProcessingListSummaries model constructor.
     * @property {module:model/BulkProcessingListSummaries}
     */
    BulkProcessingListSummaries: BulkProcessingListSummaries,
    /**
     * The BulkProcessingListSummary model constructor.
     * @property {module:model/BulkProcessingListSummary}
     */
    BulkProcessingListSummary: BulkProcessingListSummary,
    /**
     * The BulkProcessingLists model constructor.
     * @property {module:model/BulkProcessingLists}
     */
    BulkProcessingLists: BulkProcessingLists,
    /**
     * The BulkRecipient model constructor.
     * @property {module:model/BulkRecipient}
     */
    BulkRecipient: BulkRecipient,
    /**
     * The BulkRecipientSignatureProvider model constructor.
     * @property {module:model/BulkRecipientSignatureProvider}
     */
    BulkRecipientSignatureProvider: BulkRecipientSignatureProvider,
    /**
     * The BulkRecipientTabLabel model constructor.
     * @property {module:model/BulkRecipientTabLabel}
     */
    BulkRecipientTabLabel: BulkRecipientTabLabel,
    /**
     * The BulkRecipientsResponse model constructor.
     * @property {module:model/BulkRecipientsResponse}
     */
    BulkRecipientsResponse: BulkRecipientsResponse,
    /**
     * The BulkRecipientsUpdateResponse model constructor.
     * @property {module:model/BulkRecipientsUpdateResponse}
     */
    BulkRecipientsUpdateResponse: BulkRecipientsUpdateResponse,
    /**
     * The BulkSendBatchActionRequest model constructor.
     * @property {module:model/BulkSendBatchActionRequest}
     */
    BulkSendBatchActionRequest: BulkSendBatchActionRequest,
    /**
     * The BulkSendBatchError model constructor.
     * @property {module:model/BulkSendBatchError}
     */
    BulkSendBatchError: BulkSendBatchError,
    /**
     * The BulkSendBatchRequest model constructor.
     * @property {module:model/BulkSendBatchRequest}
     */
    BulkSendBatchRequest: BulkSendBatchRequest,
    /**
     * The BulkSendBatchStatus model constructor.
     * @property {module:model/BulkSendBatchStatus}
     */
    BulkSendBatchStatus: BulkSendBatchStatus,
    /**
     * The BulkSendBatchSummaries model constructor.
     * @property {module:model/BulkSendBatchSummaries}
     */
    BulkSendBatchSummaries: BulkSendBatchSummaries,
    /**
     * The BulkSendBatchSummary model constructor.
     * @property {module:model/BulkSendBatchSummary}
     */
    BulkSendBatchSummary: BulkSendBatchSummary,
    /**
     * The BulkSendEnvelopesInfo model constructor.
     * @property {module:model/BulkSendEnvelopesInfo}
     */
    BulkSendEnvelopesInfo: BulkSendEnvelopesInfo,
    /**
     * The BulkSendErrorStatus model constructor.
     * @property {module:model/BulkSendErrorStatus}
     */
    BulkSendErrorStatus: BulkSendErrorStatus,
    /**
     * The BulkSendRequest model constructor.
     * @property {module:model/BulkSendRequest}
     */
    BulkSendRequest: BulkSendRequest,
    /**
     * The BulkSendResponse model constructor.
     * @property {module:model/BulkSendResponse}
     */
    BulkSendResponse: BulkSendResponse,
    /**
     * The BulkSendTestResponse model constructor.
     * @property {module:model/BulkSendTestResponse}
     */
    BulkSendTestResponse: BulkSendTestResponse,
    /**
     * The BulkSendingCopy model constructor.
     * @property {module:model/BulkSendingCopy}
     */
    BulkSendingCopy: BulkSendingCopy,
    /**
     * The BulkSendingCopyCustomField model constructor.
     * @property {module:model/BulkSendingCopyCustomField}
     */
    BulkSendingCopyCustomField: BulkSendingCopyCustomField,
    /**
     * The BulkSendingCopyRecipient model constructor.
     * @property {module:model/BulkSendingCopyRecipient}
     */
    BulkSendingCopyRecipient: BulkSendingCopyRecipient,
    /**
     * The BulkSendingCopyTab model constructor.
     * @property {module:model/BulkSendingCopyTab}
     */
    BulkSendingCopyTab: BulkSendingCopyTab,
    /**
     * The BulkSendingList model constructor.
     * @property {module:model/BulkSendingList}
     */
    BulkSendingList: BulkSendingList,
    /**
     * The BulkSendingListSummaries model constructor.
     * @property {module:model/BulkSendingListSummaries}
     */
    BulkSendingListSummaries: BulkSendingListSummaries,
    /**
     * The BulkSendingListSummary model constructor.
     * @property {module:model/BulkSendingListSummary}
     */
    BulkSendingListSummary: BulkSendingListSummary,
    /**
     * The CaptiveRecipient model constructor.
     * @property {module:model/CaptiveRecipient}
     */
    CaptiveRecipient: CaptiveRecipient,
    /**
     * The CaptiveRecipientInformation model constructor.
     * @property {module:model/CaptiveRecipientInformation}
     */
    CaptiveRecipientInformation: CaptiveRecipientInformation,
    /**
     * The CarbonCopy model constructor.
     * @property {module:model/CarbonCopy}
     */
    CarbonCopy: CarbonCopy,
    /**
     * The CertifiedDelivery model constructor.
     * @property {module:model/CertifiedDelivery}
     */
    CertifiedDelivery: CertifiedDelivery,
    /**
     * The Checkbox model constructor.
     * @property {module:model/Checkbox}
     */
    Checkbox: Checkbox,
    /**
     * The ChunkedUploadPart model constructor.
     * @property {module:model/ChunkedUploadPart}
     */
    ChunkedUploadPart: ChunkedUploadPart,
    /**
     * The ChunkedUploadRequest model constructor.
     * @property {module:model/ChunkedUploadRequest}
     */
    ChunkedUploadRequest: ChunkedUploadRequest,
    /**
     * The ChunkedUploadResponse model constructor.
     * @property {module:model/ChunkedUploadResponse}
     */
    ChunkedUploadResponse: ChunkedUploadResponse,
    /**
     * The CloudStorageProvider model constructor.
     * @property {module:model/CloudStorageProvider}
     */
    CloudStorageProvider: CloudStorageProvider,
    /**
     * The CloudStorageProviders model constructor.
     * @property {module:model/CloudStorageProviders}
     */
    CloudStorageProviders: CloudStorageProviders,
    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment: Comment,
    /**
     * The CommentHistoryResult model constructor.
     * @property {module:model/CommentHistoryResult}
     */
    CommentHistoryResult: CommentHistoryResult,
    /**
     * The CommentPublish model constructor.
     * @property {module:model/CommentPublish}
     */
    CommentPublish: CommentPublish,
    /**
     * The CommentThread model constructor.
     * @property {module:model/CommentThread}
     */
    CommentThread: CommentThread,
    /**
     * The CommentsPublish model constructor.
     * @property {module:model/CommentsPublish}
     */
    CommentsPublish: CommentsPublish,
    /**
     * The CommissionCounty model constructor.
     * @property {module:model/CommissionCounty}
     */
    CommissionCounty: CommissionCounty,
    /**
     * The CommissionExpiration model constructor.
     * @property {module:model/CommissionExpiration}
     */
    CommissionExpiration: CommissionExpiration,
    /**
     * The CommissionNumber model constructor.
     * @property {module:model/CommissionNumber}
     */
    CommissionNumber: CommissionNumber,
    /**
     * The CommissionState model constructor.
     * @property {module:model/CommissionState}
     */
    CommissionState: CommissionState,
    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company: Company,
    /**
     * The CompositeTemplate model constructor.
     * @property {module:model/CompositeTemplate}
     */
    CompositeTemplate: CompositeTemplate,
    /**
     * The ConditionalRecipientRule model constructor.
     * @property {module:model/ConditionalRecipientRule}
     */
    ConditionalRecipientRule: ConditionalRecipientRule,
    /**
     * The ConditionalRecipientRuleCondition model constructor.
     * @property {module:model/ConditionalRecipientRuleCondition}
     */
    ConditionalRecipientRuleCondition: ConditionalRecipientRuleCondition,
    /**
     * The ConditionalRecipientRuleFilter model constructor.
     * @property {module:model/ConditionalRecipientRuleFilter}
     */
    ConditionalRecipientRuleFilter: ConditionalRecipientRuleFilter,
    /**
     * The ConnectConfigResults model constructor.
     * @property {module:model/ConnectConfigResults}
     */
    ConnectConfigResults: ConnectConfigResults,
    /**
     * The ConnectCustomConfiguration model constructor.
     * @property {module:model/ConnectCustomConfiguration}
     */
    ConnectCustomConfiguration: ConnectCustomConfiguration,
    /**
     * The ConnectDebugLog model constructor.
     * @property {module:model/ConnectDebugLog}
     */
    ConnectDebugLog: ConnectDebugLog,
    /**
     * The ConnectDeleteFailureResult model constructor.
     * @property {module:model/ConnectDeleteFailureResult}
     */
    ConnectDeleteFailureResult: ConnectDeleteFailureResult,
    /**
     * The ConnectEventData model constructor.
     * @property {module:model/ConnectEventData}
     */
    ConnectEventData: ConnectEventData,
    /**
     * The ConnectFailureFilter model constructor.
     * @property {module:model/ConnectFailureFilter}
     */
    ConnectFailureFilter: ConnectFailureFilter,
    /**
     * The ConnectFailureResult model constructor.
     * @property {module:model/ConnectFailureResult}
     */
    ConnectFailureResult: ConnectFailureResult,
    /**
     * The ConnectFailureResults model constructor.
     * @property {module:model/ConnectFailureResults}
     */
    ConnectFailureResults: ConnectFailureResults,
    /**
     * The ConnectHistoricalEnvelopeRepublish model constructor.
     * @property {module:model/ConnectHistoricalEnvelopeRepublish}
     */
    ConnectHistoricalEnvelopeRepublish: ConnectHistoricalEnvelopeRepublish,
    /**
     * The ConnectLog model constructor.
     * @property {module:model/ConnectLog}
     */
    ConnectLog: ConnectLog,
    /**
     * The ConnectLogs model constructor.
     * @property {module:model/ConnectLogs}
     */
    ConnectLogs: ConnectLogs,
    /**
     * The ConnectOAuthConfig model constructor.
     * @property {module:model/ConnectOAuthConfig}
     */
    ConnectOAuthConfig: ConnectOAuthConfig,
    /**
     * The ConnectSalesforceField model constructor.
     * @property {module:model/ConnectSalesforceField}
     */
    ConnectSalesforceField: ConnectSalesforceField,
    /**
     * The ConnectSalesforceObject model constructor.
     * @property {module:model/ConnectSalesforceObject}
     */
    ConnectSalesforceObject: ConnectSalesforceObject,
    /**
     * The ConnectUserInfo model constructor.
     * @property {module:model/ConnectUserInfo}
     */
    ConnectUserInfo: ConnectUserInfo,
    /**
     * The ConnectUserObject model constructor.
     * @property {module:model/ConnectUserObject}
     */
    ConnectUserObject: ConnectUserObject,
    /**
     * The ConsentDetails model constructor.
     * @property {module:model/ConsentDetails}
     */
    ConsentDetails: ConsentDetails,
    /**
     * The ConsoleViewRequest model constructor.
     * @property {module:model/ConsoleViewRequest}
     */
    ConsoleViewRequest: ConsoleViewRequest,
    /**
     * The ConsumerDisclosure model constructor.
     * @property {module:model/ConsumerDisclosure}
     */
    ConsumerDisclosure: ConsumerDisclosure,
    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact: Contact,
    /**
     * The ContactGetResponse model constructor.
     * @property {module:model/ContactGetResponse}
     */
    ContactGetResponse: ContactGetResponse,
    /**
     * The ContactModRequest model constructor.
     * @property {module:model/ContactModRequest}
     */
    ContactModRequest: ContactModRequest,
    /**
     * The ContactPhoneNumber model constructor.
     * @property {module:model/ContactPhoneNumber}
     */
    ContactPhoneNumber: ContactPhoneNumber,
    /**
     * The ContactUpdateResponse model constructor.
     * @property {module:model/ContactUpdateResponse}
     */
    ContactUpdateResponse: ContactUpdateResponse,
    /**
     * The CorrectViewRequest model constructor.
     * @property {module:model/CorrectViewRequest}
     */
    CorrectViewRequest: CorrectViewRequest,
    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country: Country,
    /**
     * The CreditCardInformation model constructor.
     * @property {module:model/CreditCardInformation}
     */
    CreditCardInformation: CreditCardInformation,
    /**
     * The CreditCardTypes model constructor.
     * @property {module:model/CreditCardTypes}
     */
    CreditCardTypes: CreditCardTypes,
    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency: Currency,
    /**
     * The CurrencyFeatureSetPrice model constructor.
     * @property {module:model/CurrencyFeatureSetPrice}
     */
    CurrencyFeatureSetPrice: CurrencyFeatureSetPrice,
    /**
     * The CurrencyPlanPrice model constructor.
     * @property {module:model/CurrencyPlanPrice}
     */
    CurrencyPlanPrice: CurrencyPlanPrice,
    /**
     * The CustomField model constructor.
     * @property {module:model/CustomField}
     */
    CustomField: CustomField,
    /**
     * The CustomFields model constructor.
     * @property {module:model/CustomFields}
     */
    CustomFields: CustomFields,
    /**
     * The CustomFieldsEnvelope model constructor.
     * @property {module:model/CustomFieldsEnvelope}
     */
    CustomFieldsEnvelope: CustomFieldsEnvelope,
    /**
     * The CustomSettingsInformation model constructor.
     * @property {module:model/CustomSettingsInformation}
     */
    CustomSettingsInformation: CustomSettingsInformation,
    /**
     * The DateSigned model constructor.
     * @property {module:model/DateSigned}
     */
    DateSigned: DateSigned,
    /**
     * The DateStampProperties model constructor.
     * @property {module:model/DateStampProperties}
     */
    DateStampProperties: DateStampProperties,
    /**
     * The Decline model constructor.
     * @property {module:model/Decline}
     */
    Decline: Decline,
    /**
     * The DelayedRouting model constructor.
     * @property {module:model/DelayedRouting}
     */
    DelayedRouting: DelayedRouting,
    /**
     * The DelegationInfo model constructor.
     * @property {module:model/DelegationInfo}
     */
    DelegationInfo: DelegationInfo,
    /**
     * The DiagnosticsSettingsInformation model constructor.
     * @property {module:model/DiagnosticsSettingsInformation}
     */
    DiagnosticsSettingsInformation: DiagnosticsSettingsInformation,
    /**
     * The DirectDebitProcessorInformation model constructor.
     * @property {module:model/DirectDebitProcessorInformation}
     */
    DirectDebitProcessorInformation: DirectDebitProcessorInformation,
    /**
     * The DobInformationInput model constructor.
     * @property {module:model/DobInformationInput}
     */
    DobInformationInput: DobInformationInput,
    /**
     * The DocGenFormField model constructor.
     * @property {module:model/DocGenFormField}
     */
    DocGenFormField: DocGenFormField,
    /**
     * The DocGenSyntaxError model constructor.
     * @property {module:model/DocGenSyntaxError}
     */
    DocGenSyntaxError: DocGenSyntaxError,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The DocumentFieldsInformation model constructor.
     * @property {module:model/DocumentFieldsInformation}
     */
    DocumentFieldsInformation: DocumentFieldsInformation,
    /**
     * The DocumentHtmlCollapsibleDisplaySettings model constructor.
     * @property {module:model/DocumentHtmlCollapsibleDisplaySettings}
     */
    DocumentHtmlCollapsibleDisplaySettings: DocumentHtmlCollapsibleDisplaySettings,
    /**
     * The DocumentHtmlDefinition model constructor.
     * @property {module:model/DocumentHtmlDefinition}
     */
    DocumentHtmlDefinition: DocumentHtmlDefinition,
    /**
     * The DocumentHtmlDefinitionOriginal model constructor.
     * @property {module:model/DocumentHtmlDefinitionOriginal}
     */
    DocumentHtmlDefinitionOriginal: DocumentHtmlDefinitionOriginal,
    /**
     * The DocumentHtmlDefinitionOriginals model constructor.
     * @property {module:model/DocumentHtmlDefinitionOriginals}
     */
    DocumentHtmlDefinitionOriginals: DocumentHtmlDefinitionOriginals,
    /**
     * The DocumentHtmlDefinitions model constructor.
     * @property {module:model/DocumentHtmlDefinitions}
     */
    DocumentHtmlDefinitions: DocumentHtmlDefinitions,
    /**
     * The DocumentHtmlDisplayAnchor model constructor.
     * @property {module:model/DocumentHtmlDisplayAnchor}
     */
    DocumentHtmlDisplayAnchor: DocumentHtmlDisplayAnchor,
    /**
     * The DocumentHtmlDisplaySettings model constructor.
     * @property {module:model/DocumentHtmlDisplaySettings}
     */
    DocumentHtmlDisplaySettings: DocumentHtmlDisplaySettings,
    /**
     * The DocumentTemplate model constructor.
     * @property {module:model/DocumentTemplate}
     */
    DocumentTemplate: DocumentTemplate,
    /**
     * The DocumentTemplateList model constructor.
     * @property {module:model/DocumentTemplateList}
     */
    DocumentTemplateList: DocumentTemplateList,
    /**
     * The DocumentVisibility model constructor.
     * @property {module:model/DocumentVisibility}
     */
    DocumentVisibility: DocumentVisibility,
    /**
     * The DocumentVisibilityList model constructor.
     * @property {module:model/DocumentVisibilityList}
     */
    DocumentVisibilityList: DocumentVisibilityList,
    /**
     * The DowngradRequestBillingInfoResponse model constructor.
     * @property {module:model/DowngradRequestBillingInfoResponse}
     */
    DowngradRequestBillingInfoResponse: DowngradRequestBillingInfoResponse,
    /**
     * The DowngradeBillingPlanInformation model constructor.
     * @property {module:model/DowngradeBillingPlanInformation}
     */
    DowngradeBillingPlanInformation: DowngradeBillingPlanInformation,
    /**
     * The DowngradePlanUpdateResponse model constructor.
     * @property {module:model/DowngradePlanUpdateResponse}
     */
    DowngradePlanUpdateResponse: DowngradePlanUpdateResponse,
    /**
     * The DowngradeRequestInformation model constructor.
     * @property {module:model/DowngradeRequestInformation}
     */
    DowngradeRequestInformation: DowngradeRequestInformation,
    /**
     * The Draw model constructor.
     * @property {module:model/Draw}
     */
    Draw: Draw,
    /**
     * The ENoteConfiguration model constructor.
     * @property {module:model/ENoteConfiguration}
     */
    ENoteConfiguration: ENoteConfiguration,
    /**
     * The Editor model constructor.
     * @property {module:model/Editor}
     */
    Editor: Editor,
    /**
     * The Email model constructor.
     * @property {module:model/Email}
     */
    Email: Email,
    /**
     * The EmailAddress model constructor.
     * @property {module:model/EmailAddress}
     */
    EmailAddress: EmailAddress,
    /**
     * The EmailSettings model constructor.
     * @property {module:model/EmailSettings}
     */
    EmailSettings: EmailSettings,
    /**
     * The Envelope model constructor.
     * @property {module:model/Envelope}
     */
    Envelope: Envelope,
    /**
     * The EnvelopeAttachment model constructor.
     * @property {module:model/EnvelopeAttachment}
     */
    EnvelopeAttachment: EnvelopeAttachment,
    /**
     * The EnvelopeAttachmentsRequest model constructor.
     * @property {module:model/EnvelopeAttachmentsRequest}
     */
    EnvelopeAttachmentsRequest: EnvelopeAttachmentsRequest,
    /**
     * The EnvelopeAttachmentsResult model constructor.
     * @property {module:model/EnvelopeAttachmentsResult}
     */
    EnvelopeAttachmentsResult: EnvelopeAttachmentsResult,
    /**
     * The EnvelopeAuditEvent model constructor.
     * @property {module:model/EnvelopeAuditEvent}
     */
    EnvelopeAuditEvent: EnvelopeAuditEvent,
    /**
     * The EnvelopeAuditEventResponse model constructor.
     * @property {module:model/EnvelopeAuditEventResponse}
     */
    EnvelopeAuditEventResponse: EnvelopeAuditEventResponse,
    /**
     * The EnvelopeCustomMetadata model constructor.
     * @property {module:model/EnvelopeCustomMetadata}
     */
    EnvelopeCustomMetadata: EnvelopeCustomMetadata,
    /**
     * The EnvelopeDefinition model constructor.
     * @property {module:model/EnvelopeDefinition}
     */
    EnvelopeDefinition: EnvelopeDefinition,
    /**
     * The EnvelopeDelayRule model constructor.
     * @property {module:model/EnvelopeDelayRule}
     */
    EnvelopeDelayRule: EnvelopeDelayRule,
    /**
     * The EnvelopeDocument model constructor.
     * @property {module:model/EnvelopeDocument}
     */
    EnvelopeDocument: EnvelopeDocument,
    /**
     * The EnvelopeDocumentsResult model constructor.
     * @property {module:model/EnvelopeDocumentsResult}
     */
    EnvelopeDocumentsResult: EnvelopeDocumentsResult,
    /**
     * The EnvelopeEvent model constructor.
     * @property {module:model/EnvelopeEvent}
     */
    EnvelopeEvent: EnvelopeEvent,
    /**
     * The EnvelopeFormData model constructor.
     * @property {module:model/EnvelopeFormData}
     */
    EnvelopeFormData: EnvelopeFormData,
    /**
     * The EnvelopeId model constructor.
     * @property {module:model/EnvelopeId}
     */
    EnvelopeId: EnvelopeId,
    /**
     * The EnvelopeIdsRequest model constructor.
     * @property {module:model/EnvelopeIdsRequest}
     */
    EnvelopeIdsRequest: EnvelopeIdsRequest,
    /**
     * The EnvelopeMetadata model constructor.
     * @property {module:model/EnvelopeMetadata}
     */
    EnvelopeMetadata: EnvelopeMetadata,
    /**
     * The EnvelopeNotificationRequest model constructor.
     * @property {module:model/EnvelopeNotificationRequest}
     */
    EnvelopeNotificationRequest: EnvelopeNotificationRequest,
    /**
     * The EnvelopePublishTransaction model constructor.
     * @property {module:model/EnvelopePublishTransaction}
     */
    EnvelopePublishTransaction: EnvelopePublishTransaction,
    /**
     * The EnvelopePublishTransactionErrorRollup model constructor.
     * @property {module:model/EnvelopePublishTransactionErrorRollup}
     */
    EnvelopePublishTransactionErrorRollup: EnvelopePublishTransactionErrorRollup,
    /**
     * The EnvelopePurgeConfiguration model constructor.
     * @property {module:model/EnvelopePurgeConfiguration}
     */
    EnvelopePurgeConfiguration: EnvelopePurgeConfiguration,
    /**
     * The EnvelopeSummary model constructor.
     * @property {module:model/EnvelopeSummary}
     */
    EnvelopeSummary: EnvelopeSummary,
    /**
     * The EnvelopeTemplate model constructor.
     * @property {module:model/EnvelopeTemplate}
     */
    EnvelopeTemplate: EnvelopeTemplate,
    /**
     * The EnvelopeTemplateResults model constructor.
     * @property {module:model/EnvelopeTemplateResults}
     */
    EnvelopeTemplateResults: EnvelopeTemplateResults,
    /**
     * The EnvelopeTransactionStatus model constructor.
     * @property {module:model/EnvelopeTransactionStatus}
     */
    EnvelopeTransactionStatus: EnvelopeTransactionStatus,
    /**
     * The EnvelopeTransferRule model constructor.
     * @property {module:model/EnvelopeTransferRule}
     */
    EnvelopeTransferRule: EnvelopeTransferRule,
    /**
     * The EnvelopeTransferRuleInformation model constructor.
     * @property {module:model/EnvelopeTransferRuleInformation}
     */
    EnvelopeTransferRuleInformation: EnvelopeTransferRuleInformation,
    /**
     * The EnvelopeTransferRuleRequest model constructor.
     * @property {module:model/EnvelopeTransferRuleRequest}
     */
    EnvelopeTransferRuleRequest: EnvelopeTransferRuleRequest,
    /**
     * The EnvelopeUpdateSummary model constructor.
     * @property {module:model/EnvelopeUpdateSummary}
     */
    EnvelopeUpdateSummary: EnvelopeUpdateSummary,
    /**
     * The EnvelopesInformation model constructor.
     * @property {module:model/EnvelopesInformation}
     */
    EnvelopesInformation: EnvelopesInformation,
    /**
     * The ErrorDetails model constructor.
     * @property {module:model/ErrorDetails}
     */
    ErrorDetails: ErrorDetails,
    /**
     * The EventNotification model constructor.
     * @property {module:model/EventNotification}
     */
    EventNotification: EventNotification,
    /**
     * The EventResult model constructor.
     * @property {module:model/EventResult}
     */
    EventResult: EventResult,
    /**
     * The Expirations model constructor.
     * @property {module:model/Expirations}
     */
    Expirations: Expirations,
    /**
     * The ExternalDocServiceErrorDetails model constructor.
     * @property {module:model/ExternalDocServiceErrorDetails}
     */
    ExternalDocServiceErrorDetails: ExternalDocServiceErrorDetails,
    /**
     * The ExternalDocumentSources model constructor.
     * @property {module:model/ExternalDocumentSources}
     */
    ExternalDocumentSources: ExternalDocumentSources,
    /**
     * The ExternalFile model constructor.
     * @property {module:model/ExternalFile}
     */
    ExternalFile: ExternalFile,
    /**
     * The ExternalFolder model constructor.
     * @property {module:model/ExternalFolder}
     */
    ExternalFolder: ExternalFolder,
    /**
     * The ExternalPrimaryAccountRecipientAuthRequirements model constructor.
     * @property {module:model/ExternalPrimaryAccountRecipientAuthRequirements}
     */
    ExternalPrimaryAccountRecipientAuthRequirements: ExternalPrimaryAccountRecipientAuthRequirements,
    /**
     * The FavoriteTemplatesContentItem model constructor.
     * @property {module:model/FavoriteTemplatesContentItem}
     */
    FavoriteTemplatesContentItem: FavoriteTemplatesContentItem,
    /**
     * The FavoriteTemplatesInfo model constructor.
     * @property {module:model/FavoriteTemplatesInfo}
     */
    FavoriteTemplatesInfo: FavoriteTemplatesInfo,
    /**
     * The FeatureAvailableMetadata model constructor.
     * @property {module:model/FeatureAvailableMetadata}
     */
    FeatureAvailableMetadata: FeatureAvailableMetadata,
    /**
     * The FeatureSet model constructor.
     * @property {module:model/FeatureSet}
     */
    FeatureSet: FeatureSet,
    /**
     * The FileType model constructor.
     * @property {module:model/FileType}
     */
    FileType: FileType,
    /**
     * The FileTypeList model constructor.
     * @property {module:model/FileTypeList}
     */
    FileTypeList: FileTypeList,
    /**
     * The Filter model constructor.
     * @property {module:model/Filter}
     */
    Filter: Filter,
    /**
     * The FirstName model constructor.
     * @property {module:model/FirstName}
     */
    FirstName: FirstName,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The FolderItemResponse model constructor.
     * @property {module:model/FolderItemResponse}
     */
    FolderItemResponse: FolderItemResponse,
    /**
     * The FolderItemV2 model constructor.
     * @property {module:model/FolderItemV2}
     */
    FolderItemV2: FolderItemV2,
    /**
     * The FolderItemsResponse model constructor.
     * @property {module:model/FolderItemsResponse}
     */
    FolderItemsResponse: FolderItemsResponse,
    /**
     * The FolderSharedItem model constructor.
     * @property {module:model/FolderSharedItem}
     */
    FolderSharedItem: FolderSharedItem,
    /**
     * The FoldersRequest model constructor.
     * @property {module:model/FoldersRequest}
     */
    FoldersRequest: FoldersRequest,
    /**
     * The FoldersResponse model constructor.
     * @property {module:model/FoldersResponse}
     */
    FoldersResponse: FoldersResponse,
    /**
     * The ForgottenPasswordInformation model constructor.
     * @property {module:model/ForgottenPasswordInformation}
     */
    ForgottenPasswordInformation: ForgottenPasswordInformation,
    /**
     * The FormDataItem model constructor.
     * @property {module:model/FormDataItem}
     */
    FormDataItem: FormDataItem,
    /**
     * The FormulaTab model constructor.
     * @property {module:model/FormulaTab}
     */
    FormulaTab: FormulaTab,
    /**
     * The FullName model constructor.
     * @property {module:model/FullName}
     */
    FullName: FullName,
    /**
     * The GraphicsContext model constructor.
     * @property {module:model/GraphicsContext}
     */
    GraphicsContext: GraphicsContext,
    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group: Group,
    /**
     * The GroupInformation model constructor.
     * @property {module:model/GroupInformation}
     */
    GroupInformation: GroupInformation,
    /**
     * The IdCheckConfiguration model constructor.
     * @property {module:model/IdCheckConfiguration}
     */
    IdCheckConfiguration: IdCheckConfiguration,
    /**
     * The IdCheckInformationInput model constructor.
     * @property {module:model/IdCheckInformationInput}
     */
    IdCheckInformationInput: IdCheckInformationInput,
    /**
     * The IdCheckSecurityStep model constructor.
     * @property {module:model/IdCheckSecurityStep}
     */
    IdCheckSecurityStep: IdCheckSecurityStep,
    /**
     * The IdEvidenceResourceToken model constructor.
     * @property {module:model/IdEvidenceResourceToken}
     */
    IdEvidenceResourceToken: IdEvidenceResourceToken,
    /**
     * The IdEvidenceViewLink model constructor.
     * @property {module:model/IdEvidenceViewLink}
     */
    IdEvidenceViewLink: IdEvidenceViewLink,
    /**
     * The InPersonSigner model constructor.
     * @property {module:model/InPersonSigner}
     */
    InPersonSigner: InPersonSigner,
    /**
     * The InitialHere model constructor.
     * @property {module:model/InitialHere}
     */
    InitialHere: InitialHere,
    /**
     * The InlineTemplate model constructor.
     * @property {module:model/InlineTemplate}
     */
    InlineTemplate: InlineTemplate,
    /**
     * The IntegratedConnectUserInfoList model constructor.
     * @property {module:model/IntegratedConnectUserInfoList}
     */
    IntegratedConnectUserInfoList: IntegratedConnectUserInfoList,
    /**
     * The IntegratedUserInfoList model constructor.
     * @property {module:model/IntegratedUserInfoList}
     */
    IntegratedUserInfoList: IntegratedUserInfoList,
    /**
     * The Intermediary model constructor.
     * @property {module:model/Intermediary}
     */
    Intermediary: Intermediary,
    /**
     * The Jurisdiction model constructor.
     * @property {module:model/Jurisdiction}
     */
    Jurisdiction: Jurisdiction,
    /**
     * The LastName model constructor.
     * @property {module:model/LastName}
     */
    LastName: LastName,
    /**
     * The LinkedExternalPrimaryAccount model constructor.
     * @property {module:model/LinkedExternalPrimaryAccount}
     */
    LinkedExternalPrimaryAccount: LinkedExternalPrimaryAccount,
    /**
     * The List model constructor.
     * @property {module:model/List}
     */
    List: List,
    /**
     * The ListCustomField model constructor.
     * @property {module:model/ListCustomField}
     */
    ListCustomField: ListCustomField,
    /**
     * The ListItem model constructor.
     * @property {module:model/ListItem}
     */
    ListItem: ListItem,
    /**
     * The LocalePolicy model constructor.
     * @property {module:model/LocalePolicy}
     */
    LocalePolicy: LocalePolicy,
    /**
     * The LocalePolicyTab model constructor.
     * @property {module:model/LocalePolicyTab}
     */
    LocalePolicyTab: LocalePolicyTab,
    /**
     * The LockInformation model constructor.
     * @property {module:model/LockInformation}
     */
    LockInformation: LockInformation,
    /**
     * The LockRequest model constructor.
     * @property {module:model/LockRequest}
     */
    LockRequest: LockRequest,
    /**
     * The LoginAccount model constructor.
     * @property {module:model/LoginAccount}
     */
    LoginAccount: LoginAccount,
    /**
     * The LoginInformation model constructor.
     * @property {module:model/LoginInformation}
     */
    LoginInformation: LoginInformation,
    /**
     * The MatchBox model constructor.
     * @property {module:model/MatchBox}
     */
    MatchBox: MatchBox,
    /**
     * The MemberGroupSharedItem model constructor.
     * @property {module:model/MemberGroupSharedItem}
     */
    MemberGroupSharedItem: MemberGroupSharedItem,
    /**
     * The MemberSharedItems model constructor.
     * @property {module:model/MemberSharedItems}
     */
    MemberSharedItems: MemberSharedItems,
    /**
     * The MergeField model constructor.
     * @property {module:model/MergeField}
     */
    MergeField: MergeField,
    /**
     * The MobileNotifierConfiguration model constructor.
     * @property {module:model/MobileNotifierConfiguration}
     */
    MobileNotifierConfiguration: MobileNotifierConfiguration,
    /**
     * The MobileNotifierConfigurationInformation model constructor.
     * @property {module:model/MobileNotifierConfigurationInformation}
     */
    MobileNotifierConfigurationInformation: MobileNotifierConfigurationInformation,
    /**
     * The ModelDate model constructor.
     * @property {module:model/ModelDate}
     */
    ModelDate: ModelDate,
    /**
     * The ModelNumber model constructor.
     * @property {module:model/ModelNumber}
     */
    ModelNumber: ModelNumber,
    /**
     * The Money model constructor.
     * @property {module:model/Money}
     */
    Money: Money,
    /**
     * The NameValue model constructor.
     * @property {module:model/NameValue}
     */
    NameValue: NameValue,
    /**
     * The NewAccountDefinition model constructor.
     * @property {module:model/NewAccountDefinition}
     */
    NewAccountDefinition: NewAccountDefinition,
    /**
     * The NewAccountSummary model constructor.
     * @property {module:model/NewAccountSummary}
     */
    NewAccountSummary: NewAccountSummary,
    /**
     * The NewUser model constructor.
     * @property {module:model/NewUser}
     */
    NewUser: NewUser,
    /**
     * The NewUsersDefinition model constructor.
     * @property {module:model/NewUsersDefinition}
     */
    NewUsersDefinition: NewUsersDefinition,
    /**
     * The NewUsersSummary model constructor.
     * @property {module:model/NewUsersSummary}
     */
    NewUsersSummary: NewUsersSummary,
    /**
     * The Notarize model constructor.
     * @property {module:model/Notarize}
     */
    Notarize: Notarize,
    /**
     * The Notary model constructor.
     * @property {module:model/Notary}
     */
    Notary: Notary,
    /**
     * The NotaryHost model constructor.
     * @property {module:model/NotaryHost}
     */
    NotaryHost: NotaryHost,
    /**
     * The NotaryJournal model constructor.
     * @property {module:model/NotaryJournal}
     */
    NotaryJournal: NotaryJournal,
    /**
     * The NotaryJournalCredibleWitness model constructor.
     * @property {module:model/NotaryJournalCredibleWitness}
     */
    NotaryJournalCredibleWitness: NotaryJournalCredibleWitness,
    /**
     * The NotaryJournalList model constructor.
     * @property {module:model/NotaryJournalList}
     */
    NotaryJournalList: NotaryJournalList,
    /**
     * The NotaryJournalMetaData model constructor.
     * @property {module:model/NotaryJournalMetaData}
     */
    NotaryJournalMetaData: NotaryJournalMetaData,
    /**
     * The NotaryJurisdiction model constructor.
     * @property {module:model/NotaryJurisdiction}
     */
    NotaryJurisdiction: NotaryJurisdiction,
    /**
     * The NotaryJurisdictionList model constructor.
     * @property {module:model/NotaryJurisdictionList}
     */
    NotaryJurisdictionList: NotaryJurisdictionList,
    /**
     * The NotaryRecipient model constructor.
     * @property {module:model/NotaryRecipient}
     */
    NotaryRecipient: NotaryRecipient,
    /**
     * The NotaryResult model constructor.
     * @property {module:model/NotaryResult}
     */
    NotaryResult: NotaryResult,
    /**
     * The NotarySeal model constructor.
     * @property {module:model/NotarySeal}
     */
    NotarySeal: NotarySeal,
    /**
     * The Note model constructor.
     * @property {module:model/Note}
     */
    Note: Note,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The NotificationDefaultSettings model constructor.
     * @property {module:model/NotificationDefaultSettings}
     */
    NotificationDefaultSettings: NotificationDefaultSettings,
    /**
     * The NotificationDefaults model constructor.
     * @property {module:model/NotificationDefaults}
     */
    NotificationDefaults: NotificationDefaults,
    /**
     * The OauthAccess model constructor.
     * @property {module:model/OauthAccess}
     */
    OauthAccess: OauthAccess,
    /**
     * The OfflineAttributes model constructor.
     * @property {module:model/OfflineAttributes}
     */
    OfflineAttributes: OfflineAttributes,
    /**
     * The Page model constructor.
     * @property {module:model/Page}
     */
    Page: Page,
    /**
     * The PageImages model constructor.
     * @property {module:model/PageImages}
     */
    PageImages: PageImages,
    /**
     * The PageRequest model constructor.
     * @property {module:model/PageRequest}
     */
    PageRequest: PageRequest,
    /**
     * The Participant model constructor.
     * @property {module:model/Participant}
     */
    Participant: Participant,
    /**
     * The PathExtendedElement model constructor.
     * @property {module:model/PathExtendedElement}
     */
    PathExtendedElement: PathExtendedElement,
    /**
     * The PayPalLegacySettings model constructor.
     * @property {module:model/PayPalLegacySettings}
     */
    PayPalLegacySettings: PayPalLegacySettings,
    /**
     * The PaymentDetails model constructor.
     * @property {module:model/PaymentDetails}
     */
    PaymentDetails: PaymentDetails,
    /**
     * The PaymentGatewayAccount model constructor.
     * @property {module:model/PaymentGatewayAccount}
     */
    PaymentGatewayAccount: PaymentGatewayAccount,
    /**
     * The PaymentGatewayAccountSetting model constructor.
     * @property {module:model/PaymentGatewayAccountSetting}
     */
    PaymentGatewayAccountSetting: PaymentGatewayAccountSetting,
    /**
     * The PaymentGatewayAccountsInfo model constructor.
     * @property {module:model/PaymentGatewayAccountsInfo}
     */
    PaymentGatewayAccountsInfo: PaymentGatewayAccountsInfo,
    /**
     * The PaymentLineItem model constructor.
     * @property {module:model/PaymentLineItem}
     */
    PaymentLineItem: PaymentLineItem,
    /**
     * The PaymentMethodWithOptions model constructor.
     * @property {module:model/PaymentMethodWithOptions}
     */
    PaymentMethodWithOptions: PaymentMethodWithOptions,
    /**
     * The PaymentProcessorInformation model constructor.
     * @property {module:model/PaymentProcessorInformation}
     */
    PaymentProcessorInformation: PaymentProcessorInformation,
    /**
     * The PaymentSignerValues model constructor.
     * @property {module:model/PaymentSignerValues}
     */
    PaymentSignerValues: PaymentSignerValues,
    /**
     * The PermissionProfile model constructor.
     * @property {module:model/PermissionProfile}
     */
    PermissionProfile: PermissionProfile,
    /**
     * The PermissionProfileInformation model constructor.
     * @property {module:model/PermissionProfileInformation}
     */
    PermissionProfileInformation: PermissionProfileInformation,
    /**
     * The PhoneNumber model constructor.
     * @property {module:model/PhoneNumber}
     */
    PhoneNumber: PhoneNumber,
    /**
     * The PlanInformation model constructor.
     * @property {module:model/PlanInformation}
     */
    PlanInformation: PlanInformation,
    /**
     * The PolyLine model constructor.
     * @property {module:model/PolyLine}
     */
    PolyLine: PolyLine,
    /**
     * The PolyLineOverlay model constructor.
     * @property {module:model/PolyLineOverlay}
     */
    PolyLineOverlay: PolyLineOverlay,
    /**
     * The PowerForm model constructor.
     * @property {module:model/PowerForm}
     */
    PowerForm: PowerForm,
    /**
     * The PowerFormFormDataEnvelope model constructor.
     * @property {module:model/PowerFormFormDataEnvelope}
     */
    PowerFormFormDataEnvelope: PowerFormFormDataEnvelope,
    /**
     * The PowerFormFormDataRecipient model constructor.
     * @property {module:model/PowerFormFormDataRecipient}
     */
    PowerFormFormDataRecipient: PowerFormFormDataRecipient,
    /**
     * The PowerFormRecipient model constructor.
     * @property {module:model/PowerFormRecipient}
     */
    PowerFormRecipient: PowerFormRecipient,
    /**
     * The PowerFormSendersResponse model constructor.
     * @property {module:model/PowerFormSendersResponse}
     */
    PowerFormSendersResponse: PowerFormSendersResponse,
    /**
     * The PowerFormsFormDataResponse model constructor.
     * @property {module:model/PowerFormsFormDataResponse}
     */
    PowerFormsFormDataResponse: PowerFormsFormDataResponse,
    /**
     * The PowerFormsRequest model constructor.
     * @property {module:model/PowerFormsRequest}
     */
    PowerFormsRequest: PowerFormsRequest,
    /**
     * The PowerFormsResponse model constructor.
     * @property {module:model/PowerFormsResponse}
     */
    PowerFormsResponse: PowerFormsResponse,
    /**
     * The PrefillFormData model constructor.
     * @property {module:model/PrefillFormData}
     */
    PrefillFormData: PrefillFormData,
    /**
     * The PrefillTabs model constructor.
     * @property {module:model/PrefillTabs}
     */
    PrefillTabs: PrefillTabs,
    /**
     * The PropertyMetadata model constructor.
     * @property {module:model/PropertyMetadata}
     */
    PropertyMetadata: PropertyMetadata,
    /**
     * The Province model constructor.
     * @property {module:model/Province}
     */
    Province: Province,
    /**
     * The ProvisioningInformation model constructor.
     * @property {module:model/ProvisioningInformation}
     */
    ProvisioningInformation: ProvisioningInformation,
    /**
     * The PurchasedEnvelopesInformation model constructor.
     * @property {module:model/PurchasedEnvelopesInformation}
     */
    PurchasedEnvelopesInformation: PurchasedEnvelopesInformation,
    /**
     * The Radio model constructor.
     * @property {module:model/Radio}
     */
    Radio: Radio,
    /**
     * The RadioGroup model constructor.
     * @property {module:model/RadioGroup}
     */
    RadioGroup: RadioGroup,
    /**
     * The RecipientAdditionalNotification model constructor.
     * @property {module:model/RecipientAdditionalNotification}
     */
    RecipientAdditionalNotification: RecipientAdditionalNotification,
    /**
     * The RecipientAttachment model constructor.
     * @property {module:model/RecipientAttachment}
     */
    RecipientAttachment: RecipientAttachment,
    /**
     * The RecipientDomain model constructor.
     * @property {module:model/RecipientDomain}
     */
    RecipientDomain: RecipientDomain,
    /**
     * The RecipientEmailNotification model constructor.
     * @property {module:model/RecipientEmailNotification}
     */
    RecipientEmailNotification: RecipientEmailNotification,
    /**
     * The RecipientEvent model constructor.
     * @property {module:model/RecipientEvent}
     */
    RecipientEvent: RecipientEvent,
    /**
     * The RecipientFormData model constructor.
     * @property {module:model/RecipientFormData}
     */
    RecipientFormData: RecipientFormData,
    /**
     * The RecipientGroup model constructor.
     * @property {module:model/RecipientGroup}
     */
    RecipientGroup: RecipientGroup,
    /**
     * The RecipientIdentityInputOption model constructor.
     * @property {module:model/RecipientIdentityInputOption}
     */
    RecipientIdentityInputOption: RecipientIdentityInputOption,
    /**
     * The RecipientIdentityPhoneNumber model constructor.
     * @property {module:model/RecipientIdentityPhoneNumber}
     */
    RecipientIdentityPhoneNumber: RecipientIdentityPhoneNumber,
    /**
     * The RecipientIdentityVerification model constructor.
     * @property {module:model/RecipientIdentityVerification}
     */
    RecipientIdentityVerification: RecipientIdentityVerification,
    /**
     * The RecipientNamesResponse model constructor.
     * @property {module:model/RecipientNamesResponse}
     */
    RecipientNamesResponse: RecipientNamesResponse,
    /**
     * The RecipientOption model constructor.
     * @property {module:model/RecipientOption}
     */
    RecipientOption: RecipientOption,
    /**
     * The RecipientPhoneAuthentication model constructor.
     * @property {module:model/RecipientPhoneAuthentication}
     */
    RecipientPhoneAuthentication: RecipientPhoneAuthentication,
    /**
     * The RecipientPhoneNumber model constructor.
     * @property {module:model/RecipientPhoneNumber}
     */
    RecipientPhoneNumber: RecipientPhoneNumber,
    /**
     * The RecipientPreviewRequest model constructor.
     * @property {module:model/RecipientPreviewRequest}
     */
    RecipientPreviewRequest: RecipientPreviewRequest,
    /**
     * The RecipientProofFile model constructor.
     * @property {module:model/RecipientProofFile}
     */
    RecipientProofFile: RecipientProofFile,
    /**
     * The RecipientRouting model constructor.
     * @property {module:model/RecipientRouting}
     */
    RecipientRouting: RecipientRouting,
    /**
     * The RecipientRules model constructor.
     * @property {module:model/RecipientRules}
     */
    RecipientRules: RecipientRules,
    /**
     * The RecipientSMSAuthentication model constructor.
     * @property {module:model/RecipientSMSAuthentication}
     */
    RecipientSMSAuthentication: RecipientSMSAuthentication,
    /**
     * The RecipientSignatureInformation model constructor.
     * @property {module:model/RecipientSignatureInformation}
     */
    RecipientSignatureInformation: RecipientSignatureInformation,
    /**
     * The RecipientSignatureProvider model constructor.
     * @property {module:model/RecipientSignatureProvider}
     */
    RecipientSignatureProvider: RecipientSignatureProvider,
    /**
     * The RecipientSignatureProviderOptions model constructor.
     * @property {module:model/RecipientSignatureProviderOptions}
     */
    RecipientSignatureProviderOptions: RecipientSignatureProviderOptions,
    /**
     * The RecipientTokenClientURLs model constructor.
     * @property {module:model/RecipientTokenClientURLs}
     */
    RecipientTokenClientURLs: RecipientTokenClientURLs,
    /**
     * The RecipientUpdateResponse model constructor.
     * @property {module:model/RecipientUpdateResponse}
     */
    RecipientUpdateResponse: RecipientUpdateResponse,
    /**
     * The RecipientViewRequest model constructor.
     * @property {module:model/RecipientViewRequest}
     */
    RecipientViewRequest: RecipientViewRequest,
    /**
     * The Recipients model constructor.
     * @property {module:model/Recipients}
     */
    Recipients: Recipients,
    /**
     * The RecipientsUpdateSummary model constructor.
     * @property {module:model/RecipientsUpdateSummary}
     */
    RecipientsUpdateSummary: RecipientsUpdateSummary,
    /**
     * The ReferralInformation model constructor.
     * @property {module:model/ReferralInformation}
     */
    ReferralInformation: ReferralInformation,
    /**
     * The Reminders model constructor.
     * @property {module:model/Reminders}
     */
    Reminders: Reminders,
    /**
     * The ResourceInformation model constructor.
     * @property {module:model/ResourceInformation}
     */
    ResourceInformation: ResourceInformation,
    /**
     * The ReturnUrlRequest model constructor.
     * @property {module:model/ReturnUrlRequest}
     */
    ReturnUrlRequest: ReturnUrlRequest,
    /**
     * The ScheduledSending model constructor.
     * @property {module:model/ScheduledSending}
     */
    ScheduledSending: ScheduledSending,
    /**
     * The SealIdentifier model constructor.
     * @property {module:model/SealIdentifier}
     */
    SealIdentifier: SealIdentifier,
    /**
     * The SealSign model constructor.
     * @property {module:model/SealSign}
     */
    SealSign: SealSign,
    /**
     * The SeatDiscount model constructor.
     * @property {module:model/SeatDiscount}
     */
    SeatDiscount: SeatDiscount,
    /**
     * The SenderCompany model constructor.
     * @property {module:model/SenderCompany}
     */
    SenderCompany: SenderCompany,
    /**
     * The SenderEmailNotifications model constructor.
     * @property {module:model/SenderEmailNotifications}
     */
    SenderEmailNotifications: SenderEmailNotifications,
    /**
     * The SenderName model constructor.
     * @property {module:model/SenderName}
     */
    SenderName: SenderName,
    /**
     * The ServerTemplate model constructor.
     * @property {module:model/ServerTemplate}
     */
    ServerTemplate: ServerTemplate,
    /**
     * The ServiceInformation model constructor.
     * @property {module:model/ServiceInformation}
     */
    ServiceInformation: ServiceInformation,
    /**
     * The ServiceVersion model constructor.
     * @property {module:model/ServiceVersion}
     */
    ServiceVersion: ServiceVersion,
    /**
     * The SettingsMetadata model constructor.
     * @property {module:model/SettingsMetadata}
     */
    SettingsMetadata: SettingsMetadata,
    /**
     * The SharedItem model constructor.
     * @property {module:model/SharedItem}
     */
    SharedItem: SharedItem,
    /**
     * The SignHere model constructor.
     * @property {module:model/SignHere}
     */
    SignHere: SignHere,
    /**
     * The SignatureGroup model constructor.
     * @property {module:model/SignatureGroup}
     */
    SignatureGroup: SignatureGroup,
    /**
     * The SignatureGroupDef model constructor.
     * @property {module:model/SignatureGroupDef}
     */
    SignatureGroupDef: SignatureGroupDef,
    /**
     * The SignatureProviderRequiredOption model constructor.
     * @property {module:model/SignatureProviderRequiredOption}
     */
    SignatureProviderRequiredOption: SignatureProviderRequiredOption,
    /**
     * The SignatureType model constructor.
     * @property {module:model/SignatureType}
     */
    SignatureType: SignatureType,
    /**
     * The SignatureUser model constructor.
     * @property {module:model/SignatureUser}
     */
    SignatureUser: SignatureUser,
    /**
     * The SignatureUserDef model constructor.
     * @property {module:model/SignatureUserDef}
     */
    SignatureUserDef: SignatureUserDef,
    /**
     * The Signer model constructor.
     * @property {module:model/Signer}
     */
    Signer: Signer,
    /**
     * The SignerAttachment model constructor.
     * @property {module:model/SignerAttachment}
     */
    SignerAttachment: SignerAttachment,
    /**
     * The SignerEmailNotifications model constructor.
     * @property {module:model/SignerEmailNotifications}
     */
    SignerEmailNotifications: SignerEmailNotifications,
    /**
     * The SigningGroup model constructor.
     * @property {module:model/SigningGroup}
     */
    SigningGroup: SigningGroup,
    /**
     * The SigningGroupInformation model constructor.
     * @property {module:model/SigningGroupInformation}
     */
    SigningGroupInformation: SigningGroupInformation,
    /**
     * The SigningGroupUser model constructor.
     * @property {module:model/SigningGroupUser}
     */
    SigningGroupUser: SigningGroupUser,
    /**
     * The SigningGroupUsers model constructor.
     * @property {module:model/SigningGroupUsers}
     */
    SigningGroupUsers: SigningGroupUsers,
    /**
     * The SmartContractInformation model constructor.
     * @property {module:model/SmartContractInformation}
     */
    SmartContractInformation: SmartContractInformation,
    /**
     * The SmartSection model constructor.
     * @property {module:model/SmartSection}
     */
    SmartSection: SmartSection,
    /**
     * The SmartSectionAnchorPosition model constructor.
     * @property {module:model/SmartSectionAnchorPosition}
     */
    SmartSectionAnchorPosition: SmartSectionAnchorPosition,
    /**
     * The SmartSectionCollapsibleDisplaySettings model constructor.
     * @property {module:model/SmartSectionCollapsibleDisplaySettings}
     */
    SmartSectionCollapsibleDisplaySettings: SmartSectionCollapsibleDisplaySettings,
    /**
     * The SmartSectionDisplaySettings model constructor.
     * @property {module:model/SmartSectionDisplaySettings}
     */
    SmartSectionDisplaySettings: SmartSectionDisplaySettings,
    /**
     * The SocialAccountInformation model constructor.
     * @property {module:model/SocialAccountInformation}
     */
    SocialAccountInformation: SocialAccountInformation,
    /**
     * The SocialAuthentication model constructor.
     * @property {module:model/SocialAuthentication}
     */
    SocialAuthentication: SocialAuthentication,
    /**
     * The Ssn model constructor.
     * @property {module:model/Ssn}
     */
    Ssn: Ssn,
    /**
     * The Ssn4InformationInput model constructor.
     * @property {module:model/Ssn4InformationInput}
     */
    Ssn4InformationInput: Ssn4InformationInput,
    /**
     * The Ssn9InformationInput model constructor.
     * @property {module:model/Ssn9InformationInput}
     */
    Ssn9InformationInput: Ssn9InformationInput,
    /**
     * The Stamp model constructor.
     * @property {module:model/Stamp}
     */
    Stamp: Stamp,
    /**
     * The SupportedLanguages model constructor.
     * @property {module:model/SupportedLanguages}
     */
    SupportedLanguages: SupportedLanguages,
    /**
     * The TabAccountSettings model constructor.
     * @property {module:model/TabAccountSettings}
     */
    TabAccountSettings: TabAccountSettings,
    /**
     * The TabGroup model constructor.
     * @property {module:model/TabGroup}
     */
    TabGroup: TabGroup,
    /**
     * The TabMetadata model constructor.
     * @property {module:model/TabMetadata}
     */
    TabMetadata: TabMetadata,
    /**
     * The TabMetadataList model constructor.
     * @property {module:model/TabMetadataList}
     */
    TabMetadataList: TabMetadataList,
    /**
     * The Tabs model constructor.
     * @property {module:model/Tabs}
     */
    Tabs: Tabs,
    /**
     * The TemplateCustomFields model constructor.
     * @property {module:model/TemplateCustomFields}
     */
    TemplateCustomFields: TemplateCustomFields,
    /**
     * The TemplateDocumentVisibilityList model constructor.
     * @property {module:model/TemplateDocumentVisibilityList}
     */
    TemplateDocumentVisibilityList: TemplateDocumentVisibilityList,
    /**
     * The TemplateDocumentsResult model constructor.
     * @property {module:model/TemplateDocumentsResult}
     */
    TemplateDocumentsResult: TemplateDocumentsResult,
    /**
     * The TemplateInformation model constructor.
     * @property {module:model/TemplateInformation}
     */
    TemplateInformation: TemplateInformation,
    /**
     * The TemplateMatch model constructor.
     * @property {module:model/TemplateMatch}
     */
    TemplateMatch: TemplateMatch,
    /**
     * The TemplateNotificationRequest model constructor.
     * @property {module:model/TemplateNotificationRequest}
     */
    TemplateNotificationRequest: TemplateNotificationRequest,
    /**
     * The TemplateRecipients model constructor.
     * @property {module:model/TemplateRecipients}
     */
    TemplateRecipients: TemplateRecipients,
    /**
     * The TemplateRole model constructor.
     * @property {module:model/TemplateRole}
     */
    TemplateRole: TemplateRole,
    /**
     * The TemplateSharedItem model constructor.
     * @property {module:model/TemplateSharedItem}
     */
    TemplateSharedItem: TemplateSharedItem,
    /**
     * The TemplateSummary model constructor.
     * @property {module:model/TemplateSummary}
     */
    TemplateSummary: TemplateSummary,
    /**
     * The TemplateTabs model constructor.
     * @property {module:model/TemplateTabs}
     */
    TemplateTabs: TemplateTabs,
    /**
     * The TemplateUpdateSummary model constructor.
     * @property {module:model/TemplateUpdateSummary}
     */
    TemplateUpdateSummary: TemplateUpdateSummary,
    /**
     * The Text model constructor.
     * @property {module:model/Text}
     */
    Text: Text,
    /**
     * The TextCustomField model constructor.
     * @property {module:model/TextCustomField}
     */
    TextCustomField: TextCustomField,
    /**
     * The Title model constructor.
     * @property {module:model/Title}
     */
    Title: Title,
    /**
     * The UsageHistory model constructor.
     * @property {module:model/UsageHistory}
     */
    UsageHistory: UsageHistory,
    /**
     * The UserAccountManagementGranularInformation model constructor.
     * @property {module:model/UserAccountManagementGranularInformation}
     */
    UserAccountManagementGranularInformation: UserAccountManagementGranularInformation,
    /**
     * The UserInfo model constructor.
     * @property {module:model/UserInfo}
     */
    UserInfo: UserInfo,
    /**
     * The UserInfoList model constructor.
     * @property {module:model/UserInfoList}
     */
    UserInfoList: UserInfoList,
    /**
     * The UserInformation model constructor.
     * @property {module:model/UserInformation}
     */
    UserInformation: UserInformation,
    /**
     * The UserInformationList model constructor.
     * @property {module:model/UserInformationList}
     */
    UserInformationList: UserInformationList,
    /**
     * The UserPasswordInformation model constructor.
     * @property {module:model/UserPasswordInformation}
     */
    UserPasswordInformation: UserPasswordInformation,
    /**
     * The UserPasswordRules model constructor.
     * @property {module:model/UserPasswordRules}
     */
    UserPasswordRules: UserPasswordRules,
    /**
     * The UserProfile model constructor.
     * @property {module:model/UserProfile}
     */
    UserProfile: UserProfile,
    /**
     * The UserSettingsInformation model constructor.
     * @property {module:model/UserSettingsInformation}
     */
    UserSettingsInformation: UserSettingsInformation,
    /**
     * The UserSharedItem model constructor.
     * @property {module:model/UserSharedItem}
     */
    UserSharedItem: UserSharedItem,
    /**
     * The UserSignature model constructor.
     * @property {module:model/UserSignature}
     */
    UserSignature: UserSignature,
    /**
     * The UserSignatureDefinition model constructor.
     * @property {module:model/UserSignatureDefinition}
     */
    UserSignatureDefinition: UserSignatureDefinition,
    /**
     * The UserSignaturesInformation model constructor.
     * @property {module:model/UserSignaturesInformation}
     */
    UserSignaturesInformation: UserSignaturesInformation,
    /**
     * The UserSocialIdResult model constructor.
     * @property {module:model/UserSocialIdResult}
     */
    UserSocialIdResult: UserSocialIdResult,
    /**
     * The UsersResponse model constructor.
     * @property {module:model/UsersResponse}
     */
    UsersResponse: UsersResponse,
    /**
     * The View model constructor.
     * @property {module:model/View}
     */
    View: View,
    /**
     * The ViewUrl model constructor.
     * @property {module:model/ViewUrl}
     */
    ViewUrl: ViewUrl,
    /**
     * The Watermark model constructor.
     * @property {module:model/Watermark}
     */
    Watermark: Watermark,
    /**
     * The Witness model constructor.
     * @property {module:model/Witness}
     */
    Witness: Witness,
    /**
     * The Workflow model constructor.
     * @property {module:model/Workflow}
     */
    Workflow: Workflow,
    /**
     * The WorkflowStep model constructor.
     * @property {module:model/WorkflowStep}
     */
    WorkflowStep: WorkflowStep,
    /**
     * The Workspace model constructor.
     * @property {module:model/Workspace}
     */
    Workspace: Workspace,
    /**
     * The WorkspaceFolderContents model constructor.
     * @property {module:model/WorkspaceFolderContents}
     */
    WorkspaceFolderContents: WorkspaceFolderContents,
    /**
     * The WorkspaceItem model constructor.
     * @property {module:model/WorkspaceItem}
     */
    WorkspaceItem: WorkspaceItem,
    /**
     * The WorkspaceItemList model constructor.
     * @property {module:model/WorkspaceItemList}
     */
    WorkspaceItemList: WorkspaceItemList,
    /**
     * The WorkspaceList model constructor.
     * @property {module:model/WorkspaceList}
     */
    WorkspaceList: WorkspaceList,
    /**
     * The WorkspaceSettings model constructor.
     * @property {module:model/WorkspaceSettings}
     */
    WorkspaceSettings: WorkspaceSettings,
    /**
     * The WorkspaceUser model constructor.
     * @property {module:model/WorkspaceUser}
     */
    WorkspaceUser: WorkspaceUser,
    /**
     * The WorkspaceUserAuthorization model constructor.
     * @property {module:model/WorkspaceUserAuthorization}
     */
    WorkspaceUserAuthorization: WorkspaceUserAuthorization,
    /**
     * The Zip model constructor.
     * @property {module:model/Zip}
     */
    Zip: Zip,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The BillingApi service constructor.
     * @property {module:api/BillingApi}
     */
    BillingApi: BillingApi,
    /**
     * The BulkEnvelopesApi service constructor.
     * @property {module:api/BulkEnvelopesApi}
     */
    BulkEnvelopesApi: BulkEnvelopesApi,
    /**
     * The BulkProcessDataApi service constructor.
     * @property {module:api/BulkProcessDataApi}
     */
    BulkProcessDataApi: BulkProcessDataApi,
    /**
     * The BulkProcessDataSendApi service constructor.
     * @property {module:api/BulkProcessDataSendApi}
     */
    BulkProcessDataSendApi: BulkProcessDataSendApi,
    /**
     * The CloudStorageApi service constructor.
     * @property {module:api/CloudStorageApi}
     */
    CloudStorageApi: CloudStorageApi,
    /**
     * The ConnectApi service constructor.
     * @property {module:api/ConnectApi}
     */
    ConnectApi: ConnectApi,
    /**
     * The CustomTabsApi service constructor.
     * @property {module:api/CustomTabsApi}
     */
    CustomTabsApi: CustomTabsApi,
    /**
     * The DiagnosticsApi service constructor.
     * @property {module:api/DiagnosticsApi}
     */
    DiagnosticsApi: DiagnosticsApi,
    /**
     * The EmailArchiveApi service constructor.
     * @property {module:api/EmailArchiveApi}
     */
    EmailArchiveApi: EmailArchiveApi,
    /**
     * The EnvelopesApi service constructor.
     * @property {module:api/EnvelopesApi}
     */
    EnvelopesApi: EnvelopesApi,
    /**
     * The FoldersApi service constructor.
     * @property {module:api/FoldersApi}
     */
    FoldersApi: FoldersApi,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The NotaryApi service constructor.
     * @property {module:api/NotaryApi}
     */
    NotaryApi: NotaryApi,
    /**
     * The OrganizationsApi service constructor.
     * @property {module:api/OrganizationsApi}
     */
    OrganizationsApi: OrganizationsApi,
    /**
     * The PowerFormsApi service constructor.
     * @property {module:api/PowerFormsApi}
     */
    PowerFormsApi: PowerFormsApi,
    /**
     * The SigningGroupsApi service constructor.
     * @property {module:api/SigningGroupsApi}
     */
    SigningGroupsApi: SigningGroupsApi,
    /**
     * The TemplatesApi service constructor.
     * @property {module:api/TemplatesApi}
     */
    TemplatesApi: TemplatesApi,
    /**
     * The TrustServiceProvidersApi service constructor.
     * @property {module:api/TrustServiceProvidersApi}
     */
    TrustServiceProvidersApi: TrustServiceProvidersApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi,
    /**
     * The WorkspacesApi service constructor.
     * @property {module:api/WorkspacesApi}
     */
    WorkspacesApi: WorkspacesApi
  };

  return exports;
}));