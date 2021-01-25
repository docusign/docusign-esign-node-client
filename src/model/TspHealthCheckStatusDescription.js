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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TspHealthCheckStatusDescription = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The TspHealthCheckStatusDescription model module.
   * @module model/TspHealthCheckStatusDescription
   */

  /**
   * Constructs a new <code>TspHealthCheckStatusDescription</code>.
   * @alias module:model/TspHealthCheckStatusDescription
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TspHealthCheckStatusDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TspHealthCheckStatusDescription} obj Optional instance to populate.
   * @return {module:model/TspHealthCheckStatusDescription} The populated <code>TspHealthCheckStatusDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('responseSeconds')) {
        obj['responseSeconds'] = ApiClient.convertToType(data['responseSeconds'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * 
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * 
   * @member {String} responseSeconds
   */
  exports.prototype['responseSeconds'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


