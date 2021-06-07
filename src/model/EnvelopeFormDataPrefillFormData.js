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
    define(['ApiClient', 'model/FormDataItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FormDataItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeFormDataPrefillFormData = factory(root.Docusign.ApiClient, root.Docusign.FormDataItem);
  }
}(this, function(ApiClient, FormDataItem) {
  'use strict';


  /**
   * The EnvelopeFormDataPrefillFormData model module.
   * @module model/EnvelopeFormDataPrefillFormData
   */

  /**
   * Constructs a new <code>EnvelopeFormDataPrefillFormData</code>.
   * @alias module:model/EnvelopeFormDataPrefillFormData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeFormDataPrefillFormData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeFormDataPrefillFormData} obj Optional instance to populate.
   * @return {module:model/EnvelopeFormDataPrefillFormData} The populated <code>EnvelopeFormDataPrefillFormData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formData')) {
        obj['formData'] = ApiClient.convertToType(data['formData'], [FormDataItem]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/FormDataItem>} formData
   */
  exports.prototype['formData'] = undefined;



  return exports;
}));


