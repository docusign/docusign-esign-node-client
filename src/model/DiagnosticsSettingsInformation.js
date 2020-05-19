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
    root.Docusign.DiagnosticsSettingsInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DiagnosticsSettingsInformation model module.
   * @module model/DiagnosticsSettingsInformation
   */

  /**
   * Constructs a new <code>DiagnosticsSettingsInformation</code>.
   * @alias module:model/DiagnosticsSettingsInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DiagnosticsSettingsInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiagnosticsSettingsInformation} obj Optional instance to populate.
   * @return {module:model/DiagnosticsSettingsInformation} The populated <code>DiagnosticsSettingsInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiRequestLogging')) {
        obj['apiRequestLogging'] = ApiClient.convertToType(data['apiRequestLogging'], 'String');
      }
      if (data.hasOwnProperty('apiRequestLogMaxEntries')) {
        obj['apiRequestLogMaxEntries'] = ApiClient.convertToType(data['apiRequestLogMaxEntries'], 'String');
      }
      if (data.hasOwnProperty('apiRequestLogRemainingEntries')) {
        obj['apiRequestLogRemainingEntries'] = ApiClient.convertToType(data['apiRequestLogRemainingEntries'], 'String');
      }
    }
    return obj;
  }

  /**
   *  When set to **true**, enables API request logging for the user. 
   * @member {String} apiRequestLogging
   */
  exports.prototype['apiRequestLogging'] = undefined;
  /**
   * Specifies the maximum number of API requests to log.
   * @member {String} apiRequestLogMaxEntries
   */
  exports.prototype['apiRequestLogMaxEntries'] = undefined;
  /**
   * Indicates the remaining number of API requests that can be logged.
   * @member {String} apiRequestLogRemainingEntries
   */
  exports.prototype['apiRequestLogRemainingEntries'] = undefined;



  return exports;
}));


