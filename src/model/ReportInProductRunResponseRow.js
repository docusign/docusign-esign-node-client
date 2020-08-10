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
    define(['ApiClient', 'model/ReportInProductRunResponseRowFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportInProductRunResponseRowFields'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ReportInProductRunResponseRow = factory(root.Docusign.ApiClient, root.Docusign.ReportInProductRunResponseRowFields);
  }
}(this, function(ApiClient, ReportInProductRunResponseRowFields) {
  'use strict';


  /**
   * The ReportInProductRunResponseRow model module.
   * @module model/ReportInProductRunResponseRow
   */

  /**
   * Constructs a new <code>ReportInProductRunResponseRow</code>.
   * @alias module:model/ReportInProductRunResponseRow
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductRunResponseRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductRunResponseRow} obj Optional instance to populate.
   * @return {module:model/ReportInProductRunResponseRow} The populated <code>ReportInProductRunResponseRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ReportInProductRunResponseRowFields.constructFromObject(data['fields']);
      }
    }
    return obj;
  }

  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * @member {module:model/ReportInProductRunResponseRowFields} fields
   */
  exports.prototype['fields'] = undefined;



  return exports;
}));


