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
    root.Docusign.PaymentProcessorInformation = factory(root.Docusign.ApiClient, root.Docusign.AddressInformation);
  }
}(this, function(ApiClient, AddressInformation) {
  'use strict';


  /**
   * The PaymentProcessorInformation model module.
   * @module model/PaymentProcessorInformation
   */

  /**
   * Constructs a new <code>PaymentProcessorInformation</code>.
   * @alias module:model/PaymentProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProcessorInformation} obj Optional instance to populate.
   * @return {module:model/PaymentProcessorInformation} The populated <code>PaymentProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressInformation.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('billingAgreementId')) {
        obj['billingAgreementId'] = ApiClient.convertToType(data['billingAgreementId'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }

  /**
   * The mailing address associated with the payment processor.
   * @member {module:model/AddressInformation} address
   */
  exports.prototype['address'] = undefined;
  /**
   * 
   * @member {String} billingAgreementId
   */
  exports.prototype['billingAgreementId'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;



  return exports;
}));


