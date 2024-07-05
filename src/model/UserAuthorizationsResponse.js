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
    define(['ApiClient', 'model/UserAuthorizationWithStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAuthorizationWithStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserAuthorizationsResponse = factory(root.Docusign.ApiClient, root.Docusign.UserAuthorizationWithStatus);
  }
}(this, function(ApiClient, UserAuthorizationWithStatus) {
  'use strict';


  /**
   * The UserAuthorizationsResponse model module.
   * @module model/UserAuthorizationsResponse
   */

  /**
   * Constructs a new <code>UserAuthorizationsResponse</code>.
   * @alias module:model/UserAuthorizationsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAuthorizationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAuthorizationsResponse} obj Optional instance to populate.
   * @return {module:model/UserAuthorizationsResponse} The populated <code>UserAuthorizationsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [UserAuthorizationWithStatus]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/UserAuthorizationWithStatus>} results
   */
  exports.prototype['results'] = undefined;



  return exports;
}));


