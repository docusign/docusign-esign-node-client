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
    define(['ApiClient', 'model/NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ResourceInformation = factory(root.Docusign.ApiClient, root.Docusign.NameValue);
  }
}(this, function(ApiClient, NameValue) {
  'use strict';


  /**
   * The ResourceInformation model module.
   * @module model/ResourceInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ResourceInformation</code>.
   * @alias module:model/ResourceInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ResourceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceInformation} obj Optional instance to populate.
   * @return {module:model/ResourceInformation} The populated <code>ResourceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], [NameValue]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/NameValue>} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));


