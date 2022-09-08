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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Page = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The Page model module.
   * @module model/Page
   */

  /**
   * Constructs a new <code>Page</code>.
   * Description of a page of a document.
   * @alias module:model/Page
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Page} obj Optional instance to populate.
   * @return {module:model/Page} The populated <code>Page</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dpi')) {
        obj['dpi'] = ApiClient.convertToType(data['dpi'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'String');
      }
      if (data.hasOwnProperty('imageBytes')) {
        obj['imageBytes'] = ApiClient.convertToType(data['imageBytes'], 'String');
      }
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('pageId')) {
        obj['pageId'] = ApiClient.convertToType(data['pageId'], 'String');
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'String');
      }
    }
    return obj;
  }

  /**
   * The number of dots per inch used for the page image.
   * @member {String} dpi
   */
  exports.prototype['dpi'] = undefined;
  /**
   * If an error occurs, this property describes the error.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Height of the tab in pixels.
   * @member {String} height
   */
  exports.prototype['height'] = undefined;
  /**
   * 
   * @member {String} imageBytes
   */
  exports.prototype['imageBytes'] = undefined;
  /**
   * 
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;
  /**
   * 
   * @member {String} pageId
   */
  exports.prototype['pageId'] = undefined;
  /**
   * 
   * @member {String} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * Width of the tab in pixels.
   * @member {String} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


