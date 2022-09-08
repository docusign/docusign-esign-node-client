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
    root.Docusign.RecipientIdentityPhoneNumber = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PropertyMetadata) {
  'use strict';


  /**
   * The RecipientIdentityPhoneNumber model module.
   * @module model/RecipientIdentityPhoneNumber
   */

  /**
   * Constructs a new <code>RecipientIdentityPhoneNumber</code>.
   * @alias module:model/RecipientIdentityPhoneNumber
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientIdentityPhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientIdentityPhoneNumber} obj Optional instance to populate.
   * @return {module:model/RecipientIdentityPhoneNumber} The populated <code>RecipientIdentityPhoneNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('countryCodeLock')) {
        obj['countryCodeLock'] = ApiClient.convertToType(data['countryCodeLock'], 'String');
      }
      if (data.hasOwnProperty('countryCodeMetadata')) {
        obj['countryCodeMetadata'] = PropertyMetadata.constructFromObject(data['countryCodeMetadata']);
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
      }
      if (data.hasOwnProperty('extensionMetadata')) {
        obj['extensionMetadata'] = PropertyMetadata.constructFromObject(data['extensionMetadata']);
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
   * 
   * @member {String} countryCodeLock
   */
  exports.prototype['countryCodeLock'] = undefined;
  /**
   * Metadata that indicates if the `countryCode` property is editable.
   * @member {module:model/PropertyMetadata} countryCodeMetadata
   */
  exports.prototype['countryCodeMetadata'] = undefined;
  /**
   * 
   * @member {String} extension
   */
  exports.prototype['extension'] = undefined;
  /**
   * Metadata that indicates if the `extension` property is editable.
   * @member {module:model/PropertyMetadata} extensionMetadata
   */
  exports.prototype['extensionMetadata'] = undefined;
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


