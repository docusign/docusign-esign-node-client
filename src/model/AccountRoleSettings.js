(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.SettingsMetadata);
  }
}(this, function(module, SettingsMetadata) {
  'use strict';

  
  

  
  var AccountRoleSettings = function AccountRoleSettings() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.allowAccountManagement) {
        self.allowAccountManagement = data.allowAccountManagement;
      }
      
      if (data.useNewDocuSignExperienceInterface) {
        self.useNewDocuSignExperienceInterface = data.useNewDocuSignExperienceInterface;
      }
      
      if (data.canCreateWorkspaces) {
        self.canCreateWorkspaces = data.canCreateWorkspaces;
      }
      
      if (data.allowBulkSending) {
        self.allowBulkSending = data.allowBulkSending;
      }
      
      if (data.allowEnvelopeSending) {
        self.allowEnvelopeSending = data.allowEnvelopeSending;
      }
      
      if (data.allowSignerAttachments) {
        self.allowSignerAttachments = data.allowSignerAttachments;
      }
      
      if (data.allowTaggingInSendAndCorrect) {
        self.allowTaggingInSendAndCorrect = data.allowTaggingInSendAndCorrect;
      }
      
      if (data.allowWetSigningOverride) {
        self.allowWetSigningOverride = data.allowWetSigningOverride;
      }
      
      if (data.allowedAddressBookAccess) {
        self.allowedAddressBookAccess = data.allowedAddressBookAccess;
      }
      
      if (data.allowedTemplateAccess) {
        self.allowedTemplateAccess = data.allowedTemplateAccess;
      }
      
      if (data.enableRecipientViewingNotifications) {
        self.enableRecipientViewingNotifications = data.enableRecipientViewingNotifications;
      }
      
      if (data.enableSequentialSigningInterface) {
        self.enableSequentialSigningInterface = data.enableSequentialSigningInterface;
      }
      
      if (data.receiveCompletedSelfSignedDocumentsAsEmailLinks) {
        self.receiveCompletedSelfSignedDocumentsAsEmailLinks = data.receiveCompletedSelfSignedDocumentsAsEmailLinks;
      }
      
      if (data.signingUiVersion) {
        self.signingUiVersion = data.signingUiVersion;
      }
      
      if (data.useNewSendingInterface) {
        self.useNewSendingInterface = data.useNewSendingInterface;
      }
      
      if (data.allowSupplementalDocuments) {
        self.allowSupplementalDocuments = data.allowSupplementalDocuments;
      }
      
      if (data.supplementalDocumentsMustView) {
        self.supplementalDocumentsMustView = data.supplementalDocumentsMustView;
      }
      
      if (data.supplementalDocumentsMustAccept) {
        self.supplementalDocumentsMustAccept = data.supplementalDocumentsMustAccept;
      }
      
      if (data.allowApiAccess) {
        self.allowApiAccess = data.allowApiAccess;
      }
      
      if (data.allowApiAccessToAccount) {
        self.allowApiAccessToAccount = data.allowApiAccessToAccount;
      }
      
      if (data.allowApiSendingOnBehalfOfOthers) {
        self.allowApiSendingOnBehalfOfOthers = data.allowApiSendingOnBehalfOfOthers;
      }
      
      if (data.allowApiSequentialSigning) {
        self.allowApiSequentialSigning = data.allowApiSequentialSigning;
      }
      
      if (data.enableApiRequestLogging) {
        self.enableApiRequestLogging = data.enableApiRequestLogging;
      }
      
      if (data.allowDocuSignDesktopClient) {
        self.allowDocuSignDesktopClient = data.allowDocuSignDesktopClient;
      }
      
      if (data.allowSendersToSetRecipientEmailLanguage) {
        self.allowSendersToSetRecipientEmailLanguage = data.allowSendersToSetRecipientEmailLanguage;
      }
      
      if (data.allowVaulting) {
        self.allowVaulting = data.allowVaulting;
      }
      
      if (data.allowedToBeEnvelopeTransferRecipient) {
        self.allowedToBeEnvelopeTransferRecipient = data.allowedToBeEnvelopeTransferRecipient;
      }
      
      if (data.enableTransactionPointIntegration) {
        self.enableTransactionPointIntegration = data.enableTransactionPointIntegration;
      }
      
      if (data.powerFormRole) {
        self.powerFormRole = data.powerFormRole;
      }
      
      if (data.vaultingMode) {
        self.vaultingMode = data.vaultingMode;
      }
      
      if (data.allowAccountManagementMetadata) {
        self.allowAccountManagementMetadata = new data.allowAccountManagementMetadata.constructor();
        self.allowAccountManagementMetadata.constructFromObject(data.allowAccountManagementMetadata);
      }
      
      if (data.useNewDocuSignExperienceInterfaceMetadata) {
        self.useNewDocuSignExperienceInterfaceMetadata = new data.useNewDocuSignExperienceInterfaceMetadata.constructor();
        self.useNewDocuSignExperienceInterfaceMetadata.constructFromObject(data.useNewDocuSignExperienceInterfaceMetadata);
      }
      
      if (data.canCreateWorkspacesMetadata) {
        self.canCreateWorkspacesMetadata = new data.canCreateWorkspacesMetadata.constructor();
        self.canCreateWorkspacesMetadata.constructFromObject(data.canCreateWorkspacesMetadata);
      }
      
      if (data.allowBulkSendingMetadata) {
        self.allowBulkSendingMetadata = new data.allowBulkSendingMetadata.constructor();
        self.allowBulkSendingMetadata.constructFromObject(data.allowBulkSendingMetadata);
      }
      
      if (data.allowEnvelopeSendingMetadata) {
        self.allowEnvelopeSendingMetadata = new data.allowEnvelopeSendingMetadata.constructor();
        self.allowEnvelopeSendingMetadata.constructFromObject(data.allowEnvelopeSendingMetadata);
      }
      
      if (data.allowSignerAttachmentsMetadata) {
        self.allowSignerAttachmentsMetadata = new data.allowSignerAttachmentsMetadata.constructor();
        self.allowSignerAttachmentsMetadata.constructFromObject(data.allowSignerAttachmentsMetadata);
      }
      
      if (data.allowTaggingInSendAndCorrectMetadata) {
        self.allowTaggingInSendAndCorrectMetadata = new data.allowTaggingInSendAndCorrectMetadata.constructor();
        self.allowTaggingInSendAndCorrectMetadata.constructFromObject(data.allowTaggingInSendAndCorrectMetadata);
      }
      
      if (data.allowWetSigningOverrideMetadata) {
        self.allowWetSigningOverrideMetadata = new data.allowWetSigningOverrideMetadata.constructor();
        self.allowWetSigningOverrideMetadata.constructFromObject(data.allowWetSigningOverrideMetadata);
      }
      
      if (data.allowedAddressBookAccessMetadata) {
        self.allowedAddressBookAccessMetadata = new data.allowedAddressBookAccessMetadata.constructor();
        self.allowedAddressBookAccessMetadata.constructFromObject(data.allowedAddressBookAccessMetadata);
      }
      
      if (data.allowedTemplateAccessMetadata) {
        self.allowedTemplateAccessMetadata = new data.allowedTemplateAccessMetadata.constructor();
        self.allowedTemplateAccessMetadata.constructFromObject(data.allowedTemplateAccessMetadata);
      }
      
      if (data.enableRecipientViewingNotificationsMetadata) {
        self.enableRecipientViewingNotificationsMetadata = new data.enableRecipientViewingNotificationsMetadata.constructor();
        self.enableRecipientViewingNotificationsMetadata.constructFromObject(data.enableRecipientViewingNotificationsMetadata);
      }
      
      if (data.enableSequentialSigningInterfaceMetadata) {
        self.enableSequentialSigningInterfaceMetadata = new data.enableSequentialSigningInterfaceMetadata.constructor();
        self.enableSequentialSigningInterfaceMetadata.constructFromObject(data.enableSequentialSigningInterfaceMetadata);
      }
      
      if (data.receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata) {
        self.receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata = new data.receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata.constructor();
        self.receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata.constructFromObject(data.receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata);
      }
      
      if (data.signingUiVersionMetadata) {
        self.signingUiVersionMetadata = new data.signingUiVersionMetadata.constructor();
        self.signingUiVersionMetadata.constructFromObject(data.signingUiVersionMetadata);
      }
      
      if (data.useNewSendingInterfaceMetadata) {
        self.useNewSendingInterfaceMetadata = new data.useNewSendingInterfaceMetadata.constructor();
        self.useNewSendingInterfaceMetadata.constructFromObject(data.useNewSendingInterfaceMetadata);
      }
      
      if (data.allowSupplementalDocumentsMetadata) {
        self.allowSupplementalDocumentsMetadata = new data.allowSupplementalDocumentsMetadata.constructor();
        self.allowSupplementalDocumentsMetadata.constructFromObject(data.allowSupplementalDocumentsMetadata);
      }
      
      if (data.supplementalDocumentsMustViewMetadata) {
        self.supplementalDocumentsMustViewMetadata = new data.supplementalDocumentsMustViewMetadata.constructor();
        self.supplementalDocumentsMustViewMetadata.constructFromObject(data.supplementalDocumentsMustViewMetadata);
      }
      
      if (data.supplementalDocumentsMustAcceptMetadata) {
        self.supplementalDocumentsMustAcceptMetadata = new data.supplementalDocumentsMustAcceptMetadata.constructor();
        self.supplementalDocumentsMustAcceptMetadata.constructFromObject(data.supplementalDocumentsMustAcceptMetadata);
      }
      
      if (data.allowApiAccessMetadata) {
        self.allowApiAccessMetadata = new data.allowApiAccessMetadata.constructor();
        self.allowApiAccessMetadata.constructFromObject(data.allowApiAccessMetadata);
      }
      
      if (data.allowApiAccessToAccountMetadata) {
        self.allowApiAccessToAccountMetadata = new data.allowApiAccessToAccountMetadata.constructor();
        self.allowApiAccessToAccountMetadata.constructFromObject(data.allowApiAccessToAccountMetadata);
      }
      
      if (data.allowApiSendingOnBehalfOfOthersMetadata) {
        self.allowApiSendingOnBehalfOfOthersMetadata = new data.allowApiSendingOnBehalfOfOthersMetadata.constructor();
        self.allowApiSendingOnBehalfOfOthersMetadata.constructFromObject(data.allowApiSendingOnBehalfOfOthersMetadata);
      }
      
      if (data.allowApiSequentialSigningMetadata) {
        self.allowApiSequentialSigningMetadata = new data.allowApiSequentialSigningMetadata.constructor();
        self.allowApiSequentialSigningMetadata.constructFromObject(data.allowApiSequentialSigningMetadata);
      }
      
      if (data.enableApiRequestLoggingMetadata) {
        self.enableApiRequestLoggingMetadata = new data.enableApiRequestLoggingMetadata.constructor();
        self.enableApiRequestLoggingMetadata.constructFromObject(data.enableApiRequestLoggingMetadata);
      }
      
      if (data.allowDocuSignDesktopClientMetadata) {
        self.allowDocuSignDesktopClientMetadata = new data.allowDocuSignDesktopClientMetadata.constructor();
        self.allowDocuSignDesktopClientMetadata.constructFromObject(data.allowDocuSignDesktopClientMetadata);
      }
      
      if (data.allowSendersToSetRecipientEmailLanguageMetadata) {
        self.allowSendersToSetRecipientEmailLanguageMetadata = new data.allowSendersToSetRecipientEmailLanguageMetadata.constructor();
        self.allowSendersToSetRecipientEmailLanguageMetadata.constructFromObject(data.allowSendersToSetRecipientEmailLanguageMetadata);
      }
      
      if (data.allowVaultingMetadata) {
        self.allowVaultingMetadata = new data.allowVaultingMetadata.constructor();
        self.allowVaultingMetadata.constructFromObject(data.allowVaultingMetadata);
      }
      
      if (data.allowedToBeEnvelopeTransferRecipientMetadata) {
        self.allowedToBeEnvelopeTransferRecipientMetadata = new data.allowedToBeEnvelopeTransferRecipientMetadata.constructor();
        self.allowedToBeEnvelopeTransferRecipientMetadata.constructFromObject(data.allowedToBeEnvelopeTransferRecipientMetadata);
      }
      
      if (data.enableTransactionPointIntegrationMetadata) {
        self.enableTransactionPointIntegrationMetadata = new data.enableTransactionPointIntegrationMetadata.constructor();
        self.enableTransactionPointIntegrationMetadata.constructFromObject(data.enableTransactionPointIntegrationMetadata);
      }
      
      if (data.powerFormRoleMetadata) {
        self.powerFormRoleMetadata = new data.powerFormRoleMetadata.constructor();
        self.powerFormRoleMetadata.constructFromObject(data.powerFormRoleMetadata);
      }
      
      if (data.vaultingModeMetadata) {
        self.vaultingModeMetadata = new data.vaultingModeMetadata.constructor();
        self.vaultingModeMetadata.constructFromObject(data.vaultingModeMetadata);
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowAccountManagement = function() {
      return self.allowAccountManagement;
    }

    /**
     * set 
     * @param {String} allowAccountManagement
     **/
    self.setAllowAccountManagement = function (allowAccountManagement) {
      self.allowAccountManagement = allowAccountManagement;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUseNewDocuSignExperienceInterface = function() {
      return self.useNewDocuSignExperienceInterface;
    }

    /**
     * set 
     * @param {String} useNewDocuSignExperienceInterface
     **/
    self.setUseNewDocuSignExperienceInterface = function (useNewDocuSignExperienceInterface) {
      self.useNewDocuSignExperienceInterface = useNewDocuSignExperienceInterface;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCanCreateWorkspaces = function() {
      return self.canCreateWorkspaces;
    }

    /**
     * set 
     * @param {String} canCreateWorkspaces
     **/
    self.setCanCreateWorkspaces = function (canCreateWorkspaces) {
      self.canCreateWorkspaces = canCreateWorkspaces;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowBulkSending = function() {
      return self.allowBulkSending;
    }

    /**
     * set 
     * @param {String} allowBulkSending
     **/
    self.setAllowBulkSending = function (allowBulkSending) {
      self.allowBulkSending = allowBulkSending;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowEnvelopeSending = function() {
      return self.allowEnvelopeSending;
    }

    /**
     * set 
     * @param {String} allowEnvelopeSending
     **/
    self.setAllowEnvelopeSending = function (allowEnvelopeSending) {
      self.allowEnvelopeSending = allowEnvelopeSending;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowSignerAttachments = function() {
      return self.allowSignerAttachments;
    }

    /**
     * set 
     * @param {String} allowSignerAttachments
     **/
    self.setAllowSignerAttachments = function (allowSignerAttachments) {
      self.allowSignerAttachments = allowSignerAttachments;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowTaggingInSendAndCorrect = function() {
      return self.allowTaggingInSendAndCorrect;
    }

    /**
     * set 
     * @param {String} allowTaggingInSendAndCorrect
     **/
    self.setAllowTaggingInSendAndCorrect = function (allowTaggingInSendAndCorrect) {
      self.allowTaggingInSendAndCorrect = allowTaggingInSendAndCorrect;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowWetSigningOverride = function() {
      return self.allowWetSigningOverride;
    }

    /**
     * set 
     * @param {String} allowWetSigningOverride
     **/
    self.setAllowWetSigningOverride = function (allowWetSigningOverride) {
      self.allowWetSigningOverride = allowWetSigningOverride;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowedAddressBookAccess = function() {
      return self.allowedAddressBookAccess;
    }

    /**
     * set 
     * @param {String} allowedAddressBookAccess
     **/
    self.setAllowedAddressBookAccess = function (allowedAddressBookAccess) {
      self.allowedAddressBookAccess = allowedAddressBookAccess;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowedTemplateAccess = function() {
      return self.allowedTemplateAccess;
    }

    /**
     * set 
     * @param {String} allowedTemplateAccess
     **/
    self.setAllowedTemplateAccess = function (allowedTemplateAccess) {
      self.allowedTemplateAccess = allowedTemplateAccess;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEnableRecipientViewingNotifications = function() {
      return self.enableRecipientViewingNotifications;
    }

    /**
     * set 
     * @param {String} enableRecipientViewingNotifications
     **/
    self.setEnableRecipientViewingNotifications = function (enableRecipientViewingNotifications) {
      self.enableRecipientViewingNotifications = enableRecipientViewingNotifications;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEnableSequentialSigningInterface = function() {
      return self.enableSequentialSigningInterface;
    }

    /**
     * set 
     * @param {String} enableSequentialSigningInterface
     **/
    self.setEnableSequentialSigningInterface = function (enableSequentialSigningInterface) {
      self.enableSequentialSigningInterface = enableSequentialSigningInterface;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getReceiveCompletedSelfSignedDocumentsAsEmailLinks = function() {
      return self.receiveCompletedSelfSignedDocumentsAsEmailLinks;
    }

    /**
     * set 
     * @param {String} receiveCompletedSelfSignedDocumentsAsEmailLinks
     **/
    self.setReceiveCompletedSelfSignedDocumentsAsEmailLinks = function (receiveCompletedSelfSignedDocumentsAsEmailLinks) {
      self.receiveCompletedSelfSignedDocumentsAsEmailLinks = receiveCompletedSelfSignedDocumentsAsEmailLinks;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSigningUiVersion = function() {
      return self.signingUiVersion;
    }

    /**
     * set 
     * @param {String} signingUiVersion
     **/
    self.setSigningUiVersion = function (signingUiVersion) {
      self.signingUiVersion = signingUiVersion;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUseNewSendingInterface = function() {
      return self.useNewSendingInterface;
    }

    /**
     * set 
     * @param {String} useNewSendingInterface
     **/
    self.setUseNewSendingInterface = function (useNewSendingInterface) {
      self.useNewSendingInterface = useNewSendingInterface;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowSupplementalDocuments = function() {
      return self.allowSupplementalDocuments;
    }

    /**
     * set 
     * @param {String} allowSupplementalDocuments
     **/
    self.setAllowSupplementalDocuments = function (allowSupplementalDocuments) {
      self.allowSupplementalDocuments = allowSupplementalDocuments;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSupplementalDocumentsMustView = function() {
      return self.supplementalDocumentsMustView;
    }

    /**
     * set 
     * @param {String} supplementalDocumentsMustView
     **/
    self.setSupplementalDocumentsMustView = function (supplementalDocumentsMustView) {
      self.supplementalDocumentsMustView = supplementalDocumentsMustView;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSupplementalDocumentsMustAccept = function() {
      return self.supplementalDocumentsMustAccept;
    }

    /**
     * set 
     * @param {String} supplementalDocumentsMustAccept
     **/
    self.setSupplementalDocumentsMustAccept = function (supplementalDocumentsMustAccept) {
      self.supplementalDocumentsMustAccept = supplementalDocumentsMustAccept;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowApiAccess = function() {
      return self.allowApiAccess;
    }

    /**
     * set 
     * @param {String} allowApiAccess
     **/
    self.setAllowApiAccess = function (allowApiAccess) {
      self.allowApiAccess = allowApiAccess;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowApiAccessToAccount = function() {
      return self.allowApiAccessToAccount;
    }

    /**
     * set 
     * @param {String} allowApiAccessToAccount
     **/
    self.setAllowApiAccessToAccount = function (allowApiAccessToAccount) {
      self.allowApiAccessToAccount = allowApiAccessToAccount;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowApiSendingOnBehalfOfOthers = function() {
      return self.allowApiSendingOnBehalfOfOthers;
    }

    /**
     * set 
     * @param {String} allowApiSendingOnBehalfOfOthers
     **/
    self.setAllowApiSendingOnBehalfOfOthers = function (allowApiSendingOnBehalfOfOthers) {
      self.allowApiSendingOnBehalfOfOthers = allowApiSendingOnBehalfOfOthers;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowApiSequentialSigning = function() {
      return self.allowApiSequentialSigning;
    }

    /**
     * set 
     * @param {String} allowApiSequentialSigning
     **/
    self.setAllowApiSequentialSigning = function (allowApiSequentialSigning) {
      self.allowApiSequentialSigning = allowApiSequentialSigning;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEnableApiRequestLogging = function() {
      return self.enableApiRequestLogging;
    }

    /**
     * set 
     * @param {String} enableApiRequestLogging
     **/
    self.setEnableApiRequestLogging = function (enableApiRequestLogging) {
      self.enableApiRequestLogging = enableApiRequestLogging;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowDocuSignDesktopClient = function() {
      return self.allowDocuSignDesktopClient;
    }

    /**
     * set 
     * @param {String} allowDocuSignDesktopClient
     **/
    self.setAllowDocuSignDesktopClient = function (allowDocuSignDesktopClient) {
      self.allowDocuSignDesktopClient = allowDocuSignDesktopClient;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowSendersToSetRecipientEmailLanguage = function() {
      return self.allowSendersToSetRecipientEmailLanguage;
    }

    /**
     * set 
     * @param {String} allowSendersToSetRecipientEmailLanguage
     **/
    self.setAllowSendersToSetRecipientEmailLanguage = function (allowSendersToSetRecipientEmailLanguage) {
      self.allowSendersToSetRecipientEmailLanguage = allowSendersToSetRecipientEmailLanguage;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowVaulting = function() {
      return self.allowVaulting;
    }

    /**
     * set 
     * @param {String} allowVaulting
     **/
    self.setAllowVaulting = function (allowVaulting) {
      self.allowVaulting = allowVaulting;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowedToBeEnvelopeTransferRecipient = function() {
      return self.allowedToBeEnvelopeTransferRecipient;
    }

    /**
     * set 
     * @param {String} allowedToBeEnvelopeTransferRecipient
     **/
    self.setAllowedToBeEnvelopeTransferRecipient = function (allowedToBeEnvelopeTransferRecipient) {
      self.allowedToBeEnvelopeTransferRecipient = allowedToBeEnvelopeTransferRecipient;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEnableTransactionPointIntegration = function() {
      return self.enableTransactionPointIntegration;
    }

    /**
     * set 
     * @param {String} enableTransactionPointIntegration
     **/
    self.setEnableTransactionPointIntegration = function (enableTransactionPointIntegration) {
      self.enableTransactionPointIntegration = enableTransactionPointIntegration;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPowerFormRole = function() {
      return self.powerFormRole;
    }

    /**
     * set 
     * @param {String} powerFormRole
     **/
    self.setPowerFormRole = function (powerFormRole) {
      self.powerFormRole = powerFormRole;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getVaultingMode = function() {
      return self.vaultingMode;
    }

    /**
     * set 
     * @param {String} vaultingMode
     **/
    self.setVaultingMode = function (vaultingMode) {
      self.vaultingMode = vaultingMode;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowAccountManagementMetadata = function() {
      return self.allowAccountManagementMetadata;
    }

    /**
     * @param {SettingsMetadata} allowAccountManagementMetadata
     **/
    self.setAllowAccountManagementMetadata = function (allowAccountManagementMetadata) {
      self.allowAccountManagementMetadata = allowAccountManagementMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getUseNewDocuSignExperienceInterfaceMetadata = function() {
      return self.useNewDocuSignExperienceInterfaceMetadata;
    }

    /**
     * @param {SettingsMetadata} useNewDocuSignExperienceInterfaceMetadata
     **/
    self.setUseNewDocuSignExperienceInterfaceMetadata = function (useNewDocuSignExperienceInterfaceMetadata) {
      self.useNewDocuSignExperienceInterfaceMetadata = useNewDocuSignExperienceInterfaceMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getCanCreateWorkspacesMetadata = function() {
      return self.canCreateWorkspacesMetadata;
    }

    /**
     * @param {SettingsMetadata} canCreateWorkspacesMetadata
     **/
    self.setCanCreateWorkspacesMetadata = function (canCreateWorkspacesMetadata) {
      self.canCreateWorkspacesMetadata = canCreateWorkspacesMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowBulkSendingMetadata = function() {
      return self.allowBulkSendingMetadata;
    }

    /**
     * @param {SettingsMetadata} allowBulkSendingMetadata
     **/
    self.setAllowBulkSendingMetadata = function (allowBulkSendingMetadata) {
      self.allowBulkSendingMetadata = allowBulkSendingMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowEnvelopeSendingMetadata = function() {
      return self.allowEnvelopeSendingMetadata;
    }

    /**
     * @param {SettingsMetadata} allowEnvelopeSendingMetadata
     **/
    self.setAllowEnvelopeSendingMetadata = function (allowEnvelopeSendingMetadata) {
      self.allowEnvelopeSendingMetadata = allowEnvelopeSendingMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowSignerAttachmentsMetadata = function() {
      return self.allowSignerAttachmentsMetadata;
    }

    /**
     * @param {SettingsMetadata} allowSignerAttachmentsMetadata
     **/
    self.setAllowSignerAttachmentsMetadata = function (allowSignerAttachmentsMetadata) {
      self.allowSignerAttachmentsMetadata = allowSignerAttachmentsMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowTaggingInSendAndCorrectMetadata = function() {
      return self.allowTaggingInSendAndCorrectMetadata;
    }

    /**
     * @param {SettingsMetadata} allowTaggingInSendAndCorrectMetadata
     **/
    self.setAllowTaggingInSendAndCorrectMetadata = function (allowTaggingInSendAndCorrectMetadata) {
      self.allowTaggingInSendAndCorrectMetadata = allowTaggingInSendAndCorrectMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowWetSigningOverrideMetadata = function() {
      return self.allowWetSigningOverrideMetadata;
    }

    /**
     * @param {SettingsMetadata} allowWetSigningOverrideMetadata
     **/
    self.setAllowWetSigningOverrideMetadata = function (allowWetSigningOverrideMetadata) {
      self.allowWetSigningOverrideMetadata = allowWetSigningOverrideMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowedAddressBookAccessMetadata = function() {
      return self.allowedAddressBookAccessMetadata;
    }

    /**
     * @param {SettingsMetadata} allowedAddressBookAccessMetadata
     **/
    self.setAllowedAddressBookAccessMetadata = function (allowedAddressBookAccessMetadata) {
      self.allowedAddressBookAccessMetadata = allowedAddressBookAccessMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowedTemplateAccessMetadata = function() {
      return self.allowedTemplateAccessMetadata;
    }

    /**
     * @param {SettingsMetadata} allowedTemplateAccessMetadata
     **/
    self.setAllowedTemplateAccessMetadata = function (allowedTemplateAccessMetadata) {
      self.allowedTemplateAccessMetadata = allowedTemplateAccessMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getEnableRecipientViewingNotificationsMetadata = function() {
      return self.enableRecipientViewingNotificationsMetadata;
    }

    /**
     * @param {SettingsMetadata} enableRecipientViewingNotificationsMetadata
     **/
    self.setEnableRecipientViewingNotificationsMetadata = function (enableRecipientViewingNotificationsMetadata) {
      self.enableRecipientViewingNotificationsMetadata = enableRecipientViewingNotificationsMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getEnableSequentialSigningInterfaceMetadata = function() {
      return self.enableSequentialSigningInterfaceMetadata;
    }

    /**
     * @param {SettingsMetadata} enableSequentialSigningInterfaceMetadata
     **/
    self.setEnableSequentialSigningInterfaceMetadata = function (enableSequentialSigningInterfaceMetadata) {
      self.enableSequentialSigningInterfaceMetadata = enableSequentialSigningInterfaceMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getReceiveCompletedSelfSignedDocumentsAsEmailLinksMetadata = function() {
      return self.receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata;
    }

    /**
     * @param {SettingsMetadata} receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata
     **/
    self.setReceiveCompletedSelfSignedDocumentsAsEmailLinksMetadata = function (receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata) {
      self.receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata = receiveCompletedSelfSignedDocumentsAsEmailLinksMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getSigningUiVersionMetadata = function() {
      return self.signingUiVersionMetadata;
    }

    /**
     * @param {SettingsMetadata} signingUiVersionMetadata
     **/
    self.setSigningUiVersionMetadata = function (signingUiVersionMetadata) {
      self.signingUiVersionMetadata = signingUiVersionMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getUseNewSendingInterfaceMetadata = function() {
      return self.useNewSendingInterfaceMetadata;
    }

    /**
     * @param {SettingsMetadata} useNewSendingInterfaceMetadata
     **/
    self.setUseNewSendingInterfaceMetadata = function (useNewSendingInterfaceMetadata) {
      self.useNewSendingInterfaceMetadata = useNewSendingInterfaceMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowSupplementalDocumentsMetadata = function() {
      return self.allowSupplementalDocumentsMetadata;
    }

    /**
     * @param {SettingsMetadata} allowSupplementalDocumentsMetadata
     **/
    self.setAllowSupplementalDocumentsMetadata = function (allowSupplementalDocumentsMetadata) {
      self.allowSupplementalDocumentsMetadata = allowSupplementalDocumentsMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getSupplementalDocumentsMustViewMetadata = function() {
      return self.supplementalDocumentsMustViewMetadata;
    }

    /**
     * @param {SettingsMetadata} supplementalDocumentsMustViewMetadata
     **/
    self.setSupplementalDocumentsMustViewMetadata = function (supplementalDocumentsMustViewMetadata) {
      self.supplementalDocumentsMustViewMetadata = supplementalDocumentsMustViewMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getSupplementalDocumentsMustAcceptMetadata = function() {
      return self.supplementalDocumentsMustAcceptMetadata;
    }

    /**
     * @param {SettingsMetadata} supplementalDocumentsMustAcceptMetadata
     **/
    self.setSupplementalDocumentsMustAcceptMetadata = function (supplementalDocumentsMustAcceptMetadata) {
      self.supplementalDocumentsMustAcceptMetadata = supplementalDocumentsMustAcceptMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowApiAccessMetadata = function() {
      return self.allowApiAccessMetadata;
    }

    /**
     * @param {SettingsMetadata} allowApiAccessMetadata
     **/
    self.setAllowApiAccessMetadata = function (allowApiAccessMetadata) {
      self.allowApiAccessMetadata = allowApiAccessMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowApiAccessToAccountMetadata = function() {
      return self.allowApiAccessToAccountMetadata;
    }

    /**
     * @param {SettingsMetadata} allowApiAccessToAccountMetadata
     **/
    self.setAllowApiAccessToAccountMetadata = function (allowApiAccessToAccountMetadata) {
      self.allowApiAccessToAccountMetadata = allowApiAccessToAccountMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowApiSendingOnBehalfOfOthersMetadata = function() {
      return self.allowApiSendingOnBehalfOfOthersMetadata;
    }

    /**
     * @param {SettingsMetadata} allowApiSendingOnBehalfOfOthersMetadata
     **/
    self.setAllowApiSendingOnBehalfOfOthersMetadata = function (allowApiSendingOnBehalfOfOthersMetadata) {
      self.allowApiSendingOnBehalfOfOthersMetadata = allowApiSendingOnBehalfOfOthersMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowApiSequentialSigningMetadata = function() {
      return self.allowApiSequentialSigningMetadata;
    }

    /**
     * @param {SettingsMetadata} allowApiSequentialSigningMetadata
     **/
    self.setAllowApiSequentialSigningMetadata = function (allowApiSequentialSigningMetadata) {
      self.allowApiSequentialSigningMetadata = allowApiSequentialSigningMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getEnableApiRequestLoggingMetadata = function() {
      return self.enableApiRequestLoggingMetadata;
    }

    /**
     * @param {SettingsMetadata} enableApiRequestLoggingMetadata
     **/
    self.setEnableApiRequestLoggingMetadata = function (enableApiRequestLoggingMetadata) {
      self.enableApiRequestLoggingMetadata = enableApiRequestLoggingMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowDocuSignDesktopClientMetadata = function() {
      return self.allowDocuSignDesktopClientMetadata;
    }

    /**
     * @param {SettingsMetadata} allowDocuSignDesktopClientMetadata
     **/
    self.setAllowDocuSignDesktopClientMetadata = function (allowDocuSignDesktopClientMetadata) {
      self.allowDocuSignDesktopClientMetadata = allowDocuSignDesktopClientMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowSendersToSetRecipientEmailLanguageMetadata = function() {
      return self.allowSendersToSetRecipientEmailLanguageMetadata;
    }

    /**
     * @param {SettingsMetadata} allowSendersToSetRecipientEmailLanguageMetadata
     **/
    self.setAllowSendersToSetRecipientEmailLanguageMetadata = function (allowSendersToSetRecipientEmailLanguageMetadata) {
      self.allowSendersToSetRecipientEmailLanguageMetadata = allowSendersToSetRecipientEmailLanguageMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowVaultingMetadata = function() {
      return self.allowVaultingMetadata;
    }

    /**
     * @param {SettingsMetadata} allowVaultingMetadata
     **/
    self.setAllowVaultingMetadata = function (allowVaultingMetadata) {
      self.allowVaultingMetadata = allowVaultingMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowedToBeEnvelopeTransferRecipientMetadata = function() {
      return self.allowedToBeEnvelopeTransferRecipientMetadata;
    }

    /**
     * @param {SettingsMetadata} allowedToBeEnvelopeTransferRecipientMetadata
     **/
    self.setAllowedToBeEnvelopeTransferRecipientMetadata = function (allowedToBeEnvelopeTransferRecipientMetadata) {
      self.allowedToBeEnvelopeTransferRecipientMetadata = allowedToBeEnvelopeTransferRecipientMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getEnableTransactionPointIntegrationMetadata = function() {
      return self.enableTransactionPointIntegrationMetadata;
    }

    /**
     * @param {SettingsMetadata} enableTransactionPointIntegrationMetadata
     **/
    self.setEnableTransactionPointIntegrationMetadata = function (enableTransactionPointIntegrationMetadata) {
      self.enableTransactionPointIntegrationMetadata = enableTransactionPointIntegrationMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getPowerFormRoleMetadata = function() {
      return self.powerFormRoleMetadata;
    }

    /**
     * @param {SettingsMetadata} powerFormRoleMetadata
     **/
    self.setPowerFormRoleMetadata = function (powerFormRoleMetadata) {
      self.powerFormRoleMetadata = powerFormRoleMetadata;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getVaultingModeMetadata = function() {
      return self.vaultingModeMetadata;
    }

    /**
     * @param {SettingsMetadata} vaultingModeMetadata
     **/
    self.setVaultingModeMetadata = function (vaultingModeMetadata) {
      self.vaultingModeMetadata = vaultingModeMetadata;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AccountRoleSettings = AccountRoleSettings;
  }

  return AccountRoleSettings;
  
  
}));
