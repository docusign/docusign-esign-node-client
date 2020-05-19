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
    define(['ApiClient', 'model/DocumentHtmlDefinitionOriginal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentHtmlDefinitionOriginal'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocumentHtmlDefinitionOriginals = factory(root.Docusign.ApiClient, root.Docusign.DocumentHtmlDefinitionOriginal);
  }
}(this, function(ApiClient, DocumentHtmlDefinitionOriginal) {
  'use strict';


  /**
   * The DocumentHtmlDefinitionOriginals model module.
   * @module model/DocumentHtmlDefinitionOriginals
   */

  /**
   * Constructs a new <code>DocumentHtmlDefinitionOriginals</code>.
   * @alias module:model/DocumentHtmlDefinitionOriginals
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentHtmlDefinitionOriginals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentHtmlDefinitionOriginals} obj Optional instance to populate.
   * @return {module:model/DocumentHtmlDefinitionOriginals} The populated <code>DocumentHtmlDefinitionOriginals</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('htmlDefinitions')) {
        obj['htmlDefinitions'] = ApiClient.convertToType(data['htmlDefinitions'], [DocumentHtmlDefinitionOriginal]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/DocumentHtmlDefinitionOriginal>} htmlDefinitions
   */
  exports.prototype['htmlDefinitions'] = undefined;



  return exports;
}));


