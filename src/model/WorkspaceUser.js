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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkspaceUser = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The WorkspaceUser model module.
   * @module model/WorkspaceUser
   */

  /**
   * Constructs a new <code>WorkspaceUser</code>.
   * A workspaceUser representing the user. This property is only returned in response to user specific GET call. 
   * @alias module:model/WorkspaceUser
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkspaceUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceUser} obj Optional instance to populate.
   * @return {module:model/WorkspaceUser} The populated <code>WorkspaceUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('activeSince')) {
        obj['activeSince'] = ApiClient.convertToType(data['activeSince'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('createdById')) {
        obj['createdById'] = ApiClient.convertToType(data['createdById'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('invitationEmailBlurb')) {
        obj['invitationEmailBlurb'] = ApiClient.convertToType(data['invitationEmailBlurb'], 'String');
      }
      if (data.hasOwnProperty('invitationEmailSubject')) {
        obj['invitationEmailSubject'] = ApiClient.convertToType(data['invitationEmailSubject'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedById')) {
        obj['lastModifiedById'] = ApiClient.convertToType(data['lastModifiedById'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('workspaceId')) {
        obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
      }
      if (data.hasOwnProperty('workspaceUserBaseUrl')) {
        obj['workspaceUserBaseUrl'] = ApiClient.convertToType(data['workspaceUserBaseUrl'], 'String');
      }
      if (data.hasOwnProperty('workspaceUserId')) {
        obj['workspaceUserId'] = ApiClient.convertToType(data['workspaceUserId'], 'String');
      }
      if (data.hasOwnProperty('workspaceUserUri')) {
        obj['workspaceUserUri'] = ApiClient.convertToType(data['workspaceUserUri'], 'String');
      }
    }
    return obj;
  }

  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The name of the account that the workspace user belongs to.
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * 
   * @member {String} activeSince
   */
  exports.prototype['activeSince'] = undefined;
  /**
   * The UTC DateTime when the workspace user was created.
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * 
   * @member {String} createdById
   */
  exports.prototype['createdById'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} invitationEmailBlurb
   */
  exports.prototype['invitationEmailBlurb'] = undefined;
  /**
   * 
   * @member {String} invitationEmailSubject
   */
  exports.prototype['invitationEmailSubject'] = undefined;
  /**
   * Utc date and time the comment was last updated (can only be done by creator.)
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * 
   * @member {String} lastModifiedById
   */
  exports.prototype['lastModifiedById'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Type of the user. Valid values: type_owner, type_participant.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * 
   * @member {String} workspaceId
   */
  exports.prototype['workspaceId'] = undefined;
  /**
   * The relative URI that may be used to access a workspace user.
   * @member {String} workspaceUserBaseUrl
   */
  exports.prototype['workspaceUserBaseUrl'] = undefined;
  /**
   * 
   * @member {String} workspaceUserId
   */
  exports.prototype['workspaceUserId'] = undefined;
  /**
   * 
   * @member {String} workspaceUserUri
   */
  exports.prototype['workspaceUserUri'] = undefined;



  return exports;
}));


