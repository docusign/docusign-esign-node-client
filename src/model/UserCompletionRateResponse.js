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
    define(['ApiClient', 'model/TemplateCompletionInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplateCompletionInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserCompletionRateResponse = factory(root.Docusign.ApiClient, root.Docusign.TemplateCompletionInfo);
  }
}(this, function(ApiClient, TemplateCompletionInfo) {
  'use strict';


  /**
   * The UserCompletionRateResponse model module.
   * @module model/UserCompletionRateResponse
   */

  /**
   * Constructs a new <code>UserCompletionRateResponse</code>.
   * @alias module:model/UserCompletionRateResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserCompletionRateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCompletionRateResponse} obj Optional instance to populate.
   * @return {module:model/UserCompletionRateResponse} The populated <code>UserCompletionRateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bottomTemplates')) {
        obj['bottomTemplates'] = ApiClient.convertToType(data['bottomTemplates'], [TemplateCompletionInfo]);
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
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'String');
      }
      if (data.hasOwnProperty('topTemplates')) {
        obj['topTemplates'] = ApiClient.convertToType(data['topTemplates'], [TemplateCompletionInfo]);
      }
      if (data.hasOwnProperty('voided')) {
        obj['voided'] = ApiClient.convertToType(data['voided'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/TemplateCompletionInfo>} bottomTemplates
   */
  exports.prototype['bottomTemplates'] = undefined;
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
   * @member {String} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * 
   * @member {Array.<module:model/TemplateCompletionInfo>} topTemplates
   */
  exports.prototype['topTemplates'] = undefined;
  /**
   * 
   * @member {String} voided
   */
  exports.prototype['voided'] = undefined;



  return exports;
}));


