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
    define(['ApiClient', 'model/RecipientOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecipientOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientGroup = factory(root.Docusign.ApiClient, root.Docusign.RecipientOption);
  }
}(this, function(ApiClient, RecipientOption) {
  'use strict';


  /**
   * The RecipientGroup model module.
   * @module model/RecipientGroup
   */

  /**
   * Constructs a new <code>RecipientGroup</code>.
   * Describes a group of recipients.
   * @alias module:model/RecipientGroup
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientGroup} obj Optional instance to populate.
   * @return {module:model/RecipientGroup} The populated <code>RecipientGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groupMessage')) {
        obj['groupMessage'] = ApiClient.convertToType(data['groupMessage'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [RecipientOption]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} groupMessage
   */
  exports.prototype['groupMessage'] = undefined;
  /**
   * The name of the group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * An array of powerform recipients.
   * @member {Array.<module:model/RecipientOption>} recipients
   */
  exports.prototype['recipients'] = undefined;



  return exports;
}));


