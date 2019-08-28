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
    root.Docusign.SmartSectionCollapsibleDisplaySettings = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SmartSectionCollapsibleDisplaySettings model module.
   * @module model/SmartSectionCollapsibleDisplaySettings
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SmartSectionCollapsibleDisplaySettings</code>.
   * @alias module:model/SmartSectionCollapsibleDisplaySettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SmartSectionCollapsibleDisplaySettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SmartSectionCollapsibleDisplaySettings} obj Optional instance to populate.
   * @return {module:model/SmartSectionCollapsibleDisplaySettings} The populated <code>SmartSectionCollapsibleDisplaySettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('arrowClosed')) {
        obj['arrowClosed'] = ApiClient.convertToType(data['arrowClosed'], 'String');
      }
      if (data.hasOwnProperty('arrowColor')) {
        obj['arrowColor'] = ApiClient.convertToType(data['arrowColor'], 'String');
      }
      if (data.hasOwnProperty('arrowLocation')) {
        obj['arrowLocation'] = ApiClient.convertToType(data['arrowLocation'], 'String');
      }
      if (data.hasOwnProperty('arrowOpen')) {
        obj['arrowOpen'] = ApiClient.convertToType(data['arrowOpen'], 'String');
      }
      if (data.hasOwnProperty('arrowSize')) {
        obj['arrowSize'] = ApiClient.convertToType(data['arrowSize'], 'String');
      }
      if (data.hasOwnProperty('arrowStyle')) {
        obj['arrowStyle'] = ApiClient.convertToType(data['arrowStyle'], 'String');
      }
      if (data.hasOwnProperty('containerStyle')) {
        obj['containerStyle'] = ApiClient.convertToType(data['containerStyle'], 'String');
      }
      if (data.hasOwnProperty('labelStyle')) {
        obj['labelStyle'] = ApiClient.convertToType(data['labelStyle'], 'String');
      }
      if (data.hasOwnProperty('onlyArrowIsClickable')) {
        obj['onlyArrowIsClickable'] = ApiClient.convertToType(data['onlyArrowIsClickable'], 'Boolean');
      }
      if (data.hasOwnProperty('outerLabelAndArrowStyle')) {
        obj['outerLabelAndArrowStyle'] = ApiClient.convertToType(data['outerLabelAndArrowStyle'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} arrowClosed
   */
  exports.prototype['arrowClosed'] = undefined;
  /**
   * 
   * @member {String} arrowColor
   */
  exports.prototype['arrowColor'] = undefined;
  /**
   * 
   * @member {String} arrowLocation
   */
  exports.prototype['arrowLocation'] = undefined;
  /**
   * 
   * @member {String} arrowOpen
   */
  exports.prototype['arrowOpen'] = undefined;
  /**
   * 
   * @member {String} arrowSize
   */
  exports.prototype['arrowSize'] = undefined;
  /**
   * 
   * @member {String} arrowStyle
   */
  exports.prototype['arrowStyle'] = undefined;
  /**
   * 
   * @member {String} containerStyle
   */
  exports.prototype['containerStyle'] = undefined;
  /**
   * 
   * @member {String} labelStyle
   */
  exports.prototype['labelStyle'] = undefined;
  /**
   * 
   * @member {Boolean} onlyArrowIsClickable
   */
  exports.prototype['onlyArrowIsClickable'] = undefined;
  /**
   * 
   * @member {String} outerLabelAndArrowStyle
   */
  exports.prototype['outerLabelAndArrowStyle'] = undefined;



  return exports;
}));


