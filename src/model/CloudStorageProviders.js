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
    define(['ApiClient', 'model/CloudStorageProvider'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CloudStorageProvider'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CloudStorageProviders = factory(root.Docusign.ApiClient, root.Docusign.CloudStorageProvider);
  }
}(this, function(ApiClient, CloudStorageProvider) {
  'use strict';


  /**
   * The CloudStorageProviders model module.
   * @module model/CloudStorageProviders
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CloudStorageProviders</code>.
   * @alias module:model/CloudStorageProviders
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CloudStorageProviders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudStorageProviders} obj Optional instance to populate.
   * @return {module:model/CloudStorageProviders} The populated <code>CloudStorageProviders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('storageProviders')) {
        obj['storageProviders'] = ApiClient.convertToType(data['storageProviders'], [CloudStorageProvider]);
      }
    }
    return obj;
  }

  /**
   * An Array containing the storage providers associated with the user.
   * @member {Array.<module:model/CloudStorageProvider>} storageProviders
   */
  exports.prototype['storageProviders'] = undefined;



  return exports;
}));


