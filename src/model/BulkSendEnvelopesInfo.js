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
    root.Docusign.BulkSendEnvelopesInfo = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkSendEnvelopesInfo model module.
   * @module model/BulkSendEnvelopesInfo
   */

  /**
   * Constructs a new <code>BulkSendEnvelopesInfo</code>.
   * @alias module:model/BulkSendEnvelopesInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkSendEnvelopesInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSendEnvelopesInfo} obj Optional instance to populate.
   * @return {module:model/BulkSendEnvelopesInfo} The populated <code>BulkSendEnvelopesInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authoritativeCopy')) {
        obj['authoritativeCopy'] = ApiClient.convertToType(data['authoritativeCopy'], 'String');
      }
      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'String');
      }
      if (data.hasOwnProperty('correct')) {
        obj['correct'] = ApiClient.convertToType(data['correct'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('declined')) {
        obj['declined'] = ApiClient.convertToType(data['declined'], 'String');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'String');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'String');
      }
      if (data.hasOwnProperty('digitalSignaturesPending')) {
        obj['digitalSignaturesPending'] = ApiClient.convertToType(data['digitalSignaturesPending'], 'String');
      }
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'String');
      }
      if (data.hasOwnProperty('signed')) {
        obj['signed'] = ApiClient.convertToType(data['signed'], 'String');
      }
      if (data.hasOwnProperty('timedOut')) {
        obj['timedOut'] = ApiClient.convertToType(data['timedOut'], 'String');
      }
      if (data.hasOwnProperty('transferCompleted')) {
        obj['transferCompleted'] = ApiClient.convertToType(data['transferCompleted'], 'String');
      }
      if (data.hasOwnProperty('voided')) {
        obj['voided'] = ApiClient.convertToType(data['voided'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
   * @member {String} authoritativeCopy
   */
  exports.prototype['authoritativeCopy'] = undefined;
  /**
   * 
   * @member {String} completed
   */
  exports.prototype['completed'] = undefined;
  /**
   * 
   * @member {String} correct
   */
  exports.prototype['correct'] = undefined;
  /**
   * 
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * 
   * @member {String} declined
   */
  exports.prototype['declined'] = undefined;
  /**
   * 
   * @member {String} deleted
   */
  exports.prototype['deleted'] = undefined;
  /**
   * 
   * @member {String} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * 
   * @member {String} digitalSignaturesPending
   */
  exports.prototype['digitalSignaturesPending'] = undefined;
  /**
   * 
   * @member {String} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * 
   * @member {String} signed
   */
  exports.prototype['signed'] = undefined;
  /**
   * 
   * @member {String} timedOut
   */
  exports.prototype['timedOut'] = undefined;
  /**
   * 
   * @member {String} transferCompleted
   */
  exports.prototype['transferCompleted'] = undefined;
  /**
   * 
   * @member {String} voided
   */
  exports.prototype['voided'] = undefined;



  return exports;
}));


