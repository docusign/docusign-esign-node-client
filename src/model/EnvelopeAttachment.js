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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeAttachment = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The EnvelopeAttachment model module.
   * @module model/EnvelopeAttachment
   */

  /**
   * Constructs a new <code>EnvelopeAttachment</code>.
   * @alias module:model/EnvelopeAttachment
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeAttachment} obj Optional instance to populate.
   * @return {module:model/EnvelopeAttachment} The populated <code>EnvelopeAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessControl')) {
        obj['accessControl'] = ApiClient.convertToType(data['accessControl'], 'String');
      }
      if (data.hasOwnProperty('attachmentId')) {
        obj['attachmentId'] = ApiClient.convertToType(data['attachmentId'], 'String');
      }
      if (data.hasOwnProperty('attachmentType')) {
        obj['attachmentType'] = ApiClient.convertToType(data['attachmentType'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} accessControl
   */
  exports.prototype['accessControl'] = undefined;
  /**
   * 
   * @member {String} attachmentId
   */
  exports.prototype['attachmentId'] = undefined;
  /**
   * 
   * @member {String} attachmentType
   */
  exports.prototype['attachmentType'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


