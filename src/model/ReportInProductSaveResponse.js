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
    root.Docusign.ReportInProductSaveResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ReportInProductSaveResponse model module.
   * @module model/ReportInProductSaveResponse
   */

  /**
   * Constructs a new <code>ReportInProductSaveResponse</code>.
   * @alias module:model/ReportInProductSaveResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductSaveResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductSaveResponse} obj Optional instance to populate.
   * @return {module:model/ReportInProductSaveResponse} The populated <code>ReportInProductSaveResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reportCustomizedId')) {
        obj['reportCustomizedId'] = ApiClient.convertToType(data['reportCustomizedId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} reportCustomizedId
   */
  exports.prototype['reportCustomizedId'] = undefined;



  return exports;
}));


