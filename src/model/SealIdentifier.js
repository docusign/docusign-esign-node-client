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
    root.Docusign.SealIdentifier = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SealIdentifier model module.
   * @module model/SealIdentifier
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SealIdentifier</code>.
   * @alias module:model/SealIdentifier
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SealIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SealIdentifier} obj Optional instance to populate.
   * @return {module:model/SealIdentifier} The populated <code>SealIdentifier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sealDisplayName')) {
        obj['sealDisplayName'] = ApiClient.convertToType(data['sealDisplayName'], 'String');
      }
      if (data.hasOwnProperty('sealName')) {
        obj['sealName'] = ApiClient.convertToType(data['sealName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} sealDisplayName
   */
  exports.prototype['sealDisplayName'] = undefined;
  /**
   * 
   * @member {String} sealName
   */
  exports.prototype['sealName'] = undefined;



  return exports;
}));


