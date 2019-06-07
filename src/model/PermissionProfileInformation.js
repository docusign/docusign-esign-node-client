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
    define(['ApiClient', 'model/PermissionProfile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionProfile'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PermissionProfileInformation = factory(root.Docusign.ApiClient, root.Docusign.PermissionProfile);
  }
}(this, function(ApiClient, PermissionProfile) {
  'use strict';


  /**
   * The PermissionProfileInformation model module.
   * @module model/PermissionProfileInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PermissionProfileInformation</code>.
   * @alias module:model/PermissionProfileInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PermissionProfileInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionProfileInformation} obj Optional instance to populate.
   * @return {module:model/PermissionProfileInformation} The populated <code>PermissionProfileInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('permissionProfiles')) {
        obj['permissionProfiles'] = ApiClient.convertToType(data['permissionProfiles'], [PermissionProfile]);
      }
    }
    return obj;
  }

  /**
   * A complex type containing a collection of permission profiles.
   * @member {Array.<module:model/PermissionProfile>} permissionProfiles
   */
  exports.prototype['permissionProfiles'] = undefined;



  return exports;
}));


