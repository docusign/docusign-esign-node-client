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
    root.Docusign.ConciergeQueryRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConciergeQueryRequest model module.
   * @module model/ConciergeQueryRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConciergeQueryRequest</code>.
   * @alias module:model/ConciergeQueryRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConciergeQueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConciergeQueryRequest} obj Optional instance to populate.
   * @return {module:model/ConciergeQueryRequest} The populated <code>ConciergeQueryRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountManagementRepCountry')) {
        obj['accountManagementRepCountry'] = ApiClient.convertToType(data['accountManagementRepCountry'], 'String');
      }
      if (data.hasOwnProperty('contractCountry')) {
        obj['contractCountry'] = ApiClient.convertToType(data['contractCountry'], 'String');
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('shippingCountry')) {
        obj['shippingCountry'] = ApiClient.convertToType(data['shippingCountry'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} accountManagementRepCountry
   */
  exports.prototype['accountManagementRepCountry'] = undefined;
  /**
   * 
   * @member {String} contractCountry
   */
  exports.prototype['contractCountry'] = undefined;
  /**
   * 
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * 
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * 
   * @member {String} shippingCountry
   */
  exports.prototype['shippingCountry'] = undefined;



  return exports;
}));


