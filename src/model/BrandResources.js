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
    root.Docusign.BrandResources = factory(root.Docusign.ApiClient, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';


  /**
   * The BrandResources model module.
   * @module model/BrandResources
   */

  /**
   * Constructs a new <code>BrandResources</code>.
   * Information about the resource files that the brand uses for the email, signing, sending, and captive (embedded) signing experiences.
   * @alias module:model/BrandResources
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandResources</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandResources} obj Optional instance to populate.
   * @return {module:model/BrandResources} The populated <code>BrandResources</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdByUserInfo')) {
        obj['createdByUserInfo'] = UserInfo.constructFromObject(data['createdByUserInfo']);
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('dataNotSavedNotInMaster')) {
        obj['dataNotSavedNotInMaster'] = ApiClient.convertToType(data['dataNotSavedNotInMaster'], ['String']);
      }
      if (data.hasOwnProperty('modifiedByUserInfo')) {
        obj['modifiedByUserInfo'] = UserInfo.constructFromObject(data['modifiedByUserInfo']);
      }
      if (data.hasOwnProperty('modifiedDate')) {
        obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'String');
      }
      if (data.hasOwnProperty('modifiedTemplates')) {
        obj['modifiedTemplates'] = ApiClient.convertToType(data['modifiedTemplates'], ['String']);
      }
      if (data.hasOwnProperty('resourcesContentType')) {
        obj['resourcesContentType'] = ApiClient.convertToType(data['resourcesContentType'], 'String');
      }
      if (data.hasOwnProperty('resourcesContentUri')) {
        obj['resourcesContentUri'] = ApiClient.convertToType(data['resourcesContentUri'], 'String');
      }
    }
    return obj;
  }

  /**
   * The user ID of the user who created the brand resource.
   * @member {module:model/UserInfo} createdByUserInfo
   */
  exports.prototype['createdByUserInfo'] = undefined;
  /**
   * 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * 
   * @member {Array.<String>} dataNotSavedNotInMaster
   */
  exports.prototype['dataNotSavedNotInMaster'] = undefined;
  /**
   * Information about the user who last modified the brand resource.
   * @member {module:model/UserInfo} modifiedByUserInfo
   */
  exports.prototype['modifiedByUserInfo'] = undefined;
  /**
   * 
   * @member {String} modifiedDate
   */
  exports.prototype['modifiedDate'] = undefined;
  /**
   * 
   * @member {Array.<String>} modifiedTemplates
   */
  exports.prototype['modifiedTemplates'] = undefined;
  /**
   * 
   * @member {String} resourcesContentType
   */
  exports.prototype['resourcesContentType'] = undefined;
  /**
   * 
   * @member {String} resourcesContentUri
   */
  exports.prototype['resourcesContentUri'] = undefined;



  return exports;
}));


