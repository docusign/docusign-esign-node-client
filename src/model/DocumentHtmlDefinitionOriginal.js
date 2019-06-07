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
    define(['ApiClient', 'model/DocumentHtmlDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentHtmlDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocumentHtmlDefinitionOriginal = factory(root.Docusign.ApiClient, root.Docusign.DocumentHtmlDefinition);
  }
}(this, function(ApiClient, DocumentHtmlDefinition) {
  'use strict';


  /**
   * The DocumentHtmlDefinitionOriginal model module.
   * @module model/DocumentHtmlDefinitionOriginal
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DocumentHtmlDefinitionOriginal</code>.
   * @alias module:model/DocumentHtmlDefinitionOriginal
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentHtmlDefinitionOriginal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentHtmlDefinitionOriginal} obj Optional instance to populate.
   * @return {module:model/DocumentHtmlDefinitionOriginal} The populated <code>DocumentHtmlDefinitionOriginal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentIdGuid')) {
        obj['documentIdGuid'] = ApiClient.convertToType(data['documentIdGuid'], 'String');
      }
      if (data.hasOwnProperty('htmlDefinition')) {
        obj['htmlDefinition'] = DocumentHtmlDefinition.constructFromObject(data['htmlDefinition']);
      }
    }
    return obj;
  }

  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} documentIdGuid
   */
  exports.prototype['documentIdGuid'] = undefined;
  /**
   * @member {module:model/DocumentHtmlDefinition} htmlDefinition
   */
  exports.prototype['htmlDefinition'] = undefined;



  return exports;
}));


