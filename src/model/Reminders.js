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
    root.Docusign.Reminders = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Reminders model module.
   * @module model/Reminders
   */

  /**
   * Constructs a new <code>Reminders</code>.
   * A complex element that specifies reminder settings for the envelope
   * @alias module:model/Reminders
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Reminders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reminders} obj Optional instance to populate.
   * @return {module:model/Reminders} The populated <code>Reminders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reminderDelay')) {
        obj['reminderDelay'] = ApiClient.convertToType(data['reminderDelay'], 'String');
      }
      if (data.hasOwnProperty('reminderEnabled')) {
        obj['reminderEnabled'] = ApiClient.convertToType(data['reminderEnabled'], 'String');
      }
      if (data.hasOwnProperty('reminderFrequency')) {
        obj['reminderFrequency'] = ApiClient.convertToType(data['reminderFrequency'], 'String');
      }
    }
    return obj;
  }

  /**
   * An interger that sets the number of days after the recipient receives the envelope that reminder emails are sent to the recipient.
   * @member {String} reminderDelay
   */
  exports.prototype['reminderDelay'] = undefined;
  /**
   * When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
   * @member {String} reminderEnabled
   */
  exports.prototype['reminderEnabled'] = undefined;
  /**
   * An interger that sets the interval, in days, between reminder emails.
   * @member {String} reminderFrequency
   */
  exports.prototype['reminderFrequency'] = undefined;



  return exports;
}));


