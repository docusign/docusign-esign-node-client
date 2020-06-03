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
    define(['ApiClient', 'model/SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccessCodeFormat = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The AccessCodeFormat model module.
   * @module model/AccessCodeFormat
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccessCodeFormat</code>.
   * @alias module:model/AccessCodeFormat
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccessCodeFormat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessCodeFormat} obj Optional instance to populate.
   * @return {module:model/AccessCodeFormat} The populated <code>AccessCodeFormat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formatRequired')) {
        obj['formatRequired'] = ApiClient.convertToType(data['formatRequired'], 'String');
      }
      if (data.hasOwnProperty('formatRequiredMetadata')) {
        obj['formatRequiredMetadata'] = SettingsMetadata.constructFromObject(data['formatRequiredMetadata']);
      }
      if (data.hasOwnProperty('letterRequired')) {
        obj['letterRequired'] = ApiClient.convertToType(data['letterRequired'], 'String');
      }
      if (data.hasOwnProperty('letterRequiredMetadata')) {
        obj['letterRequiredMetadata'] = SettingsMetadata.constructFromObject(data['letterRequiredMetadata']);
      }
      if (data.hasOwnProperty('minimumLength')) {
        obj['minimumLength'] = ApiClient.convertToType(data['minimumLength'], 'String');
      }
      if (data.hasOwnProperty('minimumLengthMetadata')) {
        obj['minimumLengthMetadata'] = SettingsMetadata.constructFromObject(data['minimumLengthMetadata']);
      }
      if (data.hasOwnProperty('numberRequired')) {
        obj['numberRequired'] = ApiClient.convertToType(data['numberRequired'], 'String');
      }
      if (data.hasOwnProperty('numberRequiredMetadata')) {
        obj['numberRequiredMetadata'] = SettingsMetadata.constructFromObject(data['numberRequiredMetadata']);
      }
      if (data.hasOwnProperty('specialCharacterRequired')) {
        obj['specialCharacterRequired'] = ApiClient.convertToType(data['specialCharacterRequired'], 'String');
      }
      if (data.hasOwnProperty('specialCharacterRequiredMetadata')) {
        obj['specialCharacterRequiredMetadata'] = SettingsMetadata.constructFromObject(data['specialCharacterRequiredMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} formatRequired
   */
  exports.prototype['formatRequired'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} formatRequiredMetadata
   */
  exports.prototype['formatRequiredMetadata'] = undefined;
  /**
   * 
   * @member {String} letterRequired
   */
  exports.prototype['letterRequired'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} letterRequiredMetadata
   */
  exports.prototype['letterRequiredMetadata'] = undefined;
  /**
   * 
   * @member {String} minimumLength
   */
  exports.prototype['minimumLength'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} minimumLengthMetadata
   */
  exports.prototype['minimumLengthMetadata'] = undefined;
  /**
   * 
   * @member {String} numberRequired
   */
  exports.prototype['numberRequired'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} numberRequiredMetadata
   */
  exports.prototype['numberRequiredMetadata'] = undefined;
  /**
   * 
   * @member {String} specialCharacterRequired
   */
  exports.prototype['specialCharacterRequired'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} specialCharacterRequiredMetadata
   */
  exports.prototype['specialCharacterRequiredMetadata'] = undefined;



  return exports;
}));


