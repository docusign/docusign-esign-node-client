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
    root.Docusign.RecipientTokenClientURLs = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecipientTokenClientURLs model module.
   * @module model/RecipientTokenClientURLs
   */

  /**
   * Constructs a new <code>RecipientTokenClientURLs</code>.
   * @alias module:model/RecipientTokenClientURLs
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientTokenClientURLs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientTokenClientURLs} obj Optional instance to populate.
   * @return {module:model/RecipientTokenClientURLs} The populated <code>RecipientTokenClientURLs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OnAccessCodeFailed')) {
        obj['OnAccessCodeFailed'] = ApiClient.convertToType(data['OnAccessCodeFailed'], 'String');
      }
      if (data.hasOwnProperty('OnCancel')) {
        obj['OnCancel'] = ApiClient.convertToType(data['OnCancel'], 'String');
      }
      if (data.hasOwnProperty('OnDecline')) {
        obj['OnDecline'] = ApiClient.convertToType(data['OnDecline'], 'String');
      }
      if (data.hasOwnProperty('OnException')) {
        obj['OnException'] = ApiClient.convertToType(data['OnException'], 'String');
      }
      if (data.hasOwnProperty('OnFaxPending')) {
        obj['OnFaxPending'] = ApiClient.convertToType(data['OnFaxPending'], 'String');
      }
      if (data.hasOwnProperty('OnIdCheckFailed')) {
        obj['OnIdCheckFailed'] = ApiClient.convertToType(data['OnIdCheckFailed'], 'String');
      }
      if (data.hasOwnProperty('OnSessionTimeout')) {
        obj['OnSessionTimeout'] = ApiClient.convertToType(data['OnSessionTimeout'], 'String');
      }
      if (data.hasOwnProperty('OnSigningComplete')) {
        obj['OnSigningComplete'] = ApiClient.convertToType(data['OnSigningComplete'], 'String');
      }
      if (data.hasOwnProperty('OnTTLExpired')) {
        obj['OnTTLExpired'] = ApiClient.convertToType(data['OnTTLExpired'], 'String');
      }
      if (data.hasOwnProperty('OnViewingComplete')) {
        obj['OnViewingComplete'] = ApiClient.convertToType(data['OnViewingComplete'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} OnAccessCodeFailed
   */
  exports.prototype['OnAccessCodeFailed'] = undefined;
  /**
   * 
   * @member {String} OnCancel
   */
  exports.prototype['OnCancel'] = undefined;
  /**
   * 
   * @member {String} OnDecline
   */
  exports.prototype['OnDecline'] = undefined;
  /**
   * 
   * @member {String} OnException
   */
  exports.prototype['OnException'] = undefined;
  /**
   * 
   * @member {String} OnFaxPending
   */
  exports.prototype['OnFaxPending'] = undefined;
  /**
   * 
   * @member {String} OnIdCheckFailed
   */
  exports.prototype['OnIdCheckFailed'] = undefined;
  /**
   * 
   * @member {String} OnSessionTimeout
   */
  exports.prototype['OnSessionTimeout'] = undefined;
  /**
   * 
   * @member {String} OnSigningComplete
   */
  exports.prototype['OnSigningComplete'] = undefined;
  /**
   * 
   * @member {String} OnTTLExpired
   */
  exports.prototype['OnTTLExpired'] = undefined;
  /**
   * 
   * @member {String} OnViewingComplete
   */
  exports.prototype['OnViewingComplete'] = undefined;



  return exports;
}));


