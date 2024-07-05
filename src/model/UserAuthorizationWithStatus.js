/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/UserAuthorization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAuthorization'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserAuthorizationWithStatus = factory(root.Docusign.ApiClient, root.Docusign.UserAuthorization);
  }
}(this, function(ApiClient, UserAuthorization) {
  'use strict';


  /**
   * The UserAuthorizationWithStatus model module.
   * @module model/UserAuthorizationWithStatus
   */

  /**
   * Constructs a new <code>UserAuthorizationWithStatus</code>.
   * @alias module:model/UserAuthorizationWithStatus
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAuthorizationWithStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAuthorizationWithStatus} obj Optional instance to populate.
   * @return {module:model/UserAuthorizationWithStatus} The populated <code>UserAuthorizationWithStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = UserAuthorization.constructFromObject(data['authorization']);
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/UserAuthorization} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * 
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * 
   * @member {String} success
   */
  exports.prototype['success'] = undefined;



  return exports;
}));


