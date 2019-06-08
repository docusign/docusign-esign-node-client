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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Filter = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Filter model module.
   * @module model/Filter
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Filter</code>.
   * @alias module:model/Filter
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Filter} obj Optional instance to populate.
   * @return {module:model/Filter} The populated <code>Filter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionRequired')) {
        obj['actionRequired'] = ApiClient.convertToType(data['actionRequired'], 'String');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'String');
      }
      if (data.hasOwnProperty('folderIds')) {
        obj['folderIds'] = ApiClient.convertToType(data['folderIds'], 'String');
      }
      if (data.hasOwnProperty('fromDateTime')) {
        obj['fromDateTime'] = ApiClient.convertToType(data['fromDateTime'], 'String');
      }
      if (data.hasOwnProperty('isTemplate')) {
        obj['isTemplate'] = ApiClient.convertToType(data['isTemplate'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('orderBy')) {
        obj['orderBy'] = ApiClient.convertToType(data['orderBy'], 'String');
      }
      if (data.hasOwnProperty('searchTarget')) {
        obj['searchTarget'] = ApiClient.convertToType(data['searchTarget'], 'String');
      }
      if (data.hasOwnProperty('searchText')) {
        obj['searchText'] = ApiClient.convertToType(data['searchText'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('toDateTime')) {
        obj['toDateTime'] = ApiClient.convertToType(data['toDateTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * Access token information.
   * @member {String} actionRequired
   */
  exports.prototype['actionRequired'] = undefined;
  /**
   * 
   * @member {String} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * 
   * @member {String} folderIds
   */
  exports.prototype['folderIds'] = undefined;
  /**
   * 
   * @member {String} fromDateTime
   */
  exports.prototype['fromDateTime'] = undefined;
  /**
   * 
   * @member {String} isTemplate
   */
  exports.prototype['isTemplate'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 
   * @member {String} orderBy
   */
  exports.prototype['orderBy'] = undefined;
  /**
   * 
   * @member {String} searchTarget
   */
  exports.prototype['searchTarget'] = undefined;
  /**
   * 
   * @member {String} searchText
   */
  exports.prototype['searchText'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Must be set to \"bearer\".
   * @member {String} toDateTime
   */
  exports.prototype['toDateTime'] = undefined;



  return exports;
}));


