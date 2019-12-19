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
    define(['ApiClient', 'model/DisplayApplianceDocument', 'model/DisplayApplianceDocumentPage', 'model/DisplayApplianceEnvelope', 'model/DisplayAppliancePage', 'model/DisplayApplianceRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DisplayApplianceDocument'), require('./DisplayApplianceDocumentPage'), require('./DisplayApplianceEnvelope'), require('./DisplayAppliancePage'), require('./DisplayApplianceRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DisplayApplianceInfo = factory(root.Docusign.ApiClient, root.Docusign.DisplayApplianceDocument, root.Docusign.DisplayApplianceDocumentPage, root.Docusign.DisplayApplianceEnvelope, root.Docusign.DisplayAppliancePage, root.Docusign.DisplayApplianceRecipient);
  }
}(this, function(ApiClient, DisplayApplianceDocument, DisplayApplianceDocumentPage, DisplayApplianceEnvelope, DisplayAppliancePage, DisplayApplianceRecipient) {
  'use strict';


  /**
   * The DisplayApplianceInfo model module.
   * @module model/DisplayApplianceInfo
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayApplianceInfo</code>.
   * @alias module:model/DisplayApplianceInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayApplianceInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayApplianceInfo} obj Optional instance to populate.
   * @return {module:model/DisplayApplianceInfo} The populated <code>DisplayApplianceInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentData')) {
        obj['documentData'] = ApiClient.convertToType(data['documentData'], [DisplayApplianceDocument]);
      }
      if (data.hasOwnProperty('documentPages')) {
        obj['documentPages'] = ApiClient.convertToType(data['documentPages'], [DisplayApplianceDocumentPage]);
      }
      if (data.hasOwnProperty('envelopeData')) {
        obj['envelopeData'] = DisplayApplianceEnvelope.constructFromObject(data['envelopeData']);
      }
      if (data.hasOwnProperty('pageData')) {
        obj['pageData'] = ApiClient.convertToType(data['pageData'], [DisplayAppliancePage]);
      }
      if (data.hasOwnProperty('recipientData')) {
        obj['recipientData'] = ApiClient.convertToType(data['recipientData'], [DisplayApplianceRecipient]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/DisplayApplianceDocument>} documentData
   */
  exports.prototype['documentData'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DisplayApplianceDocumentPage>} documentPages
   */
  exports.prototype['documentPages'] = undefined;
  /**
   * @member {module:model/DisplayApplianceEnvelope} envelopeData
   */
  exports.prototype['envelopeData'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DisplayAppliancePage>} pageData
   */
  exports.prototype['pageData'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DisplayApplianceRecipient>} recipientData
   */
  exports.prototype['recipientData'] = undefined;



  return exports;
}));


