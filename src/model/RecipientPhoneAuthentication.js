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
    root.Docusign.RecipientPhoneAuthentication = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PropertyMetadata) {
  'use strict';


  /**
   * The RecipientPhoneAuthentication model module.
   * @module model/RecipientPhoneAuthentication
   */

  /**
   * Constructs a new <code>RecipientPhoneAuthentication</code>.
   * A complex type that Contains the elements:  * recipMayProvideNumber - Boolean. When set to **true**, the recipient can use whatever phone number they choose. * senderProvidedNumbers - ArrayOfString.  A list of phone numbers the recipient can use. * recordVoicePrint - Reserved. * validateRecipProvidedNumber - Reserved.
   * @alias module:model/RecipientPhoneAuthentication
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientPhoneAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientPhoneAuthentication} obj Optional instance to populate.
   * @return {module:model/RecipientPhoneAuthentication} The populated <code>RecipientPhoneAuthentication</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('recipMayProvideNumber')) {
        obj['recipMayProvideNumber'] = ApiClient.convertToType(data['recipMayProvideNumber'], 'String');
      }
      if (data.hasOwnProperty('recipMayProvideNumberMetadata')) {
        obj['recipMayProvideNumberMetadata'] = PropertyMetadata.constructFromObject(data['recipMayProvideNumberMetadata']);
      }
      if (data.hasOwnProperty('recordVoicePrint')) {
        obj['recordVoicePrint'] = ApiClient.convertToType(data['recordVoicePrint'], 'String');
      }
      if (data.hasOwnProperty('recordVoicePrintMetadata')) {
        obj['recordVoicePrintMetadata'] = PropertyMetadata.constructFromObject(data['recordVoicePrintMetadata']);
      }
      if (data.hasOwnProperty('senderProvidedNumbers')) {
        obj['senderProvidedNumbers'] = ApiClient.convertToType(data['senderProvidedNumbers'], ['String']);
      }
      if (data.hasOwnProperty('senderProvidedNumbersMetadata')) {
        obj['senderProvidedNumbersMetadata'] = PropertyMetadata.constructFromObject(data['senderProvidedNumbersMetadata']);
      }
      if (data.hasOwnProperty('validateRecipProvidedNumber')) {
        obj['validateRecipProvidedNumber'] = ApiClient.convertToType(data['validateRecipProvidedNumber'], 'String');
      }
      if (data.hasOwnProperty('validateRecipProvidedNumberMetadata')) {
        obj['validateRecipProvidedNumberMetadata'] = PropertyMetadata.constructFromObject(data['validateRecipProvidedNumberMetadata']);
      }
    }
    return obj;
  }

  /**
   * Boolean. When set to **true**, the recipient can supply a phone number their choice.
   * @member {String} recipMayProvideNumber
   */
  exports.prototype['recipMayProvideNumber'] = undefined;
  /**
   * Metadata that indicates whether the `recipMayProvideNumber` property can be edited.
   * @member {module:model/PropertyMetadata} recipMayProvideNumberMetadata
   */
  exports.prototype['recipMayProvideNumberMetadata'] = undefined;
  /**
   * Reserved.
   * @member {String} recordVoicePrint
   */
  exports.prototype['recordVoicePrint'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/PropertyMetadata} recordVoicePrintMetadata
   */
  exports.prototype['recordVoicePrintMetadata'] = undefined;
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
  /**
   *  Reserved.
   * @member {String} validateRecipProvidedNumber
   */
  exports.prototype['validateRecipProvidedNumber'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/PropertyMetadata} validateRecipProvidedNumberMetadata
   */
  exports.prototype['validateRecipProvidedNumberMetadata'] = undefined;



  return exports;
}));


