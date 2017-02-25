/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientPhoneAuthentication = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientPhoneAuthentication model module.
   * @module model/RecipientPhoneAuthentication
   * @version 3.0.0
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
      if (data.hasOwnProperty('recordVoicePrint')) {
        obj['recordVoicePrint'] = ApiClient.convertToType(data['recordVoicePrint'], 'String');
      }
      if (data.hasOwnProperty('senderProvidedNumbers')) {
        obj['senderProvidedNumbers'] = ApiClient.convertToType(data['senderProvidedNumbers'], ['String']);
      }
      if (data.hasOwnProperty('validateRecipProvidedNumber')) {
        obj['validateRecipProvidedNumber'] = ApiClient.convertToType(data['validateRecipProvidedNumber'], 'String');
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
   * Reserved.
   * @member {String} recordVoicePrint
   */
  exports.prototype['recordVoicePrint'] = undefined;
  /**
   * An Array containing a list of phone numbers the recipient may use for SMS text authentication. 
   * @member {Array.<String>} senderProvidedNumbers
   */
  exports.prototype['senderProvidedNumbers'] = undefined;
  /**
   *  Reserved.
   * @member {String} validateRecipProvidedNumber
   */
  exports.prototype['validateRecipProvidedNumber'] = undefined;



  return exports;
}));


