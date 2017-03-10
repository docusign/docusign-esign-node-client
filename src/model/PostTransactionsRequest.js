/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
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
    root.Docusign.PostTransactionsRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PostTransactionsRequest model module.
   * @module model/PostTransactionsRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PostTransactionsRequest</code>.
   * @alias module:model/PostTransactionsRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PostTransactionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostTransactionsRequest} obj Optional instance to populate.
   * @return {module:model/PostTransactionsRequest} The populated <code>PostTransactionsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentData')) {
        obj['documentData'] = ApiClient.convertToType(data['documentData'], 'String');
      }
      if (data.hasOwnProperty('dptName')) {
        obj['dptName'] = ApiClient.convertToType(data['dptName'], 'String');
      }
      if (data.hasOwnProperty('transactionName')) {
        obj['transactionName'] = ApiClient.convertToType(data['transactionName'], 'String');
      }
      if (data.hasOwnProperty('transactionTypeName')) {
        obj['transactionTypeName'] = ApiClient.convertToType(data['transactionTypeName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} documentData
   */
  exports.prototype['documentData'] = undefined;
  /**
   * 
   * @member {String} dptName
   */
  exports.prototype['dptName'] = undefined;
  /**
   * 
   * @member {String} transactionName
   */
  exports.prototype['transactionName'] = undefined;
  /**
   * 
   * @member {String} transactionTypeName
   */
  exports.prototype['transactionTypeName'] = undefined;



  return exports;
}));


