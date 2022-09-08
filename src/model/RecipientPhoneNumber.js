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
    define(['ApiClient', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientPhoneNumber = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PropertyMetadata) {
  'use strict';


  /**
   * The RecipientPhoneNumber model module.
   * @module model/RecipientPhoneNumber
   */

  /**
   * Constructs a new <code>RecipientPhoneNumber</code>.
   * Describes the recipient phone number.
   * @alias module:model/RecipientPhoneNumber
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientPhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientPhoneNumber} obj Optional instance to populate.
   * @return {module:model/RecipientPhoneNumber} The populated <code>RecipientPhoneNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('countryCodeMetadata')) {
        obj['countryCodeMetadata'] = PropertyMetadata.constructFromObject(data['countryCodeMetadata']);
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('numberMetadata')) {
        obj['numberMetadata'] = PropertyMetadata.constructFromObject(data['numberMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * Metadata that indicates if the `countryCode` property is editable.
   * @member {module:model/PropertyMetadata} countryCodeMetadata
   */
  exports.prototype['countryCodeMetadata'] = undefined;
  /**
   * 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Metadata that indicates if the `number` property is editable.
   * @member {module:model/PropertyMetadata} numberMetadata
   */
  exports.prototype['numberMetadata'] = undefined;



  return exports;
}));


