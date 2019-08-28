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
    define(['ApiClient', 'model/WorkspaceItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkspaceItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkspaceFolderContents = factory(root.Docusign.ApiClient, root.Docusign.WorkspaceItem);
  }
}(this, function(ApiClient, WorkspaceItem) {
  'use strict';


  /**
   * The WorkspaceFolderContents model module.
   * @module model/WorkspaceFolderContents
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>WorkspaceFolderContents</code>.
   * Provides properties that describe the contents of a workspace folder.
   * @alias module:model/WorkspaceFolderContents
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkspaceFolderContents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceFolderContents} obj Optional instance to populate.
   * @return {module:model/WorkspaceFolderContents} The populated <code>WorkspaceFolderContents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], 'String');
      }
      if (data.hasOwnProperty('folder')) {
        obj['folder'] = WorkspaceItem.constructFromObject(data['folder']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [WorkspaceItem]);
      }
      if (data.hasOwnProperty('parentFolders')) {
        obj['parentFolders'] = ApiClient.convertToType(data['parentFolders'], [WorkspaceItem]);
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], 'String');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'String');
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], 'String');
      }
      if (data.hasOwnProperty('workspaceId')) {
        obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The last position in the result set. 
   * @member {String} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * @member {module:model/WorkspaceItem} folder
   */
  exports.prototype['folder'] = undefined;
  /**
   * 
   * @member {Array.<module:model/WorkspaceItem>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * 
   * @member {Array.<module:model/WorkspaceItem>} parentFolders
   */
  exports.prototype['parentFolders'] = undefined;
  /**
   * The number of results returned in this response. 
   * @member {String} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * Starting position of the current result set.
   * @member {String} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
   * @member {String} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;
  /**
   * The id of the workspace, always populated.
   * @member {String} workspaceId
   */
  exports.prototype['workspaceId'] = undefined;



  return exports;
}));


