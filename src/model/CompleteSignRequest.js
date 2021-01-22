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
    define(['ApiClient', 'model/DocumentUpdateInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentUpdateInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CompleteSignRequest = factory(root.Docusign.ApiClient, root.Docusign.DocumentUpdateInfo);
  }
}(this, function(ApiClient, DocumentUpdateInfo) {
  'use strict';


  /**
   * The CompleteSignRequest model module.
   * @module model/CompleteSignRequest
   */

  /**
   * Constructs a new <code>CompleteSignRequest</code>.
   * @alias module:model/CompleteSignRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CompleteSignRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompleteSignRequest} obj Optional instance to populate.
   * @return {module:model/CompleteSignRequest} The populated <code>CompleteSignRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('certificate')) {
        obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
      }
      if (data.hasOwnProperty('correlationId')) {
        obj['correlationId'] = ApiClient.convertToType(data['correlationId'], 'String');
      }
      if (data.hasOwnProperty('documentUpdateInfos')) {
        obj['documentUpdateInfos'] = ApiClient.convertToType(data['documentUpdateInfos'], [DocumentUpdateInfo]);
      }
      if (data.hasOwnProperty('maxSignatureLength')) {
        obj['maxSignatureLength'] = ApiClient.convertToType(data['maxSignatureLength'], 'String');
      }
      if (data.hasOwnProperty('signingLocation')) {
        obj['signingLocation'] = ApiClient.convertToType(data['signingLocation'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} certificate
   */
  exports.prototype['certificate'] = undefined;
  /**
   * 
   * @member {String} correlationId
   */
  exports.prototype['correlationId'] = undefined;
  /**
   * 
   * @member {Array.<module:model/DocumentUpdateInfo>} documentUpdateInfos
   */
  exports.prototype['documentUpdateInfos'] = undefined;
  /**
   * 
   * @member {String} maxSignatureLength
   */
  exports.prototype['maxSignatureLength'] = undefined;
  /**
   * Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
   * @member {String} signingLocation
   */
  exports.prototype['signingLocation'] = undefined;
  /**
   *  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;



  return exports;
}));


