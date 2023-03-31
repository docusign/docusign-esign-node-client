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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DelegationInfo = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DelegationInfo model module.
   * @module model/DelegationInfo
   */

  /**
   * Constructs a new <code>DelegationInfo</code>.
   * @alias module:model/DelegationInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DelegationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DelegationInfo} obj Optional instance to populate.
   * @return {module:model/DelegationInfo} The populated <code>DelegationInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Email')) {
        obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('UserAuthorizationId')) {
        obj['UserAuthorizationId'] = ApiClient.convertToType(data['UserAuthorizationId'], 'String');
      }
      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} Email
   */
  exports.prototype['Email'] = undefined;
  /**
   * 
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * 
   * @member {String} UserAuthorizationId
   */
  exports.prototype['UserAuthorizationId'] = undefined;
  /**
   * 
   * @member {String} UserId
   */
  exports.prototype['UserId'] = undefined;



  return exports;
}));


