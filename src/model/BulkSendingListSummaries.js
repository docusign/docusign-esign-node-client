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
    define(['ApiClient', 'model/BulkSendingListSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkSendingListSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendingListSummaries = factory(root.Docusign.ApiClient, root.Docusign.BulkSendingListSummary);
  }
}(this, function(ApiClient, BulkSendingListSummary) {
  'use strict';


  /**
   * The BulkSendingListSummaries model module.
   * @module model/BulkSendingListSummaries
   */

  /**
   * Constructs a new <code>BulkSendingListSummaries</code>.
   * This complex type contains summaries that provide basic information about the bulk send lists that belong to the current user.
   * @alias module:model/BulkSendingListSummaries
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingListSummaries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingListSummaries} obj Optional instance to populate.
   * @return {module:model/BulkSendingListSummaries} The populated <code>BulkSendingListSummaries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bulkListSummaries')) {
        obj['bulkListSummaries'] = ApiClient.convertToType(data['bulkListSummaries'], [BulkSendingListSummary]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/BulkSendingListSummary>} bulkListSummaries
   */
  exports.prototype['bulkListSummaries'] = undefined;



  return exports;
}));


