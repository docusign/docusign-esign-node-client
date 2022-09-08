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
    define(['ApiClient', 'model/Folder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Folder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FoldersRequest = factory(root.Docusign.ApiClient, root.Docusign.Folder);
  }
}(this, function(ApiClient, Folder) {
  'use strict';


  /**
   * The FoldersRequest model module.
   * @module model/FoldersRequest
   */

  /**
   * Constructs a new <code>FoldersRequest</code>.
   * Information for a folder request.
   * @alias module:model/FoldersRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FoldersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FoldersRequest} obj Optional instance to populate.
   * @return {module:model/FoldersRequest} The populated <code>FoldersRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeIds')) {
        obj['envelopeIds'] = ApiClient.convertToType(data['envelopeIds'], ['String']);
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [Folder]);
      }
      if (data.hasOwnProperty('fromFolderId')) {
        obj['fromFolderId'] = ApiClient.convertToType(data['fromFolderId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} envelopeIds
   */
  exports.prototype['envelopeIds'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Folder>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   *  The folder ID the envelope is being moved from.
   * @member {String} fromFolderId
   */
  exports.prototype['fromFolderId'] = undefined;



  return exports;
}));


