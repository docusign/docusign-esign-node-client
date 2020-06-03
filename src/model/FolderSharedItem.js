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
    define(['ApiClient', 'model/ErrorDetails', 'model/MemberGroupSharedItem', 'model/UserInfo', 'model/UserSharedItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./MemberGroupSharedItem'), require('./UserInfo'), require('./UserSharedItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FolderSharedItem = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.MemberGroupSharedItem, root.Docusign.UserInfo, root.Docusign.UserSharedItem);
  }
}(this, function(ApiClient, ErrorDetails, MemberGroupSharedItem, UserInfo, UserSharedItem) {
  'use strict';


  /**
   * The FolderSharedItem model module.
   * @module model/FolderSharedItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>FolderSharedItem</code>.
   * @alias module:model/FolderSharedItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FolderSharedItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FolderSharedItem} obj Optional instance to populate.
   * @return {module:model/FolderSharedItem} The populated <code>FolderSharedItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('folderId')) {
        obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
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
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('sharedGroups')) {
        obj['sharedGroups'] = ApiClient.convertToType(data['sharedGroups'], [MemberGroupSharedItem]);
      }
      if (data.hasOwnProperty('sharedUsers')) {
        obj['sharedUsers'] = ApiClient.convertToType(data['sharedUsers'], [UserSharedItem]);
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserInfo.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} folderId
   */
  exports.prototype['folderId'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
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
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * 
   * @member {Array.<module:model/MemberGroupSharedItem>} sharedGroups
   */
  exports.prototype['sharedGroups'] = undefined;
  /**
   * 
   * @member {Array.<module:model/UserSharedItem>} sharedUsers
   */
  exports.prototype['sharedUsers'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * @member {module:model/UserInfo} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


