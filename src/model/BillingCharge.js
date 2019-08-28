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
    define(['ApiClient', 'model/BillingDiscount', 'model/BillingPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingDiscount'), require('./BillingPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingCharge = factory(root.Docusign.ApiClient, root.Docusign.BillingDiscount, root.Docusign.BillingPrice);
  }
}(this, function(ApiClient, BillingDiscount, BillingPrice) {
  'use strict';


  /**
   * The BillingCharge model module.
   * @module model/BillingCharge
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BillingCharge</code>.
   * Contains information about a billing charge.
   * @alias module:model/BillingCharge
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingCharge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingCharge} obj Optional instance to populate.
   * @return {module:model/BillingCharge} The populated <code>BillingCharge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowedQuantity')) {
        obj['allowedQuantity'] = ApiClient.convertToType(data['allowedQuantity'], 'String');
      }
      if (data.hasOwnProperty('blocked')) {
        obj['blocked'] = ApiClient.convertToType(data['blocked'], 'String');
      }
      if (data.hasOwnProperty('chargeName')) {
        obj['chargeName'] = ApiClient.convertToType(data['chargeName'], 'String');
      }
      if (data.hasOwnProperty('chargeType')) {
        obj['chargeType'] = ApiClient.convertToType(data['chargeType'], 'String');
      }
      if (data.hasOwnProperty('chargeUnitOfMeasure')) {
        obj['chargeUnitOfMeasure'] = ApiClient.convertToType(data['chargeUnitOfMeasure'], 'String');
      }
      if (data.hasOwnProperty('discounts')) {
        obj['discounts'] = ApiClient.convertToType(data['discounts'], [BillingDiscount]);
      }
      if (data.hasOwnProperty('firstEffectiveDate')) {
        obj['firstEffectiveDate'] = ApiClient.convertToType(data['firstEffectiveDate'], 'String');
      }
      if (data.hasOwnProperty('includedQuantity')) {
        obj['includedQuantity'] = ApiClient.convertToType(data['includedQuantity'], 'String');
      }
      if (data.hasOwnProperty('incrementalQuantity')) {
        obj['incrementalQuantity'] = ApiClient.convertToType(data['incrementalQuantity'], 'String');
      }
      if (data.hasOwnProperty('lastEffectiveDate')) {
        obj['lastEffectiveDate'] = ApiClient.convertToType(data['lastEffectiveDate'], 'String');
      }
      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], [BillingPrice]);
      }
      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
      if (data.hasOwnProperty('usedQuantity')) {
        obj['usedQuantity'] = ApiClient.convertToType(data['usedQuantity'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} allowedQuantity
   */
  exports.prototype['allowedQuantity'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} blocked
   */
  exports.prototype['blocked'] = undefined;
  /**
   * Provides information on what services the charge item is for.  The following table provides a description of the different chargeName values available at this time.  | chargeName | Description | | --- | --- | | id_check | IDÃÂ Check Charge | | in_person_signing | In Person Signing charge | | envelopes Included | Sent Envelopes for the account | | age_verify | Age verification check | | ofac | OFAC Check | | id_confirm | ID confirmation check | | student_authentication | STAN PIN authentication check | | wet_sign_fax | Pages for returning signed documents by fax | | attachment_fax | Pages for returning attachments by fax | | phone_authentication | Phone authentication charge | | powerforms | PowerForm envelopes sent | | signer_payments | Payment processing charge | | outbound_fax | Send by fax charge | | bulk_recipient_envelopes | Bulk Recipient Envelopes sent | | sms_authentications | SMS authentication charge | | saml_authentications | SAML authentication charge | | express_signer_certificate | DocuSign Express Certificate charge | | personal_signer_certificate | Personal Signer Certificate charge | | safe_certificate | SAFE BioPharma Signer Certificate charge | | seats | Included active seats charge | | open_trust_certificate | OpenTrust Signer Certificate charge |
   * @member {String} chargeName
   */
  exports.prototype['chargeName'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} chargeType
   */
  exports.prototype['chargeType'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} chargeUnitOfMeasure
   */
  exports.prototype['chargeUnitOfMeasure'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BillingDiscount>} discounts
   */
  exports.prototype['discounts'] = undefined;
  /**
   * 
   * @member {String} firstEffectiveDate
   */
  exports.prototype['firstEffectiveDate'] = undefined;
  /**
   * 
   * @member {String} includedQuantity
   */
  exports.prototype['includedQuantity'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} incrementalQuantity
   */
  exports.prototype['incrementalQuantity'] = undefined;
  /**
   * 
   * @member {String} lastEffectiveDate
   */
  exports.prototype['lastEffectiveDate'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BillingPrice>} prices
   */
  exports.prototype['prices'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * 
   * @member {String} usedQuantity
   */
  exports.prototype['usedQuantity'] = undefined;



  return exports;
}));


