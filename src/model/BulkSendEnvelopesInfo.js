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
    root.Docusign.BulkSendEnvelopesInfo = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendEnvelopesInfo model module.
   * @module model/BulkSendEnvelopesInfo
   */

  /**
   * Constructs a new <code>BulkSendEnvelopesInfo</code>.
   * @alias module:model/BulkSendEnvelopesInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendEnvelopesInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendEnvelopesInfo} obj Optional instance to populate.
   * @return {module:model/BulkSendEnvelopesInfo} The populated <code>BulkSendEnvelopesInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'String');
      }
      if (data.hasOwnProperty('declined')) {
        obj['declined'] = ApiClient.convertToType(data['declined'], 'String');
      }
      if (data.hasOwnProperty('voided')) {
        obj['voided'] = ApiClient.convertToType(data['voided'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} completed
   */
  exports.prototype['completed'] = undefined;
  /**
   * 
   * @member {String} declined
   */
  exports.prototype['declined'] = undefined;
  /**
   * 
   * @member {String} voided
   */
  exports.prototype['voided'] = undefined;



  return exports;
}));


