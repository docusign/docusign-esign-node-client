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
    define(['ApiClient', 'model/ConnectLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectLogs = factory(root.Docusign.ApiClient, root.Docusign.ConnectLog);
  }
}(this, function(ApiClient, ConnectLog) {
  'use strict';


  /**
   * The ConnectLogs model module.
   * @module model/ConnectLogs
   */

  /**
   * Constructs a new <code>ConnectLogs</code>.
   * @alias module:model/ConnectLogs
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectLogs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectLogs} obj Optional instance to populate.
   * @return {module:model/ConnectLogs} The populated <code>ConnectLogs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('failures')) {
        obj['failures'] = ApiClient.convertToType(data['failures'], [ConnectLog]);
      }
      if (data.hasOwnProperty('logs')) {
        obj['logs'] = ApiClient.convertToType(data['logs'], [ConnectLog]);
      }
      if (data.hasOwnProperty('totalRecords')) {
        obj['totalRecords'] = ApiClient.convertToType(data['totalRecords'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * An array of containing failure information from the Connect failure log.
   * @member {Array.<module:model/ConnectLog>} failures
   */
  exports.prototype['failures'] = undefined;
  /**
   * A complex type containing Connect log information. It is divided into two sections, one for regular logs and one for Connect failures. 
   * @member {Array.<module:model/ConnectLog>} logs
   */
  exports.prototype['logs'] = undefined;
  /**
   * 
   * @member {String} totalRecords
   */
  exports.prototype['totalRecords'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


