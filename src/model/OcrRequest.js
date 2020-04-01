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
    root.Docusign.OcrRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The OcrRequest model module.
   * @module model/OcrRequest
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>OcrRequest</code>.
   * @alias module:model/OcrRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OcrRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OcrRequest} obj Optional instance to populate.
   * @return {module:model/OcrRequest} The populated <code>OcrRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ocrLanguage')) {
        obj['ocrLanguage'] = ApiClient.convertToType(data['ocrLanguage'], 'String');
      }
      if (data.hasOwnProperty('pageSelection')) {
        obj['pageSelection'] = ApiClient.convertToType(data['pageSelection'], 'String');
      }
      if (data.hasOwnProperty('setPageOrientation')) {
        obj['setPageOrientation'] = ApiClient.convertToType(data['setPageOrientation'], 'String');
      }
      if (data.hasOwnProperty('showFrames')) {
        obj['showFrames'] = ApiClient.convertToType(data['showFrames'], 'String');
      }
      if (data.hasOwnProperty('showText')) {
        obj['showText'] = ApiClient.convertToType(data['showText'], 'String');
      }
      if (data.hasOwnProperty('skipPagesHavingExistingExtractableText')) {
        obj['skipPagesHavingExistingExtractableText'] = ApiClient.convertToType(data['skipPagesHavingExistingExtractableText'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} ocrLanguage
   */
  exports.prototype['ocrLanguage'] = undefined;
  /**
   * 
   * @member {String} pageSelection
   */
  exports.prototype['pageSelection'] = undefined;
  /**
   * 
   * @member {String} setPageOrientation
   */
  exports.prototype['setPageOrientation'] = undefined;
  /**
   * 
   * @member {String} showFrames
   */
  exports.prototype['showFrames'] = undefined;
  /**
   * 
   * @member {String} showText
   */
  exports.prototype['showText'] = undefined;
  /**
   * 
   * @member {String} skipPagesHavingExistingExtractableText
   */
  exports.prototype['skipPagesHavingExistingExtractableText'] = undefined;



  return exports;
}));


