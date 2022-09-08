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
    define(['ApiClient', 'model/RecipientRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecipientRules'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientRouting = factory(root.Docusign.ApiClient, root.Docusign.RecipientRules);
  }
}(this, function(ApiClient, RecipientRules) {
  'use strict';


  /**
   * The RecipientRouting model module.
   * @module model/RecipientRouting
   */

  /**
   * Constructs a new <code>RecipientRouting</code>.
   * Describes the recipient routing rules.
   * @alias module:model/RecipientRouting
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientRouting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientRouting} obj Optional instance to populate.
   * @return {module:model/RecipientRouting} The populated <code>RecipientRouting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rules')) {
        obj['rules'] = RecipientRules.constructFromObject(data['rules']);
      }
    }
    return obj;
  }

  /**
   * The recipient routing rules.
   * @member {module:model/RecipientRules} rules
   */
  exports.prototype['rules'] = undefined;



  return exports;
}));


