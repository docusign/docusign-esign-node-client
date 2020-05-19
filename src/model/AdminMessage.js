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
    root.Docusign.AdminMessage = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AdminMessage model module.
   * @module model/AdminMessage
   */

  /**
   * Constructs a new <code>AdminMessage</code>.
   * @alias module:model/AdminMessage
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AdminMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminMessage} obj Optional instance to populate.
   * @return {module:model/AdminMessage} The populated <code>AdminMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('baseMessage')) {
        obj['baseMessage'] = ApiClient.convertToType(data['baseMessage'], 'String');
      }
      if (data.hasOwnProperty('moreInformation')) {
        obj['moreInformation'] = ApiClient.convertToType(data['moreInformation'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} baseMessage
   */
  exports.prototype['baseMessage'] = undefined;
  /**
   * 
   * @member {String} moreInformation
   */
  exports.prototype['moreInformation'] = undefined;



  return exports;
}));


