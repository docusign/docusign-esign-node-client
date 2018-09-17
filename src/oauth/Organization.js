

/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'oauth/Account'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
  }
}(this, function(ApiClient,  Account) {
  'use strict';
  /**
   * The Organization model module.
   * @module oauth/Organization
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Organization</code>.
   * @alias module:oauth/Organization
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:oauth/Organization} obj Optional instance to populate.
   * @return {module:oauth/Organization} The populated <code>Organization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    var ApiClient = require('../ApiClient');
    var Link = require('./Link');

    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organization_id')) {
        obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [Link]);
      }
    }

    return obj;
  }

  /**
   *
   * @member {String} sub
   */
  exports.prototype['organization_id'] = undefined;
  /**
   *
   * @member {String} email
   */
  exports.prototype['links'] = undefined;


  return exports;
}));