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
    define(['ApiClient', 'model/Group', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ReportInProductSentByDetails = factory(root.Docusign.ApiClient, root.Docusign.Group, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, Group, UserInfo) {
  'use strict';


  /**
   * The ReportInProductSentByDetails model module.
   * @module model/ReportInProductSentByDetails
   */

  /**
   * Constructs a new <code>ReportInProductSentByDetails</code>.
   * @alias module:model/ReportInProductSentByDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductSentByDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductSentByDetails} obj Optional instance to populate.
   * @return {module:model/ReportInProductSentByDetails} The populated <code>ReportInProductSentByDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserInfo]);
      }
    }
    return obj;
  }

  /**
   * A collection group objects containing information about the groups returned.
   * @member {Array.<module:model/Group>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * 
   * @member {Array.<module:model/UserInfo>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


