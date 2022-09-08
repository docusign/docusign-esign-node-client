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
    define(['ApiClient', 'model/DocumentHtmlDisplayAnchor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentHtmlDisplayAnchor'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocumentHtmlDefinition = factory(root.Docusign.ApiClient, root.Docusign.DocumentHtmlDisplayAnchor);
  }
}(this, function(ApiClient, DocumentHtmlDisplayAnchor) {
  'use strict';


  /**
   * The DocumentHtmlDefinition model module.
   * @module model/DocumentHtmlDefinition
   */

  /**
   * Constructs a new <code>DocumentHtmlDefinition</code>.
   * Holds the properties that define how to generate the responsive-formatted HTML for the document. See [Responsive signing](/docs/esign-rest-api/esign101/concepts/responsive/) in the [eSignature concepts guide](/docs/esign-rest-api/esign101/concepts/).
   * @alias module:model/DocumentHtmlDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentHtmlDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentHtmlDefinition} obj Optional instance to populate.
   * @return {module:model/DocumentHtmlDefinition} The populated <code>DocumentHtmlDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayAnchorPrefix')) {
        obj['displayAnchorPrefix'] = ApiClient.convertToType(data['displayAnchorPrefix'], 'String');
      }
      if (data.hasOwnProperty('displayAnchors')) {
        obj['displayAnchors'] = ApiClient.convertToType(data['displayAnchors'], [DocumentHtmlDisplayAnchor]);
      }
      if (data.hasOwnProperty('displayOrder')) {
        obj['displayOrder'] = ApiClient.convertToType(data['displayOrder'], 'String');
      }
      if (data.hasOwnProperty('displayPageNumber')) {
        obj['displayPageNumber'] = ApiClient.convertToType(data['displayPageNumber'], 'String');
      }
      if (data.hasOwnProperty('documentGuid')) {
        obj['documentGuid'] = ApiClient.convertToType(data['documentGuid'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('headerLabel')) {
        obj['headerLabel'] = ApiClient.convertToType(data['headerLabel'], 'String');
      }
      if (data.hasOwnProperty('maxScreenWidth')) {
        obj['maxScreenWidth'] = ApiClient.convertToType(data['maxScreenWidth'], 'String');
      }
      if (data.hasOwnProperty('removeEmptyTags')) {
        obj['removeEmptyTags'] = ApiClient.convertToType(data['removeEmptyTags'], 'String');
      }
      if (data.hasOwnProperty('showMobileOptimizedToggle')) {
        obj['showMobileOptimizedToggle'] = ApiClient.convertToType(data['showMobileOptimizedToggle'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} displayAnchorPrefix
   */
  exports.prototype['displayAnchorPrefix'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocumentHtmlDisplayAnchor>} displayAnchors
   */
  exports.prototype['displayAnchors'] = undefined;
  /**
   * 
   * @member {String} displayOrder
   */
  exports.prototype['displayOrder'] = undefined;
  /**
   * 
   * @member {String} displayPageNumber
   */
  exports.prototype['displayPageNumber'] = undefined;
  /**
   * 
   * @member {String} documentGuid
   */
  exports.prototype['documentGuid'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} headerLabel
   */
  exports.prototype['headerLabel'] = undefined;
  /**
   * 
   * @member {String} maxScreenWidth
   */
  exports.prototype['maxScreenWidth'] = undefined;
  /**
   * 
   * @member {String} removeEmptyTags
   */
  exports.prototype['removeEmptyTags'] = undefined;
  /**
   * 
   * @member {String} showMobileOptimizedToggle
   */
  exports.prototype['showMobileOptimizedToggle'] = undefined;
  /**
   * 
   * @member {String} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


