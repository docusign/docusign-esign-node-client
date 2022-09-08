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
    define(['ApiClient', 'model/ConditionalRecipientRuleCondition', 'model/RecipientGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConditionalRecipientRuleCondition'), require('./RecipientGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConditionalRecipientRule = factory(root.Docusign.ApiClient, root.Docusign.ConditionalRecipientRuleCondition, root.Docusign.RecipientGroup);
  }
}(this, function(ApiClient, ConditionalRecipientRuleCondition, RecipientGroup) {
  'use strict';


  /**
   * The ConditionalRecipientRule model module.
   * @module model/ConditionalRecipientRule
   */

  /**
   * Constructs a new <code>ConditionalRecipientRule</code>.
   * A rule that defines a set of recipients and the conditions under which they will be used for the envelope.
   * @alias module:model/ConditionalRecipientRule
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConditionalRecipientRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConditionalRecipientRule} obj Optional instance to populate.
   * @return {module:model/ConditionalRecipientRule} The populated <code>ConditionalRecipientRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], [ConditionalRecipientRuleCondition]);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('recipientGroup')) {
        obj['recipientGroup'] = RecipientGroup.constructFromObject(data['recipientGroup']);
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/ConditionalRecipientRuleCondition>} conditions
   */
  exports.prototype['conditions'] = undefined;
  /**
   * 
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * A set of recipients that may be used for the envelope, depending on the `conditions` defined.
   * @member {module:model/RecipientGroup} recipientGroup
   */
  exports.prototype['recipientGroup'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;



  return exports;
}));


