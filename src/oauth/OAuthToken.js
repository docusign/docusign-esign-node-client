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
    define(['ApiClient'], factory);

  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));

  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ApiClient = factory(root.Docusign.ApiClient);
  }
}(this, function() {
  'use strict';
  /**
   * The OauthAccess model module.
   * @module model/OauthAccess
   * @version 3.0.0
   */
  /**
   * Constructs a new <code>OauthAccess</code>.
   * @alias module:model/OauthAccess
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OauthAccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthAccess} obj Optional instance to populate.
   * @return {module:model/OauthAccess} The populated <code>OauthAccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    var ApiClient = require('../ApiClient');
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['accessToken'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [NameValue]);
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expiresIn'] = ApiClient.convertToType(data['expires_in'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refreshToken'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['tokenType'] = ApiClient.convertToType(data['token_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Access token information.
   * @member {String} access_token
   */
  exports.prototype['accessToken'] = undefined;
  /**
   *
   * @member {Array.<module:model/NameValue>} data
   */
  exports.prototype['data'] = undefined;
  /**
   *
   * @member {String} expires_in
   */
  exports.prototype['expiresIn'] = undefined;
  /**
   *
   * @member {String} refresh_token
   */
  exports.prototype['refreshToken'] = undefined;
  /**
   * Must be set to \"api\".
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   *
   * @member {String} token_type
   */
  exports.prototype['tokenType'] = undefined;

  return exports;
}));


