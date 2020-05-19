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
    root.Docusign.TemplateMatch = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The TemplateMatch model module.
   * @module model/TemplateMatch
   */

  /**
   * Constructs a new <code>TemplateMatch</code>.
   * @alias module:model/TemplateMatch
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateMatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateMatch} obj Optional instance to populate.
   * @return {module:model/TemplateMatch} The populated <code>TemplateMatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentEndPage')) {
        obj['documentEndPage'] = ApiClient.convertToType(data['documentEndPage'], 'String');
      }
      if (data.hasOwnProperty('documentStartPage')) {
        obj['documentStartPage'] = ApiClient.convertToType(data['documentStartPage'], 'String');
      }
      if (data.hasOwnProperty('matchPercentage')) {
        obj['matchPercentage'] = ApiClient.convertToType(data['matchPercentage'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} documentEndPage
   */
  exports.prototype['documentEndPage'] = undefined;
  /**
   * 
   * @member {String} documentStartPage
   */
  exports.prototype['documentStartPage'] = undefined;
  /**
   * 
   * @member {String} matchPercentage
   */
  exports.prototype['matchPercentage'] = undefined;



  return exports;
}));


