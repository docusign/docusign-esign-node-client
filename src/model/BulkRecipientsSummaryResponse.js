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
    define(['ApiClient', 'model/BulkRecipient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkRecipient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkRecipientsSummaryResponse = factory(root.Docusign.ApiClient, root.Docusign.BulkRecipient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, BulkRecipient, ErrorDetails) {
  'use strict';


  /**
   * The BulkRecipientsSummaryResponse model module.
   * @module model/BulkRecipientsSummaryResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BulkRecipientsSummaryResponse</code>.
   * @alias module:model/BulkRecipientsSummaryResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkRecipientsSummaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkRecipientsSummaryResponse} obj Optional instance to populate.
   * @return {module:model/BulkRecipientsSummaryResponse} The populated <code>BulkRecipientsSummaryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bulkRecipients')) {
        obj['bulkRecipients'] = ApiClient.convertToType(data['bulkRecipients'], [BulkRecipient]);
      }
      if (data.hasOwnProperty('bulkRecipientsCount')) {
        obj['bulkRecipientsCount'] = ApiClient.convertToType(data['bulkRecipientsCount'], 'String');
      }
      if (data.hasOwnProperty('bulkRecipientsUri')) {
        obj['bulkRecipientsUri'] = ApiClient.convertToType(data['bulkRecipientsUri'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ApiClient.convertToType(data['errorDetails'], [ErrorDetails]);
      }
    }
    return obj;
  }

  /**
   * A complex type containing information about the bulk recipients in the response.
   * @member {Array.<module:model/BulkRecipient>} bulkRecipients
   */
  exports.prototype['bulkRecipients'] = undefined;
  /**
   * The number of items returned in this response.
   * @member {String} bulkRecipientsCount
   */
  exports.prototype['bulkRecipientsCount'] = undefined;
  /**
   * Contains a URI for an endpoint that allows you to easily retrieve bulk recipient information.
   * @member {String} bulkRecipientsUri
   */
  exports.prototype['bulkRecipientsUri'] = undefined;
  /**
   * Array or errors.
   * @member {Array.<module:model/ErrorDetails>} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;



  return exports;
}));


