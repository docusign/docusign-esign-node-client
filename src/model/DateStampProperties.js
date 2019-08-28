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
    root.Docusign.DateStampProperties = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DateStampProperties model module.
   * @module model/DateStampProperties
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DateStampProperties</code>.
   * @alias module:model/DateStampProperties
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DateStampProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateStampProperties} obj Optional instance to populate.
   * @return {module:model/DateStampProperties} The populated <code>DateStampProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dateAreaHeight')) {
        obj['dateAreaHeight'] = ApiClient.convertToType(data['dateAreaHeight'], 'String');
      }
      if (data.hasOwnProperty('dateAreaWidth')) {
        obj['dateAreaWidth'] = ApiClient.convertToType(data['dateAreaWidth'], 'String');
      }
      if (data.hasOwnProperty('dateAreaX')) {
        obj['dateAreaX'] = ApiClient.convertToType(data['dateAreaX'], 'String');
      }
      if (data.hasOwnProperty('dateAreaY')) {
        obj['dateAreaY'] = ApiClient.convertToType(data['dateAreaY'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} dateAreaHeight
   */
  exports.prototype['dateAreaHeight'] = undefined;
  /**
   * 
   * @member {String} dateAreaWidth
   */
  exports.prototype['dateAreaWidth'] = undefined;
  /**
   * 
   * @member {String} dateAreaX
   */
  exports.prototype['dateAreaX'] = undefined;
  /**
   * 
   * @member {String} dateAreaY
   */
  exports.prototype['dateAreaY'] = undefined;



  return exports;
}));


