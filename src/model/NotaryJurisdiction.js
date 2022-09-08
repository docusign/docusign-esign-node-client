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
    define(['ApiClient', 'model/ErrorDetails', 'model/Jurisdiction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./Jurisdiction'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotaryJurisdiction = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.Jurisdiction);
  }
}(this, function(ApiClient, ErrorDetails, Jurisdiction) {
  'use strict';


  /**
   * The NotaryJurisdiction model module.
   * @module model/NotaryJurisdiction
   */

  /**
   * Constructs a new <code>NotaryJurisdiction</code>.
   * A notary jurisdiction.
   * @alias module:model/NotaryJurisdiction
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotaryJurisdiction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotaryJurisdiction} obj Optional instance to populate.
   * @return {module:model/NotaryJurisdiction} The populated <code>NotaryJurisdiction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('commissionExpiration')) {
        obj['commissionExpiration'] = ApiClient.convertToType(data['commissionExpiration'], 'String');
      }
      if (data.hasOwnProperty('commissionId')) {
        obj['commissionId'] = ApiClient.convertToType(data['commissionId'], 'String');
      }
      if (data.hasOwnProperty('county')) {
        obj['county'] = ApiClient.convertToType(data['county'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('jurisdiction')) {
        obj['jurisdiction'] = Jurisdiction.constructFromObject(data['jurisdiction']);
      }
      if (data.hasOwnProperty('registeredName')) {
        obj['registeredName'] = ApiClient.convertToType(data['registeredName'], 'String');
      }
      if (data.hasOwnProperty('sealType')) {
        obj['sealType'] = ApiClient.convertToType(data['sealType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} commissionExpiration
   */
  exports.prototype['commissionExpiration'] = undefined;
  /**
   * 
   * @member {String} commissionId
   */
  exports.prototype['commissionId'] = undefined;
  /**
   * 
   * @member {String} county
   */
  exports.prototype['county'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Description of the jurisdiction for this notary. This is a read-only property.
   * @member {module:model/Jurisdiction} jurisdiction
   */
  exports.prototype['jurisdiction'] = undefined;
  /**
   * 
   * @member {String} registeredName
   */
  exports.prototype['registeredName'] = undefined;
  /**
   * 
   * @member {String} sealType
   */
  exports.prototype['sealType'] = undefined;



  return exports;
}));


