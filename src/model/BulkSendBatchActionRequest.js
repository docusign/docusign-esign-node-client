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
    define(['ApiClient', 'model/Notification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Notification'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkSendBatchActionRequest = factory(root.Docusign.ApiClient, root.Docusign.Notification);
  }
}(this, function(ApiClient, Notification) {
  'use strict';


  /**
   * The BulkSendBatchActionRequest model module.
   * @module model/BulkSendBatchActionRequest
   */

  /**
   * Constructs a new <code>BulkSendBatchActionRequest</code>.
   * @alias module:model/BulkSendBatchActionRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendBatchActionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendBatchActionRequest} obj Optional instance to populate.
   * @return {module:model/BulkSendBatchActionRequest} The populated <code>BulkSendBatchActionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = Notification.constructFromObject(data['notification']);
      }
      if (data.hasOwnProperty('voidReason')) {
        obj['voidReason'] = ApiClient.convertToType(data['voidReason'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * 
   * @member {module:model/Notification} notification
   */
  exports.prototype['notification'] = undefined;
  /**
   * 
   * @member {String} voidReason
   */
  exports.prototype['voidReason'] = undefined;



  return exports;
}));


