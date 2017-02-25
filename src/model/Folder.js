/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorDetails', 'model/Filter', 'model/Folder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./Filter'), require('./Folder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Folder = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.Filter, root.Docusign.Folder);
  }
}(this, function(ApiClient, ErrorDetails, Filter, Folder) {
  'use strict';


  /**
   * The Folder model module.
   * @module model/Folder
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Folder</code>.
   * @alias module:model/Folder
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Folder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Folder} obj Optional instance to populate.
   * @return {module:model/Folder} The populated <code>Folder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = Filter.constructFromObject(data['filter']);
      }
      if (data.hasOwnProperty('folderId')) {
        obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [Folder]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ownerEmail')) {
        obj['ownerEmail'] = ApiClient.convertToType(data['ownerEmail'], 'String');
      }
      if (data.hasOwnProperty('ownerUserId')) {
        obj['ownerUserId'] = ApiClient.convertToType(data['ownerUserId'], 'String');
      }
      if (data.hasOwnProperty('ownerUserName')) {
        obj['ownerUserName'] = ApiClient.convertToType(data['ownerUserName'], 'String');
      }
      if (data.hasOwnProperty('parentFolderId')) {
        obj['parentFolderId'] = ApiClient.convertToType(data['parentFolderId'], 'String');
      }
      if (data.hasOwnProperty('parentFolderUri')) {
        obj['parentFolderUri'] = ApiClient.convertToType(data['parentFolderUri'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * @member {module:model/Filter} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * 
   * @member {String} folderId
   */
  exports.prototype['folderId'] = undefined;
  /**
   * A collection of folder objects returned in a response.
   * @member {Array.<module:model/Folder>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} ownerEmail
   */
  exports.prototype['ownerEmail'] = undefined;
  /**
   * 
   * @member {String} ownerUserId
   */
  exports.prototype['ownerUserId'] = undefined;
  /**
   * 
   * @member {String} ownerUserName
   */
  exports.prototype['ownerUserName'] = undefined;
  /**
   * 
   * @member {String} parentFolderId
   */
  exports.prototype['parentFolderId'] = undefined;
  /**
   * 
   * @member {String} parentFolderUri
   */
  exports.prototype['parentFolderUri'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


