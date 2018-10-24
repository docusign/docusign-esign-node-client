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
    root.Docusign.RecipientEmail = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientEmail model module.
   * @module model/RecipientEmail
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientEmail</code>.
   * @alias module:model/RecipientEmail
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientEmail} obj Optional instance to populate.
   * @return {module:model/RecipientEmail} The populated <code>RecipientEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('supported')) {
        obj['supported'] = ApiClient.convertToType(data['supported'], 'Boolean');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * 
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * 
   * @member {Boolean} supported
   */
  exports.prototype['supported'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


