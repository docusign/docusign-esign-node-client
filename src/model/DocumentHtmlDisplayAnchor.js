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
    define(['ApiClient', 'model/DocumentHtmlDisplaySettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentHtmlDisplaySettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocumentHtmlDisplayAnchor = factory(root.Docusign.ApiClient, root.Docusign.DocumentHtmlDisplaySettings);
  }
}(this, function(ApiClient, DocumentHtmlDisplaySettings) {
  'use strict';


  /**
   * The DocumentHtmlDisplayAnchor model module.
   * @module model/DocumentHtmlDisplayAnchor
   */

  /**
   * Constructs a new <code>DocumentHtmlDisplayAnchor</code>.
   * @alias module:model/DocumentHtmlDisplayAnchor
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentHtmlDisplayAnchor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentHtmlDisplayAnchor} obj Optional instance to populate.
   * @return {module:model/DocumentHtmlDisplayAnchor} The populated <code>DocumentHtmlDisplayAnchor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('caseSensitive')) {
        obj['caseSensitive'] = ApiClient.convertToType(data['caseSensitive'], 'Boolean');
      }
      if (data.hasOwnProperty('displaySettings')) {
        obj['displaySettings'] = DocumentHtmlDisplaySettings.constructFromObject(data['displaySettings']);
      }
      if (data.hasOwnProperty('endAnchor')) {
        obj['endAnchor'] = ApiClient.convertToType(data['endAnchor'], 'String');
      }
      if (data.hasOwnProperty('removeEndAnchor')) {
        obj['removeEndAnchor'] = ApiClient.convertToType(data['removeEndAnchor'], 'Boolean');
      }
      if (data.hasOwnProperty('removeStartAnchor')) {
        obj['removeStartAnchor'] = ApiClient.convertToType(data['removeStartAnchor'], 'Boolean');
      }
      if (data.hasOwnProperty('startAnchor')) {
        obj['startAnchor'] = ApiClient.convertToType(data['startAnchor'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Boolean} caseSensitive
   */
  exports.prototype['caseSensitive'] = undefined;
  /**
   * This object defines how the HTML section inside the `startAnchor` and `endAnchor` displays.
   * @member {module:model/DocumentHtmlDisplaySettings} displaySettings
   */
  exports.prototype['displaySettings'] = undefined;
  /**
   * 
   * @member {String} endAnchor
   */
  exports.prototype['endAnchor'] = undefined;
  /**
   * 
   * @member {Boolean} removeEndAnchor
   */
  exports.prototype['removeEndAnchor'] = undefined;
  /**
   * 
   * @member {Boolean} removeStartAnchor
   */
  exports.prototype['removeStartAnchor'] = undefined;
  /**
   * 
   * @member {String} startAnchor
   */
  exports.prototype['startAnchor'] = undefined;



  return exports;
}));


