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
    root.Docusign.DowngradeRequestInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DowngradeRequestInformation model module.
   * @module model/DowngradeRequestInformation
   */

  /**
   * Constructs a new <code>DowngradeRequestInformation</code>.
   * @alias module:model/DowngradeRequestInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DowngradeRequestInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DowngradeRequestInformation} obj Optional instance to populate.
   * @return {module:model/DowngradeRequestInformation} The populated <code>DowngradeRequestInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('downgradeRequestCreation')) {
        obj['downgradeRequestCreation'] = ApiClient.convertToType(data['downgradeRequestCreation'], 'String');
      }
      if (data.hasOwnProperty('downgradeRequestProductId')) {
        obj['downgradeRequestProductId'] = ApiClient.convertToType(data['downgradeRequestProductId'], 'String');
      }
      if (data.hasOwnProperty('downgradeRequestStatus')) {
        obj['downgradeRequestStatus'] = ApiClient.convertToType(data['downgradeRequestStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} downgradeRequestCreation
   */
  exports.prototype['downgradeRequestCreation'] = undefined;
  /**
   * 
   * @member {String} downgradeRequestProductId
   */
  exports.prototype['downgradeRequestProductId'] = undefined;
  /**
   * 
   * @member {String} downgradeRequestStatus
   */
  exports.prototype['downgradeRequestStatus'] = undefined;



  return exports;
}));


