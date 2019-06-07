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
    define(['ApiClient', 'model/ErrorDetails', 'model/SigningGroupUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./SigningGroupUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SigningGroup = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.SigningGroupUser);
  }
}(this, function(ApiClient, ErrorDetails, SigningGroupUser) {
  'use strict';


  /**
   * The SigningGroup model module.
   * @module model/SigningGroup
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SigningGroup</code>.
   * @alias module:model/SigningGroup
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SigningGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SigningGroup} obj Optional instance to populate.
   * @return {module:model/SigningGroup} The populated <code>SigningGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('groupEmail')) {
        obj['groupEmail'] = ApiClient.convertToType(data['groupEmail'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('groupType')) {
        obj['groupType'] = ApiClient.convertToType(data['groupType'], 'String');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
      }
      if (data.hasOwnProperty('signingGroupId')) {
        obj['signingGroupId'] = ApiClient.convertToType(data['signingGroupId'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [SigningGroupUser]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * 
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} groupEmail
   */
  exports.prototype['groupEmail'] = undefined;
  /**
   * The name of the group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * 
   * @member {String} groupType
   */
  exports.prototype['groupType'] = undefined;
  /**
   * 
   * @member {String} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * 
   * @member {String} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;
  /**
   * When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
   * @member {String} signingGroupId
   */
  exports.prototype['signingGroupId'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SigningGroupUser>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


