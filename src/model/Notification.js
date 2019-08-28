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
    define(['ApiClient', 'model/Expirations', 'model/Reminders'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Expirations'), require('./Reminders'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Notification = factory(root.Docusign.ApiClient, root.Docusign.Expirations, root.Docusign.Reminders);
  }
}(this, function(ApiClient, Expirations, Reminders) {
  'use strict';


  /**
   * The Notification model module.
   * @module model/Notification
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Notification</code>.
   * A complex element that specifies the notification options for the envelope. It consists of:  * useAccountDefaults - When set to **true**, the account default notification settings are used for the envelope.  * reminders - A complex element that specifies reminder settings for the envelope. It consists of:      * reminderEnabled - When set to **true**, a reminder message is sent to the recipient.    * reminderDelay - An interger that sets the number of days after the recipient receives the envelope that reminder emails are sent to the recipient.     * reminderFrequency - An interger that sets the interval, in days, between reminder emails.   * expirations - A complex element that specifies the expiration settings for the envelope. It consists of:     * expireEnabled - When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.     * expireAfter - An integer that sets the number of days the envelope is active.    * expireWarn - An integer that sets the number of days before envelope expiration that an expiration warning email is sent to the recipient. If set to 0 (zero), no warning email is sent.
   * @alias module:model/Notification
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notification} obj Optional instance to populate.
   * @return {module:model/Notification} The populated <code>Notification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirations')) {
        obj['expirations'] = Expirations.constructFromObject(data['expirations']);
      }
      if (data.hasOwnProperty('reminders')) {
        obj['reminders'] = Reminders.constructFromObject(data['reminders']);
      }
      if (data.hasOwnProperty('useAccountDefaults')) {
        obj['useAccountDefaults'] = ApiClient.convertToType(data['useAccountDefaults'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Expirations} expirations
   */
  exports.prototype['expirations'] = undefined;
  /**
   * @member {module:model/Reminders} reminders
   */
  exports.prototype['reminders'] = undefined;
  /**
   * When set to **true**, the account default notification settings are used for the envelope.
   * @member {String} useAccountDefaults
   */
  exports.prototype['useAccountDefaults'] = undefined;



  return exports;
}));


