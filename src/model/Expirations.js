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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Expirations = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Expirations model module.
   * @module model/Expirations
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Expirations</code>.
   * A complex element that specifies the expiration settings for the envelope.
   * @alias module:model/Expirations
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Expirations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Expirations} obj Optional instance to populate.
   * @return {module:model/Expirations} The populated <code>Expirations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expireAfter')) {
        obj['expireAfter'] = ApiClient.convertToType(data['expireAfter'], 'String');
      }
      if (data.hasOwnProperty('expireEnabled')) {
        obj['expireEnabled'] = ApiClient.convertToType(data['expireEnabled'], 'String');
      }
      if (data.hasOwnProperty('expireWarn')) {
        obj['expireWarn'] = ApiClient.convertToType(data['expireWarn'], 'String');
      }
    }
    return obj;
  }

  /**
   * An integer that sets the number of days the envelope is active.
   * @member {String} expireAfter
   */
  exports.prototype['expireAfter'] = undefined;
  /**
   * When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
   * @member {String} expireEnabled
   */
  exports.prototype['expireEnabled'] = undefined;
  /**
   * An integer that sets the number of days before envelope expiration that an expiration warning email is sent to the recipient. If set to 0 (zero), no warning email is sent.
   * @member {String} expireWarn
   */
  exports.prototype['expireWarn'] = undefined;



  return exports;
}));


