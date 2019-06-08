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
    root.Docusign.UserInfoList = factory(root.Docusign.ApiClient, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';


  /**
   * The UserInfoList model module.
   * @module model/UserInfoList
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserInfoList</code>.
   * @alias module:model/UserInfoList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserInfoList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfoList} obj Optional instance to populate.
   * @return {module:model/UserInfoList} The populated <code>UserInfoList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserInfo]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/UserInfo>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


