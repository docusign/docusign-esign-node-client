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
    define(['ApiClient', 'model/RecipientIdentityPhoneNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecipientIdentityPhoneNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientIdentityInputOption = factory(root.Docusign.ApiClient, root.Docusign.RecipientIdentityPhoneNumber);
  }
}(this, function(ApiClient, RecipientIdentityPhoneNumber) {
  'use strict';


  /**
   * The RecipientIdentityInputOption model module.
   * @module model/RecipientIdentityInputOption
   */

  /**
   * Constructs a new <code>RecipientIdentityInputOption</code>.
   * @alias module:model/RecipientIdentityInputOption
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientIdentityInputOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientIdentityInputOption} obj Optional instance to populate.
   * @return {module:model/RecipientIdentityInputOption} The populated <code>RecipientIdentityInputOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('phoneNumberList')) {
        obj['phoneNumberList'] = ApiClient.convertToType(data['phoneNumberList'], [RecipientIdentityPhoneNumber]);
      }
      if (data.hasOwnProperty('valueType')) {
        obj['valueType'] = ApiClient.convertToType(data['valueType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientIdentityPhoneNumber>} phoneNumberList
   */
  exports.prototype['phoneNumberList'] = undefined;
  /**
   * 
   * @member {String} valueType
   */
  exports.prototype['valueType'] = undefined;



  return exports;
}));


