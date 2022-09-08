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
    define(['ApiClient', 'model/Page', 'model/WorkspaceUser', 'model/WorkspaceUserAuthorization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Page'), require('./WorkspaceUser'), require('./WorkspaceUserAuthorization'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkspaceItem = factory(root.Docusign.ApiClient, root.Docusign.Page, root.Docusign.WorkspaceUser, root.Docusign.WorkspaceUserAuthorization);
  }
}(this, function(ApiClient, Page, WorkspaceUser, WorkspaceUserAuthorization) {
  'use strict';


  /**
   * The WorkspaceItem model module.
   * @module model/WorkspaceItem
   */

  /**
   * Constructs a new <code>WorkspaceItem</code>.
   * A workspaceItem (file type only) representing the file. This property is only returned in response to file specific GET call.
   * @alias module:model/WorkspaceItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkspaceItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceItem} obj Optional instance to populate.
   * @return {module:model/WorkspaceItem} The populated <code>WorkspaceItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('callerAuthorization')) {
        obj['callerAuthorization'] = WorkspaceUserAuthorization.constructFromObject(data['callerAuthorization']);
      }
      if (data.hasOwnProperty('contentType')) {
        obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('createdById')) {
        obj['createdById'] = ApiClient.convertToType(data['createdById'], 'String');
      }
      if (data.hasOwnProperty('createdByInformation')) {
        obj['createdByInformation'] = WorkspaceUser.constructFromObject(data['createdByInformation']);
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
      }
      if (data.hasOwnProperty('fileSize')) {
        obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'String');
      }
      if (data.hasOwnProperty('fileUri')) {
        obj['fileUri'] = ApiClient.convertToType(data['fileUri'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('isPublic')) {
        obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedById')) {
        obj['lastModifiedById'] = ApiClient.convertToType(data['lastModifiedById'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedByInformation')) {
        obj['lastModifiedByInformation'] = WorkspaceUser.constructFromObject(data['lastModifiedByInformation']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('pageCount')) {
        obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'String');
      }
      if (data.hasOwnProperty('parentFolderId')) {
        obj['parentFolderId'] = ApiClient.convertToType(data['parentFolderId'], 'String');
      }
      if (data.hasOwnProperty('parentFolderUri')) {
        obj['parentFolderUri'] = ApiClient.convertToType(data['parentFolderUri'], 'String');
      }
      if (data.hasOwnProperty('sha256')) {
        obj['sha256'] = ApiClient.convertToType(data['sha256'], 'String');
      }
      if (data.hasOwnProperty('thumbHeight')) {
        obj['thumbHeight'] = ApiClient.convertToType(data['thumbHeight'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = Page.constructFromObject(data['thumbnail']);
      }
      if (data.hasOwnProperty('thumbWidth')) {
        obj['thumbWidth'] = ApiClient.convertToType(data['thumbWidth'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('userAuthorization')) {
        obj['userAuthorization'] = WorkspaceUserAuthorization.constructFromObject(data['userAuthorization']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/WorkspaceUserAuthorization} callerAuthorization
   */
  exports.prototype['callerAuthorization'] = undefined;
  /**
   * 
   * @member {String} contentType
   */
  exports.prototype['contentType'] = undefined;
  /**
   * The UTC DateTime when the workspace item was created.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * 
   * @member {String} createdById
   */
  exports.prototype['createdById'] = undefined;
  /**
   * Details about the user who created the workspace item.
   * @member {module:model/WorkspaceUser} createdByInformation
   */
  exports.prototype['createdByInformation'] = undefined;
  /**
   * 
   * @member {String} extension
   */
  exports.prototype['extension'] = undefined;
  /**
   * 
   * @member {String} fileSize
   */
  exports.prototype['fileSize'] = undefined;
  /**
   * 
   * @member {String} fileUri
   */
  exports.prototype['fileUri'] = undefined;
  /**
   * 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   *  If true, this supersedes need for bit mask permission with workspaceUserAuthorization
   * @member {String} isPublic
   */
  exports.prototype['isPublic'] = undefined;
  /**
   * 
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * Utc date and time the comment was last updated (can only be done by creator)
   * @member {String} lastModifiedById
   */
  exports.prototype['lastModifiedById'] = undefined;
  /**
   * Details about the user who last modified the workspace item.
   * @member {module:model/WorkspaceUser} lastModifiedByInformation
   */
  exports.prototype['lastModifiedByInformation'] = undefined;
  /**
   * A simple string description of the item, such as a file name or a folder name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * The ID of the parent folder. This is the GUID of the parent folder, or the special value 'root' for the root folder.
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
   * @member {String} sha256
   */
  exports.prototype['sha256'] = undefined;
  /**
   * 
   * @member {String} thumbHeight
   */
  exports.prototype['thumbHeight'] = undefined;
  /**
   * 
   * @member {module:model/Page} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * 
   * @member {String} thumbWidth
   */
  exports.prototype['thumbWidth'] = undefined;
  /**
   * The type of the workspace item. Valid values are file, folder.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * 
   * @member {module:model/WorkspaceUserAuthorization} userAuthorization
   */
  exports.prototype['userAuthorization'] = undefined;



  return exports;
}));


