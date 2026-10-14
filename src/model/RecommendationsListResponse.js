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
    define(['ApiClient', 'model/RecommendationInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecommendationInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecommendationsListResponse = factory(root.Docusign.ApiClient, root.Docusign.RecommendationInfo);
  }
}(this, function(ApiClient, RecommendationInfo) {
  'use strict';


  /**
   * The RecommendationsListResponse model module.
   * @module model/RecommendationsListResponse
   */

  /**
   * Constructs a new <code>RecommendationsListResponse</code>.
   * @alias module:model/RecommendationsListResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecommendationsListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecommendationsListResponse} obj Optional instance to populate.
   * @return {module:model/RecommendationsListResponse} The populated <code>RecommendationsListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('recommendations')) {
        obj['recommendations'] = ApiClient.convertToType(data['recommendations'], [RecommendationInfo]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/RecommendationInfo>} recommendations
   */
  exports.prototype['recommendations'] = undefined;



  return exports;
}));


