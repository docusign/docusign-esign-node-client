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
    define(['ApiClient', 'model/EnvelopeDelayRuleApiModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeDelayRuleApiModel'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ScheduledSendingApiModel = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeDelayRuleApiModel);
  }
}(this, function(ApiClient, EnvelopeDelayRuleApiModel) {
  'use strict';


  /**
   * The ScheduledSendingApiModel model module.
   * @module model/ScheduledSendingApiModel
   */

  /**
   * Constructs a new <code>ScheduledSendingApiModel</code>.
   * @alias module:model/ScheduledSendingApiModel
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ScheduledSendingApiModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledSendingApiModel} obj Optional instance to populate.
   * @return {module:model/ScheduledSendingApiModel} The populated <code>ScheduledSendingApiModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resumeDate')) {
        obj['resumeDate'] = ApiClient.convertToType(data['resumeDate'], 'String');
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [EnvelopeDelayRuleApiModel]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * An ISO 8601 formatted datetime string indicating the date and time that the envelope is (or was) scheduled to be sent or null if the envelope has not yet been sent.
   * @member {String} resumeDate
   */
  exports.prototype['resumeDate'] = undefined;
  /**
   * A list of envelope delay rules specified by the user indicating how and when the envelope should be scheduled for sending in the future. Currently only 1 rule may be specified.
   * @member {Array.<module:model/EnvelopeDelayRuleApiModel>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * \"pending\" if the envelope has not yet been sent and the scheduled sending delay has not iniaited. \"started\" if the scheduled sending delay is in progress. \"completed\" if the scheduled sending delay has elapsed and the envelope has been sent.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


