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
    root.Docusign.ChunkedUploadRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ChunkedUploadRequest model module.
   * @module model/ChunkedUploadRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ChunkedUploadRequest</code>.
   * @alias module:model/ChunkedUploadRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ChunkedUploadRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChunkedUploadRequest} obj Optional instance to populate.
   * @return {module:model/ChunkedUploadRequest} The populated <code>ChunkedUploadRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('chunkedUploadId')) {
        obj['chunkedUploadId'] = ApiClient.convertToType(data['chunkedUploadId'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} chunkedUploadId
   */
  exports.prototype['chunkedUploadId'] = undefined;
  /**
   * 
   * @member {String} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


