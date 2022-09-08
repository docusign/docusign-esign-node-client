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
    define(['ApiClient', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BccEmailArchive = factory(root.Docusign.ApiClient, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';


  /**
   * The BccEmailArchive model module.
   * @module model/BccEmailArchive
   */

  /**
   * Constructs a new <code>BccEmailArchive</code>.
   * This object contains information abut a BCC email archive configuration (a BCC email address used to archive DocuSign-generated emails).
   * @alias module:model/BccEmailArchive
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BccEmailArchive</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BccEmailArchive} obj Optional instance to populate.
   * @return {module:model/BccEmailArchive} The populated <code>BccEmailArchive</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('bccEmailArchiveId')) {
        obj['bccEmailArchiveId'] = ApiClient.convertToType(data['bccEmailArchiveId'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = UserInfo.constructFromObject(data['createdBy']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailNotificationId')) {
        obj['emailNotificationId'] = ApiClient.convertToType(data['emailNotificationId'], 'String');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = UserInfo.constructFromObject(data['modifiedBy']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
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
   * 
   * @member {String} bccEmailArchiveId
   */
  exports.prototype['bccEmailArchiveId'] = undefined;
  /**
   * 
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Details about the user who created the BCC email archive configuration.
   * @member {module:model/UserInfo} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {String} emailNotificationId
   */
  exports.prototype['emailNotificationId'] = undefined;
  /**
   * 
   * @member {String} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * Details about the user who last modified the BCC email archive configuration.
   * @member {module:model/UserInfo} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


