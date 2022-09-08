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
    define(['ApiClient', 'model/Envelope', 'model/EnvelopeTransactionStatus', 'model/Folder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Envelope'), require('./EnvelopeTransactionStatus'), require('./Folder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopesInformation = factory(root.Docusign.ApiClient, root.Docusign.Envelope, root.Docusign.EnvelopeTransactionStatus, root.Docusign.Folder);
  }
}(this, function(ApiClient, Envelope, EnvelopeTransactionStatus, Folder) {
  'use strict';


  /**
   * The EnvelopesInformation model module.
   * @module model/EnvelopesInformation
   */

  /**
   * Constructs a new <code>EnvelopesInformation</code>.
   * Result set for the Envelopes: listStatusChanges method
   * @alias module:model/EnvelopesInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopesInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopesInformation} obj Optional instance to populate.
   * @return {module:model/EnvelopesInformation} The populated <code>EnvelopesInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('continuationToken')) {
        obj['continuationToken'] = ApiClient.convertToType(data['continuationToken'], 'String');
      }
      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], 'String');
      }
      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], [Envelope]);
      }
      if (data.hasOwnProperty('envelopeTransactionStatuses')) {
        obj['envelopeTransactionStatuses'] = ApiClient.convertToType(data['envelopeTransactionStatuses'], [EnvelopeTransactionStatus]);
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [Folder]);
      }
      if (data.hasOwnProperty('lastQueriedDateTime')) {
        obj['lastQueriedDateTime'] = ApiClient.convertToType(data['lastQueriedDateTime'], 'String');
      }
      if (data.hasOwnProperty('nextUri')) {
        obj['nextUri'] = ApiClient.convertToType(data['nextUri'], 'String');
      }
      if (data.hasOwnProperty('previousUri')) {
        obj['previousUri'] = ApiClient.convertToType(data['previousUri'], 'String');
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], 'String');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'String');
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} continuationToken
   */
  exports.prototype['continuationToken'] = undefined;
  /**
   * The last position in the result set. 
   * @member {String} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Envelope>} envelopes
   */
  exports.prototype['envelopes'] = undefined;
  /**
   * 
   * @member {Array.<module:model/EnvelopeTransactionStatus>} envelopeTransactionStatuses
   */
  exports.prototype['envelopeTransactionStatuses'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Folder>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   * 
   * @member {String} lastQueriedDateTime
   */
  exports.prototype['lastQueriedDateTime'] = undefined;
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
   * The number of results returned in this response. 
   * @member {String} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * Starting position of the current result set.
   * @member {String} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
   * @member {String} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;



  return exports;
}));


