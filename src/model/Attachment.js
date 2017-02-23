/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
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

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('attachmentType')) {
        obj['attachmentType'] = ApiClient.convertToType(data['attachmentType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Specifies the type of the attachment for the recipient.
   * @member {String} attachmentType
   */
  exports.prototype['attachmentType'] = undefined;



  return exports;
}));


