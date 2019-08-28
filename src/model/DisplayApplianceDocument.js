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
    root.Docusign.DisplayApplianceDocument = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisplayApplianceDocument model module.
   * @module model/DisplayApplianceDocument
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayApplianceDocument</code>.
   * @alias module:model/DisplayApplianceDocument
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayApplianceDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayApplianceDocument} obj Optional instance to populate.
   * @return {module:model/DisplayApplianceDocument} The populated <code>DisplayApplianceDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attachmentDescription')) {
        obj['attachmentDescription'] = ApiClient.convertToType(data['attachmentDescription'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentType')) {
        obj['documentType'] = ApiClient.convertToType(data['documentType'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('externalDocumentId')) {
        obj['externalDocumentId'] = ApiClient.convertToType(data['externalDocumentId'], 'String');
      }
      if (data.hasOwnProperty('latestPDFId')) {
        obj['latestPDFId'] = ApiClient.convertToType(data['latestPDFId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('pages')) {
        obj['pages'] = ApiClient.convertToType(data['pages'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} attachmentDescription
   */
  exports.prototype['attachmentDescription'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} documentType
   */
  exports.prototype['documentType'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * 
   * @member {String} externalDocumentId
   */
  exports.prototype['externalDocumentId'] = undefined;
  /**
   * 
   * @member {String} latestPDFId
   */
  exports.prototype['latestPDFId'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {Number} pages
   */
  exports.prototype['pages'] = undefined;



  return exports;
}));


