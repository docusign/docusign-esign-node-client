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
    define(['ApiClient', 'model/BulkEnvelopeStatus', 'model/ErrorDetails', 'model/ListCustomField', 'model/LockInformation', 'model/RecipientUpdateResponse', 'model/Tabs', 'model/TextCustomField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkEnvelopeStatus'), require('./ErrorDetails'), require('./ListCustomField'), require('./LockInformation'), require('./RecipientUpdateResponse'), require('./Tabs'), require('./TextCustomField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeUpdateSummary = factory(root.Docusign.ApiClient, root.Docusign.BulkEnvelopeStatus, root.Docusign.ErrorDetails, root.Docusign.ListCustomField, root.Docusign.LockInformation, root.Docusign.RecipientUpdateResponse, root.Docusign.Tabs, root.Docusign.TextCustomField);
  }
}(this, function(ApiClient, BulkEnvelopeStatus, ErrorDetails, ListCustomField, LockInformation, RecipientUpdateResponse, Tabs, TextCustomField) {
  'use strict';


  /**
   * The EnvelopeUpdateSummary model module.
   * @module model/EnvelopeUpdateSummary
   */

  /**
   * Constructs a new <code>EnvelopeUpdateSummary</code>.
   * @alias module:model/EnvelopeUpdateSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeUpdateSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeUpdateSummary} obj Optional instance to populate.
   * @return {module:model/EnvelopeUpdateSummary} The populated <code>EnvelopeUpdateSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bulkEnvelopeStatus')) {
        obj['bulkEnvelopeStatus'] = BulkEnvelopeStatus.constructFromObject(data['bulkEnvelopeStatus']);
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('listCustomFieldUpdateResults')) {
        obj['listCustomFieldUpdateResults'] = ApiClient.convertToType(data['listCustomFieldUpdateResults'], [ListCustomField]);
      }
      if (data.hasOwnProperty('lockInformation')) {
        obj['lockInformation'] = LockInformation.constructFromObject(data['lockInformation']);
      }
      if (data.hasOwnProperty('purgeState')) {
        obj['purgeState'] = ApiClient.convertToType(data['purgeState'], 'String');
      }
      if (data.hasOwnProperty('recipientUpdateResults')) {
        obj['recipientUpdateResults'] = ApiClient.convertToType(data['recipientUpdateResults'], [RecipientUpdateResponse]);
      }
      if (data.hasOwnProperty('tabUpdateResults')) {
        obj['tabUpdateResults'] = Tabs.constructFromObject(data['tabUpdateResults']);
      }
      if (data.hasOwnProperty('textCustomFieldUpdateResults')) {
        obj['textCustomFieldUpdateResults'] = ApiClient.convertToType(data['textCustomFieldUpdateResults'], [TextCustomField]);
      }
    }
    return obj;
  }

  /**
   * An object that describes the status of the bulk send envelopes.
   * @member {module:model/BulkEnvelopeStatus} bulkEnvelopeStatus
   */
  exports.prototype['bulkEnvelopeStatus'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ListCustomField>} listCustomFieldUpdateResults
   */
  exports.prototype['listCustomFieldUpdateResults'] = undefined;
  /**
   * Provides lock information about an envelope that a user has locked.
   * @member {module:model/LockInformation} lockInformation
   */
  exports.prototype['lockInformation'] = undefined;
  /**
   * 
   * @member {String} purgeState
   */
  exports.prototype['purgeState'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientUpdateResponse>} recipientUpdateResults
   */
  exports.prototype['recipientUpdateResults'] = undefined;
  /**
   * 
   * @member {module:model/Tabs} tabUpdateResults
   */
  exports.prototype['tabUpdateResults'] = undefined;
  /**
   * 
   * @member {Array.<module:model/TextCustomField>} textCustomFieldUpdateResults
   */
  exports.prototype['textCustomFieldUpdateResults'] = undefined;



  return exports;
}));


