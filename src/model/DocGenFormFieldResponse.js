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
    define(['ApiClient', 'model/DocGenFormFields', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocGenFormFields'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DocGenFormFieldResponse = factory(root.Docusign.ApiClient, root.Docusign.DocGenFormFields, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, DocGenFormFields, ErrorDetails) {
  'use strict';


  /**
   * The DocGenFormFieldResponse model module.
   * @module model/DocGenFormFieldResponse
   */

  /**
   * Constructs a new <code>DocGenFormFieldResponse</code>.
   * @alias module:model/DocGenFormFieldResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocGenFormFieldResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocGenFormFieldResponse} obj Optional instance to populate.
   * @return {module:model/DocGenFormFieldResponse} The populated <code>DocGenFormFieldResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('docGenFormFields')) {
        obj['docGenFormFields'] = ApiClient.convertToType(data['docGenFormFields'], [DocGenFormFields]);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/DocGenFormFields>} docGenFormFields
   */
  exports.prototype['docGenFormFields'] = undefined;
  /**
   * Array or errors.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;



  return exports;
}));


