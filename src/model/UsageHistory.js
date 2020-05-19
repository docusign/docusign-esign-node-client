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
    root.Docusign.UsageHistory = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The UsageHistory model module.
   * @module model/UsageHistory
   */

  /**
   * Constructs a new <code>UsageHistory</code>.
   * A complex element consisting of:   * lastSentDateTime - the date and time the user last sent an envelope.  * lastSignedDateTime - the date and time the user last signed an envelope. * sentCount - the number of envelopes the user has sent. * signedCount - the number of envelopes the user has signed.
   * @alias module:model/UsageHistory
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UsageHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsageHistory} obj Optional instance to populate.
   * @return {module:model/UsageHistory} The populated <code>UsageHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastSentDateTime')) {
        obj['lastSentDateTime'] = ApiClient.convertToType(data['lastSentDateTime'], 'String');
      }
      if (data.hasOwnProperty('lastSignedDateTime')) {
        obj['lastSignedDateTime'] = ApiClient.convertToType(data['lastSignedDateTime'], 'String');
      }
      if (data.hasOwnProperty('sentCount')) {
        obj['sentCount'] = ApiClient.convertToType(data['sentCount'], 'String');
      }
      if (data.hasOwnProperty('signedCount')) {
        obj['signedCount'] = ApiClient.convertToType(data['signedCount'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date and time the user last sent an envelope. 
   * @member {String} lastSentDateTime
   */
  exports.prototype['lastSentDateTime'] = undefined;
  /**
   * The date and time the user last signed an envelope.
   * @member {String} lastSignedDateTime
   */
  exports.prototype['lastSignedDateTime'] = undefined;
  /**
   * The number of envelopes the user has sent. 
   * @member {String} sentCount
   */
  exports.prototype['sentCount'] = undefined;
  /**
   * The number of envelopes the user has signed. 
   * @member {String} signedCount
   */
  exports.prototype['signedCount'] = undefined;



  return exports;
}));


