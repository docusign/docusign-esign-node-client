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
    define(['ApiClient', 'model/ConditionalRecipientRuleFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConditionalRecipientRuleFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConditionalRecipientRuleCondition = factory(root.Docusign.ApiClient, root.Docusign.ConditionalRecipientRuleFilter);
  }
}(this, function(ApiClient, ConditionalRecipientRuleFilter) {
  'use strict';


  /**
   * The ConditionalRecipientRuleCondition model module.
   * @module model/ConditionalRecipientRuleCondition
   */

  /**
   * Constructs a new <code>ConditionalRecipientRuleCondition</code>.
   * @alias module:model/ConditionalRecipientRuleCondition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConditionalRecipientRuleCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConditionalRecipientRuleCondition} obj Optional instance to populate.
   * @return {module:model/ConditionalRecipientRuleCondition} The populated <code>ConditionalRecipientRuleCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], [ConditionalRecipientRuleFilter]);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('recipientLabel')) {
        obj['recipientLabel'] = ApiClient.convertToType(data['recipientLabel'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/ConditionalRecipientRuleFilter>} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 
   * @member {String} recipientLabel
   */
  exports.prototype['recipientLabel'] = undefined;



  return exports;
}));


