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
    define(['ApiClient', 'model/ApiRequestLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiRequestLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ApiRequestLogsResult = factory(root.Docusign.ApiClient, root.Docusign.ApiRequestLog);
  }
}(this, function(ApiClient, ApiRequestLog) {
  'use strict';


  /**
   * The ApiRequestLogsResult model module.
   * @module model/ApiRequestLogsResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ApiRequestLogsResult</code>.
   * Contains information about mutiple API request logs.
   * @alias module:model/ApiRequestLogsResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiRequestLogsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiRequestLogsResult} obj Optional instance to populate.
   * @return {module:model/ApiRequestLogsResult} The populated <code>ApiRequestLogsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiRequestLogs')) {
        obj['apiRequestLogs'] = ApiClient.convertToType(data['apiRequestLogs'], [ApiRequestLog]);
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {Array.<module:model/ApiRequestLog>} apiRequestLogs
   */
  exports.prototype['apiRequestLogs'] = undefined;



  return exports;
}));


