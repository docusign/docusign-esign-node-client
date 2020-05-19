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
    define(['ApiClient', 'model/FormDataItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FormDataItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientFormData = factory(root.Docusign.ApiClient, root.Docusign.FormDataItem);
  }
}(this, function(ApiClient, FormDataItem) {
  'use strict';


  /**
   * The RecipientFormData model module.
   * @module model/RecipientFormData
   */

  /**
   * Constructs a new <code>RecipientFormData</code>.
   * @alias module:model/RecipientFormData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientFormData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientFormData} obj Optional instance to populate.
   * @return {module:model/RecipientFormData} The populated <code>RecipientFormData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DeclinedTime')) {
        obj['DeclinedTime'] = ApiClient.convertToType(data['DeclinedTime'], 'String');
      }
      if (data.hasOwnProperty('DeliveredTime')) {
        obj['DeliveredTime'] = ApiClient.convertToType(data['DeliveredTime'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('formData')) {
        obj['formData'] = ApiClient.convertToType(data['formData'], [FormDataItem]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('SentTime')) {
        obj['SentTime'] = ApiClient.convertToType(data['SentTime'], 'String');
      }
      if (data.hasOwnProperty('SignedTime')) {
        obj['SignedTime'] = ApiClient.convertToType(data['SignedTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} DeclinedTime
   */
  exports.prototype['DeclinedTime'] = undefined;
  /**
   * 
   * @member {String} DeliveredTime
   */
  exports.prototype['DeliveredTime'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {Array.<module:model/FormDataItem>} formData
   */
  exports.prototype['formData'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * 
   * @member {String} SentTime
   */
  exports.prototype['SentTime'] = undefined;
  /**
   * 
   * @member {String} SignedTime
   */
  exports.prototype['SignedTime'] = undefined;



  return exports;
}));


