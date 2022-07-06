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
    define(['ApiClient', 'model/EnvelopePublishTransactionErrorRollup', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopePublishTransactionErrorRollup'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopePublishTransaction = factory(root.Docusign.ApiClient, root.Docusign.EnvelopePublishTransactionErrorRollup, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, EnvelopePublishTransactionErrorRollup, UserInfo) {
  'use strict';


  /**
   * The EnvelopePublishTransaction model module.
   * @module model/EnvelopePublishTransaction
   */

  /**
   * Constructs a new <code>EnvelopePublishTransaction</code>.
   * @alias module:model/EnvelopePublishTransaction
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopePublishTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopePublishTransaction} obj Optional instance to populate.
   * @return {module:model/EnvelopePublishTransaction} The populated <code>EnvelopePublishTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applyConnectSettings')) {
        obj['applyConnectSettings'] = ApiClient.convertToType(data['applyConnectSettings'], 'String');
      }
      if (data.hasOwnProperty('envelopeCount')) {
        obj['envelopeCount'] = ApiClient.convertToType(data['envelopeCount'], 'String');
      }
      if (data.hasOwnProperty('envelopeLevelErrorRollups')) {
        obj['envelopeLevelErrorRollups'] = ApiClient.convertToType(data['envelopeLevelErrorRollups'], [EnvelopePublishTransactionErrorRollup]);
      }
      if (data.hasOwnProperty('envelopePublishTransactionId')) {
        obj['envelopePublishTransactionId'] = ApiClient.convertToType(data['envelopePublishTransactionId'], 'String');
      }
      if (data.hasOwnProperty('errorCount')) {
        obj['errorCount'] = ApiClient.convertToType(data['errorCount'], 'String');
      }
      if (data.hasOwnProperty('fileLevelErrors')) {
        obj['fileLevelErrors'] = ApiClient.convertToType(data['fileLevelErrors'], ['String']);
      }
      if (data.hasOwnProperty('noActionRequiredEnvelopeCount')) {
        obj['noActionRequiredEnvelopeCount'] = ApiClient.convertToType(data['noActionRequiredEnvelopeCount'], 'String');
      }
      if (data.hasOwnProperty('processedEnvelopeCount')) {
        obj['processedEnvelopeCount'] = ApiClient.convertToType(data['processedEnvelopeCount'], 'String');
      }
      if (data.hasOwnProperty('processingStatus')) {
        obj['processingStatus'] = ApiClient.convertToType(data['processingStatus'], 'String');
      }
      if (data.hasOwnProperty('resultsUri')) {
        obj['resultsUri'] = ApiClient.convertToType(data['resultsUri'], 'String');
      }
      if (data.hasOwnProperty('submissionDate')) {
        obj['submissionDate'] = ApiClient.convertToType(data['submissionDate'], 'String');
      }
      if (data.hasOwnProperty('submittedByUserInfo')) {
        obj['submittedByUserInfo'] = UserInfo.constructFromObject(data['submittedByUserInfo']);
      }
      if (data.hasOwnProperty('submittedForPublishingEnvelopeCount')) {
        obj['submittedForPublishingEnvelopeCount'] = ApiClient.convertToType(data['submittedForPublishingEnvelopeCount'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} applyConnectSettings
   */
  exports.prototype['applyConnectSettings'] = undefined;
  /**
   * 
   * @member {String} envelopeCount
   */
  exports.prototype['envelopeCount'] = undefined;
  /**
   * 
   * @member {Array.<module:model/EnvelopePublishTransactionErrorRollup>} envelopeLevelErrorRollups
   */
  exports.prototype['envelopeLevelErrorRollups'] = undefined;
  /**
   * 
   * @member {String} envelopePublishTransactionId
   */
  exports.prototype['envelopePublishTransactionId'] = undefined;
  /**
   * 
   * @member {String} errorCount
   */
  exports.prototype['errorCount'] = undefined;
  /**
   * 
   * @member {Array.<String>} fileLevelErrors
   */
  exports.prototype['fileLevelErrors'] = undefined;
  /**
   * 
   * @member {String} noActionRequiredEnvelopeCount
   */
  exports.prototype['noActionRequiredEnvelopeCount'] = undefined;
  /**
   * 
   * @member {String} processedEnvelopeCount
   */
  exports.prototype['processedEnvelopeCount'] = undefined;
  /**
   * 
   * @member {String} processingStatus
   */
  exports.prototype['processingStatus'] = undefined;
  /**
   * 
   * @member {String} resultsUri
   */
  exports.prototype['resultsUri'] = undefined;
  /**
   * 
   * @member {String} submissionDate
   */
  exports.prototype['submissionDate'] = undefined;
  /**
   * @member {module:model/UserInfo} submittedByUserInfo
   */
  exports.prototype['submittedByUserInfo'] = undefined;
  /**
   * 
   * @member {String} submittedForPublishingEnvelopeCount
   */
  exports.prototype['submittedForPublishingEnvelopeCount'] = undefined;



  return exports;
}));


