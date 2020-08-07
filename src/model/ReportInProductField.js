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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ReportInProductField = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ReportInProductField model module.
   * @module model/ReportInProductField
   */

  /**
   * Constructs a new <code>ReportInProductField</code>.
   * @alias module:model/ReportInProductField
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductField} obj Optional instance to populate.
   * @return {module:model/ReportInProductField} The populated <code>ReportInProductField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayOrder')) {
        obj['displayOrder'] = ApiClient.convertToType(data['displayOrder'], 'String');
      }
      if (data.hasOwnProperty('fieldVersion')) {
        obj['fieldVersion'] = ApiClient.convertToType(data['fieldVersion'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('selected')) {
        obj['selected'] = ApiClient.convertToType(data['selected'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} displayOrder
   */
  exports.prototype['displayOrder'] = undefined;
  /**
   * 
   * @member {String} fieldVersion
   */
  exports.prototype['fieldVersion'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} selected
   */
  exports.prototype['selected'] = undefined;



  return exports;
}));


