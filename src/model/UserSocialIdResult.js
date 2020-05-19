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
    define(['ApiClient', 'model/SocialAccountInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SocialAccountInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserSocialIdResult = factory(root.Docusign.ApiClient, root.Docusign.SocialAccountInformation);
  }
}(this, function(ApiClient, SocialAccountInformation) {
  'use strict';


  /**
   * The UserSocialIdResult model module.
   * @module model/UserSocialIdResult
   */

  /**
   * Constructs a new <code>UserSocialIdResult</code>.
   * @alias module:model/UserSocialIdResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserSocialIdResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSocialIdResult} obj Optional instance to populate.
   * @return {module:model/UserSocialIdResult} The populated <code>UserSocialIdResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('socialAccountInformation')) {
        obj['socialAccountInformation'] = ApiClient.convertToType(data['socialAccountInformation'], [SocialAccountInformation]);
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Contains properties that map a DocuSign user to a social account (Facebook, Yahoo, etc.)
   * @member {Array.<module:model/SocialAccountInformation>} socialAccountInformation
   */
  exports.prototype['socialAccountInformation'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


