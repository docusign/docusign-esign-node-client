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
    root.Docusign.LockRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The LockRequest model module.
   * @module model/LockRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LockRequest</code>.
   * @alias module:model/LockRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LockRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LockRequest} obj Optional instance to populate.
   * @return {module:model/LockRequest} The populated <code>LockRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lockDurationInSeconds')) {
        obj['lockDurationInSeconds'] = ApiClient.convertToType(data['lockDurationInSeconds'], 'String');
      }
      if (data.hasOwnProperty('lockedByApp')) {
        obj['lockedByApp'] = ApiClient.convertToType(data['lockedByApp'], 'String');
      }
      if (data.hasOwnProperty('lockType')) {
        obj['lockType'] = ApiClient.convertToType(data['lockType'], 'String');
      }
      if (data.hasOwnProperty('templatePassword')) {
        obj['templatePassword'] = ApiClient.convertToType(data['templatePassword'], 'String');
      }
      if (data.hasOwnProperty('useScratchPad')) {
        obj['useScratchPad'] = ApiClient.convertToType(data['useScratchPad'], 'String');
      }
    }
    return obj;
  }

  /**
   * The number of seconds to lock the envelope for editing.  Must be greater than 0 seconds.
   * @member {String} lockDurationInSeconds
   */
  exports.prototype['lockDurationInSeconds'] = undefined;
  /**
   * A friendly name of the application used to lock the envelope.  Will be used in error messages to the user when lock conflicts occur.
   * @member {String} lockedByApp
   */
  exports.prototype['lockedByApp'] = undefined;
  /**
   * The type of envelope lock.  Currently \"edit\" is the only supported type.
   * @member {String} lockType
   */
  exports.prototype['lockType'] = undefined;
  /**
   * 
   * @member {String} templatePassword
   */
  exports.prototype['templatePassword'] = undefined;
  /**
   * Reserved for future use.  Indicates whether a scratchpad is used for editing information.  
   * @member {String} useScratchPad
   */
  exports.prototype['useScratchPad'] = undefined;



  return exports;
}));


