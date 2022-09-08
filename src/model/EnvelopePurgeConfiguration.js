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
    root.Docusign.EnvelopePurgeConfiguration = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopePurgeConfiguration model module.
   * @module model/EnvelopePurgeConfiguration
   */

  /**
   * Constructs a new <code>EnvelopePurgeConfiguration</code>.
   * Contains information about the current envelope purge configuration for an account, which enables account administrators to purge documents from completed and voided envelopes after a set number of days (`retentionDays`). 
   * @alias module:model/EnvelopePurgeConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopePurgeConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopePurgeConfiguration} obj Optional instance to populate.
   * @return {module:model/EnvelopePurgeConfiguration} The populated <code>EnvelopePurgeConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('purgeEnvelopes')) {
        obj['purgeEnvelopes'] = ApiClient.convertToType(data['purgeEnvelopes'], 'String');
      }
      if (data.hasOwnProperty('redactPII')) {
        obj['redactPII'] = ApiClient.convertToType(data['redactPII'], 'String');
      }
      if (data.hasOwnProperty('removeTabsAndEnvelopeAttachments')) {
        obj['removeTabsAndEnvelopeAttachments'] = ApiClient.convertToType(data['removeTabsAndEnvelopeAttachments'], 'String');
      }
      if (data.hasOwnProperty('retentionDays')) {
        obj['retentionDays'] = ApiClient.convertToType(data['retentionDays'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} purgeEnvelopes
   */
  exports.prototype['purgeEnvelopes'] = undefined;
  /**
   * 
   * @member {String} redactPII
   */
  exports.prototype['redactPII'] = undefined;
  /**
   * 
   * @member {String} removeTabsAndEnvelopeAttachments
   */
  exports.prototype['removeTabsAndEnvelopeAttachments'] = undefined;
  /**
   * 
   * @member {String} retentionDays
   */
  exports.prototype['retentionDays'] = undefined;



  return exports;
}));


