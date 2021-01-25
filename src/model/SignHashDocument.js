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
    define(['ApiClient', 'model/Revision', 'model/SignatureProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Revision'), require('./SignatureProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SignHashDocument = factory(root.Docusign.ApiClient, root.Docusign.Revision, root.Docusign.SignatureProperties);
  }
}(this, function(ApiClient, Revision, SignatureProperties) {
  'use strict';


  /**
   * The SignHashDocument model module.
   * @module model/SignHashDocument
   */

  /**
   * Constructs a new <code>SignHashDocument</code>.
   * @alias module:model/SignHashDocument
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignHashDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignHashDocument} obj Optional instance to populate.
   * @return {module:model/SignHashDocument} The populated <code>SignHashDocument</code> instance.
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
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('remainingSignatures')) {
        obj['remainingSignatures'] = ApiClient.convertToType(data['remainingSignatures'], 'Number');
      }
      if (data.hasOwnProperty('revisions')) {
        obj['revisions'] = ApiClient.convertToType(data['revisions'], [Revision]);
      }
      if (data.hasOwnProperty('signatureProperties')) {
        obj['signatureProperties'] = SignatureProperties.constructFromObject(data['signatureProperties']);
      }
      if (data.hasOwnProperty('signatureType')) {
        obj['signatureType'] = ApiClient.convertToType(data['signatureType'], 'String');
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
   * 
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {Number} remainingSignatures
   */
  exports.prototype['remainingSignatures'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Revision>} revisions
   */
  exports.prototype['revisions'] = undefined;
  /**
   * @member {module:model/SignatureProperties} signatureProperties
   */
  exports.prototype['signatureProperties'] = undefined;
  /**
   * 
   * @member {String} signatureType
   */
  exports.prototype['signatureType'] = undefined;



  return exports;
}));


