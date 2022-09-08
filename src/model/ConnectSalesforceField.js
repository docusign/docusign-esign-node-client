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
    root.Docusign.ConnectSalesforceField = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConnectSalesforceField model module.
   * @module model/ConnectSalesforceField
   */

  /**
   * Constructs a new <code>ConnectSalesforceField</code>.
   * This object is used to match a DocuSign field to a Salesforce field so that Docusign can send information to your Salesforce account.
   * @alias module:model/ConnectSalesforceField
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectSalesforceField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectSalesforceField} obj Optional instance to populate.
   * @return {module:model/ConnectSalesforceField} The populated <code>ConnectSalesforceField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dsAttribute')) {
        obj['dsAttribute'] = ApiClient.convertToType(data['dsAttribute'], 'String');
      }
      if (data.hasOwnProperty('dsLink')) {
        obj['dsLink'] = ApiClient.convertToType(data['dsLink'], 'String');
      }
      if (data.hasOwnProperty('dsNode')) {
        obj['dsNode'] = ApiClient.convertToType(data['dsNode'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('sfField')) {
        obj['sfField'] = ApiClient.convertToType(data['sfField'], 'String');
      }
      if (data.hasOwnProperty('sfFieldName')) {
        obj['sfFieldName'] = ApiClient.convertToType(data['sfFieldName'], 'String');
      }
      if (data.hasOwnProperty('sfFolder')) {
        obj['sfFolder'] = ApiClient.convertToType(data['sfFolder'], 'String');
      }
      if (data.hasOwnProperty('sfLockedValue')) {
        obj['sfLockedValue'] = ApiClient.convertToType(data['sfLockedValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} dsAttribute
   */
  exports.prototype['dsAttribute'] = undefined;
  /**
   * 
   * @member {String} dsLink
   */
  exports.prototype['dsLink'] = undefined;
  /**
   * 
   * @member {String} dsNode
   */
  exports.prototype['dsNode'] = undefined;
  /**
   * 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {String} sfField
   */
  exports.prototype['sfField'] = undefined;
  /**
   * 
   * @member {String} sfFieldName
   */
  exports.prototype['sfFieldName'] = undefined;
  /**
   * 
   * @member {String} sfFolder
   */
  exports.prototype['sfFolder'] = undefined;
  /**
   * 
   * @member {String} sfLockedValue
   */
  exports.prototype['sfLockedValue'] = undefined;



  return exports;
}));


