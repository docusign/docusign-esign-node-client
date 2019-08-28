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
    define(['ApiClient', 'model/SigningGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SigningGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SigningGroupInformation = factory(root.Docusign.ApiClient, root.Docusign.SigningGroup);
  }
}(this, function(ApiClient, SigningGroup) {
  'use strict';


  /**
   * The SigningGroupInformation model module.
   * @module model/SigningGroupInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SigningGroupInformation</code>.
   * @alias module:model/SigningGroupInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SigningGroupInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SigningGroupInformation} obj Optional instance to populate.
   * @return {module:model/SigningGroupInformation} The populated <code>SigningGroupInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [SigningGroup]);
      }
    }
    return obj;
  }

  /**
   * A collection group objects containing information about the groups returned.
   * @member {Array.<module:model/SigningGroup>} groups
   */
  exports.prototype['groups'] = undefined;



  return exports;
}));


