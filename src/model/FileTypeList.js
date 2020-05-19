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
    define(['ApiClient', 'model/FileType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileType'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FileTypeList = factory(root.Docusign.ApiClient, root.Docusign.FileType);
  }
}(this, function(ApiClient, FileType) {
  'use strict';


  /**
   * The FileTypeList model module.
   * @module model/FileTypeList
   */

  /**
   * Constructs a new <code>FileTypeList</code>.
   * @alias module:model/FileTypeList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FileTypeList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileTypeList} obj Optional instance to populate.
   * @return {module:model/FileTypeList} The populated <code>FileTypeList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fileTypes')) {
        obj['fileTypes'] = ApiClient.convertToType(data['fileTypes'], [FileType]);
      }
    }
    return obj;
  }

  /**
   * A collection of file types.
   * @member {Array.<module:model/FileType>} fileTypes
   */
  exports.prototype['fileTypes'] = undefined;



  return exports;
}));


