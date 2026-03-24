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
    define(['ApiClient', 'model/AuthorizationUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthorizationUser'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopesSharesRequestItem = factory(root.Docusign.ApiClient, root.Docusign.AuthorizationUser);
  }
}(this, function(ApiClient, AuthorizationUser) {
  'use strict';


  /**
   * The EnvelopesSharesRequestItem model module.
   * @module model/EnvelopesSharesRequestItem
   */

  /**
   * Constructs a new <code>EnvelopesSharesRequestItem</code>.
   * @alias module:model/EnvelopesSharesRequestItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopesSharesRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopesSharesRequestItem} obj Optional instance to populate.
   * @return {module:model/EnvelopesSharesRequestItem} The populated <code>EnvelopesSharesRequestItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentUser')) {
        obj['agentUser'] = AuthorizationUser.constructFromObject(data['agentUser']);
      }
      if (data.hasOwnProperty('permission')) {
        obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/AuthorizationUser} agentUser
   */
  exports.prototype['agentUser'] = undefined;
  /**
   * 
   * @member {String} permission
   */
  exports.prototype['permission'] = undefined;



  return exports;
}));


