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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectDebugLog = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The ConnectDebugLog model module.
   * @module model/ConnectDebugLog
   */

  /**
   * Constructs a new <code>ConnectDebugLog</code>.
   * @alias module:model/ConnectDebugLog
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectDebugLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectDebugLog} obj Optional instance to populate.
   * @return {module:model/ConnectDebugLog} The populated <code>ConnectDebugLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connectConfig')) {
        obj['connectConfig'] = ApiClient.convertToType(data['connectConfig'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('eventDateTime')) {
        obj['eventDateTime'] = ApiClient.convertToType(data['eventDateTime'], 'String');
      }
      if (data.hasOwnProperty('eventDescription')) {
        obj['eventDescription'] = ApiClient.convertToType(data['eventDescription'], 'String');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} connectConfig
   */
  exports.prototype['connectConfig'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} eventDateTime
   */
  exports.prototype['eventDateTime'] = undefined;
  /**
   * 
   * @member {String} eventDescription
   */
  exports.prototype['eventDescription'] = undefined;
  /**
   * 
   * @member {String} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));


