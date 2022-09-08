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
    root.Docusign.RecipientSMSAuthentication = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PropertyMetadata) {
  'use strict';


  /**
   * The RecipientSMSAuthentication model module.
   * @module model/RecipientSMSAuthentication
   */

  /**
   * Constructs a new <code>RecipientSMSAuthentication</code>.
   * Contains the element senderProvidedNumbers which is an Array  of phone numbers the recipient can use for SMS text authentication.
   * @alias module:model/RecipientSMSAuthentication
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientSMSAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientSMSAuthentication} obj Optional instance to populate.
   * @return {module:model/RecipientSMSAuthentication} The populated <code>RecipientSMSAuthentication</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('senderProvidedNumbers')) {
        obj['senderProvidedNumbers'] = ApiClient.convertToType(data['senderProvidedNumbers'], ['String']);
      }
      if (data.hasOwnProperty('senderProvidedNumbersMetadata')) {
        obj['senderProvidedNumbersMetadata'] = PropertyMetadata.constructFromObject(data['senderProvidedNumbersMetadata']);
      }
    }
    return obj;
  }

  /**
   * An Array containing a list of phone numbers the recipient may use for SMS text authentication. 
   * @member {Array.<String>} senderProvidedNumbers
   */
  exports.prototype['senderProvidedNumbers'] = undefined;
  /**
   * Metadata that indicates whether the `senderProvidedNumbers` property can be edited.
   * @member {module:model/PropertyMetadata} senderProvidedNumbersMetadata
   */
  exports.prototype['senderProvidedNumbersMetadata'] = undefined;



  return exports;
}));


