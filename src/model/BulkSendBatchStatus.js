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
    define(['ApiClient', 'model/BulkSendEnvelopesInfo', 'model/BulkSendErrorStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkSendEnvelopesInfo'), require('./BulkSendErrorStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendBatchStatus = factory(root.Docusign.ApiClient, root.Docusign.BulkSendEnvelopesInfo, root.Docusign.BulkSendErrorStatus);
  }
}(this, function(ApiClient, BulkSendEnvelopesInfo, BulkSendErrorStatus) {
  'use strict';


  /**
   * The BulkSendBatchStatus model module.
   * @module model/BulkSendBatchStatus
   */

  /**
   * Constructs a new <code>BulkSendBatchStatus</code>.
   * Result of `getBulkSendBatchStatus`
   * @alias module:model/BulkSendBatchStatus
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendBatchStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendBatchStatus} obj Optional instance to populate.
   * @return {module:model/BulkSendBatchStatus} The populated <code>BulkSendBatchStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('actionStatus')) {
        obj['actionStatus'] = ApiClient.convertToType(data['actionStatus'], 'String');
      }
      if (data.hasOwnProperty('batchId')) {
        obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
      }
      if (data.hasOwnProperty('batchName')) {
        obj['batchName'] = ApiClient.convertToType(data['batchName'], 'String');
      }
      if (data.hasOwnProperty('batchSize')) {
        obj['batchSize'] = ApiClient.convertToType(data['batchSize'], 'String');
      }
      if (data.hasOwnProperty('bulkErrors')) {
        obj['bulkErrors'] = ApiClient.convertToType(data['bulkErrors'], [BulkSendErrorStatus]);
      }
      if (data.hasOwnProperty('envelopeIdOrTemplateId')) {
        obj['envelopeIdOrTemplateId'] = ApiClient.convertToType(data['envelopeIdOrTemplateId'], 'String');
      }
      if (data.hasOwnProperty('envelopesInfo')) {
        obj['envelopesInfo'] = BulkSendEnvelopesInfo.constructFromObject(data['envelopesInfo']);
      }
      if (data.hasOwnProperty('envelopesUri')) {
        obj['envelopesUri'] = ApiClient.convertToType(data['envelopesUri'], 'String');
      }
      if (data.hasOwnProperty('failed')) {
        obj['failed'] = ApiClient.convertToType(data['failed'], 'String');
      }
      if (data.hasOwnProperty('mailingListId')) {
        obj['mailingListId'] = ApiClient.convertToType(data['mailingListId'], 'String');
      }
      if (data.hasOwnProperty('mailingListName')) {
        obj['mailingListName'] = ApiClient.convertToType(data['mailingListName'], 'String');
      }
      if (data.hasOwnProperty('ownerUserId')) {
        obj['ownerUserId'] = ApiClient.convertToType(data['ownerUserId'], 'String');
      }
      if (data.hasOwnProperty('queued')) {
        obj['queued'] = ApiClient.convertToType(data['queued'], 'String');
      }
      if (data.hasOwnProperty('resendsRemaining')) {
        obj['resendsRemaining'] = ApiClient.convertToType(data['resendsRemaining'], 'String');
      }
      if (data.hasOwnProperty('senderUserId')) {
        obj['senderUserId'] = ApiClient.convertToType(data['senderUserId'], 'String');
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
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * 
   * @member {String} actionStatus
   */
  exports.prototype['actionStatus'] = undefined;
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
   * @member {Array.<module:model/BulkSendErrorStatus>} bulkErrors
   */
  exports.prototype['bulkErrors'] = undefined;
  /**
   * 
   * @member {String} envelopeIdOrTemplateId
   */
  exports.prototype['envelopeIdOrTemplateId'] = undefined;
  /**
   * 
   * @member {module:model/BulkSendEnvelopesInfo} envelopesInfo
   */
  exports.prototype['envelopesInfo'] = undefined;
  /**
   * 
   * @member {String} envelopesUri
   */
  exports.prototype['envelopesUri'] = undefined;
  /**
   * 
   * @member {String} failed
   */
  exports.prototype['failed'] = undefined;
  /**
   * 
   * @member {String} mailingListId
   */
  exports.prototype['mailingListId'] = undefined;
  /**
   * 
   * @member {String} mailingListName
   */
  exports.prototype['mailingListName'] = undefined;
  /**
   * 
   * @member {String} ownerUserId
   */
  exports.prototype['ownerUserId'] = undefined;
  /**
   * 
   * @member {String} queued
   */
  exports.prototype['queued'] = undefined;
  /**
   * 
   * @member {String} resendsRemaining
   */
  exports.prototype['resendsRemaining'] = undefined;
  /**
   * 
   * @member {String} senderUserId
   */
  exports.prototype['senderUserId'] = undefined;
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


