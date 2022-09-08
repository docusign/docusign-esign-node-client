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
    define(['ApiClient', 'model/AddressInformation', 'model/AuthenticationMethod', 'model/UsageHistory', 'model/UserInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'), require('./AuthenticationMethod'), require('./UsageHistory'), require('./UserInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserProfile = factory(root.Docusign.ApiClient, root.Docusign.AddressInformation, root.Docusign.AuthenticationMethod, root.Docusign.UsageHistory, root.Docusign.UserInformation);
  }
}(this, function(ApiClient, AddressInformation, AuthenticationMethod, UsageHistory, UserInformation) {
  'use strict';


  /**
   * The UserProfile model module.
   * @module model/UserProfile
   */

  /**
   * Constructs a new <code>UserProfile</code>.
   * @alias module:model/UserProfile
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserProfile} obj Optional instance to populate.
   * @return {module:model/UserProfile} The populated <code>UserProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressInformation.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('authenticationMethods')) {
        obj['authenticationMethods'] = ApiClient.convertToType(data['authenticationMethods'], [AuthenticationMethod]);
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('displayOrganizationInfo')) {
        obj['displayOrganizationInfo'] = ApiClient.convertToType(data['displayOrganizationInfo'], 'String');
      }
      if (data.hasOwnProperty('displayPersonalInfo')) {
        obj['displayPersonalInfo'] = ApiClient.convertToType(data['displayPersonalInfo'], 'String');
      }
      if (data.hasOwnProperty('displayProfile')) {
        obj['displayProfile'] = ApiClient.convertToType(data['displayProfile'], 'String');
      }
      if (data.hasOwnProperty('displayUsageHistory')) {
        obj['displayUsageHistory'] = ApiClient.convertToType(data['displayUsageHistory'], 'String');
      }
      if (data.hasOwnProperty('profileImageUri')) {
        obj['profileImageUri'] = ApiClient.convertToType(data['profileImageUri'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('usageHistory')) {
        obj['usageHistory'] = UsageHistory.constructFromObject(data['usageHistory']);
      }
      if (data.hasOwnProperty('userDetails')) {
        obj['userDetails'] = UserInformation.constructFromObject(data['userDetails']);
      }
      if (data.hasOwnProperty('userProfileLastModifiedDate')) {
        obj['userProfileLastModifiedDate'] = ApiClient.convertToType(data['userProfileLastModifiedDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * The user's address.
   * @member {module:model/AddressInformation} address
   */
  exports.prototype['address'] = undefined;
  /**
   * These properties cannot be modified in the PUT.   Indicates the authentication methods used by the user.
   * @member {Array.<module:model/AuthenticationMethod>} authenticationMethods
   */
  exports.prototype['authenticationMethods'] = undefined;
  /**
   * The name of the user's Company.
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   *  When set to **true**, the user's company and title information are shown on the ID card. 
   * @member {String} displayOrganizationInfo
   */
  exports.prototype['displayOrganizationInfo'] = undefined;
  /**
   * When set to **true**, the user's Address and Phone number are shown on the ID card.
   * @member {String} displayPersonalInfo
   */
  exports.prototype['displayPersonalInfo'] = undefined;
  /**
   * When set to **true**, the user's ID card can be viewed from signed documents and envelope history.
   * @member {String} displayProfile
   */
  exports.prototype['displayProfile'] = undefined;
  /**
   * When set to **true**, the user's usage information is shown on the ID card.
   * @member {String} displayUsageHistory
   */
  exports.prototype['displayUsageHistory'] = undefined;
  /**
   * 
   * @member {String} profileImageUri
   */
  exports.prototype['profileImageUri'] = undefined;
  /**
   * 
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A complex element consisting of:   - `lastSentDateTime`: The date and time the user last sent an envelope.  - `lastSignedDateTime`: The date and time the user last signed an envelope. - `sentCount`: The number of envelopes the user has sent. - `signedCount`: The number of envelopes the user has signed.  
   * @member {module:model/UsageHistory} usageHistory
   */
  exports.prototype['usageHistory'] = undefined;
  /**
   * 
   * @member {module:model/UserInformation} userDetails
   */
  exports.prototype['userDetails'] = undefined;
  /**
   * 
   * @member {String} userProfileLastModifiedDate
   */
  exports.prototype['userProfileLastModifiedDate'] = undefined;



  return exports;
}));


