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
    define(['ApiClient', 'model/SamlAssertionAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SamlAssertionAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientSAMLAuthentication = factory(root.Docusign.ApiClient, root.Docusign.SamlAssertionAttribute);
  }
}(this, function(ApiClient, SamlAssertionAttribute) {
  'use strict';


  /**
   * The RecipientSAMLAuthentication model module.
   * @module model/RecipientSAMLAuthentication
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientSAMLAuthentication</code>.
   * Contains the name/value pair information for the SAML assertion attributes:  * name - The name of the SAML assertion attribute. * value - The value associated with the named SAML assertion attribute.   Your account must be set up to use SSO to use this.
   * @alias module:model/RecipientSAMLAuthentication
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientSAMLAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientSAMLAuthentication} obj Optional instance to populate.
   * @return {module:model/RecipientSAMLAuthentication} The populated <code>RecipientSAMLAuthentication</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('samlAssertionAttributes')) {
        obj['samlAssertionAttributes'] = ApiClient.convertToType(data['samlAssertionAttributes'], [SamlAssertionAttribute]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/SamlAssertionAttribute>} samlAssertionAttributes
   */
  exports.prototype['samlAssertionAttributes'] = undefined;



  return exports;
}));


