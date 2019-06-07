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
    define(['ApiClient', 'model/DocumentVisibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentVisibility'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocumentVisibilityList = factory(root.Docusign.ApiClient, root.Docusign.DocumentVisibility);
  }
}(this, function(ApiClient, DocumentVisibility) {
  'use strict';


  /**
   * The DocumentVisibilityList model module.
   * @module model/DocumentVisibilityList
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DocumentVisibilityList</code>.
   * @alias module:model/DocumentVisibilityList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentVisibilityList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentVisibilityList} obj Optional instance to populate.
   * @return {module:model/DocumentVisibilityList} The populated <code>DocumentVisibilityList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentVisibility')) {
        obj['documentVisibility'] = ApiClient.convertToType(data['documentVisibility'], [DocumentVisibility]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/DocumentVisibility>} documentVisibility
   */
  exports.prototype['documentVisibility'] = undefined;



  return exports;
}));


