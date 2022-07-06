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
    define(['ApiClient', 'model/ConnectCustomConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectCustomConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectHistoricalEnvelopeRepublish = factory(root.Docusign.ApiClient, root.Docusign.ConnectCustomConfiguration);
  }
}(this, function(ApiClient, ConnectCustomConfiguration) {
  'use strict';


  /**
   * The ConnectHistoricalEnvelopeRepublish model module.
   * @module model/ConnectHistoricalEnvelopeRepublish
   */

  /**
   * Constructs a new <code>ConnectHistoricalEnvelopeRepublish</code>.
   * @alias module:model/ConnectHistoricalEnvelopeRepublish
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectHistoricalEnvelopeRepublish</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectHistoricalEnvelopeRepublish} obj Optional instance to populate.
   * @return {module:model/ConnectHistoricalEnvelopeRepublish} The populated <code>ConnectHistoricalEnvelopeRepublish</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('config')) {
        obj['config'] = ConnectCustomConfiguration.constructFromObject(data['config']);
      }
      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ConnectCustomConfiguration} config
   */
  exports.prototype['config'] = undefined;
  /**
   * 
   * @member {Array.<String>} envelopes
   */
  exports.prototype['envelopes'] = undefined;



  return exports;
}));


