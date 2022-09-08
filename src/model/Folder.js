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
    define(['ApiClient', 'model/ErrorDetails', 'model/Filter', 'model/Folder', 'model/FolderItemV2', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./Filter'), require('./Folder'), require('./FolderItemV2'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Folder = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.Filter, root.Docusign.Folder, root.Docusign.FolderItemV2, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, ErrorDetails, Filter, Folder, FolderItemV2, UserInfo) {
  'use strict';


  /**
   * The Folder model module.
   * @module model/Folder
   */

  /**
   * Constructs a new <code>Folder</code>.
   * This object contains details about a folder.
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
      if (data.hasOwnProperty('folderItems')) {
        obj['folderItems'] = ApiClient.convertToType(data['folderItems'], [FolderItemV2]);
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [Folder]);
      }
      if (data.hasOwnProperty('hasAccess')) {
        obj['hasAccess'] = ApiClient.convertToType(data['hasAccess'], 'String');
      }
      if (data.hasOwnProperty('hasSubFolders')) {
        obj['hasSubFolders'] = ApiClient.convertToType(data['hasSubFolders'], 'String');
      }
      if (data.hasOwnProperty('itemCount')) {
        obj['itemCount'] = ApiClient.convertToType(data['itemCount'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = UserInfo.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('parentFolderId')) {
        obj['parentFolderId'] = ApiClient.convertToType(data['parentFolderId'], 'String');
      }
      if (data.hasOwnProperty('parentFolderUri')) {
        obj['parentFolderUri'] = ApiClient.convertToType(data['parentFolderUri'], 'String');
      }
      if (data.hasOwnProperty('subFolderCount')) {
        obj['subFolderCount'] = ApiClient.convertToType(data['subFolderCount'], 'String');
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
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * An object used to present a filtered view of the items in a folder.
   * @member {module:model/Filter} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * 
   * @member {String} folderId
   */
  exports.prototype['folderId'] = undefined;
  /**
   * A list of the envelopes in the specified folder or folders. 
   * @member {Array.<module:model/FolderItemV2>} folderItems
   */
  exports.prototype['folderItems'] = undefined;
  /**
   * A collection of folder objects returned in a response.
   * @member {Array.<module:model/Folder>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   * 
   * @member {String} hasAccess
   */
  exports.prototype['hasAccess'] = undefined;
  /**
   * 
   * @member {String} hasSubFolders
   */
  exports.prototype['hasSubFolders'] = undefined;
  /**
   * 
   * @member {String} itemCount
   */
  exports.prototype['itemCount'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Information about the user who owns the folder.
   * @member {module:model/UserInfo} owner
   */
  exports.prototype['owner'] = undefined;
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
   * @member {String} subFolderCount
   */
  exports.prototype['subFolderCount'] = undefined;
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


