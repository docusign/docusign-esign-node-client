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
    root.Docusign.ProofServiceResourceToken = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ProofServiceResourceToken model module.
   * @module model/ProofServiceResourceToken
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ProofServiceResourceToken</code>.
   * @alias module:model/ProofServiceResourceToken
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ProofServiceResourceToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProofServiceResourceToken} obj Optional instance to populate.
   * @return {module:model/ProofServiceResourceToken} The populated <code>ProofServiceResourceToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ResourceToken')) {
        obj['ResourceToken'] = ApiClient.convertToType(data['ResourceToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} ResourceToken
   */
  exports.prototype['ResourceToken'] = undefined;



  return exports;
}));


