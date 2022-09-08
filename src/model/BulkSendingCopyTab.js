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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendingCopyTab = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendingCopyTab model module.
   * @module model/BulkSendingCopyTab
   */

  /**
   * Constructs a new <code>BulkSendingCopyTab</code>.
   * A tab associated with the bulk send recipient. In a bulk send request, each recipient tab must match a recipient tab on the envelope or template that you want to send. To match up, the `tabLabel` for this tab and the `tabLabel` for the corresponding tab on the envelope or template must be the same.  For example, if the envelope has a placeholder text tab with the `tabLabel` `childName`, you must assign the same `tabLabel` `childName` to the tab here that you are populating with that information.
   * @alias module:model/BulkSendingCopyTab
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendingCopyTab</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendingCopyTab} obj Optional instance to populate.
   * @return {module:model/BulkSendingCopyTab} The populated <code>BulkSendingCopyTab</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('initialValue')) {
        obj['initialValue'] = ApiClient.convertToType(data['initialValue'], 'String');
      }
      if (data.hasOwnProperty('tabLabel')) {
        obj['tabLabel'] = ApiClient.convertToType(data['tabLabel'], 'String');
      }
    }
    return obj;
  }

  /**
   * The original value of the tab.
   * @member {String} initialValue
   */
  exports.prototype['initialValue'] = undefined;
  /**
   * The label string associated with the tab.
   * @member {String} tabLabel
   */
  exports.prototype['tabLabel'] = undefined;



  return exports;
}));


