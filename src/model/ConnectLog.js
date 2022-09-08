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
    define(['ApiClient', 'model/ConnectDebugLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectDebugLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectLog = factory(root.Docusign.ApiClient, root.Docusign.ConnectDebugLog);
  }
}(this, function(ApiClient, ConnectDebugLog) {
  'use strict';


  /**
   * The ConnectLog model module.
   * @module model/ConnectLog
   */

  /**
   * Constructs a new <code>ConnectLog</code>.
   * Contains information about a Connect log entry.
   * @alias module:model/ConnectLog
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectLog} obj Optional instance to populate.
   * @return {module:model/ConnectLog} The populated <code>ConnectLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('configUrl')) {
        obj['configUrl'] = ApiClient.convertToType(data['configUrl'], 'String');
      }
      if (data.hasOwnProperty('connectDebugLog')) {
        obj['connectDebugLog'] = ApiClient.convertToType(data['connectDebugLog'], [ConnectDebugLog]);
      }
      if (data.hasOwnProperty('connectId')) {
        obj['connectId'] = ApiClient.convertToType(data['connectId'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('failureId')) {
        obj['failureId'] = ApiClient.convertToType(data['failureId'], 'String');
      }
      if (data.hasOwnProperty('failureUri')) {
        obj['failureUri'] = ApiClient.convertToType(data['failureUri'], 'String');
      }
      if (data.hasOwnProperty('lastTry')) {
        obj['lastTry'] = ApiClient.convertToType(data['lastTry'], 'String');
      }
      if (data.hasOwnProperty('logId')) {
        obj['logId'] = ApiClient.convertToType(data['logId'], 'String');
      }
      if (data.hasOwnProperty('logUri')) {
        obj['logUri'] = ApiClient.convertToType(data['logUri'], 'String');
      }
      if (data.hasOwnProperty('retryCount')) {
        obj['retryCount'] = ApiClient.convertToType(data['retryCount'], 'String');
      }
      if (data.hasOwnProperty('retryUri')) {
        obj['retryUri'] = ApiClient.convertToType(data['retryUri'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The web address of the listener or Retrieving Service end point for Connect.
   * @member {String} configUrl
   */
  exports.prototype['configUrl'] = undefined;
  /**
   * A complex element containing information about the Connect configuration, error details, date/time, description and payload.  This is only included in the response if the query additional_info=true is used.
   * @member {Array.<module:model/ConnectDebugLog>} connectDebugLog
   */
  exports.prototype['connectDebugLog'] = undefined;
  /**
   * The identifier for the Connect configuration that failed. If an account has multiple Connect configurations, this value is used to look up the Connect configuration for the failed post.
   * @member {String} connectId
   */
  exports.prototype['connectId'] = undefined;
  /**
   * The date and time the entry was created.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The email that sent the envelope.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * The error that caused the Connect post to fail.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * The failure log ID for the failure.
   * @member {String} failureId
   */
  exports.prototype['failureId'] = undefined;
  /**
   * The URI for the failure.
   * @member {String} failureUri
   */
  exports.prototype['failureUri'] = undefined;
  /**
   * The date and time the last attempt to post.
   * @member {String} lastTry
   */
  exports.prototype['lastTry'] = undefined;
  /**
   * The Connect log ID for the entry.
   * @member {String} logId
   */
  exports.prototype['logId'] = undefined;
  /**
   * The URI for the log item.
   * @member {String} logUri
   */
  exports.prototype['logUri'] = undefined;
  /**
   * The number of times the Connect post has been retried.
   * @member {String} retryCount
   */
  exports.prototype['retryCount'] = undefined;
  /**
   * The UEI to retry to publish the Connect failure.
   * @member {String} retryUri
   */
  exports.prototype['retryUri'] = undefined;
  /**
   * The new envelope status for the failed Connect post. The possible values are: Any, Voided, Created, Deleted, Sent, Delivered, Signed, Completed, Declined, TimedOut, Template, or Processing.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The envelope subject.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * The name of the envelope sender.
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


