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
    define(['ApiClient', 'model/AccountSettingsInformation', 'model/BrandsResponse', 'model/RecipientDomain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountSettingsInformation'), require('./BrandsResponse'), require('./RecipientDomain'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountInformation = factory(root.Docusign.ApiClient, root.Docusign.AccountSettingsInformation, root.Docusign.BrandsResponse, root.Docusign.RecipientDomain);
  }
}(this, function(ApiClient, AccountSettingsInformation, BrandsResponse, RecipientDomain) {
  'use strict';


  /**
   * The AccountInformation model module.
   * @module model/AccountInformation
   */

  /**
   * Constructs a new <code>AccountInformation</code>.
   * Contains account Information.
   * @alias module:model/AccountInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountInformation} obj Optional instance to populate.
   * @return {module:model/AccountInformation} The populated <code>AccountInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountIdGuid')) {
        obj['accountIdGuid'] = ApiClient.convertToType(data['accountIdGuid'], 'String');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('accountSettings')) {
        obj['accountSettings'] = AccountSettingsInformation.constructFromObject(data['accountSettings']);
      }
      if (data.hasOwnProperty('allowTransactionRooms')) {
        obj['allowTransactionRooms'] = ApiClient.convertToType(data['allowTransactionRooms'], 'String');
      }
      if (data.hasOwnProperty('billingPeriodDaysRemaining')) {
        obj['billingPeriodDaysRemaining'] = ApiClient.convertToType(data['billingPeriodDaysRemaining'], 'String');
      }
      if (data.hasOwnProperty('billingPeriodEndDate')) {
        obj['billingPeriodEndDate'] = ApiClient.convertToType(data['billingPeriodEndDate'], 'String');
      }
      if (data.hasOwnProperty('billingPeriodEnvelopesAllowed')) {
        obj['billingPeriodEnvelopesAllowed'] = ApiClient.convertToType(data['billingPeriodEnvelopesAllowed'], 'String');
      }
      if (data.hasOwnProperty('billingPeriodEnvelopesSent')) {
        obj['billingPeriodEnvelopesSent'] = ApiClient.convertToType(data['billingPeriodEnvelopesSent'], 'String');
      }
      if (data.hasOwnProperty('billingPeriodStartDate')) {
        obj['billingPeriodStartDate'] = ApiClient.convertToType(data['billingPeriodStartDate'], 'String');
      }
      if (data.hasOwnProperty('billingProfile')) {
        obj['billingProfile'] = ApiClient.convertToType(data['billingProfile'], 'String');
      }
      if (data.hasOwnProperty('brands')) {
        obj['brands'] = BrandsResponse.constructFromObject(data['brands']);
      }
      if (data.hasOwnProperty('canUpgrade')) {
        obj['canUpgrade'] = ApiClient.convertToType(data['canUpgrade'], 'String');
      }
      if (data.hasOwnProperty('connectPermission')) {
        obj['connectPermission'] = ApiClient.convertToType(data['connectPermission'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('currentPlanId')) {
        obj['currentPlanId'] = ApiClient.convertToType(data['currentPlanId'], 'String');
      }
      if (data.hasOwnProperty('displayApplianceStartUrl')) {
        obj['displayApplianceStartUrl'] = ApiClient.convertToType(data['displayApplianceStartUrl'], 'String');
      }
      if (data.hasOwnProperty('displayApplianceUrl')) {
        obj['displayApplianceUrl'] = ApiClient.convertToType(data['displayApplianceUrl'], 'String');
      }
      if (data.hasOwnProperty('distributorCode')) {
        obj['distributorCode'] = ApiClient.convertToType(data['distributorCode'], 'String');
      }
      if (data.hasOwnProperty('docuSignLandingUrl')) {
        obj['docuSignLandingUrl'] = ApiClient.convertToType(data['docuSignLandingUrl'], 'String');
      }
      if (data.hasOwnProperty('dssValues')) {
        obj['dssValues'] = ApiClient.convertToType(data['dssValues'], {'String': 'String'});
      }
      if (data.hasOwnProperty('envelopeSendingBlocked')) {
        obj['envelopeSendingBlocked'] = ApiClient.convertToType(data['envelopeSendingBlocked'], 'String');
      }
      if (data.hasOwnProperty('envelopeUnitPrice')) {
        obj['envelopeUnitPrice'] = ApiClient.convertToType(data['envelopeUnitPrice'], 'String');
      }
      if (data.hasOwnProperty('externalAccountId')) {
        obj['externalAccountId'] = ApiClient.convertToType(data['externalAccountId'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordQuestionsCount')) {
        obj['forgottenPasswordQuestionsCount'] = ApiClient.convertToType(data['forgottenPasswordQuestionsCount'], 'String');
      }
      if (data.hasOwnProperty('isDowngrade')) {
        obj['isDowngrade'] = ApiClient.convertToType(data['isDowngrade'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('planClassification')) {
        obj['planClassification'] = ApiClient.convertToType(data['planClassification'], 'String');
      }
      if (data.hasOwnProperty('planEndDate')) {
        obj['planEndDate'] = ApiClient.convertToType(data['planEndDate'], 'String');
      }
      if (data.hasOwnProperty('planName')) {
        obj['planName'] = ApiClient.convertToType(data['planName'], 'String');
      }
      if (data.hasOwnProperty('planStartDate')) {
        obj['planStartDate'] = ApiClient.convertToType(data['planStartDate'], 'String');
      }
      if (data.hasOwnProperty('recipientDomains')) {
        obj['recipientDomains'] = ApiClient.convertToType(data['recipientDomains'], [RecipientDomain]);
      }
      if (data.hasOwnProperty('seatsAllowed')) {
        obj['seatsAllowed'] = ApiClient.convertToType(data['seatsAllowed'], 'String');
      }
      if (data.hasOwnProperty('seatsInUse')) {
        obj['seatsInUse'] = ApiClient.convertToType(data['seatsInUse'], 'String');
      }
      if (data.hasOwnProperty('status21CFRPart11')) {
        obj['status21CFRPart11'] = ApiClient.convertToType(data['status21CFRPart11'], 'String');
      }
      if (data.hasOwnProperty('suspensionDate')) {
        obj['suspensionDate'] = ApiClient.convertToType(data['suspensionDate'], 'String');
      }
      if (data.hasOwnProperty('suspensionStatus')) {
        obj['suspensionStatus'] = ApiClient.convertToType(data['suspensionStatus'], 'String');
      }
      if (data.hasOwnProperty('useDisplayAppliance')) {
        obj['useDisplayAppliance'] = ApiClient.convertToType(data['useDisplayAppliance'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The GUID associated with the account ID.
   * @member {String} accountIdGuid
   */
  exports.prototype['accountIdGuid'] = undefined;
  /**
   * The name of the current account.
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * The list of account settings accountsettings that determine the features available for the account. Note that some features are determined by the plan used to create the account and cannot be overridden.  
   * @member {module:model/AccountSettingsInformation} accountSettings
   */
  exports.prototype['accountSettings'] = undefined;
  /**
   * When set to **true**, the transaction rooms feature exposed through the Workspaces API is enabled.
   * @member {String} allowTransactionRooms
   */
  exports.prototype['allowTransactionRooms'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} billingPeriodDaysRemaining
   */
  exports.prototype['billingPeriodDaysRemaining'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} billingPeriodEndDate
   */
  exports.prototype['billingPeriodEndDate'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} billingPeriodEnvelopesAllowed
   */
  exports.prototype['billingPeriodEnvelopesAllowed'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} billingPeriodEnvelopesSent
   */
  exports.prototype['billingPeriodEnvelopesSent'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} billingPeriodStartDate
   */
  exports.prototype['billingPeriodStartDate'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} billingProfile
   */
  exports.prototype['billingProfile'] = undefined;
  /**
   * @member {module:model/BrandsResponse} brands
   */
  exports.prototype['brands'] = undefined;
  /**
   * When set to **true**, specifies that you can upgrade the account through the API.
   * @member {String} canUpgrade
   */
  exports.prototype['canUpgrade'] = undefined;
  /**
   * 
   * @member {String} connectPermission
   */
  exports.prototype['connectPermission'] = undefined;
  /**
   * 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * Specifies the ISO currency code for the account.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * Identifies the plan that was used create this account.
   * @member {String} currentPlanId
   */
  exports.prototype['currentPlanId'] = undefined;
  /**
   * 
   * @member {String} displayApplianceStartUrl
   */
  exports.prototype['displayApplianceStartUrl'] = undefined;
  /**
   * 
   * @member {String} displayApplianceUrl
   */
  exports.prototype['displayApplianceUrl'] = undefined;
  /**
   * The code that identifies the billing plan groups and plans for the new account.
   * @member {String} distributorCode
   */
  exports.prototype['distributorCode'] = undefined;
  /**
   * 
   * @member {String} docuSignLandingUrl
   */
  exports.prototype['docuSignLandingUrl'] = undefined;
  /**
   * 
   * @member {Object.<String, String>} dssValues
   */
  exports.prototype['dssValues'] = undefined;
  /**
   * 
   * @member {String} envelopeSendingBlocked
   */
  exports.prototype['envelopeSendingBlocked'] = undefined;
  /**
   * 
   * @member {String} envelopeUnitPrice
   */
  exports.prototype['envelopeUnitPrice'] = undefined;
  /**
   * 
   * @member {String} externalAccountId
   */
  exports.prototype['externalAccountId'] = undefined;
  /**
   *  A complex element that contains up to four Question/Answer pairs for forgotten password information for a user.
   * @member {String} forgottenPasswordQuestionsCount
   */
  exports.prototype['forgottenPasswordQuestionsCount'] = undefined;
  /**
   * 
   * @member {String} isDowngrade
   */
  exports.prototype['isDowngrade'] = undefined;
  /**
   * 
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
   * @member {String} planClassification
   */
  exports.prototype['planClassification'] = undefined;
  /**
   * The date that the current plan will end.
   * @member {String} planEndDate
   */
  exports.prototype['planEndDate'] = undefined;
  /**
   * The name of the Billing Plan.
   * @member {String} planName
   */
  exports.prototype['planName'] = undefined;
  /**
   * The date that the Account started using the current plan.
   * @member {String} planStartDate
   */
  exports.prototype['planStartDate'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientDomain>} recipientDomains
   */
  exports.prototype['recipientDomains'] = undefined;
  /**
   * 
   * @member {String} seatsAllowed
   */
  exports.prototype['seatsAllowed'] = undefined;
  /**
   * 
   * @member {String} seatsInUse
   */
  exports.prototype['seatsInUse'] = undefined;
  /**
   * 
   * @member {String} status21CFRPart11
   */
  exports.prototype['status21CFRPart11'] = undefined;
  /**
   * 
   * @member {String} suspensionDate
   */
  exports.prototype['suspensionDate'] = undefined;
  /**
   * 
   * @member {String} suspensionStatus
   */
  exports.prototype['suspensionStatus'] = undefined;
  /**
   * 
   * @member {Boolean} useDisplayAppliance
   */
  exports.prototype['useDisplayAppliance'] = undefined;



  return exports;
}));


