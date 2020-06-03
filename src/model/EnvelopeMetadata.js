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
    root.Docusign.EnvelopeMetadata = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The EnvelopeMetadata model module.
   * @module model/EnvelopeMetadata
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeMetadata</code>.
   * @alias module:model/EnvelopeMetadata
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeMetadata} obj Optional instance to populate.
   * @return {module:model/EnvelopeMetadata} The populated <code>EnvelopeMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowAdvancedCorrect')) {
        obj['allowAdvancedCorrect'] = ApiClient.convertToType(data['allowAdvancedCorrect'], 'String');
      }
      if (data.hasOwnProperty('allowCorrect')) {
        obj['allowCorrect'] = ApiClient.convertToType(data['allowCorrect'], 'String');
      }
      if (data.hasOwnProperty('enableSignWithNotary')) {
        obj['enableSignWithNotary'] = ApiClient.convertToType(data['enableSignWithNotary'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} allowAdvancedCorrect
   */
  exports.prototype['allowAdvancedCorrect'] = undefined;
  /**
   * 
   * @member {String} allowCorrect
   */
  exports.prototype['allowCorrect'] = undefined;
  /**
   * 
   * @member {String} enableSignWithNotary
   */
  exports.prototype['enableSignWithNotary'] = undefined;



  return exports;
}));


