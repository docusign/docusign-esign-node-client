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
    define(['ApiClient', 'model/PowerForm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PowerForm'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PowerFormsResponse = factory(root.Docusign.ApiClient, root.Docusign.PowerForm);
  }
}(this, function(ApiClient, PowerForm) {
  'use strict';


  /**
   * The PowerFormsResponse model module.
   * @module model/PowerFormsResponse
   */

  /**
   * Constructs a new <code>PowerFormsResponse</code>.
   * A list of PowerForms.
   * @alias module:model/PowerFormsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PowerFormsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PowerFormsResponse} obj Optional instance to populate.
   * @return {module:model/PowerFormsResponse} The populated <code>PowerFormsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], 'Number');
      }
      if (data.hasOwnProperty('nextUri')) {
        obj['nextUri'] = ApiClient.convertToType(data['nextUri'], 'String');
      }
      if (data.hasOwnProperty('powerForms')) {
        obj['powerForms'] = ApiClient.convertToType(data['powerForms'], [PowerForm]);
      }
      if (data.hasOwnProperty('previousUri')) {
        obj['previousUri'] = ApiClient.convertToType(data['previousUri'], 'String');
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], 'Number');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'Number');
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The last position in the result set. 
   * @member {Number} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null. 
   * @member {String} nextUri
   */
  exports.prototype['nextUri'] = undefined;
  /**
   * 
   * @member {Array.<module:model/PowerForm>} powerForms
   */
  exports.prototype['powerForms'] = undefined;
  /**
   * The postal code for the billing address.
   * @member {String} previousUri
   */
  exports.prototype['previousUri'] = undefined;
  /**
   * The number of results returned in this response. 
   * @member {Number} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * Starting position of the current result set.
   * @member {Number} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
   * @member {Number} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;



  return exports;
}));


