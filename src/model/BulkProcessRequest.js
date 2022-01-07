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
    root.Docusign.BulkProcessRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkProcessRequest model module.
   * @module model/BulkProcessRequest
   */

  /**
   * Constructs a new <code>BulkProcessRequest</code>.
   * @alias module:model/BulkProcessRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkProcessRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkProcessRequest} obj Optional instance to populate.
   * @return {module:model/BulkProcessRequest} The populated <code>BulkProcessRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('batchName')) {
        obj['batchName'] = ApiClient.convertToType(data['batchName'], 'String');
      }
      if (data.hasOwnProperty('envelopeOrTemplateId')) {
        obj['envelopeOrTemplateId'] = ApiClient.convertToType(data['envelopeOrTemplateId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} batchName
   */
  exports.prototype['batchName'] = undefined;
  /**
   * 
   * @member {String} envelopeOrTemplateId
   */
  exports.prototype['envelopeOrTemplateId'] = undefined;



  return exports;
}));


