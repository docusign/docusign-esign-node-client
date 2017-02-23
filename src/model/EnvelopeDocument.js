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
    define(['ApiClient', 'model/ErrorDetails', 'model/SignatureType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./SignatureType'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeDocument = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.SignatureType);
  }
}(this, function(ApiClient, ErrorDetails, SignatureType) {
  'use strict';


  /**
   * The EnvelopeDocument model module.
   * @module model/EnvelopeDocument
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeDocument</code>.
   * @alias module:model/EnvelopeDocument
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeDocument} obj Optional instance to populate.
   * @return {module:model/EnvelopeDocument} The populated <code>EnvelopeDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('pages')) {
        obj['pages'] = ApiClient.convertToType(data['pages'], 'String');
      }
      if (data.hasOwnProperty('containsPdfFormFields')) {
        obj['containsPdfFormFields'] = ApiClient.convertToType(data['containsPdfFormFields'], 'String');
      }
      if (data.hasOwnProperty('availableDocumentTypes')) {
        obj['availableDocumentTypes'] = ApiClient.convertToType(data['availableDocumentTypes'], [SignatureType]);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
    }
    return obj;
  }

  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 
   * @member {String} pages
   */
  exports.prototype['pages'] = undefined;
  /**
   * 
   * @member {String} containsPdfFormFields
   */
  exports.prototype['containsPdfFormFields'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SignatureType>} availableDocumentTypes
   */
  exports.prototype['availableDocumentTypes'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;



  return exports;
}));


