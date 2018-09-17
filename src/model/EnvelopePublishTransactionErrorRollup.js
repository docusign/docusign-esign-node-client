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
    root.Docusign.EnvelopePublishTransactionErrorRollup = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopePublishTransactionErrorRollup model module.
   * @module model/EnvelopePublishTransactionErrorRollup
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopePublishTransactionErrorRollup</code>.
   * @alias module:model/EnvelopePublishTransactionErrorRollup
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopePublishTransactionErrorRollup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopePublishTransactionErrorRollup} obj Optional instance to populate.
   * @return {module:model/EnvelopePublishTransactionErrorRollup} The populated <code>EnvelopePublishTransactionErrorRollup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'String');
      }
      if (data.hasOwnProperty('errorType')) {
        obj['errorType'] = ApiClient.convertToType(data['errorType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} count
   */
  exports.prototype['count'] = undefined;
  /**
   * 
   * @member {String} errorType
   */
  exports.prototype['errorType'] = undefined;



  return exports;
}));


