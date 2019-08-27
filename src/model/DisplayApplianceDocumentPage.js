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
    root.Docusign.DisplayApplianceDocumentPage = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisplayApplianceDocumentPage model module.
   * @module model/DisplayApplianceDocumentPage
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DisplayApplianceDocumentPage</code>.
   * @alias module:model/DisplayApplianceDocumentPage
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisplayApplianceDocumentPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisplayApplianceDocumentPage} obj Optional instance to populate.
   * @return {module:model/DisplayApplianceDocumentPage} The populated <code>DisplayApplianceDocumentPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('docPageCountTotal')) {
        obj['docPageCountTotal'] = ApiClient.convertToType(data['docPageCountTotal'], 'Number');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentName')) {
        obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
      }
      if (data.hasOwnProperty('height72DPI')) {
        obj['height72DPI'] = ApiClient.convertToType(data['height72DPI'], 'Number');
      }
      if (data.hasOwnProperty('isAttachmentType')) {
        obj['isAttachmentType'] = ApiClient.convertToType(data['isAttachmentType'], 'Boolean');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('pageId')) {
        obj['pageId'] = ApiClient.convertToType(data['pageId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('width72DPI')) {
        obj['width72DPI'] = ApiClient.convertToType(data['width72DPI'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Number} docPageCountTotal
   */
  exports.prototype['docPageCountTotal'] = undefined;
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
   * @member {String} extension
   */
  exports.prototype['extension'] = undefined;
  /**
   * 
   * @member {Number} height72DPI
   */
  exports.prototype['height72DPI'] = undefined;
  /**
   * 
   * @member {Boolean} isAttachmentType
   */
  exports.prototype['isAttachmentType'] = undefined;
  /**
   * 
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * 
   * @member {String} pageId
   */
  exports.prototype['pageId'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {Number} width72DPI
   */
  exports.prototype['width72DPI'] = undefined;



  return exports;
}));


