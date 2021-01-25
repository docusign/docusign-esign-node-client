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
    root.Docusign.ExternalClaim = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ExternalClaim model module.
   * @module model/ExternalClaim
   */

  /**
   * Constructs a new <code>ExternalClaim</code>.
   * @alias module:model/ExternalClaim
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExternalClaim</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalClaim} obj Optional instance to populate.
   * @return {module:model/ExternalClaim} The populated <code>ExternalClaim</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('acquiredTime')) {
        obj['acquiredTime'] = ApiClient.convertToType(data['acquiredTime'], 'String');
      }
      if (data.hasOwnProperty('claimName')) {
        obj['claimName'] = ApiClient.convertToType(data['claimName'], 'String');
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} acquiredTime
   */
  exports.prototype['acquiredTime'] = undefined;
  /**
   * 
   * @member {String} claimName
   */
  exports.prototype['claimName'] = undefined;
  /**
   * 
   * @member {String} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


