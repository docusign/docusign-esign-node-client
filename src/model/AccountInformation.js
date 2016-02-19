(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined);
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign);
  }
}(this, function(module) {
  'use strict';

  
  

  /**
   * Contains account Information.
   **/
  var AccountInformation = function AccountInformation() { 
    var self = this;
    
    /**
     * Identifies the plan that was used create this account.
     * datatype: String
     **/
    self.currentPlanId = null;
    
    /**
     * The name of the Billing Plan.
     * datatype: String
     **/
    self.planName = null;
    
    /**
     * Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
     * datatype: String
     **/
    self.planClassification = null;
    
    /**
     * The date that the Account started using the current plan.
     * datatype: String
     **/
    self.planStartDate = null;
    
    /**
     * The date that the current plan will end.
     * datatype: String
     **/
    self.planEndDate = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.billingPeriodStartDate = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.billingPeriodEndDate = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.billingPeriodEnvelopesSent = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.billingPeriodEnvelopesAllowed = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.billingPeriodDaysRemaining = null;
    
    /**
     * When set to **true**, specifies that you can upgrade the account through the API.
     * datatype: String
     **/
    self.canUpgrade = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.canCancelRenewal = null;
    
    /**
     * 
     * datatype: String
     **/
    self.envelopeSendingBlocked = null;
    
    /**
     * 
     * datatype: String
     **/
    self.envelopeUnitPrice = null;
    
    /**
     * 
     * datatype: String
     **/
    self.suspensionStatus = null;
    
    /**
     * 
     * datatype: String
     **/
    self.suspensionDate = null;
    
    /**
     * The name of the current account.
     * datatype: String
     **/
    self.accountName = null;
    
    /**
     * 
     * datatype: String
     **/
    self.connectPermission = null;
    
    /**
     * 
     * datatype: String
     **/
    self.docuSignLandingUrl = null;
    
    /**
     * The code that identifies the billing plan groups and plans for the new account.
     * datatype: String
     **/
    self.distributorCode = null;
    
    /**
     * The GUID associated with the account ID.
     * datatype: String
     **/
    self.accountIdGuid = null;
    
    /**
     * Specifies the ISO currency code for the account.
     * datatype: String
     **/
    self.currencyCode = null;
    
    /**
     * A complex element that contains up to four Question/Answer pairs for forgotten password information for a user.
     * datatype: String
     **/
    self.forgottenPasswordQuestionsCount = null;
    
    /**
     * 
     * datatype: String
     **/
    self.paymentMethod = null;
    
    /**
     * 
     * datatype: String
     **/
    self.seatsAllowed = null;
    
    /**
     * 
     * datatype: String
     **/
    self.seatsInUse = null;
    
    /**
     * 
     * datatype: String
     **/
    self.createdDate = null;
    
    /**
     * 
     * datatype: String
     **/
    self.isDowngrade = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.billingProfile = null;
    
    /**
     * 
     * datatype: String
     **/
    self.status21CFRPart11 = null;
    
    /**
     * When set to **true**, the transaction rooms feature exposed through the Workspaces API is enabled.
     * datatype: String
     **/
    self.allowTransactionRooms = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.currentPlanId) {
        self.currentPlanId = data.currentPlanId;
      }
      
      if (data.planName) {
        self.planName = data.planName;
      }
      
      if (data.planClassification) {
        self.planClassification = data.planClassification;
      }
      
      if (data.planStartDate) {
        self.planStartDate = data.planStartDate;
      }
      
      if (data.planEndDate) {
        self.planEndDate = data.planEndDate;
      }
      
      if (data.billingPeriodStartDate) {
        self.billingPeriodStartDate = data.billingPeriodStartDate;
      }
      
      if (data.billingPeriodEndDate) {
        self.billingPeriodEndDate = data.billingPeriodEndDate;
      }
      
      if (data.billingPeriodEnvelopesSent) {
        self.billingPeriodEnvelopesSent = data.billingPeriodEnvelopesSent;
      }
      
      if (data.billingPeriodEnvelopesAllowed) {
        self.billingPeriodEnvelopesAllowed = data.billingPeriodEnvelopesAllowed;
      }
      
      if (data.billingPeriodDaysRemaining) {
        self.billingPeriodDaysRemaining = data.billingPeriodDaysRemaining;
      }
      
      if (data.canUpgrade) {
        self.canUpgrade = data.canUpgrade;
      }
      
      if (data.canCancelRenewal) {
        self.canCancelRenewal = data.canCancelRenewal;
      }
      
      if (data.envelopeSendingBlocked) {
        self.envelopeSendingBlocked = data.envelopeSendingBlocked;
      }
      
      if (data.envelopeUnitPrice) {
        self.envelopeUnitPrice = data.envelopeUnitPrice;
      }
      
      if (data.suspensionStatus) {
        self.suspensionStatus = data.suspensionStatus;
      }
      
      if (data.suspensionDate) {
        self.suspensionDate = data.suspensionDate;
      }
      
      if (data.accountName) {
        self.accountName = data.accountName;
      }
      
      if (data.connectPermission) {
        self.connectPermission = data.connectPermission;
      }
      
      if (data.docuSignLandingUrl) {
        self.docuSignLandingUrl = data.docuSignLandingUrl;
      }
      
      if (data.distributorCode) {
        self.distributorCode = data.distributorCode;
      }
      
      if (data.accountIdGuid) {
        self.accountIdGuid = data.accountIdGuid;
      }
      
      if (data.currencyCode) {
        self.currencyCode = data.currencyCode;
      }
      
      if (data.forgottenPasswordQuestionsCount) {
        self.forgottenPasswordQuestionsCount = data.forgottenPasswordQuestionsCount;
      }
      
      if (data.paymentMethod) {
        self.paymentMethod = data.paymentMethod;
      }
      
      if (data.seatsAllowed) {
        self.seatsAllowed = data.seatsAllowed;
      }
      
      if (data.seatsInUse) {
        self.seatsInUse = data.seatsInUse;
      }
      
      if (data.createdDate) {
        self.createdDate = data.createdDate;
      }
      
      if (data.isDowngrade) {
        self.isDowngrade = data.isDowngrade;
      }
      
      if (data.billingProfile) {
        self.billingProfile = data.billingProfile;
      }
      
      if (data.status21CFRPart11) {
        self.status21CFRPart11 = data.status21CFRPart11;
      }
      
      if (data.allowTransactionRooms) {
        self.allowTransactionRooms = data.allowTransactionRooms;
      }
      
    }

    
    /**
     * get Identifies the plan that was used create this account.
     * @return {String}
     **/
    self.getCurrentPlanId = function() {
      return self.currentPlanId;
    }

    /**
     * set Identifies the plan that was used create this account.
     * @param {String} currentPlanId
     **/
    self.setCurrentPlanId = function (currentPlanId) {
      self.currentPlanId = currentPlanId;
    }
    
    /**
     * get The name of the Billing Plan.
     * @return {String}
     **/
    self.getPlanName = function() {
      return self.planName;
    }

    /**
     * set The name of the Billing Plan.
     * @param {String} planName
     **/
    self.setPlanName = function (planName) {
      self.planName = planName;
    }
    
    /**
     * get Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
     * @return {String}
     **/
    self.getPlanClassification = function() {
      return self.planClassification;
    }

    /**
     * set Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
     * @param {String} planClassification
     **/
    self.setPlanClassification = function (planClassification) {
      self.planClassification = planClassification;
    }
    
    /**
     * get The date that the Account started using the current plan.
     * @return {String}
     **/
    self.getPlanStartDate = function() {
      return self.planStartDate;
    }

    /**
     * set The date that the Account started using the current plan.
     * @param {String} planStartDate
     **/
    self.setPlanStartDate = function (planStartDate) {
      self.planStartDate = planStartDate;
    }
    
    /**
     * get The date that the current plan will end.
     * @return {String}
     **/
    self.getPlanEndDate = function() {
      return self.planEndDate;
    }

    /**
     * set The date that the current plan will end.
     * @param {String} planEndDate
     **/
    self.setPlanEndDate = function (planEndDate) {
      self.planEndDate = planEndDate;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBillingPeriodStartDate = function() {
      return self.billingPeriodStartDate;
    }

    /**
     * set Reserved: TBD
     * @param {String} billingPeriodStartDate
     **/
    self.setBillingPeriodStartDate = function (billingPeriodStartDate) {
      self.billingPeriodStartDate = billingPeriodStartDate;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBillingPeriodEndDate = function() {
      return self.billingPeriodEndDate;
    }

    /**
     * set Reserved: TBD
     * @param {String} billingPeriodEndDate
     **/
    self.setBillingPeriodEndDate = function (billingPeriodEndDate) {
      self.billingPeriodEndDate = billingPeriodEndDate;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBillingPeriodEnvelopesSent = function() {
      return self.billingPeriodEnvelopesSent;
    }

    /**
     * set Reserved: TBD
     * @param {String} billingPeriodEnvelopesSent
     **/
    self.setBillingPeriodEnvelopesSent = function (billingPeriodEnvelopesSent) {
      self.billingPeriodEnvelopesSent = billingPeriodEnvelopesSent;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBillingPeriodEnvelopesAllowed = function() {
      return self.billingPeriodEnvelopesAllowed;
    }

    /**
     * set Reserved: TBD
     * @param {String} billingPeriodEnvelopesAllowed
     **/
    self.setBillingPeriodEnvelopesAllowed = function (billingPeriodEnvelopesAllowed) {
      self.billingPeriodEnvelopesAllowed = billingPeriodEnvelopesAllowed;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBillingPeriodDaysRemaining = function() {
      return self.billingPeriodDaysRemaining;
    }

    /**
     * set Reserved: TBD
     * @param {String} billingPeriodDaysRemaining
     **/
    self.setBillingPeriodDaysRemaining = function (billingPeriodDaysRemaining) {
      self.billingPeriodDaysRemaining = billingPeriodDaysRemaining;
    }
    
    /**
     * get When set to **true**, specifies that you can upgrade the account through the API.
     * @return {String}
     **/
    self.getCanUpgrade = function() {
      return self.canUpgrade;
    }

    /**
     * set When set to **true**, specifies that you can upgrade the account through the API.
     * @param {String} canUpgrade
     **/
    self.setCanUpgrade = function (canUpgrade) {
      self.canUpgrade = canUpgrade;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getCanCancelRenewal = function() {
      return self.canCancelRenewal;
    }

    /**
     * set Reserved: TBD
     * @param {String} canCancelRenewal
     **/
    self.setCanCancelRenewal = function (canCancelRenewal) {
      self.canCancelRenewal = canCancelRenewal;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEnvelopeSendingBlocked = function() {
      return self.envelopeSendingBlocked;
    }

    /**
     * set 
     * @param {String} envelopeSendingBlocked
     **/
    self.setEnvelopeSendingBlocked = function (envelopeSendingBlocked) {
      self.envelopeSendingBlocked = envelopeSendingBlocked;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getEnvelopeUnitPrice = function() {
      return self.envelopeUnitPrice;
    }

    /**
     * set 
     * @param {String} envelopeUnitPrice
     **/
    self.setEnvelopeUnitPrice = function (envelopeUnitPrice) {
      self.envelopeUnitPrice = envelopeUnitPrice;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSuspensionStatus = function() {
      return self.suspensionStatus;
    }

    /**
     * set 
     * @param {String} suspensionStatus
     **/
    self.setSuspensionStatus = function (suspensionStatus) {
      self.suspensionStatus = suspensionStatus;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSuspensionDate = function() {
      return self.suspensionDate;
    }

    /**
     * set 
     * @param {String} suspensionDate
     **/
    self.setSuspensionDate = function (suspensionDate) {
      self.suspensionDate = suspensionDate;
    }
    
    /**
     * get The name of the current account.
     * @return {String}
     **/
    self.getAccountName = function() {
      return self.accountName;
    }

    /**
     * set The name of the current account.
     * @param {String} accountName
     **/
    self.setAccountName = function (accountName) {
      self.accountName = accountName;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getConnectPermission = function() {
      return self.connectPermission;
    }

    /**
     * set 
     * @param {String} connectPermission
     **/
    self.setConnectPermission = function (connectPermission) {
      self.connectPermission = connectPermission;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDocuSignLandingUrl = function() {
      return self.docuSignLandingUrl;
    }

    /**
     * set 
     * @param {String} docuSignLandingUrl
     **/
    self.setDocuSignLandingUrl = function (docuSignLandingUrl) {
      self.docuSignLandingUrl = docuSignLandingUrl;
    }
    
    /**
     * get The code that identifies the billing plan groups and plans for the new account.
     * @return {String}
     **/
    self.getDistributorCode = function() {
      return self.distributorCode;
    }

    /**
     * set The code that identifies the billing plan groups and plans for the new account.
     * @param {String} distributorCode
     **/
    self.setDistributorCode = function (distributorCode) {
      self.distributorCode = distributorCode;
    }
    
    /**
     * get The GUID associated with the account ID.
     * @return {String}
     **/
    self.getAccountIdGuid = function() {
      return self.accountIdGuid;
    }

    /**
     * set The GUID associated with the account ID.
     * @param {String} accountIdGuid
     **/
    self.setAccountIdGuid = function (accountIdGuid) {
      self.accountIdGuid = accountIdGuid;
    }
    
    /**
     * get Specifies the ISO currency code for the account.
     * @return {String}
     **/
    self.getCurrencyCode = function() {
      return self.currencyCode;
    }

    /**
     * set Specifies the ISO currency code for the account.
     * @param {String} currencyCode
     **/
    self.setCurrencyCode = function (currencyCode) {
      self.currencyCode = currencyCode;
    }
    
    /**
     * get A complex element that contains up to four Question/Answer pairs for forgotten password information for a user.
     * @return {String}
     **/
    self.getForgottenPasswordQuestionsCount = function() {
      return self.forgottenPasswordQuestionsCount;
    }

    /**
     * set A complex element that contains up to four Question/Answer pairs for forgotten password information for a user.
     * @param {String} forgottenPasswordQuestionsCount
     **/
    self.setForgottenPasswordQuestionsCount = function (forgottenPasswordQuestionsCount) {
      self.forgottenPasswordQuestionsCount = forgottenPasswordQuestionsCount;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPaymentMethod = function() {
      return self.paymentMethod;
    }

    /**
     * set 
     * @param {String} paymentMethod
     **/
    self.setPaymentMethod = function (paymentMethod) {
      self.paymentMethod = paymentMethod;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSeatsAllowed = function() {
      return self.seatsAllowed;
    }

    /**
     * set 
     * @param {String} seatsAllowed
     **/
    self.setSeatsAllowed = function (seatsAllowed) {
      self.seatsAllowed = seatsAllowed;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSeatsInUse = function() {
      return self.seatsInUse;
    }

    /**
     * set 
     * @param {String} seatsInUse
     **/
    self.setSeatsInUse = function (seatsInUse) {
      self.seatsInUse = seatsInUse;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCreatedDate = function() {
      return self.createdDate;
    }

    /**
     * set 
     * @param {String} createdDate
     **/
    self.setCreatedDate = function (createdDate) {
      self.createdDate = createdDate;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getIsDowngrade = function() {
      return self.isDowngrade;
    }

    /**
     * set 
     * @param {String} isDowngrade
     **/
    self.setIsDowngrade = function (isDowngrade) {
      self.isDowngrade = isDowngrade;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBillingProfile = function() {
      return self.billingProfile;
    }

    /**
     * set Reserved: TBD
     * @param {String} billingProfile
     **/
    self.setBillingProfile = function (billingProfile) {
      self.billingProfile = billingProfile;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getStatus21CFRPart11 = function() {
      return self.status21CFRPart11;
    }

    /**
     * set 
     * @param {String} status21CFRPart11
     **/
    self.setStatus21CFRPart11 = function (status21CFRPart11) {
      self.status21CFRPart11 = status21CFRPart11;
    }
    
    /**
     * get When set to **true**, the transaction rooms feature exposed through the Workspaces API is enabled.
     * @return {String}
     **/
    self.getAllowTransactionRooms = function() {
      return self.allowTransactionRooms;
    }

    /**
     * set When set to **true**, the transaction rooms feature exposed through the Workspaces API is enabled.
     * @param {String} allowTransactionRooms
     **/
    self.setAllowTransactionRooms = function (allowTransactionRooms) {
      self.allowTransactionRooms = allowTransactionRooms;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AccountInformation = AccountInformation;
  }

  return AccountInformation;
  
  
}));
