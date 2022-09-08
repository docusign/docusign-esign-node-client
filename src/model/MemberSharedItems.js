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
    define(['ApiClient', 'model/ErrorDetails', 'model/FolderSharedItem', 'model/SharedItem', 'model/TemplateSharedItem', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./FolderSharedItem'), require('./SharedItem'), require('./TemplateSharedItem'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.MemberSharedItems = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.FolderSharedItem, root.Docusign.SharedItem, root.Docusign.TemplateSharedItem, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, ErrorDetails, FolderSharedItem, SharedItem, TemplateSharedItem, UserInfo) {
  'use strict';


  /**
   * The MemberSharedItems model module.
   * @module model/MemberSharedItems
   */

  /**
   * Constructs a new <code>MemberSharedItems</code>.
   * Information about shared items.
   * @alias module:model/MemberSharedItems
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MemberSharedItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberSharedItems} obj Optional instance to populate.
   * @return {module:model/MemberSharedItems} The populated <code>MemberSharedItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], [SharedItem]);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [FolderSharedItem]);
      }
      if (data.hasOwnProperty('templates')) {
        obj['templates'] = ApiClient.convertToType(data['templates'], [TemplateSharedItem]);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserInfo.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/SharedItem>} envelopes
   */
  exports.prototype['envelopes'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {Array.<module:model/FolderSharedItem>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   * 
   * @member {Array.<module:model/TemplateSharedItem>} templates
   */
  exports.prototype['templates'] = undefined;
  /**
   * Information about the user requesting sharing information.
   * @member {module:model/UserInfo} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


