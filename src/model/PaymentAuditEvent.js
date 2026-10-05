/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    root.Docusign.PaymentAuditEvent = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PaymentAuditEvent model module.
   * @module model/PaymentAuditEvent
   */

  /**
   * Constructs a new <code>PaymentAuditEvent</code>.
   * @alias module:model/PaymentAuditEvent
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentAuditEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentAuditEvent} obj Optional instance to populate.
   * @return {module:model/PaymentAuditEvent} The populated <code>PaymentAuditEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('actorDisplayName')) {
        obj['actorDisplayName'] = ApiClient.convertToType(data['actorDisplayName'], 'String');
      }
      if (data.hasOwnProperty('eventDescription')) {
        obj['eventDescription'] = ApiClient.convertToType(data['eventDescription'], 'String');
      }
      if (data.hasOwnProperty('eventType')) {
        obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
      }
      if (data.hasOwnProperty('responsibleActor')) {
        obj['responsibleActor'] = ApiClient.convertToType(data['responsibleActor'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * 
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * 
   * @member {String} actorDisplayName
   */
  exports.prototype['actorDisplayName'] = undefined;
  /**
   * 
   * @member {String} eventDescription
   */
  exports.prototype['eventDescription'] = undefined;
  /**
   * 
   * @member {String} eventType
   */
  exports.prototype['eventType'] = undefined;
  /**
   * 
   * @member {String} responsibleActor
   */
  exports.prototype['responsibleActor'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


