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
    define(['ApiClient', 'model/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountAddress = factory(root.Docusign.ApiClient, root.Docusign.Country);
  }
}(this, function(ApiClient, Country) {
  'use strict';


  /**
   * The AccountAddress model module.
   * @module model/AccountAddress
   */

  /**
   * Constructs a new <code>AccountAddress</code>.
   * Contains information about an account address.
   * @alias module:model/AccountAddress
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountAddress} obj Optional instance to populate.
   * @return {module:model/AccountAddress} The populated <code>AccountAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('supportedCountries')) {
        obj['supportedCountries'] = ApiClient.convertToType(data['supportedCountries'], [Country]);
      }
    }
    return obj;
  }

  /**
   * First Line of the address. Maximum length: 100 characters.
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Second Line of the address. Maximum length: 100 characters.
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * The city value of the address.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * Specifies the country associated with the address.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * The user's first name.  Maximum Length: 50 characters.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * 
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * The state or province associated with the address.
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Contains an array of countries supported by the billing plan.
   * @member {Array.<module:model/Country>} supportedCountries
   */
  exports.prototype['supportedCountries'] = undefined;



  return exports;
}));


