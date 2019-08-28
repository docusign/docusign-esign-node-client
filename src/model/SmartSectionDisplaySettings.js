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
    define(['ApiClient', 'model/SmartSectionCollapsibleDisplaySettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SmartSectionCollapsibleDisplaySettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SmartSectionDisplaySettings = factory(root.Docusign.ApiClient, root.Docusign.SmartSectionCollapsibleDisplaySettings);
  }
}(this, function(ApiClient, SmartSectionCollapsibleDisplaySettings) {
  'use strict';


  /**
   * The SmartSectionDisplaySettings model module.
   * @module model/SmartSectionDisplaySettings
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SmartSectionDisplaySettings</code>.
   * @alias module:model/SmartSectionDisplaySettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SmartSectionDisplaySettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SmartSectionDisplaySettings} obj Optional instance to populate.
   * @return {module:model/SmartSectionDisplaySettings} The populated <code>SmartSectionDisplaySettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cellStyle')) {
        obj['cellStyle'] = ApiClient.convertToType(data['cellStyle'], 'String');
      }
      if (data.hasOwnProperty('collapsibleSettings')) {
        obj['collapsibleSettings'] = SmartSectionCollapsibleDisplaySettings.constructFromObject(data['collapsibleSettings']);
      }
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
      if (data.hasOwnProperty('displayLabel')) {
        obj['displayLabel'] = ApiClient.convertToType(data['displayLabel'], 'String');
      }
      if (data.hasOwnProperty('displayOrder')) {
        obj['displayOrder'] = ApiClient.convertToType(data['displayOrder'], 'Number');
      }
      if (data.hasOwnProperty('displayPageNumber')) {
        obj['displayPageNumber'] = ApiClient.convertToType(data['displayPageNumber'], 'Number');
      }
      if (data.hasOwnProperty('hideLabelWhenOpened')) {
        obj['hideLabelWhenOpened'] = ApiClient.convertToType(data['hideLabelWhenOpened'], 'Boolean');
      }
      if (data.hasOwnProperty('inlineOuterStyle')) {
        obj['inlineOuterStyle'] = ApiClient.convertToType(data['inlineOuterStyle'], 'String');
      }
      if (data.hasOwnProperty('labelWhenOpened')) {
        obj['labelWhenOpened'] = ApiClient.convertToType(data['labelWhenOpened'], 'String');
      }
      if (data.hasOwnProperty('scrollToTopWhenOpened')) {
        obj['scrollToTopWhenOpened'] = ApiClient.convertToType(data['scrollToTopWhenOpened'], 'Boolean');
      }
      if (data.hasOwnProperty('tableStyle')) {
        obj['tableStyle'] = ApiClient.convertToType(data['tableStyle'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} cellStyle
   */
  exports.prototype['cellStyle'] = undefined;
  /**
   * @member {module:model/SmartSectionCollapsibleDisplaySettings} collapsibleSettings
   */
  exports.prototype['collapsibleSettings'] = undefined;
  /**
   * 
   * @member {String} display
   */
  exports.prototype['display'] = undefined;
  /**
   * 
   * @member {String} displayLabel
   */
  exports.prototype['displayLabel'] = undefined;
  /**
   * 
   * @member {Number} displayOrder
   */
  exports.prototype['displayOrder'] = undefined;
  /**
   * 
   * @member {Number} displayPageNumber
   */
  exports.prototype['displayPageNumber'] = undefined;
  /**
   * 
   * @member {Boolean} hideLabelWhenOpened
   */
  exports.prototype['hideLabelWhenOpened'] = undefined;
  /**
   * 
   * @member {String} inlineOuterStyle
   */
  exports.prototype['inlineOuterStyle'] = undefined;
  /**
   * 
   * @member {String} labelWhenOpened
   */
  exports.prototype['labelWhenOpened'] = undefined;
  /**
   * 
   * @member {Boolean} scrollToTopWhenOpened
   */
  exports.prototype['scrollToTopWhenOpened'] = undefined;
  /**
   * 
   * @member {String} tableStyle
   */
  exports.prototype['tableStyle'] = undefined;



  return exports;
}));


