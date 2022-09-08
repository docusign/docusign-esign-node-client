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
    root.Docusign.SeatDiscount = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SeatDiscount model module.
   * @module model/SeatDiscount
   */

  /**
   * Constructs a new <code>SeatDiscount</code>.
   * This object contains information about a seat discount.
   * @alias module:model/SeatDiscount
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SeatDiscount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SeatDiscount} obj Optional instance to populate.
   * @return {module:model/SeatDiscount} The populated <code>SeatDiscount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beginSeatCount')) {
        obj['beginSeatCount'] = ApiClient.convertToType(data['beginSeatCount'], 'String');
      }
      if (data.hasOwnProperty('discountPercent')) {
        obj['discountPercent'] = ApiClient.convertToType(data['discountPercent'], 'String');
      }
      if (data.hasOwnProperty('endSeatCount')) {
        obj['endSeatCount'] = ApiClient.convertToType(data['endSeatCount'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} beginSeatCount
   */
  exports.prototype['beginSeatCount'] = undefined;
  /**
   * 
   * @member {String} discountPercent
   */
  exports.prototype['discountPercent'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} endSeatCount
   */
  exports.prototype['endSeatCount'] = undefined;



  return exports;
}));


