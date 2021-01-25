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
    root.Docusign.SignSessionInfoRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SignSessionInfoRequest model module.
   * @module model/SignSessionInfoRequest
   */

  /**
   * Constructs a new <code>SignSessionInfoRequest</code>.
   * @alias module:model/SignSessionInfoRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignSessionInfoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignSessionInfoRequest} obj Optional instance to populate.
   * @return {module:model/SignSessionInfoRequest} The populated <code>SignSessionInfoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('certificate')) {
        obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
      }
      if (data.hasOwnProperty('maxSignatureLength')) {
        obj['maxSignatureLength'] = ApiClient.convertToType(data['maxSignatureLength'], 'String');
      }
      if (data.hasOwnProperty('returnFormat')) {
        obj['returnFormat'] = ApiClient.convertToType(data['returnFormat'], 'String');
      }
      if (data.hasOwnProperty('signingLocation')) {
        obj['signingLocation'] = ApiClient.convertToType(data['signingLocation'], 'String');
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
   * @member {String} maxSignatureLength
   */
  exports.prototype['maxSignatureLength'] = undefined;
  /**
   * 
   * @member {String} returnFormat
   */
  exports.prototype['returnFormat'] = undefined;
  /**
   * Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
   * @member {String} signingLocation
   */
  exports.prototype['signingLocation'] = undefined;



  return exports;
}));


