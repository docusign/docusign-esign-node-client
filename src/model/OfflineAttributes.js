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
    root.Docusign.OfflineAttributes = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The OfflineAttributes model module.
   * @module model/OfflineAttributes
   */

  /**
   * Constructs a new <code>OfflineAttributes</code>.
   * Reserved for DocuSign use.
   * @alias module:model/OfflineAttributes
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OfflineAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfflineAttributes} obj Optional instance to populate.
   * @return {module:model/OfflineAttributes} The populated <code>OfflineAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountEsignId')) {
        obj['accountEsignId'] = ApiClient.convertToType(data['accountEsignId'], 'String');
      }
      if (data.hasOwnProperty('deviceModel')) {
        obj['deviceModel'] = ApiClient.convertToType(data['deviceModel'], 'String');
      }
      if (data.hasOwnProperty('deviceName')) {
        obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
      }
      if (data.hasOwnProperty('gpsLatitude')) {
        obj['gpsLatitude'] = ApiClient.convertToType(data['gpsLatitude'], 'String');
      }
      if (data.hasOwnProperty('gpsLongitude')) {
        obj['gpsLongitude'] = ApiClient.convertToType(data['gpsLongitude'], 'String');
      }
      if (data.hasOwnProperty('offlineSigningHash')) {
        obj['offlineSigningHash'] = ApiClient.convertToType(data['offlineSigningHash'], 'String');
      }
    }
    return obj;
  }

  /**
   * A GUID identifying the account associated with the consumer disclosure
   * @member {String} accountEsignId
   */
  exports.prototype['accountEsignId'] = undefined;
  /**
   * A string containing information about the model of the device used for offline signing.
   * @member {String} deviceModel
   */
  exports.prototype['deviceModel'] = undefined;
  /**
   * A string containing information about the type of device used for offline signing.
   * @member {String} deviceName
   */
  exports.prototype['deviceName'] = undefined;
  /**
   * A string containing the latitude of the device location at the time of signing.
   * @member {String} gpsLatitude
   */
  exports.prototype['gpsLatitude'] = undefined;
  /**
   * A string containing the longitude of the device location at the time of signing.
   * @member {String} gpsLongitude
   */
  exports.prototype['gpsLongitude'] = undefined;
  /**
   * 
   * @member {String} offlineSigningHash
   */
  exports.prototype['offlineSigningHash'] = undefined;



  return exports;
}));


