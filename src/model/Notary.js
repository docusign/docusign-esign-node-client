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
    define(['ApiClient', 'model/UserInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Notary = factory(root.Docusign.ApiClient, root.Docusign.UserInformation);
  }
}(this, function(ApiClient, UserInformation) {
  'use strict';


  /**
   * The Notary model module.
   * @module model/Notary
   */

  /**
   * Constructs a new <code>Notary</code>.
   * @alias module:model/Notary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Notary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notary} obj Optional instance to populate.
   * @return {module:model/Notary} The populated <code>Notary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'String');
      }
      if (data.hasOwnProperty('searchable')) {
        obj['searchable'] = ApiClient.convertToType(data['searchable'], 'String');
      }
      if (data.hasOwnProperty('userInfo')) {
        obj['userInfo'] = UserInformation.constructFromObject(data['userInfo']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * 
   * @member {String} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * 
   * @member {String} searchable
   */
  exports.prototype['searchable'] = undefined;
  /**
   * Information about the user registering to be a notary.
   * @member {module:model/UserInformation} userInfo
   */
  exports.prototype['userInfo'] = undefined;



  return exports;
}));


