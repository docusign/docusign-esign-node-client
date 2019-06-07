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
    root.Docusign.ConnectUserObject = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ConnectUserObject model module.
   * @module model/ConnectUserObject
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConnectUserObject</code>.
   * @alias module:model/ConnectUserObject
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectUserObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectUserObject} obj Optional instance to populate.
   * @return {module:model/ConnectUserObject} The populated <code>ConnectUserObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configurationtype')) {
        obj['configurationtype'] = ApiClient.convertToType(data['configurationtype'], 'String');
      }
      if (data.hasOwnProperty('connectId')) {
        obj['connectId'] = ApiClient.convertToType(data['connectId'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'String');
      }
      if (data.hasOwnProperty('hasAccess')) {
        obj['hasAccess'] = ApiClient.convertToType(data['hasAccess'], 'String');
      }
      if (data.hasOwnProperty('senderSearchableItems')) {
        obj['senderSearchableItems'] = ApiClient.convertToType(data['senderSearchableItems'], ['String']);
      }
    }
    return obj;
  }

  /**
   * If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
   * @member {String} configurationtype
   */
  exports.prototype['configurationtype'] = undefined;
  /**
   * 
   * @member {String} connectId
   */
  exports.prototype['connectId'] = undefined;
  /**
   * 
   * @member {String} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * 
   * @member {String} hasAccess
   */
  exports.prototype['hasAccess'] = undefined;
  /**
   * 
   * @member {Array.<String>} senderSearchableItems
   */
  exports.prototype['senderSearchableItems'] = undefined;



  return exports;
}));


