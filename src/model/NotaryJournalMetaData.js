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
    define(['ApiClient', 'model/NotaryJournalCredibleWitness'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotaryJournalCredibleWitness'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotaryJournalMetaData = factory(root.Docusign.ApiClient, root.Docusign.NotaryJournalCredibleWitness);
  }
}(this, function(ApiClient, NotaryJournalCredibleWitness) {
  'use strict';


  /**
   * The NotaryJournalMetaData model module.
   * @module model/NotaryJournalMetaData
   */

  /**
   * Constructs a new <code>NotaryJournalMetaData</code>.
   * @alias module:model/NotaryJournalMetaData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotaryJournalMetaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotaryJournalMetaData} obj Optional instance to populate.
   * @return {module:model/NotaryJournalMetaData} The populated <code>NotaryJournalMetaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('credibleWitnesses')) {
        obj['credibleWitnesses'] = ApiClient.convertToType(data['credibleWitnesses'], [NotaryJournalCredibleWitness]);
      }
      if (data.hasOwnProperty('signatureImage')) {
        obj['signatureImage'] = ApiClient.convertToType(data['signatureImage'], 'String');
      }
      if (data.hasOwnProperty('signerIdType')) {
        obj['signerIdType'] = ApiClient.convertToType(data['signerIdType'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NotaryJournalCredibleWitness>} credibleWitnesses
   */
  exports.prototype['credibleWitnesses'] = undefined;
  /**
   * 
   * @member {String} signatureImage
   */
  exports.prototype['signatureImage'] = undefined;
  /**
   * 
   * @member {String} signerIdType
   */
  exports.prototype['signerIdType'] = undefined;



  return exports;
}));


