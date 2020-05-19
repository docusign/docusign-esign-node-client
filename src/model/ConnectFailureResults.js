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
    define(['ApiClient', 'model/ConnectFailureResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectFailureResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectFailureResults = factory(root.Docusign.ApiClient, root.Docusign.ConnectFailureResult);
  }
}(this, function(ApiClient, ConnectFailureResult) {
  'use strict';


  /**
   * The ConnectFailureResults model module.
   * @module model/ConnectFailureResults
   */

  /**
   * Constructs a new <code>ConnectFailureResults</code>.
   * @alias module:model/ConnectFailureResults
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectFailureResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectFailureResults} obj Optional instance to populate.
   * @return {module:model/ConnectFailureResults} The populated <code>ConnectFailureResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('retryQueue')) {
        obj['retryQueue'] = ApiClient.convertToType(data['retryQueue'], [ConnectFailureResult]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/ConnectFailureResult>} retryQueue
   */
  exports.prototype['retryQueue'] = undefined;



  return exports;
}));


