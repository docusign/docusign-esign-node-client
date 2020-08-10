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
    define(['ApiClient', 'model/ConditionalRecipientRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConditionalRecipientRule'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientRules = factory(root.Docusign.ApiClient, root.Docusign.ConditionalRecipientRule);
  }
}(this, function(ApiClient, ConditionalRecipientRule) {
  'use strict';


  /**
   * The RecipientRules model module.
   * @module model/RecipientRules
   */

  /**
   * Constructs a new <code>RecipientRules</code>.
   * @alias module:model/RecipientRules
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientRules} obj Optional instance to populate.
   * @return {module:model/RecipientRules} The populated <code>RecipientRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('conditionalRecipients')) {
        obj['conditionalRecipients'] = ApiClient.convertToType(data['conditionalRecipients'], [ConditionalRecipientRule]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/ConditionalRecipientRule>} conditionalRecipients
   */
  exports.prototype['conditionalRecipients'] = undefined;



  return exports;
}));


