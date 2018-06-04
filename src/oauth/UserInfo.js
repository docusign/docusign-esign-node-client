

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
    define(['ApiClient', 'oauth/Account'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Account'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
  }
}(this, function(ApiClient,  Account) {
  'use strict';
  /**
   * The UserInfo model module.
   * @module model/UserInfo
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserInfo</code>.
   * @alias module:model/UserInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfo} obj Optional instance to populate.
   * @return {module:model/UserInfo} The populated <code>UserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    var ApiClient = require('../ApiClient');

    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sub')) {
        obj['sub'] = ApiClient.convertToType(data['sub'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], [Account]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('given_name')) {
        obj['givenName'] = ApiClient.convertToType(data['given_name'], 'String');
      }
      if (data.hasOwnProperty('family_name')) {
        obj['familyName'] = ApiClient.convertToType(data['family_name'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
    }

    return obj;
  }

  /**
   *
   * @member {String} sub
   */
  exports.prototype['sub'] = undefined;
  /**
   *
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:oauth/Account} accounts
   */
  exports.prototype['accounts'] = undefined;
  /**
   *
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   *
   * @member {String} givenName
   */
  exports.prototype['givenName'] = undefined;
  /**
   *
   * @member {String} familyName
   */
  exports.prototype['familyName'] = undefined;
  /**
   *
   * @member {String} created
   */
  exports.prototype['created'] = undefined;

  return exports;
}));


