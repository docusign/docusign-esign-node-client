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
    define(['ApiClient', 'model/Attachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Attachment'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeAttachmentsRequest = factory(root.Docusign.ApiClient, root.Docusign.Attachment);
  }
}(this, function(ApiClient, Attachment) {
  'use strict';


  /**
   * The EnvelopeAttachmentsRequest model module.
   * @module model/EnvelopeAttachmentsRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeAttachmentsRequest</code>.
   * @alias module:model/EnvelopeAttachmentsRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeAttachmentsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeAttachmentsRequest} obj Optional instance to populate.
   * @return {module:model/EnvelopeAttachmentsRequest} The populated <code>EnvelopeAttachmentsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attachments')) {
        obj['attachments'] = ApiClient.convertToType(data['attachments'], [Attachment]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/Attachment>} attachments
   */
  exports.prototype['attachments'] = undefined;



  return exports;
}));


