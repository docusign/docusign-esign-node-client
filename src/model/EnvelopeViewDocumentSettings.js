/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    root.Docusign.EnvelopeViewDocumentSettings = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeViewDocumentSettings model module.
   * @module model/EnvelopeViewDocumentSettings
   */

  /**
   * Constructs a new <code>EnvelopeViewDocumentSettings</code>.
   * @alias module:model/EnvelopeViewDocumentSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeViewDocumentSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeViewDocumentSettings} obj Optional instance to populate.
   * @return {module:model/EnvelopeViewDocumentSettings} The populated <code>EnvelopeViewDocumentSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('showEditDocuments')) {
        obj['showEditDocuments'] = ApiClient.convertToType(data['showEditDocuments'], 'String');
      }
      if (data.hasOwnProperty('showEditDocumentVisibility')) {
        obj['showEditDocumentVisibility'] = ApiClient.convertToType(data['showEditDocumentVisibility'], 'String');
      }
      if (data.hasOwnProperty('showEditPages')) {
        obj['showEditPages'] = ApiClient.convertToType(data['showEditPages'], 'String');
      }
      if (data.hasOwnProperty('showSaveAsDocumentCustomField')) {
        obj['showSaveAsDocumentCustomField'] = ApiClient.convertToType(data['showSaveAsDocumentCustomField'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} showEditDocuments
   */
  exports.prototype['showEditDocuments'] = undefined;
  /**
   * 
   * @member {String} showEditDocumentVisibility
   */
  exports.prototype['showEditDocumentVisibility'] = undefined;
  /**
   * 
   * @member {String} showEditPages
   */
  exports.prototype['showEditPages'] = undefined;
  /**
   * 
   * @member {String} showSaveAsDocumentCustomField
   */
  exports.prototype['showSaveAsDocumentCustomField'] = undefined;



  return exports;
}));


