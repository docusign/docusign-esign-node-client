/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/ConnectedData', 'model/ConnectionInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectedData'), require('./ConnectionInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ExtensionData = factory(root.Docusign.ApiClient, root.Docusign.ConnectedData, root.Docusign.ConnectionInstance);
  }
}(this, function(ApiClient, ConnectedData, ConnectionInstance) {
  'use strict';


  /**
   * The ExtensionData model module.
   * @module model/ExtensionData
   */

  /**
   * Constructs a new <code>ExtensionData</code>.
   * @alias module:model/ExtensionData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExtensionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtensionData} obj Optional instance to populate.
   * @return {module:model/ExtensionData} The populated <code>ExtensionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionContract')) {
        obj['actionContract'] = ApiClient.convertToType(data['actionContract'], 'String');
      }
      if (data.hasOwnProperty('actionInputKey')) {
        obj['actionInputKey'] = ApiClient.convertToType(data['actionInputKey'], 'String');
      }
      if (data.hasOwnProperty('actionName')) {
        obj['actionName'] = ApiClient.convertToType(data['actionName'], 'String');
      }
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'String');
      }
      if (data.hasOwnProperty('applicationName')) {
        obj['applicationName'] = ApiClient.convertToType(data['applicationName'], 'String');
      }
      if (data.hasOwnProperty('connectedFieldsData')) {
        obj['connectedFieldsData'] = ConnectedData.constructFromObject(data['connectedFieldsData']);
      }
      if (data.hasOwnProperty('connectionInstances')) {
        obj['connectionInstances'] = ApiClient.convertToType(data['connectionInstances'], [ConnectionInstance]);
      }
      if (data.hasOwnProperty('extensionContract')) {
        obj['extensionContract'] = ApiClient.convertToType(data['extensionContract'], 'String');
      }
      if (data.hasOwnProperty('extensionGroupId')) {
        obj['extensionGroupId'] = ApiClient.convertToType(data['extensionGroupId'], 'String');
      }
      if (data.hasOwnProperty('extensionName')) {
        obj['extensionName'] = ApiClient.convertToType(data['extensionName'], 'String');
      }
      if (data.hasOwnProperty('extensionPolicy')) {
        obj['extensionPolicy'] = ApiClient.convertToType(data['extensionPolicy'], 'String');
      }
      if (data.hasOwnProperty('publisherName')) {
        obj['publisherName'] = ApiClient.convertToType(data['publisherName'], 'String');
      }
      if (data.hasOwnProperty('requiredForExtension')) {
        obj['requiredForExtension'] = ApiClient.convertToType(data['requiredForExtension'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} actionContract
   */
  exports.prototype['actionContract'] = undefined;
  /**
   * 
   * @member {String} actionInputKey
   */
  exports.prototype['actionInputKey'] = undefined;
  /**
   * 
   * @member {String} actionName
   */
  exports.prototype['actionName'] = undefined;
  /**
   * 
   * @member {String} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * 
   * @member {String} applicationName
   */
  exports.prototype['applicationName'] = undefined;
  /**
   * 
   * @member {module:model/ConnectedData} connectedFieldsData
   */
  exports.prototype['connectedFieldsData'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ConnectionInstance>} connectionInstances
   */
  exports.prototype['connectionInstances'] = undefined;
  /**
   * 
   * @member {String} extensionContract
   */
  exports.prototype['extensionContract'] = undefined;
  /**
   * 
   * @member {String} extensionGroupId
   */
  exports.prototype['extensionGroupId'] = undefined;
  /**
   * 
   * @member {String} extensionName
   */
  exports.prototype['extensionName'] = undefined;
  /**
   * 
   * @member {String} extensionPolicy
   */
  exports.prototype['extensionPolicy'] = undefined;
  /**
   * 
   * @member {String} publisherName
   */
  exports.prototype['publisherName'] = undefined;
  /**
   * 
   * @member {String} requiredForExtension
   */
  exports.prototype['requiredForExtension'] = undefined;



  return exports;
}));


