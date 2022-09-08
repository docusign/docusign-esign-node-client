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
    root.Docusign.EnvelopeIdsRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeIdsRequest model module.
   * @module model/EnvelopeIdsRequest
   */

  /**
   * Constructs a new <code>EnvelopeIdsRequest</code>.
   * Lists of envelope and transaction IDs to use in the results.  If you use this request body with Envelopes: listStatus, you must set one or both of the following query parameters to the special value `request_body`:  - `envelope_ids=request_body` - `transaction_ids=request_body` 
   * @alias module:model/EnvelopeIdsRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeIdsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeIdsRequest} obj Optional instance to populate.
   * @return {module:model/EnvelopeIdsRequest} The populated <code>EnvelopeIdsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeIds')) {
        obj['envelopeIds'] = ApiClient.convertToType(data['envelopeIds'], ['String']);
      }
      if (data.hasOwnProperty('transactionIds')) {
        obj['transactionIds'] = ApiClient.convertToType(data['transactionIds'], ['String']);
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
   *  A list of transaction Id's used to determining the status of envelopes sent asynchronously. See **transactionId** property on envelopes.
   * @member {Array.<String>} transactionIds
   */
  exports.prototype['transactionIds'] = undefined;



  return exports;
}));


