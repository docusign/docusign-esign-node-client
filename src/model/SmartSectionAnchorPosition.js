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
    root.Docusign.SmartSectionAnchorPosition = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SmartSectionAnchorPosition model module.
   * @module model/SmartSectionAnchorPosition
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SmartSectionAnchorPosition</code>.
   * @alias module:model/SmartSectionAnchorPosition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SmartSectionAnchorPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SmartSectionAnchorPosition} obj Optional instance to populate.
   * @return {module:model/SmartSectionAnchorPosition} The populated <code>SmartSectionAnchorPosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pageNumber')) {
        obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'Number');
      }
      if (data.hasOwnProperty('xPosition')) {
        obj['xPosition'] = ApiClient.convertToType(data['xPosition'], 'Number');
      }
      if (data.hasOwnProperty('yPosition')) {
        obj['yPosition'] = ApiClient.convertToType(data['yPosition'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Specifies the page number on which the tab is located.
   * @member {Number} pageNumber
   */
  exports.prototype['pageNumber'] = undefined;
  /**
   * This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
   * @member {Number} xPosition
   */
  exports.prototype['xPosition'] = undefined;
  /**
   * This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
   * @member {Number} yPosition
   */
  exports.prototype['yPosition'] = undefined;



  return exports;
}));


