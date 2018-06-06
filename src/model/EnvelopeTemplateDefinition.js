/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
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
    root.Docusign.EnvelopeTemplateDefinition = factory(root.Docusign.ApiClient, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';


  /**
   * The EnvelopeTemplateDefinition model module.
   * @module model/EnvelopeTemplateDefinition
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeTemplateDefinition</code>.
   * A complex element containing the following information:  templateId: Unique identifier of the template. If this is not provided, DocuSign will generate a value.   name: Name of the template. Maximum length: 100 characters.  shared: When set to **true**, the template is shared with the Everyone group in the account. If false, the template is only shared with the Administrator group.  password: Password, if the template is locked.  description: Description of the template. Maximum Length: 500 characters.  pageCount: Number of document pages in the template.  folderName: The name of the folder the template is located in.  folderId: The ID for the folder.  owner: The userName, email, userId, userType, and userStatus for the template owner.
   * @alias module:model/EnvelopeTemplateDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeTemplateDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeTemplateDefinition} obj Optional instance to populate.
   * @return {module:model/EnvelopeTemplateDefinition} The populated <code>EnvelopeTemplateDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('folderId')) {
        obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
      }
      if (data.hasOwnProperty('folderName')) {
        obj['folderName'] = ApiClient.convertToType(data['folderName'], 'String');
      }
      if (data.hasOwnProperty('folderUri')) {
        obj['folderUri'] = ApiClient.convertToType(data['folderUri'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedBy')) {
        obj['lastModifiedBy'] = UserInfo.constructFromObject(data['lastModifiedBy']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = UserInfo.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('pageCount')) {
        obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
      }
      if (data.hasOwnProperty('parentFolderUri')) {
        obj['parentFolderUri'] = ApiClient.convertToType(data['parentFolderUri'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
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
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The ID for the folder.
   * @member {String} folderId
   */
  exports.prototype['folderId'] = undefined;
  /**
   *  The name of the folder in which the template is located.
   * @member {String} folderName
   */
  exports.prototype['folderName'] = undefined;
  /**
   * The URI of the folder.
   * @member {String} folderUri
   */
  exports.prototype['folderUri'] = undefined;
  /**
   * 
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * @member {module:model/UserInfo} lastModifiedBy
   */
  exports.prototype['lastModifiedBy'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;
  /**
   * @member {module:model/UserInfo} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * An integer value specifying the number of document pages in the template. Omit this property if not submitting a page count.
   * @member {Number} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * 
   * @member {String} parentFolderUri
   */
  exports.prototype['parentFolderUri'] = undefined;
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
   * The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


