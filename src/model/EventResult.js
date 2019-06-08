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
    root.Docusign.EventResult = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EventResult model module.
   * @module model/EventResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EventResult</code>.
   * @alias module:model/EventResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EventResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventResult} obj Optional instance to populate.
   * @return {module:model/EventResult} The populated <code>EventResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eventTimestamp')) {
        obj['eventTimestamp'] = ApiClient.convertToType(data['eventTimestamp'], 'String');
      }
      if (data.hasOwnProperty('failureDescription')) {
        obj['failureDescription'] = ApiClient.convertToType(data['failureDescription'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('vendorFailureStatusCode')) {
        obj['vendorFailureStatusCode'] = ApiClient.convertToType(data['vendorFailureStatusCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} eventTimestamp
   */
  exports.prototype['eventTimestamp'] = undefined;
  /**
   * 
   * @member {String} failureDescription
   */
  exports.prototype['failureDescription'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} vendorFailureStatusCode
   */
  exports.prototype['vendorFailureStatusCode'] = undefined;



  return exports;
}));


