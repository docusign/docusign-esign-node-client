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

      if (data.hasOwnProperty('onAccessCodeFailed')) {
        obj['onAccessCodeFailed'] = ApiClient.convertToType(data['onAccessCodeFailed'], 'String');
      }
      if (data.hasOwnProperty('onCancel')) {
        obj['onCancel'] = ApiClient.convertToType(data['onCancel'], 'String');
      }
      if (data.hasOwnProperty('onDecline')) {
        obj['onDecline'] = ApiClient.convertToType(data['onDecline'], 'String');
      }
      if (data.hasOwnProperty('onException')) {
        obj['onException'] = ApiClient.convertToType(data['onException'], 'String');
      }
      if (data.hasOwnProperty('onFaxPending')) {
        obj['onFaxPending'] = ApiClient.convertToType(data['onFaxPending'], 'String');
      }
      if (data.hasOwnProperty('onIdCheckFailed')) {
        obj['onIdCheckFailed'] = ApiClient.convertToType(data['onIdCheckFailed'], 'String');
      }
      if (data.hasOwnProperty('onSessionTimeout')) {
        obj['onSessionTimeout'] = ApiClient.convertToType(data['onSessionTimeout'], 'String');
      }
      if (data.hasOwnProperty('onSigningComplete')) {
        obj['onSigningComplete'] = ApiClient.convertToType(data['onSigningComplete'], 'String');
      }
      if (data.hasOwnProperty('onTTLExpired')) {
        obj['onTTLExpired'] = ApiClient.convertToType(data['onTTLExpired'], 'String');
      }
      if (data.hasOwnProperty('onViewingComplete')) {
        obj['onViewingComplete'] = ApiClient.convertToType(data['onViewingComplete'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} onAccessCodeFailed
   */
  exports.prototype['onAccessCodeFailed'] = undefined;
  /**
   * 
   * @member {String} onCancel
   */
  exports.prototype['onCancel'] = undefined;
  /**
   * 
   * @member {String} onDecline
   */
  exports.prototype['onDecline'] = undefined;
  /**
   * 
   * @member {String} onException
   */
  exports.prototype['onException'] = undefined;
  /**
   * 
   * @member {String} onFaxPending
   */
  exports.prototype['onFaxPending'] = undefined;
  /**
   * 
   * @member {String} onIdCheckFailed
   */
  exports.prototype['onIdCheckFailed'] = undefined;
  /**
   * 
   * @member {String} onSessionTimeout
   */
  exports.prototype['onSessionTimeout'] = undefined;
  /**
   * 
   * @member {String} onSigningComplete
   */
  exports.prototype['onSigningComplete'] = undefined;
  /**
   * 
   * @member {String} onTTLExpired
   */
  exports.prototype['onTTLExpired'] = undefined;
  /**
   * 
   * @member {String} onViewingComplete
   */
  exports.prototype['onViewingComplete'] = undefined;



  return exports;
}));


