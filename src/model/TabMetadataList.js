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
    define(['ApiClient', 'model/TabMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TabMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TabMetadataList = factory(root.Docusign.ApiClient, root.Docusign.TabMetadata);
  }
}(this, function(ApiClient, TabMetadata) {
  'use strict';


  /**
   * The TabMetadataList model module.
   * @module model/TabMetadataList
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TabMetadataList</code>.
   * @alias module:model/TabMetadataList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TabMetadataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TabMetadataList} obj Optional instance to populate.
   * @return {module:model/TabMetadataList} The populated <code>TabMetadataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tabs')) {
        obj['tabs'] = ApiClient.convertToType(data['tabs'], [TabMetadata]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/TabMetadata>} tabs
   */
  exports.prototype['tabs'] = undefined;



  return exports;
}));


