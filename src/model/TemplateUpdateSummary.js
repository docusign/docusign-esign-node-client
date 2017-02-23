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
    define(['ApiClient', 'model/BulkEnvelopeStatus', 'model/ErrorDetails', 'model/LockInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkEnvelopeStatus'), require('./ErrorDetails'), require('./LockInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateUpdateSummary = factory(root.Docusign.ApiClient, root.Docusign.BulkEnvelopeStatus, root.Docusign.ErrorDetails, root.Docusign.LockInformation);
  }
}(this, function(ApiClient, BulkEnvelopeStatus, ErrorDetails, LockInformation) {
  'use strict';


  /**
   * The TemplateUpdateSummary model module.
   * @module model/TemplateUpdateSummary
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TemplateUpdateSummary</code>.
   * @alias module:model/TemplateUpdateSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateUpdateSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateSummary} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateSummary} The populated <code>TemplateUpdateSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('bulkEnvelopeStatus')) {
        obj['bulkEnvelopeStatus'] = BulkEnvelopeStatus.constructFromObject(data['bulkEnvelopeStatus']);
      }
      if (data.hasOwnProperty('lockInformation')) {
        obj['lockInformation'] = LockInformation.constructFromObject(data['lockInformation']);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
    }
    return obj;
  }

  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * @member {module:model/BulkEnvelopeStatus} bulkEnvelopeStatus
   */
  exports.prototype['bulkEnvelopeStatus'] = undefined;
  /**
   * @member {module:model/LockInformation} lockInformation
   */
  exports.prototype['lockInformation'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;



  return exports;
}));


