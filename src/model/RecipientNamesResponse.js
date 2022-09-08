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
    root.Docusign.RecipientNamesResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientNamesResponse model module.
   * @module model/RecipientNamesResponse
   */

  /**
   * Constructs a new <code>RecipientNamesResponse</code>.
   * This response object contains a list of recipients.
   * @alias module:model/RecipientNamesResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientNamesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientNamesResponse} obj Optional instance to populate.
   * @return {module:model/RecipientNamesResponse} The populated <code>RecipientNamesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('multipleUsers')) {
        obj['multipleUsers'] = ApiClient.convertToType(data['multipleUsers'], 'String');
      }
      if (data.hasOwnProperty('recipientNames')) {
        obj['recipientNames'] = ApiClient.convertToType(data['recipientNames'], ['String']);
      }
      if (data.hasOwnProperty('reservedRecipientEmail')) {
        obj['reservedRecipientEmail'] = ApiClient.convertToType(data['reservedRecipientEmail'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicates whether email address is used by more than one user.
   * @member {String} multipleUsers
   */
  exports.prototype['multipleUsers'] = undefined;
  /**
   * 
   * @member {Array.<String>} recipientNames
   */
  exports.prototype['recipientNames'] = undefined;
  /**
   * 
   * @member {String} reservedRecipientEmail
   */
  exports.prototype['reservedRecipientEmail'] = undefined;



  return exports;
}));


