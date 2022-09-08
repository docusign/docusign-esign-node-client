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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NewUser = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The NewUser model module.
   * @module model/NewUser
   */

  /**
   * Constructs a new <code>NewUser</code>.
   * Object representing a new user.
   * @alias module:model/NewUser
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NewUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewUser} obj Optional instance to populate.
   * @return {module:model/NewUser} The populated <code>NewUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiPassword')) {
        obj['apiPassword'] = ApiClient.convertToType(data['apiPassword'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('membershipId')) {
        obj['membershipId'] = ApiClient.convertToType(data['membershipId'], 'String');
      }
      if (data.hasOwnProperty('permissionProfileId')) {
        obj['permissionProfileId'] = ApiClient.convertToType(data['permissionProfileId'], 'String');
      }
      if (data.hasOwnProperty('permissionProfileName')) {
        obj['permissionProfileName'] = ApiClient.convertToType(data['permissionProfileName'], 'String');
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
    }
    return obj;
  }

  /**
   * Contains a token that can be used for authentication in API calls instead of using the user name and password.
   * @member {String} apiPassword
   */
  exports.prototype['apiPassword'] = undefined;
  /**
   * Indicates the date and time the item was created.
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} membershipId
   */
  exports.prototype['membershipId'] = undefined;
  /**
   * 
   * @member {String} permissionProfileId
   */
  exports.prototype['permissionProfileId'] = undefined;
  /**
   * 
   * @member {String} permissionProfileName
   */
  exports.prototype['permissionProfileName'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * Specifies the user ID for the new user.
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



  return exports;
}));


