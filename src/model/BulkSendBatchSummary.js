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
    root.Docusign.BulkSendBatchSummary = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendBatchSummary model module.
   * @module model/BulkSendBatchSummary
   */

  /**
   * Constructs a new <code>BulkSendBatchSummary</code>.
   * Summary status of a single batch.
   * @alias module:model/BulkSendBatchSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendBatchSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendBatchSummary} obj Optional instance to populate.
   * @return {module:model/BulkSendBatchSummary} The populated <code>BulkSendBatchSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('batchId')) {
        obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
      }
      if (data.hasOwnProperty('batchName')) {
        obj['batchName'] = ApiClient.convertToType(data['batchName'], 'String');
      }
      if (data.hasOwnProperty('batchSize')) {
        obj['batchSize'] = ApiClient.convertToType(data['batchSize'], 'String');
      }
      if (data.hasOwnProperty('batchUri')) {
        obj['batchUri'] = ApiClient.convertToType(data['batchUri'], 'String');
      }
      if (data.hasOwnProperty('failed')) {
        obj['failed'] = ApiClient.convertToType(data['failed'], 'String');
      }
      if (data.hasOwnProperty('queued')) {
        obj['queued'] = ApiClient.convertToType(data['queued'], 'String');
      }
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'String');
      }
      if (data.hasOwnProperty('submittedDate')) {
        obj['submittedDate'] = ApiClient.convertToType(data['submittedDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} batchId
   */
  exports.prototype['batchId'] = undefined;
  /**
   * 
   * @member {String} batchName
   */
  exports.prototype['batchName'] = undefined;
  /**
   * 
   * @member {String} batchSize
   */
  exports.prototype['batchSize'] = undefined;
  /**
   * 
   * @member {String} batchUri
   */
  exports.prototype['batchUri'] = undefined;
  /**
   * 
   * @member {String} failed
   */
  exports.prototype['failed'] = undefined;
  /**
   * 
   * @member {String} queued
   */
  exports.prototype['queued'] = undefined;
  /**
   * 
   * @member {String} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * 
   * @member {String} submittedDate
   */
  exports.prototype['submittedDate'] = undefined;



  return exports;
}));


