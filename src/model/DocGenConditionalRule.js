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
    define(['ApiClient', 'model/DocGenConditionalOperationBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocGenConditionalOperationBase'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocGenConditionalRule = factory(root.Docusign.ApiClient, root.Docusign.DocGenConditionalOperationBase);
  }
}(this, function(ApiClient, DocGenConditionalOperationBase) {
  'use strict';


  /**
   * The DocGenConditionalRule model module.
   * @module model/DocGenConditionalRule
   */

  /**
   * Constructs a new <code>DocGenConditionalRule</code>.
   * @alias module:model/DocGenConditionalRule
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocGenConditionalRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocGenConditionalRule} obj Optional instance to populate.
   * @return {module:model/DocGenConditionalRule} The populated <code>DocGenConditionalRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('conditionalOperations')) {
        obj['conditionalOperations'] = ApiClient.convertToType(data['conditionalOperations'], [DocGenConditionalOperationBase]);
      }
      if (data.hasOwnProperty('conditionalRuleEffect')) {
        obj['conditionalRuleEffect'] = ApiClient.convertToType(data['conditionalRuleEffect'], 'String');
      }
      if (data.hasOwnProperty('conditionalRuleEffectFields')) {
        obj['conditionalRuleEffectFields'] = ApiClient.convertToType(data['conditionalRuleEffectFields'], ['String']);
      }
      if (data.hasOwnProperty('conditionalRuleOperator')) {
        obj['conditionalRuleOperator'] = ApiClient.convertToType(data['conditionalRuleOperator'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/DocGenConditionalOperationBase>} conditionalOperations
   */
  exports.prototype['conditionalOperations'] = undefined;
  /**
   * 
   * @member {String} conditionalRuleEffect
   */
  exports.prototype['conditionalRuleEffect'] = undefined;
  /**
   * 
   * @member {Array.<String>} conditionalRuleEffectFields
   */
  exports.prototype['conditionalRuleEffectFields'] = undefined;
  /**
   * 
   * @member {String} conditionalRuleOperator
   */
  exports.prototype['conditionalRuleOperator'] = undefined;



  return exports;
}));


