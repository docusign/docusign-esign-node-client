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
    define(['ApiClient', 'model/EnvelopeDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateDocumentsResult = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeDocument);
  }
}(this, function(ApiClient, EnvelopeDocument) {
  'use strict';


  /**
   * The TemplateDocumentsResult model module.
   * @module model/TemplateDocumentsResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TemplateDocumentsResult</code>.
   * @alias module:model/TemplateDocumentsResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateDocumentsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateDocumentsResult} obj Optional instance to populate.
   * @return {module:model/TemplateDocumentsResult} The populated <code>TemplateDocumentsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('templateDocuments')) {
        obj['templateDocuments'] = ApiClient.convertToType(data['templateDocuments'], [EnvelopeDocument]);
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/EnvelopeDocument>} templateDocuments
   */
  exports.prototype['templateDocuments'] = undefined;
  /**
   * The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;



  return exports;
}));


