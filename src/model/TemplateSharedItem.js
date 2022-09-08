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
    root.Docusign.TemplateSharedItem = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.MemberGroupSharedItem, root.Docusign.UserInfo, root.Docusign.UserSharedItem);
  }
}(this, function(ApiClient, ErrorDetails, MemberGroupSharedItem, UserInfo, UserSharedItem) {
  'use strict';


  /**
   * The TemplateSharedItem model module.
   * @module model/TemplateSharedItem
   */

  /**
   * Constructs a new <code>TemplateSharedItem</code>.
   * Information about shared templates.
   * @alias module:model/TemplateSharedItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateSharedItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateSharedItem} obj Optional instance to populate.
   * @return {module:model/TemplateSharedItem} The populated <code>TemplateSharedItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = UserInfo.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('templateName')) {
        obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
      }
    }
    return obj;
  }

  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Information about the user who owns the template.
   * @member {module:model/UserInfo} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
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
   * The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * 
   * @member {String} templateName
   */
  exports.prototype['templateName'] = undefined;



  return exports;
}));


