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
    define(['ApiClient', 'model/PowerFormFormDataEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PowerFormFormDataEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PowerFormsFormDataResponse = factory(root.Docusign.ApiClient, root.Docusign.PowerFormFormDataEnvelope);
  }
}(this, function(ApiClient, PowerFormFormDataEnvelope) {
  'use strict';


  /**
   * The PowerFormsFormDataResponse model module.
   * @module model/PowerFormsFormDataResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PowerFormsFormDataResponse</code>.
   * @alias module:model/PowerFormsFormDataResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PowerFormsFormDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PowerFormsFormDataResponse} obj Optional instance to populate.
   * @return {module:model/PowerFormsFormDataResponse} The populated <code>PowerFormsFormDataResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], [PowerFormFormDataEnvelope]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/PowerFormFormDataEnvelope>} envelopes
   */
  exports.prototype['envelopes'] = undefined;



  return exports;
}));


