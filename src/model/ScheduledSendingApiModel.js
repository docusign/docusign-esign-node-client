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

      if (data.hasOwnProperty('ResumeDate')) {
        obj['ResumeDate'] = ApiClient.convertToType(data['ResumeDate'], 'String');
      }
      if (data.hasOwnProperty('Rules')) {
        obj['Rules'] = ApiClient.convertToType(data['Rules'], [EnvelopeDelayRuleApiModel]);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} ResumeDate
   */
  exports.prototype['ResumeDate'] = undefined;
  /**
   * 
   * @member {Array.<module:model/EnvelopeDelayRuleApiModel>} Rules
   */
  exports.prototype['Rules'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;



  return exports;
}));


