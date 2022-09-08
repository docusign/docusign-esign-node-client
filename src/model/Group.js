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
    define(['ApiClient', 'model/ErrorDetails', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Group = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, ErrorDetails, UserInfo) {
  'use strict';


  /**
   * The Group model module.
   * @module model/Group
   */

  /**
   * Constructs a new <code>Group</code>.
   * This object contains information about a group.
   * @alias module:model/Group
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dsGroupId')) {
        obj['dsGroupId'] = ApiClient.convertToType(data['dsGroupId'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('groupType')) {
        obj['groupType'] = ApiClient.convertToType(data['groupType'], 'String');
      }
      if (data.hasOwnProperty('permissionProfileId')) {
        obj['permissionProfileId'] = ApiClient.convertToType(data['permissionProfileId'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserInfo]);
      }
      if (data.hasOwnProperty('usersCount')) {
        obj['usersCount'] = ApiClient.convertToType(data['usersCount'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} dsGroupId
   */
  exports.prototype['dsGroupId'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * The DocuSign group ID for the group.
   * @member {String} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * The name of the group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * The group type.
   * @member {String} groupType
   */
  exports.prototype['groupType'] = undefined;
  /**
   * The ID of the permission profile associated with the group.
   * @member {String} permissionProfileId
   */
  exports.prototype['permissionProfileId'] = undefined;
  /**
   * 
   * @member {Array.<module:model/UserInfo>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * 
   * @member {String} usersCount
   */
  exports.prototype['usersCount'] = undefined;



  return exports;
}));


