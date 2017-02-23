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
    define(['ApiClient', 'model/BccEmailAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BccEmailAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EmailSettings = factory(root.Docusign.ApiClient, root.Docusign.BccEmailAddress);
  }
}(this, function(ApiClient, BccEmailAddress) {
  'use strict';


  /**
   * The EmailSettings model module.
   * @module model/EmailSettings
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EmailSettings</code>.
   * @alias module:model/EmailSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EmailSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailSettings} obj Optional instance to populate.
   * @return {module:model/EmailSettings} The populated <code>EmailSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('replyEmailAddressOverride')) {
        obj['replyEmailAddressOverride'] = ApiClient.convertToType(data['replyEmailAddressOverride'], 'String');
      }
      if (data.hasOwnProperty('replyEmailNameOverride')) {
        obj['replyEmailNameOverride'] = ApiClient.convertToType(data['replyEmailNameOverride'], 'String');
      }
      if (data.hasOwnProperty('bccEmailAddresses')) {
        obj['bccEmailAddresses'] = ApiClient.convertToType(data['bccEmailAddresses'], [BccEmailAddress]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} replyEmailAddressOverride
   */
  exports.prototype['replyEmailAddressOverride'] = undefined;
  /**
   * 
   * @member {String} replyEmailNameOverride
   */
  exports.prototype['replyEmailNameOverride'] = undefined;
  /**
   * A list of email addresses that receive a copy of all email communications for an envelope. You can use this for archiving purposes.
   * @member {Array.<module:model/BccEmailAddress>} bccEmailAddresses
   */
  exports.prototype['bccEmailAddresses'] = undefined;



  return exports;
}));


