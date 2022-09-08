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
    define(['ApiClient', 'model/Envelope', 'model/ErrorDetails', 'model/PowerFormRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Envelope'), require('./ErrorDetails'), require('./PowerFormRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PowerForm = factory(root.Docusign.ApiClient, root.Docusign.Envelope, root.Docusign.ErrorDetails, root.Docusign.PowerFormRecipient);
  }
}(this, function(ApiClient, Envelope, ErrorDetails, PowerFormRecipient) {
  'use strict';


  /**
   * The PowerForm model module.
   * @module model/PowerForm
   */

  /**
   * Constructs a new <code>PowerForm</code>.
   * Contains details about a PowerForm.
   * @alias module:model/PowerForm
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PowerForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PowerForm} obj Optional instance to populate.
   * @return {module:model/PowerForm} The populated <code>PowerForm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('emailBody')) {
        obj['emailBody'] = ApiClient.convertToType(data['emailBody'], 'String');
      }
      if (data.hasOwnProperty('emailSubject')) {
        obj['emailSubject'] = ApiClient.convertToType(data['emailSubject'], 'String');
      }
      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], [Envelope]);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('instructions')) {
        obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'String');
      }
      if (data.hasOwnProperty('lastUsed')) {
        obj['lastUsed'] = ApiClient.convertToType(data['lastUsed'], 'String');
      }
      if (data.hasOwnProperty('limitUseInterval')) {
        obj['limitUseInterval'] = ApiClient.convertToType(data['limitUseInterval'], 'String');
      }
      if (data.hasOwnProperty('limitUseIntervalEnabled')) {
        obj['limitUseIntervalEnabled'] = ApiClient.convertToType(data['limitUseIntervalEnabled'], 'String');
      }
      if (data.hasOwnProperty('limitUseIntervalUnits')) {
        obj['limitUseIntervalUnits'] = ApiClient.convertToType(data['limitUseIntervalUnits'], 'String');
      }
      if (data.hasOwnProperty('maxUseEnabled')) {
        obj['maxUseEnabled'] = ApiClient.convertToType(data['maxUseEnabled'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('powerFormId')) {
        obj['powerFormId'] = ApiClient.convertToType(data['powerFormId'], 'String');
      }
      if (data.hasOwnProperty('powerFormUrl')) {
        obj['powerFormUrl'] = ApiClient.convertToType(data['powerFormUrl'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [PowerFormRecipient]);
      }
      if (data.hasOwnProperty('senderName')) {
        obj['senderName'] = ApiClient.convertToType(data['senderName'], 'String');
      }
      if (data.hasOwnProperty('senderUserId')) {
        obj['senderUserId'] = ApiClient.convertToType(data['senderUserId'], 'String');
      }
      if (data.hasOwnProperty('signingMode')) {
        obj['signingMode'] = ApiClient.convertToType(data['signingMode'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('templateName')) {
        obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
      }
      if (data.hasOwnProperty('timesUsed')) {
        obj['timesUsed'] = ApiClient.convertToType(data['timesUsed'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('usesRemaining')) {
        obj['usesRemaining'] = ApiClient.convertToType(data['usesRemaining'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * Indicates the date and time the item was created.
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * Specifies the email body of the message sent to the recipient.   Maximum length: 10000 characters. 
   * @member {String} emailBody
   */
  exports.prototype['emailBody'] = undefined;
  /**
   * Specifies the subject of the email that is sent to all recipients.  See [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
   * @member {String} emailSubject
   */
  exports.prototype['emailSubject'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Envelope>} envelopes
   */
  exports.prototype['envelopes'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} instructions
   */
  exports.prototype['instructions'] = undefined;
  /**
   * 
   * @member {String} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * 
   * @member {String} lastUsed
   */
  exports.prototype['lastUsed'] = undefined;
  /**
   * 
   * @member {String} limitUseInterval
   */
  exports.prototype['limitUseInterval'] = undefined;
  /**
   * 
   * @member {String} limitUseIntervalEnabled
   */
  exports.prototype['limitUseIntervalEnabled'] = undefined;
  /**
   * 
   * @member {String} limitUseIntervalUnits
   */
  exports.prototype['limitUseIntervalUnits'] = undefined;
  /**
   * 
   * @member {String} maxUseEnabled
   */
  exports.prototype['maxUseEnabled'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} powerFormId
   */
  exports.prototype['powerFormId'] = undefined;
  /**
   * 
   * @member {String} powerFormUrl
   */
  exports.prototype['powerFormUrl'] = undefined;
  /**
   * An array of powerform recipients.
   * @member {Array.<module:model/PowerFormRecipient>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * 
   * @member {String} senderName
   */
  exports.prototype['senderName'] = undefined;
  /**
   * 
   * @member {String} senderUserId
   */
  exports.prototype['senderUserId'] = undefined;
  /**
   * 
   * @member {String} signingMode
   */
  exports.prototype['signingMode'] = undefined;
  /**
   * The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * 
   * @member {String} templateName
   */
  exports.prototype['templateName'] = undefined;
  /**
   * 
   * @member {String} timesUsed
   */
  exports.prototype['timesUsed'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * 
   * @member {String} usesRemaining
   */
  exports.prototype['usesRemaining'] = undefined;



  return exports;
}));


