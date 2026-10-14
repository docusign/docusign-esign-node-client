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
    root.Docusign.GeneratedDocument = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The GeneratedDocument model module.
   * @module model/GeneratedDocument
   */

  /**
   * Constructs a new <code>GeneratedDocument</code>.
   * @alias module:model/GeneratedDocument
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GeneratedDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeneratedDocument} obj Optional instance to populate.
   * @return {module:model/GeneratedDocument} The populated <code>GeneratedDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentAsBase64')) {
        obj['documentAsBase64'] = ApiClient.convertToType(data['documentAsBase64'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentName')) {
        obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
      }
      if (data.hasOwnProperty('fileExtension')) {
        obj['fileExtension'] = ApiClient.convertToType(data['fileExtension'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} documentAsBase64
   */
  exports.prototype['documentAsBase64'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} documentName
   */
  exports.prototype['documentName'] = undefined;
  /**
   * 
   * @member {String} fileExtension
   */
  exports.prototype['fileExtension'] = undefined;



  return exports;
}));


