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
    define(['ApiClient', 'model/TemplateSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplateSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateInformation = factory(root.Docusign.ApiClient, root.Docusign.TemplateSummary);
  }
}(this, function(ApiClient, TemplateSummary) {
  'use strict';


  /**
   * The TemplateInformation model module.
   * @module model/TemplateInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TemplateInformation</code>.
   * @alias module:model/TemplateInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateInformation} obj Optional instance to populate.
   * @return {module:model/TemplateInformation} The populated <code>TemplateInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('templates')) {
        obj['templates'] = ApiClient.convertToType(data['templates'], [TemplateSummary]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/TemplateSummary>} templates
   */
  exports.prototype['templates'] = undefined;



  return exports;
}));


