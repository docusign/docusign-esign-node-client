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
    define(['ApiClient', 'model/AddOn', 'model/DowngradePlanUpdateResponse', 'model/FeatureSet', 'model/SeatDiscount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddOn'), require('./DowngradePlanUpdateResponse'), require('./FeatureSet'), require('./SeatDiscount'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountBillingPlan = factory(root.Docusign.ApiClient, root.Docusign.AddOn, root.Docusign.DowngradePlanUpdateResponse, root.Docusign.FeatureSet, root.Docusign.SeatDiscount);
  }
}(this, function(ApiClient, AddOn, DowngradePlanUpdateResponse, FeatureSet, SeatDiscount) {
  'use strict';


  /**
   * The AccountBillingPlan model module.
   * @module model/AccountBillingPlan
   */

  /**
   * Constructs a new <code>AccountBillingPlan</code>.
   * Contains information about an account billing plan.
   * @alias module:model/AccountBillingPlan
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountBillingPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountBillingPlan} obj Optional instance to populate.
   * @return {module:model/AccountBillingPlan} The populated <code>AccountBillingPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addOns')) {
        obj['addOns'] = ApiClient.convertToType(data['addOns'], [AddOn]);
      }
      if (data.hasOwnProperty('appStoreReceiptExpirationDate')) {
        obj['appStoreReceiptExpirationDate'] = ApiClient.convertToType(data['appStoreReceiptExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('appStoreReceiptPurchaseDate')) {
        obj['appStoreReceiptPurchaseDate'] = ApiClient.convertToType(data['appStoreReceiptPurchaseDate'], 'String');
      }
      if (data.hasOwnProperty('canCancelRenewal')) {
        obj['canCancelRenewal'] = ApiClient.convertToType(data['canCancelRenewal'], 'String');
      }
      if (data.hasOwnProperty('canUpgrade')) {
        obj['canUpgrade'] = ApiClient.convertToType(data['canUpgrade'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('downgradePlanInformation')) {
        obj['downgradePlanInformation'] = DowngradePlanUpdateResponse.constructFromObject(data['downgradePlanInformation']);
      }
      if (data.hasOwnProperty('enableSupport')) {
        obj['enableSupport'] = ApiClient.convertToType(data['enableSupport'], 'String');
      }
      if (data.hasOwnProperty('includedSeats')) {
        obj['includedSeats'] = ApiClient.convertToType(data['includedSeats'], 'String');
      }
      if (data.hasOwnProperty('incrementalSeats')) {
        obj['incrementalSeats'] = ApiClient.convertToType(data['incrementalSeats'], 'String');
      }
      if (data.hasOwnProperty('isDowngrade')) {
        obj['isDowngrade'] = ApiClient.convertToType(data['isDowngrade'], 'String');
      }
      if (data.hasOwnProperty('notificationType')) {
        obj['notificationType'] = ApiClient.convertToType(data['notificationType'], 'String');
      }
      if (data.hasOwnProperty('otherDiscountPercent')) {
        obj['otherDiscountPercent'] = ApiClient.convertToType(data['otherDiscountPercent'], 'String');
      }
      if (data.hasOwnProperty('paymentCycle')) {
        obj['paymentCycle'] = ApiClient.convertToType(data['paymentCycle'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('perSeatPrice')) {
        obj['perSeatPrice'] = ApiClient.convertToType(data['perSeatPrice'], 'String');
      }
      if (data.hasOwnProperty('planClassification')) {
        obj['planClassification'] = ApiClient.convertToType(data['planClassification'], 'String');
      }
      if (data.hasOwnProperty('planFeatureSets')) {
        obj['planFeatureSets'] = ApiClient.convertToType(data['planFeatureSets'], [FeatureSet]);
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('planName')) {
        obj['planName'] = ApiClient.convertToType(data['planName'], 'String');
      }
      if (data.hasOwnProperty('planStartDate')) {
        obj['planStartDate'] = ApiClient.convertToType(data['planStartDate'], 'String');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('renewalDate')) {
        obj['renewalDate'] = ApiClient.convertToType(data['renewalDate'], 'String');
      }
      if (data.hasOwnProperty('renewalStatus')) {
        obj['renewalStatus'] = ApiClient.convertToType(data['renewalStatus'], 'String');
      }
      if (data.hasOwnProperty('seatDiscounts')) {
        obj['seatDiscounts'] = ApiClient.convertToType(data['seatDiscounts'], [SeatDiscount]);
      }
      if (data.hasOwnProperty('subscriptionStartDate')) {
        obj['subscriptionStartDate'] = ApiClient.convertToType(data['subscriptionStartDate'], 'String');
      }
      if (data.hasOwnProperty('supportIncidentFee')) {
        obj['supportIncidentFee'] = ApiClient.convertToType(data['supportIncidentFee'], 'String');
      }
      if (data.hasOwnProperty('supportPlanFee')) {
        obj['supportPlanFee'] = ApiClient.convertToType(data['supportPlanFee'], 'String');
      }
      if (data.hasOwnProperty('taxExemptId')) {
        obj['taxExemptId'] = ApiClient.convertToType(data['taxExemptId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved:
   * @member {Array.<module:model/AddOn>} addOns
   */
  exports.prototype['addOns'] = undefined;
  /**
   * 
   * @member {String} appStoreReceiptExpirationDate
   */
  exports.prototype['appStoreReceiptExpirationDate'] = undefined;
  /**
   * 
   * @member {String} appStoreReceiptPurchaseDate
   */
  exports.prototype['appStoreReceiptPurchaseDate'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} canCancelRenewal
   */
  exports.prototype['canCancelRenewal'] = undefined;
  /**
   * When set to **true**, specifies that you can upgrade the account through the API.
   * @member {String} canUpgrade
   */
  exports.prototype['canUpgrade'] = undefined;
  /**
   * Specifies the ISO currency code for the account.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * 
   * @member {module:model/DowngradePlanUpdateResponse} downgradePlanInformation
   */
  exports.prototype['downgradePlanInformation'] = undefined;
  /**
   * When set to **true**, then customer support is provided as part of the account plan.
   * @member {String} enableSupport
   */
  exports.prototype['enableSupport'] = undefined;
  /**
   * The number of seats (users) included.
   * @member {String} includedSeats
   */
  exports.prototype['includedSeats'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} incrementalSeats
   */
  exports.prototype['incrementalSeats'] = undefined;
  /**
   * 
   * @member {String} isDowngrade
   */
  exports.prototype['isDowngrade'] = undefined;
  /**
   * 
   * @member {String} notificationType
   */
  exports.prototype['notificationType'] = undefined;
  /**
   *  Any other percentage discount for the plan. 
   * @member {String} otherDiscountPercent
   */
  exports.prototype['otherDiscountPercent'] = undefined;
  /**
   * 
   * @member {String} paymentCycle
   */
  exports.prototype['paymentCycle'] = undefined;
  /**
   *  The payment method used with the plan. The possible values are: CreditCard, PurchaseOrder, Premium, or Freemium. 
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * 
   * @member {String} perSeatPrice
   */
  exports.prototype['perSeatPrice'] = undefined;
  /**
   * Identifies the type of plan. Examples include Business, Corporate, Enterprise, Free.
   * @member {String} planClassification
   */
  exports.prototype['planClassification'] = undefined;
  /**
   * A complex type that sets the feature sets for the account. It contains the following information (all string content):  * currencyFeatureSetPrices - Contains the currencyCode and currencySymbol for the alternate currency values for envelopeFee, fixedFee, seatFee that are configured for this plan feature set. * envelopeFee - An incremental envelope cost for plans with envelope overages (when isEnabled=true). * featureSetId - A unique ID for the feature set. * fixedFee - A one-time fee associated with the plan (when isEnabled=true). * isActive - Specifies whether the feature set is actively set as part of the plan. * isEnabled - Specifies whether the feature set is actively enabled as part of the plan. * name - The name of the feature set. * seatFee - An incremental seat cost for seat-based plans (when isEnabled=true). 
   * @member {Array.<module:model/FeatureSet>} planFeatureSets
   */
  exports.prototype['planFeatureSets'] = undefined;
  /**
   * 
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * The name of the Billing Plan.
   * @member {String} planName
   */
  exports.prototype['planName'] = undefined;
  /**
   * 
   * @member {String} planStartDate
   */
  exports.prototype['planStartDate'] = undefined;
  /**
   * 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * 
   * @member {String} renewalDate
   */
  exports.prototype['renewalDate'] = undefined;
  /**
   * The renewal status for the account. The acceptable values are:  * auto: The account automatically renews. * queued_for_close: Account will be closed at the billingPeriodEndDate. * queued_for_downgrade: Account will be downgraded at the billingPeriodEndDate.
   * @member {String} renewalStatus
   */
  exports.prototype['renewalStatus'] = undefined;
  /**
   *  A complex type that contains any seat discount information.  Values are: BeginSeatCount, EndSeatCount, and SeatDiscountPercent.  
   * @member {Array.<module:model/SeatDiscount>} seatDiscounts
   */
  exports.prototype['seatDiscounts'] = undefined;
  /**
   * 
   * @member {String} subscriptionStartDate
   */
  exports.prototype['subscriptionStartDate'] = undefined;
  /**
   * The support incident fee charged for each support incident.
   * @member {String} supportIncidentFee
   */
  exports.prototype['supportIncidentFee'] = undefined;
  /**
   * The support plan fee charged for this plan.
   * @member {String} supportPlanFee
   */
  exports.prototype['supportPlanFee'] = undefined;
  /**
   * 
   * @member {String} taxExemptId
   */
  exports.prototype['taxExemptId'] = undefined;



  return exports;
}));


