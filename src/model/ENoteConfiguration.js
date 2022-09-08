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
    root.Docusign.ENoteConfiguration = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ENoteConfiguration model module.
   * @module model/ENoteConfiguration
   */

  /**
   * Constructs a new <code>ENoteConfiguration</code>.
   * This object contains information used to configure [eNote](https://www.docusign.com/products/enote) functionality. To use eNote, the Allow eNote for eOriginal account plan item must be on, and the Connect configuration for eOriginal must be set correctly.
   * @alias module:model/ENoteConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ENoteConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ENoteConfiguration} obj Optional instance to populate.
   * @return {module:model/ENoteConfiguration} The populated <code>ENoteConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
      }
      if (data.hasOwnProperty('connectConfigured')) {
        obj['connectConfigured'] = ApiClient.convertToType(data['connectConfigured'], 'String');
      }
      if (data.hasOwnProperty('eNoteConfigured')) {
        obj['eNoteConfigured'] = ApiClient.convertToType(data['eNoteConfigured'], 'String');
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} apiKey
   */
  exports.prototype['apiKey'] = undefined;
  /**
   * 
   * @member {String} connectConfigured
   */
  exports.prototype['connectConfigured'] = undefined;
  /**
   * 
   * @member {String} eNoteConfigured
   */
  exports.prototype['eNoteConfigured'] = undefined;
  /**
   * 
   * @member {String} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


