/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/EnvelopesShareRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopesShareRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopesSharesRequest = factory(root.Docusign.ApiClient, root.Docusign.EnvelopesShareRequest);
  }
}(this, function(ApiClient, EnvelopesShareRequest) {
  'use strict';


  /**
   * The EnvelopesSharesRequest model module.
   * @module model/EnvelopesSharesRequest
   */

  /**
   * Constructs a new <code>EnvelopesSharesRequest</code>.
   * @alias module:model/EnvelopesSharesRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopesSharesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopesSharesRequest} obj Optional instance to populate.
   * @return {module:model/EnvelopesSharesRequest} The populated <code>EnvelopesSharesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], [EnvelopesShareRequest]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/EnvelopesShareRequest>} shares
   */
  exports.prototype['shares'] = undefined;



  return exports;
}));


