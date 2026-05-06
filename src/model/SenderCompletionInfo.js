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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SenderCompletionInfo = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SenderCompletionInfo model module.
   * @module model/SenderCompletionInfo
   */

  /**
   * Constructs a new <code>SenderCompletionInfo</code>.
   * @alias module:model/SenderCompletionInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SenderCompletionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SenderCompletionInfo} obj Optional instance to populate.
   * @return {module:model/SenderCompletionInfo} The populated <code>SenderCompletionInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'String');
      }
      if (data.hasOwnProperty('completionRate')) {
        obj['completionRate'] = ApiClient.convertToType(data['completionRate'], 'String');
      }
      if (data.hasOwnProperty('expired')) {
        obj['expired'] = ApiClient.convertToType(data['expired'], 'String');
      }
      if (data.hasOwnProperty('expiredRate')) {
        obj['expiredRate'] = ApiClient.convertToType(data['expiredRate'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('senderId')) {
        obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
      }
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'String');
      }
      if (data.hasOwnProperty('voided')) {
        obj['voided'] = ApiClient.convertToType(data['voided'], 'String');
      }
      if (data.hasOwnProperty('voidedRate')) {
        obj['voidedRate'] = ApiClient.convertToType(data['voidedRate'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} completed
   */
  exports.prototype['completed'] = undefined;
  /**
   * 
   * @member {String} completionRate
   */
  exports.prototype['completionRate'] = undefined;
  /**
   * 
   * @member {String} expired
   */
  exports.prototype['expired'] = undefined;
  /**
   * 
   * @member {String} expiredRate
   */
  exports.prototype['expiredRate'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} senderId
   */
  exports.prototype['senderId'] = undefined;
  /**
   * 
   * @member {String} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * 
   * @member {String} voided
   */
  exports.prototype['voided'] = undefined;
  /**
   * 
   * @member {String} voidedRate
   */
  exports.prototype['voidedRate'] = undefined;



  return exports;
}));


