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
    define(['ApiClient', 'model/Credential', 'model/ExternalClaim'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Credential'), require('./ExternalClaim'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.User = factory(root.Docusign.ApiClient, root.Docusign.Credential, root.Docusign.ExternalClaim);
  }
}(this, function(ApiClient, Credential, ExternalClaim) {
  'use strict';


  /**
   * The User model module.
   * @module model/User
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cellPhoneNumber')) {
        obj['cellPhoneNumber'] = ApiClient.convertToType(data['cellPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('credentials')) {
        obj['credentials'] = ApiClient.convertToType(data['credentials'], [Credential]);
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('externalClaims')) {
        obj['externalClaims'] = ApiClient.convertToType(data['externalClaims'], [ExternalClaim]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} cellPhoneNumber
   */
  exports.prototype['cellPhoneNumber'] = undefined;
  /**
   * 
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Credential>} credentials
   */
  exports.prototype['credentials'] = undefined;
  /**
   * 
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ExternalClaim>} externalClaims
   */
  exports.prototype['externalClaims'] = undefined;



  return exports;
}));


