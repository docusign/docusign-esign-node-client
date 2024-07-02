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
    define(['ApiClient', 'model/UserAuthorizationCreateRequestWithId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAuthorizationCreateRequestWithId'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserAuthorizationsRequest = factory(root.Docusign.ApiClient, root.Docusign.UserAuthorizationCreateRequestWithId);
  }
}(this, function(ApiClient, UserAuthorizationCreateRequestWithId) {
  'use strict';


  /**
   * The UserAuthorizationsRequest model module.
   * @module model/UserAuthorizationsRequest
   */

  /**
   * Constructs a new <code>UserAuthorizationsRequest</code>.
   * @alias module:model/UserAuthorizationsRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAuthorizationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAuthorizationsRequest} obj Optional instance to populate.
   * @return {module:model/UserAuthorizationsRequest} The populated <code>UserAuthorizationsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorizations')) {
        obj['authorizations'] = ApiClient.convertToType(data['authorizations'], [UserAuthorizationCreateRequestWithId]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/UserAuthorizationCreateRequestWithId>} authorizations
   */
  exports.prototype['authorizations'] = undefined;



  return exports;
}));


