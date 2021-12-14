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
    root.Docusign.BillingEntityInformationResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BillingEntityInformationResponse model module.
   * @module model/BillingEntityInformationResponse
   */

  /**
   * Constructs a new <code>BillingEntityInformationResponse</code>.
   * @alias module:model/BillingEntityInformationResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BillingEntityInformationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingEntityInformationResponse} obj Optional instance to populate.
   * @return {module:model/BillingEntityInformationResponse} The populated <code>BillingEntityInformationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billingProfile')) {
        obj['billingProfile'] = ApiClient.convertToType(data['billingProfile'], 'String');
      }
      if (data.hasOwnProperty('entityName')) {
        obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
      }
      if (data.hasOwnProperty('externalEntityId')) {
        obj['externalEntityId'] = ApiClient.convertToType(data['externalEntityId'], 'String');
      }
      if (data.hasOwnProperty('isExternallyBilled')) {
        obj['isExternallyBilled'] = ApiClient.convertToType(data['isExternallyBilled'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} billingProfile
   */
  exports.prototype['billingProfile'] = undefined;
  /**
   * 
   * @member {String} entityName
   */
  exports.prototype['entityName'] = undefined;
  /**
   * 
   * @member {String} externalEntityId
   */
  exports.prototype['externalEntityId'] = undefined;
  /**
   * 
   * @member {String} isExternallyBilled
   */
  exports.prototype['isExternallyBilled'] = undefined;



  return exports;
}));


