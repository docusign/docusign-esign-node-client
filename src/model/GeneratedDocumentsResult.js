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
    define(['ApiClient', 'model/GeneratedDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeneratedDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.GeneratedDocumentsResult = factory(root.Docusign.ApiClient, root.Docusign.GeneratedDocument);
  }
}(this, function(ApiClient, GeneratedDocument) {
  'use strict';


  /**
   * The GeneratedDocumentsResult model module.
   * @module model/GeneratedDocumentsResult
   */

  /**
   * Constructs a new <code>GeneratedDocumentsResult</code>.
   * @alias module:model/GeneratedDocumentsResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GeneratedDocumentsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeneratedDocumentsResult} obj Optional instance to populate.
   * @return {module:model/GeneratedDocumentsResult} The populated <code>GeneratedDocumentsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('generatedDocuments')) {
        obj['generatedDocuments'] = ApiClient.convertToType(data['generatedDocuments'], [GeneratedDocument]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/GeneratedDocument>} generatedDocuments
   */
  exports.prototype['generatedDocuments'] = undefined;



  return exports;
}));


