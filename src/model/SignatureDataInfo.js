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
    define(['ApiClient', 'model/DocumentSecurityStore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentSecurityStore'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SignatureDataInfo = factory(root.Docusign.ApiClient, root.Docusign.DocumentSecurityStore);
  }
}(this, function(ApiClient, DocumentSecurityStore) {
  'use strict';


  /**
   * The SignatureDataInfo model module.
   * @module model/SignatureDataInfo
   */

  /**
   * Constructs a new <code>SignatureDataInfo</code>.
   * @alias module:model/SignatureDataInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignatureDataInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureDataInfo} obj Optional instance to populate.
   * @return {module:model/SignatureDataInfo} The populated <code>SignatureDataInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentSecurityStore')) {
        obj['documentSecurityStore'] = DocumentSecurityStore.constructFromObject(data['documentSecurityStore']);
      }
      if (data.hasOwnProperty('signatureData')) {
        obj['signatureData'] = ApiClient.convertToType(data['signatureData'], 'String');
      }
      if (data.hasOwnProperty('signatureFieldName')) {
        obj['signatureFieldName'] = ApiClient.convertToType(data['signatureFieldName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DocumentSecurityStore} documentSecurityStore
   */
  exports.prototype['documentSecurityStore'] = undefined;
  /**
   * 
   * @member {String} signatureData
   */
  exports.prototype['signatureData'] = undefined;
  /**
   * 
   * @member {String} signatureFieldName
   */
  exports.prototype['signatureFieldName'] = undefined;



  return exports;
}));


