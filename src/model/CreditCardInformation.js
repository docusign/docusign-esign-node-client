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
    define(['ApiClient', 'model/AddressInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CreditCardInformation = factory(root.Docusign.ApiClient, root.Docusign.AddressInformation);
  }
}(this, function(ApiClient, AddressInformation) {
  'use strict';


  /**
   * The CreditCardInformation model module.
   * @module model/CreditCardInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CreditCardInformation</code>.
   * @alias module:model/CreditCardInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CreditCardInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditCardInformation} obj Optional instance to populate.
   * @return {module:model/CreditCardInformation} The populated <code>CreditCardInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressInformation.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('cardNumber')) {
        obj['cardNumber'] = ApiClient.convertToType(data['cardNumber'], 'String');
      }
      if (data.hasOwnProperty('cardType')) {
        obj['cardType'] = ApiClient.convertToType(data['cardType'], 'String');
      }
      if (data.hasOwnProperty('cvNumber')) {
        obj['cvNumber'] = ApiClient.convertToType(data['cvNumber'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('nameOnCard')) {
        obj['nameOnCard'] = ApiClient.convertToType(data['nameOnCard'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AddressInformation} address
   */
  exports.prototype['address'] = undefined;
  /**
   * The number on the credit card.
   * @member {String} cardNumber
   */
  exports.prototype['cardNumber'] = undefined;
  /**
   * The credit card type. Valid values are: visa, mastercard, or amex.
   * @member {String} cardType
   */
  exports.prototype['cardType'] = undefined;
  /**
   * 
   * @member {String} cvNumber
   */
  exports.prototype['cvNumber'] = undefined;
  /**
   * The month that the credit card expires (1-12).
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * The year 4 digit year in which the credit card expires.
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * The exact name printed on the credit card.
   * @member {String} nameOnCard
   */
  exports.prototype['nameOnCard'] = undefined;



  return exports;
}));


