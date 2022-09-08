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
    root.Docusign.ReturnUrlRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ReturnUrlRequest model module.
   * @module model/ReturnUrlRequest
   */

  /**
   * Constructs a new <code>ReturnUrlRequest</code>.
   * The request body for the [EnvelopeViews: createSender](/docs/esign-rest-api/reference/envelopes/envelopeviews/createsender/) method.
   * @alias module:model/ReturnUrlRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReturnUrlRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReturnUrlRequest} obj Optional instance to populate.
   * @return {module:model/ReturnUrlRequest} The populated <code>ReturnUrlRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifies the return point after sending the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are:   * send (user sends the envelope) * save (user saves the envelope) * cancel (user cancels the sending transaction. No envelopeId is returned in this case.) * error (there is an error when performing the send) * sessionEnd (the sending session ends before the user completes another action).
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;



  return exports;
}));


