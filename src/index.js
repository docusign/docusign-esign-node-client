/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'auth/OAuthClient', 'model/AccountAddress', 'model/AccountBillingPlan', 'model/AccountBillingPlanResponse', 'model/AccountInformation', 'model/AccountRoleSettings', 'model/AccountSettingsInformation', 'model/AccountSharedAccess', 'model/AccountSignatureProvider', 'model/AccountSignatureProviderOption', 'model/AccountSignatureProviders', 'model/AddOn', 'model/AddressInformation', 'model/AddressInformationInput', 'model/AddressInformationV2', 'model/Agent', 'model/ApiRequestLog', 'model/ApiRequestLogsResult', 'model/AppStoreProduct', 'model/AppStoreReceipt', 'model/Approve', 'model/Attachment', 'model/AuthenticationMethod', 'model/AuthenticationStatus', 'model/BccEmailAddress', 'model/BillingCharge', 'model/BillingChargeResponse', 'model/BillingDiscount', 'model/BillingInvoice', 'model/BillingInvoiceItem', 'model/BillingInvoicesResponse', 'model/BillingInvoicesSummary', 'model/BillingPayment', 'model/BillingPaymentItem', 'model/BillingPaymentRequest', 'model/BillingPaymentResponse', 'model/BillingPaymentsResponse', 'model/BillingPlan', 'model/BillingPlanInformation', 'model/BillingPlanPreview', 'model/BillingPlanResponse', 'model/BillingPlanUpdateResponse', 'model/BillingPlansResponse', 'model/BillingPrice', 'model/Brand', 'model/BrandEmailContent', 'model/BrandLink', 'model/BrandLogos', 'model/BrandRequest', 'model/BrandResourceUrls', 'model/BrandResources', 'model/BrandResourcesList', 'model/BrandsRequest', 'model/BrandsResponse', 'model/BulkEnvelope', 'model/BulkEnvelopeStatus', 'model/BulkEnvelopesResponse', 'model/BulkRecipient', 'model/BulkRecipientSignatureProvider', 'model/BulkRecipientTabLabel', 'model/BulkRecipientsRequest', 'model/BulkRecipientsResponse', 'model/BulkRecipientsSummaryResponse', 'model/BulkRecipientsUpdateResponse', 'model/CaptiveRecipient', 'model/CaptiveRecipientInformation', 'model/CarbonCopy', 'model/CertifiedDelivery', 'model/Checkbox', 'model/ChunkedUploadPart', 'model/ChunkedUploadRequest', 'model/ChunkedUploadResponse', 'model/CloudStorageProvider', 'model/CloudStorageProviders', 'model/Company', 'model/CompositeTemplate', 'model/ConnectConfigResults', 'model/ConnectCustomConfiguration', 'model/ConnectDebugLog', 'model/ConnectFailureFilter', 'model/ConnectFailureResult', 'model/ConnectFailureResults', 'model/ConnectLog', 'model/ConnectLogs', 'model/ConsoleViewRequest', 'model/ConsumerDisclosure', 'model/Contact', 'model/ContactGetResponse', 'model/ContactModRequest', 'model/ContactUpdateResponse', 'model/CorrectViewRequest', 'model/Country', 'model/CreditCardInformation', 'model/CreditCardTypes', 'model/CurrencyFeatureSetPrice', 'model/CurrencyPlanPrice', 'model/CustomFieldV2', 'model/CustomFields', 'model/CustomFieldsEnvelope', 'model/CustomSettingsInformation', 'model/DateSigned', 'model/Decline', 'model/DiagnosticsSettingsInformation', 'model/DobInformationInput', 'model/Document', 'model/DocumentFieldsInformation', 'model/DocumentTemplate', 'model/DocumentTemplateList', 'model/DocumentVisibility', 'model/DocumentVisibilityList', 'model/ENoteConfiguration', 'model/Editor', 'model/Email', 'model/EmailAddress', 'model/EmailSettings', 'model/Envelope', 'model/EnvelopeAttachment', 'model/EnvelopeAttachmentsRequest', 'model/EnvelopeAttachmentsResult', 'model/EnvelopeAuditEvent', 'model/EnvelopeAuditEventResponse', 'model/EnvelopeDefinition', 'model/EnvelopeDocument', 'model/EnvelopeDocumentsResult', 'model/EnvelopeEvent', 'model/EnvelopeFormData', 'model/EnvelopeId', 'model/EnvelopeIdsRequest', 'model/EnvelopeNotificationRequest', 'model/EnvelopeSummary', 'model/EnvelopeTemplate', 'model/EnvelopeTemplateDefinition', 'model/EnvelopeTemplateResult', 'model/EnvelopeTemplateResults', 'model/EnvelopeTransactionStatus', 'model/EnvelopeUpdateSummary', 'model/EnvelopesInformation', 'model/ErrorDetails', 'model/EventNotification', 'model/EventResult', 'model/Expirations', 'model/ExternalDocServiceErrorDetails', 'model/ExternalFile', 'model/ExternalFolder', 'model/FeatureSet', 'model/FileType', 'model/FileTypeList', 'model/Filter', 'model/FirstName', 'model/Folder', 'model/FolderItem', 'model/FolderItemResponse', 'model/FolderItemV2', 'model/FolderItemsResponse', 'model/FoldersRequest', 'model/FoldersResponse', 'model/ForgottenPasswordInformation', 'model/FormulaTab', 'model/FullName', 'model/Group', 'model/GroupInformation', 'model/IdCheckInformationInput', 'model/InPersonSigner', 'model/InitialHere', 'model/InlineTemplate', 'model/IntegratedUserInfoList', 'model/Intermediary', 'model/LastName', 'model/List', 'model/ListCustomField', 'model/ListItem', 'model/LockInformation', 'model/LockRequest', 'model/LoginAccount', 'model/LoginInformation', 'model/MatchBox', 'model/MemberGroupSharedItem', 'model/MemberSharedItems', 'model/MergeField', 'model/MobileNotifierConfiguration', 'model/MobileNotifierConfigurationInformation', 'model/ModelDate', 'model/ModelNumber', 'model/Money', 'model/NameValue', 'model/NewAccountDefinition', 'model/NewAccountSummary', 'model/NewUser', 'model/NewUsersDefinition', 'model/NewUsersSummary', 'model/NotaryHost', 'model/Note', 'model/Notification', 'model/OauthAccess', 'model/OfflineAttributes', 'model/Page', 'model/PageImages', 'model/PageRequest', 'model/PaymentDetails', 'model/PaymentLineItem', 'model/PermissionProfile', 'model/PermissionProfileInformation', 'model/PlanInformation', 'model/PostTransactionsRequest', 'model/PostTransactionsResponse', 'model/PowerForm', 'model/PowerFormFormDataEnvelope', 'model/PowerFormFormDataRecipient', 'model/PowerFormRecipient', 'model/PowerFormSendersResponse', 'model/PowerFormsFormDataResponse', 'model/PowerFormsRequest', 'model/PowerFormsResponse', 'model/PropertyMetadata', 'model/Province', 'model/ProvisioningInformation', 'model/PurchasedEnvelopesInformation', 'model/Radio', 'model/RadioGroup', 'model/RecipientAttachment', 'model/RecipientDomain', 'model/RecipientEmailNotification', 'model/RecipientEvent', 'model/RecipientFormData', 'model/RecipientNamesResponse', 'model/RecipientPhoneAuthentication', 'model/RecipientSAMLAuthentication', 'model/RecipientSMSAuthentication', 'model/RecipientSignatureInformation', 'model/RecipientSignatureProvider', 'model/RecipientSignatureProviderOptions', 'model/RecipientUpdateResponse', 'model/RecipientViewRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/ReferralInformation', 'model/Reminders', 'model/ResourceInformation', 'model/ReturnUrlRequest', 'model/SamlAssertionAttribute', 'model/SeatDiscount', 'model/SenderEmailNotifications', 'model/ServerTemplate', 'model/ServiceInformation', 'model/ServiceVersion', 'model/SettingsMetadata', 'model/SharedItem', 'model/SignHere', 'model/SignatureProviderRequiredOption', 'model/SignatureType', 'model/Signer', 'model/SignerAttachment', 'model/SignerEmailNotifications', 'model/SigningGroup', 'model/SigningGroupInformation', 'model/SigningGroupUser', 'model/SigningGroupUsers', 'model/SocialAccountInformation', 'model/SocialAuthentication', 'model/Ssn', 'model/Ssn4InformationInput', 'model/Ssn9InformationInput', 'model/TabAccountSettings', 'model/TabMetadata', 'model/TabMetadataList', 'model/Tabs', 'model/TemplateCustomFields', 'model/TemplateDocumentVisibilityList', 'model/TemplateDocumentsResult', 'model/TemplateInformation', 'model/TemplateMatch', 'model/TemplateNotificationRequest', 'model/TemplateRecipients', 'model/TemplateRole', 'model/TemplateSharedItem', 'model/TemplateSummary', 'model/TemplateTabs', 'model/TemplateUpdateSummary', 'model/Text', 'model/TextCustomField', 'model/Title', 'model/UsageHistory', 'model/UserAccountManagementGranularInformation', 'model/UserInfo', 'model/UserInfoList', 'model/UserInformation', 'model/UserInformationList', 'model/UserPasswordInformation', 'model/UserProfile', 'model/UserSettingsInformation', 'model/UserSharedItem', 'model/UserSignature', 'model/UserSignatureDefinition', 'model/UserSignaturesInformation', 'model/UserSocialIdResult', 'model/UsersResponse', 'model/View', 'model/ViewLinkRequest', 'model/ViewUrl', 'model/Workspace', 'model/WorkspaceFolderContents', 'model/WorkspaceItem', 'model/WorkspaceItemList', 'model/WorkspaceList', 'model/WorkspaceUser', 'model/WorkspaceUserAuthorization', 'model/Zip', 'api/AccountsApi', 'api/AuthenticationApi', 'api/BillingApi', 'api/BulkEnvelopesApi', 'api/CloudStorageApi', 'api/ConnectApi', 'api/CustomTabsApi', 'api/DiagnosticsApi', 'api/EnvelopesApi', 'api/FoldersApi', 'api/GroupsApi', 'api/PowerFormsApi', 'api/SigningGroupsApi', 'api/TemplatesApi', 'api/UsersApi', 'api/WorkspacesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./auth/OAuthClient'), require('./model/AccountAddress'), require('./model/AccountBillingPlan'), require('./model/AccountBillingPlanResponse'), require('./model/AccountInformation'), require('./model/AccountRoleSettings'), require('./model/AccountSettingsInformation'), require('./model/AccountSharedAccess'), require('./model/AccountSignatureProvider'), require('./model/AccountSignatureProviderOption'), require('./model/AccountSignatureProviders'), require('./model/AddOn'), require('./model/AddressInformation'), require('./model/AddressInformationInput'), require('./model/AddressInformationV2'), require('./model/Agent'), require('./model/ApiRequestLog'), require('./model/ApiRequestLogsResult'), require('./model/AppStoreProduct'), require('./model/AppStoreReceipt'), require('./model/Approve'), require('./model/Attachment'), require('./model/AuthenticationMethod'), require('./model/AuthenticationStatus'), require('./model/BccEmailAddress'), require('./model/BillingCharge'), require('./model/BillingChargeResponse'), require('./model/BillingDiscount'), require('./model/BillingInvoice'), require('./model/BillingInvoiceItem'), require('./model/BillingInvoicesResponse'), require('./model/BillingInvoicesSummary'), require('./model/BillingPayment'), require('./model/BillingPaymentItem'), require('./model/BillingPaymentRequest'), require('./model/BillingPaymentResponse'), require('./model/BillingPaymentsResponse'), require('./model/BillingPlan'), require('./model/BillingPlanInformation'), require('./model/BillingPlanPreview'), require('./model/BillingPlanResponse'), require('./model/BillingPlanUpdateResponse'), require('./model/BillingPlansResponse'), require('./model/BillingPrice'), require('./model/Brand'), require('./model/BrandEmailContent'), require('./model/BrandLink'), require('./model/BrandLogos'), require('./model/BrandRequest'), require('./model/BrandResourceUrls'), require('./model/BrandResources'), require('./model/BrandResourcesList'), require('./model/BrandsRequest'), require('./model/BrandsResponse'), require('./model/BulkEnvelope'), require('./model/BulkEnvelopeStatus'), require('./model/BulkEnvelopesResponse'), require('./model/BulkRecipient'), require('./model/BulkRecipientSignatureProvider'), require('./model/BulkRecipientTabLabel'), require('./model/BulkRecipientsRequest'), require('./model/BulkRecipientsResponse'), require('./model/BulkRecipientsSummaryResponse'), require('./model/BulkRecipientsUpdateResponse'), require('./model/CaptiveRecipient'), require('./model/CaptiveRecipientInformation'), require('./model/CarbonCopy'), require('./model/CertifiedDelivery'), require('./model/Checkbox'), require('./model/ChunkedUploadPart'), require('./model/ChunkedUploadRequest'), require('./model/ChunkedUploadResponse'), require('./model/CloudStorageProvider'), require('./model/CloudStorageProviders'), require('./model/Company'), require('./model/CompositeTemplate'), require('./model/ConnectConfigResults'), require('./model/ConnectCustomConfiguration'), require('./model/ConnectDebugLog'), require('./model/ConnectFailureFilter'), require('./model/ConnectFailureResult'), require('./model/ConnectFailureResults'), require('./model/ConnectLog'), require('./model/ConnectLogs'), require('./model/ConsoleViewRequest'), require('./model/ConsumerDisclosure'), require('./model/Contact'), require('./model/ContactGetResponse'), require('./model/ContactModRequest'), require('./model/ContactUpdateResponse'), require('./model/CorrectViewRequest'), require('./model/Country'), require('./model/CreditCardInformation'), require('./model/CreditCardTypes'), require('./model/CurrencyFeatureSetPrice'), require('./model/CurrencyPlanPrice'), require('./model/CustomFieldV2'), require('./model/CustomFields'), require('./model/CustomFieldsEnvelope'), require('./model/CustomSettingsInformation'), require('./model/DateSigned'), require('./model/Decline'), require('./model/DiagnosticsSettingsInformation'), require('./model/DobInformationInput'), require('./model/Document'), require('./model/DocumentFieldsInformation'), require('./model/DocumentTemplate'), require('./model/DocumentTemplateList'), require('./model/DocumentVisibility'), require('./model/DocumentVisibilityList'), require('./model/ENoteConfiguration'), require('./model/Editor'), require('./model/Email'), require('./model/EmailAddress'), require('./model/EmailSettings'), require('./model/Envelope'), require('./model/EnvelopeAttachment'), require('./model/EnvelopeAttachmentsRequest'), require('./model/EnvelopeAttachmentsResult'), require('./model/EnvelopeAuditEvent'), require('./model/EnvelopeAuditEventResponse'), require('./model/EnvelopeDefinition'), require('./model/EnvelopeDocument'), require('./model/EnvelopeDocumentsResult'), require('./model/EnvelopeEvent'), require('./model/EnvelopeFormData'), require('./model/EnvelopeId'), require('./model/EnvelopeIdsRequest'), require('./model/EnvelopeNotificationRequest'), require('./model/EnvelopeSummary'), require('./model/EnvelopeTemplate'), require('./model/EnvelopeTemplateDefinition'), require('./model/EnvelopeTemplateResult'), require('./model/EnvelopeTemplateResults'), require('./model/EnvelopeTransactionStatus'), require('./model/EnvelopeUpdateSummary'), require('./model/EnvelopesInformation'), require('./model/ErrorDetails'), require('./model/EventNotification'), require('./model/EventResult'), require('./model/Expirations'), require('./model/ExternalDocServiceErrorDetails'), require('./model/ExternalFile'), require('./model/ExternalFolder'), require('./model/FeatureSet'), require('./model/FileType'), require('./model/FileTypeList'), require('./model/Filter'), require('./model/FirstName'), require('./model/Folder'), require('./model/FolderItem'), require('./model/FolderItemResponse'), require('./model/FolderItemV2'), require('./model/FolderItemsResponse'), require('./model/FoldersRequest'), require('./model/FoldersResponse'), require('./model/ForgottenPasswordInformation'), require('./model/FormulaTab'), require('./model/FullName'), require('./model/Group'), require('./model/GroupInformation'), require('./model/IdCheckInformationInput'), require('./model/InPersonSigner'), require('./model/InitialHere'), require('./model/InlineTemplate'), require('./model/IntegratedUserInfoList'), require('./model/Intermediary'), require('./model/LastName'), require('./model/List'), require('./model/ListCustomField'), require('./model/ListItem'), require('./model/LockInformation'), require('./model/LockRequest'), require('./model/LoginAccount'), require('./model/LoginInformation'), require('./model/MatchBox'), require('./model/MemberGroupSharedItem'), require('./model/MemberSharedItems'), require('./model/MergeField'), require('./model/MobileNotifierConfiguration'), require('./model/MobileNotifierConfigurationInformation'), require('./model/ModelDate'), require('./model/ModelNumber'), require('./model/Money'), require('./model/NameValue'), require('./model/NewAccountDefinition'), require('./model/NewAccountSummary'), require('./model/NewUser'), require('./model/NewUsersDefinition'), require('./model/NewUsersSummary'), require('./model/NotaryHost'), require('./model/Note'), require('./model/Notification'), require('./model/OauthAccess'), require('./model/OfflineAttributes'), require('./model/Page'), require('./model/PageImages'), require('./model/PageRequest'), require('./model/PaymentDetails'), require('./model/PaymentLineItem'), require('./model/PermissionProfile'), require('./model/PermissionProfileInformation'), require('./model/PlanInformation'), require('./model/PostTransactionsRequest'), require('./model/PostTransactionsResponse'), require('./model/PowerForm'), require('./model/PowerFormFormDataEnvelope'), require('./model/PowerFormFormDataRecipient'), require('./model/PowerFormRecipient'), require('./model/PowerFormSendersResponse'), require('./model/PowerFormsFormDataResponse'), require('./model/PowerFormsRequest'), require('./model/PowerFormsResponse'), require('./model/PropertyMetadata'), require('./model/Province'), require('./model/ProvisioningInformation'), require('./model/PurchasedEnvelopesInformation'), require('./model/Radio'), require('./model/RadioGroup'), require('./model/RecipientAttachment'), require('./model/RecipientDomain'), require('./model/RecipientEmailNotification'), require('./model/RecipientEvent'), require('./model/RecipientFormData'), require('./model/RecipientNamesResponse'), require('./model/RecipientPhoneAuthentication'), require('./model/RecipientSAMLAuthentication'), require('./model/RecipientSMSAuthentication'), require('./model/RecipientSignatureInformation'), require('./model/RecipientSignatureProvider'), require('./model/RecipientSignatureProviderOptions'), require('./model/RecipientUpdateResponse'), require('./model/RecipientViewRequest'), require('./model/Recipients'), require('./model/RecipientsUpdateSummary'), require('./model/ReferralInformation'), require('./model/Reminders'), require('./model/ResourceInformation'), require('./model/ReturnUrlRequest'), require('./model/SamlAssertionAttribute'), require('./model/SeatDiscount'), require('./model/SenderEmailNotifications'), require('./model/ServerTemplate'), require('./model/ServiceInformation'), require('./model/ServiceVersion'), require('./model/SettingsMetadata'), require('./model/SharedItem'), require('./model/SignHere'), require('./model/SignatureProviderRequiredOption'), require('./model/SignatureType'), require('./model/Signer'), require('./model/SignerAttachment'), require('./model/SignerEmailNotifications'), require('./model/SigningGroup'), require('./model/SigningGroupInformation'), require('./model/SigningGroupUser'), require('./model/SigningGroupUsers'), require('./model/SocialAccountInformation'), require('./model/SocialAuthentication'), require('./model/Ssn'), require('./model/Ssn4InformationInput'), require('./model/Ssn9InformationInput'), require('./model/TabAccountSettings'), require('./model/TabMetadata'), require('./model/TabMetadataList'), require('./model/Tabs'), require('./model/TemplateCustomFields'), require('./model/TemplateDocumentVisibilityList'), require('./model/TemplateDocumentsResult'), require('./model/TemplateInformation'), require('./model/TemplateMatch'), require('./model/TemplateNotificationRequest'), require('./model/TemplateRecipients'), require('./model/TemplateRole'), require('./model/TemplateSharedItem'), require('./model/TemplateSummary'), require('./model/TemplateTabs'), require('./model/TemplateUpdateSummary'), require('./model/Text'), require('./model/TextCustomField'), require('./model/Title'), require('./model/UsageHistory'), require('./model/UserAccountManagementGranularInformation'), require('./model/UserInfo'), require('./model/UserInfoList'), require('./model/UserInformation'), require('./model/UserInformationList'), require('./model/UserPasswordInformation'), require('./model/UserProfile'), require('./model/UserSettingsInformation'), require('./model/UserSharedItem'), require('./model/UserSignature'), require('./model/UserSignatureDefinition'), require('./model/UserSignaturesInformation'), require('./model/UserSocialIdResult'), require('./model/UsersResponse'), require('./model/View'), require('./model/ViewLinkRequest'), require('./model/ViewUrl'), require('./model/Workspace'), require('./model/WorkspaceFolderContents'), require('./model/WorkspaceItem'), require('./model/WorkspaceItemList'), require('./model/WorkspaceList'), require('./model/WorkspaceUser'), require('./model/WorkspaceUserAuthorization'), require('./model/Zip'), require('./api/AccountsApi'), require('./api/AuthenticationApi'), require('./api/BillingApi'), require('./api/BulkEnvelopesApi'), require('./api/CloudStorageApi'), require('./api/ConnectApi'), require('./api/CustomTabsApi'), require('./api/DiagnosticsApi'), require('./api/EnvelopesApi'), require('./api/FoldersApi'), require('./api/GroupsApi'), require('./api/PowerFormsApi'), require('./api/SigningGroupsApi'), require('./api/TemplatesApi'), require('./api/UsersApi'), require('./api/WorkspacesApi'));
  }
}(function(Configuration, ApiClient, OAuthClient, AccountAddress, AccountBillingPlan, AccountBillingPlanResponse, AccountInformation, AccountRoleSettings, AccountSettingsInformation, AccountSharedAccess, AccountSignatureProvider, AccountSignatureProviderOption, AccountSignatureProviders, AddOn, AddressInformation, AddressInformationInput, AddressInformationV2, Agent, ApiRequestLog, ApiRequestLogsResult, AppStoreProduct, AppStoreReceipt, Approve, Attachment, AuthenticationMethod, AuthenticationStatus, BccEmailAddress, BillingCharge, BillingChargeResponse, BillingDiscount, BillingInvoice, BillingInvoiceItem, BillingInvoicesResponse, BillingInvoicesSummary, BillingPayment, BillingPaymentItem, BillingPaymentRequest, BillingPaymentResponse, BillingPaymentsResponse, BillingPlan, BillingPlanInformation, BillingPlanPreview, BillingPlanResponse, BillingPlanUpdateResponse, BillingPlansResponse, BillingPrice, Brand, BrandEmailContent, BrandLink, BrandLogos, BrandRequest, BrandResourceUrls, BrandResources, BrandResourcesList, BrandsRequest, BrandsResponse, BulkEnvelope, BulkEnvelopeStatus, BulkEnvelopesResponse, BulkRecipient, BulkRecipientSignatureProvider, BulkRecipientTabLabel, BulkRecipientsRequest, BulkRecipientsResponse, BulkRecipientsSummaryResponse, BulkRecipientsUpdateResponse, CaptiveRecipient, CaptiveRecipientInformation, CarbonCopy, CertifiedDelivery, Checkbox, ChunkedUploadPart, ChunkedUploadRequest, ChunkedUploadResponse, CloudStorageProvider, CloudStorageProviders, Company, CompositeTemplate, ConnectConfigResults, ConnectCustomConfiguration, ConnectDebugLog, ConnectFailureFilter, ConnectFailureResult, ConnectFailureResults, ConnectLog, ConnectLogs, ConsoleViewRequest, ConsumerDisclosure, Contact, ContactGetResponse, ContactModRequest, ContactUpdateResponse, CorrectViewRequest, Country, CreditCardInformation, CreditCardTypes, CurrencyFeatureSetPrice, CurrencyPlanPrice, CustomFieldV2, CustomFields, CustomFieldsEnvelope, CustomSettingsInformation, DateSigned, Decline, DiagnosticsSettingsInformation, DobInformationInput, Document, DocumentFieldsInformation, DocumentTemplate, DocumentTemplateList, DocumentVisibility, DocumentVisibilityList, ENoteConfiguration, Editor, Email, EmailAddress, EmailSettings, Envelope, EnvelopeAttachment, EnvelopeAttachmentsRequest, EnvelopeAttachmentsResult, EnvelopeAuditEvent, EnvelopeAuditEventResponse, EnvelopeDefinition, EnvelopeDocument, EnvelopeDocumentsResult, EnvelopeEvent, EnvelopeFormData, EnvelopeId, EnvelopeIdsRequest, EnvelopeNotificationRequest, EnvelopeSummary, EnvelopeTemplate, EnvelopeTemplateDefinition, EnvelopeTemplateResult, EnvelopeTemplateResults, EnvelopeTransactionStatus, EnvelopeUpdateSummary, EnvelopesInformation, ErrorDetails, EventNotification, EventResult, Expirations, ExternalDocServiceErrorDetails, ExternalFile, ExternalFolder, FeatureSet, FileType, FileTypeList, Filter, FirstName, Folder, FolderItem, FolderItemResponse, FolderItemV2, FolderItemsResponse, FoldersRequest, FoldersResponse, ForgottenPasswordInformation, FormulaTab, FullName, Group, GroupInformation, IdCheckInformationInput, InPersonSigner, InitialHere, InlineTemplate, IntegratedUserInfoList, Intermediary, LastName, List, ListCustomField, ListItem, LockInformation, LockRequest, LoginAccount, LoginInformation, MatchBox, MemberGroupSharedItem, MemberSharedItems, MergeField, MobileNotifierConfiguration, MobileNotifierConfigurationInformation, ModelDate, ModelNumber, Money, NameValue, NewAccountDefinition, NewAccountSummary, NewUser, NewUsersDefinition, NewUsersSummary, NotaryHost, Note, Notification, OauthAccess, OfflineAttributes, Page, PageImages, PageRequest, PaymentDetails, PaymentLineItem, PermissionProfile, PermissionProfileInformation, PlanInformation, PostTransactionsRequest, PostTransactionsResponse, PowerForm, PowerFormFormDataEnvelope, PowerFormFormDataRecipient, PowerFormRecipient, PowerFormSendersResponse, PowerFormsFormDataResponse, PowerFormsRequest, PowerFormsResponse, PropertyMetadata, Province, ProvisioningInformation, PurchasedEnvelopesInformation, Radio, RadioGroup, RecipientAttachment, RecipientDomain, RecipientEmailNotification, RecipientEvent, RecipientFormData, RecipientNamesResponse, RecipientPhoneAuthentication, RecipientSAMLAuthentication, RecipientSMSAuthentication, RecipientSignatureInformation, RecipientSignatureProvider, RecipientSignatureProviderOptions, RecipientUpdateResponse, RecipientViewRequest, Recipients, RecipientsUpdateSummary, ReferralInformation, Reminders, ResourceInformation, ReturnUrlRequest, SamlAssertionAttribute, SeatDiscount, SenderEmailNotifications, ServerTemplate, ServiceInformation, ServiceVersion, SettingsMetadata, SharedItem, SignHere, SignatureProviderRequiredOption, SignatureType, Signer, SignerAttachment, SignerEmailNotifications, SigningGroup, SigningGroupInformation, SigningGroupUser, SigningGroupUsers, SocialAccountInformation, SocialAuthentication, Ssn, Ssn4InformationInput, Ssn9InformationInput, TabAccountSettings, TabMetadata, TabMetadataList, Tabs, TemplateCustomFields, TemplateDocumentVisibilityList, TemplateDocumentsResult, TemplateInformation, TemplateMatch, TemplateNotificationRequest, TemplateRecipients, TemplateRole, TemplateSharedItem, TemplateSummary, TemplateTabs, TemplateUpdateSummary, Text, TextCustomField, Title, UsageHistory, UserAccountManagementGranularInformation, UserInfo, UserInfoList, UserInformation, UserInformationList, UserPasswordInformation, UserProfile, UserSettingsInformation, UserSharedItem, UserSignature, UserSignatureDefinition, UserSignaturesInformation, UserSocialIdResult, UsersResponse, View, ViewLinkRequest, ViewUrl, Workspace, WorkspaceFolderContents, WorkspaceItem, WorkspaceItemList, WorkspaceList, WorkspaceUser, WorkspaceUserAuthorization, Zip, AccountsApi, AuthenticationApi, BillingApi, BulkEnvelopesApi, CloudStorageApi, ConnectApi, CustomTabsApi, DiagnosticsApi, EnvelopesApi, FoldersApi, GroupsApi, PowerFormsApi, SigningGroupsApi, TemplatesApi, UsersApi, WorkspacesApi) {
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
   * @version 3.0.0
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
     * The OAuthClient constructor.
     * @property {module:OAuthClient}
     */
    OAuthClient: OAuthClient,
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
     * The AccountInformation model constructor.
     * @property {module:model/AccountInformation}
     */
    AccountInformation: AccountInformation,
    /**
     * The AccountRoleSettings model constructor.
     * @property {module:model/AccountRoleSettings}
     */
    AccountRoleSettings: AccountRoleSettings,
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
     * The AddressInformationV2 model constructor.
     * @property {module:model/AddressInformationV2}
     */
    AddressInformationV2: AddressInformationV2,
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
     * The BulkEnvelopesResponse model constructor.
     * @property {module:model/BulkEnvelopesResponse}
     */
    BulkEnvelopesResponse: BulkEnvelopesResponse,
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
     * The BulkRecipientsRequest model constructor.
     * @property {module:model/BulkRecipientsRequest}
     */
    BulkRecipientsRequest: BulkRecipientsRequest,
    /**
     * The BulkRecipientsResponse model constructor.
     * @property {module:model/BulkRecipientsResponse}
     */
    BulkRecipientsResponse: BulkRecipientsResponse,
    /**
     * The BulkRecipientsSummaryResponse model constructor.
     * @property {module:model/BulkRecipientsSummaryResponse}
     */
    BulkRecipientsSummaryResponse: BulkRecipientsSummaryResponse,
    /**
     * The BulkRecipientsUpdateResponse model constructor.
     * @property {module:model/BulkRecipientsUpdateResponse}
     */
    BulkRecipientsUpdateResponse: BulkRecipientsUpdateResponse,
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
     * The CustomFieldV2 model constructor.
     * @property {module:model/CustomFieldV2}
     */
    CustomFieldV2: CustomFieldV2,
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
     * The Decline model constructor.
     * @property {module:model/Decline}
     */
    Decline: Decline,
    /**
     * The DiagnosticsSettingsInformation model constructor.
     * @property {module:model/DiagnosticsSettingsInformation}
     */
    DiagnosticsSettingsInformation: DiagnosticsSettingsInformation,
    /**
     * The DobInformationInput model constructor.
     * @property {module:model/DobInformationInput}
     */
    DobInformationInput: DobInformationInput,
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
     * The EnvelopeDefinition model constructor.
     * @property {module:model/EnvelopeDefinition}
     */
    EnvelopeDefinition: EnvelopeDefinition,
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
     * The EnvelopeNotificationRequest model constructor.
     * @property {module:model/EnvelopeNotificationRequest}
     */
    EnvelopeNotificationRequest: EnvelopeNotificationRequest,
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
     * The EnvelopeTemplateDefinition model constructor.
     * @property {module:model/EnvelopeTemplateDefinition}
     */
    EnvelopeTemplateDefinition: EnvelopeTemplateDefinition,
    /**
     * The EnvelopeTemplateResult model constructor.
     * @property {module:model/EnvelopeTemplateResult}
     */
    EnvelopeTemplateResult: EnvelopeTemplateResult,
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
     * The FolderItem model constructor.
     * @property {module:model/FolderItem}
     */
    FolderItem: FolderItem,
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
     * The IdCheckInformationInput model constructor.
     * @property {module:model/IdCheckInformationInput}
     */
    IdCheckInformationInput: IdCheckInformationInput,
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
     * The LastName model constructor.
     * @property {module:model/LastName}
     */
    LastName: LastName,
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
     * The NotaryHost model constructor.
     * @property {module:model/NotaryHost}
     */
    NotaryHost: NotaryHost,
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
     * The PaymentDetails model constructor.
     * @property {module:model/PaymentDetails}
     */
    PaymentDetails: PaymentDetails,
    /**
     * The PaymentLineItem model constructor.
     * @property {module:model/PaymentLineItem}
     */
    PaymentLineItem: PaymentLineItem,
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
     * The PlanInformation model constructor.
     * @property {module:model/PlanInformation}
     */
    PlanInformation: PlanInformation,
    /**
     * The PostTransactionsRequest model constructor.
     * @property {module:model/PostTransactionsRequest}
     */
    PostTransactionsRequest: PostTransactionsRequest,
    /**
     * The PostTransactionsResponse model constructor.
     * @property {module:model/PostTransactionsResponse}
     */
    PostTransactionsResponse: PostTransactionsResponse,
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
     * The RecipientNamesResponse model constructor.
     * @property {module:model/RecipientNamesResponse}
     */
    RecipientNamesResponse: RecipientNamesResponse,
    /**
     * The RecipientPhoneAuthentication model constructor.
     * @property {module:model/RecipientPhoneAuthentication}
     */
    RecipientPhoneAuthentication: RecipientPhoneAuthentication,
    /**
     * The RecipientSAMLAuthentication model constructor.
     * @property {module:model/RecipientSAMLAuthentication}
     */
    RecipientSAMLAuthentication: RecipientSAMLAuthentication,
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
     * The SamlAssertionAttribute model constructor.
     * @property {module:model/SamlAssertionAttribute}
     */
    SamlAssertionAttribute: SamlAssertionAttribute,
    /**
     * The SeatDiscount model constructor.
     * @property {module:model/SeatDiscount}
     */
    SeatDiscount: SeatDiscount,
    /**
     * The SenderEmailNotifications model constructor.
     * @property {module:model/SenderEmailNotifications}
     */
    SenderEmailNotifications: SenderEmailNotifications,
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
     * The TabAccountSettings model constructor.
     * @property {module:model/TabAccountSettings}
     */
    TabAccountSettings: TabAccountSettings,
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
     * The ViewLinkRequest model constructor.
     * @property {module:model/ViewLinkRequest}
     */
    ViewLinkRequest: ViewLinkRequest,
    /**
     * The ViewUrl model constructor.
     * @property {module:model/ViewUrl}
     */
    ViewUrl: ViewUrl,
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
