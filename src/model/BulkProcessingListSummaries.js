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
    define(['ApiClient', 'model/BulkProcessingListSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkProcessingListSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkProcessingListSummaries = factory(root.Docusign.ApiClient, root.Docusign.BulkProcessingListSummary);
  }
}(this, function(ApiClient, BulkProcessingListSummary) {
  'use strict';


  /**
   * The BulkProcessingListSummaries model module.
   * @module model/BulkProcessingListSummaries
   */

  /**
   * Constructs a new <code>BulkProcessingListSummaries</code>.
   * @alias module:model/BulkProcessingListSummaries
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkProcessingListSummaries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkProcessingListSummaries} obj Optional instance to populate.
   * @return {module:model/BulkProcessingListSummaries} The populated <code>BulkProcessingListSummaries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bulkListSummaries')) {
        obj['bulkListSummaries'] = ApiClient.convertToType(data['bulkListSummaries'], [BulkProcessingListSummary]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/BulkProcessingListSummary>} bulkListSummaries
   */
  exports.prototype['bulkListSummaries'] = undefined;



  return exports;
}));


