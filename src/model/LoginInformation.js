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
    define(['ApiClient', 'model/LoginAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LoginAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.LoginInformation = factory(root.Docusign.ApiClient, root.Docusign.LoginAccount);
  }
}(this, function(ApiClient, LoginAccount) {
  'use strict';


  /**
   * The LoginInformation model module.
   * @module model/LoginInformation
   */

  /**
   * Constructs a new <code>LoginInformation</code>.
   * @alias module:model/LoginInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LoginInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginInformation} obj Optional instance to populate.
   * @return {module:model/LoginInformation} The populated <code>LoginInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiPassword')) {
        obj['apiPassword'] = ApiClient.convertToType(data['apiPassword'], 'String');
      }
      if (data.hasOwnProperty('loginAccounts')) {
        obj['loginAccounts'] = ApiClient.convertToType(data['loginAccounts'], [LoginAccount]);
      }
    }
    return obj;
  }

  /**
   * Contains a token that can be used for authentication in API calls instead of using the user name and password. Only returned if the `api_password=true` query string is added to the URL.
   * @member {String} apiPassword
   */
  exports.prototype['apiPassword'] = undefined;
  /**
   * The list of accounts that authenticating user is a member of.
   * @member {Array.<module:model/LoginAccount>} loginAccounts
   */
  exports.prototype['loginAccounts'] = undefined;



  return exports;
}));


