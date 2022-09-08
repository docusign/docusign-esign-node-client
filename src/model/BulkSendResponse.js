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
    root.Docusign.BulkSendResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendResponse model module.
   * @module model/BulkSendResponse
   */

  /**
   * Constructs a new <code>BulkSendResponse</code>.
   * The object contains the response to a bulk send request.
   * @alias module:model/BulkSendResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendResponse} obj Optional instance to populate.
   * @return {module:model/BulkSendResponse} The populated <code>BulkSendResponse</code> instance.
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
      if (data.hasOwnProperty('envelopeOrTemplateId')) {
        obj['envelopeOrTemplateId'] = ApiClient.convertToType(data['envelopeOrTemplateId'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ApiClient.convertToType(data['errorDetails'], ['String']);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
      }
      if (data.hasOwnProperty('queueLimit')) {
        obj['queueLimit'] = ApiClient.convertToType(data['queueLimit'], 'String');
      }
      if (data.hasOwnProperty('totalQueued')) {
        obj['totalQueued'] = ApiClient.convertToType(data['totalQueued'], 'String');
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
   * @member {String} envelopeOrTemplateId
   */
  exports.prototype['envelopeOrTemplateId'] = undefined;
  /**
   * Array or errors.
   * @member {Array.<String>} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * 
   * @member {String} queueLimit
   */
  exports.prototype['queueLimit'] = undefined;
  /**
   * 
   * @member {String} totalQueued
   */
  exports.prototype['totalQueued'] = undefined;



  return exports;
}));


