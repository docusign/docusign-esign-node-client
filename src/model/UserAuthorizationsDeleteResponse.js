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
    define(['ApiClient', 'model/UserAuthorizationIdWithStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAuthorizationIdWithStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserAuthorizationsDeleteResponse = factory(root.Docusign.ApiClient, root.Docusign.UserAuthorizationIdWithStatus);
  }
}(this, function(ApiClient, UserAuthorizationIdWithStatus) {
  'use strict';


  /**
   * The UserAuthorizationsDeleteResponse model module.
   * @module model/UserAuthorizationsDeleteResponse
   */

  /**
   * Constructs a new <code>UserAuthorizationsDeleteResponse</code>.
   * @alias module:model/UserAuthorizationsDeleteResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAuthorizationsDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAuthorizationsDeleteResponse} obj Optional instance to populate.
   * @return {module:model/UserAuthorizationsDeleteResponse} The populated <code>UserAuthorizationsDeleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [UserAuthorizationIdWithStatus]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/UserAuthorizationIdWithStatus>} results
   */
  exports.prototype['results'] = undefined;



  return exports;
}));


