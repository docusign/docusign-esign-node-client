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
    define(['ApiClient', 'model/DocGenFormFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocGenFormFields'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocGenFormFieldRequest = factory(root.Docusign.ApiClient, root.Docusign.DocGenFormFields);
  }
}(this, function(ApiClient, DocGenFormFields) {
  'use strict';


  /**
   * The DocGenFormFieldRequest model module.
   * @module model/DocGenFormFieldRequest
   */

  /**
   * Constructs a new <code>DocGenFormFieldRequest</code>.
   * @alias module:model/DocGenFormFieldRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocGenFormFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocGenFormFieldRequest} obj Optional instance to populate.
   * @return {module:model/DocGenFormFieldRequest} The populated <code>DocGenFormFieldRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('docGenFormFields')) {
        obj['docGenFormFields'] = ApiClient.convertToType(data['docGenFormFields'], [DocGenFormFields]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/DocGenFormFields>} docGenFormFields
   */
  exports.prototype['docGenFormFields'] = undefined;



  return exports;
}));


