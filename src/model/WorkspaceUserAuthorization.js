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
    define(['ApiClient', 'model/ErrorDetails', 'model/WorkspaceUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./WorkspaceUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkspaceUserAuthorization = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.WorkspaceUser);
  }
}(this, function(ApiClient, ErrorDetails, WorkspaceUser) {
  'use strict';


  /**
   * The WorkspaceUserAuthorization model module.
   * @module model/WorkspaceUserAuthorization
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>WorkspaceUserAuthorization</code>.
   * Provides properties that describe user authorization to a workspace.
   * @alias module:model/WorkspaceUserAuthorization
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkspaceUserAuthorization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceUserAuthorization} obj Optional instance to populate.
   * @return {module:model/WorkspaceUserAuthorization} The populated <code>WorkspaceUserAuthorization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canDelete')) {
        obj['canDelete'] = ApiClient.convertToType(data['canDelete'], 'String');
      }
      if (data.hasOwnProperty('canMove')) {
        obj['canMove'] = ApiClient.convertToType(data['canMove'], 'String');
      }
      if (data.hasOwnProperty('canTransact')) {
        obj['canTransact'] = ApiClient.convertToType(data['canTransact'], 'String');
      }
      if (data.hasOwnProperty('canView')) {
        obj['canView'] = ApiClient.convertToType(data['canView'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('createdById')) {
        obj['createdById'] = ApiClient.convertToType(data['createdById'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
      }
      if (data.hasOwnProperty('modifiedById')) {
        obj['modifiedById'] = ApiClient.convertToType(data['modifiedById'], 'String');
      }
      if (data.hasOwnProperty('workspaceUserId')) {
        obj['workspaceUserId'] = ApiClient.convertToType(data['workspaceUserId'], 'String');
      }
      if (data.hasOwnProperty('workspaceUserInformation')) {
        obj['workspaceUserInformation'] = WorkspaceUser.constructFromObject(data['workspaceUserInformation']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} canDelete
   */
  exports.prototype['canDelete'] = undefined;
  /**
   * 
   * @member {String} canMove
   */
  exports.prototype['canMove'] = undefined;
  /**
   * 
   * @member {String} canTransact
   */
  exports.prototype['canTransact'] = undefined;
  /**
   * 
   * @member {String} canView
   */
  exports.prototype['canView'] = undefined;
  /**
   * The UTC DateTime when the workspace user authorization was created.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * 
   * @member {String} createdById
   */
  exports.prototype['createdById'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * 
   * @member {String} modifiedById
   */
  exports.prototype['modifiedById'] = undefined;
  /**
   * 
   * @member {String} workspaceUserId
   */
  exports.prototype['workspaceUserId'] = undefined;
  /**
   * @member {module:model/WorkspaceUser} workspaceUserInformation
   */
  exports.prototype['workspaceUserInformation'] = undefined;



  return exports;
}));


