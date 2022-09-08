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
    define(['ApiClient', 'model/PropertyMetadata', 'model/RecipientPhoneNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'), require('./RecipientPhoneNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientAdditionalNotification = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata, root.Docusign.RecipientPhoneNumber);
  }
}(this, function(ApiClient, PropertyMetadata, RecipientPhoneNumber) {
  'use strict';


  /**
   * The RecipientAdditionalNotification model module.
   * @module model/RecipientAdditionalNotification
   */

  /**
   * Constructs a new <code>RecipientAdditionalNotification</code>.
   * Describes an additional notification method.
   * @alias module:model/RecipientAdditionalNotification
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientAdditionalNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientAdditionalNotification} obj Optional instance to populate.
   * @return {module:model/RecipientAdditionalNotification} The populated <code>RecipientAdditionalNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = RecipientPhoneNumber.constructFromObject(data['phoneNumber']);
      }
      if (data.hasOwnProperty('secondaryDeliveryMethod')) {
        obj['secondaryDeliveryMethod'] = ApiClient.convertToType(data['secondaryDeliveryMethod'], 'String');
      }
      if (data.hasOwnProperty('secondaryDeliveryMethodMetadata')) {
        obj['secondaryDeliveryMethodMetadata'] = PropertyMetadata.constructFromObject(data['secondaryDeliveryMethodMetadata']);
      }
      if (data.hasOwnProperty('secondaryDeliveryStatus')) {
        obj['secondaryDeliveryStatus'] = ApiClient.convertToType(data['secondaryDeliveryStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * The phone number to receive the additional notifcation.
   * @member {module:model/RecipientPhoneNumber} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * 
   * @member {String} secondaryDeliveryMethod
   */
  exports.prototype['secondaryDeliveryMethod'] = undefined;
  /**
   * Metadata about the delivery method.
   * @member {module:model/PropertyMetadata} secondaryDeliveryMethodMetadata
   */
  exports.prototype['secondaryDeliveryMethodMetadata'] = undefined;
  /**
   * 
   * @member {String} secondaryDeliveryStatus
   */
  exports.prototype['secondaryDeliveryStatus'] = undefined;



  return exports;
}));


