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
    define(['ApiClient', 'model/EnvelopeDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeDocumentsResult = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeDocument);
  }
}(this, function(ApiClient, EnvelopeDocument) {
  'use strict';


  /**
   * The EnvelopeDocumentsResult model module.
   * @module model/EnvelopeDocumentsResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeDocumentsResult</code>.
   * @alias module:model/EnvelopeDocumentsResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeDocumentsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeDocumentsResult} obj Optional instance to populate.
   * @return {module:model/EnvelopeDocumentsResult} The populated <code>EnvelopeDocumentsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeDocuments')) {
        obj['envelopeDocuments'] = ApiClient.convertToType(data['envelopeDocuments'], [EnvelopeDocument]);
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/EnvelopeDocument>} envelopeDocuments
   */
  exports.prototype['envelopeDocuments'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;



  return exports;
}));


