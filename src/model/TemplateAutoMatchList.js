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
    define(['ApiClient', 'model/TemplateAutoMatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplateAutoMatch'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateAutoMatchList = factory(root.Docusign.ApiClient, root.Docusign.TemplateAutoMatch);
  }
}(this, function(ApiClient, TemplateAutoMatch) {
  'use strict';


  /**
   * The TemplateAutoMatchList model module.
   * @module model/TemplateAutoMatchList
   */

  /**
   * Constructs a new <code>TemplateAutoMatchList</code>.
   * @alias module:model/TemplateAutoMatchList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateAutoMatchList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateAutoMatchList} obj Optional instance to populate.
   * @return {module:model/TemplateAutoMatchList} The populated <code>TemplateAutoMatchList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('templates')) {
        obj['templates'] = ApiClient.convertToType(data['templates'], [TemplateAutoMatch]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/TemplateAutoMatch>} templates
   */
  exports.prototype['templates'] = undefined;



  return exports;
}));


