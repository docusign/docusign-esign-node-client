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
    root.Docusign.Jurisdiction = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Jurisdiction model module.
   * @module model/Jurisdiction
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Jurisdiction</code>.
   * @alias module:model/Jurisdiction
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Jurisdiction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Jurisdiction} obj Optional instance to populate.
   * @return {module:model/Jurisdiction} The populated <code>Jurisdiction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowSystemCreatedSeal')) {
        obj['allowSystemCreatedSeal'] = ApiClient.convertToType(data['allowSystemCreatedSeal'], 'String');
      }
      if (data.hasOwnProperty('allowUserUploadedSeal')) {
        obj['allowUserUploadedSeal'] = ApiClient.convertToType(data['allowUserUploadedSeal'], 'String');
      }
      if (data.hasOwnProperty('commissionIdInSeal')) {
        obj['commissionIdInSeal'] = ApiClient.convertToType(data['commissionIdInSeal'], 'String');
      }
      if (data.hasOwnProperty('county')) {
        obj['county'] = ApiClient.convertToType(data['county'], 'String');
      }
      if (data.hasOwnProperty('countyInSeal')) {
        obj['countyInSeal'] = ApiClient.convertToType(data['countyInSeal'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'String');
      }
      if (data.hasOwnProperty('jurisdictionId')) {
        obj['jurisdictionId'] = ApiClient.convertToType(data['jurisdictionId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('notaryPublicInSeal')) {
        obj['notaryPublicInSeal'] = ApiClient.convertToType(data['notaryPublicInSeal'], 'String');
      }
      if (data.hasOwnProperty('stateNameInSeal')) {
        obj['stateNameInSeal'] = ApiClient.convertToType(data['stateNameInSeal'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} allowSystemCreatedSeal
   */
  exports.prototype['allowSystemCreatedSeal'] = undefined;
  /**
   * 
   * @member {String} allowUserUploadedSeal
   */
  exports.prototype['allowUserUploadedSeal'] = undefined;
  /**
   * 
   * @member {String} commissionIdInSeal
   */
  exports.prototype['commissionIdInSeal'] = undefined;
  /**
   * 
   * @member {String} county
   */
  exports.prototype['county'] = undefined;
  /**
   * 
   * @member {String} countyInSeal
   */
  exports.prototype['countyInSeal'] = undefined;
  /**
   * 
   * @member {String} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * 
   * @member {String} jurisdictionId
   */
  exports.prototype['jurisdictionId'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} notaryPublicInSeal
   */
  exports.prototype['notaryPublicInSeal'] = undefined;
  /**
   * 
   * @member {String} stateNameInSeal
   */
  exports.prototype['stateNameInSeal'] = undefined;



  return exports;
}));


