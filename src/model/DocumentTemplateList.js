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
    define(['ApiClient', 'model/DocumentTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocumentTemplateList = factory(root.Docusign.ApiClient, root.Docusign.DocumentTemplate);
  }
}(this, function(ApiClient, DocumentTemplate) {
  'use strict';


  /**
   * The DocumentTemplateList model module.
   * @module model/DocumentTemplateList
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DocumentTemplateList</code>.
   * @alias module:model/DocumentTemplateList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentTemplateList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentTemplateList} obj Optional instance to populate.
   * @return {module:model/DocumentTemplateList} The populated <code>DocumentTemplateList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentTemplates')) {
        obj['documentTemplates'] = ApiClient.convertToType(data['documentTemplates'], [DocumentTemplate]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/DocumentTemplate>} documentTemplates
   */
  exports.prototype['documentTemplates'] = undefined;



  return exports;
}));


