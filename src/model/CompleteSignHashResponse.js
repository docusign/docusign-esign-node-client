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
    define(['ApiClient', 'model/SignHashDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SignHashDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CompleteSignHashResponse = factory(root.Docusign.ApiClient, root.Docusign.SignHashDocument);
  }
}(this, function(ApiClient, SignHashDocument) {
  'use strict';


  /**
   * The CompleteSignHashResponse model module.
   * @module model/CompleteSignHashResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CompleteSignHashResponse</code>.
   * @alias module:model/CompleteSignHashResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CompleteSignHashResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompleteSignHashResponse} obj Optional instance to populate.
   * @return {module:model/CompleteSignHashResponse} The populated <code>CompleteSignHashResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [SignHashDocument]);
      }
      if (data.hasOwnProperty('redirectionUrl')) {
        obj['redirectionUrl'] = ApiClient.convertToType(data['redirectionUrl'], 'String');
      }
      if (data.hasOwnProperty('remainingSignatureRequests')) {
        obj['remainingSignatureRequests'] = ApiClient.convertToType(data['remainingSignatureRequests'], 'String');
      }
    }
    return obj;
  }

  /**
   * Complex element contains the details on the documents in the envelope.
   * @member {Array.<module:model/SignHashDocument>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * 
   * @member {String} redirectionUrl
   */
  exports.prototype['redirectionUrl'] = undefined;
  /**
   * 
   * @member {String} remainingSignatureRequests
   */
  exports.prototype['remainingSignatureRequests'] = undefined;



  return exports;
}));


