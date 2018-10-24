

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
   * The Link model module.
   * @module oauth/Link
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Link</code>.
   * @alias module:oauth/Link
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:oauth/Link} obj Optional instance to populate.
   * @return {module:oauth/Link} The populated <code>Link</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    var ApiClient = require('../ApiClient');

    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rel')) {
        obj['rel'] = ApiClient.convertToType(data['rel'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
    }

    return obj;
  }

  /**
   *
   * @member {String} rel
   */
  exports.prototype['rel'] = undefined;
  /**
   *
   * @member {String} href
   */
  exports.prototype['href'] = undefined;


  return exports;
}));