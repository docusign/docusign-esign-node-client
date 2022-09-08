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
    define(['ApiClient', 'model/NotificationDefaultSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotificationDefaultSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotificationDefaults = factory(root.Docusign.ApiClient, root.Docusign.NotificationDefaultSettings);
  }
}(this, function(ApiClient, NotificationDefaultSettings) {
  'use strict';


  /**
   * The NotificationDefaults model module.
   * @module model/NotificationDefaults
   */

  /**
   * Constructs a new <code>NotificationDefaults</code>.
   * @alias module:model/NotificationDefaults
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotificationDefaults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationDefaults} obj Optional instance to populate.
   * @return {module:model/NotificationDefaults} The populated <code>NotificationDefaults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiEmailNotifications')) {
        obj['apiEmailNotifications'] = NotificationDefaultSettings.constructFromObject(data['apiEmailNotifications']);
      }
      if (data.hasOwnProperty('emailNotifications')) {
        obj['emailNotifications'] = NotificationDefaultSettings.constructFromObject(data['emailNotifications']);
      }
    }
    return obj;
  }

  /**
   * The default notification settings for envelopes sent by using the console.
   * @member {module:model/NotificationDefaultSettings} apiEmailNotifications
   */
  exports.prototype['apiEmailNotifications'] = undefined;
  /**
   * The default notification settings for envelopes sent by using the API.
   * @member {module:model/NotificationDefaultSettings} emailNotifications
   */
  exports.prototype['emailNotifications'] = undefined;



  return exports;
}));


