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
    define(['ApiClient', 'model/ErrorDetails', 'model/Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.MemberGroupSharedItem = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.Group);
  }
}(this, function(ApiClient, ErrorDetails, Group) {
  'use strict';


  /**
   * The MemberGroupSharedItem model module.
   * @module model/MemberGroupSharedItem
   */

  /**
   * Constructs a new <code>MemberGroupSharedItem</code>.
   * Information about items shared among groups.
   * @alias module:model/MemberGroupSharedItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MemberGroupSharedItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberGroupSharedItem} obj Optional instance to populate.
   * @return {module:model/MemberGroupSharedItem} The populated <code>MemberGroupSharedItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = Group.constructFromObject(data['group']);
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
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
   * The group sharing the item.
   * @member {module:model/Group} group
   */
  exports.prototype['group'] = undefined;
  /**
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;



  return exports;
}));


