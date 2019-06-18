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
    root.Docusign.EnvelopeEvent = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeEvent model module.
   * @module model/EnvelopeEvent
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeEvent</code>.
   * @alias module:model/EnvelopeEvent
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeEvent} obj Optional instance to populate.
   * @return {module:model/EnvelopeEvent} The populated <code>EnvelopeEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeEventStatusCode')) {
        obj['envelopeEventStatusCode'] = ApiClient.convertToType(data['envelopeEventStatusCode'], 'String');
      }
      if (data.hasOwnProperty('includeDocuments')) {
        obj['includeDocuments'] = ApiClient.convertToType(data['includeDocuments'], 'String');
      }
    }
    return obj;
  }

  /**
   * he envelope status, this can be Sent, Delivered, Completed, Declined, or Voided.
   * @member {String} envelopeEventStatusCode
   */
  exports.prototype['envelopeEventStatusCode'] = undefined;
  /**
   * When set to **true**, the PDF documents are included in the message along with the updated XML. 
   * @member {String} includeDocuments
   */
  exports.prototype['includeDocuments'] = undefined;



  return exports;
}));


