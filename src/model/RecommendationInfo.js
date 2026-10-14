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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecommendationInfo = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecommendationInfo model module.
   * @module model/RecommendationInfo
   */

  /**
   * Constructs a new <code>RecommendationInfo</code>.
   * @alias module:model/RecommendationInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecommendationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecommendationInfo} obj Optional instance to populate.
   * @return {module:model/RecommendationInfo} The populated <code>RecommendationInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('recommendationId')) {
        obj['recommendationId'] = ApiClient.convertToType(data['recommendationId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * 
   * @member {String} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * 
   * @member {String} recommendationId
   */
  exports.prototype['recommendationId'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


