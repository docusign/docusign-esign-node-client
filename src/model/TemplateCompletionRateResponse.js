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
    define(['ApiClient', 'model/SenderCompletionInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SenderCompletionInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateCompletionRateResponse = factory(root.Docusign.ApiClient, root.Docusign.SenderCompletionInfo);
  }
}(this, function(ApiClient, SenderCompletionInfo) {
  'use strict';


  /**
   * The TemplateCompletionRateResponse model module.
   * @module model/TemplateCompletionRateResponse
   */

  /**
   * Constructs a new <code>TemplateCompletionRateResponse</code>.
   * @alias module:model/TemplateCompletionRateResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateCompletionRateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCompletionRateResponse} obj Optional instance to populate.
   * @return {module:model/TemplateCompletionRateResponse} The populated <code>TemplateCompletionRateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bottomSenders')) {
        obj['bottomSenders'] = ApiClient.convertToType(data['bottomSenders'], [SenderCompletionInfo]);
      }
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
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'String');
      }
      if (data.hasOwnProperty('topSenders')) {
        obj['topSenders'] = ApiClient.convertToType(data['topSenders'], [SenderCompletionInfo]);
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
   * @member {Array.<module:model/SenderCompletionInfo>} bottomSenders
   */
  exports.prototype['bottomSenders'] = undefined;
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
   * @member {String} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SenderCompletionInfo>} topSenders
   */
  exports.prototype['topSenders'] = undefined;
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


