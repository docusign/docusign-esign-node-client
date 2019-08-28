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
    root.Docusign.DobInformationInput = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DobInformationInput model module.
   * @module model/DobInformationInput
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DobInformationInput</code>.
   * Complex type containing:  * dateOfBirth * displayLevelCode * receiveInResponse
   * @alias module:model/DobInformationInput
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DobInformationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DobInformationInput} obj Optional instance to populate.
   * @return {module:model/DobInformationInput} The populated <code>DobInformationInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dateOfBirth')) {
        obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'String');
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
   * Specifies the recipient's date, month, and year of birth.
   * @member {String} dateOfBirth
   */
  exports.prototype['dateOfBirth'] = undefined;
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


