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
    root.Docusign.UserSharedItem = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, ErrorDetails, UserInfo) {
  'use strict';


  /**
   * The UserSharedItem model module.
   * @module model/UserSharedItem
   */

  /**
   * Constructs a new <code>UserSharedItem</code>.
   * Information about a shared item.
   * @alias module:model/UserSharedItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserSharedItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSharedItem} obj Optional instance to populate.
   * @return {module:model/UserSharedItem} The populated <code>UserSharedItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserInfo.constructFromObject(data['user']);
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
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * The user whose sharing information is being requested.
   * @member {module:model/UserInfo} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


