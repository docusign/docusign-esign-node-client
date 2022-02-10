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
    root.Docusign.EnvelopeDelayRuleApiModel = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeDelayRuleApiModel model module.
   * @module model/EnvelopeDelayRuleApiModel
   */

  /**
   * Constructs a new <code>EnvelopeDelayRuleApiModel</code>.
   * An envelope delay rule is a rule which determines how the envelope should be delayed either for sending or routing. It can expressed as either a delay in some number of days, hours, minutes and seconds or an exact resumeDate in the future.
   * @alias module:model/EnvelopeDelayRuleApiModel
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeDelayRuleApiModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeDelayRuleApiModel} obj Optional instance to populate.
   * @return {module:model/EnvelopeDelayRuleApiModel} The populated <code>EnvelopeDelayRuleApiModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('delay')) {
        obj['delay'] = ApiClient.convertToType(data['delay'], 'String');
      }
      if (data.hasOwnProperty('resumeDate')) {
        obj['resumeDate'] = ApiClient.convertToType(data['resumeDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * A string timespan duration represented as d.hh:mm:ss where the d component is days, hh is hours measured on a 24-hour clock, mm is minutes and ss is seconds, indicating the expected delay for this envelope rule. The maximum delay is 30 days.
   * @member {String} delay
   */
  exports.prototype['delay'] = undefined;
  /**
   * A string formatted as an ISO 8601 DATETIME with TimeZone specified, indicating the expected resumeDate for this envelope rule. The specified datetime must occur in the future relative to the current UTC time hen the request is made. The maximum resumeDate must not exceed 30 days in the future.
   * @member {String} resumeDate
   */
  exports.prototype['resumeDate'] = undefined;



  return exports;
}));


