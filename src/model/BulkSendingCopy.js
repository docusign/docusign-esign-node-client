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
    define(['ApiClient', 'model/BulkSendingCopyCustomField', 'model/BulkSendingCopyRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkSendingCopyCustomField'), require('./BulkSendingCopyRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendingCopy = factory(root.Docusign.ApiClient, root.Docusign.BulkSendingCopyCustomField, root.Docusign.BulkSendingCopyRecipient);
  }
}(this, function(ApiClient, BulkSendingCopyCustomField, BulkSendingCopyRecipient) {
  'use strict';


  /**
   * The BulkSendingCopy model module.
   * @module model/BulkSendingCopy
   */

  /**
   * Constructs a new <code>BulkSendingCopy</code>.
   * This object contains the details to use for a specific copy, or instance, of the envelope. When you send an envelope by using a bulk send list, you can customize these properties for each instance.
   * @alias module:model/BulkSendingCopy
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingCopy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingCopy} obj Optional instance to populate.
   * @return {module:model/BulkSendingCopy} The populated <code>BulkSendingCopy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], [BulkSendingCopyCustomField]);
      }
      if (data.hasOwnProperty('emailBlurb')) {
        obj['emailBlurb'] = ApiClient.convertToType(data['emailBlurb'], 'String');
      }
      if (data.hasOwnProperty('emailSubject')) {
        obj['emailSubject'] = ApiClient.convertToType(data['emailSubject'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [BulkSendingCopyRecipient]);
      }
    }
    return obj;
  }

  /**
   * An optional array of strings that allows the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each customField string can be a maximum of 100 characters.
   * @member {Array.<module:model/BulkSendingCopyCustomField>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * 
   * @member {String} emailBlurb
   */
  exports.prototype['emailBlurb'] = undefined;
  /**
   * Specifies the subject of the email that is sent to all recipients.  See [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
   * @member {String} emailSubject
   */
  exports.prototype['emailSubject'] = undefined;
  /**
   * An array of powerform recipients.
   * @member {Array.<module:model/BulkSendingCopyRecipient>} recipients
   */
  exports.prototype['recipients'] = undefined;



  return exports;
}));


