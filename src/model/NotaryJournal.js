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
    define(['ApiClient', 'model/Jurisdiction', 'model/NotaryJournalMetaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Jurisdiction'), require('./NotaryJournalMetaData'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotaryJournal = factory(root.Docusign.ApiClient, root.Docusign.Jurisdiction, root.Docusign.NotaryJournalMetaData);
  }
}(this, function(ApiClient, Jurisdiction, NotaryJournalMetaData) {
  'use strict';


  /**
   * The NotaryJournal model module.
   * @module model/NotaryJournal
   */

  /**
   * Constructs a new <code>NotaryJournal</code>.
   * @alias module:model/NotaryJournal
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotaryJournal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotaryJournal} obj Optional instance to populate.
   * @return {module:model/NotaryJournal} The populated <code>NotaryJournal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('documentName')) {
        obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
      }
      if (data.hasOwnProperty('jurisdiction')) {
        obj['jurisdiction'] = Jurisdiction.constructFromObject(data['jurisdiction']);
      }
      if (data.hasOwnProperty('notaryJournalId')) {
        obj['notaryJournalId'] = ApiClient.convertToType(data['notaryJournalId'], 'String');
      }
      if (data.hasOwnProperty('notaryJournalMetaData')) {
        obj['notaryJournalMetaData'] = NotaryJournalMetaData.constructFromObject(data['notaryJournalMetaData']);
      }
      if (data.hasOwnProperty('signerName')) {
        obj['signerName'] = ApiClient.convertToType(data['signerName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * 
   * @member {String} documentName
   */
  exports.prototype['documentName'] = undefined;
  /**
   * The notary's jurisdiction. 
   * @member {module:model/Jurisdiction} jurisdiction
   */
  exports.prototype['jurisdiction'] = undefined;
  /**
   * 
   * @member {String} notaryJournalId
   */
  exports.prototype['notaryJournalId'] = undefined;
  /**
   * Additional journal data such as the witness list and signature image.
   * @member {module:model/NotaryJournalMetaData} notaryJournalMetaData
   */
  exports.prototype['notaryJournalMetaData'] = undefined;
  /**
   * 
   * @member {String} signerName
   */
  exports.prototype['signerName'] = undefined;



  return exports;
}));


