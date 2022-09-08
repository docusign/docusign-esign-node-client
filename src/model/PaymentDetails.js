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
    define(['ApiClient', 'model/Money', 'model/PaymentLineItem', 'model/PaymentSignerValues', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Money'), require('./PaymentLineItem'), require('./PaymentSignerValues'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PaymentDetails = factory(root.Docusign.ApiClient, root.Docusign.Money, root.Docusign.PaymentLineItem, root.Docusign.PaymentSignerValues, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, Money, PaymentLineItem, PaymentSignerValues, PropertyMetadata) {
  'use strict';


  /**
   * The PaymentDetails model module.
   * @module model/PaymentDetails
   */

  /**
   * Constructs a new <code>PaymentDetails</code>.
   * When a formula tab has a `paymentDetails` property, the formula tab is a payment item. See [Requesting Payments Along with Signatures][paymentguide] in the DocuSign Support Center to learn more about payments.  [paymentguide]:     https://support.docusign.com/en/guides/requesting-payments-along-with-signatures 
   * @alias module:model/PaymentDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentDetails} obj Optional instance to populate.
   * @return {module:model/PaymentDetails} The populated <code>PaymentDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowedPaymentMethods')) {
        obj['allowedPaymentMethods'] = ApiClient.convertToType(data['allowedPaymentMethods'], ['String']);
      }
      if (data.hasOwnProperty('chargeId')) {
        obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('currencyCodeMetadata')) {
        obj['currencyCodeMetadata'] = PropertyMetadata.constructFromObject(data['currencyCodeMetadata']);
      }
      if (data.hasOwnProperty('customerId')) {
        obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
      }
      if (data.hasOwnProperty('customMetadata')) {
        obj['customMetadata'] = ApiClient.convertToType(data['customMetadata'], 'String');
      }
      if (data.hasOwnProperty('customMetadataRequired')) {
        obj['customMetadataRequired'] = ApiClient.convertToType(data['customMetadataRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('gatewayAccountId')) {
        obj['gatewayAccountId'] = ApiClient.convertToType(data['gatewayAccountId'], 'String');
      }
      if (data.hasOwnProperty('gatewayAccountIdMetadata')) {
        obj['gatewayAccountIdMetadata'] = PropertyMetadata.constructFromObject(data['gatewayAccountIdMetadata']);
      }
      if (data.hasOwnProperty('gatewayDisplayName')) {
        obj['gatewayDisplayName'] = ApiClient.convertToType(data['gatewayDisplayName'], 'String');
      }
      if (data.hasOwnProperty('gatewayName')) {
        obj['gatewayName'] = ApiClient.convertToType(data['gatewayName'], 'String');
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [PaymentLineItem]);
      }
      if (data.hasOwnProperty('paymentOption')) {
        obj['paymentOption'] = ApiClient.convertToType(data['paymentOption'], 'String');
      }
      if (data.hasOwnProperty('paymentSourceId')) {
        obj['paymentSourceId'] = ApiClient.convertToType(data['paymentSourceId'], 'String');
      }
      if (data.hasOwnProperty('signerValues')) {
        obj['signerValues'] = PaymentSignerValues.constructFromObject(data['signerValues']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subGatewayName')) {
        obj['subGatewayName'] = ApiClient.convertToType(data['subGatewayName'], 'String');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = Money.constructFromObject(data['total']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} allowedPaymentMethods
   */
  exports.prototype['allowedPaymentMethods'] = undefined;
  /**
   * 
   * @member {String} chargeId
   */
  exports.prototype['chargeId'] = undefined;
  /**
   * 
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * Metadata that indicates whether the `currencyCode` property is editable.
   * @member {module:model/PropertyMetadata} currencyCodeMetadata
   */
  exports.prototype['currencyCodeMetadata'] = undefined;
  /**
   * 
   * @member {String} customerId
   */
  exports.prototype['customerId'] = undefined;
  /**
   * 
   * @member {String} customMetadata
   */
  exports.prototype['customMetadata'] = undefined;
  /**
   * 
   * @member {Boolean} customMetadataRequired
   */
  exports.prototype['customMetadataRequired'] = undefined;
  /**
   * 
   * @member {String} gatewayAccountId
   */
  exports.prototype['gatewayAccountId'] = undefined;
  /**
   * Metadata that indicates whether the `gatewayAccountId` property is editable.
   * @member {module:model/PropertyMetadata} gatewayAccountIdMetadata
   */
  exports.prototype['gatewayAccountIdMetadata'] = undefined;
  /**
   * 
   * @member {String} gatewayDisplayName
   */
  exports.prototype['gatewayDisplayName'] = undefined;
  /**
   * 
   * @member {String} gatewayName
   */
  exports.prototype['gatewayName'] = undefined;
  /**
   * 
   * @member {Array.<module:model/PaymentLineItem>} lineItems
   */
  exports.prototype['lineItems'] = undefined;
  /**
   * 
   * @member {String} paymentOption
   */
  exports.prototype['paymentOption'] = undefined;
  /**
   * 
   * @member {String} paymentSourceId
   */
  exports.prototype['paymentSourceId'] = undefined;
  /**
   * 
   * @member {module:model/PaymentSignerValues} signerValues
   */
  exports.prototype['signerValues'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} subGatewayName
   */
  exports.prototype['subGatewayName'] = undefined;
  /**
   * This read-only property is a currency-formatted string that represents the total of all the line items. The total is available only after the document is completed, which is when all recipients have paid and have completed all required fields. 
   * @member {module:model/Money} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


