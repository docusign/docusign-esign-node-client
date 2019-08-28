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
    define(['ApiClient', 'model/PowerFormFormDataRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PowerFormFormDataRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PowerFormFormDataEnvelope = factory(root.Docusign.ApiClient, root.Docusign.PowerFormFormDataRecipient);
  }
}(this, function(ApiClient, PowerFormFormDataRecipient) {
  'use strict';


  /**
   * The PowerFormFormDataEnvelope model module.
   * @module model/PowerFormFormDataEnvelope
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PowerFormFormDataEnvelope</code>.
   * @alias module:model/PowerFormFormDataEnvelope
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PowerFormFormDataEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PowerFormFormDataEnvelope} obj Optional instance to populate.
   * @return {module:model/PowerFormFormDataEnvelope} The populated <code>PowerFormFormDataEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [PowerFormFormDataRecipient]);
      }
    }
    return obj;
  }

  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * An array of powerform recipients.
   * @member {Array.<module:model/PowerFormFormDataRecipient>} recipients
   */
  exports.prototype['recipients'] = undefined;



  return exports;
}));


