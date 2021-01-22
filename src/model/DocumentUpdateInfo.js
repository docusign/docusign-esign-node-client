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
    define(['ApiClient', 'model/DocumentSecurityStore', 'model/SignatureDataInfo', 'model/TimeStampField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentSecurityStore'), require('./SignatureDataInfo'), require('./TimeStampField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocumentUpdateInfo = factory(root.Docusign.ApiClient, root.Docusign.DocumentSecurityStore, root.Docusign.SignatureDataInfo, root.Docusign.TimeStampField);
  }
}(this, function(ApiClient, DocumentSecurityStore, SignatureDataInfo, TimeStampField) {
  'use strict';


  /**
   * The DocumentUpdateInfo model module.
   * @module model/DocumentUpdateInfo
   */

  /**
   * Constructs a new <code>DocumentUpdateInfo</code>.
   * @alias module:model/DocumentUpdateInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentUpdateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentUpdateInfo} obj Optional instance to populate.
   * @return {module:model/DocumentUpdateInfo} The populated <code>DocumentUpdateInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentSecurityStore')) {
        obj['documentSecurityStore'] = DocumentSecurityStore.constructFromObject(data['documentSecurityStore']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('returnFormat')) {
        obj['returnFormat'] = ApiClient.convertToType(data['returnFormat'], 'String');
      }
      if (data.hasOwnProperty('signatureDataInfos')) {
        obj['signatureDataInfos'] = ApiClient.convertToType(data['signatureDataInfos'], [SignatureDataInfo]);
      }
      if (data.hasOwnProperty('timeStampField')) {
        obj['timeStampField'] = TimeStampField.constructFromObject(data['timeStampField']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * @member {module:model/DocumentSecurityStore} documentSecurityStore
   */
  exports.prototype['documentSecurityStore'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} returnFormat
   */
  exports.prototype['returnFormat'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SignatureDataInfo>} signatureDataInfos
   */
  exports.prototype['signatureDataInfos'] = undefined;
  /**
   * @member {module:model/TimeStampField} timeStampField
   */
  exports.prototype['timeStampField'] = undefined;



  return exports;
}));


