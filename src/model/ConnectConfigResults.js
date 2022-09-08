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
    define(['ApiClient', 'model/ConnectCustomConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectCustomConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectConfigResults = factory(root.Docusign.ApiClient, root.Docusign.ConnectCustomConfiguration);
  }
}(this, function(ApiClient, ConnectCustomConfiguration) {
  'use strict';


  /**
   * The ConnectConfigResults model module.
   * @module model/ConnectConfigResults
   */

  /**
   * Constructs a new <code>ConnectConfigResults</code>.
   * This object contains the results of a ConnectConfigurations::GET method.
   * @alias module:model/ConnectConfigResults
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectConfigResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectConfigResults} obj Optional instance to populate.
   * @return {module:model/ConnectConfigResults} The populated <code>ConnectConfigResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configurations')) {
        obj['configurations'] = ApiClient.convertToType(data['configurations'], [ConnectCustomConfiguration]);
      }
      if (data.hasOwnProperty('totalRecords')) {
        obj['totalRecords'] = ApiClient.convertToType(data['totalRecords'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {Array.<module:model/ConnectCustomConfiguration>} configurations
   */
  exports.prototype['configurations'] = undefined;
  /**
   * 
   * @member {String} totalRecords
   */
  exports.prototype['totalRecords'] = undefined;



  return exports;
}));


