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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.GroupUserInfo = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The GroupUserInfo model module.
   * @module model/GroupUserInfo
   */

  /**
   * Constructs a new <code>GroupUserInfo</code>.
   * @alias module:model/GroupUserInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GroupUserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupUserInfo} obj Optional instance to populate.
   * @return {module:model/GroupUserInfo} The populated <code>GroupUserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activationAccessCode')) {
        obj['activationAccessCode'] = ApiClient.convertToType(data['activationAccessCode'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('loginStatus')) {
        obj['loginStatus'] = ApiClient.convertToType(data['loginStatus'], 'String');
      }
      if (data.hasOwnProperty('sendActivationEmail')) {
        obj['sendActivationEmail'] = ApiClient.convertToType(data['sendActivationEmail'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('userStatus')) {
        obj['userStatus'] = ApiClient.convertToType(data['userStatus'], 'String');
      }
      if (data.hasOwnProperty('userType')) {
        obj['userType'] = ApiClient.convertToType(data['userType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} activationAccessCode
   */
  exports.prototype['activationAccessCode'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Array or errors.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} loginStatus
   */
  exports.prototype['loginStatus'] = undefined;
  /**
   * 
   * @member {String} sendActivationEmail
   */
  exports.prototype['sendActivationEmail'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * 
   * @member {String} userStatus
   */
  exports.prototype['userStatus'] = undefined;
  /**
   * 
   * @member {String} userType
   */
  exports.prototype['userType'] = undefined;



  return exports;
}));


