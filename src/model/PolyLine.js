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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PolyLine = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PolyLine model module.
   * @module model/PolyLine
   */

  /**
   * Constructs a new <code>PolyLine</code>.
   * @alias module:model/PolyLine
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PolyLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PolyLine} obj Optional instance to populate.
   * @return {module:model/PolyLine} The populated <code>PolyLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('x1')) {
        obj['x1'] = ApiClient.convertToType(data['x1'], 'String');
      }
      if (data.hasOwnProperty('x2')) {
        obj['x2'] = ApiClient.convertToType(data['x2'], 'String');
      }
      if (data.hasOwnProperty('y1')) {
        obj['y1'] = ApiClient.convertToType(data['y1'], 'String');
      }
      if (data.hasOwnProperty('y2')) {
        obj['y2'] = ApiClient.convertToType(data['y2'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} x1
   */
  exports.prototype['x1'] = undefined;
  /**
   * 
   * @member {String} x2
   */
  exports.prototype['x2'] = undefined;
  /**
   * 
   * @member {String} y1
   */
  exports.prototype['y1'] = undefined;
  /**
   * 
   * @member {String} y2
   */
  exports.prototype['y2'] = undefined;



  return exports;
}));


