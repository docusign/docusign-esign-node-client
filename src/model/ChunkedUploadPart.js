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
    root.Docusign.ChunkedUploadPart = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ChunkedUploadPart model module.
   * @module model/ChunkedUploadPart
   */

  /**
   * Constructs a new <code>ChunkedUploadPart</code>.
   * An object that contains information about the chunked upload part.
   * @alias module:model/ChunkedUploadPart
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ChunkedUploadPart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChunkedUploadPart} obj Optional instance to populate.
   * @return {module:model/ChunkedUploadPart} The populated <code>ChunkedUploadPart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * 
   * @member {String} size
   */
  exports.prototype['size'] = undefined;



  return exports;
}));


