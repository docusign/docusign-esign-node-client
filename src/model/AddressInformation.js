/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
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
    root.Docusign.AddressInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AddressInformation model module.
   * @module model/AddressInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AddressInformation</code>.
   * Contains address information.
   * @alias module:model/AddressInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AddressInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressInformation} obj Optional instance to populate.
   * @return {module:model/AddressInformation} The populated <code>AddressInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('street1')) {
        obj['street1'] = ApiClient.convertToType(data['street1'], 'String');
      }
      if (data.hasOwnProperty('street2')) {
        obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
    }
    return obj;
  }

  /**
   * The city associated with the address.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * Specifies the country associated with the address.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * A Fax number associated with the address if one is available.
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * A phone number associated with the address.
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * The state or province associated with the address.
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The first line of the address.
   * @member {String} street1
   */
  exports.prototype['street1'] = undefined;
  /**
   * The second line of the address (optional).
   * @member {String} street2
   */
  exports.prototype['street2'] = undefined;
  /**
   * The zip or postal code associated with the address.
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;



  return exports;
}));


