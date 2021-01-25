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
    root.Docusign.Sender = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Sender model module.
   * @module model/Sender
   */

  /**
   * Constructs a new <code>Sender</code>.
   * @alias module:model/Sender
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Sender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sender} obj Optional instance to populate.
   * @return {module:model/Sender} The populated <code>Sender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountIdGuid')) {
        obj['accountIdGuid'] = ApiClient.convertToType(data['accountIdGuid'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The GUID associated with the account ID.
   * @member {String} accountIdGuid
   */
  exports.prototype['accountIdGuid'] = undefined;
  /**
   * 
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;



  return exports;
}));


