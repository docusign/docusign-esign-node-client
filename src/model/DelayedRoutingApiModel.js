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
    root.Docusign.DelayedRoutingApiModel = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeDelayRuleApiModel);
  }
}(this, function(ApiClient, EnvelopeDelayRuleApiModel) {
  'use strict';


  /**
   * The DelayedRoutingApiModel model module.
   * @module model/DelayedRoutingApiModel
   */

  /**
   * Constructs a new <code>DelayedRoutingApiModel</code>.
   * @alias module:model/DelayedRoutingApiModel
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DelayedRoutingApiModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DelayedRoutingApiModel} obj Optional instance to populate.
   * @return {module:model/DelayedRoutingApiModel} The populated <code>DelayedRoutingApiModel</code> instance.
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
   * An ISO 8601 formatted datetime string indicating the date and time that the envelope is (or was) scheduled to be sent to the recipients associated with the current workflow step or null if the envelope has not yet begun processing the current workflow step.
   * @member {String} resumeDate
   */
  exports.prototype['resumeDate'] = undefined;
  /**
   * A list of envelope delay rules specified by the user indicating how and when the envelope should be sent in the future for the current workflow step and its associated recipients. Currently only 1 rule may be specified.
   * @member {Array.<module:model/EnvelopeDelayRuleApiModel>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * \"pending\" if the current workflow step has not been reached and the delay has not yet started. \"started\" if the delay is in progress. \"completed\" if the delay has elapsed and the envelope has been sent to the current workflow step's recipients.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


