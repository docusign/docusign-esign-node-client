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
    root.Docusign.ExternalDocumentSources = factory(root.Docusign.ApiClient, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, SettingsMetadata) {
  'use strict';


  /**
   * The ExternalDocumentSources model module.
   * @module model/ExternalDocumentSources
   */

  /**
   * Constructs a new <code>ExternalDocumentSources</code>.
   * A complex object specifying the external document sources.
   * @alias module:model/ExternalDocumentSources
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExternalDocumentSources</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalDocumentSources} obj Optional instance to populate.
   * @return {module:model/ExternalDocumentSources} The populated <code>ExternalDocumentSources</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('boxnetEnabled')) {
        obj['boxnetEnabled'] = ApiClient.convertToType(data['boxnetEnabled'], 'String');
      }
      if (data.hasOwnProperty('boxnetMetadata')) {
        obj['boxnetMetadata'] = SettingsMetadata.constructFromObject(data['boxnetMetadata']);
      }
      if (data.hasOwnProperty('dropboxEnabled')) {
        obj['dropboxEnabled'] = ApiClient.convertToType(data['dropboxEnabled'], 'String');
      }
      if (data.hasOwnProperty('dropboxMetadata')) {
        obj['dropboxMetadata'] = SettingsMetadata.constructFromObject(data['dropboxMetadata']);
      }
      if (data.hasOwnProperty('googleDriveEnabled')) {
        obj['googleDriveEnabled'] = ApiClient.convertToType(data['googleDriveEnabled'], 'String');
      }
      if (data.hasOwnProperty('googleDriveMetadata')) {
        obj['googleDriveMetadata'] = SettingsMetadata.constructFromObject(data['googleDriveMetadata']);
      }
      if (data.hasOwnProperty('oneDriveEnabled')) {
        obj['oneDriveEnabled'] = ApiClient.convertToType(data['oneDriveEnabled'], 'String');
      }
      if (data.hasOwnProperty('oneDriveMetadata')) {
        obj['oneDriveMetadata'] = SettingsMetadata.constructFromObject(data['oneDriveMetadata']);
      }
      if (data.hasOwnProperty('salesforceEnabled')) {
        obj['salesforceEnabled'] = ApiClient.convertToType(data['salesforceEnabled'], 'String');
      }
      if (data.hasOwnProperty('salesforceMetadata')) {
        obj['salesforceMetadata'] = SettingsMetadata.constructFromObject(data['salesforceMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} boxnetEnabled
   */
  exports.prototype['boxnetEnabled'] = undefined;
  /**
   * Metadata indicating whether the `boxnetEnabled` property is editable.
   * @member {module:model/SettingsMetadata} boxnetMetadata
   */
  exports.prototype['boxnetMetadata'] = undefined;
  /**
   * 
   * @member {String} dropboxEnabled
   */
  exports.prototype['dropboxEnabled'] = undefined;
  /**
   * Metadata indicating whether the `dropboxEnabled` property is editable.
   * @member {module:model/SettingsMetadata} dropboxMetadata
   */
  exports.prototype['dropboxMetadata'] = undefined;
  /**
   * 
   * @member {String} googleDriveEnabled
   */
  exports.prototype['googleDriveEnabled'] = undefined;
  /**
   * Metadata indicating whether the `googleDriveEnabled` property is editable.
   * @member {module:model/SettingsMetadata} googleDriveMetadata
   */
  exports.prototype['googleDriveMetadata'] = undefined;
  /**
   * 
   * @member {String} oneDriveEnabled
   */
  exports.prototype['oneDriveEnabled'] = undefined;
  /**
   * Metadata indicating whether the `oneDriveEnabled` property is editable.
   * @member {module:model/SettingsMetadata} oneDriveMetadata
   */
  exports.prototype['oneDriveMetadata'] = undefined;
  /**
   * 
   * @member {String} salesforceEnabled
   */
  exports.prototype['salesforceEnabled'] = undefined;
  /**
   * Metadata indicating whether the `salesforceEnabled` property is editable.
   * @member {module:model/SettingsMetadata} salesforceMetadata
   */
  exports.prototype['salesforceMetadata'] = undefined;



  return exports;
}));


