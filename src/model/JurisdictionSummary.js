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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.JurisdictionSummary = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The JurisdictionSummary model module.
   * @module model/JurisdictionSummary
   */

  /**
   * Constructs a new <code>JurisdictionSummary</code>.
   * @alias module:model/JurisdictionSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>JurisdictionSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JurisdictionSummary} obj Optional instance to populate.
   * @return {module:model/JurisdictionSummary} The populated <code>JurisdictionSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorizedForIPen')) {
        obj['authorizedForIPen'] = ApiClient.convertToType(data['authorizedForIPen'], 'String');
      }
      if (data.hasOwnProperty('authorizedForRon')) {
        obj['authorizedForRon'] = ApiClient.convertToType(data['authorizedForRon'], 'String');
      }
      if (data.hasOwnProperty('jurisdictionId')) {
        obj['jurisdictionId'] = ApiClient.convertToType(data['jurisdictionId'], 'String');
      }
      if (data.hasOwnProperty('jurisdictionName')) {
        obj['jurisdictionName'] = ApiClient.convertToType(data['jurisdictionName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} authorizedForIPen
   */
  exports.prototype['authorizedForIPen'] = undefined;
  /**
   * 
   * @member {String} authorizedForRon
   */
  exports.prototype['authorizedForRon'] = undefined;
  /**
   * 
   * @member {String} jurisdictionId
   */
  exports.prototype['jurisdictionId'] = undefined;
  /**
   * 
   * @member {String} jurisdictionName
   */
  exports.prototype['jurisdictionName'] = undefined;



  return exports;
}));


