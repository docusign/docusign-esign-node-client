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
    root.Docusign.Attachment = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Attachment model module.
   * @module model/Attachment
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Attachment</code>.
   * Contains information about an attachment.
   * @alias module:model/Attachment
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Attachment} obj Optional instance to populate.
   * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
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
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('remoteUrl')) {
        obj['remoteUrl'] = ApiClient.convertToType(data['remoteUrl'], 'String');
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
   * Specifies the type of the attachment for the recipient.
   * @member {String} attachmentType
   */
  exports.prototype['attachmentType'] = undefined;
  /**
   * 
   * @member {String} data
   */
  exports.prototype['data'] = undefined;
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
  /**
   * 
   * @member {String} remoteUrl
   */
  exports.prototype['remoteUrl'] = undefined;



  return exports;
}));


