/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/ExtendPaymentLineItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExtendPaymentLineItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ExtendPaymentConfiguration = factory(root.Docusign.ApiClient, root.Docusign.ExtendPaymentLineItem);
  }
}(this, function(ApiClient, ExtendPaymentLineItem) {
  'use strict';


  /**
   * The ExtendPaymentConfiguration model module.
   * @module model/ExtendPaymentConfiguration
   */

  /**
   * Constructs a new <code>ExtendPaymentConfiguration</code>.
   * @alias module:model/ExtendPaymentConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExtendPaymentConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendPaymentConfiguration} obj Optional instance to populate.
   * @return {module:model/ExtendPaymentConfiguration} The populated <code>ExtendPaymentConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
      }
      if (data.hasOwnProperty('connectionInstanceId')) {
        obj['connectionInstanceId'] = ApiClient.convertToType(data['connectionInstanceId'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('durationEnd')) {
        obj['durationEnd'] = ApiClient.convertToType(data['durationEnd'], 'String');
      }
      if (data.hasOwnProperty('durationStart')) {
        obj['durationStart'] = ApiClient.convertToType(data['durationStart'], 'String');
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [ExtendPaymentLineItem]);
      }
      if (data.hasOwnProperty('paymentDueDays')) {
        obj['paymentDueDays'] = ApiClient.convertToType(data['paymentDueDays'], 'String');
      }
      if (data.hasOwnProperty('paymentMethods')) {
        obj['paymentMethods'] = ApiClient.convertToType(data['paymentMethods'], ['String']);
      }
      if (data.hasOwnProperty('paymentMode')) {
        obj['paymentMode'] = ApiClient.convertToType(data['paymentMode'], 'String');
      }
      if (data.hasOwnProperty('tabRole')) {
        obj['tabRole'] = ApiClient.convertToType(data['tabRole'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * 
   * @member {String} connectionInstanceId
   */
  exports.prototype['connectionInstanceId'] = undefined;
  /**
   * 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * 
   * @member {String} durationEnd
   */
  exports.prototype['durationEnd'] = undefined;
  /**
   * 
   * @member {String} durationStart
   */
  exports.prototype['durationStart'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ExtendPaymentLineItem>} lineItems
   */
  exports.prototype['lineItems'] = undefined;
  /**
   * 
   * @member {String} paymentDueDays
   */
  exports.prototype['paymentDueDays'] = undefined;
  /**
   * 
   * @member {Array.<String>} paymentMethods
   */
  exports.prototype['paymentMethods'] = undefined;
  /**
   * 
   * @member {String} paymentMode
   */
  exports.prototype['paymentMode'] = undefined;
  /**
   * 
   * @member {String} tabRole
   */
  exports.prototype['tabRole'] = undefined;



  return exports;
}));


