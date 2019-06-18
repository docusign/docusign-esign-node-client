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
    root.Docusign.RecipientEvent = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientEvent model module.
   * @module model/RecipientEvent
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientEvent</code>.
   * @alias module:model/RecipientEvent
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientEvent} obj Optional instance to populate.
   * @return {module:model/RecipientEvent} The populated <code>RecipientEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('includeDocuments')) {
        obj['includeDocuments'] = ApiClient.convertToType(data['includeDocuments'], 'String');
      }
      if (data.hasOwnProperty('recipientEventStatusCode')) {
        obj['recipientEventStatusCode'] = ApiClient.convertToType(data['recipientEventStatusCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * When set to **true**, the PDF documents are included in the message along with the updated XML. 
   * @member {String} includeDocuments
   */
  exports.prototype['includeDocuments'] = undefined;
  /**
   * The recipient status, this can be Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded.
   * @member {String} recipientEventStatusCode
   */
  exports.prototype['recipientEventStatusCode'] = undefined;



  return exports;
}));


