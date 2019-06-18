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
    define(['ApiClient', 'model/AccountPasswordRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountPasswordRules'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserPasswordRules = factory(root.Docusign.ApiClient, root.Docusign.AccountPasswordRules);
  }
}(this, function(ApiClient, AccountPasswordRules) {
  'use strict';


  /**
   * The UserPasswordRules model module.
   * @module model/UserPasswordRules
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UserPasswordRules</code>.
   * @alias module:model/UserPasswordRules
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserPasswordRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserPasswordRules} obj Optional instance to populate.
   * @return {module:model/UserPasswordRules} The populated <code>UserPasswordRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('passwordRules')) {
        obj['passwordRules'] = AccountPasswordRules.constructFromObject(data['passwordRules']);
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountPasswordRules} passwordRules
   */
  exports.prototype['passwordRules'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


