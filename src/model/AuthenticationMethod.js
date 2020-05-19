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
    root.Docusign.AuthenticationMethod = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AuthenticationMethod model module.
   * @module model/AuthenticationMethod
   */

  /**
   * Constructs a new <code>AuthenticationMethod</code>.
   * Contains information about the method used for authentication.
   * @alias module:model/AuthenticationMethod
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AuthenticationMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationMethod} obj Optional instance to populate.
   * @return {module:model/AuthenticationMethod} The populated <code>AuthenticationMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authenticationType')) {
        obj['authenticationType'] = ApiClient.convertToType(data['authenticationType'], 'String');
      }
      if (data.hasOwnProperty('lastProvider')) {
        obj['lastProvider'] = ApiClient.convertToType(data['lastProvider'], 'String');
      }
      if (data.hasOwnProperty('lastTimestamp')) {
        obj['lastTimestamp'] = ApiClient.convertToType(data['lastTimestamp'], 'String');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicates the type of authentication. Valid values are: PhoneAuth, STAN, ISCheck, OFAC, AccessCode, AgeVerify, or SSOAuth. 
   * @member {String} authenticationType
   */
  exports.prototype['authenticationType'] = undefined;
  /**
   * The last provider that authenticated the user. 
   * @member {String} lastProvider
   */
  exports.prototype['lastProvider'] = undefined;
  /**
   *  The data and time the user last used the authentication method. 
   * @member {String} lastTimestamp
   */
  exports.prototype['lastTimestamp'] = undefined;
  /**
   * The number of times the authentication method was used. 
   * @member {String} totalCount
   */
  exports.prototype['totalCount'] = undefined;



  return exports;
}));


