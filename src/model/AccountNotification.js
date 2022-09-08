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
    root.Docusign.AccountNotification = factory(root.Docusign.ApiClient, root.Docusign.Expirations, root.Docusign.Reminders);
  }
}(this, function(ApiClient, Expirations, Reminders) {
  'use strict';


  /**
   * The AccountNotification model module.
   * @module model/AccountNotification
   */

  /**
   * Constructs a new <code>AccountNotification</code>.
   * A complex element that specifies notifications (expirations and reminders) for the envelope.
   * @alias module:model/AccountNotification
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountNotification} obj Optional instance to populate.
   * @return {module:model/AccountNotification} The populated <code>AccountNotification</code> instance.
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
      if (data.hasOwnProperty('userOverrideEnabled')) {
        obj['userOverrideEnabled'] = ApiClient.convertToType(data['userOverrideEnabled'], 'String');
      }
    }
    return obj;
  }

  /**
   * A complex element that specifies the expiration settings for the envelope.
   * @member {module:model/Expirations} expirations
   */
  exports.prototype['expirations'] = undefined;
  /**
   * A complex element that specifies reminder settings for the envelope.
   * @member {module:model/Reminders} reminders
   */
  exports.prototype['reminders'] = undefined;
  /**
   * 
   * @member {String} userOverrideEnabled
   */
  exports.prototype['userOverrideEnabled'] = undefined;



  return exports;
}));


