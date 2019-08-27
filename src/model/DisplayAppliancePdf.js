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
    define(['ApiClient', 'model/DisplayApplianceSignerAttachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DisplayApplianceSignerAttachment'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DisplayAppliancePdf = factory(root.Docusign.ApiClient, root.Docusign.DisplayApplianceSignerAttachment);
  }
}(this, function(ApiClient, DisplayApplianceSignerAttachment) {
  'use strict';


  /**
   * The DisplayAppliancePdf model module.
   * @module model/DisplayAppliancePdf
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayAppliancePdf</code>.
   * @alias module:model/DisplayAppliancePdf
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayAppliancePdf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayAppliancePdf} obj Optional instance to populate.
   * @return {module:model/DisplayAppliancePdf} The populated <code>DisplayAppliancePdf</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attachmentInfo')) {
        obj['attachmentInfo'] = DisplayApplianceSignerAttachment.constructFromObject(data['attachmentInfo']);
      }
      if (data.hasOwnProperty('docName')) {
        obj['docName'] = ApiClient.convertToType(data['docName'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('latestPdf')) {
        obj['latestPdf'] = ApiClient.convertToType(data['latestPdf'], 'String');
      }
      if (data.hasOwnProperty('latestPDFId')) {
        obj['latestPDFId'] = ApiClient.convertToType(data['latestPDFId'], 'String');
      }
      if (data.hasOwnProperty('originalPdf')) {
        obj['originalPdf'] = ApiClient.convertToType(data['originalPdf'], 'String');
      }
      if (data.hasOwnProperty('originalPDFId')) {
        obj['originalPDFId'] = ApiClient.convertToType(data['originalPDFId'], 'String');
      }
      if (data.hasOwnProperty('pageCount')) {
        obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
      }
      if (data.hasOwnProperty('pdfType')) {
        obj['pdfType'] = ApiClient.convertToType(data['pdfType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DisplayApplianceSignerAttachment} attachmentInfo
   */
  exports.prototype['attachmentInfo'] = undefined;
  /**
   * 
   * @member {String} docName
   */
  exports.prototype['docName'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} latestPdf
   */
  exports.prototype['latestPdf'] = undefined;
  /**
   * 
   * @member {String} latestPDFId
   */
  exports.prototype['latestPDFId'] = undefined;
  /**
   * 
   * @member {String} originalPdf
   */
  exports.prototype['originalPdf'] = undefined;
  /**
   * 
   * @member {String} originalPDFId
   */
  exports.prototype['originalPDFId'] = undefined;
  /**
   * 
   * @member {Number} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * 
   * @member {String} pdfType
   */
  exports.prototype['pdfType'] = undefined;



  return exports;
}));


