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
    root.Docusign.ConnectFailureFilter = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConnectFailureFilter model module.
   * @module model/ConnectFailureFilter
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConnectFailureFilter</code>.
   * @alias module:model/ConnectFailureFilter
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectFailureFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectFailureFilter} obj Optional instance to populate.
   * @return {module:model/ConnectFailureFilter} The populated <code>ConnectFailureFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeIds')) {
        obj['envelopeIds'] = ApiClient.convertToType(data['envelopeIds'], ['String']);
      }
      if (data.hasOwnProperty('synchronous')) {
        obj['synchronous'] = ApiClient.convertToType(data['synchronous'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} envelopeIds
   */
  exports.prototype['envelopeIds'] = undefined;
  /**
   * 
   * @member {String} synchronous
   */
  exports.prototype['synchronous'] = undefined;



  return exports;
}));


