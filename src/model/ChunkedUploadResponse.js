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
    define(['ApiClient', 'model/ChunkedUploadPart'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChunkedUploadPart'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ChunkedUploadResponse = factory(root.Docusign.ApiClient, root.Docusign.ChunkedUploadPart);
  }
}(this, function(ApiClient, ChunkedUploadPart) {
  'use strict';


  /**
   * The ChunkedUploadResponse model module.
   * @module model/ChunkedUploadResponse
   */

  /**
   * Constructs a new <code>ChunkedUploadResponse</code>.
   * This response object is returned after you upload a chunked upload.
   * @alias module:model/ChunkedUploadResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ChunkedUploadResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChunkedUploadResponse} obj Optional instance to populate.
   * @return {module:model/ChunkedUploadResponse} The populated <code>ChunkedUploadResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('checksum')) {
        obj['checksum'] = ApiClient.convertToType(data['checksum'], 'String');
      }
      if (data.hasOwnProperty('chunkedUploadId')) {
        obj['chunkedUploadId'] = ApiClient.convertToType(data['chunkedUploadId'], 'String');
      }
      if (data.hasOwnProperty('chunkedUploadParts')) {
        obj['chunkedUploadParts'] = ApiClient.convertToType(data['chunkedUploadParts'], [ChunkedUploadPart]);
      }
      if (data.hasOwnProperty('chunkedUploadUri')) {
        obj['chunkedUploadUri'] = ApiClient.convertToType(data['chunkedUploadUri'], 'String');
      }
      if (data.hasOwnProperty('committed')) {
        obj['committed'] = ApiClient.convertToType(data['committed'], 'String');
      }
      if (data.hasOwnProperty('expirationDateTime')) {
        obj['expirationDateTime'] = ApiClient.convertToType(data['expirationDateTime'], 'String');
      }
      if (data.hasOwnProperty('maxChunkedUploadParts')) {
        obj['maxChunkedUploadParts'] = ApiClient.convertToType(data['maxChunkedUploadParts'], 'String');
      }
      if (data.hasOwnProperty('maxTotalSize')) {
        obj['maxTotalSize'] = ApiClient.convertToType(data['maxTotalSize'], 'String');
      }
      if (data.hasOwnProperty('totalSize')) {
        obj['totalSize'] = ApiClient.convertToType(data['totalSize'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} checksum
   */
  exports.prototype['checksum'] = undefined;
  /**
   * 
   * @member {String} chunkedUploadId
   */
  exports.prototype['chunkedUploadId'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ChunkedUploadPart>} chunkedUploadParts
   */
  exports.prototype['chunkedUploadParts'] = undefined;
  /**
   * 
   * @member {String} chunkedUploadUri
   */
  exports.prototype['chunkedUploadUri'] = undefined;
  /**
   * 
   * @member {String} committed
   */
  exports.prototype['committed'] = undefined;
  /**
   * 
   * @member {String} expirationDateTime
   */
  exports.prototype['expirationDateTime'] = undefined;
  /**
   * 
   * @member {String} maxChunkedUploadParts
   */
  exports.prototype['maxChunkedUploadParts'] = undefined;
  /**
   * 
   * @member {String} maxTotalSize
   */
  exports.prototype['maxTotalSize'] = undefined;
  /**
   * 
   * @member {String} totalSize
   */
  exports.prototype['totalSize'] = undefined;



  return exports;
}));


