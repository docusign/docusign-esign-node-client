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
    root.Docusign.ConnectFailureResult = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConnectFailureResult model module.
   * @module model/ConnectFailureResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConnectFailureResult</code>.
   * @alias module:model/ConnectFailureResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectFailureResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectFailureResult} obj Optional instance to populate.
   * @return {module:model/ConnectFailureResult} The populated <code>ConnectFailureResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configId')) {
        obj['configId'] = ApiClient.convertToType(data['configId'], 'String');
      }
      if (data.hasOwnProperty('configUrl')) {
        obj['configUrl'] = ApiClient.convertToType(data['configUrl'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusMessage')) {
        obj['statusMessage'] = ApiClient.convertToType(data['statusMessage'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} configId
   */
  exports.prototype['configId'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} configUrl
   */
  exports.prototype['configUrl'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} statusMessage
   */
  exports.prototype['statusMessage'] = undefined;



  return exports;
}));


