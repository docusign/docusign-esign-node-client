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
    root.Docusign.SocialAccountInformation = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The SocialAccountInformation model module.
   * @module model/SocialAccountInformation
   */

  /**
   * Constructs a new <code>SocialAccountInformation</code>.
   * @alias module:model/SocialAccountInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SocialAccountInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SocialAccountInformation} obj Optional instance to populate.
   * @return {module:model/SocialAccountInformation} The populated <code>SocialAccountInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('socialId')) {
        obj['socialId'] = ApiClient.convertToType(data['socialId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The users email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * The social account provider (Facebook, Yahoo, etc.)
   * @member {String} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * The ID provided by the Socal Account.
   * @member {String} socialId
   */
  exports.prototype['socialId'] = undefined;
  /**
   * The full user name for the account.
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


