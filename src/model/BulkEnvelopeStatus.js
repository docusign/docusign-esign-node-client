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
    define(['ApiClient', 'model/BulkEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkEnvelopeStatus = factory(root.Docusign.ApiClient, root.Docusign.BulkEnvelope);
  }
}(this, function(ApiClient, BulkEnvelope) {
  'use strict';


  /**
   * The BulkEnvelopeStatus model module.
   * @module model/BulkEnvelopeStatus
   */

  /**
   * Constructs a new <code>BulkEnvelopeStatus</code>.
   * @alias module:model/BulkEnvelopeStatus
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkEnvelopeStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkEnvelopeStatus} obj Optional instance to populate.
   * @return {module:model/BulkEnvelopeStatus} The populated <code>BulkEnvelopeStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('batchId')) {
        obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
      }
      if (data.hasOwnProperty('batchSize')) {
        obj['batchSize'] = ApiClient.convertToType(data['batchSize'], 'String');
      }
      if (data.hasOwnProperty('bulkEnvelopes')) {
        obj['bulkEnvelopes'] = ApiClient.convertToType(data['bulkEnvelopes'], [BulkEnvelope]);
      }
      if (data.hasOwnProperty('bulkEnvelopesBatchUri')) {
        obj['bulkEnvelopesBatchUri'] = ApiClient.convertToType(data['bulkEnvelopesBatchUri'], 'String');
      }
      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], 'String');
      }
      if (data.hasOwnProperty('failed')) {
        obj['failed'] = ApiClient.convertToType(data['failed'], 'String');
      }
      if (data.hasOwnProperty('nextUri')) {
        obj['nextUri'] = ApiClient.convertToType(data['nextUri'], 'String');
      }
      if (data.hasOwnProperty('previousUri')) {
        obj['previousUri'] = ApiClient.convertToType(data['previousUri'], 'String');
      }
      if (data.hasOwnProperty('queued')) {
        obj['queued'] = ApiClient.convertToType(data['queued'], 'String');
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], 'String');
      }
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'String');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'String');
      }
      if (data.hasOwnProperty('submittedDate')) {
        obj['submittedDate'] = ApiClient.convertToType(data['submittedDate'], 'String');
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies an identifier which can be used to retrieve a more detailed status of individual bulk recipient batches.
   * @member {String} batchId
   */
  exports.prototype['batchId'] = undefined;
  /**
   * The number of items returned in this response.
   * @member {String} batchSize
   */
  exports.prototype['batchSize'] = undefined;
  /**
   * Reserved: TBD
   * @member {Array.<module:model/BulkEnvelope>} bulkEnvelopes
   */
  exports.prototype['bulkEnvelopes'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} bulkEnvelopesBatchUri
   */
  exports.prototype['bulkEnvelopesBatchUri'] = undefined;
  /**
   * The last position in the result set. 
   * @member {String} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * The number of entries with a status of failed. 
   * @member {String} failed
   */
  exports.prototype['failed'] = undefined;
  /**
   * The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null. 
   * @member {String} nextUri
   */
  exports.prototype['nextUri'] = undefined;
  /**
   * The postal code for the billing address.
   * @member {String} previousUri
   */
  exports.prototype['previousUri'] = undefined;
  /**
   * The number of entries with a status of queued. 
   * @member {String} queued
   */
  exports.prototype['queued'] = undefined;
  /**
   * The number of results returned in this response. 
   * @member {String} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * The number of entries with a status of sent.
   * @member {String} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * Starting position of the current result set.
   * @member {String} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * 
   * @member {String} submittedDate
   */
  exports.prototype['submittedDate'] = undefined;
  /**
   * The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
   * @member {String} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;



  return exports;
}));


