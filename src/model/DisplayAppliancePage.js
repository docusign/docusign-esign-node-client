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
    root.Docusign.DisplayAppliancePage = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisplayAppliancePage model module.
   * @module model/DisplayAppliancePage
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayAppliancePage</code>.
   * @alias module:model/DisplayAppliancePage
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayAppliancePage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayAppliancePage} obj Optional instance to populate.
   * @return {module:model/DisplayAppliancePage} The populated <code>DisplayAppliancePage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentName')) {
        obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
      }
      if (data.hasOwnProperty('externalDocumentId')) {
        obj['externalDocumentId'] = ApiClient.convertToType(data['externalDocumentId'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('isFirstPage')) {
        obj['isFirstPage'] = ApiClient.convertToType(data['isFirstPage'], 'Boolean');
      }
      if (data.hasOwnProperty('pageId')) {
        obj['pageId'] = ApiClient.convertToType(data['pageId'], 'String');
      }
      if (data.hasOwnProperty('pageNo')) {
        obj['pageNo'] = ApiClient.convertToType(data['pageNo'], 'Number');
      }
      if (data.hasOwnProperty('pageStatus')) {
        obj['pageStatus'] = ApiClient.convertToType(data['pageStatus'], 'String');
      }
      if (data.hasOwnProperty('pageType')) {
        obj['pageType'] = ApiClient.convertToType(data['pageType'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
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
   * @member {String} documentName
   */
  exports.prototype['documentName'] = undefined;
  /**
   * 
   * @member {String} externalDocumentId
   */
  exports.prototype['externalDocumentId'] = undefined;
  /**
   * Height of the tab in pixels.
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * 
   * @member {Boolean} isFirstPage
   */
  exports.prototype['isFirstPage'] = undefined;
  /**
   * 
   * @member {String} pageId
   */
  exports.prototype['pageId'] = undefined;
  /**
   * 
   * @member {Number} pageNo
   */
  exports.prototype['pageNo'] = undefined;
  /**
   * 
   * @member {String} pageStatus
   */
  exports.prototype['pageStatus'] = undefined;
  /**
   * 
   * @member {String} pageType
   */
  exports.prototype['pageType'] = undefined;
  /**
   * Width of the tab in pixels.
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


