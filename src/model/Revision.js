/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
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
    root.Docusign.Revision = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Revision model module.
   * @module model/Revision
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Revision</code>.
   * @alias module:model/Revision
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Revision</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Revision} obj Optional instance to populate.
   * @return {module:model/Revision} The populated <code>Revision</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endData')) {
        obj['endData'] = ApiClient.convertToType(data['endData'], 'String');
      }
      if (data.hasOwnProperty('fieldName')) {
        obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
      }
      if (data.hasOwnProperty('maxSignatureLength')) {
        obj['maxSignatureLength'] = ApiClient.convertToType(data['maxSignatureLength'], 'String');
      }
      if (data.hasOwnProperty('signatureType')) {
        obj['signatureType'] = ApiClient.convertToType(data['signatureType'], 'String');
      }
      if (data.hasOwnProperty('startData')) {
        obj['startData'] = ApiClient.convertToType(data['startData'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} endData
   */
  exports.prototype['endData'] = undefined;
  /**
   * 
   * @member {String} fieldName
   */
  exports.prototype['fieldName'] = undefined;
  /**
   * 
   * @member {String} maxSignatureLength
   */
  exports.prototype['maxSignatureLength'] = undefined;
  /**
   * 
   * @member {String} signatureType
   */
  exports.prototype['signatureType'] = undefined;
  /**
   * 
   * @member {String} startData
   */
  exports.prototype['startData'] = undefined;



  return exports;
}));


