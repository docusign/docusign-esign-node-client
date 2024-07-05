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
    define(['ApiClient', 'model/DocGenFormField', 'model/DocGenSyntaxError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocGenFormField'), require('./DocGenSyntaxError'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocGenFormFields = factory(root.Docusign.ApiClient, root.Docusign.DocGenFormField, root.Docusign.DocGenSyntaxError);
  }
}(this, function(ApiClient, DocGenFormField, DocGenSyntaxError) {
  'use strict';


  /**
   * The DocGenFormFields model module.
   * @module model/DocGenFormFields
   */

  /**
   * Constructs a new <code>DocGenFormFields</code>.
   * @alias module:model/DocGenFormFields
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocGenFormFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocGenFormFields} obj Optional instance to populate.
   * @return {module:model/DocGenFormFields} The populated <code>DocGenFormFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('docGenDocumentStatus')) {
        obj['docGenDocumentStatus'] = ApiClient.convertToType(data['docGenDocumentStatus'], 'String');
      }
      if (data.hasOwnProperty('docGenErrors')) {
        obj['docGenErrors'] = ApiClient.convertToType(data['docGenErrors'], [DocGenSyntaxError]);
      }
      if (data.hasOwnProperty('docGenFormFieldList')) {
        obj['docGenFormFieldList'] = ApiClient.convertToType(data['docGenFormFieldList'], [DocGenFormField]);
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} docGenDocumentStatus
   */
  exports.prototype['docGenDocumentStatus'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocGenSyntaxError>} docGenErrors
   */
  exports.prototype['docGenErrors'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocGenFormField>} docGenFormFieldList
   */
  exports.prototype['docGenFormFieldList'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;



  return exports;
}));


