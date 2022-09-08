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
    define(['ApiClient', 'model/BulkSendingCopy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkSendingCopy'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendingList = factory(root.Docusign.ApiClient, root.Docusign.BulkSendingCopy);
  }
}(this, function(ApiClient, BulkSendingCopy) {
  'use strict';


  /**
   * The BulkSendingList model module.
   * @module model/BulkSendingList
   */

  /**
   * Constructs a new <code>BulkSendingList</code>.
   * This object contains the details for the bulk send list.
   * @alias module:model/BulkSendingList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingList} obj Optional instance to populate.
   * @return {module:model/BulkSendingList} The populated <code>BulkSendingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bulkCopies')) {
        obj['bulkCopies'] = ApiClient.convertToType(data['bulkCopies'], [BulkSendingCopy]);
      }
      if (data.hasOwnProperty('listId')) {
        obj['listId'] = ApiClient.convertToType(data['listId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/BulkSendingCopy>} bulkCopies
   */
  exports.prototype['bulkCopies'] = undefined;
  /**
   * 
   * @member {String} listId
   */
  exports.prototype['listId'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


