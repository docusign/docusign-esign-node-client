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
    define(['ApiClient', 'model/AddressInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AddressInformationInput = factory(root.Docusign.ApiClient, root.Docusign.AddressInformation);
  }
}(this, function(ApiClient, AddressInformation) {
  'use strict';


  /**
   * The AddressInformationInput model module.
   * @module model/AddressInformationInput
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AddressInformationInput</code>.
   * Contains address input information.
   * @alias module:model/AddressInformationInput
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AddressInformationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressInformationInput} obj Optional instance to populate.
   * @return {module:model/AddressInformationInput} The populated <code>AddressInformationInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressInformation')) {
        obj['addressInformation'] = AddressInformation.constructFromObject(data['addressInformation']);
      }
      if (data.hasOwnProperty('displayLevelCode')) {
        obj['displayLevelCode'] = ApiClient.convertToType(data['displayLevelCode'], 'String');
      }
      if (data.hasOwnProperty('receiveInResponse')) {
        obj['receiveInResponse'] = ApiClient.convertToType(data['receiveInResponse'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AddressInformation} addressInformation
   */
  exports.prototype['addressInformation'] = undefined;
  /**
   * Specifies the display level for the recipient.  Valid values are:   * ReadOnly * Editable * DoNotDisplay
   * @member {String} displayLevelCode
   */
  exports.prototype['displayLevelCode'] = undefined;
  /**
   * When set to **true**, the information needs to be returned in the response.
   * @member {String} receiveInResponse
   */
  exports.prototype['receiveInResponse'] = undefined;



  return exports;
}));


