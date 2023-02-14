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
    define(['ApiClient', 'model/JurisdictionSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JurisdictionSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotaryContactDetails = factory(root.Docusign.ApiClient, root.Docusign.JurisdictionSummary);
  }
}(this, function(ApiClient, JurisdictionSummary) {
  'use strict';


  /**
   * The NotaryContactDetails model module.
   * @module model/NotaryContactDetails
   */

  /**
   * Constructs a new <code>NotaryContactDetails</code>.
   * @alias module:model/NotaryContactDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotaryContactDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotaryContactDetails} obj Optional instance to populate.
   * @return {module:model/NotaryContactDetails} The populated <code>NotaryContactDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hasDocusignCertificate')) {
        obj['hasDocusignCertificate'] = ApiClient.convertToType(data['hasDocusignCertificate'], 'String');
      }
      if (data.hasOwnProperty('jurisdictions')) {
        obj['jurisdictions'] = ApiClient.convertToType(data['jurisdictions'], [JurisdictionSummary]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} hasDocusignCertificate
   */
  exports.prototype['hasDocusignCertificate'] = undefined;
  /**
   * 
   * @member {Array.<module:model/JurisdictionSummary>} jurisdictions
   */
  exports.prototype['jurisdictions'] = undefined;



  return exports;
}));


