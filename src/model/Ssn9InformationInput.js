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
    root.Docusign.Ssn9InformationInput = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Ssn9InformationInput model module.
   * @module model/Ssn9InformationInput
   */

  /**
   * Constructs a new <code>Ssn9InformationInput</code>.
   * @alias module:model/Ssn9InformationInput
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ssn9InformationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ssn9InformationInput} obj Optional instance to populate.
   * @return {module:model/Ssn9InformationInput} The populated <code>Ssn9InformationInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayLevelCode')) {
        obj['displayLevelCode'] = ApiClient.convertToType(data['displayLevelCode'], 'String');
      }
      if (data.hasOwnProperty('ssn9')) {
        obj['ssn9'] = ApiClient.convertToType(data['ssn9'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the display level for the recipient.  Valid values are:   * ReadOnly * Editable * DoNotDisplay
   * @member {String} displayLevelCode
   */
  exports.prototype['displayLevelCode'] = undefined;
  /**
   *  The recipient's Social Security Number(SSN).
   * @member {String} ssn9
   */
  exports.prototype['ssn9'] = undefined;



  return exports;
}));


