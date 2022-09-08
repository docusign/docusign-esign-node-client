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
    define(['ApiClient', 'model/WorkspaceSettings', 'model/WorkspaceUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkspaceSettings'), require('./WorkspaceUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Workspace = factory(root.Docusign.ApiClient, root.Docusign.WorkspaceSettings, root.Docusign.WorkspaceUser);
  }
}(this, function(ApiClient, WorkspaceSettings, WorkspaceUser) {
  'use strict';


  /**
   * The Workspace model module.
   * @module model/Workspace
   */

  /**
   * Constructs a new <code>Workspace</code>.
   * Provides properties that describe a workspace.
   * @alias module:model/Workspace
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Workspace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Workspace} obj Optional instance to populate.
   * @return {module:model/Workspace} The populated <code>Workspace</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billableAccountId')) {
        obj['billableAccountId'] = ApiClient.convertToType(data['billableAccountId'], 'String');
      }
      if (data.hasOwnProperty('callerInformation')) {
        obj['callerInformation'] = WorkspaceUser.constructFromObject(data['callerInformation']);
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('createdByInformation')) {
        obj['createdByInformation'] = WorkspaceUser.constructFromObject(data['createdByInformation']);
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedByInformation')) {
        obj['lastModifiedByInformation'] = WorkspaceUser.constructFromObject(data['lastModifiedByInformation']);
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = WorkspaceSettings.constructFromObject(data['settings']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('workspaceBaseUrl')) {
        obj['workspaceBaseUrl'] = ApiClient.convertToType(data['workspaceBaseUrl'], 'String');
      }
      if (data.hasOwnProperty('workspaceDescription')) {
        obj['workspaceDescription'] = ApiClient.convertToType(data['workspaceDescription'], 'String');
      }
      if (data.hasOwnProperty('workspaceId')) {
        obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
      }
      if (data.hasOwnProperty('workspaceName')) {
        obj['workspaceName'] = ApiClient.convertToType(data['workspaceName'], 'String');
      }
      if (data.hasOwnProperty('workspaceUri')) {
        obj['workspaceUri'] = ApiClient.convertToType(data['workspaceUri'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} billableAccountId
   */
  exports.prototype['billableAccountId'] = undefined;
  /**
   * 
   * @member {module:model/WorkspaceUser} callerInformation
   */
  exports.prototype['callerInformation'] = undefined;
  /**
   * 
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Details about the user who created the workspace.
   * @member {module:model/WorkspaceUser} createdByInformation
   */
  exports.prototype['createdByInformation'] = undefined;
  /**
   * Utc date and time the comment was last updated (can only be done by creator.)
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * Details about the user who last modified the workspace.
   * @member {module:model/WorkspaceUser} lastModifiedByInformation
   */
  exports.prototype['lastModifiedByInformation'] = undefined;
  /**
   * Information about the settings for the workspace.
   * @member {module:model/WorkspaceSettings} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The relative URL that may be used to access the workspace.
   * @member {String} workspaceBaseUrl
   */
  exports.prototype['workspaceBaseUrl'] = undefined;
  /**
   * Text describing the purpose of the workspace.
   * @member {String} workspaceDescription
   */
  exports.prototype['workspaceDescription'] = undefined;
  /**
   * The id of the workspace, always populated.
   * @member {String} workspaceId
   */
  exports.prototype['workspaceId'] = undefined;
  /**
   * The name of the workspace.
   * @member {String} workspaceName
   */
  exports.prototype['workspaceName'] = undefined;
  /**
   * The relative URI that may be used to access the workspace.
   * @member {String} workspaceUri
   */
  exports.prototype['workspaceUri'] = undefined;



  return exports;
}));


