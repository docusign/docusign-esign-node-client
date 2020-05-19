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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ReferralInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ReferralInformation model module.
   * @module model/ReferralInformation
   */

  /**
   * Constructs a new <code>ReferralInformation</code>.
   * A complex type that contains the following information for entering referral and discount information. The following items are included in the referral information (all string content): enableSupport, includedSeats, saleDiscountPercent, saleDiscountAmount, saleDiscountFixedAmount, saleDiscountPeriods, saleDiscountSeatPriceOverride, planStartMonth, referralCode, referrerName, advertisementId, publisherId, shopperId, promoCode, groupMemberId, idType, and industry   ###### Note: saleDiscountPercent, saleDiscountAmount, saleDiscountFixedAmount, saleDiscountPeriods, and saleDiscountSeatPriceOverride are reserved for DoucSign use only.
   * @alias module:model/ReferralInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReferralInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReferralInformation} obj Optional instance to populate.
   * @return {module:model/ReferralInformation} The populated <code>ReferralInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('advertisementId')) {
        obj['advertisementId'] = ApiClient.convertToType(data['advertisementId'], 'String');
      }
      if (data.hasOwnProperty('enableSupport')) {
        obj['enableSupport'] = ApiClient.convertToType(data['enableSupport'], 'String');
      }
      if (data.hasOwnProperty('externalOrgId')) {
        obj['externalOrgId'] = ApiClient.convertToType(data['externalOrgId'], 'String');
      }
      if (data.hasOwnProperty('groupMemberId')) {
        obj['groupMemberId'] = ApiClient.convertToType(data['groupMemberId'], 'String');
      }
      if (data.hasOwnProperty('idType')) {
        obj['idType'] = ApiClient.convertToType(data['idType'], 'String');
      }
      if (data.hasOwnProperty('includedSeats')) {
        obj['includedSeats'] = ApiClient.convertToType(data['includedSeats'], 'String');
      }
      if (data.hasOwnProperty('industry')) {
        obj['industry'] = ApiClient.convertToType(data['industry'], 'String');
      }
      if (data.hasOwnProperty('planStartMonth')) {
        obj['planStartMonth'] = ApiClient.convertToType(data['planStartMonth'], 'String');
      }
      if (data.hasOwnProperty('promoCode')) {
        obj['promoCode'] = ApiClient.convertToType(data['promoCode'], 'String');
      }
      if (data.hasOwnProperty('publisherId')) {
        obj['publisherId'] = ApiClient.convertToType(data['publisherId'], 'String');
      }
      if (data.hasOwnProperty('referralCode')) {
        obj['referralCode'] = ApiClient.convertToType(data['referralCode'], 'String');
      }
      if (data.hasOwnProperty('referrerName')) {
        obj['referrerName'] = ApiClient.convertToType(data['referrerName'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountAmount')) {
        obj['saleDiscountAmount'] = ApiClient.convertToType(data['saleDiscountAmount'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountFixedAmount')) {
        obj['saleDiscountFixedAmount'] = ApiClient.convertToType(data['saleDiscountFixedAmount'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountPercent')) {
        obj['saleDiscountPercent'] = ApiClient.convertToType(data['saleDiscountPercent'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountPeriods')) {
        obj['saleDiscountPeriods'] = ApiClient.convertToType(data['saleDiscountPeriods'], 'String');
      }
      if (data.hasOwnProperty('saleDiscountSeatPriceOverride')) {
        obj['saleDiscountSeatPriceOverride'] = ApiClient.convertToType(data['saleDiscountSeatPriceOverride'], 'String');
      }
      if (data.hasOwnProperty('shopperId')) {
        obj['shopperId'] = ApiClient.convertToType(data['shopperId'], 'String');
      }
    }
    return obj;
  }

  /**
   * A complex type that contains the following information for entering referral and discount information. The following items are included in the referral information (all string content): enableSupport, includedSeats, saleDiscountPercent, saleDiscountAmount, saleDiscountFixedAmount, saleDiscountPeriods, saleDiscountSeatPriceOverride, planStartMonth, referralCode, referrerName, advertisementId, publisherId, shopperId, promoCode, groupMemberId, idType, and industry.  ###### Note: saleDiscountPercent, saleDiscountAmount, saleDiscountFixedAmount, saleDiscountPeriods, and saleDiscountSeatPriceOverride are reserved for DoucSign use only.  
   * @member {String} advertisementId
   */
  exports.prototype['advertisementId'] = undefined;
  /**
   * When set to **true**, then customer support is provided as part of the account plan.
   * @member {String} enableSupport
   */
  exports.prototype['enableSupport'] = undefined;
  /**
   * 
   * @member {String} externalOrgId
   */
  exports.prototype['externalOrgId'] = undefined;
  /**
   * 
   * @member {String} groupMemberId
   */
  exports.prototype['groupMemberId'] = undefined;
  /**
   * 
   * @member {String} idType
   */
  exports.prototype['idType'] = undefined;
  /**
   * The number of seats (users) included.
   * @member {String} includedSeats
   */
  exports.prototype['includedSeats'] = undefined;
  /**
   * 
   * @member {String} industry
   */
  exports.prototype['industry'] = undefined;
  /**
   * 
   * @member {String} planStartMonth
   */
  exports.prototype['planStartMonth'] = undefined;
  /**
   * 
   * @member {String} promoCode
   */
  exports.prototype['promoCode'] = undefined;
  /**
   * 
   * @member {String} publisherId
   */
  exports.prototype['publisherId'] = undefined;
  /**
   * 
   * @member {String} referralCode
   */
  exports.prototype['referralCode'] = undefined;
  /**
   * 
   * @member {String} referrerName
   */
  exports.prototype['referrerName'] = undefined;
  /**
   * Reserved for DocuSign use only.
   * @member {String} saleDiscountAmount
   */
  exports.prototype['saleDiscountAmount'] = undefined;
  /**
   * Reserved for DocuSign use only.
   * @member {String} saleDiscountFixedAmount
   */
  exports.prototype['saleDiscountFixedAmount'] = undefined;
  /**
   * Reserved for DocuSign use only.
   * @member {String} saleDiscountPercent
   */
  exports.prototype['saleDiscountPercent'] = undefined;
  /**
   * Reserved for DocuSign use only.
   * @member {String} saleDiscountPeriods
   */
  exports.prototype['saleDiscountPeriods'] = undefined;
  /**
   * Reserved for DocuSign use only.
   * @member {String} saleDiscountSeatPriceOverride
   */
  exports.prototype['saleDiscountSeatPriceOverride'] = undefined;
  /**
   * 
   * @member {String} shopperId
   */
  exports.prototype['shopperId'] = undefined;



  return exports;
}));


