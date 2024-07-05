/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    root.Docusign.EnvelopeViewRecipientSettings = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeViewRecipientSettings model module.
   * @module model/EnvelopeViewRecipientSettings
   */

  /**
   * Constructs a new <code>EnvelopeViewRecipientSettings</code>.
   * @alias module:model/EnvelopeViewRecipientSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeViewRecipientSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeViewRecipientSettings} obj Optional instance to populate.
   * @return {module:model/EnvelopeViewRecipientSettings} The populated <code>EnvelopeViewRecipientSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('showBulkSend')) {
        obj['showBulkSend'] = ApiClient.convertToType(data['showBulkSend'], 'String');
      }
      if (data.hasOwnProperty('showContactsList')) {
        obj['showContactsList'] = ApiClient.convertToType(data['showContactsList'], 'String');
      }
      if (data.hasOwnProperty('showEditMessage')) {
        obj['showEditMessage'] = ApiClient.convertToType(data['showEditMessage'], 'String');
      }
      if (data.hasOwnProperty('showEditRecipients')) {
        obj['showEditRecipients'] = ApiClient.convertToType(data['showEditRecipients'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} showBulkSend
   */
  exports.prototype['showBulkSend'] = undefined;
  /**
   * 
   * @member {String} showContactsList
   */
  exports.prototype['showContactsList'] = undefined;
  /**
   * 
   * @member {String} showEditMessage
   */
  exports.prototype['showEditMessage'] = undefined;
  /**
   * 
   * @member {String} showEditRecipients
   */
  exports.prototype['showEditRecipients'] = undefined;



  return exports;
}));


