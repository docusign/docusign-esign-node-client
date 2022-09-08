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
    define(['ApiClient', 'model/ErrorDetails', 'model/FavoriteTemplatesContentItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./FavoriteTemplatesContentItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FavoriteTemplatesInfo = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.FavoriteTemplatesContentItem);
  }
}(this, function(ApiClient, ErrorDetails, FavoriteTemplatesContentItem) {
  'use strict';


  /**
   * The FavoriteTemplatesInfo model module.
   * @module model/FavoriteTemplatesInfo
   */

  /**
   * Constructs a new <code>FavoriteTemplatesInfo</code>.
   * @alias module:model/FavoriteTemplatesInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FavoriteTemplatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteTemplatesInfo} obj Optional instance to populate.
   * @return {module:model/FavoriteTemplatesInfo} The populated <code>FavoriteTemplatesInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('favoriteTemplates')) {
        obj['favoriteTemplates'] = ApiClient.convertToType(data['favoriteTemplates'], [FavoriteTemplatesContentItem]);
      }
      if (data.hasOwnProperty('templatesUpdatedCount')) {
        obj['templatesUpdatedCount'] = ApiClient.convertToType(data['templatesUpdatedCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {Array.<module:model/FavoriteTemplatesContentItem>} favoriteTemplates
   */
  exports.prototype['favoriteTemplates'] = undefined;
  /**
   * 
   * @member {Number} templatesUpdatedCount
   */
  exports.prototype['templatesUpdatedCount'] = undefined;



  return exports;
}));


