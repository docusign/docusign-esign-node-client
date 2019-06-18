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
    define(['ApiClient', 'model/ConnectSalesforceField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectSalesforceField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectSalesforceObject = factory(root.Docusign.ApiClient, root.Docusign.ConnectSalesforceField);
  }
}(this, function(ApiClient, ConnectSalesforceField) {
  'use strict';


  /**
   * The ConnectSalesforceObject model module.
   * @module model/ConnectSalesforceObject
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConnectSalesforceObject</code>.
   * @alias module:model/ConnectSalesforceObject
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectSalesforceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectSalesforceObject} obj Optional instance to populate.
   * @return {module:model/ConnectSalesforceObject} The populated <code>ConnectSalesforceObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('insert')) {
        obj['insert'] = ApiClient.convertToType(data['insert'], 'String');
      }
      if (data.hasOwnProperty('onCompleteOnly')) {
        obj['onCompleteOnly'] = ApiClient.convertToType(data['onCompleteOnly'], 'String');
      }
      if (data.hasOwnProperty('selectFields')) {
        obj['selectFields'] = ApiClient.convertToType(data['selectFields'], [ConnectSalesforceField]);
      }
      if (data.hasOwnProperty('sfObject')) {
        obj['sfObject'] = ApiClient.convertToType(data['sfObject'], 'String');
      }
      if (data.hasOwnProperty('sfObjectName')) {
        obj['sfObjectName'] = ApiClient.convertToType(data['sfObjectName'], 'String');
      }
      if (data.hasOwnProperty('updateFields')) {
        obj['updateFields'] = ApiClient.convertToType(data['updateFields'], [ConnectSalesforceField]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} active
   */
  exports.prototype['active'] = undefined;
  /**
   * 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {String} insert
   */
  exports.prototype['insert'] = undefined;
  /**
   * 
   * @member {String} onCompleteOnly
   */
  exports.prototype['onCompleteOnly'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ConnectSalesforceField>} selectFields
   */
  exports.prototype['selectFields'] = undefined;
  /**
   * 
   * @member {String} sfObject
   */
  exports.prototype['sfObject'] = undefined;
  /**
   * 
   * @member {String} sfObjectName
   */
  exports.prototype['sfObjectName'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ConnectSalesforceField>} updateFields
   */
  exports.prototype['updateFields'] = undefined;



  return exports;
}));


