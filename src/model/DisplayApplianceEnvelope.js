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
    root.Docusign.DisplayApplianceEnvelope = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisplayApplianceEnvelope model module.
   * @module model/DisplayApplianceEnvelope
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayApplianceEnvelope</code>.
   * @alias module:model/DisplayApplianceEnvelope
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayApplianceEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayApplianceEnvelope} obj Optional instance to populate.
   * @return {module:model/DisplayApplianceEnvelope} The populated <code>DisplayApplianceEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addDemoStamp')) {
        obj['addDemoStamp'] = ApiClient.convertToType(data['addDemoStamp'], 'Boolean');
      }
      if (data.hasOwnProperty('allowMultipleAttachments')) {
        obj['allowMultipleAttachments'] = ApiClient.convertToType(data['allowMultipleAttachments'], 'Boolean');
      }
      if (data.hasOwnProperty('burnDefaultTabData')) {
        obj['burnDefaultTabData'] = ApiClient.convertToType(data['burnDefaultTabData'], 'Boolean');
      }
      if (data.hasOwnProperty('convertPdfFields')) {
        obj['convertPdfFields'] = ApiClient.convertToType(data['convertPdfFields'], 'Boolean');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('envelopeType')) {
        obj['envelopeType'] = ApiClient.convertToType(data['envelopeType'], 'String');
      }
      if (data.hasOwnProperty('includeSigsBeforeComplete')) {
        obj['includeSigsBeforeComplete'] = ApiClient.convertToType(data['includeSigsBeforeComplete'], 'Boolean');
      }
      if (data.hasOwnProperty('isConcatMode')) {
        obj['isConcatMode'] = ApiClient.convertToType(data['isConcatMode'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnvelopeIDStampingEnabled')) {
        obj['isEnvelopeIDStampingEnabled'] = ApiClient.convertToType(data['isEnvelopeIDStampingEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('pdfFormConversionFontScale100')) {
        obj['pdfFormConversionFontScale100'] = ApiClient.convertToType(data['pdfFormConversionFontScale100'], 'Boolean');
      }
      if (data.hasOwnProperty('shouldFlatten')) {
        obj['shouldFlatten'] = ApiClient.convertToType(data['shouldFlatten'], 'Boolean');
      }
      if (data.hasOwnProperty('showEnvelopeChanges')) {
        obj['showEnvelopeChanges'] = ApiClient.convertToType(data['showEnvelopeChanges'], 'Boolean');
      }
      if (data.hasOwnProperty('signOnline')) {
        obj['signOnline'] = ApiClient.convertToType(data['signOnline'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Boolean} addDemoStamp
   */
  exports.prototype['addDemoStamp'] = undefined;
  /**
   * 
   * @member {Boolean} allowMultipleAttachments
   */
  exports.prototype['allowMultipleAttachments'] = undefined;
  /**
   * 
   * @member {Boolean} burnDefaultTabData
   */
  exports.prototype['burnDefaultTabData'] = undefined;
  /**
   * 
   * @member {Boolean} convertPdfFields
   */
  exports.prototype['convertPdfFields'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * 
   * @member {String} envelopeType
   */
  exports.prototype['envelopeType'] = undefined;
  /**
   * 
   * @member {Boolean} includeSigsBeforeComplete
   */
  exports.prototype['includeSigsBeforeComplete'] = undefined;
  /**
   * 
   * @member {Boolean} isConcatMode
   */
  exports.prototype['isConcatMode'] = undefined;
  /**
   * 
   * @member {Boolean} isEnvelopeIDStampingEnabled
   */
  exports.prototype['isEnvelopeIDStampingEnabled'] = undefined;
  /**
   * 
   * @member {Boolean} pdfFormConversionFontScale100
   */
  exports.prototype['pdfFormConversionFontScale100'] = undefined;
  /**
   * 
   * @member {Boolean} shouldFlatten
   */
  exports.prototype['shouldFlatten'] = undefined;
  /**
   * 
   * @member {Boolean} showEnvelopeChanges
   */
  exports.prototype['showEnvelopeChanges'] = undefined;
  /**
   * 
   * @member {Boolean} signOnline
   */
  exports.prototype['signOnline'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


