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
    root.Docusign.RecipientDomain = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientDomain model module.
   * @module model/RecipientDomain
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientDomain</code>.
   * @alias module:model/RecipientDomain
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientDomain} obj Optional instance to populate.
   * @return {module:model/RecipientDomain} The populated <code>RecipientDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'String');
      }
      if (data.hasOwnProperty('domainCode')) {
        obj['domainCode'] = ApiClient.convertToType(data['domainCode'], 'String');
      }
      if (data.hasOwnProperty('domainName')) {
        obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
      }
      if (data.hasOwnProperty('recipientDomainId')) {
        obj['recipientDomainId'] = ApiClient.convertToType(data['recipientDomainId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} active
   */
  exports.prototype['active'] = undefined;
  /**
   * 
   * @member {String} domainCode
   */
  exports.prototype['domainCode'] = undefined;
  /**
   * 
   * @member {String} domainName
   */
  exports.prototype['domainName'] = undefined;
  /**
   * 
   * @member {String} recipientDomainId
   */
  exports.prototype['recipientDomainId'] = undefined;



  return exports;
}));


